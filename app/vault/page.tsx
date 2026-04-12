"use client";
import { useState } from "react";
import Link from "next/link";

const PASSWORD = "founding2026";

const letters = [
  {
    id: "extension",
    title: "Rear / Side Extension",
    icon: "🏗️",
    description: "For homeowners with approved extension plans.",
    body: `[YOUR NAME]
[YOUR COMPANY NAME]
[PHONE] | [EMAIL]

14 March 2026

Dear Homeowner,

Congratulations on your planning approval — I noticed your application was recently approved and wanted to reach out before you start searching for builders.

My name is [YOUR NAME] and I'm a local builder specialising in rear and side extensions in this area. I've completed over [NUMBER] similar projects within a few miles of your home, and I understand exactly what's involved in making your extension a success — on time and on budget.

Why choose a local builder?
• I know the local planning requirements and building regulations inside out
• My reputation depends on quality work in this postcode — you can speak to neighbours I've worked for
• No waiting months for availability — I have capacity in your area now

I am fully insured, [ACCREDITATION], and happy to provide references from recent local projects.

I'd love to offer you a free, no-obligation quote. There's absolutely no pressure — just an honest conversation about your project and what it would realistically cost.

Please call or message me on [PHONE] or visit [WEBSITE] to see examples of my recent work.

Warm regards,

[YOUR NAME]
[YOUR COMPANY NAME]
[PHONE] | [EMAIL]

[ATTACH OR PRINT A PHOTO OF YOUR BEST SIMILAR WORK ON THE REVERSE]`,
  },
  {
    id: "loft",
    title: "Loft Conversion",
    icon: "🏠",
    description: "For approved loft conversion applications.",
    body: `[YOUR NAME] | [COMPANY] | [PHONE]

Dear Homeowner,

I see your loft conversion has been approved — that's an exciting project and one I specialise in.

A well-executed loft conversion adds significant value to your home — typically £30,000–£70,000 in this area. But the difference between a good result and a great result comes down to the builder you choose.

I'm [YOUR NAME], a local specialist with [NUMBER] loft conversions completed nearby. My work includes:
• Dormer, hip-to-gable, and mansard conversions
• Full structural work, insulation, electrics and plastering
• Building regulations compliance and sign-off included

I'd welcome the chance to visit, assess your roof structure, and give you a realistic quote before you commit to anything. Completely free, completely honest.

Call [PHONE] or visit [WEBSITE] to see my recent loft projects.

[YOUR NAME] | [COMPANY] | [ACCREDITATION]

[PHOTO OF COMPLETED LOFT ON REVERSE]`,
  },
  {
    id: "garden",
    title: "Garden Room / Outbuilding",
    icon: "🌿",
    description: "For garden room, outbuilding or landscaping approvals.",
    body: `[YOUR NAME] | [COMPANY] | [PHONE]

Dear Homeowner,

Your planning approval for garden works has just come through — congratulations. I wanted to reach out before you start looking for quotes.

Garden rooms, outbuildings, and landscaping projects transform how you use your home. Done well, they add real value and become the part of your home you use every single day.

I'm [YOUR NAME] and I've been building garden spaces in this area for [NUMBER] years. What sets my work apart:
• I work to the approved plans exactly — no surprises with building control
• Fully insured with public liability cover
• References from recent projects in [LOCAL AREA] available on request

I'd love to pop round, see your garden, and give you a free quote. No obligation whatsoever.

[YOUR NAME] | [COMPANY] | [PHONE] | [WEBSITE]`,
  },
  {
    id: "general",
    title: "General Building Works",
    icon: "🔨",
    description: "Adaptable for any job type.",
    body: `[YOUR NAME] | [COMPANY] | [PHONE]

Dear Homeowner,

I noticed your planning application for [JOB TYPE] was recently approved in your area. As a local builder who works extensively in [LOCAL AREA/POSTCODE], I wanted to introduce myself before you start searching for quotes.

Finding a trustworthy, skilled builder is one of the biggest challenges homeowners face. I built my business on referrals and repeat customers — which means every job I do has to be excellent.

A little about me:
• [NUMBER] years working in [LOCAL AREA]
• Fully insured with [ACCREDITATION]
• Happy to provide references from recent local work
• Free, no-obligation quote with no pressure

Please call me on [PHONE] or visit [WEBSITE] to see examples of my work. I'd genuinely love to help make your project a success.

Kind regards,

[YOUR NAME]
[COMPANY] | [PHONE] | [EMAIL]`,
  },
];

const goldenRules = [
  { pass: true,  rule: "Always look the part — clean clothes, company branded if possible" },
  { pass: true,  rule: "Bring printed photos of your best work — one powerful image beats any words" },
  { pass: true,  rule: "Leave something physical every time — letter, card, or flyer" },
  { pass: true,  rule: "Mention the planning approval early — shows you're relevant, not random" },
  { pass: true,  rule: "The goal is a booked quote visit, not a signed contract at the door" },
  { pass: false, rule: "Never knock after 7:30pm or before 9am" },
  { pass: false, rule: "Don't oversell or pressure — one ask, then leave gracefully" },
  { pass: false, rule: "Don't apologise for your prices — state them confidently if asked" },
];

