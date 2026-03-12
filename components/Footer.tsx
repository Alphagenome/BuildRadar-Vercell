export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6 text-center text-sm">
      <p className="font-semibold text-white mb-1">BuildRadar</p>
      <p className="mb-4">Early building job leads for London builders</p>
      <p>© {new Date().getFullYear()} BuildRadar. All rights reserved.</p>
    </footer>
  );
}
