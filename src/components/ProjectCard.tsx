import { Github, ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  year: string;
  role: string;
  title: string;
  description: string;
  tags: string[];
  links: { github: string | null; live: string | null };
  image?: string;
}

export default function ProjectCard({ year, role, title, description, tags, links, image }: ProjectCardProps) {
  return (
    <div className="card group cursor-pointer">
      <div className="relative overflow-hidden rounded mb-5 aspect-[4/3]">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-muted to-lavender-muted">
            <span className="font-display text-4xl font-bold text-text-tertiary opacity-40">
              {title.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase()}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-2xs text-text-tertiary">{year}</span>
        <span className="font-mono text-2xs text-text-tertiary">·</span>
        <span className="font-mono text-2xs text-text-tertiary">{role}</span>
      </div>

      <h3 className="font-display text-h3 font-semibold text-text-primary mb-3 group-hover:text-rose transition-colors">
        {title}
      </h3>

      <p className="font-body text-body text-text-secondary mb-4 line-clamp-3">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-rose transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={14} />
            GitHub
          </a>
        )}
        {links.live && (
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-rose transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={14} />
            Live
          </a>
        )}
        <span className="ml-auto flex items-center gap-1 font-mono text-xs text-rose opacity-0 group-hover:opacity-100 transition-opacity">
          View <ArrowRight size={14} />
        </span>
      </div>
    </div>
  );
}
