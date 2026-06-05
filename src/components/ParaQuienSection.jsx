const CARDS = [
  {
    id: 'productores',
    label: 'Productores',
    title: 'Tu campo es el laboratorio.',
    body: 'Tu experiencia tracciona la demanda real. Conectá con tecnología que entiende el campo.',
    cta: 'Participar →',
    featured: true,
  },
  {
    id: 'startups',
    label: 'Startups',
    title: 'Validá con productores reales.',
    body: 'Accedé a una red de aliados, inversores y conocimiento sectorial.',
    cta: 'Sumá tu startup →',
  },
  {
    id: 'academia',
    label: 'Academia',
    title: 'Ciencia que llega al surco.',
    body: 'Llevá tus conocimientos al campo práctico.',
    cta: 'Conectar →',
  },
  {
    id: 'inversores',
    label: 'Inversores',
    title: 'Capital con propósito.',
    body: 'Proyectos de alto impacto en el agro de LATAM.',
    cta: 'Ver oportunidades →',
  },
]

export default function ParaQuienSection() {
  return (
    <section id="comunidad" className="bg-glaucous-950 px-6 md:px-16 py-[120px]">
      <span className="block text-[12px] tracking-[3px] uppercase text-glaucous-400 mb-4">
        04 — Para quién
      </span>
      <h2 className="text-[clamp(28px,3vw,40px)] font-black tracking-[-1.5px] leading-[1.1] text-bg mb-3">
        ¿Sos de los que<br />construyen?
      </h2>
      <p className="text-[16px] text-glaucous-200 leading-[1.7] mb-14">
        NAIVA no es un espacio cerrado. Es un ecosistema abierto para quienes quieren generar impacto real en el agro.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CARDS.map(({ id, label, title, body, cta, featured }) => (
          <div
            key={id}
            className={[
              'rounded-2xl p-8 border relative overflow-hidden flex flex-col',
              featured
                ? 'md:col-span-2 bg-soft-apricot-500 border-soft-apricot-500'
                : 'bg-glaucous-900 border-glaucous-800',
            ].join(' ')}
          >
            <span className={[
              'block text-[11px] font-bold tracking-[2.5px] uppercase mb-5',
              featured ? 'text-white/70' : 'text-glaucous-400',
            ].join(' ')}>
              {label}
            </span>
            <h3 className={[
              'text-[23px] font-black tracking-[-0.5px] mb-3',
              featured ? 'text-white' : 'text-bg',
            ].join(' ')}>
              {title}
            </h3>
            <p className={[
              'text-[14px] leading-[1.6]',
              featured ? 'text-white/80' : 'text-glaucous-200',
            ].join(' ')}>
              {body}
            </p>
            <a href="#sumate"
              className={[
                'inline-block mt-6 text-[13px] font-semibold border rounded-full px-4 py-1.5 no-underline self-start',
                featured ? 'text-white border-white/40' : 'text-soft-apricot-400 border-glaucous-700',
              ].join(' ')}>
              {cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
