export default function Logo({ variant = 'default', height = 28, className = '' }) {
  const src = variant === 'white' ? '/logos/naiva_white.png' : '/logos/naiva_orange.png'

  // height debe ir por style: Tailwind preflight aplica `img { height: auto }`
  // y pisa el atributo HTML height, haciendo que el logo se vea gigante.
  const style = { height: `${height}px`, width: 'auto' }
  if (variant === 'white') style.mixBlendMode = 'screen'

  return (
    <img src={src} alt="NAIVA" style={style} className={className} />
  )
}
