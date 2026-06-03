import { motion } from 'framer-motion';
import { Layers, Zap, FlaskConical, Battery, ChevronRight } from 'lucide-react';

const STEPS = [
  {
    icon: Layers,
    label: 'GRAPHITE FEEDSTOCK',
    sub: 'Natural or Synthetic',
    color: 'text-foreground/60',
    borderColor: 'border-foreground/20',
  },
  {
    icon: Zap,
    label: 'GRAPHITE ENHANCEMENT',
    sub: 'Patented REACH-compliant process',
    color: 'text-primary',
    borderColor: 'border-primary/40',
  },
  {
    icon: FlaskConical,
    label: 'POWDER OR SHEET PRODUCT',
    sub: 'High-conductivity composite',
    color: 'text-primary',
    borderColor: 'border-primary/40',
  },
  {
    icon: Battery,
    label: 'BATTERY MANUFACTURER',
    sub: 'Li-ion & fuel cell OEMs',
    color: 'text-foreground/60',
    borderColor: 'border-foreground/20',
  },
];

export default function ProcessFlow() {
  return (
    <section id="process" className="relative py-24 md:py-32 border-t border-border/20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-[0.4em] text-muted-foreground/40 block mb-4"
          >
            VALUE CHAIN
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-3xl md:text-5xl font-bold tracking-tight"
          >
            FROM FEEDSTOCK
            <br />
            TO <span className="text-primary">FINISHED PRODUCT</span>
          </motion.h2>
        </div>

        {/* Flow diagram */}
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex flex-col md:flex-row items-center flex-1">
              {/* Step card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`flex-1 w-full border ${step.borderColor} bg-background/60 backdrop-blur-sm p-6 md:p-8 flex flex-col items-center text-center gap-4 group hover:bg-card transition-colors`}
              >
                {/* Icon box */}
                <div className={`w-14 h-14 border ${step.borderColor} flex items-center justify-center group-hover:border-primary/50 transition-colors`}>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>

                {/* Step number */}
                <span className="font-mono text-xs tracking-[0.4em] text-muted-foreground/30">
                  0{i + 1}
                </span>

                {/* Label */}
                <h3 className={`font-mono text-lg font-bold tracking-wide ${step.color} leading-tight`}>
                  {step.label}
                </h3>

                {/* Sub */}
                <p className="font-mono text-sm text-muted-foreground/40 tracking-wide leading-relaxed">
                  {step.sub}
                </p>
              </motion.div>

              {/* Arrow connector */}
              {i < STEPS.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.1 }}
                  className="flex items-center justify-center p-2 md:p-0 md:px-2 shrink-0"
                >
                  <ChevronRight className="w-5 h-5 text-primary/50 rotate-90 md:rotate-0" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom label bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col md:flex-row gap-px bg-border/20"
        >
          <div className="md:flex-1 bg-background p-4 border-t-2 border-foreground/10">
            <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground/40">INPUT</span>
          </div>
          <div className="md:flex-[2] bg-background p-4 border-t-2 border-primary/40">
            <span className="font-mono text-xs tracking-[0.3em] text-primary/60">COLLIDING MATERIALS PROCESS</span>
          </div>
          <div className="md:flex-1 bg-background p-4 border-t-2 border-foreground/10">
            <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground/40">OUTPUT</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}