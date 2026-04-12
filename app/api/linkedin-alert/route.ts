import { NextRequest, NextResponse } from "next/server";

// ── Zapier → Telegram LinkedIn Comment Alert ────────────────────────────────
//
// Zapier watches Gmail for LinkedIn notification emails, parses:
//   { name, post_title, comment_preview (optional) }
// and POSTs to this endpoint.
//
// This sends Clem a Telegram message with the commenter's name and a
// ready-to-copy DM template so he can respond in < 2 minutes.
//
// Required env vars:
//   TELEGRAM_BOT_TOKEN  — bot token (already set in Vercel)
//   TELEGRAM_CHAT_ID    — Clem's chat ID (already set in Vercel)
// Optional:
//   LINKEDIN_ALERT_SECRET — shared secret Zapier includes as Bearer token
//                           to reject unauthorised POSTs

const DM_TEMPLATE = (name: string) =>
  `Hi ${name}, saw your comment — thought you'd find this useful. We put together a short report on what care homes actually lose per year from missed enquiries. No catch, just a quick read: https://buildradar.co.uk/enquiry-cost`;

export async function POST(req: NextRequest) {
  // ── Auth check (optional but recommended) ──────────────────────────────
  const secret = process.env.LINKEDIN_ALERT_SECRET;
  if (secret) {
    const auth = req.headers.get("authorization") ?? "";
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  // ── Parse payload ──────────────────────────────────────────────────────
  let body: { name?: string; post_title?: string; comment_preview?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim() || "Someone";
  const post = body.post_title?.trim() || "your post";
  const preview = body.comment_preview?.trim();

  // ── Build Telegram message ─────────────────────────────────────────────
  const lines = [
    `💬 *LinkedIn comment*`,
    ``,
    `*From:* ${name}`,
    `*Post:* "${post}"`,
    preview ? `*Comment:* "${preview}"` : null,
    ``,
    `*Ready to send DM:*`,
    `\`\`\``,
    DM_TEMPLATE(name),
    `\`\`\``,
    ``,
    `_Tap message above to copy, then paste into LinkedIn DM_`,
  ]
    .filter((l) => l !== null)
    .join("\n");

  // ── Send to Telegram ───────────────────────────────────────────────────
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("[linkedin-alert] Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
    return NextResponse.json({ error: "Telegram not configured" }, { status: 500 });
  }

  const tgRes = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines,
        parse_mode: "Markdown",
      }),
    }
  );

  if (!tgRes.ok) {
    const err = await tgRes.text();
    console.error("[linkedin-alert] Telegram error:", err);
    return NextResponse.json({ error: "Telegram send failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
