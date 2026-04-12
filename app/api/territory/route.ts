import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

type Territory = {
  name: string;
  postcodes: string[];
  maxSpots: number;
  claimed: number;
  builders: { name: string; postcode: string }[];
};

/** Load territories from static JSON (used as seed / fallback) */
function loadStaticTerritories(): Territory[] {
  try {
    const path = join(process.cwd(), "data", "territories.json");
    const raw = readFileSync(path, "utf-8");
    return JSON.parse(raw).territories;
  } catch {
    return [];
  }
}

/** Get territories from Redis (live state) or fall back to static JSON */
async function getTerritories(): Promise<Territory[]> {
  try {
    const cached = await redis.get<Territory[]>("territories");
    if (cached && cached.length > 0) return cached;
  } catch {
    // Redis unavailable — fall back to static
  }
  return loadStaticTerritories();
}

function findTerritory(postcode: string, territories: Territory[]): Territory | null {
  const district = postcode.trim().toUpperCase().replace(/\s+.*$/, ""); // e.g. "SW11"
  return territories.find(t =>
    t.postcodes.some(p => district.startsWith(p))
  ) ?? null;
}

export async function POST(req: NextRequest) {
  try {
    const { postcode } = await req.json();
    if (!postcode) return NextResponse.json({ error: "Missing postcode" }, { status: 400 });

    const territories = await getTerritories();
    const territory = findTerritory(postcode, territories);

    if (!territory) {
      return NextResponse.json({ available: true, area: null, spots: null });
    }

    const spotsLeft = territory.maxSpots - territory.claimed;

    if (spotsLeft <= 0) {
      // Notify Clem via Telegram
      const botToken = process.env.TELEGRAM_BOT_TOKEN;
      const chatId = process.env.TELEGRAM_CHAT_ID;
      if (botToken && chatId) {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: `🔴 *Territory Full — Waitlist Signup*\n📍 Area: ${territory.name}\n📮 Postcode: ${postcode.toUpperCase()}\n👉 Handle exclusive onboarding pitch.`,
            parse_mode: "Markdown",
          }),
        });
      }

      return NextResponse.json({
        available: false,
        area: territory.name,
        spots: 0,
        redirect: "/waitlist",
      });
    }

    return NextResponse.json({
      available: true,
      area: territory.name,
      spots: spotsLeft,
    });
  } catch (err) {
    console.error("Territory check error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
