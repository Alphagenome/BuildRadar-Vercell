const steps = [
  {
    number: "01",
    title: "A development trigger fires near you",
    description:
      "Every week, homeowners across the UK receive project authorisation for building work — full house refurbs, kitchen and bathroom jobs, extensions, loft conversions. Most builders never hear about it.",
  },
  {
    number: "02",
    title: "Our intelligence finds it and sends it to your WhatsApp",
    description:
      "BuildRadar monitors thousands of development authorisations across the UK, filters for real building work within your area, and sends you a WhatsApp message before the homeowner has Googled anyone.",
  },
  {
    number: "03",
    title: "Claim the verified opportunity in one tap",
    description:
      "Tap to claim and we send you the full address. Tap to skip and we move on. No dashboards, no logins. Just verified opportunities on your phone.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-[#0F2440]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-4 uppercase tracking-tight text-white">
          How it works
        </h2>
        <p className="text-[#94A3B8] text-center mb-14 text-lg">
          No Checkatrade. No bidding wars. No sharing verified opportunities with 10 strangers.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <div className="text-5xl font-black text-[#F0B429] opacity-60">{step.number}</div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">{step.title}</h3>
              <p className="text-[#94A3B8] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
