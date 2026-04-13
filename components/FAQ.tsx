"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How do I actually get through the door?",
    a: "The first 10 seconds are everything. Here's the exact script: \"Good morning — I'm [name] from [company]. Your planning approval for the rear extension came through recently — I specialise in exactly this type of work locally and wanted to introduce myself before you start getting quotes. Mind if I leave you my card?\" That's it. You're not selling — you're introducing. The goal is a booked site visit, not a signed contract on the doorstep. The full Conversion Kit — letter template, objection handlers, and follow-up script — is included when you sign up.",
  },
  {
    q: "How many verified opportunities will I get per week?",
    a: "It varies by borough and season. On average, 2-5 verified opportunities per area per week. We only send development triggers that match your radius — quality over volume. If a week is thin, your subscription rolls credit forward.",
  },
  {
    q: "Am I competing with other builders on the same lead?",
    a: "Max 3 builders per lead, ranked by proximity. You're never competing with more than 2 others — compared to 5-10 on Checkatrade. And you're all notified before the homeowner has searched for anyone.",
  },
  {
    q: "What if I knock and they already have someone?",
    a: "It happens. Our verified opportunities are early signals, not guarantees. The window is the first 7 days — act fast and you're usually first. Even if they're not ready yet, you've introduced yourself before any competitor has.",
  },
  {
    q: "Do you provide the homeowner's contact details?",
    a: "We provide the full address. The lead is the address and the timing advantage. A door knock or letter drop from you does the rest — and it's far more personal than a cold enquiry form.",
  },
  {
    q: "Can I cover more than one area?",
    a: "Yes. Add extra areas at £29/mo each. Your Data Drop is always ranked by proximity so you get the closest verified opportunities first.",
  },
  {
    q: "What if I only do certain types of work?",
    a: "Don't worry about filtering upfront. Just tap Skip on anything that's not for you. After a few weeks the intelligence learns your preferences and stops sending irrelevant development triggers automatically.",
  },
  {
    q: "Can I pause in winter?",
    a: "Yes. Pause any time from your account — no charge while paused. Unpause when you're ready for work.",
  },
  {
    q: "How do I cancel?",
    a: "Cancel any time, no questions asked, from your account settings. No minimum term. No cancellation fee.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-[#0F2440]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-tight text-white">
          Common questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#1B3A5C] rounded-xl border border-white/10 overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 font-semibold text-white flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <span className="text-[#F0B429] ml-4 font-black">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[#94A3B8] leading-relaxed text-sm border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
