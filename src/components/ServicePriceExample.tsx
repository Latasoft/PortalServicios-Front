const ServicePriceExample = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#053F5C] mb-4">
              Precios de nuestros servicios
            </h2>
            <p className="text-[#053F5C] mb-8">
              "Inspirate en proyectos reales: precios y soluciones verificadas"
            </p>

            <div className="space-y-6 text-[#053F5C]">
              <p>
                Nosotros creemos en la transparencia. Por eso, compartimos casos
                reales de usuarios como tú, con precios exactos y valoraciones
                auténticas. Estos ejemplos te ayudarán a:
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-xl">✅</span>
                  <span>Entender costos reales (sin sorpresas)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">✅</span>
                  <span>Comparar profesionales según tu presupuesto</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">✅</span>
                  <span>
                    Tomar decisiones informadas con datos de nuestra comunidad
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-[500px] mx-auto">
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <i className="far fa-clock text-[#053F5C] w-6"></i>
                  <span>Tiempo de servicio: 1 hora 20 minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="far fa-calendar text-[#053F5C] w-6"></i>
                  <span>Fecha resolución: 15 de octubre, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-exclamation-circle text-[#053F5C] w-6"></i>
                  <span>Problema: "Fuga de agua en cocina"</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-map-marker-alt text-[#053F5C] w-6"></i>
                  <span>Comuna: Providencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-user-check text-[#053F5C] w-6"></i>
                  <span>Profesional: Juan P. (Gasfíter certificado)</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="text-center">
                  <p className="text-lg mb-1">Presupuesto final:</p>
                  <p className="text-3xl font-bold text-[#053F5C]">$28.000</p>
                  <p className="text-sm text-gray-600">
                    (incluye materiales premium)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicePriceExample
