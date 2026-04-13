import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F2440] border-t border-white/10 py-10 px-6 text-center text-sm">
      <p className="font-black text-white mb-1 uppercase tracking-tight">BuildRadar</p>
      <p className="text-[#94A3B8] mb-6">Building intelligence. Verified opportunities. London.</p>

      {/* Official data badge */}
      <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
        <span className="text-[#10B981] text-xs">●</span>
        <span className="text-[#94A3B8] text-xs font-semibold uppercase tracking-widest">
          Partnered with Planning Data
        </span>
      </div>

      {/* Legal links */}
      <div className="flex justify-center gap-8 text-xs text-[#94A3B8] mb-4">
        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        <a href="mailto:clem@buildradar.co.uk" className="hover:text-white transition-colors">Contact</a>
      </div>

      <p className="text-[#94A3B8]/50 text-xs">© {new Date().getFullYear()} BuildRadar. All rights reserved.</p>
    </footer>
  );
}
