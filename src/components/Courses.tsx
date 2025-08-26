export default function Courses() {
  return (
    <section className="py-32 px-6 bg-white text-gray-900 text-center">
  <h2 className="text-4xl font-bold mb-20">Nuestros programas</h2>

  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
    <div className="bg-[#F3F9FC] rounded-lg shadow-md overflow-hidden">
      <img src="/course-img1.jpg" alt="Curso inicial de arbitraje" className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Curso inicial de arbitraje</h3>
        <p className="text-sm text-gray-700">
          Ideal para quienes dan sus primeros pasos en el arbitraje. Incluye fundamentos y práctica.
        </p>
      </div>
    </div>

    {/* <div className="bg-[#F3F9FC] rounded-lg shadow-md overflow-hidden">
      <img src="/course-img4.jpg" alt="Curso avanzado de arbitraje" className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Curso avanzado</h3>
        <p className="text-sm text-gray-700">
          Perfeccionamiento técnico, toma de decisiones y análisis de jugadas en contexto profesional.
        </p>
      </div>
    </div> */}

    <div className="bg-[#F3F9FC] rounded-lg shadow-md overflow-hidden">
      <img src="/course-img2.jpg" alt="Seminarios de VAR y reglamento FIFA" className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Seminarios de VAR y reglamento FIFA</h3>
        <p className="text-sm text-gray-700">
          Actualizate con las últimas reglas y tecnología usada en el arbitraje internacional.
        </p>
      </div>
    </div>

    <div className="bg-[#F3F9FC] rounded-lg shadow-md overflow-hidden sm:col-span-2 lg:col-span-1">
      <img src="/course-img3.jpg" alt="Charlas con árbitros profesionales" className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Charlas con árbitros profesionales</h3>
        <p className="text-sm text-gray-700">
          Conocé la experiencia real de quienes ya ejercen. Preguntas, consejos y motivación.
        </p>
      </div>
    </div>
  </div>
</section>


  )
}