import { useState } from 'react'
import defaultProfilePic from '../assets/img-services/gasfiter-foto.jpg' // Asegúrate de tener esta imagen

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: 'Pedro Carrasco',
    email: 'pedrocarrasco1981@gmail.com',
    address: 'Av. Peru #496, Viña del Mar',
    phone: '924232540',
    birthDate: '24/01/1981'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A4E8F2] to-[#77C4D4] flex justify-center px-4">
      <div className="max-w-[1200px] w-full flex gap-8 py-12">
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
            <a href="/profile" className="flex items-center gap-2 text-[#053F5C] font-medium p-2 hover:bg-white/50 rounded-lg">
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
            <a href="/my-services" className="flex items-center gap-2 text-gray-600 p-2 hover:bg-white/50 rounded-lg">
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


        <div className="flex-1">
          <div className="bg-white/70 rounded-lg p-8">
            <h1 className="text-2xl font-bold text-[#053F5C] mb-8">Mi cuenta</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-[#053F5C] mb-2">Nombre completo</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
                  />
                </div>
                
                <div>
                  <label className="block text-[#053F5C] mb-2">Correo</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
                  />
                </div>
                
                <div>
                  <label className="block text-[#053F5C] mb-2">Dirección</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
                  />
                </div>
                
                <div>
                  <label className="block text-[#053F5C] mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
                  />
                </div>
                
                <div>
                  <label className="block text-[#053F5C] mb-2">Fecha de nacimiento</label>
                  <input
                    type="text"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
                  />
                </div>

                <button className="bg-[#F7AD19] text-white px-6 py-2 rounded-lg hover:bg-[#e59d17] transition-colors">
                  Guardar
                </button>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={defaultProfilePic}
                  alt="Profile picture"
                  className="w-40 h-40 rounded-full object-cover mb-4"
                />
                <button className="bg-[#F7AD19] text-white px-6 py-2 rounded-lg hover:bg-[#e59d17] transition-colors">
                  Cambiar foto de perfil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
