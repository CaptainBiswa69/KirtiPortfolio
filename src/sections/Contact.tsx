import { Mail, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import SectionNumber from '../components/SectionNumber';
import DotGrid from '../components/DotGrid';
import ScrollReveal from '../components/ScrollReveal';
import GlyphIcon from '../components/GlyphIcon';

export default function Contact() {
  return (
    <section id="contact" className="relative py-30 overflow-hidden">
      <DotGrid spacing={32} dotSize={1} opacity={0.1} color="#9B8EC7" />
      <SectionNumber number="09" position="bottom-left" size="medium" />

      <div className="section-container relative z-10 text-center">
        <ScrollReveal animation="scale">
          <div className="flex justify-center mb-6">
            <GlyphIcon pattern="010111010" color="#D4849A" size={48} />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="up" delay={0.1}>
          <h2 className="font-display text-h1 font-bold text-text-primary mb-4">
            Let's Build Something
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="up" delay={0.2}>
          <p className="font-body text-body-lg text-text-secondary max-w-xl mx-auto mb-8">
            I'm currently preparing for SDE roles and open to
            internships, full-time opportunities, and collaboration.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade" delay={0.3}>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sage" />
            </span>
            <span className="font-mono text-sm text-text-secondary">
              {personalInfo.availability}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="scale" delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={personalInfo.socials.email} className="btn-primary text-lg px-9 py-5">
              <Mail size={20} className="mr-2" />
              Say Hello
            </a>
            <a href="/resume.pdf" className="btn-secondary text-lg px-9 py-5" download>
              <Download size={20} className="mr-2" />
              Download Resume
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
