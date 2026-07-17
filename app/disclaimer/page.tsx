"use client";

import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "",
  description:
    "",

 alternates: { canonical: 'https://www.saasverse.in/disclaimer' },
  };

const sections = [
  {
    number: "01",
    title: "General Information",
    body: "The information provided on our Website is for general informational purposes only. While we strive to provide accurate and up to date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the Website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.",
  },
  {
    number: "02",
    title: "Course & Service Information",
    body: "Our courses and services, including any descriptions, schedules, fees, or related details, are provided for general information purposes. We may make updates or changes to course content, availability, or pricing without prior notice. It is your responsibility to verify the most current information by contacting us directly.",
  },
  {
    number: "03",
    title: "No Professional Advice",
    body: "The information provided on our Website and in our courses does not constitute professional advice or recommendations. It is your responsibility to seek professional advice or conduct independent research to make informed decisions related to Salesforce training or project work.",
  },
  {
    number: "04",
    title: "Third-Party Links",
    body: "Our Website may include links to third-party websites or resources for your convenience. We do not endorse or have control over the content and availability of these third-party websites. Any reliance on links to external websites is at your own risk, and we are not responsible for any loss or damage resulting from your use of these links.",
  },
  {
    number: "05",
    title: "Limitation of Liability",
    body: "Saasverse Private Limited shall not be liable for any direct, indirect, incidental, special, or consequential damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of or in connection with the use of our Website, services, or the information contained therein.",
  },
  {
    number: "06",
    title: "Changes to the Website",
    body: "We may modify, suspend, or discontinue the Website or any part of it at any time, for any reason, without notice. We are not liable for any changes, interruptions, or termination of the Website.",
  },
  {
    number: "07",
    title: "Updates to Disclaimer",
    body: "We may update this disclaimer from time to time, and the revised version will be effective immediately upon posting. You are encouraged to review this disclaimer regularly to stay informed about any changes.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function SectionCard({
  number,
  title,
  body,
  index,
}: {
  number: string;
  title: string;
  body: string;
  index: number;
}) {
  const { ref, visible } = useInView();

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-500 overflow-hidden">
        {/* Glow left bar */}
        <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-blue-500/0 via-blue-500/80 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Subtle top glow on hover */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-20 w-48 rounded-full bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative px-8 py-8 sm:px-10 sm:py-9">
          <div className="flex items-start gap-6">
            {/* Section Number */}
            <span
              className="shrink-0 font-mono text-4xl font-black leading-none tracking-tighter select-none"
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {number}
            </span>

            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-white/90 mb-3 tracking-tight">
                {title}
              </h3>
              <p className="text-[0.9375rem] leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                {body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Disclaimer() {
  const { ref: heroRef, visible: heroVisible } = useInView(0.1);
  const { ref: footerRef, visible: footerVisible } = useInView();

  return (
    <>
      <Head>
        <title>Disclaimer — Saasverse Pvt. Ltd.</title>
        <meta
          name="description"
          content="Review the terms and conditions, privacy policies, and legal disclaimers for Saasverse Pvt Ltd's services and website usage."
        />
        <link rel="canonical" href="https://saasverse.in/disclaimer" />
      </Head>

      <main
        className="min-h-screen relative"
        style={{ background: "#070C1A" }}
      >
        {/* Background grid */}
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Radial glow top */}
        <div
          className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.13) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pb-24">
          {/* ── Hero Banner ── */}
          <div
            ref={heroRef}
            className="pt-20 pb-16 sm:pt-28 sm:pb-20 text-center transition-all duration-1000 ease-out"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(24px)",
            }}
          >
         

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] mb-6"
              style={{
                background:
                  "linear-gradient(160deg, #FFFFFF 30%, rgba(148,163,184,0.7) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Disclaimer
            </h1>

            <p className="mx-auto max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed">
              Please read this disclaimer carefully before using the{" "}
              <span className="text-white/70 font-medium">
                Saasverse Private Limited
              </span>{" "}
              website or any of our services.
            </p>

            {/* Divider */}
            <div className="mt-12 flex items-center gap-4 justify-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10 max-w-[120px]" />
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500/60" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10 max-w-[120px]" />
            </div>
          </div>

          {/* ── Section Cards ── */}
          <div className="flex flex-col gap-4">
            {sections.map((s, i) => (
              <SectionCard key={s.number} {...s} index={i} />
            ))}
          </div>

          {/* ── Contact Card ── */}
          <div
            ref={footerRef}
            className="mt-8 transition-all duration-700 ease-out"
            style={{
              opacity: footerVisible ? 1 : 0,
              transform: footerVisible ? "translateY(0)" : "translateY(32px)",
            }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-blue-500/20">
              {/* Background gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(29,78,216,0.06) 100%)",
                }}
              />
              <div className="relative px-8 py-9 sm:px-10 sm:py-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
                      08 — Contact Us
                    </p>
                    <h3 className="text-xl font-bold text-white/90 mb-2">
                      Questions or Concerns?
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      If you have any questions about this disclaimer or any
                      aspect of our Website or services, reach out , we are here
                      to help.
                    </p>
                  </div>
                  <a
                    href="mailto:learning@saasverse.in"
                    className="shrink-0 inline-flex items-center gap-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.97]"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    learning@saasverse.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Footer note ── */}
          <p className="mt-10 text-center text-xs text-slate-600 leading-relaxed max-w-2xl mx-auto">
            By using our Website and services, you acknowledge that you have
            read, understood, and agree to this disclaimer. Your continued use
            constitutes acceptance of all terms outlined herein.
          </p>
        </div>
      </main>
    </>
  );
}