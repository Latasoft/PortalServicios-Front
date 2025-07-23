import { useState } from 'react'
import defaultProfilePic from '../assets/img-services/gasfiter-foto.jpg'

const MyServices = () => {
  const [profession] = useState('Gasfiter')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  
  const [services, setServices] = useState([
    { id: 1, name: '', type: 'Servicio 1' },
    { id: 2, name: '', type: 'Servicio 2' },
    { id: 3, name: '', type: 'Servicio 3' }
  ])

  const availableServices = [
    'Instalación de Calefont',
    'Reparación de Calefont',
    'Mantención de Calefont',
    'Instalación de Termotanques',
    'Reparación de Termotanques',
    'Mantención de Termotanques',
    'Instalación de Calderas',
    'Reparación de Calderas',
    'Mantención de Calderas'
  ]

  const handleAddService = () => {
    if (selectedService) {
      const nextServiceNumber = services.length + 1
      setServices([...services, { 
        id: Date.now(), 
        name: selectedService,
        type: `Servicio ${nextServiceNumber}`
      }])
      setSelectedService('')
      setIsModalOpen(false)
    }
  }

  const handleServiceChange = (id: number, newName: string) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, name: newName } : service
    ))
  }

  const handleRemoveService = (idToRemove: number) => {
    const filteredServices = services.filter(service => service.id !== idToRemove)
    // Reordenar los números de servicio
    const updatedServices = filteredServices.map((service, index) => ({
      ...service,
      type: `Servicio ${index + 1}`
    }))
    setServices(updatedServices)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A4E8F2] to-[#77C4D4] flex justify-center px-4">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[500px]">
            <h2 className="text-xl font-bold text-[#053F5C] mb-6">Agregar nuevo servicio</h2>
            
            <div>
              <label className="block text-[#053F5C] mb-2">Servicio</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
              >
                <option value="">Seleccionar servicio</option>
                {availableServices.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddService}
                disabled={!selectedService}
                className="bg-[#F7AD19] text-white px-6 py-2 rounded-lg hover:bg-[#e59d17] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[1200px] w-full flex gap-8 py-12">
        {/* Panel lateral */}
        <div className="w-[250px] bg-white/70 rounded-lg p-6 space-y-4 h-fit">
          <div className="flex items-center gap-3 mb-8">
            <img 
              src={defaultProfilePic}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="font-medium">Pedro Carrasco</span>
          </div>

          <nav className="space-y-2">
            <a href="/profile" className="flex items-center gap-2 text-gray-600 p-2 hover:bg-white/50 rounded-lg">
              <span className="material-icons">person</span>
              Mi cuenta
            </a>
            <a href="/security" className="flex items-center gap-2 text-gray-600 p-2 hover:bg-white/50 rounded-lg">
              <span className="material-icons">security</span>
              Seguridad
            </a>
            <a href="/payment-methods" className="flex items-center gap-2 text-gray-600 p-2 hover:bg-white/50 rounded-lg">
              <span className="material-icons">credit_card</span>
              Métodos de Pago
            </a>
            <a href="/settings" className="flex items-center gap-2 text-gray-600 p-2 hover:bg-white/50 rounded-lg">
              <span className="material-icons">settings</span>
              Configuración
            </a>
            <a href="/services" className="flex items-center gap-2 text-[#053F5C] font-medium p-2 hover:bg-white/50 rounded-lg">
              <span className="material-icons">list_alt</span>
              Mis servicios
            </a>
            <a href="/history" className="flex items-center gap-2 text-gray-600 p-2 hover:bg-white/50 rounded-lg">
              <span className="material-icons">history</span>
              Historial
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-600 p-2 hover:bg-white/50 rounded-lg">
              <span className="material-icons">logout</span>
              Cerrar sesión
            </a>
          </nav>
        </div>

        {/* Contenido principal */}
        <div className="flex-1">
          <div className="bg-white/70 rounded-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-2xl font-bold text-[#053F5C]">Mis servicios</h1>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-gray-600">Profesión:</span>
                  <span className="font-medium text-[#053F5C]">{profession}</span>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#F7AD19] text-white px-6 py-2 rounded-lg hover:bg-[#e59d17] transition-colors"
              >
                + Agregar servicio
              </button>
            </div>

            <div className="space-y-4">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="material-icons text-[#053F5C]">build</span>
                    <span className="font-medium min-w-[100px]">{service.type}:</span>
                    <select
                      value={service.name}
                      onChange={(e) => handleServiceChange(service.id, e.target.value)}
                      className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white flex-1"
                    >
                      <option value="">Seleccionar servicio</option>
                      {availableServices.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button 
                    onClick={() => handleRemoveService(service.id)}
                    className="text-red-500 hover:text-red-600 ml-4"
                  >
                    <span className="material-icons">delete</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyServices
