'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  course?: string;
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
      <label className="cf2-label">{label}</label>
      {children}
      {error && <p className="cf2-error">{error}</p>}
    </div>
  );
}

export default function TrainingContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    course: '',
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
    if (!formData.name.trim())  newErrors.name    = 'Required';
    if (!formData.phone.trim()) newErrors.phone   = 'Required';
    if (!formData.email.trim()) newErrors.email   = 'Required';
    if (!formData.course)       newErrors.course  = 'Please select a course';
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
      setFormData({ name: '', phone: '', email: '', course: '', message: '' });
      setErrors({});

      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'generate_lead',
          form_name: 'training_contact_form_split',
          course_selected: formData.course,
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
    <section className="cf2-section">
      <div className="cf2-wrap">

        {/* ── Left: form ── */}
        <div className="cf2-formCol">
          <p className="cf2-eyebrow">Get In Touch</p>
          <h2 className="cf2-title">Start Your Salesforce Training</h2>
          <p className="cf2-sub">
            Fill in your details and our training team will reach out within 24 hours.
          </p>

          {submitted ? (
            <div className="cf2-success">
              <div className="cf2-successIcon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.4}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="cf2-successTitle">Thank you!</h3>
              <p className="cf2-successText">
                We&apos;ve received your request and will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="cf2-form">
              <div className="cf2-grid2">
                <Field label="Name" error={errors.name}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="cf2-input"
                  />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 00000 00000"
                    className="cf2-input"
                  />
                </Field>
              </div>

              <Field label="Email Address" error={errors.email}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="cf2-input"
                />
              </Field>

              <Field label="Training Course" error={errors.course}>
                <div className="cf2-selectWrap">
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="cf2-input cf2-select"
                  >
                    <option value="">Select a course…</option>
                    <option value="Salesforce Administrator (ADM 201)">Salesforce Administrator (ADM 201)</option>
                    <option value="Salesforce Platform Developer I">Salesforce Platform Developer I</option>
                    <option value="Salesforce Marketing Cloud">Salesforce Marketing Cloud</option>
                    <option value="Salesforce CPQ">Salesforce CPQ</option>
                    <option value="Other">Other</option>
                  </select>
                  <svg className="cf2-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </Field>

              <Field label="Message" error={errors.message}>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your goals or questions…"
                  className="cf2-input cf2-textarea"
                />
              </Field>

              <button type="submit" disabled={loading} className="cf2-submit">
                {loading ? (
                  <span className="cf2-loadingWrap">
                    <svg className="cf2-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.35)" strokeWidth="3" />
                      <path fill="#fff" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </span>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          )}
        </div>

        {/* ── Right: image ── */}
        <div className="cf2-imageCol">
          <div className="cf2-imageFrame">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
              alt="Salesforce training session"
              className="cf2-image"
            />
            <div className="cf2-badge">
              <span className="cf2-badgeValue">1200+</span>
              <span className="cf2-badgeLabel">Students Trained</span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .cf2-section {
          background: #F7FAFF;
          padding: clamp(3.5rem, 8vw, 6rem) 1.5rem;
        }
        .cf2-wrap {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }

        .cf2-eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #003e95;
          margin: 0 0 0.6rem;
        }
        .cf2-title {
          font-size: clamp(1.7rem, 3vw, 2.2rem);
          font-weight: 700;
          color: #111827;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .cf2-sub {
          margin-top: 0.7rem;
          margin-bottom: 2rem;
          color: #6B7280;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .cf2-form { display: flex; flex-direction: column; gap: 1.25rem; }
        .cf2-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; }

        .cf2-label {
          display: block;
          margin-bottom: 0.4rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: #374151;
        }
        .cf2-error { margin-top: 0.35rem; font-size: 0.75rem; color: #DC2626; }

        .cf2-input {
          width: 100%;
          background: #fff;
          border: 1.5px solid #E5E9F2;
          border-radius: 10px;
          padding: 0.7rem 0.95rem;
          color: #111827;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 180ms ease, box-shadow 180ms ease;
          appearance: none;
        }
        .cf2-input::placeholder { color: #9CA3AF; }
        .cf2-input:focus {
          border-color: #2F6FE4;
          box-shadow: 0 0 0 3px rgba(47,111,228,0.14);
        }
        .cf2-textarea { resize: none; }

        .cf2-selectWrap { position: relative; }
        .cf2-select { cursor: pointer; color: #111827; padding-right: 2.2rem; }
        .cf2-chevron { position: absolute; right: 0.9rem; top: 50%; transform: translateY(-50%); color: #9CA3AF; pointer-events: none; }

        .cf2-submit {
          width: 100%;
          background: #003e95;
          color: #fff;
          font-weight: 600;
          font-size: 0.92rem;
          border: none;
          border-radius: 10px;
          padding: 0.85rem 1.5rem;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(47,111,228,0.28);
          transition: transform 160ms ease, background 160ms ease, box-shadow 160ms ease;
        }
        .cf2-submit:hover:not(:disabled) {
          background: black;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(47,111,228,0.36);
        }
        .cf2-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .cf2-loadingWrap { display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; }
        .cf2-spin { animation: cf2-spin 0.9s linear infinite; }
        @keyframes cf2-spin { to { transform: rotate(360deg); } }

        .cf2-success {
          background: #fff;
          border: 1px solid #E5E9F2;
          border-radius: 14px;
          padding: 2.4rem 1.8rem;
          text-align: left;
        }
        .cf2-successIcon {
          width: 46px; height: 46px;
          border-radius: 50%;
          background: #22C55E;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1rem;
        }
        .cf2-successTitle { margin: 0 0 0.4rem; font-size: 1.2rem; font-weight: 700; color: #111827; }
        .cf2-successText { margin: 0; color: #6B7280; font-size: 0.9rem; line-height: 1.6; }

        .cf2-imageCol { display: flex; justify-content: center; }
        .cf2-imageFrame {
          position: relative;
          width: 100%;
          max-width: 460px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 45px -18px rgba(17,24,39,0.25);
        }
        .cf2-image {
          width: 100%;
          height: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          display: block;
        }
        .cf2-badge {
          position: absolute;
          left: 1.2rem;
          bottom: 1.2rem;
          background: #fff;
          border-radius: 12px;
          padding: 0.7rem 1.1rem;
          box-shadow: 0 10px 25px -8px rgba(17,24,39,0.3);
          display: flex;
          flex-direction: column;
        }
        .cf2-badgeValue { font-size: 1.15rem; font-weight: 800; color: #111827; line-height: 1.1; }
        .cf2-badgeLabel { font-size: 0.68rem; font-weight: 600; color: #6B7280; margin-top: 0.15rem; }

        @media (max-width: 860px) {
          .cf2-wrap { grid-template-columns: 1fr; }
          .cf2-imageCol { order: -1; }
          .cf2-imageFrame { max-width: 360px; }
        }

        @media (max-width: 520px) {
          .cf2-grid2 { grid-template-columns: 1fr; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cf2-input, .cf2-submit { transition: none !important; }
          .cf2-spin { animation: none !important; }
        }
      `}</style>
    </section>
  );
}