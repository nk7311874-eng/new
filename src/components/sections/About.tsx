import { Compass, Heart, Lightbulb } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { profile } from '@/data/portfolio';

const principles = [
  { title: 'Growth-first thinking', icon: Compass, text: 'Every campaign starts from a clear business goal, not just a posting schedule.' },
  { title: 'Creative with purpose', icon: Lightbulb, text: 'Designs and videos are built to earn attention and then to move people to act.' },
  { title: 'Learning in public', icon: Heart, text: 'I document what I test and learn so every project makes the next one sharper.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="About Me" title="Building brands that get found and remembered" />

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="h-full">
            <div className="glass-card h-full p-8 sm:p-10">
              <p className="text-lg leading-relaxed text-slate-300 sm:text-xl">{profile.aboutText}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Meta Ads', 'SEO', 'Social Media Marketing', 'Content Creation', 'Digital Strategy'].map((tag) => (
                  <span key={tag} className="rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1.5 text-xs font-medium text-brand-blue-light sm:text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {principles.map(({ title, icon: Icon, text }, index) => (
              <Reveal key={title} delay={index * 120}>
                <div className="glass-card flex gap-5 p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 text-brand-blue-light">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
