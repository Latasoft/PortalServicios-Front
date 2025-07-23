import lineDown from '../assets/img-home/line-down.png'
import { useState } from 'react'

interface Testimonial {
  id: number
  name: string
  location: string
  content: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María G.",
    location: "Rancagua",
    content: "Excelente servicio. Encontré a un profesional confiable que resolvió mi problema rápidamente. ¡El pago protegido me dio mucha tranquilidad!",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Carlos R.",
    location: "Santiago",
    content: "La plataforma es muy fácil de usar y los profesionales están bien verificados. Contraté a un electricista y todo salió perfecto.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 3,
    name: "Javier S.",
    location: "Viña del Mar",
    content: "Por fin una plataforma segura para contratar servicios. El soporte al cliente siempre muy atento, ¡Recomendado!",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  }
]

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="text-center mb-12">
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#053F5C] mb-3">
          Opiniones de clientes sobre nosotros
        </h2>
        <img src={lineDown} alt="" className="mx-auto w-[34px] h-[82px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <button 
          onClick={prevSlide} 
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 border-2 border-black rounded-full w-12 h-12 flex items-center justify-center transition-colors"
        >
          <i className="fas fa-chevron-left text-[#053F5C] text-2xl"></i>
        </button>

        <div className="px-6">
          <div className="md:grid md:grid-cols-3 md:gap-8 lg:gap-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`bg-white p-8 rounded-lg shadow-md h-full transition-all duration-300
                  ${index === currentSlide ? 'block' : 'hidden md:block'}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-[#053F5C]">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-[#053F5C]">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={nextSlide}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 border-2 border-black rounded-full w-12 h-12 flex items-center justify-center transition-colors"
        >
          <i className="fas fa-chevron-right text-[#053F5C] text-2xl"></i>
        </button>
      </div>
    </div>
  )
}

export default TestimonialSlider
