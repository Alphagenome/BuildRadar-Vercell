export default function Navbar() {
  return (
    <nav className="bg-[#1A1C1E] border-b border-white/10 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF6B00] rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm">BR</span>
          </div>
          <span className="font-black text-white text-lg tracking-tight uppercase">BuildRadar</span>
        </div>
        <a
          href="#signup"
          className="button-claim px-5 py-2 rounded-lg text-sm"
        >
          Claim your area
        </a>
      </div>
    </nav>
  );
}
