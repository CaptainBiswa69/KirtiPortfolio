import { useState, useEffect, useCallback } from 'react';
import BootSequence from './components/BootSequence';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import KeyboardShortcuts from './components/KeyboardShortcuts';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './sections/Hero';
import Value from './sections/Value';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [, setBootComplete] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);

  const handleBootComplete = useCallback(() => {
    setBootComplete(true);
  }, []);

  // Clear loading fallback when React mounts
  useEffect(() => {
    const fallback = document.getElementById('loading-fallback');
    if (fallback) fallback.remove();
    console.log('%c Kirti Portfolio loaded ', 'background: #D4849A; color: #0F0E13; padding: 4px 8px; border-radius: 4px;');
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '?' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setShowShortcuts(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ErrorBoundary>
      <BootSequence onComplete={handleBootComplete} />
      <CustomCursor />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <KeyboardShortcuts isOpen={showShortcuts} onClose={() => setShowShortcuts(false)} />
      
      <main id="main-content">
        <Hero />
        <Value />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />
    </ErrorBoundary>
  );
}

export default App;
