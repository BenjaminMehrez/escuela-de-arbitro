"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse justify-between py-20 px-6 text-gray-900">
      <Image
        data-aos="fade-up"
        className="rounded-xl object-cover object-center"
        width={600}
        height={600}
        src="/whyusimg.png"
        alt="advantages-image"
      />
      <div data-aos="fade-up">
        <div className="mt-10 flex flex-col gap-8 text-[#243E63]">
          <h2 className="text-5xl font-extrabold">
            ¿Por qué{" "}
            <span className="italic text-white bg-blue-500 px-2 pb-1 mt-4 w-fit block rounded lg:inline">
              elegirnos?
            </span>
          </h2>
          <p className="text-gray-500 font-semibold text-sm max-w-xl">
            Nos destacamos por un método de enseñanza integral que combina
            teoría, práctica en cancha y desarrollo personal, garantizando que
            cada árbitro esté preparado para dirigir con seguridad y confianza
            en cualquier nivel competitivo.
          </p>
          <p className="text-gray-500 font-semibold text-sm max-w-xl">
            Nuestra misión es impulsar tu crecimiento en el arbitraje brindándote capacitación de calidad, instructores certificados y una red de oportunidades que abrirá las puertas a tu futuro deportivo.
          </p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row gap-8 text-center">
          <div className="space-y-2">
            <h4 className="text-[#243E63] text-3xl font-bold">1400+</h4>
            <span className="text-blue-500 font-bold">Torneos ganados</span>
          </div>
          <div className="space-y-2">
            <h4 className="text-[#243E63] text-3xl font-bold">200+</h4>
            <span className="text-blue-500 font-bold">Estudiantes</span>
          </div>
          <div className="space-y-2">
            <h4 className="text-[#243E63] text-3xl font-bold">10+</h4>
            <span className="text-blue-500 font-bold">Años de experiencia</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded mt-10 w-full md:w-fit">
          Inscribirme
        </button>
      </div>
    </section>
  );
}
