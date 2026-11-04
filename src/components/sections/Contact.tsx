import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { contactDetails } from '@/data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          description="Have a brand, product or campaign in mind? Send a message and let's talk about how to grow it."
        />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="space-y-4">
            <a href={`mailto:${contactDetails.email}`} className="glass-card flex items-center gap-4 p-5 text-white">
              <Mail className="h-5 w-5 text-brand-blue-light" aria-hidden="true" />
              <span className="truncate font-semibold">{contactDetails.email}</span>
            </a>
            <a
              href={contactDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat on WhatsApp · {contactDetails.whatsappLabel}
            </a>
            <div className="grid grid-cols-2 gap-4">
              <a href={contactDetails.instagramUrl} target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-3 p-4 text-sm font-semibold text-white">
                <Instagram className="h-5 w-5 text-brand-blue-light" aria-hidden="true" />
                Instagram
              </a>
              <a href={contactDetails.linkedinUrl} target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-3 p-4 text-sm font-semibold text-white">
                <Linkedin className="h-5 w-5 text-brand-blue-light" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
