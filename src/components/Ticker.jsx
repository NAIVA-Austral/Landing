const KEYWORDS = [
  'AgTech LATAM',
  'Innovación agropecuaria',
  'Startups con impacto',
  'Productores reales',
  'Beta continuo',
  'Coopetición',
  'Desarrollo sostenible',
  'Ecosistema vivo',
  'Open to devs',
  'Impacto real en el agro',
]

export default function Ticker() {
  return (
    <div className="border-t border-b border-olive-wood-200 py-3.5 overflow-hidden bg-bg">
      <div className="flex whitespace-nowrap" style={{ animation: 'ticker-scroll 28s linear infinite' }}>
        {[...KEYWORDS, ...KEYWORDS].map((kw, i) => (
          <span key={i} className="inline-flex items-center gap-4 text-[12px] font-medium text-olive-wood-500 px-6">
            <span className="w-1 h-1 rounded-full bg-soft-apricot-500 flex-shrink-0" />
            {kw}
          </span>
        ))}
      </div>
    </div>
  )
}
