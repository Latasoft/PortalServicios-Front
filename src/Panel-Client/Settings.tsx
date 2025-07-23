import { useState } from 'react'
import defaultProfilePic from '../assets/img-services/gasfiter-foto.jpg'

const Settings = () => {
  const [settings, setSettings] = useState({
    language: 'es',
    timezone: 'America/Santiago'
  })

  const handleSettingChange = (type: keyof typeof settings, value: string) => {
    setSettings(prev => ({
      ...prev,
      [type]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A4E8F2] to-[#77C4D4] flex justify-center px-4">
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
            <a href="/settings" className="flex items-center gap-2 text-[#053F5C] font-medium p-2 hover:bg-white/50 rounded-lg">
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

        {/* Contenido principal */}
        <div className="flex-1">
          <div className="bg-white/70 rounded-lg p-8">
            <h1 className="text-2xl font-bold text-[#053F5C] mb-8">Configuración</h1>
            
            <div className="space-y-8">
              {/* Preferencias */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-lg font-semibold text-[#053F5C] mb-4">Preferencias</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[#053F5C] mb-2">Idioma</label>
                    <select
                      value={settings.language}
                      onChange={(e) => handleSettingChange('language', e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
                    >
                      <option value="es">Español</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-[#053F5C] mb-2">Zona horaria</label>
                    <select
                      value={settings.timezone}
                      onChange={(e) => handleSettingChange('timezone', e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
                    >
                      <option value="America/Santiago">Santiago (GMT-4)</option>
                      <option value="America/Buenos_Aires">Buenos Aires (GMT-3)</option>
                    </select>
                  </div>
                </div>
              </div>

              <button className="bg-[#F7AD19] text-white px-6 py-2 rounded-lg hover:bg-[#e59d17] transition-colors">
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
