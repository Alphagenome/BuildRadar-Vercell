"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How many leads will I get per week?",
    a: "It varies by borough and season. On average, 2-5 quality leads per area per week. We only send leads that match your radius — quality over volume. If a week is thin, your subscription rolls credit forward.",
  },
  {
    q: "Am I competing with other builders on the same lead?",
    a: "Max 3 builders per lead, ranked by proximity. You're never competing with more than 2 others — compared to 5-10 on Checkatrade. And you're all notified before the homeowner has searched for anyone.",
  },
  {
    q: "What if I knock and they already have someone?",
    a: "It happens. Our leads are early signals, not guarantees. The window is the first 7 days — act fast and you're usually first. Even if they're not ready yet, you've introduced yourself before any competitor has.",
  },
  {
    q: "Do you provide the homeowner's contact details?",
    a: "We provide the full address. The lead is the address and the timing advantage. A door knock or letter drop from you does the rest — and it's far more personal than a cold enquiry form.",
  },
  {
    q: "Can I cover more than one area?",
    a: "Yes. Add extra areas at £29/mo each. Your leads are always ranked by proximity so you get the closest jobs first.",
  },
  {
    q: "What if I only do certain types of work?",
    a: "Don't worry about filtering upfront. Just tap Skip on anything that's not for you. After a few weeks the system learns your preferences and stops sending irrelevant leads automatically.",
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
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Common questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <span className="text-gray-400 ml-4">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-500 leading-relaxed text-sm">
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
