const ACTORES = [
  { num: '01', label: 'Productores agropecuarios', desc: 'Traccionan la demanda real' },
  { num: '02', label: 'Startups',                  desc: 'Propuestas de valor con impacto' },
  { num: '03', label: 'Academia & Ciencia',         desc: 'Conocimiento aplicado al campo' },
  { num: '04', label: 'Inversores',                 desc: 'Capital para proyectos de impacto' },
  { num: '05', label: 'Empresas',                   desc: 'Escalan soluciones al sector' },
]

export default function RazonDeSerSection() {
  return (
    <section id="razon" className="bg-white px-6 md:px-16 py-[120px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
      <div>
        <span className="block text-[12px] tracking-[3px] uppercase text-olive-wood-600 mb-4">
          02 — Razón de ser
        </span>
        <h2 className="text-[clamp(28px,3vw,40px)] font-black tracking-[-1.5px] leading-[1.1] text-ink mb-5">
          Un ecosistema vivo<br />de innovación
        </h2>
        <p className="text-[16px] leading-[1.75] text-olive-wood-600">
          NAIVA no es una incubadora, ni un fondo, ni una cámara.
          Es el espacio donde los actores del agro se encuentran para
          identificar oportunidades, acelerar proyectos y generar
          impacto real en LATAM.
        </p>
      </div>

      <div className="flex flex-col">
        {ACTORES.map(({ num, label, desc }) => (
          <div key={num}
            className="flex items-center gap-5 py-5 border-b border-olive-wood-100 last:border-0">
            <span className="text-[12px] text-olive-wood-500 font-semibold min-w-[24px]">{num}</span>
            <span className="text-[17px] font-bold text-ink flex-1">{label}</span>
            <span className="text-[14px] text-olive-wood-600">{desc}</span>
            <span className="text-olive-wood-200 text-base">↗</span>
          </div>
        ))}
      </div>
    </section>
  )
}
