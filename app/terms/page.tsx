import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — BuildRadar",
  description: "BuildRadar terms of service — pilot conditions, subscriptions, data use, and governing law.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white">

      {/* Header */}
      <div className="bg-[#1A1C1E] border-b border-white/10 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/br-logo-400.png" alt="BuildRadar" className="h-8 w-auto flex-shrink-0" />
        </div>
        <Link href="/" className="text-[#94A3B8] text-xs hover:text-white transition-colors">
          ← Home
        </Link>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">

        <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest mb-2">Legal</p>
        <h1 className="text-3xl font-black uppercase tracking-tight mb-1">Terms of Service</h1>
        <p className="text-[#94A3B8] text-sm mb-12">Last updated: 26 March 2026</p>

        {/* Intro box */}
        <div className="bg-[#1A1C1E] border border-white/10 rounded-xl p-5 mb-10 text-sm text-[#94A3B8]">
          By signing up for a pilot or paid subscription you agree to these Terms. Questions?{" "}
          <a href="mailto:clem@buildradar.co.uk" className="text-[#FF6B00] hover:text-white transition-colors">
            clem@buildradar.co.uk
          </a>
        </div>

        <div className="space-y-10 text-[#94A3B8] leading-relaxed text-sm">

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">1. The Parties</h2>
            <p><span className="text-white">&quot;BuildRadar&quot;</span> means the lead intelligence service operated by Clement Dingwall, 9b Severus Road, London SW11 1PL.</p>
            <p className="mt-2"><span className="text-white">&quot;Subscriber&quot;</span> means the tradesperson or business that has signed up for a pilot or paid subscription.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">2. The Service</h2>
            <p>BuildRadar provides:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Weekly delivery of verified planning approval data (address, project type, approval date) to your WhatsApp number</li>
              <li>A CLAIM / SKIP interface for managing leads</li>
              <li>Door-knock scripts and letter templates (Conversion Kit)</li>
              <li>Area exclusivity — maximum 3 subscribers per postcode district per trade</li>
            </ul>
            <p className="mt-3">The data we deliver is sourced from public planning authority records. BuildRadar makes no guarantee that a homeowner will respond to contact, accept a quote, or proceed with work.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">3. Free Pilot</h2>
            <p>New subscribers receive a free pilot period (duration confirmed at sign-up, typically 4 weeks). During the pilot:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>No payment card is required</li>
              <li>You receive the same lead quality as paid subscribers</li>
              <li>Area exclusivity applies — your postcode district is held for you</li>
            </ul>
            <p className="mt-3">At the end of the pilot, your area is released unless you move to a paid plan. No automatic billing occurs.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">4. Paid Subscriptions</h2>
            <p>Paid plans are billed monthly in advance:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><span className="text-white">Starter — £49/mo:</span> weekly lead alert (address + job type)</li>
              <li><span className="text-white">Pro — £99/mo:</span> + registered owner name (Land Registry lookup) + letter template</li>
              <li><span className="text-white">Premium — £149/mo:</span> + enriched contact details + 24hr head start + area exclusivity guaranteed</li>
            </ul>
            <p className="mt-3">Founding member subscribers (pilot participants) lock in their rate permanently, regardless of future price changes.</p>
            <p className="mt-2">All prices are in GBP and include VAT where applicable. Payments are processed by Stripe.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">5. Cancellation</h2>
            <p>You may cancel at any time by emailing{" "}
              <a href="mailto:clem@buildradar.co.uk" className="text-[#FF6B00] hover:text-white transition-colors">clem@buildradar.co.uk</a>.
              Cancellations take effect at the end of the current billing period. No refunds are issued for partial months.
            </p>
            <p className="mt-2">BuildRadar may cancel or suspend a subscription immediately if these Terms are breached.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">6. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Resell, redistribute, or share BuildRadar lead data with third parties</li>
              <li>Use the data for cold calling or unsolicited mass marketing beyond the intended door-knock / letter sequence</li>
              <li>Contact homeowners in a way that breaches GDPR, the Privacy and Electronic Communications Regulations, or any other applicable law</li>
              <li>Misrepresent BuildRadar or your association with it when contacting homeowners</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">7. Data and Privacy</h2>
            <p>Your use of BuildRadar is governed by our{" "}
              <Link href="/privacy" className="text-[#FF6B00] hover:text-white transition-colors">Privacy Policy</Link>.
              When you use lead data to contact homeowners, you are acting as an independent data controller and are responsible for your own compliance with applicable data protection law.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">8. Intellectual Property</h2>
            <p>BuildRadar retains all rights in the platform, lead curation methodology, scripts, and templates. You may use the Conversion Kit materials solely for the purpose of converting leads delivered through BuildRadar.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">9. Liability</h2>
            <p>BuildRadar&apos;s total liability in any 12-month period is limited to the total subscription fees paid in that period.</p>
            <p className="mt-2">BuildRadar is not liable for: missed jobs, homeowner non-responses, planning data inaccuracies originating from the public record, or losses arising from your use of the lead data.</p>
            <p className="mt-2">Nothing in these Terms limits liability for death or personal injury caused by negligence, or for fraud.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">10. Changes to These Terms</h2>
            <p>We may update these Terms with 30 days&apos; notice by email. Continued use of the service after that date constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">11. Governing Law</h2>
            <p>These Terms are governed by the laws of England and Wales. Disputes are subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">12. Contact</h2>
            <p>
              Clement Dingwall · BuildRadar<br />
              9b Severus Road, London SW11 1PL<br />
              <a href="mailto:clem@buildradar.co.uk" className="text-[#FF6B00] hover:text-white transition-colors">
                clem@buildradar.co.uk
              </a>
            </p>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center">
        <div className="flex justify-center gap-8 text-xs text-[#94A3B8] mb-3">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-[#FF6B00]">Terms of Service</Link>
          <a href="mailto:clem@buildradar.co.uk" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-[#94A3B8]/50 text-xs">© {new Date().getFullYear()} BuildRadar. All rights reserved.</p>
      </footer>

    </main>
  );
}
