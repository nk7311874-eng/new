import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ProjectModal from '@/components/projects/ProjectModal';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects, type Project } from '@/data/portfolio';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="My Projects"
          title="Campaigns and creative work"
          description="A selection of projects across paid ads, content strategy and design."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 120} className="h-full">
              <article className="glass-card group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" aria-hidden="true" />
                  <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400 sm:text-base">{project.description}</p>

                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-brand-blue-light/60 hover:bg-brand-blue/20"
                  >
                    View Project
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
