import { useEffect, useRef } from 'react';

export default function CircuitLines() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pulses = container.querySelectorAll('.circuit-pulse');
      pulses.forEach((pulse, i) => {
        const offset = (scrollY * 0.3 + i * 200) % window.innerHeight;
        pulse.style.top = `${offset}px`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Vertical trace lines */}
      {[15, 35, 65, 85].map((pos) => (
        <div
          key={`v-${pos}`}
          className="absolute top-0 bottom-0 w-px bg-border/30"
          style={{ left: `${pos}%` }}
        >
          <div
            className="circuit-pulse absolute w-px h-24 bg-gradient-to-b from-transparent via-primary/40 to-transparent"
            style={{ top: '0px' }}
          />
        </div>
      ))}

      {/* Horizontal trace lines */}
      {[20, 50, 80].map((pos) => (
        <div
          key={`h-${pos}`}
          className="absolute left-0 right-0 h-px bg-border/20"
          style={{ top: `${pos}%` }}
        />
      ))}

      {/* Node intersections */}
      {[
        { x: 15, y: 20 }, { x: 35, y: 50 }, { x: 65, y: 20 },
        { x: 85, y: 80 }, { x: 15, y: 80 }, { x: 65, y: 80 },
      ].map((node, i) => (
        <div
          key={`node-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/20 trace-pulse"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}