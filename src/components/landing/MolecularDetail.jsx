import { motion } from 'framer-motion';
import { FileText, Zap, Scale, Layers } from 'lucide-react';

const SPECS = [
  { icon: Zap, label: 'Electrical Conductivity', value: '1–5000 S/cm', desc: 'In-plane measurement' },
  { icon: Scale, label: 'Density', value: '1–2 g/cm³', desc: 'Composite range' },
  { icon: Layers, label: 'Mechanical Form', value: 'Flexible & Rigid', desc: 'Both flexible and rigid materials available' },
];



export default function MolecularDetail() {
  return (
    <section id="molecular" className="relative py-24 md:py-32">
      {/* Top border trace */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border/30" />

      <div className="px-6 md:px-12">

      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Left: Visual */}
        <div className="lg:w-1/2 relative">
          <div className="lg:sticky lg:top-24 px-6 md:px-12 py-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8"
            >
              PRECISION
              <br />
              AT THE <span className="text-primary">ATOMIC</span>
              <br />
              SCALE
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-foreground/40 leading-relaxed max-w-md mb-10"
            >
              Our patent-pending process synthesizes graphite composites while preserving
              the electrical percolation network. The result: highly conductive
              materials for Li-ion anodes and flow field plates that lower
              operating costs. Custom formulations available on request.
            </motion.p>


          </div>
        </div>

        {/* Right: Data tables */}
        <div className="lg:w-1/2 px-6 md:px-12 lg:border-l border-border/20">
          <div className="py-12 space-y-12">
            {/* Technical specs */}
            <div>
              <h3 className="font-mono text-sm tracking-[0.3em] text-muted-foreground/40 mb-8">
                TECHNICAL SPECIFICATIONS
              </h3>
              <div className="space-y-0">
                {SPECS.map((spec, i) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 py-5 border-b border-border/20 group"
                  >
                    <spec.icon className="w-4 h-4 text-primary/60 shrink-0" />
                    <div className="flex-1">
                      <span className="font-mono text-base text-foreground/60 tracking-wide">{spec.label}</span>
                      <p className="text-sm text-muted-foreground/40 mt-0.5">{spec.desc}</p>
                    </div>
                    <span className="font-mono text-lg text-foreground font-medium">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.2em] bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-colors"
              >
                <FileText className="w-4 h-4" />
                REQUEST MORE INFO
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}