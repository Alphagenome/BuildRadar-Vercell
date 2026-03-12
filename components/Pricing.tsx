const tiers = [
  {
    name: "Starter",
    price: "£49",
    description: "Founding member rate — locked in forever",
    badge: "FOUNDING MEMBER",
    badgeColor: "bg-amber-400 text-amber-900",
    cardStyle: "bg-white text-gray-900 border-2 border-amber-300",
    features: [
      "Weekly leads in your radius",
      "Address + job type",
      "Max 3 landscapers per lead",
      "Claim or skip via WhatsApp",
      "Learns your preferences",
      "Pause any time",
    ],
    cta: "Claim your spot",
    ctaStyle: "bg-green-700 text-white hover:bg-green-800",
  },
  {
    name: "Pro",
    price: "£99",
    description: "Most popular",
    badge: "MOST POPULAR",
    badgeColor: "bg-green-600 text-white",
    cardStyle: "bg-gray-900 text-white border-2 border-gray-900",
    features: [
      "Everything in Starter",
      "Registered owner name included",
      "Pre-written letter template",
      "Priority position in your area",
      "Multi-area add-ons (£29/mo each)",
    ],
    cta: "Reserve your area",
    ctaStyle: "bg-white text-gray-900 hover:bg-gray-100",
  },
  {
    name: "Premium",
    price: "£149",
    description: "Maximum edge",
    badge: null,
    badgeColor: "",
    cardStyle: "bg-white text-gray-900 border-2 border-gray-200",
    features: [
      "Everything in Pro",
      "Enriched contact details attempt",
      "First contact window (24hr head start)",
      "Dedicated area exclusivity",
    ],
    cta: "Reserve your area",
    ctaStyle: "border-2 border-gray-900 text-gray-900 hover:bg-gray-50",
  },
];

export default function Pricing() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Simple, honest pricing</h2>
        <p className="text-gray-400 mb-12 text-lg">
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
              <p className="text-sm font-semibold uppercase tracking-wide opacity-60 mt-2">{tier.name}</p>
              <div className="text-4xl font-black mt-1">
                {tier.price}
                <span className="text-lg font-normal opacity-50">/mo</span>
              </div>
              <p className="text-sm opacity-50 mt-1 mb-6">{tier.description}</p>
              <ul className="space-y-3 text-sm text-left mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#signup"
                className={`block w-full font-bold py-3 rounded-xl text-center transition-colors ${tier.ctaStyle}`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-10">
          One job at £800 pays for 16 months of Starter. Most landscapers win 2-3 jobs per month.
        </p>
      </div>
    </section>
  );
}
