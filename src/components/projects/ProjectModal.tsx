import { useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import type { Project } from '@/data/portfolio';

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <button type="button" aria-label="Close project details" onClick={onClose} className="absolute inset-0 animate-fade-up bg-ink-950/80 backdrop-blur-sm [animation-duration:0.3s]" />

      <div className="relative w-full max-w-2xl animate-fade-up overflow-hidden rounded-t-3xl border border-white/10 bg-ink-900 shadow-[0_24px_80px_rgba(0,0,0,0.6)] sm:rounded-3xl">
        <div className="relative aspect-video overflow-hidden">
          <img src={project.image} alt={project.imageAlt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" aria-hidden="true" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/70 text-white backdrop-blur transition hover:bg-ink-950"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue-light">{project.category}</p>
          <h3 id="project-modal-title" className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-slate-300">{project.description}</p>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Focus areas</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.focus.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                {item}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-glow-purple sm:w-auto"
          >
            Discuss a similar project
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
