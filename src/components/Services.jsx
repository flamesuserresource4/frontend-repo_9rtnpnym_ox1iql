import { Microscope, Cpu, FlaskConical, LineChart } from 'lucide-react';

const items = [
  {
    icon: Microscope,
    title: 'Descubrimiento y validación',
    desc: 'Research de usuarios, diseño de experimentos y validación técnica y de negocio.'
  },
  {
    icon: Cpu,
    title: 'Prototipado rápido',
    desc: 'MVPs funcionales en software y hardware con ciclos iterativos de 1-2 semanas.'
  },
  {
    icon: FlaskConical,
    title: 'Laboratorio y pruebas',
    desc: 'Protocolos, instrumentación y análisis estadístico para calidad y seguridad.'
  },
  {
    icon: LineChart,
    title: 'Roadmap de I+D',
    desc: 'Gobernanza, métricas y transferencia tecnológica orientada a impacto.'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Nuestro expertise</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">Acompañamos todo el ciclo de I+D, desde la hipótesis hasta la transferencia.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 rounded-xl border border-black/5 bg-white hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
