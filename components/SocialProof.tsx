import BrandIcon from "./BrandIcon";

const testimonial = {
  quote:
    "Got my first job in week two. Knocked on the door, homeowner hadn't spoken to anyone yet. Quoted on the spot. £4,800 kitchen job. Pays for years of BuildRadar.",
  name: "Marcus T.",
  trade: "Builder, SW London",
  initials: "MT",
};

export default function SocialProof() {
  return (
    <section className="py-16 px-6 bg-[#0F172A] border-t border-white/10">
      <div className="max-w-2xl mx-auto">
        {/* Testimonial */}
        <div className="lead-card rounded-2xl p-8 mb-12 border border-white/10">
          <div className="text-[#FF6B00] text-3xl mb-4">&ldquo;</div>
          <p className="text-white text-lg leading-relaxed mb-6 font-medium">
            {testimonial.quote}
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF6B00] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">{testimonial.initials}</span>
            </div>
            <div>
              <p className="font-semibold text-white text-sm">{testimonial.name}</p>
              <p className="text-[#94A3B8] text-xs">{testimonial.trade}</p>
            </div>
            <div className="ml-auto flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400 text-sm">★</span>
              ))}
            </div>
          </div>
        </div>

        {/* Intelligence Team trust signal */}
        <div className="flex items-center gap-4 border border-white/10 rounded-2xl p-6 bg-white/5">
          <BrandIcon variant="icon" size={56} className="rounded-sm flex-shrink-0" />
          <div>
            <p className="font-bold text-white uppercase tracking-tight">The BuildRadar Intelligence Team</p>
            <p className="text-[#94A3B8] text-sm mt-1">
              We monitor public planning data across all 32 London boroughs — identifying approved building work weeks before homeowners start searching for tradespeople.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
