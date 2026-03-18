// leadsClaimed: hardcoded for demo — wire to API in production
const LEADS_CLAIMED = 2;
const AREA = "WANDSWORTH";

function ScarcityBanner() {
  if (LEADS_CLAIMED >= 3) {
    return (
      <div className="w-full py-2 px-4 text-center text-xs font-bold uppercase tracking-widest text-white bg-[#1A1C1E] border border-white/10">
        {AREA} FULL — JOIN WAITLIST
      </div>
    );
  }
  if (LEADS_CLAIMED >= 2) {
    return (
      <div className="w-full py-2 px-4 text-center text-xs font-bold uppercase tracking-widest text-white bg-[#FF6B00]">
        ⚡ ONLY 1 SPOT REMAINING IN {AREA}
      </div>
    );
  }
  return null;
}

export default function Hero() {
  const spotsLeft = 3 - LEADS_CLAIMED;

  return (
    <>
      <ScarcityBanner />
      <section className="hero-gradient relative text-white px-6 py-24 text-center overflow-hidden">
        {/* Street grid map overlay */}
        <div className="hero-map-grid" />

        {/* Map pin dots */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { top: "20%", left: "15%" },
            { top: "35%", left: "72%" },
            { top: "55%", left: "30%" },
            { top: "25%", left: "55%" },
            { top: "65%", left: "65%" },
            { top: "45%", left: "85%" },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-[#FF6B00] opacity-40"
              style={{ top: pos.top, left: pos.left }}
            />
          ))}
        </div>

        <div className="relative max-w-3xl mx-auto z-10">
          {/* Live spot counter badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
            {AREA}: {LEADS_CLAIMED}/3 SPOTS TAKEN — {spotsLeft} LEFT
          </div>

          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6 uppercase tracking-tight">
            Get the refurb job<br />before they search for anyone
          </h1>

          <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Every week, hundreds of London homeowners receive project authorisation for building work — full refurbs, kitchens, bathrooms, extensions.
            BuildRadar intelligence finds them first and sends the verified opportunity straight to your WhatsApp — before they open Google.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#signup"
              className="button-claim px-8 py-4 rounded-lg text-lg"
            >
              Get the lead + conversion kit — free
            </a>
            <a
              href="#sample"
              className="border-2 border-white/20 text-[#94A3B8] font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white/5 transition-colors uppercase tracking-wide"
            >
              See a sample lead
            </a>
          </div>

          <p className="text-[#94A3B8] text-sm mt-6 uppercase tracking-widest">
            Free for founding builders · Max 3 builders per area · Your postcode, your Data Drop
          </p>
        </div>
      </section>
    </>
  );
}
