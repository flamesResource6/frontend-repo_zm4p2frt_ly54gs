import { Menu, Phone, ShoppingCart } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavLink = ({ href = "#", children }) => (
    <a href={href} className="text-slate-200/90 hover:text-white transition-colors">
      {children}
    </a>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-md bg-slate-900/60 border border-white/10 rounded-2xl px-4 py-3 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 blur-lg bg-gradient-to-tr from-blue-500/40 to-cyan-400/40 -z-10" />
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
                  P
                </div>
              </div>
              <div className="leading-tight">
                <div className="text-white font-semibold text-lg tracking-tight">PapierPro</div>
                <div className="text-xs text-slate-300/70">Fournisseur B2B</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#solutions">Solutions</NavLink>
              <NavLink href="#produits">Produits</NavLink>
              <NavLink href="#qualite">Qualité</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-white/10 transition-colors">
                <Phone size={18} />
                Obtenir un devis
              </a>
              <button className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white w-10 h-10 shadow-lg shadow-blue-500/30 transition-colors" aria-label="Panier">
                <ShoppingCart size={18} />
              </button>
            </div>

            <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-white border border-white/10" onClick={() => setOpen(v => !v)} aria-label="Menu">
              <Menu />
            </button>
          </div>

          {open && (
            <div className="md:hidden pt-3 pb-2 grid gap-2">
              <a href="#solutions" className="text-slate-200/90 hover:text-white">Solutions</a>
              <a href="#produits" className="text-slate-200/90 hover:text-white">Produits</a>
              <a href="#qualite" className="text-slate-200/90 hover:text-white">Qualité</a>
              <a href="#contact" className="text-slate-200/90 hover:text-white">Contact</a>
              <a href="#contact" className="mt-2 inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-4 py-2">
                <Phone size={18} /> Devis rapide
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
