import type { Metadata } from "next";
import Link from "next/link";
import PostcodeLookup from "@/components/PostcodeLookup";

export const metadata: Metadata = {
  title: "Extension Planning Permission in Wandsworth — Rear, Side & Wraparound (2026)",
  description:
    "Wandsworth approves 92–95% of extension applications. Rear, side, and wraparound guide with real data, permitted development rules, and costs.",
  openGraph: {
    title: "Extension Planning Permission in Wandsworth — Rear, Side & Wraparound (2026)",
    description:
      "Wandsworth approves 92–95% of extension applications. Costs, permitted development rules, and what gets refused.",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need planning permission for a rear extension in Wandsworth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. Under permitted development rights, a single-storey rear extension up to 4m (detached) or 3m (semi/terrace) deep does not need planning permission. Larger extensions, two-storey extensions, or properties in conservation areas do require full planning permission.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a rear extension cost in Wandsworth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A single-storey rear extension in Wandsworth typically costs £30,000–£70,000 depending on size and finish. A double-storey rear extension costs £70,000–£120,000. These figures include build cost but not architect fees, planning application fees, or building control.",
      },
    },
    {
      "@type": "Question",
      name: "What is the approval rate for extensions in Wandsworth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wandsworth approves 91.5% of rear extension applications, 92.9% of side extensions, and 95.2% of wraparound extensions. These are among the highest approval rates in London.",
      },
    },
    {
      "@type": "Question",
      name: "Can I build a side extension in Wandsworth under permitted development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Single-storey side extensions can sometimes be built under permitted development if they are less than half the width of the original house, no more than 4m high, and do not front a highway. However, many Wandsworth properties are in Article 4 areas which remove these rights — always check before building without planning permission.",
      },
    },
    {
      "@type": "Question",
      name: "Why do extensions get refused in Wandsworth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common reasons for extension refusals in Wandsworth are: oversailing the boundary, excessive loss of daylight to neighbours, overdevelopment of the plot, design out of character with the area, and proximity to conservation area guidelines. A good architect familiar with Wandsworth's local plan reduces refusal risk significantly.",
      },
    },
  ],
};

const extensionTypes = [
  {
    type: "Rear extension (single-storey)",
    count: "4,284 since 2020",
    approval: "91.5%",
    pd: "Up to 4m deep (detached) / 3m (semi/terrace) — no planning needed",
    cost: "£30,000–£70,000",
    watch: "Oversailing boundary is the #1 refusal reason",
  },
  {
    type: "Side extension / side return",
    count: "2,479 since 2020",
    approval: "92.9%",
    pd: "Permitted if under 50% of original width — check Article 4",
    cost: "£25,000–£55,000",
    watch: "Many Victorian terraces in Wandsworth are in Article 4 — PD rights removed",
  },
  {
    type: "Wraparound extension",
    count: "Included in totals",
    approval: "95.2%",
    pd: "Always needs full planning permission",
    cost: "£60,000–£120,000",
    watch: "Highest approval rate — well-designed wraparounds almost always pass",
  },
  {
    type: "Double-storey rear extension",
    count: "Included in totals",
    approval: "~88%",
    pd: "Always needs full planning permission",
    cost: "£70,000–£130,000",
    watch: "Overlooking neighbours and loss of daylight are the key risks",
  },
];

