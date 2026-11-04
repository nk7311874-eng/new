import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { journeySteps } from '@/data/portfolio';

const statusStyles: Record<string, string> = {
  Studying: 'border-amber-400/40 bg-amber-400/10 text-amber-300',
  Practising: 'border-brand-blue-light/40 bg-brand-blue/10 text-brand-blue-light',
  'In progress': 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300',
};

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="My Learning Journey"
          title="Learning digital marketing by building"
          description="I'm early in my career and learning every week. Here is where I'm focusing my time and practice."
        />

        <ol className="relative mx-auto max-w-3xl">
          <li className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-brand-blue-light/60 via-brand-purple/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true" />

          {journeySteps.map(({ title, status, description, icon: Icon }, index) => {
            const onRight = index % 2 === 1;
            return (
              <li key={title} className="relative pb-10 pl-14 last:pb-0 sm:pl-0">
                <span
                  className="absolute left-5 top-6 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-brand-blue-light/50 bg-ink-900 text-brand-blue-light shadow-glow sm:left-1/2"
                  aria-hidden="true"
                >
                  <Icon className="h-4 w-4" />
                </span>

                <Reveal delay={index * 120} className={`sm:w-[calc(50%-2.5rem)] ${onRight ? 'sm:ml-auto' : 'sm:mr-auto'}`}>
                  <div className="glass-card p-6">
                    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}>
                      {status}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
