export default function Footer() {
  return (
    <footer className="w-full border-t border-rose-100 bg-white mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© 2026 AI Colorimetry Assistant · Built with Next.js + Tailwind + Supabase</p>
        <div className="flex gap-4">
          
            href="https://github.com/camibarcenag-debug/ai-colorimetry-assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-600 transition-colors"
          >
            GitHub ↗
          </a>
          <a href="/docs" className="hover:text-rose-600 transition-colors">Docs</a>
        </div>
      </div>
    </footer>
  );
}
