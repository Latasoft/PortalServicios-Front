import { useState } from 'react'
import defaultProfilePic from '../assets/img-services/gasfiter-foto.jpg'

const History = () => {
  const [payments] = useState([
    {
      id: 1,
      date: '25/04/2023 12:40',
      service: 'Reparación de Calefont',
      client: 'Carlos Rodriguez',
      amount: '$30.000',
      status: 'Completado',
      paymentMethod: 'Webpay'
    }
  ])

  const [withdrawals] = useState([
    {
      id: 1,
      date: '25/04/2023 13:40',
      amount: '$150.000',
      method: 'Transferencia bancaria',
      status: 'Completado',
      voucher: 'Descargar'
    }
  ])

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
            <a href="/settings" className="flex items-center gap-2 text-gray-600 p-2 hover:bg-white/50 rounded-lg">
              <span className="material-icons">settings</span>
              Configuración
            </a>
            <a href="/my-services" className="flex items-center gap-2 text-gray-600 p-2 hover:bg-white/50 rounded-lg">
              <span className="material-icons">list_alt</span>
              Mis servicios
            </a>
            <a href="/history" className="flex items-center gap-2 text-[#053F5C] font-medium p-2 hover:bg-white/50 rounded-lg">
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
          <div className="bg-white/70 rounded-lg p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-[#053F5C] mb-10">Historial</h1>
            
            <div className="space-y-12">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-[#053F5C]">Pagos recibidos</h2>
                  <button className="text-[#053F5C] hover:text-[#429EBD] font-medium flex items-center gap-1">
                    Mostrar todo
                    <span className="material-icons text-sm">chevron_right</span>
                  </button>
                </div>

                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                  <table className="w-full">
                    <thead className="bg-gray-50/80">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Fecha y Hora</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Servicio</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Usuario</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Monto</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Estado del pago</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Método de pago</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                      {payments.map(payment => (
                        <tr key={payment.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-3 text-sm text-gray-600">{payment.date}</td>
                          <td className="px-6 py-3 text-sm text-gray-600">{payment.service}</td>
                          <td className="px-6 py-3 text-sm text-gray-600">{payment.client}</td>
                          <td className="px-6 py-3 text-sm text-gray-600">{payment.amount}</td>
                          <td className="px-6 py-3 text-sm">
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                              {payment.status}
                            </span>
                          </td>
                          <td className="px-6 py-3 text-sm text-gray-600">{payment.paymentMethod}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-[#053F5C]">Retiro de fondos</h2>
                  <button className="text-[#053F5C] hover:text-[#429EBD] font-medium flex items-center gap-1">
                    Mostrar todo
                    <span className="material-icons text-sm">chevron_right</span>
                  </button>
                </div>

                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                  <table className="w-full">
                    <thead className="bg-gray-50/80">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">ID Retiro</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Fecha y Hora</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Monto Retirado</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Método de Retiro</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Estado del Retiro</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Comprobante</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                      {withdrawals.map(withdrawal => (
                        <tr key={withdrawal.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-3 text-sm text-gray-600">#{withdrawal.id}</td>
                          <td className="px-6 py-3 text-sm text-gray-600">{withdrawal.date}</td>
                          <td className="px-6 py-3 text-sm text-gray-600">{withdrawal.amount}</td>
                          <td className="px-6 py-3 text-sm text-gray-600">{withdrawal.method}</td>
                          <td className="px-6 py-3 text-sm">
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                              {withdrawal.status}
                            </span>
                          </td>
                          <td className="px-6 py-3">
                            <button className="text-[#F7AD19] hover:text-[#e59d17] text-sm font-medium flex items-center gap-1">
                              {withdrawal.voucher}
                              <span className="material-icons text-sm">download</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History
