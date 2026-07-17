"use client";

import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Terms & Conditions | Saasverse",
  description:
    "Read Saasverse's Terms & Conditions covering website use, service policies, IP rights & account guidelines for our consulting services.",

 alternates: { canonical: 'https://www.saasverse.in/terms' },
  };


const sections = [
  {
    number: "01",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Introduction",
    subsections: [
      {
        label: null,
        text: "These Terms and Conditions govern your use of the Saasverse Private Limited website and any services, products, or courses offered by Saasverse Private Limited. By accessing or using the Website or any of our services, you agree to be bound by these Terms.",
      },
    ],
  },
  {
    number: "02",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "General Use & Eligibility",
    subsections: [
      { label: "2.1", text: "By using our Website or services, you represent that you are at least 18 years old and capable of forming a legally binding contract." },
      { label: "2.2", text: "You agree to use our Website and services in compliance with all applicable laws and regulations." },
    ],
  },
  {
    number: "03",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "User Accounts",
    subsections: [
      { label: "3.1", text: "You may need to create an account to access certain features of our Website or to enroll in our courses. You are responsible for maintaining the confidentiality of your account information and for any activity that occurs under your account." },
      { label: "3.2", text: "You agree to provide accurate, current, and complete information during the account registration process and to update your information as necessary to keep it accurate." },
    ],
  },
  {
    number: "04",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Intellectual Property",
    subsections: [
      { label: "4.1", text: "All content on our Website, including text, graphics, logos, images, videos, and other materials, is protected by copyright, trademark, and other intellectual property rights owned by Saasverse or our content providers." },
      { label: "4.2", text: "You may not reproduce, distribute, display, or create derivative works of any content on the Website without our prior written consent." },
    ],
  },
  {
    number: "05",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "Courses & Services",
    subsections: [
      { label: "5.1", text: "Enrolling in a course or service provided by Saasverse is subject to payment of applicable fees, which are non-refundable unless otherwise specified." },
      { label: "5.2", text: "We reserve the right to modify or discontinue any course or service at our discretion. In the event of such a change, you will be provided with an alternative or refund, as determined by Saasverse." },
      { label: "5.3", text: "We strive to provide accurate information, but we do not guarantee the accuracy, completeness, or reliability of the content provided in our courses or services." },
    ],
  },
  {
    number: "06",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Client Projects",
    subsections: [
      { label: "6.1", text: "If you engage Saasverse for Salesforce project work, the scope of the project, timeline, and pricing will be defined in a separate written agreement or statement of work." },
      { label: "6.2", text: "Any change in project scope or terms must be agreed upon in writing by both parties." },
    ],
  },
  {
    number: "07",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Privacy",
    subsections: [
      { label: "7.1", text: "Your use of the Website and our services is also governed by our Privacy Policy, which you can find on our Website." },
    ],
  },
  {
    number: "08",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "Limitation of Liability",
    subsections: [
      { label: "8.1", text: "To the fullest extent permitted by applicable law, Saasverse shall not be liable for any direct, indirect, incidental, special, or consequential damages, including, but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses." },
    ],
  },
  {
    number: "09",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
    title: "Termination",
    subsections: [
      { label: "9.1", text: "We reserve the right to terminate or suspend your account or access to our Website or services for any reason, including violation of these Terms, at our sole discretion." },
    ],
  },
  {
    number: "10",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 .49-3.51" />
      </svg>
    ),
    title: "Changes to Terms",
    subsections: [
      { label: "10.1", text: "We may update these Terms from time to time. Your continued use of the Website or our services after any changes constitute your acceptance of the revised Terms." },
    ],
  },
];

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function SectionCard({
  number, icon, title, subsections, index,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  subsections: { label: string | null; text: string }[];
  index: number;
}) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${index * 65}ms`,
      }}
    >
      <div className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-sm hover:border-emerald-500/30 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
        {/* Left accent bar */}
        <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-emerald-500/0 via-emerald-500/75 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Corner glow */}
        <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-emerald-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative px-7 py-7 sm:px-9 sm:py-8">
          {/* Header row */}
          <div className="flex items-center gap-4 mb-5">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 group-hover:bg-emerald-500/15 transition-colors duration-300">
              {icon}
            </div>
            <div className="flex items-baseline gap-3 min-w-0">
              <span
                className="font-mono text-xs font-bold tracking-widest shrink-0"
                style={{ color: "rgba(52,211,153,0.45)" }}
              >
                {number}
              </span>
              <h3 className="text-[1.05rem] font-semibold text-white/90 tracking-tight leading-snug truncate">
                {title}
              </h3>
            </div>
          </div>

          {/* Subsections */}
          <div className="flex flex-col gap-3 pl-[3.25rem]">
            {subsections.map((sub, i) => (
              <div key={i} className="flex items-start gap-3">
                {sub.label && (
                  <span className="shrink-0 mt-0.5 text-[0.7rem] font-bold font-mono text-emerald-500/50 bg-emerald-500/10 border border-emerald-500/15 rounded-md px-1.5 py-0.5 leading-none">
                    {sub.label}
                  </span>
                )}
                <p className="text-[0.9rem] leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {sub.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Terms() {
  const { ref: heroRef, visible: heroVisible } = useInView(0.05);
  const { ref: introRef, visible: introVisible } = useInView(0.1);
  const { ref: ctaRef, visible: ctaVisible } = useInView();

  return (
    <>
      <Head>
        <title>Terms &amp; Conditions — Saasverse Pvt. Ltd.</title>
        <meta
          name="description"
          content="Review the Terms & Conditions for using Saasverse Pvt. Ltd.'s services and website. Understand your rights and obligations when engaging with us."
        />
        <link rel="canonical" href="https://saasverse.in/terms" />
      </Head>

      <main className="min-h-screen relative" style={{ background: "#060A10" }}>
        {/* Grid */}
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(52,211,153,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.035) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Top glow — emerald */}
        <div
          className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(52,211,153,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pb-24">

          {/* ── Hero ── */}
          <div
            ref={heroRef}
            className="pt-20 pb-10 sm:pt-28 sm:pb-14 text-center transition-all duration-1000 ease-out"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(24px)",
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 mb-8">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                Legal Agreement
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black tracking-tighter leading-[1.04] mb-5"
              style={{
                background: "linear-gradient(155deg, #FFFFFF 25%, rgba(148,163,184,0.6) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Terms &amp; Conditions
            </h1>

            <p className="text-sm font-mono tracking-widest text-slate-500 uppercase">
              Saasverse Pvt. Ltd. · www.saasverse.in
            </p>

            {/* Divider */}
            <div className="mt-10 flex items-center gap-3 justify-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/[0.07] max-w-[140px]" />
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/60" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/[0.07] max-w-[140px]" />
            </div>
          </div>

          {/* ── Intro banner ── */}
          <div
            ref={introRef}
            className="mb-5 transition-all duration-700 ease-out"
            style={{
              opacity: introVisible ? 1 : 0,
              transform: introVisible ? "translateY(0)" : "translateY(24px)",
            }}
          >
            <div className="flex items-start gap-4 rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.05] px-7 py-6 sm:px-9">
              <div className="shrink-0 mt-0.5 flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/20 text-emerald-400">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <p className="text-[0.9rem] leading-relaxed text-slate-400">
                Please read these Terms and Conditions carefully before using{" "}
                <span className="text-white/75 font-medium">Saasverse Private Limited</span> website or services. By accessing or using our platform, you agree to be bound by these Terms.
              </p>
            </div>
          </div>

          {/* ── Section Cards ── */}
          <div className="flex flex-col gap-3">
            {sections.map((s, i) => (
              <SectionCard key={s.number} {...s} index={i} />
            ))}
          </div>

          {/* ── Contact CTA ── */}
          <div
            ref={ctaRef}
            className="mt-5 transition-all duration-700 ease-out"
            style={{
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? "translateY(0)" : "translateY(28px)",
            }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-emerald-500/20">
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(52,211,153,0.11) 0%, rgba(16,185,129,0.05) 100%)",
                }}
              />
              <div className="absolute -bottom-10 right-6 w-44 h-44 rounded-full blur-3xl" style={{ background: "rgba(52,211,153,0.12)" }} />

              <div className="relative px-7 py-8 sm:px-10 sm:py-9">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">
                      11 — Contact Us
                    </p>
                    <h3 className="text-xl font-bold text-white/90 mb-2 tracking-tight">
                      Questions about these Terms?
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      If you have any questions or concerns about these Terms or our services, our team is ready to help , reach out directly.
                    </p>
                  </div>
                  <a
                    href="mailto:learning@saasverse.in"
                    className="shrink-0 inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-[0.97]"
                    style={{ background: "linear-gradient(135deg, #059669 0%, #047857 100%)" }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    learning@saasverse.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Footer note ── */}
          <p className="mt-10 text-center text-xs text-slate-600 leading-relaxed max-w-2xl mx-auto">
            By using our Website and services, you acknowledge that you have read, understood, and agree to these Terms and Conditions. Last updated and effective immediately upon posting.
          </p>
        </div>
      </main>
    </>
  );
}