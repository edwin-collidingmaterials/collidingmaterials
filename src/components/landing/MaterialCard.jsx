import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MaterialCard({ material, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-card relative">
        <img
          src={material.image}
          alt={`Macro photography of ${material.name}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* Hover overlay with specs */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-background/85 backdrop-blur-sm p-6 flex flex-col justify-end"
            >
              <div className="font-mono text-xs space-y-3">
                {material.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between border-b border-border/30 pb-2">
                    <span className="text-muted-foreground/60 tracking-[0.15em]">{spec.label}</span>
                    <span className="text-foreground/90">{spec.value}</span>
                  </div>
                ))}
              </div>
              <button className="mt-4 font-mono text-[10px] tracking-[0.3em] text-primary hover:underline text-left">
                VIEW FULL SPEC →
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Label */}
      <div className="mt-4 flex items-start justify-between">
        <div>
          <span className="font-mono text-2xl font-bold text-primary">{material.symbol}</span>
          <p className="font-mono text-xs text-foreground/60 mt-1 tracking-wide">{material.name}</p>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground/40 tracking-[0.2em] mt-1">
          {material.sku}
        </span>
      </div>
    </motion.div>
  );
}