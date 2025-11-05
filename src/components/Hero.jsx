import { Beaker, Brain, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            >
              Consultoría en I+D para acelerar tu siguiente avance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-gray-600 text-lg"
            >
              Te ayudamos a definir, prototipar y validar soluciones tecnológicas con rigor científico y enfoque de negocio.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contacto" className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                <Beaker size={18} /> Empezar un proyecto
              </a>
              <a href="#servicios" className="inline-flex items-center gap-2 px-5 py-3 border border-indigo-200 text-indigo-700 bg-indigo-50 rounded-md hover:bg-indigo-100 transition-colors">
                <Brain size={18} /> Ver expertise
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-lg bg-white/60 border border-black/5">
                <div className="text-2xl font-bold">40+</div>
                <div className="text-xs text-gray-500">Proyectos I+D</div>
              </div>
              <div className="p-4 rounded-lg bg-white/60 border border-black/5">
                <div className="text-2xl font-bold">8 semanas</div>
                <div className="text-xs text-gray-500">Tiempo a prototipo</div>
              </div>
              <div className="p-4 rounded-lg bg-white/60 border border-black/5">
                <div className="text-2xl font-bold">3 áreas</div>
                <div className="text-xs text-gray-500">Software, hardware, biotec</div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl border border-black/5 bg-gradient-to-br from-indigo-600 to-purple-600 p-1">
              <div className="w-full h-full rounded-xl bg-white/95 flex items-center justify-center">
                <FlaskConical className="text-indigo-600" size={56} />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-black/5 px-4 py-3">
              <p className="text-sm font-medium">Metodología</p>
              <p className="text-xs text-gray-500">Explorar → Prototipar → Validar</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
