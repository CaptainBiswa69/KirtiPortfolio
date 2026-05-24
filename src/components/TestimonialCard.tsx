import { Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  index: number;
}

export default function TestimonialCard({ quote, author, role, index }: TestimonialCardProps) {
  return (
    <ScrollReveal animation="scale" delay={index * 0.15}>
      <div className="card relative">
        <Quote
          size={32}
          className="absolute top-6 left-6 text-rose opacity-30"
          aria-hidden="true"
        />
        <div className="pt-10 pb-6">
          <p className="font-body text-body-lg text-text-primary italic leading-relaxed mb-6">
            "{quote}"
          </p>
          <footer>
            <cite className="font-display text-sm font-semibold text-text-primary not-italic">
              {author}
            </cite>
            <p className="font-mono text-xs text-text-secondary mt-1">
              {role}
            </p>
          </footer>
        </div>
      </div>
    </ScrollReveal>
  );
}
