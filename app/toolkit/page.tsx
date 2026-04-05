"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const PASSWORD = "founding2026";

const objections = [
  {
    they: "We already have a builder",
    you: "That's great — if anything changes or you need a second opinion on a quote, please keep my card. Good builders are always worth having as a backup.",
  },
  {
    they: "We're not ready yet",
    you: "Completely understand — planning approval is just the start. When you are ready, getting quotes early saves time. Mind if I follow up in a month?",
  },
  {
    they: "How much will it cost?",
    you: "Honestly it varies a lot depending on the spec — that's exactly why I'd love to visit properly and give you an accurate number rather than a guess.",
  },
  {
    they: "We're getting other quotes",
    you: "Absolutely the right thing to do. I'd just ask that I'm one of them — I think you'll find my price and approach very competitive. When suits you?",
  },
  {
    they: "How did you know about our planning?",
    you: "I use a local building intelligence service that monitors approved applications — it helps me find homeowners I can genuinely help before they start searching.",
  },
];

const goldenRules = [
  { pass: true,  rule: "Always look the part — clean clothes, company branded if possible" },
  { pass: true,  rule: "Bring printed photos of your best work — one powerful image beats any words" },
  { pass: true,  rule: "Leave something physical every time — letter, card, or flyer" },
  { pass: true,  rule: "Mention the planning approval early — it shows you're relevant, not random" },
  { pass: true,  rule: "The goal is a booked quote visit, not a signed contract at the door" },
  { pass: false, rule: "Don't knock after 7:30pm or before 9am" },
  { pass: false, rule: "Don't oversell or pressure. One ask, then leave gracefully" },
  { pass: false, rule: "Don't apologise for your prices. State them confidently if asked" },
];

