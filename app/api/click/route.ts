import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id") ?? "unknown";
  const dest = req.nextUrl.searchParams.get("dest") ?? "https://buildradar.co.uk";

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // ── Persist to KV ────────────────────────────────────────────────────────
  const at = new Date().toISOString().slice(0, 16).replace("T", " ");
  const kvKey = `track:${Date.now()}`;
  redis.set(kvKey, { tid: id, event: "clicked", at }).catch(() => {});

  if (botToken && chatId) {
    const ts = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/London",
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "short",
    });

    // Derive label from dest
    let label = "link";
    const tradeMatch = dest.match(/\/get-leads\/([a-z_-]+)/);
    if (tradeMatch) label = `🎯 Get-leads page (${tradeMatch[1]})`;
    else if (dest.includes("/claim")) label = "🏷️ Claim button";
    else if (dest.includes("/#signup")) label = "📝 Signup CTA";
    else if (dest.includes("buildradar.co.uk")) label = "🌐 Landing page";

    const message = `🖱️ *Email link clicked*\n\n📬 Contact: \`${id}\`\n${label}\n🕐 ${ts}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    }).catch(() => {});
  }

  // Redirect to final destination
  return NextResponse.redirect(dest);
}
