import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";
import logoMorulo from "@/assets/logo-morulo.png";

const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={logoMorulo} alt="MORULO" className="h-10 w-10 rounded-sm" />
            <h3 className="font-display text-2xl font-black">MORULO</h3>
          </div>
          <p className="text-background/70 text-sm leading-relaxed">
            Editorial independiente de libros infantiles. Un proyecto creativo de madre e hija desde Cali, Colombia.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-sm tracking-[0.15em] uppercase mb-4">Navegación</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Inicio", path: "/" },
              { label: "Nosotras", path: "/nosotras" },
              { label: "Catálogo", path: "/catalogo" },
              { label: "Reconocimientos", path: "/reconocimientos" },
              { label: "Contacto", path: "/contacto" },
            ].map((item) => (
              <Link key={item.path} to={item.path} className="text-background/60 hover:text-background text-sm transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-sm tracking-[0.15em] uppercase mb-4">Contacto</h4>
          <div className="flex flex-col gap-3 text-sm text-background/70">
            <span className="flex items-center gap-2"><MapPin size={16} /> Cali, Colombia</span>
            <span className="flex items-center gap-2"><Mail size={16} /> hola@morulo.co</span>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-background/20 text-center text-xs text-background/50">
        © {new Date().getFullYear()} MORULO Editorial. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
