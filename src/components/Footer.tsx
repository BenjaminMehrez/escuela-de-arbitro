import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Whatsapp from "./icons/Whatsapp";

export default function Footer() {
  return (
    <footer className="bg-slate-900 pb-15 pt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white text-center text-sm">
        <div className="md:text-[17px] md:text-start">
          <p className="">
            © {new Date().getFullYear()} Escuela de Arbitraje. Todos los
            derechos reservados.
          </p>
          <p className="mt-2">Politica de privacidad</p>
        </div>
        <div className="flex justify-center gap-4 mt-7">
          <Facebook className="w-6 h-6" />
          <Whatsapp className="w-6 h-6" />
          <Instagram className="w-6 h-6" />
        </div>
      </div>
    </footer>
  );
}
