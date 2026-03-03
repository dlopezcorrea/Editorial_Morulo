import { motion } from "framer-motion";
import { PenTool, Palette } from "lucide-react";

const Nosotras = () => (
  <div className="pt-24">
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-black text-foreground mb-6">Nosotras</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Somos un dúo creativo de madre e hija que cree en el poder transformador de los libros para niños. 
            Desde Cali, Colombia, creamos historias que invitan a soñar, jugar y aprender en familia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* María Mercedes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-blush rounded-2xl p-8 text-center"
          >
            <div className="w-32 h-32 rounded-full bg-coral/20 mx-auto mb-6 flex items-center justify-center">
              <PenTool className="text-coral" size={48} />
            </div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-2">María Mercedes Echeverri</h2>
            <span className="text-sm font-bold text-coral tracking-wider uppercase">Escritora</span>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Con una pasión profunda por las palabras y el lenguaje, María Mercedes crea historias, adivinanzas, 
              retahílas y poemas que despiertan la curiosidad y la imaginación de los más pequeños. Su escritura 
              celebra las tradiciones colombianas y los valores familiares.
            </p>
          </motion.div>

          {/* Silvia */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-blush rounded-2xl p-8 text-center"
          >
            <div className="w-32 h-32 rounded-full bg-accent/20 mx-auto mb-6 flex items-center justify-center">
              <Palette className="text-accent" size={48} />
            </div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-2">Silvia Arango Echeverri</h2>
            <span className="text-sm font-bold text-accent tracking-wider uppercase">Ilustradora</span>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Silvia da vida a cada historia con ilustraciones llenas de color, calidez y ternura. 
              Su estilo artístico, rico en detalles botánicos y personajes entrañables, convierte cada 
              página en una invitación a explorar mundos de fantasía y naturaleza.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  </div>
);

export default Nosotras;
