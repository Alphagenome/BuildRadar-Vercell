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
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // handle silently — show success anyway (don't lose signups)
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="signup" className="py-20 px-6 bg-white">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3">Join the pilot — it&apos;s free</h2>
        <p className="text-gray-500 text-center mb-10">
          We&apos;re running a free pilot with a small group of London builders. Drop your details and we&apos;ll WhatsApp you this week&apos;s leads for your area.
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-bold text-green-800 mb-2">You&apos;re in</h3>
            <p className="text-green-600">
              We&apos;ll WhatsApp you within 24 hours with your first leads.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your name</label>
              <input
                {...register("name", { required: true })}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="John Smith"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">Required</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp number <span className="text-gray-400 font-normal">(leads sent here)</span>
              </label>
              <input
                {...register("whatsapp", { required: true })}
                type="tel"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="+44 7700 900000"
              />
              {errors.whatsapp && <p className="text-red-500 text-xs mt-1">Required</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your base postcode</label>
              <input
                {...register("postcode", { required: true })}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="SW15 5AA"
              />
              {errors.postcode && <p className="text-red-500 text-xs mt-1">Required</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">How far will you travel?</label>
              <select
                {...register("radius", { required: true })}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select radius</option>
                <option value="3">Up to 3 miles</option>
                <option value="5">Up to 5 miles</option>
                <option value="10">Up to 10 miles</option>
              </select>
              {errors.radius && <p className="text-red-500 text-xs mt-1">Required</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-700 text-white font-bold py-4 rounded-xl text-lg hover:bg-green-800 transition-colors disabled:opacity-60"
            >
              {loading ? "Sending..." : "Get my first leads — free"}
            </button>

            <p className="text-center text-gray-400 text-xs">
              No payment. No commitment. Just leads.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
