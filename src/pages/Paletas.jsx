const palettes = [
  {
    name: 'Glaucous',
    shades: [
      { shade: '50',  hex: '#edf0f7' },
      { shade: '100', hex: '#dbe2f0' },
      { shade: '200', hex: '#b8c5e0' },
      { shade: '300', hex: '#94a7d1' },
      { shade: '400', hex: '#708ac2' },
      { shade: '500', hex: '#4d6db3' },
      { shade: '600', hex: '#3d578f' },
      { shade: '700', hex: '#2e416b' },
      { shade: '800', hex: '#1f2c47' },
      { shade: '900', hex: '#0f1624' },
      { shade: '950', hex: '#0b0f19' },
    ],
  },
  {
    name: 'Charcoal Blue',
    shades: [
      { shade: '50',  hex: '#f0f1f4' },
      { shade: '100', hex: '#e1e3ea' },
      { shade: '200', hex: '#c3c8d5' },
      { shade: '300', hex: '#a5acc0' },
      { shade: '400', hex: '#8891aa' },
      { shade: '500', hex: '#6a7595' },
      { shade: '600', hex: '#555e77' },
      { shade: '700', hex: '#3f465a' },
      { shade: '800', hex: '#2a2f3c' },
      { shade: '900', hex: '#15171e' },
      { shade: '950', hex: '#0f1015' },
    ],
  },
  {
    name: 'Soft Apricot',
    shades: [
      { shade: '50',  hex: '#fbf3e9' },
      { shade: '100', hex: '#f8e6d3' },
      { shade: '200', hex: '#f1cda7' },
      { shade: '300', hex: '#eab47b' },
      { shade: '400', hex: '#e29b50' },
      { shade: '500', hex: '#db8324' },
      { shade: '600', hex: '#af681d' },
      { shade: '700', hex: '#844e15' },
      { shade: '800', hex: '#58340e' },
      { shade: '900', hex: '#2c1a07' },
      { shade: '950', hex: '#1f1205' },
    ],
  },
  {
    name: 'Olive Wood',
    shades: [
      { shade: '50',  hex: '#f6f2ef' },
      { shade: '100', hex: '#ece5df' },
      { shade: '200', hex: '#dacabe' },
      { shade: '300', hex: '#c7b09e' },
      { shade: '400', hex: '#b5957d' },
      { shade: '500', hex: '#a27b5d' },
      { shade: '600', hex: '#82624a' },
      { shade: '700', hex: '#614a38' },
      { shade: '800', hex: '#413125' },
      { shade: '900', hex: '#201913' },
      { shade: '950', hex: '#17110d' },
    ],
  },
  {
    name: 'Taupe',
    shades: [
      { shade: '50',  hex: '#f3f2f1' },
      { shade: '100', hex: '#e8e5e3' },
      { shade: '200', hex: '#d1cbc7' },
      { shade: '300', hex: '#b9b1ac' },
      { shade: '400', hex: '#a29790' },
      { shade: '500', hex: '#8b7e74' },
      { shade: '600', hex: '#6f645d' },
      { shade: '700', hex: '#534b46' },
      { shade: '800', hex: '#38322e' },
      { shade: '900', hex: '#1c1917' },
      { shade: '950', hex: '#131210' },
    ],
  },
]

function isLight(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 128
}

export default function Paletas() {
  return (
    <div className="min-h-screen bg-white px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-10">Paleta de colores</h1>

      <div className="flex flex-col gap-12">
        {palettes.map((palette) => (
          <section key={palette.name}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-3">
              {palette.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {palette.shades.map(({ shade, hex }) => (
                <div
                  key={shade}
                  className="flex flex-col items-center gap-1"
                >
                  <div
                    className="w-16 h-16 rounded"
                    style={{ backgroundColor: hex }}
                  />
                  <span className="text-xs text-gray-500">{shade}</span>
                  <span className="text-xs text-gray-400">{hex}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
