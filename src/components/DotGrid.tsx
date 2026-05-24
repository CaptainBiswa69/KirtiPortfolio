import { useEffect, useRef } from 'react';

interface DotGridProps {
  spacing?: number;
  dotSize?: number;
  opacity?: number;
  color?: string;
  parallax?: boolean;
}

export default function DotGrid({
  spacing = 28,
  dotSize = 1,
  opacity = 0.12,
  color = '#D4849A',
  parallax = true,
}: DotGridProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parallax) return;
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      el.style.transform = `translateY(${scrollY * 0.1}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallax]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      style={{ zIndex: 0, willChange: 'transform' }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 animate-breathe"
        style={{
          opacity,
          backgroundImage: `radial-gradient(circle, ${color} ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${spacing}px ${spacing}px`,
          backgroundPosition: `${spacing / 2}px ${spacing / 2}px`,
        }}
      />
      {/* Edge fade */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, var(--color-bg-primary) 0%, transparent 15%, transparent 85%, var(--color-bg-primary) 100%)',
        }}
      />
    </div>
  );
}
