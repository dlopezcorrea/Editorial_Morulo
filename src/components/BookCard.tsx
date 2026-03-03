import { motion } from "framer-motion";

interface BookCardProps {
  title: string;
  price: string;
  description: string;
  specs: string;
  isNew?: boolean;
  colorIndex: number;
  image?: string;
}

const cardColors = [
  "from-primary/10 to-coral/10",
  "from-coral/10 to-orange/10",
  "from-orange/10 to-soft-pink/10",
  "from-soft-pink/10 to-primary/10",
  "from-coral/10 to-primary/10",
  "from-orange/10 to-coral/10",
];

const BookCard = ({ title, price, description, specs, isNew, colorIndex, image }: BookCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: colorIndex * 0.1 }}
    whileHover={{ y: -6, transition: { duration: 0.25 } }}
    className={`rounded-2xl bg-gradient-to-br ${cardColors[colorIndex % 6]} border border-border p-6 flex flex-col gap-4 relative overflow-hidden group`}
  >
    {isNew && (
      <span className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
        Nuevo
      </span>
    )}

    {image && (
      <div className="w-full aspect-square rounded-xl overflow-hidden mb-2">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
    )}

    <h3 className="font-display text-xl font-bold text-foreground leading-tight">{title}</h3>

    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>

    <div className="text-xs text-muted-foreground border-t border-border pt-3 space-y-1">
      <p><span className="font-semibold text-foreground">Precio:</span> {price}</p>
      <p><span className="font-semibold text-foreground">Detalles:</span> {specs}</p>
    </div>
  </motion.div>
);

export default BookCard;
