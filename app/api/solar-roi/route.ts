import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

// ── ROI constants (mirror of scripts/solar_roi.py) ────────────────────────────
const UNIT_RATE = 0.2467;
const SEG_RATE = 0.055;
const SELF_CONSUMPTION = 0.35;
const IRRADIANCE = 850;

const SYSTEM_KWP: Record<string, number> = {
  flat: 3.0,
  house: 4.0,
  detached: 5.0,
};

const SYSTEM_COST_GBP: Record<string, number> = {
  flat: 5500,
  house: 7500,
  detached: 9500,
};

const CO2_KG_PER_KWH = 0.233;

const DISCLAIMER =
  "Estimate based on UK average irradiance (850 kWh/kWp/year). " +
  "Subject to on-site shading and roof orientation verification.";

export type RoiResult = {
  postcode: string;
  property_type: string;
  system_kwp: number;
  system_cost_gbp: number;
  annual_generation_kwh: number;
  self_consumed_kwh: number;
  exported_kwh: number;
  annual_savings_gbp: number;
  monthly_savings_gbp: number;
  savings_25yr_gbp: number;
  payback_years: number;
  co2_offset_kg: number;
  disclaimer: string;
};

function calculateRoi(postcode: string, propertyType: string): RoiResult {
  const systemKwp = SYSTEM_KWP[propertyType];
  const systemCost = SYSTEM_COST_GBP[propertyType];
  const annualGen = IRRADIANCE * systemKwp;
  const selfConsumed = annualGen * SELF_CONSUMPTION;
  const exported = annualGen * (1 - SELF_CONSUMPTION);
  const annualSavings = selfConsumed * UNIT_RATE + exported * SEG_RATE;

  return {
    postcode: postcode.trim().toUpperCase(),
    property_type: propertyType,
    system_kwp: systemKwp,
    system_cost_gbp: systemCost,
    annual_generation_kwh: annualGen,
    self_consumed_kwh: selfConsumed,
    exported_kwh: exported,
    annual_savings_gbp: annualSavings,
    monthly_savings_gbp: annualSavings / 12,
    savings_25yr_gbp: annualSavings * 25,
    payback_years: systemCost / annualSavings,
    co2_offset_kg: annualGen * CO2_KG_PER_KWH,
    disclaimer: DISCLAIMER,
  };
}

export async function POST(req: NextRequest) {
  const LOG = "[/api/solar-roi]";
  try {
    const body = await req.json();
    const { postcode, name, phone, property_type } = body as {
      postcode?: string;
      name?: string;
      phone?: string;
      property_type?: string;
    };

    if (!postcode?.trim()) {
      return NextResponse.json({ error: "Missing postcode" }, { status: 400 });
    }

    const propType = property_type ?? "house";
    if (!SYSTEM_KWP[propType]) {
      return NextResponse.json(
        { error: `property_type must be one of ${Object.keys(SYSTEM_KWP).join(", ")}` },
        { status: 400 }
      );
    }

    const roi = calculateRoi(postcode, propType);
    const isClaim = Boolean(name?.trim() && phone?.trim());

    if (isClaim) {
      const record = {
        postcode: roi.postcode,
        property_type: propType,
        name: (name as string).trim(),
        phone: (phone as string).trim(),
        claimed_at: new Date().toISOString(),
        annual_savings_gbp: roi.annual_savings_gbp,
        payback_years: roi.payback_years,
      };

      try {
        await redis.set(`solar_claim:${Date.now()}`, record, { ex: 86400 * 90 });
        console.log(`${LOG} KV write OK`);
      } catch (err) {
        console.error(`${LOG} KV write FAILED:`, err);
      }

      const token = process.env.TELEGRAM_BOT_TOKEN;
      const chatId = process.env.TELEGRAM_CHAT_ID;
      if (token && chatId) {
        const text = [
          "☀️ *New Solar Homeowner Enquiry — BuildRadar*",
          `👤 ${record.name}`,
          `📱 ${record.phone}`,
          `📍 ${record.postcode} (${propType})`,
          `💰 Est. saving: £${roi.annual_savings_gbp.toFixed(0)}/yr`,
          `⏱️ Payback: ${roi.payback_years.toFixed(1)} yrs`,
          `🕐 ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}`,
        ].join("\n");

        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
        })
          .then((r) => console.log(`${LOG} Telegram HTTP ${r.status}`))
          .catch((e) => console.error(`${LOG} Telegram FAILED:`, e));
      }
    }

    console.log(`${LOG} postcode=${roi.postcode} claim=${isClaim}`);
    return NextResponse.json(roi);
  } catch (err) {
    console.error(`${LOG} ERROR:`, err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
