import { motion } from 'framer-motion'

const products = [
  {
    name: 'Ramettes A4 80g',
    desc: 'Idéal pour l’impression quotidienne. Blancheur CIE 161.',
    price: '3,90€ / ramette',
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Papier recyclé 100%',
    desc: 'Impact réduit, performance élevée. CIE 150.',
    price: '4,40€ / ramette',
    image: 'https://images.unsplash.com/photo-1664952702341-c56b989fd32e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYXBpZXIlMjByZWN5Y2wlQzMlQTklMjAxMDAlMjV8ZW58MHwwfHx8MTc2MzU3NTg5M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Bobines grand format',
    desc: 'Traceurs et arts graphiques. Tolérance +/- 1%.',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1587206668286-23f79b7d9923?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Products() {
  return (
    <section id="produits" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-white text-center">
          Produits phares
        </motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="relative h-52 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                <p className="text-slate-300 text-sm mt-1">{p.desc}</p>
                <div className="mt-4 inline-flex items-center rounded-xl bg-blue-600/90 text-white px-4 py-2">{p.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
