export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-16 pt-[120px] md:pt-[140px] pb-16 md:pb-[100px]">
      <div className="max-w-[680px] text-center flex flex-col items-center gap-5">

        <div className="bg-olive-wood-100 rounded-full px-4 py-1.5 text-[11px] font-semibold text-olive-wood-600 tracking-[1.5px] uppercase">
          AgTech · LATAM
        </div>

        <h1 className="text-[clamp(42px,5vw,68px)] font-black leading-[1.05] tracking-[-2px] text-ink">
          Innovar desde el agro,<br />
          para el agro y<br />
          <span className="text-soft-apricot-500">con el agro.</span>
        </h1>

        <p className="text-[17px] leading-[1.7] text-olive-wood-500 max-w-[440px]">
          El ecosistema que conecta productores, startups y tecnología
          para generar impacto real en el sector agropecuario de LATAM.
        </p>

        <div className="flex gap-3.5 items-center justify-center">
          <a href="#sumate"
            className="bg-ink text-bg px-7 py-3.5 rounded-full text-[14px] font-semibold tracking-[0.3px] no-underline">
            Sumate al HUB
          </a>
          <a href="#razon"
            className="text-olive-wood-500 text-[14px] no-underline after:content-['→'] after:ml-1.5">
            Conocé el proyecto
          </a>
        </div>

        <div className="w-9 h-[1.5px] bg-olive-wood-200 mt-1" />
      </div>
    </section>
  )
}
