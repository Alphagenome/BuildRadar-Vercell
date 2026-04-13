import type { Metadata } from "next";
import Link from "next/link";
import PostcodeLookup from "@/components/PostcodeLookup";

export const metadata: Metadata = {
  title: "How Long Does Planning Permission Take in Wandsworth? (2026 Guide)",
  description:
    "Planning permission in Wandsworth takes 8 weeks for householder applications. 93.5% approval rate. Full timeline, by project type, with common delays explained.",
  openGraph: {
    title: "How Long Does Planning Permission Take in Wandsworth? (2026 Guide)",
    description:
      "Planning permission in Wandsworth takes 8 weeks for householder applications. 93.5% approval rate. Full timeline by project type.",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does planning permission take in Wandsworth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Planning permission in Wandsworth takes 8 weeks for householder applications (extensions, loft conversions, conservatories) and 13 weeks for major developments. Wandsworth decides 91% of applications on time.",
      },
    },
    {
      "@type": "Question",
      name: "How do I check my Wandsworth planning application status?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can check your Wandsworth planning application status on the Wandsworth planning portal at wandsworth.gov.uk/planning. Enter your application reference number or search by address.",
      },
    },
    {
      "@type": "Question",
      name: "What is Wandsworth's planning approval rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wandsworth approves 93.5% of all planning applications, making it one of the most builder-friendly boroughs in London. Rear extensions have a 91.5% approval rate and wraparound extensions have a 95.2% approval rate.",
      },
    },
    {
      "@type": "Question",
      name: "Can I speed up my planning application in Wandsworth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You cannot pay to expedite a standard planning application in Wandsworth. The best way to avoid delays is to submit a complete application with all required documents, talk to your neighbours before submitting, and respond promptly to any officer requests for further information.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my planning application is refused in Wandsworth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your application is refused in Wandsworth, you have two options: resubmit a revised application (free within 12 months of refusal) or appeal to the Planning Inspectorate (free but takes 6-12 months). Resubmission is usually faster and more successful.",
      },
    },
  ],
};

const stages = [
  {
    stage: "1. Submission",
    what: "You apply via the Planning Portal",
    how_long: "1 day",
    tip: "Use the Planning Portal online — not email. Paper applications cause validation delays.",
  },
  {
    stage: "2. Validation",
    what: "Council checks your application is complete",
    how_long: "1–2 weeks",
    tip: "Have all documents ready before submitting. Missing info is the #1 cause of delays.",
  },
  {
    stage: "3. Consultation",
    what: "Neighbours notified, can comment for 21 days",
    how_long: "21 days",
    tip: "Talk to your neighbours before you submit. Most objections come from surprises.",
  },
  {
    stage: "4. Assessment",
    what: "Planning officer reviews your application",
    how_long: "2–4 weeks",
    tip: "Respond promptly if the officer requests further information — delays here are in your hands.",
  },
  {
    stage: "5. Decision",
    what: "Approved, refused, or deferred to committee",
    how_long: "1–2 weeks",
    tip: "Most householder applications are decided by the officer, not committee. No hearing required.",
  },
  {
    stage: "6. Post-Decision",
    what: "You receive your decision notice",
    how_long: "Same day",
    tip: "Permission is valid for 3 years. Start building control separately — it's a different process.",
  },
];

const byProject = [
  { type: "Rear extension", timeline: "8–10 weeks", approval: "91.5%", tip: "Oversailing (going past the boundary) is the #1 refusal reason." },
  { type: "Side extension", timeline: "8–11 weeks", approval: "92.9%", tip: "Keep under 50% of the original house width if possible." },
  { type: "Loft conversion", timeline: "8–12 weeks", approval: "89.0%", tip: "Check permitted development first — you may not need full planning." },
  { type: "Wraparound extension", timeline: "10–13 weeks", approval: "95.2%", tip: "Highest approval rate in Wandsworth — good odds if well designed." },
  { type: "Basement conversion", timeline: "13–20 weeks", approval: "~50%", tip: "Get a pre-application meeting. Flood risk assessment is essential." },
  { type: "Dormer", timeline: "8–12 weeks", approval: "86.6%", tip: "Height is the main issue — keep it proportional to the roofline." },
];