export default function ExtensionsPage() {
  return (
    <main className="min-h-screen bg-[#1B3A5C] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-6 pt-6">
        <nav className="text-xs text-[#94A3B8] flex gap-2">
          <Link href="/wandsworth" className="hover:text-white transition-colors">Wandsworth Planning</Link>
          <span>/</span>
          <span className="text-white">Extensions</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-8 pb-10">
        <div className="inline-block bg-[#F0B429]/10 border border-[#F0B429]/30 text-[#F0B429] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          Wandsworth Extensions — 2026 Guide
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          Extension Planning Permission in Wandsworth
        </h1>
        <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
          Wandsworth approves <strong className="text-white">92–95%</strong> of extension applications. Rear extensions are the most common project type with 4,284 applications since 2020 — and a 91.5% approval rate. Here&apos;s exactly what you need to know before you start.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { stat: "4,284", label: "Rear extensions since 2020" },
            { stat: "91.5%", label: "Rear extension approval" },
            { stat: "95.2%", label: "Wraparound approval" },
          ].map((item) => (
            <div key={item.stat} className="bg-[#0F2440] border border-white/10 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#F0B429]">{item.stat}</p>
              <p className="text-xs text-[#94A3B8] mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Permitted development first */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-3">Do You Need Planning Permission?</h2>
        <p className="text-[#94A3B8] mb-6">
          Many extensions in Wandsworth can be built under <strong className="text-white">permitted development rights</strong> — meaning no planning application required. But there are important exceptions.
        </p>
        <div className="bg-[#0F2440] border border-[#10B981]/20 rounded-xl p-6 mb-4">
          <p className="text-[#10B981] text-xs font-semibold uppercase tracking-widest mb-3">When you DON&apos;T need planning permission</p>
          <ul className="space-y-2 text-sm text-[#94A3B8]">
            <li className="flex gap-2"><span className="text-[#10B981] shrink-0">✓</span> Single-storey rear extension up to 4m deep (detached house) or 3m deep (semi-detached / terrace)</li>
            <li className="flex gap-2"><span className="text-[#10B981] shrink-0">✓</span> Side extension less than half the original house width, single-storey, under 4m high</li>
            <li className="flex gap-2"><span className="text-[#10B981] shrink-0">✓</span> Extension does not front a highway or public footpath</li>
          </ul>
        </div>
        <div className="bg-[#0F2440] border border-white/10 rounded-xl p-6">
          <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-widest mb-3">When you DO need full planning permission</p>
          <ul className="space-y-2 text-sm text-[#94A3B8]">
            <li className="flex gap-2"><span className="text-white/40 shrink-0">→</span> Your property is in a conservation area or Article 4 direction zone</li>
            <li className="flex gap-2"><span className="text-white/40 shrink-0">→</span> Your property is a listed building</li>
            <li className="flex gap-2"><span className="text-white/40 shrink-0">→</span> The extension exceeds the permitted development size limits</li>
            <li className="flex gap-2"><span className="text-white/40 shrink-0">→</span> You want a double-storey or wraparound extension</li>
          </ul>
          <p className="text-xs text-[#F0B429] mt-4">Always check with Wandsworth&apos;s planning team before building without permission — enforcement notices are costly to resolve.</p>
        </div>
      </section>

      {/* Extension types */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-6">Extension Types — Approval Rates & Costs</h2>
        <div className="space-y-4">
          {extensionTypes.map((ext) => (
            <div key={ext.type} className="bg-[#0F2440] border border-white/10 rounded-xl p-5">
              <div className="flex justify-between items-start gap-3 mb-3">
                <h3 className="font-semibold text-white">{ext.type}</h3>
                <span className="shrink-0 text-[#10B981] font-bold text-sm">{ext.approval}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 text-xs text-[#94A3B8]">
                <div><span className="text-white/40">Applications: </span>{ext.count}</div>
                <div><span className="text-white/40">Cost range: </span>{ext.cost}</div>
                <div><span className="text-white/40">Permitted dev: </span>{ext.pd}</div>
                <div><span className="text-[#F0B429]">Watch: </span>{ext.watch}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conservation areas */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-4">Conservation Areas in Wandsworth</h2>
        <p className="text-[#94A3B8] mb-4">
          Wandsworth has over 30 conservation areas — including parts of Battersea, Clapham, and Wandsworth town centre. If your property is in one, permitted development rights are often removed under Article 4 directions, meaning <strong className="text-white">everything needs planning permission</strong>.
        </p>
        <div className="bg-[#0F2440] border border-[#F0B429]/20 rounded-xl p-5">
          <p className="text-[#F0B429] text-sm font-semibold mb-2">How to check</p>
          <p className="text-[#94A3B8] text-sm">Search your address on the Wandsworth planning portal or use the Magic Map system at magic.defra.gov.uk. If you&apos;re unsure, a pre-application enquiry to Wandsworth costs £130 and gives you written confirmation.</p>
        </div>
      </section>

      {/* Postcode lookup */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <PostcodeLookup />
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((item) => (
            <details key={item.name} className="bg-[#0F2440] border border-white/10 rounded-xl p-5 group">
              <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                {item.name}
                <span className="text-[#F0B429] text-lg ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-[#94A3B8] text-sm mt-3 leading-relaxed">{item.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Internal links */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-lg font-bold mb-4">More Wandsworth Planning Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { href: "/wandsworth/planning-timeline", label: "How long does planning take? →" },
            { href: "/wandsworth/loft-conversions", label: "Loft conversion guide →" },
            { href: "/wandsworth/planning-refused", label: "Application refused? What next →" },
            { href: "/wandsworth/planning-search", label: "Search live planning applications →" },
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
