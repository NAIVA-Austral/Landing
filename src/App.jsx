import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Paletas from './pages/Paletas'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paletas" element={<Paletas />} />
      </Routes>
    </BrowserRouter>
  )
}
