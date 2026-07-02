"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Sales Cloud",
    tag: "Revenue Growth",
    desc: "Transform your entire sales pipeline — from lead capture to closed-won — with intelligent automation and real-time forecasting.",
    url: "/salesforce-sales-cloud",
    logo: "/images/scloud.webp",
    accent: "#3B82F6",
    stat: { value: "38%", label: "faster deal cycles" },
    features: ["Pipeline Intelligence", "Quote Automation", "Revenue Forecasting"],
  },
  {
    title: "Service Cloud",
    tag: "Customer Success",
    desc: "Empower support teams with AI-driven case routing, omnichannel engagement, and self-service portals that delight at scale.",
    url: "/salesforce-service-cloud",
    logo: "/images/sscloud.webp",
    accent: "#60A5FA",
    stat: { value: "62%", label: "faster resolution" },
    features: ["Omnichannel Routing", "AI Case Triage", "Knowledge Base"],
  },
  {
    title: "Marketing Cloud",
    tag: "Audience Engagement",
    desc: "Cut through noise with personalised journeys, real-time analytics, and full-funnel automation that converts browsers into buyers.",
    url: "/salesforce-marketing-cloud",
    logo: "/images/mcloud.webp",
    accent: "#818CF8",
    stat: { value: "3.4×", label: "ROI on campaigns" },
    features: ["Journey Builder", "Predictive Segmentation", "Email & SMS"],
  },
  {
    title: "Health Cloud",
    tag: "Patient Care",
    desc: "Deliver personalised care at scale. Manage complex patient data, streamline care coordination, and improve outcomes across every touchpoint.",
    url: "/health-cloud-services",
    logo: "/images/ecloud.webp",
    accent: "#34D399",
    stat: { value: "45%", label: "better care outcomes" },
    features: ["Care Plans", "Provider Network", "HIPAA Compliance"],
  },
  {
    title: "Financial Cloud",
    tag: "Wealth Management",
    desc: "Build lasting client relationships with intelligent data, personalised experiences, and fully compliant workflows built for finance.",
    url: "/financial-cloud-implementation-services",
    logo: "/images/fcloud.webp",
    accent: "#F59E0B",
    stat: { value: "28%", label: "AUM growth" },
    features: ["Client 360", "Compliance Engine", "Portfolio Analytics"],
  },
  {
    title: "Insurance Cloud",
    tag: "Claims & Policy",
    desc: "Streamline underwriting, claims, and policy management through intelligent data insights and end-to-end automation.",
    url: "/salesforce-consulting-company",
    logo: "/images/hcloud.webp",
    accent: "#A78BFA",
    stat: { value: "51%", label: "faster claims" },
    features: ["Policy Lifecycle", "Claims Automation", "Risk Scoring"],
  },
];

const TOTAL = slides.length;
const AUTO_MS = 5500;
const LOCK_MS = 600;

