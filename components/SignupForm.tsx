"use client";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  whatsapp: string;
  postcode: string;
};

export default function SignupForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const confirmRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        const target = document.getElementById("how-it-works");
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  }, [submitted]);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      // Check territory availability first
      const territoryRes = await fetch("/api/territory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postcode: data.postcode }),
      });
      const territory = await territoryRes.json();

      if (!territory.available) {
        window.location.href = "/waitlist";
        return;
      }

      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // handle silently — don't lose signups
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#94A3B8] focus:outline-none focus:border-[#FF6B00] transition-colors";
  const labelClass = "block text-xs font-bold text-[#94A3B8] mb-1 uppercase tracking-widest";

  return (
    <section id="signup" className="py-20 px-6 bg-[#1A1C1E]">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-black text-center mb-3 uppercase tracking-tight text-white">
          Join the pilot — it&apos;s free
        </h2>
        <p className="text-[#94A3B8] text-center mb-10">
          We&apos;re running a free pilot with a small group of London builders. Drop your details and we&apos;ll WhatsApp you this week&apos;s Data Drop — verified opportunities in your area.
        </p>

        {submitted ? (
          <div ref={confirmRef} className="lead-card border border-[#10B981]/30 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-black text-[#10B981] mb-3 uppercase tracking-tight">You&apos;re in</h3>
            <p className="text-white font-bold mb-6">
              Your first Data Drop lands this Friday at 7:30am.
            </p>
            <div className="text-left space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-[#FF6B00] font-black text-lg leading-none mt-0.5">1</span>
                <p className="text-[#94A3B8] text-sm"><span className="text-white font-bold">Friday 7:30am</span> — We WhatsApp you a verified opportunity near you. Homeowner name, job type, area, estimated value.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FF6B00] font-black text-lg leading-none mt-0.5">2</span>
                <p className="text-[#94A3B8] text-sm"><span className="text-white font-bold">Reply CLAIM</span> — We release the full address. You have 48 hours before it goes to the next builder on the list.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FF6B00] font-black text-lg leading-none mt-0.5">3</span>
                <p className="text-[#94A3B8] text-sm"><span className="text-white font-bold">Knock the door</span> — Use your Conversion Kit: door-knock script, objection handlers, and a 48hr follow-up template.</p>
              </div>
            </div>
            <div className="bg-[#0F172A] border border-white/10 rounded-xl px-5 py-4 text-left">
              <p className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest mb-2">Your Conversion Kit</p>
              <p className="text-[#94A3B8] text-sm mb-1">Door-knock script, objection handlers &amp; follow-up template.</p>
              <p className="text-white text-sm">👉 <span className="font-mono font-bold">buildradar.co.uk/toolkit</span></p>
              <p className="text-[#94A3B8] text-xs mt-2">Password: <span className="text-white font-mono">founding2026</span></p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className={labelClass}>Your name</label>
              <input
                {...register("name", { required: true })}
                className={inputClass}
                placeholder="John Smith"
              />
              {errors.name && <p className="text-[#FF6B00] text-xs mt-1">Required</p>}
            </div>

            <div>
              <label className={labelClass}>
                WhatsApp number <span className="text-[#94A3B8] normal-case font-normal">(leads sent here)</span>
              </label>
              <input
                {...register("whatsapp", { required: true })}
                type="tel"
                className={inputClass}
                placeholder="+44 7700 900000"
              />
              {errors.whatsapp && <p className="text-[#FF6B00] text-xs mt-1">Required</p>}
            </div>

            <div>
              <label className={labelClass}>Your base postcode</label>
              <input
                {...register("postcode", { required: true })}
                className={inputClass}
                placeholder="SW15 5AA"
              />
              {errors.postcode && <p className="text-[#FF6B00] text-xs mt-1">Required</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="button-claim w-full py-4 rounded-xl text-lg disabled:opacity-60"
            >
              {loading ? "Sending..." : "Get the Lead + Conversion Kit — free"}
            </button>

            <p className="text-center text-[#94A3B8] text-xs uppercase tracking-widest">
              No payment · No commitment · Just verified opportunities
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
