import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Heart } from "lucide-react";
import heroImg from "@/assets/hero-illustration.jpg";

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Ilustración de un niño leyendo rodeado de plantas tropicales y pájaros coloridos" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>
      <div className="container mx-auto px-6 relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-6xl md:text-8xl font-display font-black text-primary mb-6 leading-none">
            MORULO
          </h1>
          <p className="text-xl md:text-2xl font-body text-foreground/80 mb-8 leading-relaxed">
            Libros que despiertan la imaginación de toda la familia
          </p>
          <Link
            to="/tienda"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-primary/90 transition-all hover:gap-4"
          >
            Conoce nuestros libros <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Intro */}
    <section className="py-24 bg-blush">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-coral flex items-center justify-center">
              <BookOpen className="text-primary-foreground" size={22} />
            </div>
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <Heart className="text-primary-foreground" size={22} />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Un proyecto creativo de madre e hija
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            MORULO es una editorial independiente de libros infantiles nacida en Cali, Colombia. 
            María Mercedes Echeverri (escritora) y Silvia Arango Echeverri (ilustradora) unen palabras 
            e imágenes para crear historias que inspiran, enseñan y conectan a las familias a través 
            de la lectura.
          </p>
          <Link
            to="/nosotras"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          >
            Conoce nuestra historia <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Index;
