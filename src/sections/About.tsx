import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import SystemAnnotation from '../components/SystemAnnotation';
import SectionNumber from '../components/SectionNumber';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

const stats = [
  { target: 4, suffix: '+', label: 'years', sublabel: 'coding & building' },
  { target: 12, suffix: '+', label: 'pages', sublabel: 'rebuilt with Next.js 14' },
  { target: 91, suffix: '', label: 'Lighthouse', sublabel: 'performance score achieved' },
  { target: 38, suffix: '%', label: 'reduction', sublabel: 'in LCP at Bottom Street' },
];

export default function About() {
  return (
    <section id="about" className="relative py-30 overflow-hidden">
      <SectionNumber number="03" position="top-left" size="medium" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-3">
            <ScrollReveal animation="left">
              <SystemAnnotation text="// section.about" variant="default" />
              <h2 className="font-display text-h1 font-bold text-text-primary mt-4 mb-6">
                Who I Am
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="up" delay={0.2}>
              <p className="font-body text-body-lg text-text-secondary leading-relaxed mb-8">
                {personalInfo.about}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="up" delay={0.3}>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 font-mono text-sm text-text-primary hover:text-rose transition-colors group"
              >
                More about my journey
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} animation="up" delay={0.2 + i * 0.1}>
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    label={stat.label}
                    sublabel={stat.sublabel}
                    duration={2}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
