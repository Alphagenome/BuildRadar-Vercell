import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wandsworth Planning Applications — Live Search & New Projects (2026)",
  description:
    "Search live planning applications in Wandsworth. New builds, extensions, loft conversions filed this week. Free 5-lead sample for tradespeople.",
  openGraph: {
    title: "Wandsworth Planning Applications — Live Search & New Projects (2026)",
    description:
      "Search live Wandsworth planning applications. Free 5-lead sample for builders, roofers, and landscapers.",
    type: "website",
  },
};

export default function PlanningSearchPage() {
  return (
    <main className="min-h-screen bg-[#1B3A5C] text-white">

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-6 pt-6">
        <nav className="text-xs text-[#94A3B8] flex gap-2">
          <Link href="/wandsworth" className="hover:text-white transition-colors">Wandsworth Planning</Link>
          <span>/</span>
          <span className="text-white">Planning Search</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-8 pb-10">
        <div className="inline-block bg-[#F0B429]/10 border border-[#F0B429]/30 text-[#F0B429] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          Live Planning Intelligence — Wandsworth
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          Wandsworth Planning Applications — Search & Track
        </h1>
        <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
          We track every new planning application filed in Wandsworth — extensions, loft conversions, new builds, and more. <strong className="text-white">Builders, roofers, and landscapers</strong> use BuildRadar to find work before homeowners start searching for anyone.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { stat: "49/wk", label: "New applications in Wandsworth" },
            { stat: "93.5%", label: "Wandsworth approval rate" },
            { stat: "Free", label: "5-lead sample for trades" },
          ].map((item) => (
            <div key={item.stat} className="bg-[#0F2440] border border-white/10 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-[#F0B429]">{item.stat}</p>
              <p className="text-xs text-[#94A3B8] mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works for builders */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-6">How BuildRadar Works for Tradespeople</h2>
        <div className="space-y-3">
          {[
            {
              step: "1",
              title: "We scrape every new planning application",
              desc: "BuildRadar monitors Wandsworth's planning portal daily and captures every new application filed — with address, project type, and current status.",
            },
            {
              step: "2",
              title: "AI classifies by trade",
              desc: "Each application is classified by the work required: builder, roofer, landscaper, window installer, architect. You only see leads relevant to your trade.",
            },
            {
              step: "3",
              title: "You receive verified leads for your area",
              desc: "Leads include the full address and project details. You buy only what you need — no subscription, no waste. £5 per cold lead.",
            },
            {
              step: "4",
              title: "Contact the homeowner before anyone else",
              desc: "Planning applications are filed before work starts. You're reaching homeowners 8–12 weeks before they start searching for builders.",
            },
          ].map((item) => (
            <div key={item.step} className="bg-[#0F2440] border border-white/10 rounded-xl p-5 flex gap-4">
              <div className="shrink-0 w-8 h-8 bg-[#F0B429] rounded-lg flex items-center justify-center text-white font-black text-sm">
                {item.step}
              </div>
              <div>
                <p className="font-semibold text-white mb-1">{item.title}</p>
                <p className="text-[#94A3B8] text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trade types */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-4">Trades We Cover in Wandsworth</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { trade: "Builders", note: "Extensions, renovations, new builds" },
            { trade: "Roofers", note: "Loft conversions, re-roofing, dormers" },
            { trade: "Landscapers", note: "Garden works, hard landscaping" },
            { trade: "Window installers", note: "New windows, door replacements" },
            { trade: "Structural engineers", note: "RSJ, load-bearing wall removal" },
            { trade: "Architects", note: "Design and planning drawings" },
          ].map((item) => (
            <div key={item.trade} className="bg-[#0F2440] border border-white/10 rounded-xl p-4">
              <p className="font-semibold text-white text-sm">{item.trade}</p>
              <p className="text-[#94A3B8] text-xs mt-1">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Signup CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="bg-[#0F2440] border border-[#F0B429]/30 rounded-xl p-8 text-center">
          <p className="text-[#F0B429] text-xs font-semibold uppercase tracking-widest mb-3">Free trial — no card required</p>
          <h2 className="text-2xl font-bold mb-3">Get 5 Free Leads for Your Trade in Wandsworth</h2>
          <p className="text-[#94A3B8] mb-6">
            Tell us your trade and postcode. We&apos;ll send you 5 real planning applications from your area — free. See the quality before you buy anything.
          </p>
          <form
            action="https://formspree.io/f/mpqowrzj"
            method="POST"
            className="flex flex-col gap-3 max-w-md mx-auto"
          >
            <input type="hidden" name="source" value="wandsworth-planning-search-builder-cta" />
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#F0B429]"
            />
            <input
              name="trade"
              type="text"
              required
              placeholder="Your trade (e.g. Builder, Roofer)"
              className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#F0B429]"
            />
            <input
              name="postcode"
              type="text"
              required
              placeholder="Your postcode (e.g. SW11)"
              className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#F0B429]"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#F0B429]"
            />
            <button type="submit" className="button-claim px-6 py-3 rounded-lg text-sm">
              Send me 5 free leads
            </button>
          </form>
          <p className="text-[#94A3B8] text-xs mt-3">No subscription. Pay only for the leads you want. £5 per lead.</p>
        </div>
      </section>

      {/* Areas covered */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-4">Areas Covered in Wandsworth</h2>
        <div className="flex flex-wrap gap-2">
          {["SW11 (Battersea)", "SW12 (Balham)", "SW18 (Wandsworth)", "SW15 (Putney)", "SW17 (Tooting)", "SW4 (Clapham)", "SW8 (South Lambeth)", "SW13 (Barnes)"].map((area) => (
            <span key={area} className="bg-[#0F2440] border border-white/10 text-[#94A3B8] text-xs px-3 py-1.5 rounded-full">
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* Internal links */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-lg font-bold mb-4">More Wandsworth Planning Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { href: "/wandsworth/planning-timeline", label: "How long does planning take? →" },
            { href: "/wandsworth/extensions", label: "Extension planning permission →" },
            { href: "/wandsworth/loft-conversions", label: "Loft conversion guide →" },
            { href: "/wandsworth/planning-refused", label: "Application refused? What next →" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="bg-[#0F2440] border border-white/10 rounded-xl px-5 py-4 text-sm text-[#94A3B8] hover:text-white hover:border-[#F0B429]/40 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
