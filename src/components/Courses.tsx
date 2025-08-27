import Image from "next/image";

export default function Courses() {
  return (
    <section className="my-20 max-w-7xl mx-auto px-6 text-gray-900 text-center">
      <h4 className="text-lg font-light mb-3">
        <span className="text-blue-500 font-medium mr-2">/ /</span> Nuestros
        Programas
      </h4>
      <h3 className="text-3xl font-bold md:text-4xln text-[#243E63]">
        Transformative Painting Services Tailored to Your Needs
      </h3>
      <div className="mt-30 flex flex-col md:flex-row gap-30">
        <div className="border border-gray-300 w-full rounded-xl">
          <Image
            src="/course-img1.jpg"
            alt="aboutus-image"
            width={500}
            height={500}
            className="mx-auto -mt-10 w-[85%] rounded-xl"
          />
          <div className="space-y-6 p-10">
            <h4 className="mt-2 text-[#243E63] font-bold">
              Formación Inicial de Árbitros Profesionales
            </h4>
            <p className="text-sm text-gray-500 font-semibold">
              Programa inicial para aprender reglas, fundamentos del arbitraje y
              práctica en cancha con supervisión.
            </p>
          </div>
        </div>
        <div className="border border-gray-300 w-full rounded-xl">
          <Image
            src="/course-img2.jpg"
            alt="aboutus-image"
            width={500}
            height={500}
            className="mx-auto -mt-10 w-[85%] rounded-xl"
          />
          <div className="space-y-6 p-10">
            <h4 className="mt-2 text-[#243E63] font-bold">
              Arbitraje Avanzado y Profesional
            </h4>
            <p className="text-sm text-gray-500 font-semibold">
              Entrenamiento intensivo para torneos, reforzando técnica, liderazgo y manejo de presión.
            </p>
          </div>
        </div>
        <div className="border border-gray-300 w-full rounded-xl">
          <Image
            src="/course-img3.jpg"
            alt="aboutus-image"
            width={500}
            height={500}
            className="mx-auto -mt-10 w-[85%] rounded-xl"
          />
          <div className="space-y-6 p-10">
            <h4 className="mt-2 text-[#243E63] font-bold">
              Capacitación en VAR y Tecnologías Modernas
            </h4>
            <p className="text-sm text-gray-500 font-semibold">
              Programa que te capacita en VAR, comunicación tecnológica y
              análisis de jugadas según estándares FIFA.
            </p>
          </div>
        </div>
      </div>
      <button className="mt-12 bg-blue-500 text-white w-full py-4 font-semibold rounded cursor-pointer hover:bg-blue-600 transition-colors duration-300">Comienza tu formación hoy</button>
    </section>
  );
}
