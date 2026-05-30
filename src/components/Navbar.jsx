export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 py-5 border-b border-olive-wood-200/40"
      style={{ background: 'rgba(248,245,241,0.85)', backdropFilter: 'blur(12px)' }}>
      <div className="text-[15px] font-black tracking-[3px] text-ink uppercase">
        NAI<span className="text-soft-apricot-500">VA</span>
      </div>
      <div className="flex gap-8 items-center">
        <a href="#razon" className="hidden md:block text-[13px] text-olive-wood-500 no-underline">
          El proyecto
        </a>
        <a href="#comunidad" className="hidden md:block text-[13px] text-olive-wood-500 no-underline">
          Comunidad
        </a>
        <a href="#sumate"
          className="text-[13px] font-semibold text-white bg-soft-apricot-500 px-[22px] py-[9px] rounded-full no-underline">
          Sumate al HUB
        </a>
      </div>
    </nav>
  )
}
