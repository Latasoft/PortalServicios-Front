import { useState } from 'react'
import defaultProfilePic from '../assets/img-services/gasfiter-foto.jpg'

const Security = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    currentEmail: 'pedrocarrasco_gasfiter@gmail.com',
    newEmail: 'pedrocarrasco_gasfiter@gmail.com'
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
            <a href="/profile" className="flex items-center gap-2 text-gray-600 p-2 hover:bg-white/50 rounded-lg">
              <span className="material-icons">person</span>
              Mi cuenta
            </a>
            <a href="#" className="flex items-center gap-2 text-[#053F5C] font-medium p-2 hover:bg-white/50 rounded-lg">
              <span className="material-icons">security</span>
              Seguridad
            </a>
            <a href="/payment-methods" className="flex items-center gap-2 text-gray-600 p-2 hover:bg-white/50 rounded-lg">
              <span className="material-icons">credit_card</span>
              Métodos de Pago
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-600 p-2 hover:bg-white/50 rounded-lg">
              <span className="material-icons">settings</span>
              Configuración
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-600 p-2 hover:bg-white/50 rounded-lg">
              <span className="material-icons">list_alt</span>
              Mis servicios
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-600 p-2 hover:bg-white/50 rounded-lg">
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
            <h1 className="text-2xl font-bold text-[#053F5C] mb-8">Seguridad</h1>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-[#053F5C] mb-4">Contraseña</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[#053F5C] mb-2">Contraseña actual</label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#053F5C] mb-2">Contraseña nueva</label>
                      <input
                        type="password"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-[#053F5C] mb-2">Repetir contraseña</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-semibold text-[#053F5C] mb-4">Correo electrónico</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#053F5C] mb-2">Correo electrónico nuevo</label>
                    <input
                      type="email"
                      name="newEmail"
                      value={formData.newEmail}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[#053F5C] mb-2">Repetir correo electrónico</label>
                    <input
                      type="email"
                      name="confirmEmail"
                      value={formData.newEmail}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
                    />
                  </div>
                </div>
              </div>

              <button className="bg-[#F7AD19] text-white px-6 py-2 rounded-lg hover:bg-[#e59d17] transition-colors">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Security