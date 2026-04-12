// Trade configuration — add a new entry here to support any new trade.
// Zero code changes needed anywhere else.

export interface SampleLead {
  jobType: string
  area: string
  estValue: string
  status: string
  detail: string
}

export interface TradeConfig {
  slug: string
  displayName: string        // "Builder" / "Roofer" etc.
  pluralName: string         // "builders" / "roofers"
  headline: string
  subline: string
  stat: string               // "49 opportunities this week"
  statBreakdown: string[]    // ["12 loft conversions", "18 extensions"]
  sampleLeads: SampleLead[]
  whyItMatters: string[]     // 3 bullet points
  ctaText: string
  areaLabel: string          // "SW11 — Wandsworth"
  urgency: string            // "1 builder slot left in SW11"
}

const CONFIGS: Record<string, TradeConfig> = {
  builder: {
    slug: "builder",
    displayName: "Builder",
    pluralName: "builders",
    headline: "Jobs approved in your area this week — before homeowners start searching",
    subline: "We monitor council planning data across 32 London boroughs. The moment a homeowner gets project authorisation, you know about it.",
    stat: "49 build opportunities this week",
    statBreakdown: ["18 rear extensions", "12 loft conversions", "19 refurb projects"],
    sampleLeads: [
      { jobType: "Rear extension — authorised", area: "SW11 — Northcote Road Area", estValue: "£25,000 — £50,000", status: "Homeowner not yet searching", detail: "Planning ref received. No builder contacted." },
      { jobType: "Loft conversion — authorised", area: "SW12 — Balham Area", estValue: "£40,000 — £70,000", status: "Homeowner not yet searching", detail: "Full plans approved. Works not yet tendered." },
      { jobType: "Single storey side extension", area: "SW4 — Clapham Area", estValue: "£20,000 — £35,000", status: "Homeowner not yet searching", detail: "Permission granted this week." },
    ],
    whyItMatters: [
      "No competition — you arrive before homeowners open Google",
      "No platform fees — no 3% commission, no auction pricing",
      "Verified data — council-approved jobs only, no noise",
    ],
    ctaText: "Claim your builder slot",
    areaLabel: "SW11 — Wandsworth",
    urgency: "Max 3 builders per area",
  },

  roofer: {
    slug: "roofer",
    displayName: "Roofer",
    pluralName: "roofers",
    headline: "Loft conversions approved this week — before they call anyone",
    subline: "Every approved loft conversion needs a roofer. We tell you the address the moment planning permission is granted — before homeowners start asking around.",
    stat: "12 loft conversions this week",
    statBreakdown: ["8 full loft conversions", "3 dormer extensions", "1 mansard"],
    sampleLeads: [
      { jobType: "Loft conversion — authorised", area: "SW17 — Tooting Area", estValue: "£8,000 — £25,000", status: "Homeowner not yet searching", detail: "Planning approved. Roofing work not yet quoted." },
      { jobType: "Dormer extension — authorised", area: "SW12 — Balham Area", estValue: "£12,000 — £30,000", status: "Homeowner not yet searching", detail: "Permission granted this week." },
      { jobType: "Rear extension — roof works needed", area: "SW11 — Battersea Area", estValue: "£5,000 — £15,000", status: "Homeowner not yet searching", detail: "Extension approved — flat roof and valley works included." },
    ],
    whyItMatters: [
      "Every loft conversion needs a roofer — you're there first",
      "Verified approvals only — no speculative or rejected applications",
      "Weekly delivery — fresh leads every Friday morning",
    ],
    ctaText: "Claim your roofer slot",
    areaLabel: "SW17 — Wandsworth",
    urgency: "Max 3 roofers per area",
  },

  landscaper: {
    slug: "landscaper",
    displayName: "Landscaper",
    pluralName: "landscapers",
    headline: "Garden rooms and outbuildings approved this week — not yet quoted",
    subline: "Council-approved garden rooms, outbuildings, and new builds come with landscaping work attached. We find them the moment permission is granted.",
    stat: "19 garden and outdoor projects this week",
    statBreakdown: ["8 garden rooms", "6 rear extensions with outdoor works", "5 new builds"],
    sampleLeads: [
      { jobType: "Garden room — authorised", area: "SW12 — Balham Area", estValue: "£15,000 — £40,000", status: "Homeowner not yet searching", detail: "Permission granted. Landscaping not yet quoted." },
      { jobType: "Rear extension — garden works needed", area: "SW11 — Clapham Area", estValue: "£8,000 — £20,000", status: "Homeowner not yet searching", detail: "Extension approved — rear garden reinstatement required." },
      { jobType: "Outbuilding — authorised", area: "SW4 — Clapham South Area", estValue: "£10,000 — £25,000", status: "Homeowner not yet searching", detail: "New outbuilding approved. Access and planting works needed." },
    ],
    whyItMatters: [
      "Planning permission = confirmed budget — not just a wishlist",
      "Arrive before they find someone on Instagram or Checkatrade",
      "One Friday lead can pay for months of subscription",
    ],
    ctaText: "Claim your landscaper slot",
    areaLabel: "SW12 — Wandsworth",
    urgency: "Max 3 landscapers per area",
  },

  window_door: {
    slug: "window_door",
    displayName: "Window & Door Installer",
    pluralName: "window and door installers",
    headline: "Extensions approved this week — glazing not yet quoted",
    subline: "Every rear extension and loft conversion needs new windows and doors. We tell you the address as soon as planning permission is granted.",
    stat: "18 extensions needing glazing this week",
    statBreakdown: ["12 rear extensions", "4 loft conversions", "2 side extensions"],
    sampleLeads: [
      { jobType: "Rear extension — glazing needed", area: "SW11 — Clapham Area", estValue: "£5,000 — £20,000", status: "Homeowner not yet searching", detail: "Extension approved. Bifold doors and roof lights required." },
      { jobType: "Loft conversion — Velux and dormers", area: "SW17 — Tooting Area", estValue: "£3,000 — £12,000", status: "Homeowner not yet searching", detail: "Full loft conversion — 3 Velux windows plus dormer glazing." },
      { jobType: "Side extension — new windows", area: "SW12 — Balham Area", estValue: "£4,000 — £15,000", status: "Homeowner not yet searching", detail: "Single storey side extension approved this week." },
    ],
    whyItMatters: [
      "Extensions always need glazing — you quote before anyone else",
      "No Checkatrade fees, no 3-quote auctions",
      "Council data is public — we just get there first for you",
    ],
    ctaText: "Claim your installer slot",
    areaLabel: "SW11 — Wandsworth",
    urgency: "Max 3 installers per area",
  },

  architect: {
    slug: "architect",
    displayName: "Architect",
    pluralName: "architects",
    headline: "Project authorisations issued this week — drawings not yet commissioned",
    subline: "Homeowners with planning permission often need structural drawings, building regs packages, and site supervision before work can start. We find them before they brief anyone.",
    stat: "11 projects needing technical sign-off this week",
    statBreakdown: ["5 residential extensions", "3 loft conversions", "2 change of use", "1 new dwelling"],
    sampleLeads: [
      { jobType: "Residential extension — authorised", area: "SW15 — Putney Area", estValue: "£30,000 — £80,000", status: "Homeowner not yet searching", detail: "Planning granted. Building regs drawings not yet commissioned." },
      { jobType: "Loft conversion — full plans approved", area: "SW19 — Wimbledon Area", estValue: "£40,000 — £90,000", status: "Homeowner not yet searching", detail: "Permission in. Structural calcs and party wall not started." },
      { jobType: "Change of use — commercial to residential", area: "SW18 — Wandsworth Town Area", estValue: "£60,000 — £150,000", status: "Homeowner not yet searching", detail: "Approved. Full technical package required." },
    ],
    whyItMatters: [
      "Every granted application is a potential client at the exact right moment",
      "Most homeowners don't know they still need an architect after planning — you arrive first",
      "One conversion pays for a year of subscription",
    ],
    ctaText: "Claim your architect slot",
    areaLabel: "SW15 — Wandsworth",
    urgency: "Max 3 architects per area",
  },

  // ── Future trades — add here to support without any other code changes ──

  plumber: {
    slug: "plumber",
    displayName: "Plumber",
    pluralName: "plumbers",
    headline: "Kitchen and bathroom approvals this week — not yet quoted",
    subline: "New builds, extensions, and loft conversions all need plumbing work. We find the projects the moment planning is granted.",
    stat: "14 projects needing plumbing this week",
    statBreakdown: ["6 new bathrooms", "5 kitchen extensions", "3 new builds"],
    sampleLeads: [
      { jobType: "Rear extension — kitchen and utility", area: "SW11 — Clapham Area", estValue: "£8,000 — £20,000", status: "Homeowner not yet searching", detail: "Extension approved. Full plumbing fit-out required." },
      { jobType: "Loft conversion — en-suite needed", area: "SW12 — Balham Area", estValue: "£5,000 — £15,000", status: "Homeowner not yet searching", detail: "Conversion approved. En-suite and heating extension required." },
      { jobType: "New build — full plumbing", area: "SW17 — Tooting Area", estValue: "£15,000 — £35,000", status: "Homeowner not yet searching", detail: "Planning granted. First fix and second fix required." },
    ],
    whyItMatters: [
      "Every extension and conversion needs a plumber — you're there before they search",
      "No platform fees — no Checkatrade commission",
      "Verified council data — real projects, confirmed budget",
    ],
    ctaText: "Claim your plumber slot",
    areaLabel: "SW11 — Wandsworth",
    urgency: "Max 3 plumbers per area",
  },

  electrician: {
    slug: "electrician",
    displayName: "Electrician",
    pluralName: "electricians",
    headline: "Extensions and new builds approved this week — rewire not yet quoted",
    subline: "Every extension, loft conversion, and new build needs electrical work. We find the projects before homeowners open Google.",
    stat: "22 projects needing electrical work this week",
    statBreakdown: ["12 extensions", "7 loft conversions", "3 new builds"],
    sampleLeads: [
      { jobType: "Rear extension — full rewire", area: "SW11 — Battersea Area", estValue: "£4,000 — £12,000", status: "Homeowner not yet searching", detail: "Extension approved. Consumer unit upgrade and lighting required." },
      { jobType: "Loft conversion — electrical fit-out", area: "SW17 — Tooting Area", estValue: "£3,000 — £8,000", status: "Homeowner not yet searching", detail: "Conversion approved. Full first and second fix required." },
      { jobType: "New build — full installation", area: "SW12 — Balham Area", estValue: "£10,000 — £25,000", status: "Homeowner not yet searching", detail: "Planning granted. Full electrical installation from scratch." },
    ],
    whyItMatters: [
      "Every build approval = electrical work — you quote before anyone else",
      "32 London boroughs monitored — scale when you're ready",
      "No auction pricing — one slot per area, you set your price",
    ],
    ctaText: "Claim your electrician slot",
    areaLabel: "SW11 — Wandsworth",
    urgency: "Max 3 electricians per area",
  },
}

