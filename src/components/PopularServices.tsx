import { useState } from 'react'
import abogado from '../assets/img-home/abogado.jpg'
import dentista from '../assets/img-home/dentistaa.jpg'
import flete from '../assets/img-home/flete.jpg'

const services = [
  {
    id: 1,
    title: "Abogados",
    image: abogado
  },
  {
    id: 2,
    title: "Dentista",
    image: dentista
  },
  {
    id: 3,
    title: "Fletes",
    image: flete
  }
]

const PopularServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <section className="container mx-auto px-4 md:px-6 py-16">
      <h2 className="text-[28px] md:text-[32px] font-bold text-[#053F5C] mb-8">
        Servicios Populares
      </h2>
      <div className="relative">
        <button 
          onClick={prevSlide} 
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 border-2 border-black rounded-full w-12 h-12 flex items-center justify-center transition-colors"
        >
          <i className="fas fa-chevron-left text-[#053F5C] text-2xl"></i>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              onClick={() => window.location.href = `/servicios/${service.title.toLowerCase()}`}
              className={`bg-white rounded-lg shadow-md overflow-hidden w-[310px] transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 mx-auto
                ${index === currentSlide ? 'block' : 'hidden md:block'}`}
            >
              <div className="h-[184px] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#053F5C]">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 border-2 border-black rounded-full w-12 h-12 flex items-center justify-center transition-colors"
        >
          <i className="fas fa-chevron-right text-[#053F5C] text-2xl"></i>
        </button>
      </div>
    </section>
  )
}

export default PopularServices
