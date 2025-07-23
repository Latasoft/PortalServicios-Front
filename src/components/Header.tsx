import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-[#429EBD] h-[80px] flex items-center shadow-md">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div 
          onClick={() => navigate('/')} 
          className="text-white text-xl md:text-2xl font-bold cursor-pointer hover:text-sky-100 transition-colors"
        >
          Logo
        </div>
        <nav>
          <ul className="flex items-center gap-3 md:gap-6">
            <li>
              <Link 
                to="/services/offer" 
                className="bg-[#F7AD19] text-white px-3 md:px-4 py-2 text-sm md:text-base rounded hover:bg-[#e59d17] transition-colors whitespace-nowrap"
              >
                Ofrecer Servicios
              </Link>
            </li>
            <li>
              <Link 
                to="/register" 
                className="text-white hover:text-sky-100 transition-colors text-sm md:text-base"
              >
                Registrate
              </Link>
            </li>
            <li>
              <Link 
                to="/login" 
                className="text-white hover:text-sky-100 transition-colors text-sm md:text-base"
              >
                Ingresar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
