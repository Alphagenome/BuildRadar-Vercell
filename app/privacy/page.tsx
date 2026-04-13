import Link from "next/link";
import type { Metadata } from "next";
import BrandIcon from "@/components/BrandIcon";

export const metadata: Metadata = {
  title: "Privacy Policy — BuildRadar",
  description: "How BuildRadar collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0F2440] text-white">

      {/* Header */}
      <div className="bg-[#1B3A5C] border-b border-white/10 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BrandIcon variant="icon" size={32} className="h-8 w-auto flex-shrink-0" />
        </div>
        <Link href="/" className="text-[#94A3B8] text-xs hover:text-white transition-colors">
          ← Home
        </Link>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">

        <p className="text-[#F0B429] text-xs font-bold uppercase tracking-widest mb-2">Legal</p>
        <h1 className="text-3xl font-black uppercase tracking-tight mb-1">Privacy Policy</h1>
        <p className="text-[#94A3B8] text-sm mb-12">Last updated: 11 April 2026</p>

        {/* Controller box */}
        <div className="bg-[#1B3A5C] border border-white/10 rounded-xl p-5 mb-10 text-sm text-[#94A3B8]">
          <span className="text-white font-semibold">Data Controller: </span>
          BuildRadar ·{" "}
          <a href="mailto:clem@buildradar.co.uk" className="text-[#F0B429] hover:text-white transition-colors">
            clem@buildradar.co.uk
          </a>
        </div>

        <div className="space-y-10 text-[#94A3B8] leading-relaxed text-sm">

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">1. Who We Are</h2>
            <p>BuildRadar is a building intelligence service that delivers verified planning lead data to London tradespeople via WhatsApp. We monitor publicly available planning approval data and present it in a format useful to builders, roofers, and other trades.</p>
            <p className="mt-2">You can contact us at clem@buildradar.co.uk.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">2. What Data We Collect</h2>
            <p className="font-semibold text-white/80 mb-1">Data you provide directly:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Name and contact details (email, phone, WhatsApp number)</li>
              <li>Trade type and operating area</li>
              <li>Your responses to any sign-up or pilot assessment form</li>
            </ul>
            <p className="font-semibold text-white/80 mb-1">Data collected via WhatsApp:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Your WhatsApp number (used solely to deliver leads)</li>
              <li>Your CLAIM / SKIP responses to leads we send you</li>
            </ul>
            <p className="font-semibold text-white/80 mb-1">Data we do NOT collect:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>We do not use tracking cookies or advertising pixels</li>
              <li>We do not sell your data to third parties</li>
              <li>We do not store payment card details (PayPal handles payments directly)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">3. How We Use Your Data</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To deliver weekly building opportunity alerts to your WhatsApp</li>
              <li>To manage your area exclusivity and subscription status</li>
              <li>To send service updates and (where you have opted in) BuildRadar news</li>
              <li>To process payments via PayPal</li>
            </ul>
            <p className="mt-3">We do not use your data for automated profiling or decisions with legal effects.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">4. Legal Basis</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="text-white/80">Contractual necessity</span> — to deliver the service you signed up for</li>
              <li><span className="text-white/80">Legitimate interests</span> — to respond to enquiries and improve the service</li>
              <li><span className="text-white/80">Consent</span> — for any optional marketing communications (withdraw any time)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">5. Data About Homeowners</h2>
            <p>The building opportunity data BuildRadar presents (addresses, project types) is sourced exclusively from public records. Planning applications are statutory public registers — the information is already freely available to any member of the public on council websites.</p>
            <p className="mt-2">BuildRadar adds value by classifying this data by trade type and filtering it to match each subscriber's specialism and area. We do not enrich homeowner data with private information obtained from any other source.</p>
            <p className="mt-2">Homeowners who do not wish to receive builder contact can email <a href="mailto:clem@buildradar.co.uk" className="text-[#F0B429] hover:text-white transition-colors">clem@buildradar.co.uk</a> with their address and we will remove it from our alerts within 48 hours.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">6. Retention</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="text-white/80">Active subscriber data:</span> held for the duration of the subscription + 6 months</li>
              <li><span className="text-white/80">Cancelled subscriber data:</span> deleted within 90 days of cancellation</li>
              <li><span className="text-white/80">Pilot / enquiry data:</span> deleted after 12 months if no subscription follows</li>
              <li><span className="text-white/80">WhatsApp interaction logs:</span> retained for 30 days for delivery confirmation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">7. Third-Party Services</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="text-white/80">WhatsApp Business API (via Meta)</span> — lead delivery channel</li>
              <li><span className="text-white/80">PayPal</span> — payment processing</li>
              <li><span className="text-white/80">Vercel</span> — website hosting (EU/UK data centres)</li>
            </ul>
            <p className="mt-3">All processors operate under data processing agreements. No data is transferred outside the UK/EEA without appropriate safeguards.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">8. Your Rights</h2>
            <p>Under UK GDPR you have the right to access, correct, delete, or port your data, and to object to processing. Email{" "}
              <a href="mailto:clem@buildradar.co.uk" className="text-[#F0B429] hover:text-white transition-colors">clem@buildradar.co.uk</a>{" "}
              — we will respond within 30 days.
            </p>
            <p className="mt-2">You may also complain to the{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noopener" className="text-[#F0B429] hover:text-white transition-colors">ICO</a>{" "}
              at ico.org.uk or 0303 123 1113.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">9. Changes</h2>
            <p>Material changes will be communicated to active subscribers by email with 14 days&apos; notice. The &quot;Last updated&quot; date above always reflects the current version.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base uppercase tracking-wide mb-3">10. Contact</h2>
            <p>
              BuildRadar<br />
              <a href="mailto:clem@buildradar.co.uk" className="text-[#F0B429] hover:text-white transition-colors">
                clem@buildradar.co.uk
              </a>
            </p>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center">
        <div className="flex justify-center gap-8 text-xs text-[#94A3B8] mb-3">
          <Link href="/privacy" className="text-[#F0B429]">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <a href="mailto:clem@buildradar.co.uk" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-[#94A3B8]/50 text-xs">© {new Date().getFullYear()} BuildRadar. All rights reserved.</p>
      </footer>

    </main>
  );
}
