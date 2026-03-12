const testimonial = {
  quote:
    "Got my first job in week two. Knocked on the door, homeowner hadn't spoken to anyone yet. Quoted on the spot. £4,800 kitchen job. Pays for years of BuildRadar.",
  name: "Marcus T.",
  trade: "Builder, SW London",
  initials: "MT",
};

export default function SocialProof() {
  return (
    <section className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-2xl mx-auto">
        {/* Testimonial */}
        <div className="bg-green-50 border border-green-100 rounded-2xl p-8 mb-12">
          <div className="text-green-600 text-3xl mb-4">&ldquo;</div>
          <p className="text-gray-800 text-lg leading-relaxed mb-6 font-medium">
            {testimonial.quote}
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">{testimonial.initials}</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
              <p className="text-gray-500 text-xs">{testimonial.trade}</p>
            </div>
            <div className="ml-auto flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400 text-sm">★</span>
              ))}
            </div>
          </div>
        </div>

        {/* Founder trust signal */}
        <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-6">
          <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Built by Clem, London</p>
            <p className="text-gray-500 text-sm mt-1">
              BuildRadar started after I noticed how many local builders were missing out on jobs hiding in plain sight — weeks before homeowners start searching. I built this to fix that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
