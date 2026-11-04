import type { ReactNode } from 'react';
import Reveal from '@/components/ui/Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <Reveal className={`mb-12 max-w-2xl sm:mb-16 ${alignment}`}>
      <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-brand-blue-light text-xs sm:text-sm">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>}
    </Reveal>
  );
}
