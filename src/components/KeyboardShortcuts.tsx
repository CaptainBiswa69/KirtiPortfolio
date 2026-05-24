import { useEffect, useState, useCallback } from 'react';
import { shortcuts } from '../data/portfolioData';

interface KeyboardShortcutsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KeyboardShortcuts({ isOpen, onClose }: KeyboardShortcutsProps) {
  const [shortcutBuffer, setShortcutBuffer] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'j' && !e.ctrlKey && !e.metaKey && !e.altKey && !isOpen) {
        e.preventDefault();
        window.scrollBy({ top: 100, behavior: 'smooth' });
      }
      if (e.key === 'k' && !e.ctrlKey && !e.metaKey && !e.altKey && !isOpen) {
        e.preventDefault();
        window.scrollBy({ top: -100, behavior: 'smooth' });
      }
      if (e.key === 'g' && !e.ctrlKey && !e.metaKey && !e.altKey && !isOpen) {
        setShortcutBuffer(prev => {
          const newBuffer = [...prev, 'g'];
          if (newBuffer.length > 2) newBuffer.shift();
          return newBuffer;
        });
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'g' && shortcutBuffer.length === 2 && shortcutBuffer[0] === 'g') {
        // g g - go to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setShortcutBuffer([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isOpen, onClose, shortcutBuffer]);

  const handleBackdropClick = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-midnight/80 backdrop-blur-sm"
        onClick={handleBackdropClick}
      />
      <div className="relative bg-midnight-light border border-rose-muted rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-mono text-sm text-text-secondary">// keyboard.shortcuts</h2>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="space-y-4">
          {shortcuts.map((shortcut) => (
            <div key={shortcut.key} className="flex items-center justify-between">
              <span className="font-mono text-xs text-text-secondary">{shortcut.action}</span>
              <kbd className="font-mono text-xs px-2 py-1 rounded bg-midnight-elevated border border-rose-muted text-text-primary">
                {shortcut.key}
              </kbd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
