"use client";
import { useState } from "react";

export default function PostcodeLookup() {
  const [postcode, setPostcode] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch("https://formspree.io/f/mpqowrzj", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        postcode,
        email,
        source: "wandsworth-planning-lookup",
      }),
    });
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-[#0F172A] border border-[#10B981]/30 rounded-xl p-6 text-center">
        <span className="text-[#10B981] text-2xl">✓</span>
        <p className="text-white font-semibold mt-2">Got it — we'll be in touch.</p>
        <p className="text-[#94A3B8] text-sm mt-1">
          We'll send you a link to track your application and connect you with local builders once the system is live.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#0F172A] border border-[#FF6B00]/20 rounded-xl p-6">
      <p className="text-[#FF6B00] text-xs font-semibold uppercase tracking-widest mb-1">
        Track your Wandsworth planning application
      </p>
      <p className="text-white font-semibold mb-4">
        Enter your postcode to find your application and connect with local builders.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value.toUpperCase())}
          placeholder="e.g. SW11 1AA"
          required
          className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#FF6B00]"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#FF6B00]"
        />
        <button
          type="submit"
          disabled={loading}
          className="button-claim px-6 py-3 rounded-lg text-sm shrink-0 disabled:opacity-60"
        >
          {loading ? "Searching..." : "Find my application"}
        </button>
      </form>
      <p className="text-[#94A3B8] text-xs mt-3">
        Free. No spam. We notify you when your application status changes.
      </p>
    </div>
  );
}
