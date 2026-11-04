import { Mail, Megaphone, Search, Share2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import { profile } from '@/data/portfolio';

const highlights = [
  { label: 'Meta Ads', icon: Megaphone },
  { label: 'SEO', icon: Search },
  { label: 'Social Media', icon: Share2 },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:min-h-screen lg:pb-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-16 h-[28rem] w-[28rem] rounded-full bg-brand-blue/25 blur-[120px] animate-glow-pulse" />
        <div className="absolute -right-24 top-40 h-[24rem] w-[24rem] rounded-full bg-brand-purple/25 blur-[120px] animate-glow-pulse [animation-delay:3s]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <span
            className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand-blue-light/30 bg-brand-blue/10 px-4 py-1.5 text-xs font-semibold text-brand-blue-light sm:text-sm"
            style={{ animationDelay: '0ms' }}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" aria-hidden="true" />
            Building practical campaigns, one project at a time
          </span>

          <h1
            className="animate-fade-up mt-6 font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '120ms' }}
          >
            {profile.heroGreeting} <span className="text-gradient">{profile.name}</span>
          </h1>

          <p
            className="animate-fade-up mt-5 font-display text-lg font-semibold text-brand-blue-light sm:text-xl"
            style={{ animationDelay: '240ms' }}
          >
            {profile.title}
          </p>

          <p
            className="animate-fade-up mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0"
            style={{ animationDelay: '360ms' }}
          >
            {profile.description}
          </p>

          <div className="animate-fade-up mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row lg:justify-start" style={{ animationDelay: '480ms' }}>
            <Button href="#projects">View My Work</Button>
            <Button href="#contact" variant="secondary">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </Button>
          </div>

          <ul
            className="animate-fade-up mt-10 flex flex-wrap justify-center gap-3 lg:justify-start"
            style={{ animationDelay: '600ms' }}
          >
            {highlights.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-slate-300 sm:text-sm"
              >
                <Icon className="h-3.5 w-3.5 text-brand-blue-light" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up relative mx-auto w-full max-w-sm lg:max-w-md" style={{ animationDelay: '300ms' }}>
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-brand-blue via-brand-purple to-brand-blue-light opacity-70 blur-xl animate-gradient-shift [background-size:200%_200%]" aria-hidden="true" />
          <div className="relative animate-float rounded-[2rem] bg-gradient-to-br from-brand-blue via-brand-purple to-brand-blue-light p-[2px] shadow-glow">
            <div className="overflow-hidden rounded-[calc(2rem-2px)] bg-ink-900">
              <img
                src={profile.profileImage}
                alt={profile.profileImageAlt}
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
                loading="eager"
              />
            </div>
          </div>
          <div className="glass absolute -bottom-5 -left-3 rounded-2xl px-4 py-3 shadow-glow sm:-left-8" aria-hidden="true">
            <p className="font-display text-sm font-bold text-white">Digital Marketer</p>
            <p className="text-xs text-slate-400">Meta Ads · SEO · Content</p>
          </div>
        </div>
      </div>
    </section>
  );
}
