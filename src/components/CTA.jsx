import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/40 to-cyan-500/30">
          <div className="absolute -top-20 -right-10 h-48 w-48 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-blue-400/30 blur-2xl" />

          <div className="relative p-10 md:p-14 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Prêt à optimiser vos achats papier ?</h3>
              <p className="mt-2 text-slate-100/90">Accédez à des tarifs négociés et une logistique taillée pour le B2B. On vous répond sous 1h ouvrée.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="mailto:contact@papierpro.fr" className="inline-flex items-center rounded-xl bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 font-semibold shadow-lg">\n                Demander un devis\n              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
