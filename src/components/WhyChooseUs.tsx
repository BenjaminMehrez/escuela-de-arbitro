import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse justify-between py-20 px-6 text-gray-900">
      <Image
        className="rounded-xl object-cover object-center"
        width={600}
        height={600}
        src="/aboutus-img.jpg"
        alt="advantages-image"
      />
      <div>
        <div className="mt-10 flex flex-col gap-8 text-[#243E63]">
          <h2 className="text-5xl font-extrabold">
            ¿Por qué{" "}
            <span className="italic text-white bg-blue-500 px-2 pb-1 rounded">
              elegirnos?
            </span>
          </h2>
          <p className="text-gray-500 font-semibold text-sm max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
        <button className="flex mx-auto md:mx-0 bg-blue-500 text-white font-bold py-3 px-8 rounded mt-10">
          Inscribirme
        </button>
      </div>
    </section>
  );
}
