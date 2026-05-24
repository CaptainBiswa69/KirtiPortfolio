import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  label,
  sublabel,
  duration = 2,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = (currentTime - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="flex items-baseline gap-1">
        {prefix && (
          <span className="font-mono text-lg text-lavender">{prefix}</span>
        )}
        <span className="font-display text-h2 text-text-primary font-variant-numeric min-w-[2ch]">
          {count}
        </span>
        {suffix && (
          <span className="font-mono text-lg text-lavender">{suffix}</span>
        )}
      </div>
      <span className="font-mono text-xs text-text-secondary mt-2 lowercase">
        {label}
      </span>
      {sublabel && (
        <span className="font-mono text-2xs text-text-secondary opacity-80 mt-0.5">
          {sublabel}
        </span>
      )}
    </div>
  );
}
