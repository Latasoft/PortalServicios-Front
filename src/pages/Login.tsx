import { Link } from 'react-router-dom'
import dentista from '../assets/img-register/dentista.svg'
import facebookIcon from '../assets/img-register/facebook-icon.svg'
import googleIcon from '../assets/img-register/google-icon.svg'

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A4E8F2] to-[#77C4D4] flex">
      <div className="flex-1 flex max-w-[1200px] mx-auto w-full relative">
        <div className="hidden md:block absolute left-0 bottom-0 w-[500px]">
          <img 
            src={dentista} 
            alt="Profesional dentista" 
            className="w-full h-[600px] object-contain"
          />
        </div>


        <div className="flex-1 flex justify-end">
          <div className="w-[500px] mt-16 mb-8">
            <h2 className="text-2xl font-bold text-center text-[#053F5C] mb-4">
              Inicia sesión
            </h2>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <button className="w-full mb-4 flex items-center justify-center gap-3 bg-white border border-gray-300 p-2.5 rounded hover:bg-gray-50 text-[#333]">
                <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
                <span className="font-medium">Continuar con Facebook</span>
              </button>

              <button className="w-full mb-6 flex items-center justify-center gap-3 bg-white border border-gray-300 p-2.5 rounded hover:bg-gray-50 text-[#333]">
                <img src={googleIcon} alt="Google" className="w-5 h-5" />
                <span className="font-medium">Continuar con Google</span>
              </button>

              <div className="relative text-center mb-6">
                <hr className="border-gray-200" />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-400">o</span>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#333] mb-1.5">Correo</label>
                  <input
                    type="email"
                    placeholder="Ingresa tu correo"
                    className="w-full px-3 py-2.5 rounded border border-gray-300 focus:ring-1 focus:ring-[#429EBD] focus:border-[#429EBD] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#333] mb-1.5">Contraseña</label>
                  <input
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    className="w-full px-3 py-2.5 rounded border border-gray-300 focus:ring-1 focus:ring-[#429EBD] focus:border-[#429EBD] text-sm"
                  />
                </div>

                <div className="flex justify-end text-sm">
                  <Link to="/forgot-password" className="text-[#F7AD19] hover:underline font-medium">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <button className="w-full bg-[#F7AD19] text-white py-2.5 rounded hover:bg-[#e59d17] font-medium text-sm transition-colors">
                  Iniciar Sesión
                </button>

                <div className="text-center">
                  <span className="text-sm text-[#333]">
                    ¿No tienes una cuenta? <Link to="/register" className="text-[#F7AD19] hover:underline font-medium">Regístrate</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
