import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, whatsapp, postcode, radius } = body;

    if (!name || !whatsapp || !postcode || !radius) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const message = [
      "🏗️ *New BuildRadar pilot signup*",
      `👤 ${name}`,
      `📱 ${whatsapp}`,
      `📍 ${postcode.toUpperCase().trim()}`,
      `🗺️ Radius: ${radius} miles`,
      `🕐 ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}`,
    ].join("\n");

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      });
    }

    console.log("Signup:", { name, whatsapp, postcode, radius });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
