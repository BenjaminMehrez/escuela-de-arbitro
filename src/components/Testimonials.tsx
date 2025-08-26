import Image from "next/image";
import Quote from "./icons/Quote";

export default function Testimonials() {
  return (
    <section className="py-30 px-6 text-gray-900 max-w-7xl mx-auto">
      <h2 className="text-4xl mb-20 md:mb-0 font-bold text-center">
        Que dicen nuestros egresados
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="max-w-sm bg-blue-100 p-8 rounded-xl">
          <Quote className="mb-7 w-8 h-8" />
          <div className="flex flex-col gap-8">
            <p>
              Entré a la academia sin experiencia y en pocos meses adquirí la
              confianza y el conocimiento necesarios para dirigir partidos. Los
              instructores siempre están atentos y nos preparan no solo en lo
              técnico, sino también en lo mental y físico. Hoy ya arbitro
              torneos locales y siento que tengo un futuro en el arbitraje.
            </p>
            <div className="flex gap-4 items-center mx-auto">
              <Image
                src="/customer-1.png"
                alt="testimonials-image"
                width={50}
                height={50}
              />
              <span className="font-bold">John Doe</span>
            </div>
          </div>
        </div>
        <div className="md:mt-40 max-w-sm bg-blue-100 p-8 rounded-xl">
          <Quote className="mb-7 w-8 h-8" />
          <div className="flex flex-col gap-8">
            <p>
              Lo que más destaco es la seriedad y el profesionalismo de la
              formación. La academia me enseñó a aplicar el reglamento con
              criterio y seguridad, además de la importancia de la comunicación
              dentro de la cancha. Gracias a esta preparación, pude superar mis
              primeras pruebas oficiales con excelentes resultados.
            </p>
            <div className="flex gap-4 items-center mx-auto">
              <Image
                src="/customer-2.png"
                alt="testimonials-image"
                width={50}
                height={50}
              />
              <span className="font-bold">John Doe</span>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-blue-100 p-8 rounded-xl">
          <Quote className="mb-7 w-8 h-8" />
          <div className="flex flex-col gap-8">
            <p>
              La experiencia en la academia superó mis expectativas. No solo
              aprendí sobre reglas, posicionamiento y toma de decisiones, sino
              que también desarrollé valores como la disciplina y el respeto.
              Siento que estoy creciendo como árbitro y como persona, y eso es
              gracias al gran equipo de docentes y compañeros.
            </p>
            <div className="flex gap-4 items-center mx-auto">
              <Image
                src="/customer-3.png"
                alt="testimonials-image"
                width={50}
                height={50}
              />
              <span className="font-bold">John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
