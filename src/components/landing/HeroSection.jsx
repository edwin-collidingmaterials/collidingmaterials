import { motion } from 'framer-motion';

const HERO_IMAGE = 'https://media.base44.com/images/public/6a0b30bc5dcc4c69afbe95be/dd77c5ae2_generated_dd0ed7ce.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Macro photography of lithium crystal formations revealing molecular architecture"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 pb-16 md:pb-24 pt-32">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          {/* Left: Headline */}
          <div className="max-w-3xl">
<motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-foreground"
            >
              PERFORMANCE
              <br />
              GRAPHITE <span className="text-primary">COMPOSITES</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 text-foreground/50 text-lg md:text-xl leading-relaxed max-w-lg"
            >
              Graphite composite materials for Li-ion anodes, flow field plates,
              and high-performance electronic applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="font-mono text-xs tracking-[0.2em] bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-colors"
              >
                CONTACT US
              </a>
            </motion.div>
          </div>


        </div>


      </div>
    </section>
  );
}