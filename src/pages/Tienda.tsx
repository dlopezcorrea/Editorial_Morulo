import { motion } from "framer-motion";
import BookCard from "@/components/BookCard";

const books = [
  {
    title: "Jirebras: Adivinanzas, Retahílas y Trabalenguas",
    price: "$20,000 – $45,000",
    formats: "Libro digital y físico",
    description: "¡Sumérgete en el mundo de las palabras con Jirebras! Diversión y aprendizaje en un solo libro. Despierta la creatividad en toda la familia con juegos de palabras y acertijos. Seleccionado por el Ministerio de Cultura, la Biblioteca Nacional y Fundalectura para la impresión de 2.000 ejemplares para la Red de Bibliotecas Públicas del País.",
    specs: "Formato e-book · 10 cuentos con ilustraciones",
  },
  {
    title: "Piñulo Cocina",
    price: "$20,000 – $45,000",
    formats: "Libro digital y físico",
    description: "¡Descubre el mundo de la cocina del Pacífico con Piñulo Cocina! 33 recetas ilustradas para niños y niñas con adivinanzas, poemas y trabalenguas. Convierte la cocina en un espacio creativo y amoroso, explorando sabores, ingredientes y tradiciones culinarias.",
    specs: "Formato e-book · 33 recetas ilustradas",
  },
  {
    title: "Cuentos Cortos, Aventuras Grandes",
    price: "$20,000 – $35,000",
    formats: "Libro digital y físico",
    description: "¡Descubre la magia de Cuentos Cortos, Aventuras Grandes! Diez cuentos ilustrados con personajes sorprendentes que invitan a trabajar valores como la amistad, la solidaridad, la resiliencia y el amor propio. Ganador del Estímulo de la Secretaría de Cultura.",
    specs: "Formato e-book · 10 cuentos con ilustraciones",
  },
  {
    title: "Danza Adivinanza",
    price: "$20,000 – $45,000",
    formats: "Libro digital y físico",
    description: "¡Descubre la magia de las adivinanzas con Danza Adivinanza! 86 adivinanzas para todas las edades con coloridas ilustraciones para jugar en compañía y unir a las familias en torno al lenguaje.",
    specs: "Formato e-book · 86 adivinanzas",
  },
  {
    title: "Juega y Celebra con Las Jirebras",
    price: "Por definir",
    formats: "Libro físico",
    description: "Un libro en el que encontrarás historias y canciones que te llevarán a lugares mágicos, adivinanzas que pondrán a prueba tu ingenio, así como retahílas y trabalenguas que te harán pensar, reír y compartir.",
    specs: "Pasta blanda · 20 cm x 20 cm · 55 páginas · ISBN: 978-628-96539-1-5 · Bogotá, octubre 2024",
    isNew: true,
  },
  {
    title: "Pregúntale al Viento",
    price: "Por definir",
    formats: "Libro físico",
    description: "Un viaje poético en el que cada verso es una respuesta a las inquietudes que surgen del entorno y la contemplación. Ganador de la Beca de Creación Artística — Ministerio de las Culturas, las Artes y los Saberes, 2024.",
    specs: "Libro ilustrado con collages · Autora: María Mercedes Echeverri · Ilustradora: Silvia Arango Echeverri",
    isNew: true,
  },
];

const Tienda = () => (
  <div className="pt-24">
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">Tienda</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra colección de libros infantiles llenos de creatividad, color y amor por las palabras.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {books.map((book, i) => (
            <BookCard key={book.title} {...book} colorIndex={i} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Tienda;
