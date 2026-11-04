import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { skills } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="My Skills"
          title="The toolkit behind every campaign"
          description="The channels and creative skills I'm building and applying in real projects."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ name, description, icon: Icon }, index) => (
            <Reveal key={name} delay={(index % 4) * 90} className="h-full">
              <article className="glass-card group relative h-full overflow-hidden p-6">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-blue/20 blur-3xl transition duration-500 group-hover:scale-150 group-hover:bg-brand-purple/30"
                  aria-hidden="true"
                />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple text-white shadow-glow transition duration-500 group-hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="relative mt-5 font-display text-lg font-bold text-white">{name}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
                <div className="relative mt-5 h-1 w-full overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                  <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-brand-blue-light to-brand-purple-light animate-shimmer" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
