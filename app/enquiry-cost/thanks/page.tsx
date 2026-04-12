import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Report on its way — BuildRadar",
  description: "Your free enquiry cost report has been requested.",
};

export default function EnquiryCostThanksPage() {
  return (
    <main className="min-h-screen bg-[#1A1C1E] text-white flex items-center justify-center px-6">
      <div className="max-w-lg w-full">

        <div className="text-center mb-10">
          <div className="text-5xl mb-6">📩</div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Report on its way.
          </h1>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            Check your inbox — we'll send the full report within{" "}
            <span className="text-white font-semibold">a few hours</span>.
          </p>
        </div>

        {/* Teaser content — gives immediate value */}
        <div className="bg-[#0F172A] border border-[#FF6B00]/20 rounded-2xl p-8 mb-8">
          <p className="text-xs text-[#FF6B00] uppercase font-semibold tracking-widest mb-4">
            While you wait — the headline number
          </p>

          <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
            For a 40-bed care home charging <span className="text-white">£1,200/week</span>, a single missed
            enquiry that converts elsewhere is worth{" "}
            <span className="text-[#FF6B00] font-bold">£62,400 in annual revenue</span> — gone.
          </p>

          <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
            Most homes miss between <span className="text-white">1 and 3 enquiries per month</span> due
            to slow response times, unanswered calls, and no out-of-hours coverage.
          </p>

          <p className="text-[#94A3B8] text-sm leading-relaxed">
            The full report shows you the exact calculation for your bed count — and what the
            top-performing homes do to recover those leads.
          </p>
        </div>

        <div className="bg-[#0F172A] border border-white/10 rounded-xl p-6 mb-8">
          <p className="text-xs text-[#94A3B8] uppercase font-semibold tracking-widest mb-3">What happens next</p>
          <ol className="space-y-3 text-sm text-[#94A3B8]">
            <li className="flex gap-3">
              <span className="text-[#FF6B00] font-bold shrink-0">1.</span>
              Full report lands in your inbox (usually same day)
            </li>
            <li className="flex gap-3">
              <span className="text-[#FF6B00] font-bold shrink-0">2.</span>
              If you want to talk through your numbers, there's a link to book a free 15-minute call
            </li>
            <li className="flex gap-3">
              <span className="text-[#FF6B00] font-bold shrink-0">3.</span>
              No sales pressure — if it's not a fit, no hard feelings
            </li>
          </ol>
        </div>

      </div>
    </main>
  );
}
