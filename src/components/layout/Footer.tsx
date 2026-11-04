import { Instagram, Linkedin, MessageCircle, Sparkles } from 'lucide-react';
import { contactDetails, profile } from '@/data/portfolio';

const socialLinks = [
  { label: 'Instagram', href: contactDetails.instagramUrl, icon: Instagram },
  { label: 'LinkedIn', href: contactDetails.linkedinUrl, icon: Linkedin },
  { label: 'WhatsApp', href: contactDetails.whatsappUrl, icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-display text-sm font-bold">{profile.name}</span>
        </a>

        <p className="text-center text-sm text-slate-400">{profile.footerText}</p>

        <ul className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-brand-blue-light/60 hover:text-white"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
