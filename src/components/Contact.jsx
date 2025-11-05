import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 800));
    setStatus('success');
  };

  return (
    <section id="contacto" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Conversemos</h2>
            <p className="mt-2 text-gray-600">Cuéntanos sobre tu reto de I+D y vemos cómo ayudarte.</p>

            <div className="mt-6 space-y-3 text-sm">
              <p className="inline-flex items-center gap-2 text-gray-700"><Mail size={16}/> hola@dapromex.com</p>
              <p className="inline-flex items-center gap-2 text-gray-700"><Phone size={16}/> +52 55 0000 0000</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 rounded-xl border border-black/5 bg-white space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Nombre</label>
                <input required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Correo</label>
                <input type="email" required className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="tu@email.com" />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600">Mensaje</label>
              <textarea required rows={4} className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Describe tu reto" />
            </div>
            <button disabled={status==='loading'} className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50">
              <Send size={16} /> {status==='success' ? '¡Enviado!' : status==='loading' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
