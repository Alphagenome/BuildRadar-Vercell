import type { Metadata } from "next";
import Link from "next/link";
import PostcodeLookup from "@/components/PostcodeLookup";

export const metadata: Metadata = {
  title: "Loft Conversion Planning Permission in Wandsworth — 2026 Guide",
  description:
    "Loft conversions in Wandsworth have an 89% approval rate. Do you need planning permission? Costs, types, and Wandsworth-specific rules explained.",
  openGraph: {
    title: "Loft Conversion Planning Permission in Wandsworth — 2026 Guide",
    description:
      "Loft conversions in Wandsworth have an 89% approval rate. Planning permission rules, costs, and common refusal reasons.",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need planning permission for a loft conversion in Wandsworth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. Many loft conversions qualify as permitted development, meaning no planning permission is needed. You can add up to 40 cubic metres (terraced house) or 50 cubic metres (detached/semi) of new roof space without planning permission, as long as you don't alter the roofline from the front and meet other permitted development criteria.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a loft conversion cost in Wandsworth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A basic loft conversion (Velux/rooflight) in Wandsworth costs £25,000–£45,000. A dormer conversion costs £40,000–£70,000. A mansard conversion (most common in Wandsworth Victorian terraces) costs £60,000–£90,000. Hip-to-gable conversions typically cost £45,000–£75,000.",
      },
    },
    {
      "@type": "Question",
      name: "What is the approval rate for loft conversions in Wandsworth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wandsworth approves 89% of loft conversion planning applications. This is slightly lower than extensions due to roof height and design considerations, but still among the better approval rates in London.",
      },
    },
    {
      "@type": "Question",
      name: "What type of loft conversion is best for a Wandsworth Victorian terrace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Victorian terraces in Wandsworth, a rear dormer or mansard conversion is most common. Rear dormers are simpler and cheaper. Mansard conversions (vertical rear wall with shallow pitched roof) provide more headroom and floor space but cost more and always need planning permission.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need party wall agreement for a loft conversion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if your loft conversion involves any structural work to a shared wall (party wall), you need to serve party wall notices on your neighbours at least 2 months before work starts. This is separate from planning permission and applies even if your conversion is permitted development.",
      },
    },
  ],
};

const conversionTypes = [
  {
    type: "Velux / rooflight",
    needs_planning: "Usually no",
    cost: "£25,000–£45,000",
    space_gain: "Low",
    desc: "Windows set into the existing roofline. Quickest and cheapest. Limited headroom — only works if your roof already has good pitch.",
  },
  {
    type: "Rear dormer",
    needs_planning: "Sometimes — check PD",
    cost: "£40,000–£70,000",
    space_gain: "High",
    desc: "Vertical extension at the rear of the roof. The most popular type in Wandsworth. Can usually be done under permitted development if it doesn't face the street.",
  },
  {
    type: "Mansard",
    needs_planning: "Always",
    cost: "£60,000–£90,000",
    space_gain: "Very high",
    desc: "Almost vertical rear wall with shallow pitch. Maximum space. Common in Victorian terraces across SW11/SW12. Always requires full planning permission.",
  },
  {
    type: "Hip-to-gable",
    needs_planning: "Sometimes — check PD",
    cost: "£45,000–£75,000",
    space_gain: "High",
    desc: "Extends the sloping hip end of the roof to create a vertical gable wall. Only works on end-of-terrace or detached properties.",
  },
  {
    type: "Full L-shaped dormer",
    needs_planning: "Always",
    cost: "£65,000–£100,000",
    space_gain: "Maximum",
    desc: "Combines rear dormer with hip-to-gable. Maximises floor space but always needs planning permission and is the most complex build.",
  },
];

