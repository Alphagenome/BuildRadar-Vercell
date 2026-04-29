"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { RoiResult } from "@/app/api/solar-roi/route";

type Stage = "idle" | "estimated" | "claimed";
type PostcodeForm = { postcode: string };
type ClaimForm = { name: string; phone: string };

const inputClass =
  "w-full bg-[#0F2440] border border-white/10 rounded-xl px-4 py-3 text-white " +
  "placeholder-[#94A3B8] focus:outline-none focus:border-[#F0B429] transition-colors";
const labelClass =
  "block text-xs font-bold text-[#94A3B8] mb-1 uppercase tracking-widest";

function fmt(n: number) {
  return n.toLocaleString("en-GB", { maximumFractionDigits: 0 });
}

function RoiGrid({ roi, blurred }: { roi: RoiResult; blurred: boolean }) {
  const tiles = [
    { label: "Annual savings", value: `£${fmt(roi.annual_savings_gbp)}`, color: "text-[#F0B429]" },
    { label: "Monthly savings", value: `£${fmt(roi.monthly_savings_gbp)}`, color: "text-[#F0B429]" },
    { label: "25-year total", value: `£${fmt(roi.savings_25yr_gbp)}`, color: "text-[#10B981]" },
    { label: "Payback", value: `${roi.payback_years.toFixed(1)} yrs`, color: "text-white" },
    { label: "System size", value: `${roi.system_kwp} kWp`, color: "text-white" },
    { label: "Typical system cost", value: `£${fmt(roi.system_cost_gbp)}`, color: "text-white" },
    { label: "CO₂ offset", value: `${fmt(roi.co2_offset_kg)} kg/yr`, color: "text-[#10B981]" },
  ];

  return (
    <div
      className={`transition-all duration-700 ${blurred ? "blur-sm select-none pointer-events-none" : ""}`}
      aria-hidden={blurred}
    >
      <div className="grid grid-cols-2 gap-3 mb-4">
        {tiles.map((t) => (
          <div key={t.label} className="bg-[#0F2440] border border-white/10 rounded-xl p-4 text-center">
            <p className={labelClass}>{t.label}</p>
            <p className={`text-2xl font-black ${t.color}`}>{t.value}</p>
          </div>
        ))}
      </div>
      <p className="text-[#94A3B8] text-xs text-center px-2">{roi.disclaimer}</p>
    </div>
  );
}

