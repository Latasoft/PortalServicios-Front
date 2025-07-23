import { useState } from 'react'
import defaultProfilePic from '../assets/img-services/gasfiter-foto.jpg'
import webpayLogo from '../assets/img-client/webpay.png'
import khipuLogo from '../assets/img-client/khipu-logo.png'

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState('bank')
  const [formData, setFormData] = useState({
    cardholderName: '',
    bank: 'Santander',
    accountType: 'Corriente',
    accountNumber: '',
    rut: '',
    email: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleMethodChange = (method: string) => {
    setSelectedMethod(method)
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
            <a href="/security" className="flex items-center gap-2 text-gray-600 p-2 hover:bg-white/50 rounded-lg">
              <span className="material-icons">security</span>
              Seguridad
            </a>
            <a href="#" className="flex items-center gap-2 text-[#053F5C] font-medium p-2 hover:bg-white/50 rounded-lg">
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
            <h1 className="text-2xl font-bold text-[#053F5C] mb-8">Metodos de pago</h1>
            
            <div className="space-y-8">
              <div className="flex flex-wrap gap-4">
                <div className="relative flex items-center">
                  {selectedMethod === 'bank' && (
                    <div className="absolute w-4 h-4 rounded-full bg-[#F7AD19] -left-2"></div>
                  )}
                  <div 
                    className={`border rounded-lg p-4 w-[140px] h-[80px] flex items-center justify-center cursor-pointer ${selectedMethod === 'bank' ? 'border-[#F7AD19] bg-white' : 'border-gray-200'}`}
                    onClick={() => handleMethodChange('bank')}
                  >
                    <div className="text-[#053F5C] text-5xl flex items-center justify-center w-[60px] h-[60px]">
                      <span className="material-icons" style={{ fontSize: '60px' }}>account_balance</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex items-center">
                  {selectedMethod === 'paypal' && (
                    <div className="absolute w-4 h-4 rounded-full bg-[#F7AD19] -left-2"></div>
                  )}
                  <div 
                    className={`border rounded-lg p-4 w-[140px] h-[80px] flex items-center justify-center cursor-pointer ${selectedMethod === 'paypal' ? 'border-[#F7AD19] bg-white' : 'border-gray-200'}`}
                    onClick={() => handleMethodChange('paypal')}
                  >
                    <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal" className="w-[60px] h-[60px] object-contain" />
                  </div>
                </div>
                
                <div className="relative flex items-center">
                  {selectedMethod === 'webpay' && (
                    <div className="absolute w-4 h-4 rounded-full bg-[#F7AD19] -left-2"></div>
                  )}
                  <div 
                    className={`border rounded-lg p-4 w-[140px] h-[80px] flex items-center justify-center cursor-pointer ${selectedMethod === 'webpay' ? 'border-[#F7AD19] bg-white' : 'border-gray-200'}`}
                    onClick={() => handleMethodChange('webpay')}
                  >
                    <img src={webpayLogo} alt="WebPay" className="w-[60px] h-[60px] object-contain" />
                  </div>
                </div>
                
                <div className="relative flex items-center">
                  {selectedMethod === 'khipu' && (
                    <div className="absolute w-4 h-4 rounded-full bg-[#F7AD19] -left-2"></div>
                  )}
                  <div 
                    className={`border rounded-lg p-4 w-[140px] h-[80px] flex items-center justify-center cursor-pointer ${selectedMethod === 'khipu' ? 'border-[#F7AD19] bg-white' : 'border-gray-200'}`}
                    onClick={() => handleMethodChange('khipu')}
                  >
                    <img src={khipuLogo} alt="Khipu" className="w-[60px] h-[60px] object-contain" />
                  </div>
                </div>
              </div>
              
              {selectedMethod === 'bank' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-[#053F5C] mb-2">Nombre del titular</label>
                    <input
                      type="text"
                      name="cardholderName"
                      value={formData.cardholderName}
                      onChange={handleChange}
                      placeholder="Nombre del titular de la tarjeta"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#053F5C] mb-2">Banco</label>
                      <select
                        name="bank"
                        value={formData.bank}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
                      >
                        <option value="Santander">Santander</option>
                        <option value="Banco de Chile">Banco de Chile</option>
                        <option value="BCI">BCI</option>
                        <option value="Banco Estado">Banco Estado</option>
                        <option value="Scotiabank">Scotiabank</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-[#053F5C] mb-2">Tipo de cuenta</label>
                      <select
                        name="accountType"
                        value={formData.accountType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
                      >
                        <option value="Corriente">Corriente</option>
                        <option value="Vista">Vista</option>
                        <option value="Ahorro">Ahorro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#053F5C] mb-2">Número de cuenta</label>
                      <input
                        type="text"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleChange}
                        placeholder="Número de cuenta"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-[#053F5C] mb-2">RUT o identificación</label>
                      <input
                        type="text"
                        name="rut"
                        value={formData.rut}
                        onChange={handleChange}
                        placeholder="19.653.421-4"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-[#053F5C] mb-2">Correo electrónico</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ingresar correo electrónico"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#429EBD] bg-white"
                    />
                  </div>
                </div>
              )}
              
              {selectedMethod === 'paypal' && (
                <div className="p-6 border border-gray-200 rounded-lg bg-white/50">
                  <p className="text-center text-gray-600">Serás redirigido a PayPal para completar la configuración.</p>
                </div>
              )}
              
              {selectedMethod === 'webpay' && (
                <div className="p-6 border border-gray-200 rounded-lg bg-white/50">
                  <p className="text-center text-gray-600">Serás redirigido a WebPay para completar la configuración.</p>
                </div>
              )}
              
              {selectedMethod === 'khipu' && (
                <div className="p-6 border border-gray-200 rounded-lg bg-white/50">
                  <p className="text-center text-gray-600">Serás redirigido a Khipu para completar la configuración.</p>
                </div>
              )}

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

export default PaymentMethods