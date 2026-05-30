const PILARES = [
  {
    num: '01 ——',
    title: 'Confianza y colaboración',
    body: 'La base de la creación colectiva. Coopetimos: colaboramos con quienes podrían ser competidores para crear valor compartido.',
    tag: 'Fundacional',
  },
  {
    num: '02 ——',
    title: 'Integridad y ética',
    body: 'Coherencia entre lo que pensamos, decimos y hacemos. Transparencia en cada decisión.',
    tag: 'No negociable',
  },
  {
    num: '03 ——',
    title: 'Aprendizaje continuo',
    body: 'Modo Beta continuo. Ninguna meta es definitiva — siempre buscamos generar más y mejor impacto.',
    tag: 'Siempre',
  },
]

export default function PilaresSection() {
  return (
    <section className="bg-bg px-6 md:px-16 py-[120px]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-16 pb-8 border-b border-olive-wood-200">
        <div>
          <span className="block text-[11px] tracking-[3px] uppercase text-olive-wood-300 mb-4">
            03 — Cultura fundacional
          </span>
          <h2 className="text-[clamp(28px,3vw,40px)] font-black tracking-[-1.5px] leading-[1.1] text-ink">
            Tres pilares.<br />Una dirección.
          </h2>
        </div>
        <p className="text-[14px] text-olive-wood-500 max-w-full md:max-w-[280px] leading-[1.6] mt-4 md:mt-0">
          La innovación en el agro solo es posible cuando hay propósito común, confianza y cooperación.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PILARES.map(({ num, title, body, tag }) => (
          <div key={num} className="pt-9 border-t-2 border-ink flex flex-col">
            <span className="text-[11px] text-olive-wood-300 tracking-[2px] mb-5">{num}</span>
            <h3 className="text-[22px] font-black text-ink mb-4 tracking-[-0.5px]">{title}</h3>
            <p className="text-[14px] text-olive-wood-500 leading-[1.7]">{body}</p>
            <span className="mt-auto pt-5 text-[11px] font-semibold tracking-[1.5px] uppercase text-soft-apricot-500">
              {tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
