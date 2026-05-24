import { useState, useCallback } from 'react';

interface GlyphIconProps {
  pattern: string;
  color: string;
  size?: number;
}

export default function GlyphIcon({ pattern, color, size = 32 }: GlyphIconProps) {
  const [hovered, setHovered] = useState(false);
  const cellSize = (size - 4) / 3; // account for gaps

  const getFill = useCallback((index: number) => {
    if (hovered) return true;
    return pattern[index] === '1';
  }, [hovered, pattern]);

  return (
    <div
      className="inline-grid grid-cols-3 gap-1 transition-all duration-300"
      style={{ width: size, height: size }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="transition-all duration-200"
          style={{
            width: cellSize,
            height: cellSize,
            backgroundColor: getFill(i) ? color : 'transparent',
            opacity: getFill(i) ? 1 : 0,
            boxShadow: getFill(i) ? `0 0 4px 0 ${color}, 0 0 8px -2px ${color}` : 'none',
            transitionDelay: hovered ? `${i * 30}ms` : '0ms',
          }}
        />
      ))}
    </div>
  );
}
