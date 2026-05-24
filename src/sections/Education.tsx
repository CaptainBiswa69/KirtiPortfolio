import { education, achievements } from '../data/portfolioData';
import SystemAnnotation from '../components/SystemAnnotation';
import SectionNumber from '../components/SectionNumber';
import ScrollReveal from '../components/ScrollReveal';

export default function Education() {
  return (
    <section id="education" className="relative py-30 overflow-hidden">
      <SectionNumber number="07" position="top-right" size="medium" />

      <div className="section-container relative z-10">
        <ScrollReveal animation="blur" className="mb-16">
          <SystemAnnotation text="// section.learning" variant="default" />
          <h2 className="font-display text-h1 font-bold text-text-primary mt-4">
            Education & Growth
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <div>
            <ScrollReveal animation="left">
              <h3 className="font-display text-h2 font-semibold text-text-primary mb-8">
                Education
              </h3>
            </ScrollReveal>

            <div className="space-y-8">
              {education.map((edu, i) => (
                <ScrollReveal key={edu.institution} animation="left" delay={i * 0.2}>
                  <div
                    className="pl-6 py-4 border-l-2"
                    style={{ borderColor: '#9B8EC7' }}
                  >
                    <span className="font-mono text-xs text-lavender">{edu.period}</span>
                    <h4 className="font-display text-h3 font-semibold text-text-primary mt-2 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="font-mono text-sm text-text-secondary mb-2">
                      {edu.institution}
                    </p>
                    <p className="font-mono text-xs text-text-tertiary">
                      {edu.location}
                      {edu.details.length > 0 && ` · ${edu.details.join(' · ')}`}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <ScrollReveal animation="right">
              <h3 className="font-display text-h2 font-semibold text-text-primary mb-8">
                Achievements
              </h3>
            </ScrollReveal>

            <ul className="space-y-6">
              {achievements.map((achievement, i) => (
                <ScrollReveal key={achievement.title} animation="right" delay={i * 0.15}>
                  <li className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 mt-2 rotate-45 flex-shrink-0"
                      style={{
                        backgroundColor: '#D4849A',
                        boxShadow: '0 0 6px rgba(212, 132, 154, 0.4)',
                      }}
                    />
                    <div>
                      <span className="font-display text-sm font-semibold text-text-primary">
                        {achievement.title}
                      </span>
                      <p className="font-body text-body text-text-secondary mt-1">
                        {achievement.detail}
                      </p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
