// Sección Novedades y Eventos (corrección 05/06).
const NOTA = {
  titulo: 'Impulsan un Hub AgTech para potenciar la innovación en el agro argentino',
  fuente: 'Noticias de Campo',
  url: 'https://www.contenidoscrea.org.ar/inspiracion-crea/expoagro-una-oportunidad-potenciar-el-ecosistema-agtech-argentino-n5328338',
  imagen: '/novedades-crea-team.svg',
}

export default function NovedadesSection() {
  return (
    <section id="novedades" className="bg-bg px-6 md:px-16 py-[120px]">
      <span className="block text-[12px] tracking-[3px] uppercase text-olive-wood-600 mb-4">
        05 — Novedades y Eventos
      </span>
      <h2 className="text-[clamp(28px,3vw,40px)] font-black tracking-[-1.5px] leading-[1.1] text-ink mb-3">
        En movimiento,<br />en los medios.
      </h2>
      <p className="text-[16px] text-olive-wood-600 leading-[1.7] mb-14 max-w-[520px]">
        Lo que se dice de NAIVA y del ecosistema AgTech que estamos construyendo.
      </p>

      <a
        href={NOTA.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center bg-white rounded-2xl overflow-hidden border border-olive-wood-100 no-underline"
      >
        <div className="overflow-hidden">
          <img
            src={NOTA.imagen}
            alt={NOTA.titulo}
            width={1007}
            height={598}
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-8 md:p-12 md:py-10">
          <span className="block text-[12px] font-bold tracking-[2px] uppercase text-soft-apricot-600 mb-4">
            {NOTA.fuente}
          </span>
          <h3 className="text-[22px] md:text-[26px] font-black tracking-[-0.5px] leading-[1.2] text-ink mb-5">
            {NOTA.titulo}
          </h3>
          <span className="inline-block text-[15px] font-semibold text-glaucous-600 after:content-['→'] after:ml-1.5 group-hover:text-glaucous-700">
            Leer la nota
          </span>
        </div>
      </a>
    </section>
  )
}
