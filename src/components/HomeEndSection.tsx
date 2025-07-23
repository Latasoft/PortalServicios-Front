import jardineroEnd from '../assets/img-home/jardinero-end.jpg'

const HomeEndSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#053F5C] mb-6">
              Tu talento merece más clientes.<br />
              Nosotros te ayudamos a conseguirlos
            </h2>
            <p className="text-[#053F5C] text-lg mb-8">
              Nosotros te entregamos las herramientas para mostrar tu trabajo, gestionar pagos seguros y recibir reseñas que atraerán más proyectos. Sin complicaciones
            </p>
            <button className="bg-[#F7AD19] text-white px-8 py-3 rounded-lg hover:bg-[#e59d17] transition-colors">
              Crea tu perfil profesional
            </button>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src={jardineroEnd} 
              alt="Jardinero profesional" 
              className="w-[400px] h-[250px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeEndSection
