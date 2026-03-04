import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

const awards = [
  {
    title: "Beca de Creación Artística — Modalidad Literatura",
    description: "Programa Nacional de Estímulos del Ministerio de las Culturas, las Artes y los Saberes",
    year: "2024",
    icon: Award,
  },
  {
    title: "Estímulo, Circulación Internacional",
    description: "Difusión de la obra de Las Jirebras en Lisboa y Barcelona. ARTES LITERARIAS - Literatura infantil e ilustración – Circulación Internacional, Ventanilla Abierta. Secretaría de Cultura de Cali.",
    year: "2023",
    icon: Star,
  },
  {
    title: "Estímulo, Beca: Desarrollo de Estrategias de Comercialización",
    description: "Desarrollo de estrategias de comercialización para las artes y la cultura. ARTES LITERARIAS - Literatura infantil e ilustración. Ministerio de Cultura.",
    year: "2023",
    icon: Award,
  },
  {
    title: "Estímulo para la Creación de Libros con Contenido para la Primera Infancia",
    description: "Reconocimiento a la creación de contenido literario infantil de alta calidad",
    year: "2022",
    icon: Star,
  },
  {
    title: "Colecciones Bibliotecas Públicas",
    description: "Selección para las colecciones de las bibliotecas públicas del país",
    year: "2022",
    icon: Award,
  },
];

const bgColors = ["bg-primary/10", "bg-coral/10", "bg-accent/10", "bg-soft-pink/20", "bg-primary/10", "bg-coral/10"];
const iconBg = ["bg-primary", "bg-coral", "bg-accent", "bg-soft-pink", "bg-primary", "bg-coral"];

const Reconocimientos = () => (
  <div className="pt-24">
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">Reconocimientos</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos llena de orgullo que nuestro trabajo sea reconocido por instituciones culturales de Colombia y el mundo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {awards.map((award, i) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl ${bgColors[i % bgColors.length]} p-8 text-center`}
              >
                <div className={`w-16 h-16 rounded-full ${iconBg[i % iconBg.length]} mx-auto mb-4 flex items-center justify-center`}>
                  <Icon className="text-primary-foreground" size={28} />
                </div>
                <span className="text-sm font-bold text-muted-foreground tracking-wider">{award.year}</span>
                <h3 className="text-lg font-display font-bold text-foreground mt-2 mb-3">{award.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  </div>
);

export default Reconocimientos;
