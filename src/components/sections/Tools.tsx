import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { tools } from '@/data/portfolio';

export default function Tools() {
  return (
    <section id="tools" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="My Tools"
          title="The platforms I work in every day"
          description="Ad managers, analytics, design and publishing tools that power my campaigns."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {tools.map(({ name, category, icon: Icon, color }, index) => (
            <Reveal key={name} delay={index * 70} className="h-full">
              <div className="glass-card group flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-ink-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-500 group-hover:scale-110 group-hover:border-brand-blue-light/40">
                  <Icon className={`h-8 w-8 ${color}`} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-white">{name}</p>
                  <p className="mt-1 text-xs text-slate-500">{category}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
