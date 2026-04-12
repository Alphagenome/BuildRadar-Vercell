import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026 Visibility Pack — 12 Months of SEO Content for Wandsworth Trades",
  description:
    "Get found on Google before your competitors do. We write 12 months of hyper-local SEO blog posts for your trade in Wandsworth — delivered in one file, ready to publish. £125 one-off.",
};

const TRADES = [
  "Builder",
  "Roofer",
  "Plumber",
  "Electrician",
  "Landscaper",
  "Decorator",
  "Plasterer",
  "Carpenter",
  "Other",
];

export default function VisibilityPackPage() {
  return (
    <main className="min-h-screen bg-[#1A1C1E] text-white">

      {/* NAV */}
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#FF6B00] font-bold text-lg tracking-tight">BuildRadar</span>
        <a
          href="/"
          className="text-sm text-[#94A3B8] hover:text-white transition-colors"
        >
          ← Back to BuildRadar
        </a>
      </nav>

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-10 text-center">
        <div className="inline-block bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Wandsworth Trades Only — Limited Spots
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Your website is invisible.<br />
          <span className="text-[#FF6B00]">We fix that in one file.</span>
        </h1>

        <p className="text-[#94A3B8] text-lg leading-relaxed max-w-2xl mx-auto">
          Most Wandsworth tradespeople have a website that sits on page 4 of Google and does nothing.
          The 2026 Visibility Pack gives you 12 months of hyper-local SEO blog posts — written in your voice,
          targeting the exact searches your customers type — delivered as a single document you copy-paste and publish.
        </p>
      </section>

      {/* WHAT YOU GET */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              icon: "📄",
              title: "12 Blog Posts",
              desc: "One per month. Each targets a local Wandsworth search term your customers are already using.",
            },
            {
              icon: "✍️",
              title: "Written in Your Voice",
              desc: "Trade-specific, area-specific. Reads like you wrote it — not a generic AI article.",
            },
            {
              icon: "📦",
              title: "One File, One Payment",
              desc: "No subscription. No retainer. £125 once. Copy-paste to your website and you're done.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#0F172A] border border-white/10 rounded-xl p-6"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SAMPLE */}
      <section className="max-w-3xl mx-auto px-6 py-6">
        <div className="bg-[#0F172A] border border-[#FF6B00]/20 rounded-xl p-6">
          <p className="text-xs text-[#FF6B00] uppercase font-semibold tracking-widest mb-3">Sample Post Title</p>
          <p className="text-white font-semibold text-lg mb-1">"Why Your Boiler Always Breaks Down in Winter (And How to Stop It)"</p>
          <p className="text-[#94A3B8] text-sm">Target keyword: <span className="text-white">boiler breakdown Wandsworth</span> — written for a local plumber, references SW postcodes, reads like a real person wrote it.</p>
        </div>
      </section>

      {/* PRICE */}
      <section className="max-w-3xl mx-auto px-6 py-8 text-center">
        <p className="text-[#94A3B8] text-sm uppercase tracking-widest mb-2">One-off investment</p>
        <p className="text-5xl font-bold text-white mb-1">£125</p>
        <p className="text-[#94A3B8] text-sm">Delivered within 48 hours. No subscription. No contract.</p>
      </section>

      {/* FORM */}
      <section className="max-w-xl mx-auto px-6 pb-20">
        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-2">Claim your Visibility Pack</h2>
          <p className="text-[#94A3B8] text-sm mb-6">
            Fill in your details and we'll be in touch within 24 hours to confirm your trade and area before we start writing.
          </p>

          <form
            action="https://formspree.io/f/mpqowrzj"
            method="POST"
            className="space-y-4"
          >
            {/* Name */}
            <div>
              <label className="block text-sm text-[#94A3B8] mb-1.5" htmlFor="name">
                First name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="e.g. Dave"
                className="w-full bg-[#1A1C1E] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#94A3B8]/50 text-sm focus:outline-none focus:border-[#FF6B00]/60 transition-colors"
              />
            </div>

            {/* Business name */}
            <div>
              <label className="block text-sm text-[#94A3B8] mb-1.5" htmlFor="business">
                Business name
              </label>
              <input
                id="business"
                type="text"
                name="business_name"
                required
                placeholder="e.g. SW18 Plumbing"
                className="w-full bg-[#1A1C1E] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#94A3B8]/50 text-sm focus:outline-none focus:border-[#FF6B00]/60 transition-colors"
              />
            </div>

            {/* Trade */}
            <div>
              <label className="block text-sm text-[#94A3B8] mb-1.5" htmlFor="trade">
                Your trade
              </label>
              <select
                id="trade"
                name="trade"
                required
                className="w-full bg-[#1A1C1E] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF6B00]/60 transition-colors appearance-none"
              >
                <option value="" disabled selected>Select your trade</option>
                {TRADES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Area */}
            <div>
              <label className="block text-sm text-[#94A3B8] mb-1.5" htmlFor="area">
                Area
              </label>
              <input
                id="area"
                type="text"
                name="area"
                defaultValue="Wandsworth"
                className="w-full bg-[#1A1C1E] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF6B00]/60 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-[#94A3B8] mb-1.5" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="dave@sw18plumbing.co.uk"
                className="w-full bg-[#1A1C1E] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#94A3B8]/50 text-sm focus:outline-none focus:border-[#FF6B00]/60 transition-colors"
              />
            </div>

            {/* Telephone */}
            <div>
              <label className="block text-sm text-[#94A3B8] mb-1.5" htmlFor="telephone">
                Telephone
              </label>
              <input
                id="telephone"
                type="tel"
                name="telephone"
                required
                placeholder="07700 900000"
                className="w-full bg-[#1A1C1E] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#94A3B8]/50 text-sm focus:outline-none focus:border-[#FF6B00]/60 transition-colors"
              />
            </div>

            {/* Pain question */}
            <div>
              <label className="block text-sm text-[#94A3B8] mb-1.5" htmlFor="pain">
                What's your biggest problem with your website right now? <span className="text-white/30">(optional)</span>
              </label>
              <textarea
                id="pain"
                name="website_problem"
                rows={3}
                placeholder="e.g. It doesn't show up on Google, I haven't updated it in years..."
                className="w-full bg-[#1A1C1E] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#94A3B8]/50 text-sm focus:outline-none focus:border-[#FF6B00]/60 transition-colors resize-none"
              />
            </div>

            {/* Hidden fields */}
            <input type="hidden" name="_subject" value="New Visibility Pack Enquiry" />
            <input type="hidden" name="_next" value="https://buildradar.co.uk/visibility-pack/thanks" />

            <button
              type="submit"
              className="w-full bg-[#FF6B00] hover:bg-[#CC5500] text-white font-semibold py-4 rounded-xl text-sm transition-colors mt-2"
            >
              Claim my Visibility Pack — £125
            </button>

            <p className="text-center text-[#94A3B8] text-xs pt-1">
              We'll confirm your spot within 24 hours. Pack delivered in 48 hours.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 text-center text-[#94A3B8] text-xs">
        <p>BuildRadar · <a href="/privacy" className="hover:text-white transition-colors">Privacy</a> · <a href="/terms" className="hover:text-white transition-colors">Terms</a></p>
      </footer>

    </main>
  );
}
