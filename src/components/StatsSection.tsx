const StatsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          <div className="space-y-4">
            <h3 className="text-[32px] font-bold text-[#053F5C] flex items-center justify-center md:justify-start gap-2">
              +150 <span className="text-2xl">👷</span>
            </h3>
            <p className="text-[#053F5C] text-center md:text-left">
              Especialistas en más de 50<br />
              rubros diferentes.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-[32px] font-bold text-[#053F5C] flex items-center justify-center md:justify-start gap-2">
              Tiempo de<br />
              Respuesta <span className="text-2xl">⏰</span>
            </h3>
            <p className="text-[#053F5C] text-center md:text-left">
              El 90% de los profesionales responde en menos de 15 minutos. ¡Servicio rápido y sin esperas!
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-[32px] font-bold text-[#053F5C] flex items-center justify-center md:justify-start gap-2">
              24/7 <span className="text-2xl">✅</span>
            </h3>
            <p className="text-[#053F5C] text-center md:text-left">
              ¿Problema a medianoche?<br />
              Nuestro equipo está siempre disponible para ayudarte.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
