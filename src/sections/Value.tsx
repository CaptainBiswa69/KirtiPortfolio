import ScrollReveal from '../components/ScrollReveal';
import SystemAnnotation from '../components/SystemAnnotation';
import SectionNumber from '../components/SectionNumber';

const valueCards = [
  {
    index: '01',
    title: 'Scalable Architecture',
    description:
      'Systems that break under load cost companies millions. I design architectures that grow gracefully — from graph-theory-driven material networks to real-time collaborative systems.',
  },
  {
    index: '02',
    title: 'Performance Engineering',
    description:
      'I rebuilt 12 pages in Next.js 14, cutting LCP by 38% and lifting Lighthouse scores from 54 to 91. Performance is not an afterthought — it is the foundation.',
  },
  {
    index: '03',
    title: 'Clean, Maintainable Code',
    description:
      'Technical debt compounds silently. I write code that the next developer (future me) will thank me for — modular, typed, tested, and documented.',
  },
  {
    index: '04',
    title: 'Cross-Functional Impact',
    description:
      'The best products emerge when design, product, and engineering speak the same language. I bridge those gaps with data, communication, and empathy.',
  },
];

export default function Value() {
  return (
    <section id="value" className="relative py-30 overflow-hidden bg-midnight-light">
      <SectionNumber number="02" position="top-right" size="medium" />

      <div className="section-container relative z-10">
        <ScrollReveal animation="blur" className="text-center mb-16">
          <SystemAnnotation text="// 0x02 // the.value" variant="default" />
          <h2 className="font-display text-h1 font-bold text-text-primary mt-4 mb-4">
            The Value I Bring
          </h2>
          <p className="font-body text-body-lg text-text-secondary max-w-2xl mx-auto">
            Great software is not just about writing code. It is about solving
            problems before they become crises.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {valueCards.map((card, i) => (
            <ScrollReveal key={card.index} animation="up" delay={i * 0.15}>
              <div className="card h-full">
                <span className="font-mono text-xs text-rose mb-4 block">
                  [{card.index}]
                </span>
                <h3 className="font-display text-h3 font-semibold text-text-primary mb-3">
                  {card.title}
                </h3>
                <p className="font-body text-body text-text-secondary">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
