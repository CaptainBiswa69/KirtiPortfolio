import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import SystemAnnotation from '../components/SystemAnnotation';
import SectionNumber from '../components/SectionNumber';
import DotGrid from '../components/DotGrid';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center py-30 overflow-hidden">
      <DotGrid spacing={28} dotSize={1} opacity={0.12} color="#D4849A" />
      <SectionNumber number="01" position="top-left" size="large" />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <SystemAnnotation text="// system.init" variant="muted" />
            <span className="mx-3 text-text-tertiary">·</span>
            <SystemAnnotation
              text="M.Tech IIT Bhilai · GATE CSE 2025 · SDE Aspirant"
              variant="accent"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-2"
          >
            <span className="block font-body text-body-lg text-text-secondary mb-2">
              Hello, I'm
            </span>
            <span className="block font-display text-hero font-bold gradient-text">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-mono text-body text-lavender mb-6"
          >
            {personalInfo.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-body text-body-lg text-text-secondary max-w-xl mb-8"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight size={16} className="ml-2" />
            </a>
            <a href="/resume.pdf" className="btn-secondary" download>
              <Download size={16} className="mr-2" />
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.5 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow behind image */}
            <div
              className="absolute inset-0 rounded-lg blur-3xl opacity-30"
              style={{
                background: 'radial-gradient(circle, rgba(212,132,154,0.4) 0%, transparent 70%)',
                transform: 'scale(1.2)',
              }}
            />
            <div
              className="relative w-[280px] md:w-[340px] lg:w-[380px] aspect-[3/4] rounded-lg overflow-hidden border border-rose-muted"
              style={{
                background: 'linear-gradient(135deg, rgba(212,132,154,0.1), rgba(155,142,199,0.1))',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-6xl font-bold text-text-tertiary opacity-20">
                  KM
                </span>
              </div>
              {/* Photo placeholder - will be replaced with real image */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight/50" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
