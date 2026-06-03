import { motion } from 'framer-motion';

export default function InquiryForm() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground/40 block mb-4"
      >
        CONTACT
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8"
      >
        CONTACT
        <br />
        <span className="text-primary">US</span>
      </motion.h2>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        href="mailto:info@collidingmaterials.com"
        className="font-mono text-xl md:text-2xl text-white hover:text-white/70 transition-colors"
      >
        info@collidingmaterials.com
      </motion.a>
    </section>
  );
}