'use client';
 
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
 
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
 
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}
 
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.12em]"
        style={{ color: 'rgba(255,255,255,0.32)' }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-[0.72rem]" style={{ color: '#F87171' }}>
          {error}
        </p>
      )}
    </div>
  );
}
 
export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
 
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
 
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
 
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
 
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim())    newErrors.name    = 'Required';
    if (!formData.email.trim())   newErrors.email   = 'Required';
    if (!formData.phone.trim())   newErrors.phone   = 'Required';
    if (!formData.subject)        newErrors.subject = 'Please select one';
    if (!formData.message.trim()) newErrors.message = 'Required';
    return newErrors;
  };
 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (!formRef.current) return;
    try {
      setLoading(true);
      await emailjs.sendForm(
        'service_kiv85vk',
        'template_7x2ol6o',
        formRef.current,
        'hHyomKedb7xFnbRSS'
      );
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setErrors({});
 
      // GTM/GA4 lead tracking — fire only on confirmed success
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'generate_lead',
          form_name: 'consultation_form',
          service_selected: formData.subject,
        });
      }
    } catch (error) {
      console.error('Email Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <section
      className="relative"
      style={{
        background: 'linear-gradient(180deg, #0A0B10 0%, #08090D 100%)',
        padding: 'clamp(4rem, 8vw, 6rem) 0',
      }}
    >
      {/* Top separator */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      />
 
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
 
        {/* Section header */}
        <div className="mb-14 max-w-xl">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: 'rgba(255,255,255,0.32)' }}
          >
            Get In Touch
          </p>
          <h2 className="text-white" style={{ letterSpacing: '-0.02em' }}>
            Let&apos;s build your<br className="hidden sm:block" /> Salesforce advantage.
          </h2>
          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.42)' }}
          >
            Tell us what you&apos;re looking for. Our team responds within 24 hours.
          </p>
        </div>
 
        <div className="grid gap-14 lg:grid-cols-[1fr_1.65fr] lg:gap-20">
 
          {/* ── Left: context panel ── */}
          <div>
 
            {/* Trust list */}
            <ul className="space-y-4">
              {[
                '100% Confidential',
                'We Sign NDA',
                'Free Initial Consultation',
                'Response within 24 hours',
              ].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                    style={{ background: 'rgba(0,62,149,0.18)', color: '#4D8FE0', border: '1px solid rgba(0,62,149,0.30)' }}
                  >
                    ✓
                  </span>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.58)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
 
            {/* Divider */}
            <div className="my-8" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />
 
            {/* Direct contact */}
            <p
              className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em]"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Or reach us directly
            </p>
            <a
              href="mailto:contact@saasverse.in"
              className="cf-email-link inline-flex items-center gap-2.5 text-sm font-medium text-white"
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-lg"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              contact@saasverse.in
            </a>
 
            {/* Stats mini-grid */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                { value: '120+', label: 'Projects Delivered' },
                { value: '50+',  label: 'Certified Experts' },
                { value: '15+',  label: 'Countries Served' },
                { value: '5.0★', label: 'Clutch Rating' },
              ].map(s => (
                <div
                  key={s.label}
                  className="rounded-xl p-4"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    className="font-extrabold text-white tabular-nums"
                    style={{ fontSize: '1.3rem', letterSpacing: '-0.03em', lineHeight: 1 }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="mt-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.12em]"
                    style={{ color: 'rgba(255,255,255,0.22)' }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
 
          {/* ── Right: form ── */}
          <div>
            {submitted ? (
              <div
                className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl text-center px-8"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{
                    background: 'rgba(96,165,250,0.10)',
                    border: '1px solid rgba(96,165,250,0.20)',
                  }}
                >
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#60A5FA" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Message received!</h3>
                <p className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.42)' }}>
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
 
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" error={errors.name}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Smith"
                      className="cf-input"
                    />
                  </Field>
                  <Field label="Email Address" error={errors.email}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className="cf-input"
                    />
                  </Field>
                </div>
 
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone Number" error={errors.phone}>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 555 000 0000"
                      className="cf-input"
                    />
                  </Field>
                  <Field label="How Can We Help?" error={errors.subject}>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="cf-input cf-select"
                      >
                        <option value="">Select a service…</option>
                        <option value="Hire Salesforce Developer">Hire Salesforce Developer</option>
                        <option value="Salesforce Consulting Service">Salesforce Consulting</option>
                        <option value="Salesforce Training">Salesforce Training</option>
                        <option value="Other">Other</option>
                      </select>
                      <svg
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                        width="13" height="13" fill="none" viewBox="0 0 24 24"
                        stroke="rgba(255,255,255,0.3)" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </Field>
                </div>
 
                <Field label="Message" error={errors.message}>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project or goals…"
                    className="cf-input resize-none"
                  />
                </Field>
 
                <button
                  type="submit"
                  disabled={loading}
                  className="cf-submit"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="cf-spin h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />
                        <path fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Book a Free Consultation
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  )}
                </button>
 
                <p
                  className="text-center text-[0.68rem]"
                  style={{ color: 'rgba(255,255,255,0.20)' }}
                >
                  No spam. We&apos;ll only use this to respond to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
 
      <style>{`
        .cf-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 0.75rem 1rem;
          color: #fff;
          font-size: 0.875rem;
          line-height: 1.5;
          outline: none;
          transition: border-color 200ms ease, background 200ms ease;
          -webkit-appearance: none;
          appearance: none;
        }
        .cf-input::placeholder {
          color: rgba(255,255,255,0.20);
        }
        .cf-input:focus {
          border-color: rgba(255,255,255,0.26);
          background: rgba(255,255,255,0.06);
        }
        .cf-select {
          cursor: pointer;
          color: rgba(255,255,255,0.70);
        }
        .cf-select option {
          background: #12131A;
          color: #fff;
        }
        .cf-submit {
          width: 100%;
          background: #003E95;
          color: #fff;
          font-weight: 600;
          font-size: 0.9rem;
          border: none;
          border-radius: 10px;
          padding: 0.875rem 1.5rem;
          cursor: pointer;
          box-shadow: 0 1px 2px rgba(0,0,0,0.4), 0 4px 20px rgba(0,62,149,0.22);
          transition: transform 180ms ease, box-shadow 180ms ease, opacity 180ms ease;
        }
        .cf-submit:hover:not(:disabled) {
          transform: translateY(-1px);
          background: #0052BF;
          box-shadow: 0 1px 2px rgba(0,0,0,0.4), 0 8px 28px rgba(0,62,149,0.38);
        }
        .cf-submit:active:not(:disabled) {
          transform: translateY(0);
        }
        .cf-submit:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }
        .cf-email-link {
          transition: color 180ms ease;
        }
        .cf-email-link:hover {
          color: #60A5FA;
        }
        @keyframes cf-spin { to { transform: rotate(360deg); } }
        .cf-spin { animation: cf-spin 0.9s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .cf-input, .cf-submit, .cf-email-link { transition: none !important; }
          .cf-spin { animation: none !important; }
        }
      `}</style>
    </section>
  );
}