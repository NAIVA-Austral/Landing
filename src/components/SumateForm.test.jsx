import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SumateForm from './SumateForm'

describe('SumateForm', () => {
  it('no muestra el campo de rol personalizado por defecto', () => {
    render(<SumateForm />)
    expect(screen.queryByPlaceholderText('Contanos cuál es tu rol...')).not.toBeInTheDocument()
  })

  it('muestra el campo de rol personalizado al seleccionar Otro', async () => {
    render(<SumateForm />)
    await userEvent.selectOptions(screen.getByRole('combobox'), 'Otro')
    expect(screen.getByPlaceholderText('Contanos cuál es tu rol...')).toBeInTheDocument()
  })

  it('oculta el campo de rol personalizado al cambiar a otro rol', async () => {
    render(<SumateForm />)
    await userEvent.selectOptions(screen.getByRole('combobox'), 'Otro')
    await userEvent.selectOptions(screen.getByRole('combobox'), 'Inversor')
    expect(screen.queryByPlaceholderText('Contanos cuál es tu rol...')).not.toBeInTheDocument()
  })

  it('muestra el contador de caracteres actualizado al escribir', async () => {
    render(<SumateForm />)
    const textarea = screen.getByPlaceholderText('Contanos brevemente qué traés al ecosistema...')
    await userEvent.type(textarea, 'Hola')
    expect(screen.getByText('4/255')).toBeInTheDocument()
  })

  it('muestra el mensaje de éxito al submitear', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({}))

    render(<SumateForm />)
    await userEvent.type(screen.getByLabelText('Tu nombre'), 'Ana')
    await userEvent.type(screen.getByLabelText('Email'), 'ana@test.com')
    await userEvent.selectOptions(screen.getByRole('combobox'), 'Inversor')
    await userEvent.click(screen.getByRole('button', { name: /Quiero sumarme/i }))

    expect(await screen.findByText(/Pronto vas a tener noticias nuestras/i)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /Quiero sumarme/i })).not.toBeInTheDocument()

    vi.unstubAllGlobals()
  })
})
