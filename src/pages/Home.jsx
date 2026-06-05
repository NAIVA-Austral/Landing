import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Ticker from '../components/Ticker'
import RazonDeSerSection from '../components/RazonDeSerSection'
import PilaresSection from '../components/PilaresSection'
import ParaQuienSection from '../components/ParaQuienSection'
import NovedadesSection from '../components/NovedadesSection'
import SumateSection from '../components/SumateSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-bg">
      <Navbar />
      <HeroSection />
      <Ticker />
      <RazonDeSerSection />
      <PilaresSection />
      <ParaQuienSection />
      <NovedadesSection />
      <SumateSection />
      <Footer />
    </main>
  )
}
