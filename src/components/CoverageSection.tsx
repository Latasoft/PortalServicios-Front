const CoverageSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#053F5C] mb-8">
            Nos encontramos en todo Chile 🇨🇱
          </h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <input 
              type="text" 
              placeholder="Ingresa tu región o provincia" 
              className="flex-1 px-4 py-3 border-0 focus:ring-2 focus:ring-[#429EBD] text-gray-600 focus:outline-none"
            />
            <button className="bg-[#F7AD19] text-white px-8 py-3 hover:bg-[#e59d17] transition-colors">
              Ir
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoverageSection
