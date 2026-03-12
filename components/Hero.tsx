export default function Hero() {
  return (
    <section className="bg-green-700 text-white px-6 py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="inline-block bg-green-600 text-green-100 text-sm font-medium px-4 py-1 rounded-full mb-6">
          Now live in London — founding members only
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Get the refurb job<br />before they search for anyone
        </h1>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Every week, hundreds of London homeowners get the go-ahead for building work — full refurbs, kitchens, bathrooms, extensions.
          BuildRadar finds them first and sends the lead straight to your WhatsApp — before they open Google.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#signup"
            className="bg-white text-green-700 font-black px-8 py-4 rounded-lg text-lg hover:bg-green-50 transition-colors shadow-lg"
          >
            Join the pilot — it&apos;s free
          </a>
          <a
            href="#sample"
            className="border-2 border-green-400 text-green-100 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-green-600 transition-colors"
          >
            See a sample lead
          </a>
        </div>
        <p className="text-green-200 text-sm mt-6">
          Free for founding builders. Max 3 builders per area. Your postcode, your leads.
        </p>
      </div>
    </section>
  );
}
