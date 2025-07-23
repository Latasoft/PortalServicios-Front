import { useState } from 'react'
import gasfiterServicio from '../assets/img-services/gasfiter-servicio.jpg'
import gasfiter from '../assets/img-services/gasfiter.jpg'
import gasfiterFoto from '../assets/img-services/gasfiter-foto.jpg'
import safeIcon from '../assets/img-services/safe-icon.svg'

const Services = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A4E8F2] to-[#77C4D4] flex flex-col">
      <div className="relative">
        <div className="absolute inset-0">
          <img 
            src={gasfiterServicio} 
            alt="Servicio de Gasfitería" 
            className="w-full h-[400px] object-cover opacity-40"
          />
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="h-[400px] flex flex-col justify-center items-center">
            <h1 className="text-[40px] font-bold text-[#053F5C] mb-8">
              Servicio de Gasfitería en Chile
            </h1>

            <div className="w-full max-w-3xl flex">
              <div className="bg-white flex-1 flex items-center">
                <span className="material-icons text-gray-400 ml-3">location_on</span>
                <input
                  type="text"
                  placeholder="Quilpué"
                  className="w-full px-3 py-3 rounded-l-lg focus:outline-none border-r border-gray-200"
                />
              </div>
              <div className="bg-white flex-[2]">
                <input
                  type="text"
                  placeholder="Servicio de Gasfitería"
                  className="w-full px-4 py-3 focus:outline-none"
                />
              </div>
              <button className="bg-[#F7AD19] text-white px-8 py-3 rounded-r-lg hover:bg-[#e59d17] font-medium">
                Ir
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[300px] bg-white/70 rounded-lg p-6 h-fit">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-[#053F5C] mb-3">Ubicación</h3>
                <div className="flex items-center gap-2">
                  <span className="material-icons text-gray-400">location_on</span>
                  <span className="text-gray-600">Quilpué</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-[#053F5C] mb-3">Tipo de sistema de calefacción</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      name="sistema"
                      className="appearance-none w-4 h-4 rounded-full border-2 border-[#F7AD19] checked:bg-[#F7AD19] checked:border-[#F7AD19] transition-all cursor-pointer"
                    />
                    <span className="text-gray-600">Calefont a gas</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="sistema" className="appearance-none w-4 h-4 rounded-full border-2 border-[#F7AD19] checked:bg-[#F7AD19] checked:border-[#F7AD19] transition-all cursor-pointer" />
                    <span className="text-gray-600">Calefont eléctrico</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="sistema" className="appearance-none w-4 h-4 rounded-full border-2 border-[#F7AD19] checked:bg-[#F7AD19] checked:border-[#F7AD19] transition-all cursor-pointer" />
                    <span className="text-gray-600">Termotanque</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="sistema" className="appearance-none w-4 h-4 rounded-full border-2 border-[#F7AD19] checked:bg-[#F7AD19] checked:border-[#F7AD19] transition-all cursor-pointer" checked />
                    <span className="text-gray-600">Caldera a gas</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-[#053F5C] mb-3">Tipo de servicio</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      name="servicio"
                      className="appearance-none w-4 h-4 rounded-full border-2 border-[#F7AD19] checked:bg-[#F7AD19] checked:border-[#F7AD19] transition-all cursor-pointer"
                    />
                    <span className="text-gray-600">Arreglo</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      name="servicio"
                      className="appearance-none w-4 h-4 rounded-full border-2 border-[#F7AD19] checked:bg-[#F7AD19] checked:border-[#F7AD19] transition-all cursor-pointer"
                      checked 
                    />
                    <span className="text-gray-600">Instalación</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      name="servicio"
                      className="appearance-none w-4 h-4 rounded-full border-2 border-[#F7AD19] checked:bg-[#F7AD19] checked:border-[#F7AD19] transition-all cursor-pointer"
                    />
                    <span className="text-gray-600">Mantención rutinaria</span>
                  </label>
                </div>
              </div>

    
              <div>
                <h3 className="font-medium text-[#053F5C] mb-3">Tipo de vivienda</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      name="vivienda"
                      className="appearance-none w-4 h-4 rounded-full border-2 border-[#F7AD19] checked:bg-[#F7AD19] checked:border-[#F7AD19] transition-all cursor-pointer"
                      checked
                    />
                    <span className="text-gray-600">Casa</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="vivienda" className="appearance-none w-4 h-4 rounded-full border-2 border-[#F7AD19] checked:bg-[#F7AD19] checked:border-[#F7AD19] transition-all cursor-pointer" />
                    <span className="text-gray-600">Departamento</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="vivienda" className="appearance-none w-4 h-4 rounded-full border-2 border-[#F7AD19] checked:bg-[#F7AD19] checked:border-[#F7AD19] transition-all cursor-pointer" />
                    <span className="text-gray-600">Oficina o empresa</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="vivienda" className="appearance-none w-4 h-4 rounded-full border-2 border-[#F7AD19] checked:bg-[#F7AD19] checked:border-[#F7AD19] transition-all cursor-pointer" />
                    <span className="text-gray-600">Local comercial</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="vivienda" className="appearance-none w-4 h-4 rounded-full border-2 border-[#F7AD19] checked:bg-[#F7AD19] checked:border-[#F7AD19] transition-all cursor-pointer" />
                    <span className="text-gray-600">Centro Educacional</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-[#053F5C] mb-3">Calificaciones</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      name="calificacion"
                      className="appearance-none w-4 h-4 rounded-full border-2 border-[#F7AD19] checked:bg-[#F7AD19] checked:border-[#F7AD19] transition-all cursor-pointer"
                      checked
                    />
                    <div className="flex text-yellow-400">
                      <span className="material-icons">star</span>
                      <span className="material-icons">star</span>
                      <span className="material-icons">star</span>
                      <span className="material-icons">star</span>
                      <span className="material-icons">star_border</span>
                    </div>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="calificacion" className="appearance-none w-4 h-4 rounded-full border-2 border-[#F7AD19] checked:bg-[#F7AD19] checked:border-[#F7AD19] transition-all cursor-pointer" />
                    <div className="flex text-yellow-400">
                      <span className="material-icons">star</span>
                      <span className="material-icons">star</span>
                      <span className="material-icons">star</span>
                      <span className="material-icons">star_border</span>
                      <span className="material-icons">star_border</span>
                    </div>
                  </label>
                </div>
                <button className="text-sm text-[#053F5C] mt-2">
                  Limpiar
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 lg:pl-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-center">
              <div className="bg-white/70 rounded-lg p-6 shadow-sm w-full lg:w-[400px] h-auto lg:h-[450px] mx-auto">
                <div className="flex gap-4 items-start">
                  <img 
                    src={gasfiter} 
                    alt="Juan Pérez" 
                    className="w-[118px] h-[118px] rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-[14px]">Juan Pérez</h3>
                    <div className="flex items-center gap-1">
                      <div className="flex text-yellow-400">
                        <span className="material-icons text-[14px]">star</span>
                        <span className="material-icons text-[14px]">star</span>
                        <span className="material-icons text-[14px]">star</span>
                        <span className="material-icons text-[14px]">star</span>
                        <span className="material-icons text-[14px]">star_half</span>
                      </div>
                      <span className="text-gray-600 text-[14px]">4.5/5 (12)</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-green-500 text-[16px]">✓</span>
                      <span className="text-[14px]">Profesional Verificado</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <p className="text-[14px]">Experiencia: <span className="text-gray-600">+5 años en el rubro</span></p>
                  <p className="text-[14px]">Ubicación: <span className="text-gray-600">Santiago Centro y Providencia</span></p>
                  
                  <div>
                    <h4 className="text-[14px] font-medium mb-1">Servicios:</h4>
                    <ul className="text-[14px] text-gray-600 space-y-1">
                      <li>• Reparación de fugas</li>
                      <li>• Instalación de cañerías</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[14px] font-medium mb-1">Precios:</h4>
                    <p className="text-[14px]">💰 Desde $25.000/hora</p>
                  </div>
                </div>

                <button className="w-full mt-6 bg-[#F7AD19] text-white py-2.5 rounded-lg hover:bg-[#e59d17] text-[14px] font-medium transition-colors">
                  Contactar
                </button>
              </div>

              <div className="bg-white/70 rounded-lg p-6 shadow-sm w-full lg:w-[400px] h-auto lg:h-[450px] mx-auto">
                <div className="flex gap-4 items-start">
                  <img 
                    src={gasfiterFoto} 
                    alt="Pedro Carrasco" 
                    className="w-[118px] h-[118px] rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-[14px]">Pedro Carrasco</h3>
                    <div className="flex items-center gap-1">
                      <div className="flex text-yellow-400">
                        <span className="material-icons text-[14px]">star</span>
                        <span className="material-icons text-[14px]">star</span>
                        <span className="material-icons text-[14px]">star</span>
                        <span className="material-icons text-[14px]">star_border</span>
                        <span className="material-icons text-[14px]">star_border</span>
                      </div>
                      <span className="text-gray-600 text-[14px]">4.3/5 (9)</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-green-500 text-[16px]">✓</span>
                      <span className="text-[14px]">Profesional Verificado</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <p className="text-[14px]">Experiencia: <span className="text-gray-600">+10 años en el rubro</span></p>
                  <p className="text-[14px]">Ubicación: <span className="text-gray-600">Valparaíso</span></p>
                  
                  <div>
                    <h4 className="text-[14px] font-medium mb-1">Servicios:</h4>
                    <ul className="text-[14px] text-gray-600 space-y-1">
                      <li>• Colocación de termotanques</li>
                      <li>• Mantención de calefones</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[14px] font-medium mb-1">Precios:</h4>
                    <p className="text-[14px]">💰 Desde $30.000/hora</p>
                  </div>
                </div>

                <button className="w-full mt-6 bg-[#F7AD19] text-white py-2.5 rounded-lg hover:bg-[#e59d17] text-[14px] font-medium transition-colors">
                  Contactar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white/70 rounded-lg shadow-sm w-full lg:w-[944px] h-auto lg:h-[128px] mx-auto px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16 py-6 lg:py-0 h-full lg:px-8">
            <div className="flex items-center gap-3 min-w-0 lg:min-w-[180px]">
              <img src={safeIcon} alt="Pago Protegido" className="w-12 h-12" />
              <h3 className="text-[18px] font-medium">
                <span className="text-black">Pago </span>
                <span className="text-[#3AAF3C]">Protegido</span>
              </h3>
            </div>
            <p className="text-[16px] text-gray-600 flex-1 max-w-full lg:max-w-[600px] leading-tight text-center lg:text-left">
              Todos los pagos cuentan con protección frente a retrasos, imprevistos o servicios no completados. El profesional recibe el pago únicamente una vez finalizado el servicio conforme a lo acordado.
            </p>
          </div>
        </div>

        <div className="mt-16 w-full lg:w-[944px] mx-auto px-4 lg:px-0">
          <h2 className="text-[24px] font-bold text-[#053F5C] mb-6">Preguntas Frecuentes</h2>
          
          <div className="space-y-2">
            <div className="bg-white/70 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleAccordion(0)} 
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[16px] font-medium">¿Cuánto cuesta?</span>
                  <span className="text-[#F7AD19]">Revisa aquí los precios💸</span>
                </div>
                <span className={`material-icons transition-transform ${openAccordion === 0 ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <div className={`px-4 overflow-hidden transition-all ${openAccordion === 0 ? 'max-h-40 pb-4' : 'max-h-0'}`}>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="bg-white/70 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleAccordion(1)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[16px] font-medium">¿Este servicio es a domicilio?</span>
                  <span className="text-[#F7AD19]">❓</span>
                </div>
                <span className={`material-icons transition-transform ${openAccordion === 1 ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <div className={`px-4 overflow-hidden transition-all ${openAccordion === 1 ? 'max-h-40 pb-4' : 'max-h-0'}`}>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="bg-white/70 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleAccordion(2)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <span className="text-[16px] font-medium">¿Qué Diferencias Tiene un Calefont y una Caldera?</span>
                <span className={`material-icons transition-transform ${openAccordion === 2 ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <div className={`px-4 overflow-hidden transition-all ${openAccordion === 2 ? 'max-h-40 pb-4' : 'max-h-0'}`}>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="bg-white/70 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleAccordion(3)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <span className="text-[16px] font-medium">¿Qué Tipos de Calderas Existen?</span>
                <span className={`material-icons transition-transform ${openAccordion === 3 ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <div className={`px-4 overflow-hidden transition-all ${openAccordion === 3 ? 'max-h-40 pb-4' : 'max-h-0'}`}>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full lg:w-[944px] mx-auto px-4 lg:px-0">
          <h2 className="text-center text-[24px] font-bold text-[#053F5C] mb-10">
            ¿Por qué contratar aquí?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/70 rounded-lg p-6 text-center">
              <span className="material-icons text-[#053F5C] text-4xl mb-4">verified_user</span>
              <h3 className="text-[#053F5C] font-medium text-lg mb-3">Seguridad ante todo</h3>
              <p className="text-gray-600 text-sm">
                Conecta con profesionales cuya identidad, antecedentes y credenciales han sido verificados.
              </p>
            </div>

            <div className="bg-white/70 rounded-lg p-6 text-center">
              <span className="material-icons text-[#053F5C] text-4xl mb-4">price_check</span>
              <h3 className="text-[#053F5C] font-medium text-lg mb-3">Precios transparentes</h3>
              <p className="text-gray-600 text-sm">
                Obtén una cotización clara antes de contratar y revisa opiniones de otros clientes para tomar una decisión informada.
              </p>
            </div>

            <div className="bg-white/70 rounded-lg p-6 text-center">
              <span className="material-icons text-[#053F5C] text-4xl mb-4">payments</span>
              <h3 className="text-[#053F5C] font-medium text-lg mb-3">Pago Protegido</h3>
              <p className="text-gray-600 text-sm">
                Realiza tu pago a través de nuestra plataforma y obtén protección frente a retrasos, inconvenientes o servicios no completados.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="w-full sm:w-auto bg-[#F7AD19] text-white px-8 py-3 rounded-lg hover:bg-[#e59d17] font-medium">
              Comenzar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
