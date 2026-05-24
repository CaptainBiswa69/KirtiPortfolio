import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade' | 'up' | 'left' | 'right' | 'scale' | 'blur';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -20% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getInitialStyles = () => {
    switch (animation) {
      case 'fade':
        return { opacity: 0 };
      case 'up':
        return { opacity: 0, transform: 'translateY(30px)' };
      case 'left':
        return { opacity: 0, transform: 'translateX(-30px)' };
      case 'right':
        return { opacity: 0, transform: 'translateX(30px)' };
      case 'scale':
        return { opacity: 0, transform: 'scale(0.95)' };
      case 'blur':
        return { opacity: 0, filter: 'blur(8px)' };
      default:
        return { opacity: 0, transform: 'translateY(30px)' };
    }
  };

  const getFinalStyles = () => {
    switch (animation) {
      case 'fade':
        return { opacity: 1 };
      case 'up':
      case 'left':
      case 'right':
        return { opacity: 1, transform: 'translate(0, 0)' };
      case 'scale':
        return { opacity: 1, transform: 'scale(1)' };
      case 'blur':
        return { opacity: 1, filter: 'blur(0px)' };
      default:
        return { opacity: 1, transform: 'translate(0, 0)' };
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(!isVisible ? getInitialStyles() : getFinalStyles()),
        transition: `all ${duration}s cubic-bezier(0, 0, 0.2, 1) ${delay}s`,
        willChange: 'transform, opacity, filter',
      }}
    >
      {children}
    </div>
  );
}
