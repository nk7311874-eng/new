import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  external?: boolean;
  className?: string;
};

const variants = {
  primary:
    'bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-glow hover:shadow-glow-purple hover:-translate-y-0.5',
  secondary:
    'border border-white/15 bg-white/[0.05] text-white backdrop-blur-md hover:border-brand-blue-light/60 hover:bg-white/10 hover:-translate-y-0.5',
};

export default function Button({ href, children, variant = 'primary', external = false, className = '' }: ButtonProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${variants[variant]} ${className}`}
    >
      {children}
      {variant === 'primary' && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      )}
    </a>
  );
}
