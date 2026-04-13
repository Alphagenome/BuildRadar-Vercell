import BrandIcon from "@/components/BrandIcon";

export default function Navbar() {
  return (
    <nav className="bg-[#1B3A5C] border-b border-white/10 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BrandIcon variant="horizontal" size={280} />
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
