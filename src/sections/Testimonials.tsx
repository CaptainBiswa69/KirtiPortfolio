import { testimonials } from '../data/portfolioData';
import SystemAnnotation from '../components/SystemAnnotation';
import SectionNumber from '../components/SectionNumber';
import ScrollReveal from '../components/ScrollReveal';
import TestimonialCard from '../components/TestimonialCard';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-30 overflow-hidden bg-midnight-light">
      <SectionNumber number="08" position="top-left" size="medium" />

      <div className="section-container relative z-10">
        <ScrollReveal animation="blur" className="mb-16">
          <SystemAnnotation text="// section.proof" variant="default" />
          <h2 className="font-display text-h1 font-bold text-text-primary mt-4">
            What Others Say
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
