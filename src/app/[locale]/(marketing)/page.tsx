import { setRequestLocale } from 'next-intl/server';
import { createLead } from '@/actions/leads';

export default async function Index(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="bg-white font-sans text-gray-900">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-between bg-blue-50 px-6 py-20 sm:px-12 md:flex-row lg:px-24">
        <div className="space-y-6 md:w-1/2">
          <h1 className="text-4xl leading-tight font-extrabold text-blue-900 md:text-5xl">
            Vuelve a sonreír con <span className="text-blue-600">confianza</span>
          </h1>
          <p className="text-lg text-gray-700">
            Descubre el poder de una sonrisa perfecta con nuestros tratamientos de vanguardia.
            Especialistas en transformar vidas a través de la salud y estética dental.
          </p>
          <a
            href="#contacto"
            className="inline-block rounded-full bg-blue-600 px-8 py-3 font-bold text-white shadow-lg transition duration-300 hover:bg-blue-700"
          >
            Solicitar Valoración Gratis
          </a>
        </div>
        <div className="mt-12 flex justify-center md:mt-0 md:w-1/2">
          {/* Placeholder for Hero Image */}
          <div className="flex h-80 w-80 items-center justify-center rounded-full bg-blue-200 shadow-xl">
            <span className="font-medium text-blue-800">Imagen de paciente feliz</span>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="px-6 py-20 sm:px-12 lg:px-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Nuestros Tratamientos</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Soluciones personalizadas con la última tecnología dental para garantizar los mejores
            resultados.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {[
            {
              title: 'Implantes',
              desc: 'Recupera la funcionalidad y estética de tus dientes con implantes de titanio.',
              icon: '🦷',
            },
            {
              title: 'Ortodoncia',
              desc: 'Alinea tu sonrisa con brackets tradicionales o alineadores invisibles.',
              icon: '✨',
            },
            {
              title: 'Blanqueamiento',
              desc: 'Luce dientes más blancos y brillantes en una sola sesión.',
              icon: '😁',
            },
          ].map((benefit, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-md transition duration-300 hover:shadow-xl"
            >
              <div className="mb-4 text-4xl">{benefit.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-blue-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-50 px-6 py-20 sm:px-12 lg:px-24">
        <h2 className="mb-16 text-center text-3xl font-bold text-gray-800">
          Lo que dicen nuestros pacientes
        </h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {[
            {
              name: 'María López',
              text: 'Excelente atención. Me hice un blanqueamiento y quedé feliz con el resultado.',
              stars: 5,
            },
            {
              name: 'Carlos Ruiz',
              text: 'Los implantes me cambiaron la vida. No dolió nada y el trato fue muy profesional.',
              stars: 5,
            },
          ].map((testimonial, i) => (
            <div key={i} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex text-yellow-400">{'★'.repeat(testimonial.stars)}</div>
              <p className="mb-4 text-gray-700 italic">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200" />
                <span className="font-bold text-gray-900">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="bg-blue-600 px-6 py-20 text-white sm:px-12 lg:px-24">
        <div className="mx-auto flex max-w-3xl flex-col overflow-hidden rounded-2xl bg-white text-gray-900 shadow-2xl md:flex-row">
          <div className="flex flex-col justify-center bg-blue-800 p-10 text-white md:w-2/5">
            <h3 className="mb-4 text-2xl font-bold">Agenda tu cita</h3>
            <p className="mb-6 opacity-90">
              Déjanos tus datos y nos comunicaremos contigo para agendar una valoración gratuita.
            </p>
            <div className="space-y-4">
              <p>📞 +57 300 123 4567</p>
              <p>📍 Centro Médico Dental</p>
            </div>
          </div>
          <div className="p-10 md:w-3/5">
            <form
              action={async (formData) => {
                await createLead(formData);
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Juan Pérez"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="300 123 4567"
                />
              </div>
              <div>
                <label htmlFor="treatment" className="block text-sm font-medium text-gray-700">
                  Tratamiento de interés
                </label>
                <select
                  id="treatment"
                  name="treatment"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 bg-white p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Implantes">Implantes</option>
                  <option value="Ortodoncia">Ortodoncia</option>
                  <option value="Blanqueamiento">Blanqueamiento</option>
                  <option value="Valoracion General">Valoración General</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-4 w-full rounded-md bg-blue-600 px-4 py-3 font-bold text-white shadow transition duration-300 hover:bg-blue-700"
              >
                Enviar mis datos
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
