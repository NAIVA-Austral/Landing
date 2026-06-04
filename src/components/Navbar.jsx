import { useState } from 'react'
import Logo from './Logo'

const LINKS = [
  { href: '#razon', label: 'HUB' },
  { href: '#comunidad', label: 'Ecosistema' },
  { href: '#novedades', label: 'Novedades y Eventos' },
  { href: '#institucional', label: 'Institucional' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-soft-apricot-200/50"
      style={{ background: 'rgba(250,230,204,0.88)', backdropFilter: 'blur(14px)' }}>
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        <Logo height={26} />

        {/* Links desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href}
              className="text-[13px] text-olive-wood-600 no-underline hover:text-soft-apricot-500 transition-colors">
              {label}
            </a>
          ))}
          <a href="#sumate"
            className="text-[13px] font-semibold text-white bg-soft-apricot-500 px-[22px] py-[9px] rounded-full no-underline">
            Sumate al HUB
          </a>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label="Menú"
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-0">
          <span className={`block w-6 h-[2px] bg-ink transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-[2px] bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-ink transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {open && (
        <div className="md:hidden flex flex-col px-6 pb-5 gap-1 border-t border-soft-apricot-200/40">
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              className="text-[15px] text-olive-wood-700 no-underline py-2.5">
              {label}
            </a>
          ))}
          <a href="#sumate" onClick={() => setOpen(false)}
            className="text-[14px] font-semibold text-white bg-soft-apricot-500 px-5 py-3 rounded-full no-underline text-center mt-2">
            Sumate al HUB
          </a>
        </div>
      )}
    </nav>
  )
}
