import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { readFileSync } from "fs";
import { join } from "path";

const redis = Redis.fromEnv();

type Territory = {
  name: string;
  postcodes: string[];
  maxSpots: number;
  claimed: number;
  builders: { name: string; postcode: string }[];
};

/** Load territories from Redis (live) or fall back to static JSON */
async function getTerritories(): Promise<Territory[]> {
  try {
    const cached = await redis.get<Territory[]>("territories");
    if (cached && cached.length > 0) return cached;
  } catch {
    // Redis unavailable — fall back to static
  }
  try {
    const path = join(process.cwd(), "data", "territories.json");
    const raw = readFileSync(path, "utf-8");
    return JSON.parse(raw).territories;
  } catch {
    return [];
  }
}

/** Find which territory a postcode district belongs to */
function findTerritory(postcode: string, territories: Territory[]): Territory | null {
  const district = postcode.trim().toUpperCase().replace(/\s+.*$/, "");
  return territories.find(t =>
    t.postcodes.some(p => district.startsWith(p))
  ) ?? null;
}

/** Seed Redis with territories if not already set (one-time bootstrap) */
async function seedTerritoriesIfNeeded(): Promise<void> {
  try {
    const existing = await redis.get<Territory[]>("territories");
    if (existing && existing.length > 0) return; // Already seeded
    const path = join(process.cwd(), "data", "territories.json");
    const raw = readFileSync(path, "utf-8");
    const territories = JSON.parse(raw).territories;
    await redis.set("territories", territories);
    console.log("[/api/signup] Territories seeded to Redis from static JSON");
  } catch {
    // Non-critical — territory update will be skipped
  }
}

export async function POST(req: NextRequest) {
  const LOG_PREFIX = "[/api/signup]";
  console.log(`${LOG_PREFIX} POST received`);

  try {
    const body = await req.json();
    const { name, whatsapp, postcode, trade, utm_source, utm_medium, utm_campaign } = body;

    // Capture verification signals
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || null;
    const userAgent = req.headers.get("user-agent") || null;
    const referer = req.headers.get("referer") || utm_source || null;
    const isUKNumber = whatsapp?.startsWith("+44") || whatsapp?.startsWith("07");
    const isBot = !userAgent || /bot|crawler|spider|crawling/i.test(userAgent);
    const isSuspicious = isBot || (!isUKNumber && Boolean(whatsapp));

    console.log(`${LOG_PREFIX} INPUT: name=${name} whatsapp=${whatsapp} postcode=${postcode} trade=${trade} source=${referer} ip=${ip} suspicious=${isSuspicious}`);

    if (!name || !whatsapp || !postcode) {
      console.warn(`${LOG_PREFIX} REJECTED: missing fields`);
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const signupRecord = {
      name,
      whatsapp,
      postcode: postcode.toUpperCase().trim(),
      trade: trade || null,
      signed_up_at: new Date().toISOString(),
      source: referer,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      ip,
      user_agent: userAgent,
      is_suspicious: isSuspicious,
    };

    // ── Persist to Vercel KV ─────────────────────────────────────────────────
    const kvKey = `signup:${Date.now()}`;
    try {
      await redis.set(kvKey, signupRecord);
      console.log(`${LOG_PREFIX} KV write OK: ${kvKey}`);
    } catch (kvErr) {
      console.error(`${LOG_PREFIX} KV write FAILED:`, kvErr);
    }

    // ── Update territory in Redis ────────────────────────────────────────────
    if (!isSuspicious) {
      try {
        await seedTerritoriesIfNeeded();
        const territories = await getTerritories();
        const territory = findTerritory(signupRecord.postcode, territories);

        if (territory) {
          const spotsLeft = territory.maxSpots - territory.claimed;
          if (spotsLeft > 0) {
            territory.claimed += 1;
            territory.builders.push({
              name: signupRecord.name,
              postcode: signupRecord.postcode,
            });
            await redis.set("territories", territories);
            console.log(`${LOG_PREFIX} Territory updated: ${territory.name} now ${territory.claimed}/${territory.maxSpots} claimed`);
          } else {
            console.warn(`${LOG_PREFIX} Territory ${territory.name} is FULL — builder added without territory update`);
          }
        } else {
          console.log(`${LOG_PREFIX} No matching territory for postcode ${signupRecord.postcode} — skipped update`);
        }
      } catch (terrErr) {
        console.error(`${LOG_PREFIX} Territory update FAILED:`, terrErr);
        // Don't block signup — territory state is nice-to-have
      }
    }

    // ── Queue WhatsApp confirmation for the builder ──────────────────────────
    const waMessage = [
      `Hi ${name} 👋 You're in.`,
      ``,
      `Your first BuildRadar data drop lands this Friday at 7:30am — verified opportunities in your area, your trade only.`,
      ``,
      `In the meantime, here's your Conversion Kit — the door-knock script, objection handlers, and follow-up template:`,
      `https://buildradar.co.uk/toolkit`,
      `Password: founding2026`,
      ``,
      `— Clem, BuildRadar`,
    ].join("\n");

    const waPendingKey = `wa_pending:${Date.now()}`;
    try {
      await redis.set(waPendingKey, {
        to: whatsapp,
        message: waMessage,
        builder_name: name,
        queued_at: new Date().toISOString(),
      });
      console.log(`${LOG_PREFIX} WA queue write OK: ${waPendingKey}`);
    } catch (waErr) {
      console.error(`${LOG_PREFIX} WA queue write FAILED:`, waErr);
    }

    // ── Telegram notification ────────────────────────────────────────────────
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const suspiciousFlag = isSuspicious ? `\n⚠️ *SUSPICIOUS* — ${!isUKNumber ? "non-UK number" : ""}${isBot ? "bot UA" : ""}` : "";
    const message = [
      "🏗️ *New BuildRadar pilot signup*",
      `👤 ${name}`,
      `🔨 ${trade || "trade not specified"}`,
      `📱 ${whatsapp}${!isUKNumber ? " ⚠️ non-UK" : ""}`,
      `📍 ${signupRecord.postcode}`,
      `🔗 ${referer || "direct / unknown"}`,
      `🕐 ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}`,
      suspiciousFlag,
      ``,
      `📤 *WhatsApp confirmation queued* — run send-wa-confirmations.py or forward manually:`,
      "\`\`\`",
      waMessage,
      "\`\`\`",
    ].filter(Boolean).join("\n");

    if (botToken && chatId) {
      const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: "Markdown" }),
      });
      console.log(`${LOG_PREFIX} Telegram: HTTP ${tgRes.status}`);
    } else {
      console.warn(`${LOG_PREFIX} Telegram: env vars missing — skipped`);
    }

    console.log(`${LOG_PREFIX} OUTPUT: success`);
    return NextResponse.json({ success: true });

  } catch (err) {
    console.error(`${LOG_PREFIX} ERROR:`, err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
