import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'TECHNOLOGY', href: '#molecular' },
  { label: 'VALUE CHAIN', href: '#process' },
  { label: 'PROBLEM', href: '#problem' },
  { label: 'SOLUTION', href: '#solution' },

];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        <a href="#">
          <img
            src="https://media.base44.com/images/public/6a0b30bc5dcc4c69afbe95be/2d332d7ca_CollidingMaterials-Horizontal-MainColor-Whiteout4x-8.png"
            alt="Company Logo"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-xs tracking-[0.15em] text-foreground/60 hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-sm tracking-[0.2em] border border-foreground/20 px-5 py-2 text-foreground hover:border-primary hover:text-primary transition-all duration-300"
          >
            CONTACT US
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-sm z-40 flex flex-col items-start px-6 pt-12 gap-8"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-mono text-lg tracking-[0.15em] text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="font-mono text-sm tracking-[0.2em] border border-primary px-6 py-3 text-primary"
            >
              CONTACT US
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}