function ToolkitInner() {
  const params = useSearchParams();
  const nameParam    = params.get("name")    ?? "";
  const companyParam = params.get("company") ?? "";
  const phoneParam   = params.get("phone")   ?? "";

  const [unlocked, setUnlocked] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [openObjection, setOpenObjection] = useState<number | null>(null);
  const [builderName, setBuilderName]       = useState(nameParam);
  const [builderCompany, setBuilderCompany] = useState(companyParam);
  const [builderPhone, setBuilderPhone]     = useState(phoneParam);

  // On mount: load from localStorage as fallback (URL params already set above)
  useEffect(() => {
    if (!builderName)    setBuilderName(localStorage.getItem("br_name")    || "");
    if (!builderCompany) setBuilderCompany(localStorage.getItem("br_company") || "");
    if (!builderPhone)   setBuilderPhone(localStorage.getItem("br_phone")   || "");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist to localStorage whenever fields change
  useEffect(() => {
    if (builderName)    localStorage.setItem("br_name",    builderName);
    if (builderCompany) localStorage.setItem("br_company", builderCompany);
    if (builderPhone)   localStorage.setItem("br_phone",   builderPhone);
  }, [builderName, builderCompany, builderPhone]);

  const waMessage = encodeURIComponent(
    `Hi — ${builderName || "[YOUR NAME]"} the builder here, I knocked on your door recently about your planning approval. Just wanted to check if you had any questions or would like me to pop round for a free quote. No pressure at all — happy to work around you. — ${builderName || "[YOUR NAME]"}, ${builderCompany || "[YOUR COMPANY]"}, ${builderPhone || "[YOUR PHONE]"}`
  );

  if (!unlocked) {
    return (
      <main className="min-h-screen hero-gradient flex items-center justify-center px-6">
        <div className="max-w-sm w-full text-center">
          <div className="w-12 h-12 bg-[#FF6B00] rounded-xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-black text-lg">BR</span>
          </div>
          <h1 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Builder Toolkit</h1>
          <p className="text-[#94A3B8] text-sm mb-8">Founding members only</p>
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
            Unlock
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F172A] pb-24">
      {/* Header */}
      <div className="bg-[#1A1C1E] border-b border-white/10 px-4 py-4 sticky top-0 z-10 flex items-center gap-3">
        <div className="w-8 h-8 bg-[#FF6B00] rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-white font-black text-xs">BR</span>
        </div>
        <div>
          <p className="text-white font-black text-sm uppercase tracking-tight">Door Knock Script</p>
          <p className="text-[#94A3B8] text-xs">Mobile Closer — BuildRadar</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-6 space-y-6">

        {/* Your details — pre-fills WhatsApp message */}
        <div className="lead-card rounded-2xl p-4 border border-white/10 space-y-3">
          <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest">Your details (fills follow-up message)</p>
          <input value={builderName} onChange={e => setBuilderName(e.target.value)} className="w-full bg-[#1A1C1E] border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-[#94A3B8] focus:outline-none focus:border-[#FF6B00]" placeholder="Your name" />
          <input value={builderCompany} onChange={e => setBuilderCompany(e.target.value)} className="w-full bg-[#1A1C1E] border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-[#94A3B8] focus:outline-none focus:border-[#FF6B00]" placeholder="Company name" />
          <input value={builderPhone} onChange={e => setBuilderPhone(e.target.value)} className="w-full bg-[#1A1C1E] border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-[#94A3B8] focus:outline-none focus:border-[#FF6B00]" placeholder="Phone number" />
        </div>

        {/* STEP 1 — Donna's rule: opening line is MASSIVE */}
        <div>
          <p className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest mb-3">Step 1 — The Knock</p>
          <div className="bg-[#1A1C1E] border-l-4 border-[#FF6B00] rounded-2xl p-5">
            <p className="text-white font-black text-4xl leading-tight mb-4">
              &ldquo;Hi, sorry to disturb you—&rdquo;
            </p>
            <p className="text-white text-xl leading-snug">
              &ldquo;my name&apos;s <span className="text-[#FF6B00] font-bold">{builderName || "[NAME]"}</span>, I&apos;m a local builder. I dropped a letter through your door a few days ago about your planning approval. Did you happen to see it?&rdquo;
            </p>
          </div>
          <p className="text-[#94A3B8] text-xs mt-2 px-1">Stand back slightly. Smile. Don&apos;t look rushed.</p>
        </div>

        {/* STEP 2 — They saw the letter */}
        <div>
          <p className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest mb-3">Step 2 — They Saw It ✅</p>
          <div className="bg-[#1A1C1E] border border-white/10 rounded-2xl p-4">
            <p className="text-white text-lg leading-snug">
              &ldquo;Great — I just wanted to introduce myself in person. I know it can be hard finding a builder you can trust. I&apos;ve done a few similar projects just down the road. Would you mind if I took two minutes to show you some photos of recent work?&rdquo;
            </p>
          </div>
          <p className="text-[#94A3B8] text-xs mt-2 px-1">Pull out your phone immediately. Show real work. Let them react.</p>
        </div>

        {/* STEP 3 — They didn't see it */}
        <div>
          <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-3">Step 3 — They Didn&apos;t See It ❌</p>
          <div className="bg-[#1A1C1E] border border-white/10 rounded-2xl p-4">
            <p className="text-white text-lg leading-snug">
              &ldquo;No problem at all — I&apos;ll leave another one. Quick version: your planning approval came through recently and I specialise in exactly this type of work locally. I just wanted to offer a free quote before you start searching online. Here&apos;s my card — completely no pressure.&rdquo;
            </p>
          </div>
          <p className="text-[#94A3B8] text-xs mt-2 px-1">Hand them a card and your letter. Smile. Thank them. Leave.</p>
        </div>

        {/* STEP 4 — Objection handlers */}
        <div>
          <p className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest mb-3">Step 4 — Objection Handlers</p>
          <div className="space-y-2">
            {objections.map((obj, i) => (
              <div key={i} className="bg-[#1A1C1E] border border-white/10 rounded-xl overflow-hidden">
                <button
                  className="w-full text-left px-4 py-3 flex justify-between items-center"
                  onClick={() => setOpenObjection(openObjection === i ? null : i)}
                >
                  {/* Homeowner says — right-aligned bubble style */}
                  <div className="flex items-center gap-2 w-full">
                    <span className="text-[#94A3B8] text-xs uppercase tracking-widest flex-shrink-0">They:</span>
                    <span className="text-white text-sm font-semibold">&ldquo;{obj.they}&rdquo;</span>
                    <span className="text-[#FF6B00] ml-auto font-black">{openObjection === i ? "−" : "+"}</span>
                  </div>
                </button>
                {openObjection === i && (
                  <div className="px-4 pb-4 border-t border-white/5 pt-3">
                    <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-2">You say:</p>
                    <p className="text-white text-lg leading-snug font-medium">
                      &ldquo;{obj.you}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* STEP 5 — 48hr WhatsApp follow-up */}
        <div>
          <p className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest mb-3">Step 5 — 48hr Follow-Up</p>
          <div className="bg-[#1A1C1E] border border-white/10 rounded-2xl p-4 mb-3">
            <p className="text-white text-lg leading-snug">
              &ldquo;Hi — <span className="text-[#FF6B00]">{builderName || "[YOUR NAME]"}</span> the builder here, I knocked on your door recently about your planning approval. Just wanted to check if you had any questions or would like me to pop round for a free quote. No pressure at all — happy to work around you.&rdquo;
            </p>
          </div>
          <button
            onClick={() => window.open(`https://wa.me/?text=${waMessage}`, "_blank", "noopener,noreferrer")}
            className="button-claim w-full py-4 rounded-xl text-base flex items-center justify-center gap-2 text-center"
          >
            <span>📲</span> Send Follow-Up on WhatsApp
          </button>
          <p className="text-[#94A3B8] text-xs text-center mt-2 uppercase tracking-widest">
            Three touches is professional. Four is pressure.
          </p>
        </div>

        {/* Golden Rules */}
        <div>
          <p className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest mb-3">⭐ Golden Rules</p>
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
        </div>

      </div>
    </main>
  );
}

export default function ToolkitPage() {
  return (
    <Suspense>
      <ToolkitInner />
    </Suspense>
  );
}
