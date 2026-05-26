export default function Home() {
  const roadmap = [
    { week: "Week 0", title: "Builder Infrastructure", status: "done", desc: "GitHub, Vercel, Supabase, Next.js, Tailwind setup" },
    { week: "Week 1", title: "AI Color Analysis", status: "upcoming", desc: "Upload a photo, get your seasonal color palette via AI" },
    { week: "Week 2", title: "Color Palette Generator", status: "upcoming", desc: "Generate personalized color palettes with AI recommendations" },
    { week: "Week 3", title: "Style Dashboard", status: "upcoming", desc: "Save palettes, build your personal color profile" },
    { week: "Week 4", title: "Shopping Integration", status: "upcoming", desc: "Find clothing that matches your palette" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-rose-100 text-rose-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          AI-Powered · Week 0 Live
        </span>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 leading-tight mb-6">
          Discover Your <span className="text-rose-600">Perfect Colors</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          AI Colorimetry Assistant analyzes your features and recommends the exact color palette that makes you shine.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#roadmap" className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors">
            See the Roadmap →
          </a>
          <a href="/docs" className="border border-rose-200 hover:border-rose-400 text-gray-700 font-semibold px-8 py-3.5 rounded-xl transition-colors">
            View Docs
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: "📸", title: "Upload a Photo", desc: "AI analyzes your skin tone, eye color, and hair to determine your season." },
            { icon: "🎨", title: "Get Your Palette", desc: "Receive a personalized color palette tailored to your unique features." },
            { icon: "👗", title: "Shop with Confidence", desc: "Know exactly which colors to buy — and which to avoid." },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-2xl border border-rose-100 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="roadmap" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-black text-gray-900 mb-2">Project Roadmap</h2>
        <p className="text-gray-500 mb-10">What we are building, week by week.</p>
        <div className="space-y-4">
          {roadmap.map((item) => (
            <div key={item.week} className={`flex items-start gap-5 p-5 rounded-2xl border ${item.status === "done" ? "bg-rose-50 border-rose-200" : "bg-white border-gray-100"}`}>
              <div className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${item.status === "done" ? "bg-rose-600 text-white" : "bg-gray-100 text-gray-400"}`}>
                {item.status === "done" ? "✓" : "○"}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-rose-500">{item.week}</span>
                  {item.status === "done" && <span className="text-xs bg-rose-600 text-white px-2 py-0.5 rounded-full">Live</span>}
                </div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
