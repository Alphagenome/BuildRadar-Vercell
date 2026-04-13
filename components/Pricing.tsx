const tiers = [
  {
    name: "Starter",
    price: "£49",
    description: "Founding member rate — locked in forever",
    badge: "FOUNDING MEMBER",
    badgeColor: "bg-amber-400 text-amber-900",
    cardStyle: "bg-[#1B3A5C] text-white border-2 border-white/10",
    features: [
      "Weekly Data Drop — verified opportunities in your radius",
      "Address + job type",
      "Max 3 builders per lead",
      "Claim or skip via WhatsApp",
      "Learns your preferences",
      "Pause any time",
    ],
    cta: "Claim your spot",
    ctaStyle: "button-claim",
  },
  {
    name: "Pro",
    price: "£99",
    description: "Most popular",
    badge: "MOST POPULAR",
    badgeColor: "bg-[#F0B429] text-white",
    cardStyle: "bg-[#0F2440] text-white border-2 border-[#F0B429]/40",
    features: [
      "Everything in Starter",
      "Registered owner name included",
      "Pre-written letter template",
      "Priority position in your area",
      "Multi-area add-ons (£29/mo each)",
    ],
    cta: "Reserve your area",
    ctaStyle: "button-claim",
  },
  {
    name: "Premium",
    price: "£149",
    description: "Maximum edge",
    badge: null,
    badgeColor: "",
    cardStyle: "bg-[#1B3A5C] text-white border-2 border-white/10",
    features: [
      "Everything in Pro",
      "Enriched contact details attempt",
      "First contact window (24hr head start)",
      "Dedicated area exclusivity",
    ],
    cta: "Reserve your area",
    ctaStyle: "button-claim",
  },
];

export default function Pricing() {
  return (
    <section className="py-20 px-6 bg-[#0F2440]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-black mb-4 uppercase tracking-tight text-white">
          Simple, honest pricing
        </h2>
        <p className="text-[#94A3B8] mb-12 text-lg">
          No hidden fees. No pay-per-lead. Cancel any time.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl p-8 relative ${tier.cardStyle}`}>
              {tier.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full ${tier.badgeColor}`}>
                  {tier.badge}
                </div>
              )}
              <p className="text-xs font-bold uppercase tracking-widest text-[#94A3B8] mt-2">{tier.name}</p>
              <div className="text-4xl font-black mt-1 text-white">
                {tier.price}
                <span className="text-lg font-normal text-[#94A3B8]">/mo</span>
              </div>
              <p className="text-sm text-[#94A3B8] mt-1 mb-6">{tier.description}</p>
              <ul className="space-y-3 text-sm text-left mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2 text-[#94A3B8]">
                    <span className="text-[#10B981] flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#signup"
                className={`block w-full py-3 rounded-xl text-center ${tier.ctaStyle}`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-[#94A3B8] text-sm mt-10">
          One job at £800 pays for 16 months of Starter. Most builders win 2–3 jobs per month.
        </p>
      </div>
    </section>
  );
}
