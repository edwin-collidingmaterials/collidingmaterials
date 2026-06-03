import { useState } from 'react';
import { motion } from 'framer-motion';
import MaterialCard from './MaterialCard';

const MATERIALS = [
  {
    symbol: 'Si',
    name: 'Polycrystalline Silicon',
    sku: 'CE-SI-6N',
    image: 'https://media.base44.com/images/public/6a0b30bc5dcc4c69afbe95be/3006b8b9b_generated_113af77a.png',
    category: 'semiconductor',
    specs: [
      { label: 'CONDUCTIVITY', value: '1.56×10⁻³ S/m' },
      { label: 'THERMAL RES.', value: '148 W/m·K' },
      { label: 'DENSITY', value: '2.33 g/cm³' },
      { label: 'PURITY', value: '99.9999%' },
    ],
  },
  {
    symbol: 'Cu',
    name: 'Electrolytic Copper',
    sku: 'CE-CU-4N',
    image: 'https://media.base44.com/images/public/6a0b30bc5dcc4c69afbe95be/943872689_generated_599aa3b6.png',
    category: 'conductor',
    specs: [
      { label: 'CONDUCTIVITY', value: '5.96×10⁷ S/m' },
      { label: 'THERMAL RES.', value: '401 W/m·K' },
      { label: 'DENSITY', value: '8.96 g/cm³' },
      { label: 'PURITY', value: '99.99%' },
    ],
  },
  {
    symbol: 'C',
    name: 'Graphene Nanoplatelets',
    sku: 'CE-GR-NP',
    image: 'https://media.base44.com/images/public/6a0b30bc5dcc4c69afbe95be/0fd0e4fb1_generated_27b0fb07.png',
    category: 'advanced',
    specs: [
      { label: 'CONDUCTIVITY', value: '10⁸ S/m' },
      { label: 'THERMAL RES.', value: '5,000 W/m·K' },
      { label: 'DENSITY', value: '2.27 g/cm³' },
      { label: 'THICKNESS', value: '< 3nm' },
    ],
  },
  {
    symbol: 'Nd',
    name: 'Neodymium Ingot',
    sku: 'CE-ND-3N',
    image: 'https://media.base44.com/images/public/6a0b30bc5dcc4c69afbe95be/b14cdf7af_generated_f676a9de.png',
    category: 'rare-earth',
    specs: [
      { label: 'CONDUCTIVITY', value: '1.57×10⁶ S/m' },
      { label: 'THERMAL RES.', value: '16.5 W/m·K' },
      { label: 'DENSITY', value: '7.01 g/cm³' },
      { label: 'PURITY', value: '99.9%' },
    ],
  },
  {
    symbol: 'GaAs',
    name: 'Gallium Arsenide',
    sku: 'CE-GA-5N',
    image: 'https://media.base44.com/images/public/6a0b30bc5dcc4c69afbe95be/318341bad_generated_35939550.png',
    category: 'semiconductor',
    specs: [
      { label: 'BAND GAP', value: '1.42 eV' },
      { label: 'MOBILITY', value: '8,500 cm²/V·s' },
      { label: 'DENSITY', value: '5.32 g/cm³' },
      { label: 'PURITY', value: '99.999%' },
    ],
  },
];

const FILTERS = ['ALL', 'SEMICONDUCTOR', 'CONDUCTOR', 'ADVANCED', 'RARE-EARTH'];

export default function MaterialCatalog() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filtered = activeFilter === 'ALL'
    ? MATERIALS
    : MATERIALS.filter((m) => m.category === activeFilter.toLowerCase());

  return (
    <section id="catalog" className="relative py-24 md:py-32 px-6 md:px-12">
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-[0.4em] text-muted-foreground/40 block mb-4"
          >
            02 — CATALOG
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            CONDUCTIVE
            <br />
            <span className="text-primary">CATALOG</span>
          </motion.h2>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`font-mono text-xs tracking-[0.2em] px-4 py-2 border transition-all duration-300 ${
                activeFilter === f
                  ? 'border-primary text-primary bg-primary/5'
                  : 'border-border/30 text-muted-foreground/50 hover:border-foreground/30 hover:text-foreground/70'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-border/20">
        {filtered.map((material, i) => (
          <div key={material.sku} className="bg-background p-4 md:p-6">
            <MaterialCard material={material} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}