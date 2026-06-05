import SumateForm from './SumateForm'

const TRUST = [
  'Pronto vas a tener noticias nuestras.',
  'Proyecto real, no un pitch deck.',
  'Comunidad abierta y colaborativa.',
]

export default function SumateSection() {
  return (
    <section id="sumate" className="bg-white px-6 md:px-16 py-[120px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
      <div>
        <span className="block text-[12px] tracking-[3px] uppercase text-olive-wood-600 mb-4">
          06 — Sumate al HUB
        </span>
        <h2 className="text-[clamp(32px,3.5vw,52px)] font-black tracking-[-2px] leading-[1.05] text-ink mb-6">
          El agro<br />te está<br />esperando.
        </h2>
        <p className="text-[16px] text-olive-wood-600 leading-[1.7] mb-9">
          Dejanos tus datos y te contamos cómo participar.
          Sin compromisos. Con mucho propósito.
        </p>
        <div className="flex flex-col gap-3.5">
          {TRUST.map(item => (
            <div key={item} className="flex items-center gap-3 text-[14px] text-olive-wood-600">
              <div className="w-5 h-5 rounded-full bg-bg border-[1.5px] border-olive-wood-200 flex items-center justify-center text-[10px] text-soft-apricot-500 flex-shrink-0">
                ✓
              </div>
              {item}
            </div>
          ))}
        </div>
      </div>

      <SumateForm />
    </section>
  )
}
