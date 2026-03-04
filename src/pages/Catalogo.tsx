import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import BookCard from "@/components/BookCard";
import bookJuega from "@/assets/book-juega-celebra.png";
import bookPreguntale from "@/assets/book-preguntale-viento.png";
import bookPinulo from "@/assets/book-pinulo-cocina.png";
import bookCuentos from "@/assets/book-cuentos-cortos.png";
import bookDanza from "@/assets/book-danza-adivinanza.png";
import bookJirebras from "@/assets/book-jirebras.png";

const books = [
  {
    title: "Juega y Celebra con Las Jirebras",
    price: "$55.000",
    description: "Un libro en el que encontrarás historias y canciones que te llevarán a lugares mágicos, adivinanzas que pondrán a prueba tu ingenio, así como retahílas y trabalenguas que te harán pensar, reír y compartir. Ganador de la Beca de Creación Artística del Ministerio de las Culturas, 2024.",
    specs: "Pasta blanda · 20cm x 20cm · 55 páginas · ISBN: 978-628-96539-1-5",
    image: bookJuega,
  },
  {
    title: "Pregúntale al Viento",
    price: "$65.000",
    description: "Un viaje poético en el que cada verso es una respuesta a las inquietudes que surgen del entorno y la contemplación. Ganador de la Beca de Creación Artística del Ministerio de las Culturas, 2024.",
    specs: "Pasta blanda · 20cm x 20cm · 57 páginas · ISBN: 978-628-96539-0-8",
    image: bookPreguntale,
  },
  {
    title: "Piñulo Cocina",
    price: "$45.000",
    description: "Descubre el mundo de la cocina colombiana y del Pacífico con 33 recetas ilustradas para niños y niñas acompañadas de adivinanzas, poemas y trabalenguas. Convierte la cocina en un espacio creativo y amoroso.",
    specs: "Pasta blanda · 20cm x 20cm · 89 páginas · ISBN: 978-958-5479-68-5",
    image: bookPinulo,
  },
  {
    title: "Cuentos Cortos, Aventuras Grandes",
    price: "$55.000",
    description: "Diez cuentos ilustrados con personajes sorprendentes que recrean valores como la amistad, la solidaridad, la resiliencia y el amor propio. Ganador del Estímulo de la Secretaría de Cultura de Cali, 2022.",
    specs: "Pasta blanda · 20cm x 20cm · 48 páginas · ISBN: 978-958-5479-74-6",
    image: bookCuentos,
  },
  {
    title: "Danza Adivinanza",
    price: "$55.000",
    description: "86 adivinanzas poéticas para todas las edades, con coloridas ilustraciones para jugar en compañía y unir a las familias en torno al lenguaje.",
    specs: "Pasta blanda · 20cm x 20cm · 72 páginas · ISBN: 978-958-5479-69-2",
    image: bookDanza,
  },
  {
    title: "Jirebras: Adivinanzas, Retahílas y Trabalenguas",
    price: "$55.000",
    description: "¡Sumérgete en el mundo de las palabras! Diversión y aprendizaje en un solo libro. Seleccionado por el Ministerio de Cultura, la Biblioteca Nacional y Fundalectura para el Plan Nacional de Lectura y Escritura, 2022.",
    specs: "Pasta blanda · 20cm x 20cm · 68 páginas · ISBN: 978-958-5479-23-4",
    image: bookJirebras,
  },
];

const Catalogo = () => (
  <div className="pt-24">
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">Catálogo</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra colección de libros infantiles llenos de creatividad, color y amor por las palabras.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {books.map((book, i) => (
            <BookCard key={book.title} {...book} colorIndex={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-blush rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <MapPin className="mx-auto text-primary mb-3" size={28} />
          <p className="text-lg font-display font-bold text-foreground">
            Puedes encontrar nuestros libros en todas las librerías del país
          </p>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Catalogo;