function LetterCard({ letter }: { letter: typeof letters[0] }) {
  const [open, setOpen] = useState(false);

  const handlePrint = () => {
    const win = window.open("", "_blank");
    if (!win) return;
    win.document.write(`
      <html><head><title>${letter.title} — BuildRadar</title>
      <style>
        body { font-family: Georgia, serif; max-width: 680px; margin: 60px auto; padding: 0 40px; color: #111; line-height: 1.7; }
        pre { white-space: pre-wrap; font-family: Georgia, serif; font-size: 14px; }
        .footer { margin-top: 40px; border-top: 1px solid #ccc; padding-top: 12px; font-size: 11px; color: #666; }
      </style></head>
      <body><pre>${letter.body}</pre>
      <div class="footer">BuildRadar Conversion Toolkit — Provided exclusively to BuildRadar pilot subscribers · buildradar.co.uk</div>
      <script>window.onload = () => { window.print(); }</script>
      </body></html>
    `);
    win.document.close();
  };

  return (
    <div className="bg-[#1A1C1E] border border-white/10 rounded-2xl overflow-hidden">
      <button
        className="w-full text-left px-5 py-4 flex items-center gap-3 hover:bg-white/5 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="text-2xl">{letter.icon}</span>
        <div className="flex-1">
          <p className="text-white font-bold text-sm uppercase tracking-tight">{letter.title}</p>
          <p className="text-[#94A3B8] text-xs">{letter.description}</p>
        </div>
        <span className="text-[#FF6B00] font-black">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="border-t border-white/10 px-5 pb-5 pt-4">
          <pre className="text-[#94A3B8] text-xs leading-relaxed whitespace-pre-wrap font-mono bg-[#0F172A] rounded-xl p-4 mb-4 max-h-64 overflow-y-auto">
            {letter.body}
          </pre>
          <button
            onClick={handlePrint}
            className="button-claim w-full py-3 rounded-xl text-sm"
          >
            🖨️ Print / Save as PDF
          </button>
        </div>
      )}
    </div>
  );
}

export default function VaultPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);

  if (!unlocked) {
    return (
      <main className="min-h-screen hero-gradient flex items-center justify-center px-6">
        <div className="max-w-sm w-full text-center">
          <img src="/br-logo-400.png" alt="BuildRadar" className="w-12 h-12 mx-auto mb-6" />
          <h1 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Builder Resource Vault</h1>
          <p className="text-[#94A3B8] text-sm mb-8">Founding members only — 11 builders</p>
          <input
            type="password"
            value={pw}
            onChange={e => { setPw(e.target.value); setPwError(false); }}
            onKeyDown={e => { if (e.key === "Enter") { if (pw === PASSWORD) setUnlocked(true); else setPwError(true); }}}
            className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#FF6B00] transition-colors text-center text-lg tracking-widest mb-3"
            placeholder="Enter password"
          />
          {pwError && <p className="text-[#FF6B00] text-xs mb-3 uppercase tracking-widest">Wrong password</p>}
          <button
            onClick={() => { if (pw === PASSWORD) setUnlocked(true); else setPwError(true); }}
            className="button-claim w-full py-3 rounded-xl"
          >
            Unlock Vault
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F172A] pb-20">
      <div className="bg-[#1A1C1E] border-b border-white/10 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/br-logo-400.png" alt="BuildRadar" className="h-8 w-auto" />
            <div>
              <p className="text-white font-black text-sm uppercase tracking-tight">Builder Resource Vault</p>
              <p className="text-[#94A3B8] text-xs">Founding Members — Confidential</p>
            </div>
          </div>
          <Link
            href="/toolkit"
            className="button-claim px-4 py-2 rounded-lg text-xs"
          >
            📲 Mobile Script
          </Link>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-8 space-y-8">

        {/* Letter Templates */}
        <section>
          <p className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest mb-1">Part 1</p>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Letter Templates</h2>
          <p className="text-[#94A3B8] text-sm mb-6">
            Expand a template, customise the highlighted fields, then hit Print / Save as PDF. Colour print on quality paper significantly outperforms black &amp; white.
          </p>
          <div className="space-y-3">
            {letters.map(l => <LetterCard key={l.id} letter={l} />)}
          </div>
        </section>

        {/* Mobile Closer CTA */}
        <section className="lead-card rounded-2xl p-6 border border-[#FF6B00]/20">
          <p className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest mb-1">Part 2</p>
          <h2 className="text-xl font-black text-white uppercase tracking-tight mb-2">Door Knock Script</h2>
          <p className="text-[#94A3B8] text-sm mb-4">
            Mobile-optimised. Read it on your phone while parked outside. Includes objection handlers and a click-to-send 48hr WhatsApp follow-up.
          </p>
          <Link href="/toolkit" className="button-claim w-full py-4 rounded-xl text-base flex items-center justify-center gap-2">
            📲 Open Mobile Script
          </Link>
        </section>

        {/* Golden Rules */}
        <section>
          <p className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest mb-1">Part 3</p>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">Golden Rules</h2>
          <div className="space-y-2">
            {goldenRules.map((item, i) => (
              <div key={i} className={`flex items-start gap-3 px-4 py-3 rounded-xl border ${item.pass ? "border-[#10B981]/20 bg-[#10B981]/5" : "border-[#FF6B00]/20 bg-[#FF6B00]/5"}`}>
                <span className={`font-black text-sm flex-shrink-0 ${item.pass ? "text-[#10B981]" : "text-[#FF6B00]"}`}>
                  {item.pass ? "✔" : "✘"}
                </span>
                <p className="text-white text-sm">{item.rule}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
