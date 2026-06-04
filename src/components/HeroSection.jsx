export default function HeroSection() {
  return (
    <section
      className="min-h-screen bg-bg flex items-center justify-center px-6 md:px-16 pt-[120px] md:pt-[140px] pb-16 md:pb-[100px]"
      style={{
        background: 'radial-gradient(ellipse 80% 55% at 85% 25%, rgba(240,120,32,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 15% 80%, rgba(139,143,196,0.12) 0%, transparent 55%), var(--color-bg)',
      }}
    >
      <div className="max-w-[680px] text-center flex flex-col items-center gap-5">

        <div className="bg-soft-apricot-100 rounded-full px-4 py-1.5 text-[11px] font-semibold text-soft-apricot-600 tracking-[1.5px] uppercase">
          AgTech · LATAM
        </div>

        <h1 className="text-[clamp(42px,5vw,68px)] font-black leading-[1.05] tracking-[-2px] text-ink">
          Innovar desde el agro,<br />
          para el agro y<br />
          <span className="text-soft-apricot-500">con el agro.</span>
        </h1>

        <p className="text-[17px] leading-[1.7] text-olive-wood-600 max-w-[440px]">
          El ecosistema que conecta productores, startups y tecnología
          para generar impacto real en el sector agropecuario de LATAM.
        </p>

        <div className="flex gap-3.5 items-center justify-center">
          <a href="#sumate"
            className="bg-soft-apricot-500 text-white px-7 py-3.5 rounded-full text-[14px] font-semibold tracking-[0.3px] no-underline">
            Sumate al HUB
          </a>
          <a href="#razon"
            className="text-glaucous-600 text-[14px] no-underline after:content-['→'] after:ml-1.5">
            Conocé el proyecto
          </a>
        </div>

        <div className="w-9 h-[1.5px] bg-soft-apricot-300 mt-1" />
      </div>
    </section>
  )
}
