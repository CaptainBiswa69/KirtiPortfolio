import { ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import SystemAnnotation from '../components/SystemAnnotation';
import SectionNumber from '../components/SectionNumber';
import DotGrid from '../components/DotGrid';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="relative py-30 overflow-hidden bg-midnight-light">
      <DotGrid spacing={28} dotSize={1} opacity={0.1} color="#9B8EC7" />
      <SectionNumber number="04" position="top-left" size="medium" />

      <div className="section-container relative z-10">
        <ScrollReveal animation="blur" className="mb-16">
          <SystemAnnotation text="// section.work" variant="default" />
          <h2 className="font-display text-h1 font-bold text-text-primary mt-4">
            Featured Work
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} animation="up" delay={i * 0.15}>
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="up" delay={0.3} className="text-center">
          <a
            href="https://github.com/kirti-007"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View all projects on GitHub
            <ArrowRight size={16} className="ml-2" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
