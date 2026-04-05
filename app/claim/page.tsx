"use client";
import { useEffect } from "react";

export default function ClaimPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="min-h-screen bg-[#0F172A] pb-24">

      {/* Sticky 3-step progress bar — always visible */}
      <div className="sticky top-0 z-20 bg-[#0F172A] border-b border-white/10 px-4 py-3">
        <div className="max-w-lg mx-auto flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-widest">
          <div className="flex items-center gap-1.5 text-[#10B981]">
            <span className="w-5 h-5 rounded-full bg-[#10B981] text-black flex items-center justify-center font-black text-[10px]">1</span>
            <span className="hidden sm:inline">Letter today</span>
            <span className="sm:hidden">Letter</span>
          </div>
          <div className="flex-1 h-px bg-[#FF6B00]/30 mx-1" />
          <div className="flex items-center gap-1.5 text-[#FF6B00]">
            <span className="w-5 h-5 rounded-full bg-[#FF6B00] text-black flex items-center justify-center font-black text-[10px]">2</span>
            <span className="hidden sm:inline">Knock Day 3</span>
            <span className="sm:hidden">Knock</span>
          </div>
          <div className="flex-1 h-px bg-white/10 mx-1" />
          <div className="flex items-center gap-1.5 text-[#94A3B8]">
            <span className="w-5 h-5 rounded-full border border-white/20 text-white/40 flex items-center justify-center font-black text-[10px]">3</span>
            <span className="hidden sm:inline">WhatsApp Day 7</span>
            <span className="sm:hidden">Follow up</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-[#1A1C1E] border-b border-white/10 px-4 py-4 flex items-center gap-3">
        <div className="w-8 h-8 bg-[#FF6B00] rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-white font-black text-xs">BR</span>
        </div>
        <div>
          <p className="text-white font-black text-sm uppercase tracking-tight">BuildRadar</p>
          <p className="text-[#94A3B8] text-xs">Conversion Kit — Free Access</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-8 space-y-6">

        {/* Urgency headline */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
            48-hour window — act now
          </div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tight leading-tight mb-3">
            You&apos;ve got the lead.<br />
            Here&apos;s how to win it.
          </h1>
          <p className="text-[#94A3B8] text-sm">
            The homeowner hasn&apos;t searched for anyone yet. The first builder through the door wins.
            Use this script.
          </p>
        </div>

        {/* Three Touch Sequence */}
        <div className="bg-[#1A1C1E] border border-white/10 rounded-2xl p-5">
          <p className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest mb-4">Your 3-Touch Sequence</p>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FF6B00] rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">✉️</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Step 1 — Letter today</p>
                <p className="text-[#94A3B8] text-xs">Print the template. Post it today. It warms the door.</p>
              </div>
            </div>
            <div className="border-l-2 border-[#FF6B00]/20 ml-5 h-4" />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FF6B00] rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">🚪</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Step 2 — Knock on Day 3</p>
                <p className="text-[#94A3B8] text-xs">Use the script below. Goal: book the site visit.</p>
              </div>
            </div>
            <div className="border-l-2 border-[#FF6B00]/20 ml-5 h-4" />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FF6B00]/20 border border-[#FF6B00]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">📱</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Step 3 — WhatsApp on Day 7</p>
                <p className="text-[#94A3B8] text-xs">One polite follow-up. Then move on. Three touches is professional. Four is pressure.</p>
              </div>
            </div>
          </div>
        </div>

        {/* First 10 Seconds — Donna's rule: MASSIVE */}
        <div>
          <p className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest mb-3">
            Step 2 — First 10 Seconds at the Door
          </p>
          <div className="bg-[#1A1C1E] border-l-4 border-[#FF6B00] rounded-2xl p-5">
            <p className="text-white font-black text-4xl leading-tight mb-4">
              &ldquo;Hi, sorry to disturb you—&rdquo;
            </p>
            <p className="text-white text-xl leading-snug">
              &ldquo;my name&apos;s <span className="text-[#FF6B00] font-bold">[YOUR NAME]</span>, I&apos;m a local builder.
              I dropped a letter through your door a few days ago about your planning approval.
              Did you happen to see it?&rdquo;
            </p>
          </div>
          <p className="text-[#94A3B8] text-xs mt-2 px-1">
            Stand back slightly. Smile. Don&apos;t look rushed. You are there to help, not to sell.
          </p>
        </div>

        {/* They ask: how did you know? */}
        <div className="bg-[#1A1C1E] border border-white/10 rounded-2xl p-4">
          <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-3">
            If they ask: &ldquo;How did you know about our planning?&rdquo;
          </p>
          <p className="text-white text-lg leading-snug font-medium">
            &ldquo;I use a local building intelligence service that monitors approved applications —
            it helps me find homeowners I can genuinely help before they start searching online.&rdquo;
          </p>
          <p className="text-[#94A3B8] text-xs mt-3">
            This is honest, professional, and positions you as resourceful — not intrusive.
          </p>
        </div>

        {/* You're already in */}
        <div className="bg-[#1A1C1E] border border-[#10B981]/30 rounded-2xl p-5 text-center">
          <div className="text-3xl mb-3">✅</div>
          <p className="text-[#10B981] font-black text-lg uppercase tracking-tight mb-2">
            You&apos;re already in
          </p>
          <p className="text-[#94A3B8] text-sm mb-4">
            Your next data drop arrives this Friday at 7:30am.
          </p>
          <a
            href="https://buildradar.co.uk/toolkit"
            className="button-claim block w-full py-4 rounded-xl text-base text-center font-black uppercase tracking-wide"
          >
            Go to your Conversion Kit →
          </a>
          <p className="text-[#94A3B8] text-xs mt-3">
            Password: <span className="font-mono text-white">founding2026</span>
          </p>
        </div>

      </div>

    </main>
  );
}
