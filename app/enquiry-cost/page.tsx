import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Hidden Cost of Missed Enquiries — Free Report for Care Home Managers",
  description:
    "Find out what a 40-bed care home loses per year from missed and delayed enquiries. Free report — takes 30 seconds to request.",
};

export default function EnquiryCostPage() {
  return (
    <main className="min-h-screen bg-[#1A1C1E] text-white">

      {/* NAV */}
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-4xl mx-auto">
        <span className="text-[#FF6B00] font-bold text-lg tracking-tight">BuildRadar</span>
      </nav>

      {/* HERO */}
      <section className="max-w-2xl mx-auto px-6 pt-16 pb-10 text-center">
        <div className="inline-block bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Free Report — Care Home Managers
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          What does a missed enquiry<br />
          <span className="text-[#FF6B00]">actually cost you?</span>
        </h1>

        <p className="text-[#94A3B8] text-lg leading-relaxed max-w-xl mx-auto">
          Most care home managers know they miss calls. Few have ever calculated what that costs in real money.
          This free report does the maths for a 40-bed home — and the number is uncomfortable.
        </p>
      </section>

      {/* PAIN POINTS */}
      <section className="max-w-2xl mx-auto px-6 pb-10">
        <div className="space-y-4">
          {[
            {
              stat: "£73,000+",
              label: "Lost per year",
              desc: "The average annual revenue lost by a 40-bed care home from missed and delayed enquiries — based on average weekly fee rates and occupancy data.",
            },
            {
              stat: "47%",
              label: "Of calls go unanswered",
              desc: "Nearly half of all care home enquiry calls go unanswered during peak times. Every unanswered call is a family that rings the next home on the list.",
            },
            {
              stat: "4 hours",
              label: "Average response time",
              desc: "The average time between a web enquiry and a first response. Families make their decision in under 2 hours. You are already too late.",
            },
          ].map((item) => (
            <div
              key={item.stat}
              className="bg-[#0F172A] border border-white/10 rounded-xl p-6 flex gap-5 items-start"
            >
              <div className="shrink-0 text-right min-w-[80px]">
                <p className="text-2xl font-bold text-[#FF6B00]">{item.stat}</p>
                <p className="text-xs text-[#94A3B8] uppercase tracking-widest mt-0.5">{item.label}</p>
              </div>
              <p className="text-[#94A3B8] text-sm leading-relaxed pt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S IN THE REPORT */}
      <section className="max-w-2xl mx-auto px-6 pb-10">
        <div className="bg-[#0F172A] border border-[#FF6B00]/20 rounded-xl p-6">
          <p className="text-xs text-[#FF6B00] uppercase font-semibold tracking-widest mb-4">What's in the free report</p>
          <ul className="space-y-3 text-sm text-[#94A3B8]">
            {[
              "The exact revenue calculation for a 40-bed home — with your numbers, not averages",
              "The 3 most common enquiry failure points (and which one loses the most money)",
              "What the best-performing care homes do differently in the first 60 minutes",
              "A simple benchmark: how does your current response time compare to the top 10%?",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#FF6B00] shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-xl mx-auto px-6 pb-20">
        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-2">Send me the free report</h2>
          <p className="text-[#94A3B8] text-sm mb-6">
            Takes 30 seconds. No sales call, no subscription.
          </p>

          <form
            action="https://formspree.io/f/mpqowrzj"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label className="block text-sm text-[#94A3B8] mb-1.5" htmlFor="name">
                Your name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="e.g. Sarah"
                className="w-full bg-[#1A1C1E] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#94A3B8]/50 text-sm focus:outline-none focus:border-[#FF6B00]/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-[#94A3B8] mb-1.5" htmlFor="home_name">
                Care home name
              </label>
              <input
                id="home_name"
                type="text"
                name="home_name"
                required
                placeholder="e.g. Sunrise Care Home"
                className="w-full bg-[#1A1C1E] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#94A3B8]/50 text-sm focus:outline-none focus:border-[#FF6B00]/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-[#94A3B8] mb-1.5" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="sarah@sunrisecare.co.uk"
                className="w-full bg-[#1A1C1E] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#94A3B8]/50 text-sm focus:outline-none focus:border-[#FF6B00]/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-[#94A3B8] mb-1.5" htmlFor="beds">
                Number of beds
              </label>
              <select
                id="beds"
                name="bed_count"
                className="w-full bg-[#1A1C1E] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF6B00]/60 transition-colors appearance-none"
              >
                <option value="under_20">Under 20</option>
                <option value="20_40" selected>20–40</option>
                <option value="40_60">40–60</option>
                <option value="60_plus">60+</option>
              </select>
            </div>

            <input type="hidden" name="_subject" value="New Enquiry Cost Report Request — Care Home" />
            <input type="hidden" name="_next" value="https://buildradar.co.uk/enquiry-cost/thanks" />

            <button
              type="submit"
              className="w-full bg-[#FF6B00] hover:bg-[#CC5500] text-white font-semibold py-4 rounded-xl text-sm transition-colors mt-2"
            >
              Send me the free report
            </button>

            <p className="text-center text-[#94A3B8] text-xs pt-1">
              No spam. Unsubscribe any time.
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