export default function HomeSlider() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const lockRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    if (lockRef.current) return;
    const next = ((idx % TOTAL) + TOTAL) % TOTAL;
    if (next === activeRef.current) return;
    lockRef.current = true;
    activeRef.current = next;
    setActive(next);
    setTimeout(() => { lockRef.current = false; }, LOCK_MS);
  }, []);

  const goNext = useCallback(() => goTo(activeRef.current + 1), [goTo]);
  const goPrev = useCallback(() => goTo(activeRef.current - 1), [goTo]);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => goTo(activeRef.current + 1), AUTO_MS);
  }, [goTo]);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  // Use pointer/touch-safe handlers so the first mobile tap always registers
  const handlePrev = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      e.stopPropagation();
      goPrev();
      startTimer();
    },
    [goPrev, startTimer]
  );

  const handleNext = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      e.stopPropagation();
      goNext();
      startTimer();
    },
    [goNext, startTimer]
  );

  const handleDot = (i: number) => { goTo(i); startTimer(); };

  const s = slides[active];

  return (
    <section
      className="relative w-full overflow-hidden select-none"
      style={{ background: "#0D0E15", minHeight: 580 }}
    >
      {/* Accent progress bar */}
      <div
        className="absolute top-0 left-0 h-[2px] z-30 transition-all duration-700"
        style={{ width: `${((active + 1) / TOTAL) * 100}%`, background: s.accent }}
      />

      {/* Subtle radial glow behind right panel */}
      <div
        className="absolute top-0 right-0 bottom-0 hidden md:block pointer-events-none"
        style={{ width: "46%", transition: "opacity 600ms ease" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 60% 40%, ${s.accent}14 0%, transparent 70%)`,
            transition: "background 600ms ease",
          }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 460 580" fill="none" aria-hidden>
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 7 }).map((_, col) => (
              <circle key={`${row}-${col}`} cx={col * 65 + 32} cy={row * 73 + 36} r="1.8" fill="#fff" />
            ))
          )}
        </svg>
      </div>

      {/* ── Right panel content ── */}
      <div className="absolute top-0 right-0 bottom-0 hidden md:flex flex-col justify-center px-10 py-12 z-10" style={{ width: "46%" }}>
        {s.logo && (
          <div key={`logo-${active}`} className="slide-up mb-8" style={{ animationDelay: "0ms" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.logo} alt={s.title} style={{ height: 48, width: "auto", objectFit: "contain" }} />
          </div>
        )}

        <div key={`stat-${active}`} className="slide-up mb-8" style={{ animationDelay: "60ms" }}>
          <div
            className="inline-block px-5 py-4 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${s.accent}30`,
              backdropFilter: "blur(8px)",
            }}
          >
            <p className="font-extrabold leading-none mb-1" style={{ fontSize: "2.8rem", color: s.accent }}>
              {s.stat.value}
            </p>
            <p className="text-sm font-medium text-white/50">{s.stat.label}</p>
          </div>
        </div>

        <ul className="space-y-3">
          {s.features.map((f, i) => (
            <li
              key={`${active}-${f}`}
              className="flex items-center gap-3 slide-up"
              style={{ animationDelay: `${120 + i * 50}ms` }}
            >
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: `${s.accent}22`, border: `1px solid ${s.accent}40` }}
              >
                <svg width="9" height="9" fill="none" viewBox="0 0 24 24" stroke={s.accent} strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm font-medium text-white/70">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Left panel ── */}
      <div
        className="slider-left-panel relative z-10 flex flex-col justify-center pl-16 pr-6 py-14 sm:pl-16 sm:pr-10 md:pl-20 md:pr-14 lg:pl-28 lg:pr-20"
        style={{ minHeight: 580, width: "100%", maxWidth: "54%" }}
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: s.accent }}>
            Expertise
          </span>
          <span className="w-5 h-px" style={{ background: s.accent, opacity: 0.3 }} />
          <span className="text-xs tracking-widest uppercase font-medium text-white/30">
            {String(active + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
          </span>
        </div>

        <div
          key={`tag-${active}`}
          className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full w-fit slide-up"
          style={{
            background: `${s.accent}18`,
            border: `1px solid ${s.accent}30`,
            animationDelay: "0ms",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.accent }} />
          <span className="text-xs font-semibold" style={{ color: s.accent }}>{s.tag}</span>
        </div>

        <h2
          key={`title-${active}`}
          className="font-extrabold leading-[1.04] mb-5 slide-up text-white"
          style={{ animationDelay: "40ms", letterSpacing: "-0.02em" }}
        >
          {s.title}
        </h2>

        <p
          key={`desc-${active}`}
          className="leading-relaxed mb-9 slide-up text-white/55"
          style={{ fontSize: "1.05rem", maxWidth: 420, animationDelay: "80ms" }}
        >
          {s.desc}
        </p>

        <div key={`cta-${active}`} className="flex items-center gap-4 slide-up" style={{ animationDelay: "120ms" }}>
          <Link
            href={s.url}
            className="inline-flex items-center gap-2 rounded-full font-semibold text-sm tracking-wide text-white cta-btn"
            style={{ background: s.accent, padding: "12px 28px" }}
          >
            Explore Solutions
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ── Prev arrow ── */}
      <button
        type="button"
        onClick={handlePrev}
        onTouchEnd={handlePrev}
        aria-label="Previous slide"
        className="nav-btn nav-arrow absolute left-3 md:left-5 z-40"
        style={{
          top: "50%", transform: "translateY(-50%)",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.14)",
          background: "rgba(255,255,255,0.07)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer",
          touchAction: "manipulation",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <svg className="nav-arrow-icon" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.7)" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* ── Next arrow ── */}
      <button
        type="button"
        onClick={handleNext}
        onTouchEnd={handleNext}
        aria-label="Next slide"
        className="nav-btn nav-arrow absolute right-3 md:right-5 z-40"
        style={{
          top: "50%", transform: "translateY(-50%)",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.14)",
          background: "rgba(255,255,255,0.07)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer",
          touchAction: "manipulation",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <svg className="nav-arrow-icon" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.7)" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* ── Dot indicators ── */}
      <div
        className="absolute z-20 flex items-center gap-[7px]"
        style={{
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          padding: "8px 18px",
          borderRadius: 9999,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(8px)",
        }}
      >
        {slides.map((sl, i) => (
          <button
            type="button"
            key={i}
            onClick={() => handleDot(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              height: 4,
              width: i === active ? 36 : 10,
              borderRadius: 9999,
              background: i === active ? s.accent : "rgba(255,255,255,0.18)",
              boxShadow: i === active ? `0 0 10px ${s.accent}80` : "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "width 300ms ease, background 300ms ease, box-shadow 300ms ease",
              flexShrink: 0,
            }}
          />
        ))}
      </div>

      {/* Slide name tabs — bottom right */}
      <div className="absolute bottom-7 right-8 z-20 hidden md:flex items-center gap-2">
        {slides.map((sl, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleDot(i)}
            aria-label={sl.title}
            className="font-medium transition-all duration-200"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: i === active ? s.accent : "rgba(255,255,255,0.2)",
              fontSize: i === active ? 13 : 11,
              fontWeight: i === active ? 700 : 400,
              padding: "0 2px",
            }}
          >
            {sl.title.split(" ")[0]}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .slide-up { opacity: 0; animation: slideUp 0.38s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .cta-btn { transition: filter 180ms, gap 180ms; }
        .cta-btn:hover { filter: brightness(1.1); }
        .nav-btn { transition: background 180ms, transform 150ms; }
        .nav-btn:hover { background: rgba(255,255,255,0.12) !important; }
        .nav-btn:active { transform: scale(0.92) translateY(-50%) !important; }

        .nav-arrow { width: 44px; height: 44px; }
        .nav-arrow-icon { width: 15px; height: 15px; pointer-events: none; }
        @media (min-width: 768px) {
          .nav-arrow { width: 52px; height: 52px; }
          .nav-arrow-icon { width: 17px; height: 17px; }
        }

        @media (max-width: 767px) {
          .slider-left-panel { max-width: 100% !important; padding-left: 4rem !important; }
        }
        @media (prefers-reduced-motion: reduce) { .slide-up { animation: none !important; opacity: 1 !important; } }
      `}</style>
    </section>
  );
}