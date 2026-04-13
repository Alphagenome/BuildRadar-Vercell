import type { Metadata } from "next";
import Link from "next/link";
import PostcodeLookup from "@/components/PostcodeLookup";

export const metadata: Metadata = {
  title: "Wandsworth Planning Applications — Track, Timeline & Local Builders (2026)",
  description:
    "Track any Wandsworth planning application. 93.5% approval rate, 49 new applications per week. Guides for extensions, loft conversions, and what to do if refused.",
  openGraph: {
    title: "Wandsworth Planning Applications — Track, Timeline & Local Builders (2026)",
    description:
      "Track any Wandsworth planning application. 93.5% approval rate, 49 new applications per week.",
    type: "website",
  },
};

const guides = [
  {
    href: "/wandsworth/planning-timeline",
    title: "Planning Timeline",
    desc: "How long does planning permission take? 8-week process explained by project type.",
    stat: "8 weeks avg",
  },
  {
    href: "/wandsworth/extensions",
    title: "Extension Planning",
    desc: "Rear, side, and wraparound extensions. Permitted development rules and approval rates.",
    stat: "92–95% approved",
  },
  {
    href: "/wandsworth/loft-conversions",
    title: "Loft Conversions",
    desc: "Do you need planning permission? Types, costs, and Victorian terrace considerations.",
    stat: "89% approved",
  },
  {
    href: "/wandsworth/planning-refused",
    title: "Application Refused",
    desc: "What to do if your application is refused. Appeal vs resubmit, top refusal reasons.",
    stat: "6.5% refusal rate",
  },
  {
    href: "/wandsworth/planning-search",
    title: "Planning Search",
    desc: "Search live applications. Builders: get 5 free leads for your trade in Wandsworth.",
    stat: "49 new apps/week",
  },
];

export default function WandsworthHubPage() {
  return (
    <main className="min-h-screen bg-[#1B3A5C] text-white">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-10 pb-10">
        <div className="inline-block bg-[#F0B429]/10 border border-[#F0B429]/30 text-[#F0B429] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          Wandsworth Planning Intelligence
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          Wandsworth Planning Applications — Track, Timeline & Local Builders
        </h1>
        <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
          Everything you need to know about planning permission in Wandsworth. From first application to decision — with real data from 26,261 planning decisions since 2020.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { stat: "93.5%", label: "Approval rate" },
            { stat: "26,261", label: "Decisions since 2020" },
            { stat: "49/wk", label: "New applications" },
            { stat: "8 weeks", label: "Typical timeline" },
          ].map((item) => (
            <div key={item.stat} className="bg-[#0F2440] border border-white/10 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-[#F0B429]">{item.stat}</p>
              <p className="text-xs text-[#94A3B8] mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Postcode lookup */}
        <PostcodeLookup />
      </section>

      {/* Guide cards */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-6">Wandsworth Planning Guides</h2>
        <div className="space-y-3">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="block bg-[#0F2440] border border-white/10 rounded-xl p-5 hover:border-[#F0B429]/40 transition-colors group"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="font-semibold text-white group-hover:text-[#F0B429] transition-colors mb-1">
                    {guide.title}
                  </p>
                  <p className="text-[#94A3B8] text-sm">{guide.desc}</p>
                </div>
                <span className="shrink-0 text-xs font-semibold text-[#F0B429] bg-[#F0B429]/10 border border-[#F0B429]/20 px-3 py-1 rounded-full whitespace-nowrap">
                  {guide.stat}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Wandsworth planning */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-4">About Wandsworth Planning</h2>
        <div className="space-y-4 text-[#94A3B8] text-sm leading-relaxed">
          <p>
            Wandsworth is one of London&apos;s most active planning boroughs, with approximately <strong className="text-white">49 new planning applications filed every week</strong>. The borough covers Battersea, Clapham, Wandsworth, Balham, Tooting, Putney, and Barnes — a dense mix of Victorian terraces, Edwardian semis, and modern developments.
          </p>
          <p>
            Wandsworth approves <strong className="text-white">93.5% of all planning applications</strong>, with a particular strength in householder extensions and loft conversions. The planning department decides 91% of applications within the statutory 8-week period.
          </p>
          <p>
            The borough has over 30 conservation areas, including much of Battersea, Clapham Old Town, and Wandsworth town centre. Properties in these areas face additional restrictions — Article 4 directions often remove permitted development rights, meaning more projects require full planning permission.
          </p>
        </div>
      </section>

      {/* Builder CTA strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-[#0F2440] border border-[#F0B429]/20 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div>
            <p className="font-semibold text-white mb-1">Are you a builder or tradesperson in Wandsworth?</p>
            <p className="text-[#94A3B8] text-sm">Get 5 free leads — planning applications for your trade, in your area, this week.</p>
          </div>
          <Link
            href="/wandsworth/planning-search"
            className="button-claim px-6 py-3 rounded-lg text-sm shrink-0"
          >
            Get free leads
          </Link>
        </div>
      </section>
    </main>
  );
}
