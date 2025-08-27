"use client";
import { useState } from "react";
import MenuHamburger from "./icons/MenuHamburger";
import MenuClose from "./icons/MenuClose";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="banner relative px-6">
      {/* Nav móvil */}
      <header
        className={`absolute top-0 left-0 pt-30 px-8 z-10 bg-slate-900 text-white w-full h-[60vh]
        transform transition-transform duration-500 ease-in-out rounded-b-4xl
        ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <nav>
          <ul className="flex flex-col gap-6 font-bold text-xl">
            <li className="w-fit border-b-3 border-b-transparent active:border-blue-500 transition-all duration-300">
              Inicio
            </li>
            <li className="w-fit border-b-3 border-b-transparent active:border-blue-500 transition-all duration-300">
              Acerca de nosotros
            </li>
            <li className="w-fit border-b-3 border-b-transparent active:border-blue-500 transition-all duration-300">
              Inscribirse
            </li>
            <li className="w-fit border-b-3 border-b-transparent active:border-blue-500 transition-all duration-300">
              Porque elegirnos
            </li>
            <li className="w-fit border-b-3 border-b-transparent active:border-blue-500 transition-all duration-300">
              Nuestros Cursos
            </li>
          </ul>
        </nav>
      </header>

      {/* Header principal */}
      <header className="max-w-7xl mx-auto flex justify-between items-center text-white pt-10 relative z-20">
        <h2 className="fade-titlelogo font-semibold text-xl sm:text-2xl border-b-3 border-blue-500 transition-all duration-300">
          Escuela de Árbitro
        </h2>
        <div
          className="relative w-9 h-9 md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`absolute inset-0 transform transition-all duration-500 ease-in-out
              ${
                isOpen
                  ? "opacity-0 rotate-90 scale-50"
                  : "opacity-100 rotate-0 scale-100"
              }`}
          >
            <MenuHamburger className="w-9 h-9 fade-titlelogo" />
          </div>

          <div
            className={`absolute inset-0 transform transition-all duration-500 ease-in-out
              ${
                isOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-50"
              }`}
          >
            <MenuClose className="w-9 h-9" />
          </div>
        </div>

        <nav aria-label="Menú principal" className="hidden md:block fade-nav">
          <ul className="flex flex-wrap gap-6 text-lg font-medium">
            <li>
              <a
                href="#contacto"
                className="border-b-3 pb-2 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                Contacto
              </a>
            </li>
            <li>
              <a
                href="#nosotros"
                className="border-b-3 pb-2 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#inscripcion"
                className="border-b-3 pb-2 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                Inscripción
              </a>
            </li>
            <li>
              <a
                href="#resenas"
                className="border-b-3 pb-2 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                Reseñas
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="mt-30 max-w-7xl mx-auto text-white hero-title">
        <h1 className="text-3xl md:text-5xl font-bold space-y-3">
          Formamos a los 
          <hr className="border-0"/>
          <span className="text-blue-400"> Árbitros de fútbol del futuro.</span>
        </h1>
        <p className="max-w-2xl text-lg mt-5">
          Capacitate con profesionales, accedé a certificaciones oficiales y
          encontrá oportunidades reales en el arbitraje.
        </p>
        <a
          href="#formulario"
          className="mt-10 inline-block px-8 py-4 bg-blue-400 font-semibold text-lg rounded-lg shadow hover:bg-blue-500 transition duration-300 cursor-pointer"
        >
          Inscribite ahora
        </a>
      </div>
    </section>
  );
}
