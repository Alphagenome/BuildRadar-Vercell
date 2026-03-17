"use client";
import { useState } from "react";

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [postcode, setPostcode] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
      // Fire to signup API which notifies Donna
      await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, whatsapp, postcode, radius: "waitlist" }),
      });
    } catch { /* silent */ }
    setSubmitted(true);
  };

  const inputClass = "w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#FF6B00] transition-colors";
  const labelClass = "block text-xs font-bold text-[#94A3B8] mb-1 uppercase tracking-widest";

  return (
    <main className="min-h-screen hero-gradient flex items-center justify-center px-6 py-20">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center gap-2 bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
          Territory Full
        </div>

        <h1 className="text-3xl font-black text-white uppercase tracking-tight mb-4">
          Wandsworth is closed
        </h1>
        <p className="text-[#94A3B8] mb-8">
          All 3 founding builder spots in this area are taken. Join the Priority Waitlist — you&apos;ll be first in line when a spot opens or a new adjacent area launches.
        </p>

        {submitted ? (
          <div className="lead-card border border-[#10B981]/30 rounded-2xl p-8">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="text-lg font-black text-[#10B981] uppercase tracking-tight mb-2">You&apos;re on the list</h3>
            <p className="text-[#94A3B8] text-sm">We&apos;ll contact you directly when a spot opens. Our team will be in touch within 48 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className={labelClass}>Your name</label>
              <input value={name} onChange={e => setName(e.target.value)} required className={inputClass} placeholder="John Smith" />
            </div>
            <div>
              <label className={labelClass}>WhatsApp number</label>
              <input value={whatsapp} onChange={e => setWhatsapp(e.target.value)} required type="tel" className={inputClass} placeholder="+44 7700 900000" />
            </div>
            <div>
              <label className={labelClass}>Your postcode</label>
              <input value={postcode} onChange={e => setPostcode(e.target.value)} required className={inputClass} placeholder="SW11 1AA" />
            </div>
            <button type="submit" className="button-claim w-full py-4 rounded-xl text-lg">
              Join Priority Waitlist
            </button>
            <p className="text-center text-[#94A3B8] text-xs uppercase tracking-widest">
              No payment · We&apos;ll call you first
            </p>
          </form>
        )}
      </div>
    </main>
  );
}
