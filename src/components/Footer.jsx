import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-soft-apricot-200/60 px-6 md:px-16 py-9 flex justify-between items-center">
      <Logo height={22} variant="default" className="opacity-50" />
      <div className="text-[12px] text-olive-wood-400">
        Ecosistema AgTech LATAM · 2026
      </div>
    </footer>
  )
}
