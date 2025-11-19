import { useState } from "react";
import { ShoppingCart, User, Search, Menu, X, ChevronDown } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "Categories", href: "#categories" },
  { label: "Deals", href: "#deals" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src="/flame-icon.svg" alt="Logo" className="h-8 w-8" />
            <span className="font-semibold text-slate-900 text-lg">Flames Shop</span>
          </a>

          {/* Center: Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <div className="relative group hidden lg:block">
              <button className="flex items-center gap-1 text-slate-700 hover:text-slate-900 text-sm font-medium">
                More <ChevronDown className="h-4 w-4" />
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 mt-2 min-w-[180px] rounded-lg border border-slate-200 bg-white shadow-lg p-2">
                <a href="#new" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">New Arrivals</a>
                <a href="#bestsellers" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">Best Sellers</a>
                <a href="#gift" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">Gift Cards</a>
              </div>
            </div>
          </nav>

          {/* Right: actions */}
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:flex items-center">
              <Search className="absolute left-3 h-4 w-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products"
                className="pl-9 pr-3 py-2 rounded-full bg-slate-100 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
              />
            </div>
            <button aria-label="Account" className="p-2 rounded-full hover:bg-slate-100 text-slate-700">
              <User className="h-5 w-5" />
            </button>
            <button aria-label="Cart" className="relative p-2 rounded-full hover:bg-slate-100 text-slate-700">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-slate-900 text-white rounded-full px-1.5 py-0.5 leading-none">0</span>
            </button>
            <button
              className="md:hidden p-2 rounded-full hover:bg-slate-100 text-slate-700"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden transition-all ${open ? "max-h-96" : "max-h-0"}`}
      >
        <div className="px-4 sm:px-6 pt-2 pb-4 border-t border-slate-200 bg-white">
          <div className="flex sm:hidden items-center gap-2 mb-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 h-4 w-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products"
                className="w-full pl-9 pr-3 py-2 rounded-md bg-slate-100 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
              />
            </div>
          </div>
          <nav className="grid gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100 text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 border-t border-slate-200 pt-2">
              <a href="#new" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100 text-sm">New Arrivals</a>
              <a href="#bestsellers" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100 text-sm">Best Sellers</a>
              <a href="#gift" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100 text-sm">Gift Cards</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
