import type { Metadata } from "next";
import Link from "next/link";
import PostcodeLookup from "@/components/PostcodeLookup";

export const metadata: Metadata = {
  title: "Planning Application Refused in Wandsworth? What To Do Next (2026)",
  description:
    "6.5% of Wandsworth planning applications are refused. Here's exactly what to do — appeal vs resubmit, top refusal reasons, and how to improve your chances.",
  openGraph: {
    title: "Planning Application Refused in Wandsworth? What To Do Next (2026)",
    description:
      "6.5% of Wandsworth planning applications are refused. Appeal vs resubmit, top refusal reasons, and how to improve your odds.",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I do if my planning application is refused in Wandsworth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Read the decision notice carefully to understand the specific reasons for refusal. Then decide whether to resubmit a revised application (free within 12 months, usually quicker) or appeal to the Planning Inspectorate (also free, but takes 6-12 months). For most householder applications, resubmission is the better route.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a planning appeal take in Wandsworth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Planning appeals in Wandsworth typically take 6-12 months. Written representation appeals (the most common type for householder applications) take around 24 weeks. Hearing appeals take 30-36 weeks. Inquiry appeals (major developments) can take 12 months or more.",
      },
    },
    {
      "@type": "Question",
      name: "Is it better to resubmit or appeal a refused planning application in Wandsworth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most householder applications (extensions, loft conversions), resubmission is better. It's faster (8 weeks vs 6-12 months for an appeal), free within 12 months of refusal, and success rates are higher when you address the specific reasons for refusal. Appeal is worth considering if you believe the decision was wrong in principle, not just the design details.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most common reasons planning applications are refused in Wandsworth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common refusal reasons in Wandsworth are: overdevelopment of the site, harm to the character and appearance of the area, loss of daylight or sunlight to neighbouring properties, overlooking and loss of privacy, and the proposal being contrary to the Wandsworth Local Plan policies.",
      },
    },
  ],
};

const refusalReasons = [
  { reason: "Overdevelopment of the site", freq: "Very common", fix: "Reduce footprint or height. Review how much of the garden you're covering." },
  { reason: "Harm to character and appearance", freq: "Very common", fix: "Match materials and design to the existing property and street. An architect familiar with Wandsworth's design guides helps." },
  { reason: "Loss of daylight to neighbours", freq: "Common", fix: "Commission a BRE daylight/sunlight assessment. Adjusting roof pitch or setback often resolves this." },
  { reason: "Overlooking / loss of privacy", freq: "Common", fix: "Reposition or obscure-glaze windows facing neighbours' gardens. The 45-degree rule is a useful guide." },
  { reason: "Conservation area policy", freq: "Common in SW11/SW12/SW18", fix: "Submit a Design and Access Statement showing how the proposal respects the conservation area character." },
  { reason: "Contrary to Wandsworth Local Plan", freq: "Technical", fix: "Read the specific policy cited and address it directly in a revised Design and Access Statement." },
];

