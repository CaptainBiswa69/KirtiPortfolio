import { experience } from '../data/portfolioData';
import SystemAnnotation from '../components/SystemAnnotation';
import SectionNumber from '../components/SectionNumber';
import ScrollReveal from '../components/ScrollReveal';
import TimelineItem from '../components/TimelineItem';

export default function Experience() {
  return (
    <section id="experience" className="relative py-30 overflow-hidden bg-midnight-light">
      <SectionNumber number="06" position="top-left" size="medium" />

      <div className="section-container relative z-10">
        <ScrollReveal animation="blur" className="mb-16">
          <SystemAnnotation text="// section.timeline" variant="default" />
          <h2 className="font-display text-h1 font-bold text-text-primary mt-4">
            Experience
          </h2>
        </ScrollReveal>

        <div className="space-y-12">
          {experience.map((entry, i) => (
            <TimelineItem
              key={entry.company + entry.period}
              {...entry}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
