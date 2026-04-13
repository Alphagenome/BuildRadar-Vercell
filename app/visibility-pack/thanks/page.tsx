import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're in — BuildRadar Visibility Pack",
  description: "We've received your enquiry and will be in touch within 24 hours.",
};

export default function VisibilityPackThanksPage() {
  return (
    <main className="min-h-screen bg-[#1B3A5C] text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">

        <div className="text-5xl mb-6">✅</div>

        <h1 className="text-3xl font-bold text-white mb-4">
          You're in.
        </h1>

        <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
          We've received your enquiry. We'll confirm your trade and area within{" "}
          <span className="text-white font-semibold">24 hours</span> and deliver your
          Visibility Pack within{" "}
          <span className="text-white font-semibold">48 hours</span> of payment.
        </p>

        <div className="bg-[#0F2440] border border-white/10 rounded-xl p-6 text-left mb-8">
          <p className="text-xs text-[#F0B429] uppercase font-semibold tracking-widest mb-3">What happens next</p>
          <ol className="space-y-3 text-sm text-[#94A3B8]">
            <li className="flex gap-3"><span className="text-[#F0B429] font-bold">1.</span> We review your trade and confirm your spot (within 24hrs)</li>
            <li className="flex gap-3"><span className="text-[#F0B429] font-bold">2.</span> We send a payment link for £125</li>
            <li className="flex gap-3"><span className="text-[#F0B429] font-bold">3.</span> Your 12-month content pack lands in your inbox within 48hrs</li>
            <li className="flex gap-3"><span className="text-[#F0B429] font-bold">4.</span> Copy-paste to your website. Done.</li>
          </ol>
        </div>

        <a
          href="/"
          className="text-sm text-[#94A3B8] hover:text-white transition-colors"
        >
          ← Back to BuildRadar
        </a>

      </div>
    </main>
  );
}
