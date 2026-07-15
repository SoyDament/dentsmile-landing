'use client';

import Image from 'next/image';

export default function DentSmileLanding() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-blue-500 selection:text-white">
      {/* 1. Header & Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            {/* Dentsmile Logo */}
            <svg
              className="h-8 w-8 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Dent<span className="text-blue-600">Smile</span>
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#beneficios" className="transition-colors hover:text-blue-600">
              Tratamientos
            </a>
            <a href="#testimonios" className="transition-colors hover:text-blue-600">
              Testimonios
            </a>
            <a href="#contacto" className="transition-colors hover:text-blue-600">
              Contacto
            </a>
          </nav>
          <div>
            <a
              href="#contacto"
              className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
            >
              Reservar Cita Gratis
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-blue-50 via-white to-slate-50 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Hero Left Content */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              Citas de valoración 100% gratuitas este mes
            </div>
            <h1 className="text-4xl leading-[1.15] font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Vuelve a sonreír con la confianza que te mereces
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              En <strong className="text-slate-900">DentSmile</strong> combinamos tecnología dental
              de vanguardia con un trato humano y sin dolor. Tu primera consulta de diagnóstico y
              radiografía es gratis.
            </p>

            {/* CTA Buttons & Micro-copy */}
            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <a
                href="#contacto"
                className="flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-2xl"
              >
                Solicitar Cita de Valoración
              </a>
              <a
                href="tel:+123456789"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:bg-slate-50"
              >
                <svg
                  className="h-5 w-5 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Llamar ahora
              </a>
            </div>

            {/* Trust Signals */}
            <div className="mt-10 flex items-center gap-6 border-t border-slate-100 pt-8">
              <div className="flex -space-x-2">
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Paciente"
                  width={40}
                  height={40}
                  unoptimized
                />
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Paciente"
                  width={40}
                  height={40}
                  unoptimized
                />
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Paciente"
                  width={40}
                  height={40}
                  unoptimized
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">+1,200 Pacientes Felices</p>
                <div className="flex items-center gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <span key={num} className="text-base">
                      ★
                    </span>
                  ))}
                  <span className="ml-1 text-xs font-medium text-slate-500">4.9/5 en Google</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="relative mt-16 flex items-center justify-center lg:col-span-5 lg:mt-0">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-blue-400/10 blur-3xl" />
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-slate-200 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                alt="Odontóloga sonriendo en clínica DentSmile"
                className="h-[480px] w-full object-cover"
                width={800}
                height={480}
                unoptimized
              />
              <div className="absolute right-4 bottom-4 left-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-md">
                <p className="text-sm font-bold text-slate-900">Dra. Sofía Mendoza</p>
                <p className="text-xs font-medium text-blue-600">Directora Médica — M.N. 12456</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Beneficios / Tratamientos (Grid Moderno) */}
      <section id="beneficios" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold tracking-wider text-blue-600 uppercase">
              Nuestras Especialidades
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Tratamientos diseñados para transformar tu sonrisa
            </p>
            <p className="mt-4 text-lg text-slate-600">
              Utilizamos técnicas de última generación que garantizan resultados estéticos
              excepcionales con la mínima molestia.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1: Implantes */}
            <div className="group relative rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">Implantes Dentales</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Recupera la funcionalidad y estética de tus dientes perdidos con implantes de
                titanio biocompatibles de alta duración. Diseñados para sentirse como propios.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-slate-500">
                <li className="flex items-center gap-2">✔ Cirugía guiada por computadora</li>
                <li className="flex items-center gap-2">✔ Prótesis estéticas Premium</li>
              </ul>
            </div>

            {/* Card 2: Ortodoncia */}
            <div className="group relative rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">Ortodoncia Invisible</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Alinea tu sonrisa de forma cómoda y discreta con alineadores transparentes. Nadie
                notará que los llevas puestos. Perfectos para adultos y adolescentes.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-slate-500">
                <li className="flex items-center gap-2">✔ Removibles y cómodos</li>
                <li className="flex items-center gap-2">✔ Simulación 3D de resultados</li>
              </ul>
            </div>

            {/* Card 3: Blanqueamiento */}
            <div className="group relative rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900">Blanqueamiento Clínico</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Logra una sonrisa hasta 8 tonos más blanca en una sola sesión de 45 minutos.
                Utilizamos geles avanzados que reducen al mínimo la sensibilidad dental.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-slate-500">
                <li className="flex items-center gap-2">✔ Tecnología de fotoactivación</li>
                <li className="flex items-center gap-2">✔ Resultados inmediatos y seguros</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sección de Prueba Social (Testimonios) */}
      <section id="testimonios" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold tracking-wider text-blue-600 uppercase">
              Opiniones Reales
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Lo que dicen nuestros pacientes
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonio 1 */}
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-md shadow-slate-100">
              <div className="flex items-center gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 italic">
                &quot;Excelente atención. Me realicé un tratamiento de ortodoncia invisible y los
                cambios han sido increíbles. El trato de los médicos es inmejorable, cero dolor y
                muy profesionales.&quot;
              </p>
              <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-4">
                <Image
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Laura Ruiz"
                  width={40}
                  height={40}
                  unoptimized
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Laura Ruiz</h4>
                  <p className="text-xs text-slate-500">Paciente de Ortodoncia</p>
                </div>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-md shadow-slate-100">
              <div className="flex items-center gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 italic">
                &quot;Le tenía pánico al dentista, pero en DentSmile me hicieron un implante y ni lo
                sentí. Te explican todo el procedimiento detalladamente. Recomiendo la clínica al
                100%.&quot;
              </p>
              <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-4">
                <Image
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Carlos Gómez"
                  width={40}
                  height={40}
                  unoptimized
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Carlos Gómez</h4>
                  <p className="text-xs text-slate-500">Paciente de Implantes</p>
                </div>
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-md shadow-slate-100">
              <div className="flex items-center gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 italic">
                &quot;Fui por una limpieza y terminé haciéndome un blanqueamiento dental. El cambio
                fue asombroso en una sola cita. El personal es súper amable y las instalaciones son
                impecables.&quot;
              </p>
              <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-4">
                <Image
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="María Fernández"
                  width={40}
                  height={40}
                  unoptimized
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">María Fernández</h4>
                  <p className="text-xs text-slate-500">Paciente de Estética</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Formulario de Contacto / Conversión */}
      <section id="contacto" className="relative overflow-hidden bg-white py-24">
        {/* Decorative background grid pattern */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-30" />

        <div className="mx-auto max-w-4xl px-6">
          <div className="overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl md:grid md:grid-cols-12">
            {/* Form Info Panel */}
            <div className="flex flex-col justify-between bg-blue-600 p-8 md:col-span-5 md:p-12">
              <div>
                <h3 className="text-2xl font-bold">¡Empieza hoy mismo!</h3>
                <p className="mt-3 text-sm leading-relaxed text-blue-100">
                  Completa el formulario y uno de nuestros asesores se pondrá en contacto contigo
                  para agendar tu diagnóstico gratuito.
                </p>
              </div>
              <div className="mt-10 space-y-4 text-sm text-blue-100">
                <div className="flex items-center gap-3">
                  <span>📍</span> Calle Principal 123, Ciudad
                </div>
                <div className="flex items-center gap-3">
                  <span>📞</span> +1 234 567 89
                </div>
                <div className="flex items-center gap-3">
                  <span>✉</span> contacto@dentsmile.com
                </div>
              </div>
            </div>

            {/* Form Fields Panel */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="space-y-6 p-8 md:col-span-7 md:p-12"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold tracking-wider text-slate-300 uppercase"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Ej. Juan Pérez"
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-semibold tracking-wider text-slate-300 uppercase"
                  >
                    Teléfono de contacto
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="Ej. +1 234 567 89"
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-xs font-semibold tracking-wider text-slate-300 uppercase"
                >
                  Servicio de interés
                </label>
                <select
                  id="service"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="implantes">Implantes Dentales</option>
                  <option value="ortodoncia">Ortodoncia Invisible</option>
                  <option value="blanqueamiento">Blanqueamiento Dental</option>
                  <option value="revision">Limpieza o Revisión General</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold tracking-wider text-slate-300 uppercase"
                >
                  Mensaje o consulta (Opcional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Cuéntanos brevemente qué necesitas..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 py-4 text-center text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:outline-none"
                >
                  Agendar Mi Diagnóstico Gratis
                </button>
                <p className="mt-3 text-center text-xs text-slate-400">
                  🔒 Tus datos están seguros y no enviamos SPAM.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">
              Dent<span className="text-blue-500">Smile</span>
            </span>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} DentSmile. Todos los derechos reservados. Diseñado para
            alta conversión médica.
          </p>
        </div>
      </footer>
    </div>
  );
}