export default function SolarPage() {
  const [stage, setStage] = useState<Stage>("idle");
  const [roi, setRoi] = useState<RoiResult | null>(null);
  const [displayPostcode, setDisplayPostcode] = useState("");
  const [apiError, setApiError] = useState<string | null>(null);
  const [postcodeLoading, setPostcodeLoading] = useState(false);
  const [claimLoading, setClaimLoading] = useState(false);

  const {
    register: regPostcode,
    handleSubmit: handlePostcode,
    formState: { errors: errPostcode },
  } = useForm<PostcodeForm>();

  const {
    register: regClaim,
    handleSubmit: handleClaim,
    formState: { errors: errClaim },
  } = useForm<ClaimForm>();

  const onPostcodeSubmit = async (data: PostcodeForm) => {
    setPostcodeLoading(true);
    setApiError(null);
    try {
      const res = await fetch("/api/solar-roi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postcode: data.postcode }),
      });
      const json = await res.json();
      if (!res.ok) { setApiError(json.error ?? "Something went wrong."); return; }
      setRoi(json as RoiResult);
      setDisplayPostcode(data.postcode.toUpperCase());
      setStage("estimated");
    } catch { setApiError("Could not reach server. Please try again."); }
    finally { setPostcodeLoading(false); }
  };

  const onClaimSubmit = async (data: ClaimForm) => {
    setClaimLoading(true);
    setApiError(null);
    try {
      const res = await fetch("/api/solar-roi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postcode: displayPostcode, name: data.name, phone: data.phone }),
      });
      const json = await res.json();
      if (!res.ok) { setApiError(json.error ?? "Something went wrong."); return; }
      setStage("claimed");
    } catch { setApiError("Could not reach server. Please try again."); }
    finally { setClaimLoading(false); }
  };

  return (
    <main className="min-h-screen bg-[#1B3A5C] px-4 py-12 flex flex-col items-center">
      <div className="w-full max-w-lg">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#F0B429]/10 border border-[#F0B429]/30
            text-[#F0B429] text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F0B429]" />
            Free Solar Estimate
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight mb-3">
            Got planning approved?<br />Here's what solar actually<br />costs in your area.
          </h1>
          <p className="text-[#94A3B8] text-sm mt-2">
            Most installs take 2–4 weeks once you pick an installer. We'll show you the numbers — and how to avoid the cowboys.
          </p>
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-[#94A3B8] mb-8 mt-2 text-center">
          <span>✓ Free, no obligation</span>
          <span>✓ Independent — not the council</span>
          <span>✓ 20+ vetted installers</span>
          <span>✓ Your data stays yours</span>
        </div>

        {/* IDLE */}
        {stage === "idle" && (
          <form onSubmit={handlePostcode(onPostcodeSubmit)} className="space-y-4">
            <div>
              <label className={labelClass}>Your postcode</label>
              <input
                {...regPostcode("postcode", { required: "Postcode is required" })}
                className={inputClass}
                placeholder="e.g. SW11"
                autoComplete="postal-code"
              />
              {errPostcode.postcode && (
                <p className="text-[#F0B429] text-xs mt-1">{errPostcode.postcode.message}</p>
              )}
            </div>
            {apiError && <p className="text-[#F0B429] text-sm text-center">{apiError}</p>}
            <button type="submit" disabled={postcodeLoading}
              className="button-claim w-full py-4 rounded-xl text-lg disabled:opacity-60">
              {postcodeLoading ? "Calculating…" : "Get My Estimate"}
            </button>
            <p className="text-center text-[#94A3B8] text-xs uppercase tracking-widest">
              Takes 10 seconds · No commitment
            </p>
          </form>
        )}

        {/* ESTIMATED */}
        {stage === "estimated" && roi && (
          <div className="space-y-6">
            <div className="bg-[#0F2440]/50 border border-[#F0B429]/20 rounded-2xl p-5">
              <p className="text-xs font-bold text-[#F0B429] uppercase tracking-widest mb-4 text-center">
                Your estimate for {displayPostcode}
              </p>
              <RoiGrid roi={roi} blurred />
            </div>

            <div className="bg-[#0F2440] border border-white/10 rounded-2xl p-5">
              <p className="font-black text-white mb-1">Get your personalised estimate</p>
              <p className="text-[#94A3B8] text-xs mb-4">
                We&apos;ll connect you with a vetted local installer — no pressure, no spam.
              </p>
              <form onSubmit={handleClaim(onClaimSubmit)} className="space-y-3">
                <div>
                  <label className={labelClass}>Your name</label>
                  <input {...regClaim("name", { required: "Name is required" })}
                    className={inputClass} placeholder="Jane Smith" autoComplete="name" />
                  {errClaim.name && <p className="text-[#F0B429] text-xs mt-1">{errClaim.name.message}</p>}
                </div>
                <div>
                  <label className={labelClass}>Phone number</label>
                  <input {...regClaim("phone", { required: "Phone is required" })}
                    type="tel" className={inputClass} placeholder="+44 7700 900000" autoComplete="tel" />
                  {errClaim.phone && <p className="text-[#F0B429] text-xs mt-1">{errClaim.phone.message}</p>}
                </div>
                {apiError && <p className="text-[#F0B429] text-sm text-center">{apiError}</p>}
                <button type="submit" disabled={claimLoading}
                  className="button-claim w-full py-4 rounded-xl disabled:opacity-60">
                  {claimLoading ? "Sending…" : "Get my personalised estimate"}
                </button>
                <p className="text-center text-[#94A3B8] text-xs">
                  We'll only use your details to connect you with a vetted installer. No spam, unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        )}

        {/* Founder note */}
        {stage !== "idle" && (
          <div className="mt-8 border-l-2 border-[#F0B429]/40 pl-4">
            <p className="text-[#94A3B8] text-sm italic">
              &ldquo;I created BuildRadar because homeowners get planning approval and then feel stuck.&rdquo;
            </p>
            <p className="text-[#F0B429] text-xs font-bold mt-1">— Clem, Founder</p>
          </div>
        )}

        {/* CLAIMED */}
        {stage === "claimed" && roi && (
          <div className="space-y-6">
            <div className="bg-[#0F2440]/50 border border-[#10B981]/30 rounded-2xl p-5">
              <div className="text-center mb-5">
                <div className="text-4xl mb-2">✅</div>
                <p className="text-[#10B981] font-black text-lg uppercase tracking-tight">Report unlocked</p>
                <p className="text-[#94A3B8] text-sm mt-1">
                  We&apos;ll connect you with a local installer within 24 hours.
                </p>
              </div>
              <p className="text-xs font-bold text-[#F0B429] uppercase tracking-widest mb-4 text-center">
                Your numbers for {displayPostcode}
              </p>
              <RoiGrid roi={roi} blurred={false} />
            </div>
            <p className="text-center text-[#94A3B8] text-xs px-4">
              By submitting, you agreed to be contacted about solar. Unsubscribe anytime.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}
