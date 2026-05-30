import { useState } from 'react'

const ROLES = [
  'Desarrollador / Tech',
  'Startup AgTech',
  'Productor agropecuario',
  'Academia / Investigación',
  'Inversor',
  'Empresa tecnológica',
  'Otro',
]

const inputClass = 'w-full px-4 py-3 border-[1.5px] border-olive-wood-200 rounded-[10px] text-[14px] text-ink bg-white outline-none font-sans'
const labelClass = 'block text-[12px] font-semibold text-olive-wood-600 mb-1.5 tracking-[0.3px]'

export default function SumateForm() {
  const [rol, setRol] = useState('')
  const [idea, setIdea] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-bg rounded-[20px] border border-olive-wood-200 p-10 flex flex-col items-center justify-center gap-4 min-h-[360px] text-center">
        <div className="w-12 h-12 rounded-full bg-olive-wood-100 flex items-center justify-center text-soft-apricot-500 text-xl font-bold">
          ✓
        </div>
        <h3 className="text-[22px] font-black text-ink tracking-[-0.5px]">¡Gracias por sumarte!</h3>
        <p className="text-[15px] text-olive-wood-500 leading-[1.7] max-w-[280px]">
          Pronto vas a tener noticias nuestras.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-bg rounded-[20px] border border-olive-wood-200 p-10">
      <p className="text-[18px] font-bold text-ink mb-7">Quiero sumarme al ecosistema</p>

      <div className="mb-[18px]">
        <label htmlFor="nombre" className={labelClass}>Tu nombre</label>
        <input id="nombre" name="nombre" type="text" required
          placeholder="Ej: Martín García" className={inputClass} />
      </div>

      <div className="mb-[18px]">
        <label htmlFor="email" className={labelClass}>Email</label>
        <input id="email" name="email" type="email" required
          placeholder="martin@ejemplo.com" className={inputClass} />
      </div>

      <div className="mb-[18px]">
        <label htmlFor="rol" className={labelClass}>¿Con qué rol te sumás?</label>
        <select id="rol" name="rol" required value={rol}
          onChange={e => setRol(e.target.value)}
          className={`${inputClass} text-olive-wood-500 appearance-none`}>
          <option value="" disabled>Seleccioná tu rol...</option>
          {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>

      {rol === 'Otro' && (
        <div className="mb-[18px]">
          <label htmlFor="rol-otro" className={labelClass}>¿Cuál es tu rol?</label>
          <input id="rol-otro" name="rol-otro" type="text" autoFocus
            placeholder="Contanos cuál es tu rol..." className={inputClass} />
        </div>
      )}

      <div className="mb-[18px]">
        <label htmlFor="idea" className={labelClass}>
          ¿Tenés alguna idea o propuesta?{' '}
          <span className="font-normal text-taupe-400">— opcional</span>
        </label>
        <textarea
          id="idea"
          name="idea"
          maxLength={255}
          value={idea}
          onChange={e => setIdea(e.target.value)}
          placeholder="Contanos brevemente qué traés al ecosistema..."
          rows={3}
          className={`${inputClass} resize-none leading-[1.6]`}
        />
        <p className="text-right text-[11px] text-taupe-400 mt-1">
          {idea.length}/255
        </p>
      </div>

      <button type="submit"
        className="w-full mt-2 bg-ink text-bg py-[15px] rounded-full text-[15px] font-bold tracking-[0.3px] cursor-pointer border-0 font-sans">
        Quiero sumarme →
      </button>

      <p className="text-[11px] text-taupe-400 text-center mt-3.5">
        Pronto vas a tener noticias nuestras.
      </p>
    </form>
  )
}
