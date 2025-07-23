import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import gardenHome from './assets/img-home/garden-home.png'
import securePayment from './assets/img-home/secure-payment.png'
import CategoryCard from './components/CategoryCard'
import TestimonialSlider from './components/TestimonialSlider'
import StatsSection from './components/StatsSection'
import PopularServices from './components/PopularServices'
import ServicePriceExample from './components/ServicePriceExample'
import CoverageSection from './components/CoverageSection'
import ProfessionalsSection from './components/ProfessionalsSection'
import HomeEndSection from './components/HomeEndSection'
import Register from './pages/Register'
import Login from './pages/Login'
import Services from './pages/Services'
import Profile from './Panel-Client/Profile'
import Security from './Panel-Client/Security'
import PaymentMethods from './Panel-Client/PaymentMethods'

const Home = () => (
  <main className="flex-grow bg-gradient-to-b from-[#A4E8F2] to-[#77C4D4]">
    <section className="container mx-auto px-4 md:px-6 min-h-[calc(100vh-80px)] flex items-center py-8 md:py-0">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8">
        <div className="w-full lg:w-1/2">
          <div className="space-y-6">
            <nav className="mb-4">
              <ul className="flex gap-4 md:gap-8">
                <li><a href="#" className="text-[#053F5C] font-medium text-base md:text-lg border-b-2 border-[#053F5C]">Contratar</a></li>
                <li><a href="#" className="text-gray-500 font-medium text-base md:text-lg hover:text-[#053F5C]">Ser contratado</a></li>
              </ul>
            </nav>
            <h1 className="text-[32px] md:text-[40px] font-bold leading-tight text-[#053F5C]">
              Contrata servicios en <span className="inline-flex items-center">Chile <img src="cl-flag.png" alt="Chile" className="w-6 md:w-8 h-4 md:h-6 ml-2" /></span>
            </h1>
            
            <div className="relative w-full">
              <div className="flex flex-col sm:flex-row">
                <div className="bg-white rounded-t-lg sm:rounded-t-none sm:rounded-l-lg w-full sm:w-auto">
                  <select className="w-full sm:w-auto px-4 py-3 text-gray-600 bg-transparent focus:outline-none border-b sm:border-b-0 sm:border-r border-gray-200">
                    <option value="viña-del-mar">Viña del Mar</option>
                    <option value="valparaiso">Valparaíso</option>
                    <option value="santiago">Santiago</option>
                  </select>
                </div>
                <div className="relative flex-grow bg-white">
                  <input 
                    type="text" 
                    placeholder="Busca un servicio" 
                    className="w-full px-4 py-3 border-0 focus:ring-2 focus:ring-[#429EBD] text-gray-600 focus:outline-none"
                  />
                </div>
                <button className="bg-[#F7AD19] text-white px-6 py-3 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg hover:bg-[#e59d17] transition-colors w-full sm:w-auto">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[400px] lg:max-w-none">
            <img 
              src={gardenHome} 
              alt="Profesional de jardinería" 
              className="w-full lg:w-[535px] lg:h-[600px] object-contain lg:object-cover scale-x-[-1] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="container mx-auto px-4 md:px-6 py-8 md:py-16">
      <h2 className="text-[28px] md:text-[32px] font-bold mb-4 text-[#053F5C]">¿Como funciona?</h2>
      <p className="text-[#053F5C] mb-8 md:mb-12 max-w-3xl text-base md:text-lg">
        Seguir contratando servicios como antes ya no tiene sentido. Es momento de innovar. Aquí conecta con expertos confiables listos para ayudarte.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-[200px] h-[200px] bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
            <span className="material-icons text-[#053F5C] !text-[60px]">event</span>
          </div>
          <h3 className="font-bold text-[#053F5C] mb-2">Agenda servicios en línea</h3>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-[200px] h-[200px] bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
            <span className="material-icons text-[#053F5C] !text-[60px]">security</span>
          </div>
          <h3 className="font-bold text-[#053F5C] mb-2">Pago Protegido</h3>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-[200px] h-[200px] bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
            <span className="material-icons text-[#053F5C] !text-[60px]">credit_card</span>
          </div>
          <h3 className="font-bold text-[#053F5C] mb-2">Paga con tu tarjeta de crédito</h3>
        </div>
      </div>
    </section>

    <section className="container mx-auto py-16 px-4 md:px-6">
      <h2 className="text-[28px] md:text-[32px] font-bold mb-8 md:mb-12 text-[#053F5C]">
        Explora profesionales por categoría
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
        <CategoryCard icon="home" title="Hogar y Oficina" href="/categoria/hogar" />
        <CategoryCard icon="favorite" title="Bienestar" href="/categoria/bienestar" />
        <CategoryCard icon="pets" title="Mascotas" href="/categoria/mascotas" />
        <CategoryCard icon="local_shipping" title="Transporte y Flete" href="/categoria/transporte" />
        <CategoryCard icon="school" title="Clases" href="/categoria/clases" />
        <CategoryCard icon="event" title="Eventos" href="/categoria/eventos" />
        <CategoryCard icon="construction" title="Artesanía" href="/categoria/artesania" />
        <CategoryCard icon="brush" title="Digital y Creativo" href="/categoria/digital" />
        <CategoryCard icon="business" title="Empresa y Legal" href="/categoria/empresa" />
        <CategoryCard icon="support_agent" title="Soporte Técnico" href="/categoria/soporte" />
        <CategoryCard icon="more_horiz" title="Ver más" href="/categorias" />
      </div>
    </section>

    <section className="container mx-auto py-16 px-4 md:px-6">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#053F5C]">
            Pago Protegido
          </h2>
          <p className="text-[#053F5C] text-base md:text-lg">
            Tu pago está protegido ante demoras, imprevisto o trabajos sin terminar. 
            El profesional recibe el dinero solo cuando tu confirmas que el servicio fue completado.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 text-[#053F5C]">
              <i className="fas fa-check text-[#053F5C]"></i>
              Verificamos la identidad y credenciales de cada profesional para tu tranquilidad
            </li>
          </ul>
          <button className="bg-[#F7AD19] text-white px-6 py-3 rounded-lg hover:bg-[#e59d17] transition-colors text-sm md:text-base">
            Conocer más
          </button>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="border-3 border-[#053F5C] p-4 rounded-lg w-[520px] h-[300px] flex items-center justify-center overflow-hidden">
            <img 
              src={securePayment} 
              alt="Pago seguro" 
              className="w-[120px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="container mx-auto py-24 px-4 md:px-6">
      <TestimonialSlider />
    </section>

    <StatsSection />
    <PopularServices />
    <ServicePriceExample />
    <CoverageSection />
    <ProfessionalsSection />
    <HomeEndSection />
  </main>
)

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/security" element={<Security />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
