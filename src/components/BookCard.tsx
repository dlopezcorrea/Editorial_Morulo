import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

interface BookCardProps {
  title: string;
  price: string;
  formats: string;
  description: string;
  specs: string;
  isNew?: boolean;
  colorIndex: number;
}

const cardColors = [
  "from-primary/10 to-coral/10",
  "from-coral/10 to-orange/10",
  "from-orange/10 to-soft-pink/10",
  "from-soft-pink/10 to-primary/10",
  "from-coral/10 to-primary/10",
  "from-orange/10 to-coral/10",
];

const accentColors = [
  "bg-primary",
  "bg-coral",
  "bg-accent",
  "bg-soft-pink",
  "bg-coral",
  "bg-accent",
];

const BookCard = ({ title, price, formats, description, specs, isNew, colorIndex }: BookCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: colorIndex * 0.1 }}
    whileHover={{ y: -6, transition: { duration: 0.25 } }}
    className={`rounded-2xl bg-gradient-to-br ${cardColors[colorIndex % 6]} border border-border p-6 flex flex-col gap-4 relative overflow-hidden group`}
  >
    {isNew && (
      <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
        Nuevo
      </span>
    )}
    
    {/* Book icon placeholder */}
    <div className={`w-16 h-16 rounded-xl ${accentColors[colorIndex % 6]} flex items-center justify-center mb-2`}>
      <BookOpen className="text-primary-foreground" size={28} />
    </div>

    <h3 className="font-display text-xl font-bold text-foreground leading-tight">{title}</h3>
    
    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
    
    <div className="text-xs text-muted-foreground border-t border-border pt-3 space-y-1">
      <p><span className="font-semibold text-foreground">Precio:</span> {price}</p>
      <p><span className="font-semibold text-foreground">Formatos:</span> {formats}</p>
      <p><span className="font-semibold text-foreground">Detalles:</span> {specs}</p>
    </div>

    <button className="mt-2 w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm tracking-wide hover:bg-primary/90 transition-colors">
      Más información
    </button>
  </motion.div>
);

export default BookCard;
