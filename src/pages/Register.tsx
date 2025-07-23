import pintor from '../assets/img-register/pintor.png'
import facebookIcon from '../assets/img-register/facebook-icon.svg'
import googleIcon from '../assets/img-register/google-icon.svg'

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A4E8F2] to-[#77C4D4] flex">
      <div className="flex-1 flex max-w-[1200px] mx-auto w-full relative">
        <div className="flex-1">
          <div className="max-w-[500px] mt-25">
            <h2 className="text-[28px] font-bold text-center text-[#053F5C] mb-6">
              Crea tu cuenta de cliente
            </h2>
            <div className="bg-white rounded-lg p-6 h-[446px]">
              

              <button className="w-full mb-3 flex items-center justify-center gap-2 bg-white border border-gray-300 p-3 rounded-lg hover:bg-gray-50">
                <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
                Continuar con Facebook
              </button>

              <button className="w-full mb-6 flex items-center justify-center gap-2 bg-white border border-gray-300 p-3 rounded-lg hover:bg-gray-50">
                <img src={googleIcon} alt="Google" className="w-5 h-5" />
                Continuar con Google
              </button>

              <div className="relative text-center mb-6">
                <hr className="border-gray-300" />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-500">o</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-[#333] font-medium">Correo</label>
                  <input
                    type="email"
                    placeholder="Ingresa tu correo"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#429EBD] focus:border-transparent"
                  />
                </div>

                <button className="w-full bg-[#F7AD19] text-white py-3 rounded-lg hover:bg-[#e59d17] font-medium">
                  Registrar Correo
                </button>

                <div className="text-sm text-center text-[#333] flex flex-col gap-4 font-medium">
                  <p className="mb-2">
                    Al continuar, aceptas las <a href="#" className="text-[#F7AD19] hover:underline">Condiciones de Uso</a> y 
                    la <a href="#" className="text-[#F7AD19] hover:underline">Política de Privacidad</a>
                  </p>
                  <p className="mt-2">
                    ¿Ya tienes una cuenta? <a href="/login" className="text-[#F7AD19] hover:underline">Ingresa</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex w-[400px] items-end absolute right-8 bottom-0">
          <img 
            src={pintor} 
            alt="Profesional de servicios" 
            className="w-[400px] h-[620px] object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Register