export default function PlanningRefusedPage() {
  return (
    <main className="min-h-screen bg-[#1A1C1E] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-6 pt-6">
        <nav className="text-xs text-[#94A3B8] flex gap-2">
          <Link href="/wandsworth" className="hover:text-white transition-colors">Wandsworth Planning</Link>
          <span>/</span>
          <span className="text-white">Application Refused</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-8 pb-10">
        <div className="inline-block bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          Wandsworth Planning Refusals — 2026
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          Planning Application Refused in Wandsworth?
        </h1>
        <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
          <strong className="text-white">6.5% of Wandsworth planning applications are refused</strong>. If yours is one of them, you have two routes — resubmit or appeal. Most householder applications are better served by resubmission. Here&apos;s exactly what to do next.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { stat: "6.5%", label: "Wandsworth refusal rate" },
            { stat: "Free", label: "Resubmit within 12 months" },
            { stat: "8 weeks", label: "Resubmission timeline" },
          ].map((item) => (
            <div key={item.stat} className="bg-[#0F172A] border border-white/10 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#FF6B00]">{item.stat}</p>
              <p className="text-xs text-[#94A3B8] mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Step 1: Read the decision */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-4">Step 1 — Read Your Decision Notice</h2>
        <p className="text-[#94A3B8] mb-4">
          Your decision notice will list the specific reasons for refusal — usually 1 to 3 numbered reasons. Each one cites a planning policy. <strong className="text-white">This is your roadmap.</strong> Every revision or appeal must address each reason directly.
        </p>
        <div className="bg-[#0F172A] border border-white/10 rounded-xl p-5">
          <p className="text-[#FF6B00] text-sm font-semibold mb-2">What to look for</p>
          <ul className="space-y-2 text-sm text-[#94A3B8]">
            <li className="flex gap-2"><span className="text-white/40">→</span>The policy number cited (e.g. &quot;Policy LP1 of the Wandsworth Local Plan&quot;)</li>
            <li className="flex gap-2"><span className="text-white/40">→</span>The specific harm identified (e.g. &quot;unacceptable loss of daylight to the rear habitable room&quot;)</li>
            <li className="flex gap-2"><span className="text-white/40">→</span>Whether the reason is about design/size (usually fixable by resubmission) or principle (may require appeal)</li>
          </ul>
        </div>
      </section>

      {/* Resubmit vs appeal */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-6">Resubmit or Appeal — Which Is Better?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-[#0F172A] border border-[#10B981]/20 rounded-xl p-5">
            <p className="text-[#10B981] font-semibold mb-3">Resubmission — usually better</p>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li className="flex gap-2"><span className="text-[#10B981]">✓</span> Free within 12 months of refusal</li>
              <li className="flex gap-2"><span className="text-[#10B981]">✓</span> Decided in 8 weeks (same as original)</li>
              <li className="flex gap-2"><span className="text-[#10B981]">✓</span> Higher success rate when reasons are addressed</li>
              <li className="flex gap-2"><span className="text-[#10B981]">✓</span> Can speak to planning officer beforehand</li>
            </ul>
            <p className="text-xs text-[#94A3B8] mt-4">Choose this if the refusal was about design, size, or materials — things you can change.</p>
          </div>
          <div className="bg-[#0F172A] border border-white/10 rounded-xl p-5">
            <p className="text-white font-semibold mb-3">Appeal — sometimes right</p>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li className="flex gap-2"><span className="text-white/40">→</span> Free to submit to Planning Inspectorate</li>
              <li className="flex gap-2"><span className="text-white/40">→</span> Takes 6–12 months (written representation)</li>
              <li className="flex gap-2"><span className="text-white/40">→</span> Success rate: ~35% nationally for householder appeals</li>
              <li className="flex gap-2"><span className="text-white/40">→</span> Inspector decides independently of Wandsworth</li>
            </ul>
            <p className="text-xs text-[#94A3B8] mt-4">Choose this if you believe the council applied policy incorrectly, or similar applications nearby were approved.</p>
          </div>
        </div>
      </section>

      {/* Top refusal reasons */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-6">Top Refusal Reasons in Wandsworth — and How to Fix Them</h2>
        <div className="space-y-3">
          {refusalReasons.map((item) => (
            <div key={item.reason} className="bg-[#0F172A] border border-white/10 rounded-xl p-5">
              <div className="flex justify-between items-start gap-3 mb-2">
                <p className="font-semibold text-white text-sm">{item.reason}</p>
                <span className="shrink-0 text-xs text-[#94A3B8] bg-white/5 border border-white/10 px-2 py-0.5 rounded">{item.freq}</span>
              </div>
              <p className="text-[#94A3B8] text-sm"><span className="text-[#10B981]">Fix: </span>{item.fix}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pre-application tip */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="bg-[#0F172A] border border-[#FF6B00]/20 rounded-xl p-6">
          <p className="text-[#FF6B00] font-semibold mb-2">Before you resubmit — speak to the planning officer</p>
          <p className="text-[#94A3B8] text-sm leading-relaxed">
            Wandsworth offers pre-application advice. For householder applications, this costs £130 and includes written feedback on a revised scheme before you submit. It&apos;s worth it. Knowing the officer will support your revised design before you pay the full application fee (£258 for householder) saves time and money.
          </p>
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
            <details key={item.name} className="bg-[#0F172A] border border-white/10 rounded-xl p-5 group">
              <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                {item.name}
                <span className="text-[#FF6B00] text-lg ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
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
            { href: "/wandsworth/extensions", label: "Extension planning permission →" },
            { href: "/wandsworth/loft-conversions", label: "Loft conversion guide →" },
            { href: "/wandsworth/planning-search", label: "Search live planning applications →" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="bg-[#0F172A] border border-white/10 rounded-xl px-5 py-4 text-sm text-[#94A3B8] hover:text-white hover:border-[#FF6B00]/40 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
