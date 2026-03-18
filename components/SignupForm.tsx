"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  whatsapp: string;
  postcode: string;
  radius: string;
};

export default function SignupForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

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
          <div className="lead-card border border-[#10B981]/30 rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-black text-[#10B981] mb-2 uppercase tracking-tight">You&apos;re in</h3>
            <p className="text-[#94A3B8]">
              We&apos;ll WhatsApp you within 24 hours with your first Data Drop.
            </p>
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

            <div>
              <label className={labelClass}>How far will you travel?</label>
              <select
                {...register("radius", { required: true })}
                className={inputClass}
              >
                <option value="" className="bg-[#0F172A]">Select radius</option>
                <option value="3" className="bg-[#0F172A]">Up to 3 miles</option>
                <option value="5" className="bg-[#0F172A]">Up to 5 miles</option>
                <option value="10" className="bg-[#0F172A]">Up to 10 miles</option>
              </select>
              {errors.radius && <p className="text-[#FF6B00] text-xs mt-1">Required</p>}
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
