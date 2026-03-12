export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm">BR</span>
          </div>
          <span className="font-black text-gray-900 text-lg tracking-tight">BuildRadar</span>
        </div>
        <a
          href="#signup"
          className="bg-green-700 text-white font-semibold px-5 py-2 rounded-lg text-sm hover:bg-green-800 transition-colors"
        >
          Claim your area
        </a>
      </div>
    </nav>
  );
}
