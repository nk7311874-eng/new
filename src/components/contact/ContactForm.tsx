import { useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { validateContactForm, type ContactFormErrors, type ContactFormValues } from '@/lib/contactValidation';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const emptyValues: ContactFormValues = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [serverError, setServerError] = useState('');

  const updateField = (field: keyof ContactFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (status === 'success' || status === 'error') {
      setStatus('idle');
      setServerError('');
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    setServerError('');

    if (!supabase) {
      setStatus('error');
      setServerError(
        'The contact form is not configured yet. Please use the email or WhatsApp links beside this form.',
      );
      return;
    }

    const { error } = await supabase.from('contact_messages').insert({
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    });

    if (error) {
      setStatus('error');
      setServerError('Something went wrong while sending your message. Please try again or reach out on WhatsApp.');
      return;
    }

    setValues(emptyValues);
    setStatus('success');
  };

  const isSubmitting = status === 'submitting';

  return (
    <form onSubmit={handleSubmit} noValidate className="glass-card space-y-5 p-6 sm:p-8" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="contact-name"
          label="Name"
          error={errors.name}
          value={values.name}
          autoComplete="name"
          placeholder="Your full name"
          onChange={(value) => updateField('name', value)}
        />
        <Field
          id="contact-email"
          label="Email"
          type="email"
          error={errors.email}
          value={values.email}
          autoComplete="email"
          placeholder="you@example.com"
          onChange={(value) => updateField('email', value)}
        />
      </div>

      <Field
        id="contact-message"
        label="Message"
        multiline
        error={errors.message}
        value={values.message}
        placeholder="Tell me about your business and what you'd like to achieve."
        onChange={(value) => updateField('message', value)}
      />

      {status === 'success' && (
        <div role="status" className="flex items-start gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-200">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
          <p>Thanks for reaching out. Your message has been sent and I will get back to you soon.</p>
        </div>
      )}

      {status === 'error' && (
        <div role="alert" className="flex items-start gap-3 rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" aria-hidden="true" />
          <p>{serverError}</p>
        </div>
      )}

      <div className="flex flex-col-reverse items-stretch justify-between gap-4 pt-2 sm:flex-row sm:items-center">
        <p className="text-xs text-slate-500">Your details are only used to respond to your message.</p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-7 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-glow-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  error?: string;
  placeholder: string;
  autoComplete?: string;
  type?: string;
  multiline?: boolean;
  onChange: (value: string) => void;
};

function Field({ id, label, value, error, placeholder, autoComplete, type = 'text', multiline = false, onChange }: FieldProps) {
  const inputClasses = `w-full rounded-xl border bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition duration-300 focus:outline-none focus:ring-2 ${
    error
      ? 'border-red-400/60 focus:ring-red-400/30'
      : 'border-white/10 hover:border-white/20 focus:border-brand-blue-light focus:ring-brand-blue/30'
  }`;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(event) => onChange(event.target.value)}
          className={`${inputClasses} resize-y`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(event) => onChange(event.target.value)}
          className={inputClasses}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