// Fallback for unknown trades — generic enough to convert anyone
const FALLBACK_CONFIG: TradeConfig = {
  slug: "trade",
  displayName: "Trade",
  pluralName: "tradespeople",
  headline: "Build opportunities approved this week — before homeowners start searching",
  subline: "We monitor council planning data across 32 London boroughs. The moment a project gets authorisation, you know about it before anyone else.",
  stat: "49 opportunities this week in Wandsworth",
  statBreakdown: ["18 extensions", "12 loft conversions", "19 other projects"],
  sampleLeads: [
    { jobType: "Rear extension — authorised", area: "SW11 — Northcote Road Area", estValue: "£25,000 — £50,000", status: "Homeowner not yet searching", detail: "Planning approved. Trade not yet contacted." },
    { jobType: "Loft conversion — authorised", area: "SW12 — Balham Area", estValue: "£40,000 — £70,000", status: "Homeowner not yet searching", detail: "Full plans approved. Works not yet tendered." },
  ],
  whyItMatters: [
    "Arrive before homeowners open Google or Checkatrade",
    "Verified council data — confirmed budget, no speculation",
    "One job can pay for months of subscription",
  ],
  ctaText: "Claim your area",
  areaLabel: "SW11 — Wandsworth",
  urgency: "Max 3 per trade per area",
}

export function getTradeConfig(trade: string): TradeConfig {
  return CONFIGS[trade.toLowerCase().replace('-', '_')] ?? FALLBACK_CONFIG
}

export function getAllTrades(): string[] {
  return Object.keys(CONFIGS)
}
