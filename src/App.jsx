import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero placeholder */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-100 rounded-full px-3 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              New Collection
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">Discover products you’ll love</h1>
            <p className="text-slate-600 mb-8">Shop the latest trends across fashion, gadgets, and home. Handpicked items, fast shipping, easy returns.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#shop" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800">Start shopping</a>
              <a href="#deals" className="inline-flex items-center justify-center rounded-md border border-slate-300 text-slate-800 px-5 py-3 text-sm font-semibold hover:bg-slate-50">View deals</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200" />
            <div className="absolute -bottom-6 -left-6 hidden sm:block h-24 w-24 rounded-2xl bg-emerald-100" />
            <div className="absolute -top-6 -right-6 hidden sm:block h-24 w-24 rounded-full bg-indigo-100" />
          </div>
        </div>
      </section>

      {/* Category teaser */}
      <section id="categories" className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Shop by category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Women","Men","Tech","Home","Beauty","Sport"].map((c) => (
              <a key={c} href={`#${c.toLowerCase()}`} className="group rounded-xl border border-slate-200 bg-white p-4 hover:shadow-sm transition">
                <div className="aspect-square rounded-lg bg-slate-100 mb-3 group-hover:bg-slate-200 transition" />
                <div className="text-center text-sm font-medium text-slate-700">{c}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer placeholder */}
      <footer className="py-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} Flames Shop. All rights reserved.</footer>
    </div>
  )
}

export default App
