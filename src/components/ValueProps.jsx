import { BadgeCheck, PiggyBank, Clock3 } from 'lucide-react';

const values = [
  {
    icon: BadgeCheck,
    title: 'Marcas confiables',
    desc: 'Portafolio con marcas reconocidas para asegurar desempeño y durabilidad.'
  },
  {
    icon: PiggyBank,
    title: 'Precios competitivos',
    desc: 'Negociamos por volumen para ofrecerte mejores condiciones.'
  },
  {
    icon: Clock3,
    title: 'Respuesta rápida',
    desc: 'Cotizaciones en minutos y seguimiento hasta la entrega.'
  }
];

export default function ValueProps() {
  return (
    <section id="valor" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">¿Por qué Dapromex?</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl border border-black/5 bg-white">
              <div className="h-10 w-10 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center">
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
