"use client";
import { useState } from "react";
import BrandIcon from "@/components/BrandIcon";
import Link from "next/link";

const DEMO_LEAD = {
  job_type: "Rear Extension — Authorised",
  area: "SW18 — Wandsworth Town",
  distance: "0.4 miles",
  est_value: "£40,000 — £65,000",
  address: "24 Garratt Lane, London SW18 4DQ",
  planning_ref: "2026/02193/FUL",
};

const PAYPAL_5 = "https://www.paypal.me/KPTPersonalTrainer/5";
const PAYPAL_40 = "https://www.paypal.me/KPTPersonalTrainer/40";

export default function UnlockPage() {
  const [postcode, setPostcode] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [showBump, setShowBump] = useState(false);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (postcode.trim().length >= 3) setRevealed(true);
  }

  function handleUnlock() {
    setShowBump(true);
  }

  if (showBump) {
    return (
      <main className="min-h-screen bg-[#0F2440] flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8 justify-center">
            <BrandIcon variant="icon" size={32} className="h-8 w-auto" />
          </div>

          {/* Bump offer */}
          <div className="bg-[#1B3A5C] border-2 border-[#F0B429] rounded-2xl p-6 mb-4">
            <div className="inline-block bg-[#F0B429] text-black text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Wait — Special Offer
            </div>
            <h2 className="text-2xl font-black text-white mb-3 leading-tight">
              Get 10 leads for £40<br />
              <span className="text-[#F0B429]">instead of £5 for one</span>
            </h2>
            <p className="text-[#94A3B8] text-sm mb-5">
              Unlock this lead plus 9 more in your area. That&apos;s £4 per lead — and you get first access before anyone else sees them.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "10 verified planning applications in your trade + area",
                "Full address + planning ref on every lead",
                "Delivered to your WhatsApp within 24hrs",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-[#94A3B8]">
                  <span className="text-[#10B981] shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={PAYPAL_40}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full button-claim py-4 rounded-xl text-center font-black text-base mb-3"
            >
              GET 10 LEADS — £40 VIA PAYPAL
            </a>
          </div>

          {/* Skip bump */}
          <div className="text-center">
            <a
              href={PAYPAL_5}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94A3B8] text-sm hover:text-white transition-colors underline underline-offset-4"
            >
              No thanks — just unlock this one lead for £5
            </a>
          </div>

          <p className="text-center text-[#94A3B8] text-xs mt-6">
            Pay via PayPal. Full address sent to your WhatsApp within 24 hours.
            Questions? <a href="mailto:clem@buildradar.co.uk" className="text-[#F0B429]">clem@buildradar.co.uk</a>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F2440] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">

        {/* Logo */}
        <div className="flex items-center gap-2 mb-8 justify-center">
          <BrandIcon variant="icon" size={32} className="h-8 w-auto" />
        </div>

        {/* Alert badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#F0B429]/10 border border-[#F0B429]/30 text-[#F0B429] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#F0B429] animate-pulse" />
            SW18 — Active Project Alerts
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-white text-center mb-2 leading-tight">
          3 Extensions Approved<br />in Your Area This Week
        </h1>
        <p className="text-[#94A3B8] text-center text-sm mb-8">
          Enter your postcode to see active project authorisations near you.
        </p>

        {!revealed ? (
          <form onSubmit={handleSearch} className="space-y-3">
            <input
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value.toUpperCase())}
              placeholder="Enter your postcode — e.g. SW18 1AA"
              required
              className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#F0B429] text-center tracking-widest"
            />
            <button type="submit" className="w-full button-claim py-4 rounded-xl font-black text-base">
              CHECK AVAILABILITY
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            {/* Blurred lead card */}
            <div className="bg-[#1B3A5C] border border-white/10 rounded-2xl p-5 relative overflow-hidden">
              {/* Live badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[#10B981] text-xs font-semibold uppercase tracking-widest">Live authorisation</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-0.5">Project type</p>
                    <p className="text-white font-semibold">{DEMO_LEAD.job_type}</p>
                  </div>
                  <span className="bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-semibold px-3 py-1 rounded-full">
                    Approved
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-0.5">Distance</p>
                    <p className="text-white font-semibold">{DEMO_LEAD.distance}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-0.5">Est. value</p>
                    <p className="text-white font-semibold">{DEMO_LEAD.est_value}</p>
                  </div>
                </div>

                {/* Blurred address */}
                <div className="relative">
                  <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-0.5">Full address</p>
                  <div className="relative">
                    <p className="text-white font-semibold blur-sm select-none">
                      {DEMO_LEAD.address}
                    </p>
                    <p className="text-white font-semibold blur-sm select-none text-xs mt-0.5">
                      Ref: {DEMO_LEAD.planning_ref}
                    </p>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#F0B429] text-xs font-black uppercase tracking-widest bg-[#0F2440]/80 px-3 py-1 rounded-full border border-[#F0B429]/30">
                        🔒 Unlock to reveal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Unlock button */}
            <button
              onClick={handleUnlock}
              className="w-full button-claim py-4 rounded-xl font-black text-base"
            >
              UNLOCK FULL ADDRESS — £5
            </button>

            <p className="text-center text-[#94A3B8] text-xs">
              Verified planning data. Full address + ref delivered to your WhatsApp.
            </p>
          </div>
        )}

        <div className="mt-10 pt-6 border-t border-white/5 flex justify-center">
          <Link href="/" className="text-[#94A3B8] text-xs hover:text-white transition-colors">
            buildradar.co.uk
          </Link>
        </div>
      </div>
    </main>
  );
}
