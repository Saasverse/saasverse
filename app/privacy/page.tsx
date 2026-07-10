"use client";

import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Saasverse",
  description:
    "Saasverse's Privacy Policy explains how we collect, use and protect your data via cookies, log files and web beacons across our website.",
};

const sections = [
  {
    number: "01",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Log Files",
    body: "Saasverse Pvt. Ltd. follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any personally identifiable information. The purpose is for analyzing trends, administering the site, tracking users' movement, and gathering demographic information.",
  },
  {
    number: "02",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
    title: "Cookies & Web Beacons",
    body: "Like any other website, Saasverse Pvt. Ltd. uses \"cookies\". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.",
  },
  {
    number: "03",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Privacy Policies",
    body: "Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons in their respective advertisements and links that appear on Saasverse Pvt. Ltd., which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies measure the effectiveness of advertising campaigns and/or personalize advertising content. Note that Saasverse Pvt. Ltd. has no access to or control over these cookies used by third-party advertisers.",
  },
  {
    number: "04",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "Third Party Privacy Policies",
    body: "Saasverse Pvt. Ltd.'s Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information , including their practices and instructions about how to opt-out of certain options. You can choose to disable cookies through your individual browser options. To know more about cookie management with specific web browsers, visit the browsers' respective websites.",
  },
  {
    number: "05",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Children's Information",
    body: "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Saasverse Pvt. Ltd. does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, please contact us immediately and we will do our best to promptly remove such information from our records.",
  },
  {
    number: "06",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Online Privacy Policy Only",
    body: "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Saasverse Pvt. Ltd.. This policy is not applicable to any information collected offline or via channels other than this website.",
  },
  {
    number: "07",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    title: "Consent",
    body: "By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.",
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
  icon,
  title,
  body,
  index,
}: {
  number: string;
  icon: React.ReactNode;
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
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${index * 75}ms`,
      }}
    >
      <div className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-sm hover:border-violet-500/30 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden">
        {/* Left glow bar */}
        <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-violet-500/0 via-violet-500/80 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Top corner glow */}
        <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-violet-600/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative px-7 py-7 sm:px-9 sm:py-8">
          <div className="flex items-start gap-5">
            {/* Icon + Number stacked */}
            <div className="shrink-0 flex flex-col items-center gap-2 pt-0.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 group-hover:bg-violet-500/15 transition-colors duration-300">
                {icon}
              </div>
              <span
                className="font-mono text-xs font-bold tracking-widest select-none"
                style={{ color: "rgba(139,92,246,0.5)" }}
              >
                {number}
              </span>
            </div>

            <div className="min-w-0">
              <h3 className="text-[1.05rem] font-semibold text-white/90 mb-3 tracking-tight leading-snug">
                {title}
              </h3>
              <p className="text-[0.9rem] leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                {body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Privacy() {
  const { ref: heroRef, visible: heroVisible } = useInView(0.05);
  const { ref: introRef, visible: introVisible } = useInView(0.1);
  const { ref: ctaRef, visible: ctaVisible } = useInView();

  return (
    <>
      <Head>
        <title>Privacy Policy — Saasverse Pvt. Ltd.</title>
        <meta
          name="description"
          content="Review Saasverse Pvt Ltd's Privacy Policy to understand how we collect, use, and protect your personal information when you visit our website."
        />
        <link rel="canonical" href="https://saasverse.in/privacy" />
      </Head>

      <main className="min-h-screen relative" style={{ background: "#06091A" }}>
        {/* Grid background */}
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top radial glow — violet */}
        <div
          className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[420px] z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.15) 0%, transparent 70%)",
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
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-1.5 mb-8">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                Privacy &amp; Data
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black tracking-tighter leading-[1.04] mb-6"
              style={{
                background:
                  "linear-gradient(155deg, #FFFFFF 25%, rgba(148,163,184,0.65) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Privacy Policy
            </h1>

            <p className="text-sm font-mono tracking-widest text-slate-500 uppercase mb-3">
              Saasverse Pvt. Ltd. · www.saasverse.in
            </p>

            {/* Divider */}
            <div className="mt-10 flex items-center gap-3 justify-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/[0.08] max-w-[140px]" />
              <div className="h-1.5 w-1.5 rounded-full bg-violet-500/60" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/[0.08] max-w-[140px]" />
            </div>
          </div>

          {/* ── Intro card ── */}
          <div
            ref={introRef}
            className="mb-6 transition-all duration-700 ease-out"
            style={{
              opacity: introVisible ? 1 : 0,
              transform: introVisible ? "translateY(0)" : "translateY(24px)",
            }}
          >
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-7 py-7 sm:px-9 sm:py-8">
              <p className="text-[0.9375rem] leading-relaxed text-slate-400">
                At{" "}
                <span className="text-white/80 font-medium">
                  Saasverse Pvt. Ltd.
                </span>
                , one of our main priorities is the privacy of our visitors. This
                Privacy Policy document contains types of information that is
                collected and recorded by Saasverse Pvt. Ltd. and how we use it.
                If you have additional questions or require more information,{" "}
                <a
                  href="mailto:learning@saasverse.in"
                  className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2"
                >
                  do not hesitate to contact us
                </a>
                .
              </p>
            </div>
          </div>

          {/* ── Section Cards ── */}
          <div className="flex flex-col gap-3.5">
            {sections.map((s, i) => (
              <SectionCard key={s.number} {...s} index={i} />
            ))}
          </div>

          {/* ── CTA / Contact card ── */}
          <div
            ref={ctaRef}
            className="mt-6 transition-all duration-700 ease-out"
            style={{
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? "translateY(0)" : "translateY(28px)",
            }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-violet-500/20">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,0.13) 0%, rgba(109,40,217,0.06) 100%)",
                }}
              />
              {/* Glow spot */}
              <div
                className="absolute -top-12 right-8 w-48 h-48 rounded-full blur-3xl"
                style={{ background: "rgba(139,92,246,0.15)" }}
              />

              <div className="relative px-7 py-8 sm:px-10 sm:py-9">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-2">
                      Get in Touch
                    </p>
                    <h3 className="text-xl font-bold text-white/90 mb-2 tracking-tight">
                      Questions about your privacy?
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Reach out and we will address any concerns about how we
                      handle your data promptly and transparently.
                    </p>
                  </div>
                  <a
                    href="mailto:learning@saasverse.in"
                    className="shrink-0 inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 active:scale-[0.97]"
                    style={{
                      background:
                        "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            By using our website, you hereby consent to our Privacy Policy and
            agree to its Terms and Conditions. This policy is valid for all
            visitors to{" "}
            <span className="text-slate-500">www.saasverse.in</span>.
          </p>
        </div>
      </main>
    </>
  );
}