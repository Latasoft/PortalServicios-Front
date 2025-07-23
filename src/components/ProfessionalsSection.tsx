import gasfiter from '../assets/img-home/gasfiter.jpg'
import electricista from '../assets/img-home/electricista.jpg'
import pintora from '../assets/img-home/pintora.jpg'

const ProfessionalsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#053F5C] mb-8 text-center">
          Conoce a nuestros Profesionales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-[350px] flex flex-col">
            <div className="h-[200px]">
              <img 
                src={gasfiter}
                alt="Gasfiter"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold">Profesional Verificado</span>
                  <span className="text-green-500">✓</span>
                </div>
                <p><span className="font-bold">Nombre:</span> Juan Pérez</p>
                <p><span className="font-bold">Profesión:</span> Gasfiter Certificado</p>
                <p><span className="font-bold">Experiencia:</span> +5 años en el rubro</p>
                <p><span className="font-bold">Ubicación:</span> Santiago Centro y Providencia</p>
                <p><span className="font-bold">Calificación:</span> 4.5/5 (12 Reseñas)</p>
                
                <div className="mt-4">
                  <p className="font-bold mb-1">Servicios:</p>
                  <ul className="list-disc list-inside">
                    <li>Reparación de fugas</li>
                    <li>Instalación de cañerías</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <p className="font-bold mb-1">Precios:</p>
                  <p>💰 Desde $25.000/hora</p>
                </div>
              </div>

              <button className="w-full bg-[#F7AD19] text-white py-2 rounded-lg mt-4 hover:bg-[#e59d17] transition-colors">
                Contactar
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden w-[350px] flex flex-col">
            <div className="h-[200px]">
              <img 
                src={electricista}
                alt="Electricista"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold">Profesional Verificado</span>
                  <span className="text-green-500">✓</span>
                </div>
                <p><span className="font-bold">Nombre:</span> Carlos Méndez</p>
                <p><span className="font-bold">Profesión:</span> Electricista residencial e industrial</p>
                <p><span className="font-bold">Experiencia:</span> 8 años</p>
                <p><span className="font-bold">Ubicación:</span> Santiago Centro, Ñuñoa</p>
                <p><span className="font-bold">Calificación:</span> 4.8/5 (6 Reseñas)</p>
                
                <div className="mt-4">
                  <p className="font-bold mb-1">Servicios:</p>
                  <ul className="list-disc list-inside">
                    <li>Instalación de paneles solares</li>
                    <li>Reparación de cortocircuitos</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <p className="font-bold mb-1">Precios:</p>
                  <p>💰 Desde $30.000/hora</p>
                </div>
              </div>

              <button className="w-full bg-[#F7AD19] text-white py-2 rounded-lg mt-4 hover:bg-[#e59d17] transition-colors">
                Contactar
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden w-[350px] flex flex-col">
            <div className="h-[200px]">
              <img 
                src={pintora}
                alt="Pintora"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold">Profesional Verificado</span>
                  <span className="text-green-500">✓</span>
                </div>
                <p><span className="font-bold">Nombre:</span> Fernanda Rojas</p>
                <p><span className="font-bold">Profesión:</span> Pintora y restauradora de muros</p>
                <p><span className="font-bold">Experiencia:</span> 6 años</p>
                <p><span className="font-bold">Ubicación:</span> Valparaíso y Viña del Mar</p>
                <p><span className="font-bold">Calificación:</span> 5/5 (30 Reseñas)</p>
                
                <div className="mt-4">
                  <p className="font-bold mb-1">Servicios:</p>
                  <ul className="list-disc list-inside">
                    <li>Pintura de interiores/exteriores</li>
                    <li>Tratamiento antihumedad</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <p className="font-bold mb-1">Precios:</p>
                  <p>💰 $8.000 por m²</p>
                </div>
              </div>

              <button className="w-full bg-[#F7AD19] text-white py-2 rounded-lg mt-4 hover:bg-[#e59d17] transition-colors">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalsSection
