import { useRef, useEffect } from 'react';

interface SectionNumberProps {
  number: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: 'large' | 'medium';
}

export default function SectionNumber({ number, position = 'top-left', size = 'large' }: SectionNumberProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speed = 0.3;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  };

  const sizeClasses = {
    large: 'text-[144px]',
    medium: 'text-[120px]',
  };

  return (
    <div
      ref={ref}
      className={`absolute pointer-events-none select-none ${positionClasses[position]}`}
      style={{ zIndex: 0, lineHeight: 0.8, willChange: 'transform' }}
      aria-hidden="true"
    >
      <span
        className={`font-display font-normal text-text-primary block ${sizeClasses[size]}`}
        style={{ opacity: 0.06 }}
      >
        {number}
      </span>
    </div>
  );
}
