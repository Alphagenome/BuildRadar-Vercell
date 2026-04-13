"use client";
import { useState } from "react";
import BrandIcon from "./BrandIcon";

export default function SampleLead() {
  const [showScript, setShowScript] = useState(false);

  return (
    <section id="sample" className="py-20 px-6 bg-[#0F2440]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-black mb-4 uppercase tracking-tight text-white">
          This is what lands on your phone
        </h2>
        <p className="text-[#94A3B8] mb-12 text-lg">
          Real lead. Real address. Southwest London, February 2026.{" "}
          <span className="text-[#F0B429] font-semibold">Hover to reveal.</span>
        </p>

        {/* WhatsApp mockup */}
        <div className="max-w-sm mx-auto bg-[#091628] rounded-3xl p-4 shadow-2xl border border-white/10">
          {/* Phone header */}
          <div className="bg-[#1B3A5C] border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 mb-2">
            <BrandIcon variant="icon" size={32} className="rounded-sm flex-shrink-0" />
            <div className="text-left">
              <div className="text-white font-semibold text-sm">BuildRadar</div>
              <div className="text-[#94A3B8] text-xs">New verified opportunity</div>
            </div>
          </div>

          {/* Message bubble */}
          <div className="lead-card rounded-2xl p-4 text-left">
            <p className="text-xs text-[#94A3B8] mb-3">Today, 7:30am</p>
            <p className="font-semibold text-white mb-3">🏗️ Rear extension — authorised</p>
            <div className="space-y-1 text-sm text-[#94A3B8] mb-4">
              <p className="group cursor-pointer">
                📍{" "}
                <span className="font-medium text-white blur-sm group-hover:blur-none transition-all duration-300 select-none group-hover:select-text">
                  7 Dover House Road SW15 5AA
                </span>
              </p>
              <p>📅 Authorised 18 Feb — work likely Apr+</p>
              <p>🗺️ 0.8 miles from you</p>
              <p>🔖 Intel ID: <span className="text-[#F0B429] font-mono">BR26-0847-SW15</span></p>
            </div>
            <p className="text-xs text-[#94A3B8] mb-3">
              You are 1 of 3 builders notified.
            </p>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <button className="button-claim text-sm py-2 rounded-xl">
                ✅ Claim
              </button>
              <button className="bg-white/10 text-[#94A3B8] text-sm font-semibold py-2 rounded-xl hover:bg-white/20 transition-colors">
                ⏭️ Skip
              </button>
            </div>

            {/* Show Script toggle */}
            <button
              onClick={() => setShowScript(!showScript)}
              className="w-full text-xs font-bold text-[#F0B429] border border-[#F0B429]/30 rounded-xl py-2 hover:bg-[#F0B429]/10 transition-colors uppercase tracking-widest"
            >
              {showScript ? "▲ Hide script" : "📋 Show door-knock script"}
            </button>
          </div>

          {/* Script panel */}
          {showScript && (
            <div className="mt-2 bg-[#1B3A5C] border border-[#F0B429]/20 rounded-2xl p-4 text-left">
              <p className="text-xs font-bold text-[#F0B429] uppercase tracking-widest mb-3">
                Your first 10 seconds at the door
              </p>
              <p className="text-sm text-white leading-relaxed italic mb-3">
                &ldquo;Good morning — I&apos;m [name] from [company]. Your planning approval for the rear extension came through recently — I specialise in exactly this type of work locally and wanted to introduce myself before you start getting quotes. Mind if I leave you my card?&rdquo;
              </p>
              <p className="text-xs text-[#94A3B8]">
                Goal: book the site visit. Not win the job at the door.
              </p>
              <p className="text-xs text-[#10B981] font-semibold mt-2">
                ✓ Full letter template + objection handlers included in your Conversion Kit.
              </p>
            </div>
          )}
        </div>

        <p className="text-[#94A3B8] text-sm mt-8 uppercase tracking-widest">
          Every Friday · Straight to WhatsApp · Conversion Kit included
        </p>
      </div>
    </section>
  );
}
