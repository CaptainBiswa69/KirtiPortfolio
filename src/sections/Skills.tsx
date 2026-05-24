import { skills } from '../data/portfolioData';
import SystemAnnotation from '../components/SystemAnnotation';
import SectionNumber from '../components/SectionNumber';
import ScrollReveal from '../components/ScrollReveal';
import GlyphIcon from '../components/GlyphIcon';

export default function Skills() {
  return (
    <section id="skills" className="relative py-30 overflow-hidden">
      <SectionNumber number="05" position="top-right" size="medium" />

      <div className="section-container relative z-10">
        <ScrollReveal animation="blur" className="text-center mb-16">
          <SystemAnnotation text="// section.modules" variant="default" />
          <h2 className="font-display text-h1 font-bold text-text-primary mt-4 mb-4">
            How I Build
          </h2>
          <p className="font-body text-body-lg text-text-secondary max-w-2xl mx-auto">
            My technical toolkit — languages, frameworks, and practices
            I use to turn ideas into reality.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.category} animation="up" delay={i * 0.12}>
              <div className="card group">
                <div className="mb-5">
                  <GlyphIcon pattern={skill.pattern} color={skill.color} size={32} />
                </div>
                <h3 className="font-display text-h3 font-semibold text-text-primary mb-3 group-hover:text-rose transition-colors">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
