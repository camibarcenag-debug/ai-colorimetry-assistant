export default function Docs() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <span className="text-xs font-semibold uppercase tracking-widest text-rose-500">Week 0</span>
      <h1 className="text-4xl font-black text-gray-900 mt-2 mb-4">Documentation</h1>
      <p className="text-gray-500 mb-12">Setup guide and architecture for AI Colorimetry Assistant.</p>
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-3">⚙️ Environment Variables</h2>
        <div className="bg-gray-900 rounded-xl p-5 font-mono text-sm text-green-400 leading-loose">
          <p className="text-gray-400"># .env.local</p>
          <p>NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url</p>
          <p>NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3">🧪 Testing Checklist</h2>
        <div className="space-y-2">
          {[
            "Homepage / loads correctly",
            "/docs page loads correctly",
            "Navbar links work",
            "Live Vercel URL works from incognito tab",
            "Supabase project created and URL documented",
          ].map((test) => (
            <div key={test} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg text-sm text-gray-700">
              <span className="text-rose-500">✓</span>{test}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