export default function PlanningTimelinePage() {
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
          <span className="text-white">Planning Timeline</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-8 pb-10">
        <div className="inline-block bg-[#F0B429]/10 border border-[#F0B429]/30 text-[#F0B429] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          Wandsworth Planning — 2026 Guide
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          How Long Does Planning Permission Take in Wandsworth?
        </h1>
        <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
          Planning permission in Wandsworth takes <strong className="text-white">8 weeks</strong> for householder applications — extensions, loft conversions, conservatories — and <strong className="text-white">13 weeks</strong> for major developments. Wandsworth decides 91% of applications on time, with a{" "}
          <strong className="text-white">93.5% approval rate</strong>.
        </p>

        {/* Key stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { stat: "8 weeks", label: "Householder apps" },
            { stat: "93.5%", label: "Approval rate" },
            { stat: "91%", label: "Decided on time" },
          ].map((item) => (
            <div key={item.stat} className="bg-[#0F2440] border border-white/10 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#F0B429]">{item.stat}</p>
              <p className="text-xs text-[#94A3B8] mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6 Stages */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-6">The 6 Stages of a Wandsworth Planning Application</h2>
        <div className="space-y-3">
          {stages.map((s, i) => (
            <div key={i} className="bg-[#0F2440] border border-white/10 rounded-xl p-5">
              <div className="flex justify-between items-start gap-4 mb-2">
                <p className="font-semibold text-white">{s.stage}</p>
                <span className="shrink-0 text-xs font-semibold text-[#F0B429] bg-[#F0B429]/10 border border-[#F0B429]/20 px-3 py-1 rounded-full">
                  {s.how_long}
                </span>
              </div>
              <p className="text-[#94A3B8] text-sm mb-2">{s.what}</p>
              <p className="text-xs text-[#10B981]">Tip: {s.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* By project type */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-2">Timeline by Project Type</h2>
        <p className="text-[#94A3B8] text-sm mb-6">Based on 26,261 planning decisions in Wandsworth since 2020.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 pr-6 text-[#94A3B8] font-medium">Project type</th>
                <th className="text-left py-3 pr-6 text-[#94A3B8] font-medium">Typical timeline</th>
                <th className="text-left py-3 pr-6 text-[#94A3B8] font-medium">Approval rate</th>
                <th className="text-left py-3 text-[#94A3B8] font-medium">Top tip</th>
              </tr>
            </thead>
            <tbody>
              {byProject.map((row) => (
                <tr key={row.type} className="border-b border-white/5">
                  <td className="py-3 pr-6 font-medium text-white">{row.type}</td>
                  <td className="py-3 pr-6 text-[#94A3B8]">{row.timeline}</td>
                  <td className="py-3 pr-6">
                    <span className="text-[#10B981] font-semibold">{row.approval}</span>
                  </td>
                  <td className="py-3 text-[#94A3B8] text-xs">{row.tip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Common delays */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-6">Common Delays — and How to Avoid Them</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { cause: "Missing documents", fix: "Check the validation checklist before submitting. Missing info adds 1–2 weeks minimum." },
            { cause: "Neighbour objections", fix: "Speak to neighbours before submitting. Most objections come from surprises, not the plans themselves." },
            { cause: "Boundary disputes", fix: "Confirm your boundary with a surveyor before drawing up plans. Party wall issues can stall everything." },
            { cause: "Officer workload", fix: "January and September are the busiest periods. Submitting in March or October tends to be faster." },
            { cause: "Plan changes mid-review", fix: "Get your design right before submitting. Changes during the process trigger re-consultation and reset the clock." },
          ].map((item) => (
            <div key={item.cause} className="bg-[#0F2440] border border-white/10 rounded-xl p-5">
              <p className="text-white font-semibold text-sm mb-1">{item.cause}</p>
              <p className="text-[#94A3B8] text-sm">{item.fix}</p>
            </div>
          ))}
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
            { href: "/wandsworth/extensions", label: "Extension planning permission →" },
            { href: "/wandsworth/loft-conversions", label: "Loft conversion guide →" },
            { href: "/wandsworth/planning-refused", label: "Application refused? What next →" },
            { href: "/wandsworth/planning-search", label: "Search live planning applications →" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-[#0F2440] border border-white/10 rounded-xl px-5 py-4 text-sm text-[#94A3B8] hover:text-white hover:border-[#F0B429]/40 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
