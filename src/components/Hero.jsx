import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute top-20 -left-40 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-12">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Votre partenaire papier B2B, moderne et durable
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 text-lg text-slate-300 max-w-xl"
          >
            Des fournitures papier premium, livrées rapidement à vos équipes.
            Tarifs négociés, qualité certifiée, suivi en temps réel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#produits" className="inline-flex items-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 shadow-lg shadow-blue-500/30 transition-colors">
              Découvrir nos produits
            </a>
            <a href="#contact" className="inline-flex items-center rounded-xl bg-white/10 hover:bg-white/20 text-white px-6 py-3 border border-white/10">
              Obtenir un devis
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {["48h", "ISO 9706", "+1200"].map((stat, i) => (
              <motion.div key={stat} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i*0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-2xl font-bold text-white">{stat}</div>
                <div className="text-xs text-slate-300">{["Livraison","Norme","Clients"][i]}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.06),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.08),transparent_35%)]" />
          <Spline scene="https://prod.spline.design/yYw7mcl7bY5sXEVR/scene.splinecode" />
        </motion.div>
      </div>
    </section>
  )
}
