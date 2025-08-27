'use client';
import Whistle from "./icons/Whistle";
import Certificate from "./icons/Certificate";
import Image from "next/image";
import Check from "./icons/Check";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Abouts() {
  useEffect(() => {
    AOS.init()
  }, []);
  return (
    <section className="max-w-7xl mx-auto my-30 flex px-6">
      <div className="flex flex-col md:flex-row justify-between w-full md:gap-10 lg:gap-0">
        <div data-aos="fade-right" className="relative w-full mb-[75%] sm:mb-[50%] md:mb-0 h-fit">
          {/* Imagen principal */}
          <Image
            src="/aboutimg1.png"
            alt="aboutus-image"
            width={500}
            height={500}
            className="rounded-xl w-full h-auto max-w-[420px]"
          />

          {/* Imagen superpuesta */}
          <div className="absolute bottom-[-65%] right-[-1dvw] w-[88%] max-w-[320px] md:bottom-[-65%] lg:bottom-[-50%] lg:right-[7dvw] bg-white rounded-3xl p-3">
            <Image
              src="/aboutimg2.png"
              alt="aboutus-image"
              width={500}
              height={500}
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>

        <div data-aos="fade-left" className="md:max-w-[50%]">
          <h4 className="text-lg font-extralight mb-3">
            <span className="text-blue-400 font-medium mr-2">/ /</span> Acerca
            de Nosotros
          </h4>
          <h3 className="text-3xl font-bold md:text-4xl">
            Descubre Nuestra Pasión por la Formación Arbitral

          </h3>
          <p className="my-5 font-light">
            En la Escuela de Arbitraje, creemos que dirigir un partido es mucho más que aplicar reglas: es liderazgo, respeto y compromiso con el juego. Con años de experiencia y un equipo de instructores certificados, nos dedicamos a formar árbitros preparados para enfrentar cualquier desafío dentro y fuera de la cancha.

          </p>
          <div className="pt-10 flex flex-col xl:flex-row items-center xl:gap-10 divide-y-2 xl:divide-x-2 xl:divide-y-0 divide-gray-300">
            <div className="flex flex-col xl:flex-row gap-4 items-center pb-5 xl:p-0 xl:pr-10">
              <Whistle className="rounded-full bg-blue-400 w-12 h-12 p-3 text-white" />
              <span className="text-center xl:text-start xl:w-50">Formación con instructores profesionales</span>
            </div>
            <div className="flex flex-col xl:flex-row gap-4 items-center pt-5 xl:p-0">
              <Certificate className="rounded-full bg-blue-400 w-12 h-12 p-3 text-white" />
              <span className="text-center xl:text-start xl:w-50">Programas avalados y actualizados</span>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Check className="w-6 h-6 bg-blue-400 text-white rounded-full p-1" />
              <span className="">Clases teóricas y prácticas en campo</span>
            </div>
            <div className="flex items-center gap-4">
              <Check className="w-6 h-6 bg-blue-400 text-white rounded-full p-1" />
              <span className="">Certificación oficial al finalizar</span>
            </div>
            <div className="flex items-center gap-4">
              <Check className="w-6 h-6 bg-blue-400 text-white rounded-full p-1" />
              <span className="">Oportunidades en ligas y torneos</span>
            </div>
          </div>
          <button className="bg-blue-400 text-white flex mx-auto md:mx-0 font-semibold rounded-md px-10 py-3 mt-15">
            Inscribirme
          </button>
        </div>
      </div>
    </section>
  );
}
