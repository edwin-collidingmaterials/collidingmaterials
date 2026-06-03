import { motion } from 'framer-motion';

const BROADER_MARKET = [
  { name: 'ZeroAvia', type: 'Aviation Hydrogen' },
  { name: 'Ballard Power', type: 'Fuel Cell Leader' },
  { name: 'SFC Energy', type: 'Portable Power' },
  { name: 'AFC Energy', type: 'Alkaline Fuel Cells' },
  { name: 'ITM Power', type: 'Electrolysis' },
  { name: 'Intelligent Energy', type: 'Fuel Cell Systems' },
];

export default function MarketSection() {
  return (
    <section className="relative py-24 md:py-32 border-t border-border/20">
      <div className="px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end gap-16 mb-16">
          <div className="md:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs tracking-[0.4em] text-muted-foreground/40 block mb-4"
            >
              06 — GO-TO-MARKET
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-3xl md:text-5xl font-bold tracking-tight"
            >
              TARGET
              <br />
              <span className="text-primary">MARKET</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-foreground/40 leading-relaxed text-base md:text-lg"
          >
            Partnering with energy system OEMs to conduct customer trials.
            Initial focus on high-strategic-value customers ready to validate
            next-generation graphite composite solutions.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-px bg-border/20">
          {/* Broader market */}
          <div className="w-full bg-background p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground/50">
                BROADER MARKET LANDSCAPE
              </span>
            </div>
            <div className="grid grid-cols-2 gap-px bg-border/20">
              {BROADER_MARKET.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-background p-5 group hover:bg-card transition-colors"
                >
                  <span className="font-mono text-sm font-semibold text-foreground/50 group-hover:text-foreground/80 transition-colors block">
                    {c.name}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground/30 tracking-wide mt-1 block">
                    {c.type}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}