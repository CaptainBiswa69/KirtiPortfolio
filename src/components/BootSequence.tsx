import { useEffect, useRef, useState } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<'draw' | 'fill' | 'lift'>('draw');
  const hasRun = useRef(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const booted = sessionStorage.getItem('kirti-booted');

    if (booted || reducedMotion) {
      onComplete();
      return;
    }

    if (hasRun.current) return;
    hasRun.current = true;

    setVisible(true);
    document.body.style.overflow = 'hidden';

    // Phase 1: Draw (1s)
    setTimeout(() => {
      setPhase('fill');
      // Phase 2: Fill (0.8s)
      setTimeout(() => {
        setPhase('lift');
        // Phase 3: Lift away (0.6s)
        setTimeout(() => {
          sessionStorage.setItem('kirti-booted', 'true');
          document.body.style.overflow = '';
          onComplete();
          setTimeout(() => setVisible(false), 600);
        }, 600);
      }, 800);
    }, 1000);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-midnight transition-transform duration-700 ease-in-out ${
        phase === 'lift' ? '-translate-y-full' : 'translate-y-0'
      }`}
      aria-hidden="true"
    >
      <div className="relative w-20 h-20">
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <defs>
            <clipPath id="k-clip">
              <rect
                x="0"
                y={phase === 'fill' || phase === 'lift' ? 0 : 80}
                width="80"
                height="80"
                className="transition-all duration-700 ease-out"
                style={{
                  transitionDelay: phase === 'draw' ? '0ms' : '0ms',
                }}
              />
            </clipPath>
          </defs>
          {/* Outline */}
          <path
            d="M10 10 L10 70 M10 10 L40 40 M20 30 L50 70 M50 10 L50 70"
            fill="none"
            stroke="#F5F0EB"
            strokeWidth="2"
            strokeLinecap="round"
            className={`transition-all duration-1000 ${
              phase === 'draw' ? 'stroke-dasharray-0 stroke-dashoffset-0' : ''
            }`}
            style={{
              strokeDasharray: 300,
              strokeDashoffset: phase === 'draw' ? 300 : 0,
              transition: 'stroke-dashoffset 1s ease-out',
            }}
          />
          {/* Fill */}
          <g clipPath="url(#k-clip)">
            <path
              d="M10 10 L10 70 M10 10 L40 40 M20 30 L50 70 M50 10 L50 70"
              fill="none"
              stroke="#D4849A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
