import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FEED_DATA = [
  { symbol: 'Li', name: 'Lithium Carbonate', purity: '99.95%', price: '$14,280/mt', trend: '+2.1%' },
  { symbol: 'Si', name: 'Polysilicon', purity: '99.9999%', price: '$8,420/mt', trend: '-0.4%' },
  { symbol: 'Cu', name: 'Copper Cathode', purity: '99.99%', price: '$9,150/mt', trend: '+0.8%' },
  { symbol: 'Co', name: 'Cobalt Metal', purity: '99.8%', price: '$33,600/mt', trend: '+1.3%' },
  { symbol: 'Ga', name: 'Gallium', purity: '99.99%', price: '$312/kg', trend: '-1.7%' },
  { symbol: 'Ge', name: 'Germanium', purity: '99.999%', price: '$1,850/kg', trend: '+0.6%' },
];

export default function LiveFeed() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEED_DATA.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-1 font-mono text-xs">
      <span className="text-muted-foreground/40 tracking-[0.3em] text-[10px] mb-2">
        LIVE INDEX
      </span>
      {FEED_DATA.map((item, i) => (
        <motion.div
          key={item.symbol}
          animate={{
            opacity: i === activeIndex ? 1 : 0.3,
          }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 py-1"
        >
          <span className="text-primary font-bold w-6">{item.symbol}</span>
          <span className="text-foreground/50 w-20 truncate hidden lg:block">{item.name}</span>
          <span className="text-foreground/70">{item.price}</span>
          <span className={item.trend.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}>
            {item.trend}
          </span>
        </motion.div>
      ))}
    </div>
  );
}