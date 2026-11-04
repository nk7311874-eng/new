import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { services } from '@/data/portfolio';

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="My Services"
          title="How I can help your business grow"
          description="Focused marketing services that connect your brand to the people most likely to buy."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={(index % 3) * 100} className="h-full">
              <article className="glass-card group h-full p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-blue/30 bg-brand-blue/10 text-brand-blue-light transition duration-500 group-hover:border-brand-purple/50 group-hover:bg-brand-purple/20 group-hover:text-brand-purple-light">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{description}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue-light transition hover:gap-2 hover:text-white"
                >
                  Discuss this service
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
