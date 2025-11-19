import { Leaf, Truck, ShieldCheck, Coins } from "lucide-react"
import { motion } from "framer-motion"

const items = [
  {
    icon: Leaf,
    title: "Eco-responsable",
    desc: "Fibres certifiées FSC, encres à faible impact, emballages recyclables.",
  },
  {
    icon: Truck,
    title: "Livraison express",
    desc: "Réseau B2B national, créneaux garantis, suivi en temps réel.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité garantie",
    desc: "Contrôles lot par lot, blancheur et grammage maîtrisés.",
  },
  {
    icon: Coins,
    title: "Prix négociés",
    desc: "Contrats cadres, remises volume, facturation centralisée.",
  },
]

export default function Features() {
  return (
    <section id="solutions" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-white text-center">
          Pensé pour les entreprises exigeantes
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                <it.icon />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{it.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
