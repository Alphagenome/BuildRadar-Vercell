import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

// 1×1 transparent GIF
const PIXEL = Buffer.from(
  "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "base64"
);

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id") ?? "unknown";
  const t = req.nextUrl.searchParams.get("t") ?? "";

  const now = new Date();
  const at = now.toISOString().slice(0, 16).replace("T", " ");

  // ── Persist to KV ────────────────────────────────────────────────────────
  const kvKey = `track:${Date.now()}`;
  redis.set(kvKey, { tid: id, event: "opened", at }).catch(() => {});

  // ── Telegram ─────────────────────────────────────────────────────────────
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (botToken && chatId) {
    const ts = now.toLocaleString("en-GB", {
      timeZone: "Europe/London",
      hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short",
    });
    const message = `👁️ *Email opened*\n\n📬 Contact: \`${id}\`\n🕐 ${ts}${t ? `\n🔑 Token: \`${t}\`` : ""}`;
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: "Markdown" }),
    }).catch(() => {});
  }

  return new NextResponse(PIXEL, {
    status: 200,
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      Pragma: "no-cache",
    },
  });
}
