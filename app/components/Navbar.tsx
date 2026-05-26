import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-rose-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-rose-700">
          🎨 AI Colorimetry
        </Link>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <Link href="#roadmap" className="hover:text-rose-600 transition-colors">Roadmap</Link>
          <Link href="/docs" className="hover:text-rose-600 transition-colors">Docs</Link>
        </div>
      </div>
    </nav>
  );
}
