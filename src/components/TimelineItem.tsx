import ScrollReveal from './ScrollReveal';

interface TimelineItemProps {
  period: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
  tags: string[];
  index: number;
}

export default function TimelineItem({ period, role, company, location, bullets, tags, index }: TimelineItemProps) {
  return (
    <ScrollReveal animation="right" delay={index * 0.2} className="relative pl-8 md:pl-12">
      {/* Timeline line */}
      <div
        className="absolute left-0 top-2 w-px h-[calc(100%+2rem)]"
        style={{
          background: 'linear-gradient(to bottom, #D4849A, #9B8EC7)',
        }}
      />
      {/* Timeline dot */}
      <div
        className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-rose"
        style={{ boxShadow: '0 0 8px rgba(212, 132, 154, 0.5)' }}
      />

      <div className="mb-1">
        <span className="font-mono text-xs text-lavender">{period}</span>
      </div>

      <h3 className="font-display text-h3 font-semibold text-text-primary mb-1">
        {role}
      </h3>
      <p className="font-mono text-sm text-text-secondary mb-4">
        {company} · {location}
      </p>

      <ul className="space-y-2 mb-4">
        {bullets.map((bullet, i) => (
          <li key={i} className="font-body text-body text-text-secondary relative pl-4">
            <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-rose" />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </ScrollReveal>
  );
}
