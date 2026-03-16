"use client";

export default function SampleLead() {
  return (
    <section id="sample" className="py-20 px-6 bg-[#1A1C1E]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-black mb-4 uppercase tracking-tight text-white">
          This is what lands on your phone
        </h2>
        <p className="text-[#94A3B8] mb-12 text-lg">
          Real lead. Real address. Southwest London, February 2026.{" "}
          <span className="text-[#FF6B00] font-semibold">Hover to reveal.</span>
        </p>

        {/* WhatsApp mockup */}
        <div className="max-w-sm mx-auto bg-[#0F172A] rounded-3xl p-4 shadow-2xl border border-white/10">
          {/* Phone header */}
          <div className="bg-[#1A1C1E] border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-[#FF6B00] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">BR</span>
            </div>
            <div className="text-left">
              <div className="text-white font-semibold text-sm">BuildRadar</div>
              <div className="text-[#94A3B8] text-xs">New lead near you</div>
            </div>
          </div>

          {/* Message bubble — lead-card style */}
          <div className="lead-card rounded-2xl p-4 text-left">
            <p className="text-xs text-[#94A3B8] mb-3">Today, 7:30am</p>
            <p className="font-semibold text-white mb-3">🏗️ New building job near you</p>
            <div className="space-y-1 text-sm text-[#94A3B8] mb-4">
              {/* Hover-to-reveal address */}
              <p className="group cursor-pointer">
                📍{" "}
                <span className="font-medium text-white blur-sm group-hover:blur-none transition-all duration-300 select-none group-hover:select-text">
                  7 Dover House Road SW15 5AA
                </span>
              </p>
              <p>🔨 Full house refurbishment</p>
              <p>📅 Approved 18 Feb — work likely Apr+</p>
              <p>🗺️ 0.8 miles from you</p>
            </div>
            <p className="text-xs text-[#94A3B8] mb-3">
              You are 1 of 3 builders notified.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button className="button-claim text-sm py-2 rounded-xl">
                ✅ Claim
              </button>
              <button className="bg-white/10 text-[#94A3B8] text-sm font-semibold py-2 rounded-xl hover:bg-white/20 transition-colors">
                ⏭️ Skip
              </button>
            </div>
          </div>
        </div>

        <p className="text-[#94A3B8] text-sm mt-8 uppercase tracking-widest">
          Every week · Straight to WhatsApp · No login needed
        </p>
      </div>
    </section>
  );
}
