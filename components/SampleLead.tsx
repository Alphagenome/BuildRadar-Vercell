export default function SampleLead() {
  return (
    <section id="sample" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">This is what lands on your phone</h2>
        <p className="text-gray-500 mb-12 text-lg">
          Real lead. Real address. Southwest London, February 2026.
        </p>

        {/* WhatsApp mockup */}
        <div className="max-w-sm mx-auto bg-gray-100 rounded-3xl p-4 shadow-xl">
          {/* Phone header */}
          <div className="bg-green-700 rounded-2xl px-4 py-3 flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-700 font-bold text-xs">BR</span>
            </div>
            <div className="text-left">
              <div className="text-white font-semibold text-sm">BuildRadar</div>
              <div className="text-green-200 text-xs">New lead near you</div>
            </div>
          </div>

          {/* Message bubble */}
          <div className="bg-white rounded-2xl p-4 text-left shadow-sm">
            <p className="text-xs text-gray-400 mb-3">Today, 7:30am</p>
            <p className="font-semibold text-gray-800 mb-3">🏗️ New building job near you</p>
            <div className="space-y-1 text-sm text-gray-700 mb-4">
              <p>📍 <span className="font-medium">7 Dover House Road SW15 5AA</span></p>
              <p>🔨 Full house refurbishment</p>
              <p>📅 Approved 18 Feb — work likely Apr+</p>
              <p>🗺️ 0.8 miles from you</p>
            </div>
            <p className="text-xs text-gray-400 mb-3">
              You are 1 of 3 builders notified.
            </p>
            {/* Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-green-600 text-white text-sm font-semibold py-2 rounded-xl">
                ✅ Claim
              </button>
              <button className="bg-gray-100 text-gray-600 text-sm font-semibold py-2 rounded-xl">
                ⏭️ Skip
              </button>
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-sm mt-8">
          Every week. Straight to WhatsApp. No login needed.
        </p>
      </div>
    </section>
  );
}