export default function LoftConversionsPage() {
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
          <span className="text-white">Loft Conversions</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-8 pb-10">
        <div className="inline-block bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          Wandsworth Loft Conversions — 2026 Guide
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          Loft Conversion Planning Permission in Wandsworth
        </h1>
        <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
          Loft conversions in Wandsworth have an <strong className="text-white">89% planning approval rate</strong>. There have been 2,914 loft conversion applications since 2020 — and many don&apos;t even need planning permission. Here&apos;s what you need to know.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { stat: "2,914", label: "Applications since 2020" },
            { stat: "89%", label: "Approval rate" },
            { stat: "8–12 wks", label: "Typical timeline" },
          ].map((item) => (
            <div key={item.stat} className="bg-[#0F172A] border border-white/10 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-[#FF6B00]">{item.stat}</p>
              <p className="text-xs text-[#94A3B8] mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PD check first */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-4">Do You Need Planning Permission?</h2>
        <div className="bg-[#0F172A] border border-[#10B981]/20 rounded-xl p-6 mb-4">
          <p className="text-[#10B981] text-xs font-semibold uppercase tracking-widest mb-3">Permitted development — no planning needed if:</p>
          <ul className="space-y-2 text-sm text-[#94A3B8]">
            <li className="flex gap-2"><span className="text-[#10B981] shrink-0">✓</span> Volume added is under 40m³ (terraced house) or 50m³ (detached / semi-detached)</li>
            <li className="flex gap-2"><span className="text-[#10B981] shrink-0">✓</span> No part of the addition is higher than the highest point of the existing roof</li>
            <li className="flex gap-2"><span className="text-[#10B981] shrink-0">✓</span> No extension at the front of the house or above a side elevation visible from the highway</li>
            <li className="flex gap-2"><span className="text-[#10B981] shrink-0">✓</span> Materials are similar in appearance to the existing house</li>
          </ul>
        </div>
        <div className="bg-[#0F172A] border border-white/10 rounded-xl p-6">
          <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-widest mb-3">Full planning permission required if:</p>
          <ul className="space-y-2 text-sm text-[#94A3B8]">
            <li className="flex gap-2"><span className="text-white/40 shrink-0">→</span> You&apos;re in a conservation area or Article 4 direction zone</li>
            <li className="flex gap-2"><span className="text-white/40 shrink-0">→</span> Your conversion is a mansard or L-shaped dormer (always needs planning)</li>
            <li className="flex gap-2"><span className="text-white/40 shrink-0">→</span> Volume added exceeds the PD limits above</li>
            <li className="flex gap-2"><span className="text-white/40 shrink-0">→</span> The property is a listed building</li>
          </ul>
          <p className="text-xs text-[#FF6B00] mt-4">When in doubt, get a Lawful Development Certificate from Wandsworth (£258). It&apos;s legal proof that no planning was needed — protects you when you sell.</p>
        </div>
      </section>

      {/* Conversion types */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-6">Types of Loft Conversion</h2>
        <div className="space-y-4">
          {conversionTypes.map((c) => (
            <div key={c.type} className="bg-[#0F172A] border border-white/10 rounded-xl p-5">
              <div className="flex justify-between items-start gap-3 mb-2">
                <h3 className="font-semibold text-white">{c.type}</h3>
                <span className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${c.needs_planning === "Always" ? "bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20" : "bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20"}`}>
                  {c.needs_planning}
                </span>
              </div>
              <p className="text-[#94A3B8] text-sm mb-3">{c.desc}</p>
              <div className="flex gap-6 text-xs">
                <div><span className="text-white/40">Cost: </span><span className="text-white">{c.cost}</span></div>
                <div><span className="text-white/40">Space gain: </span><span className="text-white">{c.space_gain}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Victorian terrace note */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <h2 className="text-xl font-bold mb-4">Victorian Terraces in Wandsworth</h2>
        <p className="text-[#94A3B8] mb-4">
          The majority of loft conversion applications in Wandsworth come from Victorian terraces across Battersea, Clapham, and Balham. These properties have particular planning considerations:
        </p>
        <div className="space-y-3">
          {[
            { point: "Article 4 direction", detail: "Many Victorian terrace streets have Article 4 directions removing permitted development rights. Check before assuming you don't need permission." },
            { point: "Party wall", detail: "Victorian terraces share walls on both sides. You'll need party wall agreements with both neighbours before structural work begins." },
            { point: "Conservation area boundaries", detail: "Parts of SW11, SW12, and SW8 are in conservation areas. Extensions that might normally be permitted development require full planning in these zones." },
            { point: "Roof pitch", detail: "Victorian terraces typically have good roof pitch — most have enough headroom for a useable conversion. Measure your ridge height first (minimum 2.2m at ridge for a worthwhile space)." },
          ].map((item) => (
            <div key={item.point} className="bg-[#0F172A] border border-white/10 rounded-xl p-5">
              <p className="font-semibold text-white text-sm mb-1">{item.point}</p>
              <p className="text-[#94A3B8] text-sm">{item.detail}</p>
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
            { href: "/wandsworth/planning-refused", label: "Application refused? What next →" },
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
