const Footer = () => {
  return (
    <footer className="bg-[#429EBD] min-h-[400px] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center md:text-left space-y-6">
            <h3 className="text-2xl font-bold">Logo</h3>
            <div className="flex justify-center md:justify-start gap-6">
              <a href="#" className="hover:text-gray-200 transition-colors text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors text-xl">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors text-xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors text-xl">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="text-center md:text-left space-y-4">
            <h3 className="font-bold text-lg">Clientes</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-200 transition-colors text-sm md:text-base">Como funciona</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors text-sm md:text-base">Pago Protegido</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors text-sm md:text-base">Opiniones</a></li>
              <li><a href="/services" className="hover:text-gray-200 transition-colors text-sm md:text-base">Servicios</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left space-y-4">
            <h3 className="font-bold text-lg">Profesionales</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-200 transition-colors text-sm md:text-base">Ofrecer Servicios</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors text-sm md:text-base">Experiencias Reales</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left space-y-4">
            <h3 className="font-bold text-lg">Ayuda</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-200 transition-colors text-sm md:text-base">Habla con nosotros</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors text-sm md:text-base">Centro de ayuda</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors text-sm md:text-base">Condiciones de uso</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors text-sm md:text-base">Políticas de privacidad</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
