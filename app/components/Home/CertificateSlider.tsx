'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, useCallback } from 'react';

const CERTIFICATES = [
  { src: '/images/certificateImage/certificate1.webp', label: 'Certificate 1', num: '01' },
  { src: '/images/certificateImage/certificate2.webp', label: 'Certificate 2', num: '02' },
  { src: '/images/certificateImage/certificate3.webp', label: 'Certificate 3', num: '03' },
  { src: '/images/certificateImage/certificate4.webp', label: 'Certificate 4', num: '04' },
  { src: '/images/certificateImage/certificate5.webp', label: 'Certificate 5', num: '05' },
  { src: '/images/certificateImage/certificate6.webp', label: 'Certificate 6', num: '06' },
];

const CARD_W = 210;
const GAP = 20;
const STEP = CARD_W + GAP;
const INTERVAL = 2800;

export default function CertificateSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = CERTIFICATES.length;

  const goTo = useCallback(
    (idx: number) => {
      const next = ((idx % total) + total) % total;

      setCurrent(next);

      if (trackRef.current) {
        trackRef.current.style.transition =
          'transform 0.55s cubic-bezier(0.4,0,0.2,1)';
        trackRef.current.style.transform = `translateX(-${next * STEP}px)`;
      }
    },
    [total]
  );

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (!paused) {
      timerRef.current = setInterval(() => {
        setCurrent((c) => {
          const next = (c + 1) % total;

          if (trackRef.current) {
            trackRef.current.style.transition =
              'transform 0.55s cubic-bezier(0.4,0,0.2,1)';
            trackRef.current.style.transform = `translateX(-${next * STEP}px)`;
          }

          return next;
        });
      }, INTERVAL);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [paused, total]);

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#003e95] mb-4">
            <span className="block h-px w-7 bg-[#003e95] opacity-35" />
            Our credentials
            <span className="block h-px w-7 bg-[#003e95] opacity-35" />
          </p>

          <h2 className="font-light text-[#0a0f1e] tracking-tight leading-snug">
            We hold skilled,{' '}
            <strong className="font-medium text-[#003e95]">well-trained</strong>{' '}
            and
            <br />
            certified{' '}
            <strong className="font-medium text-[#003e95]">
              Salesforce team
            </strong>
          </h2>

          <p className="mt-3 text-[14px] text-gray-400">
            Industry-recognized certifications across the full Salesforce
            ecosystem
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />

          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: `${GAP}px`,
              width: 'max-content',
            }}
          >
            {[...CERTIFICATES, ...CERTIFICATES].map((cert, i) => (
              <div
                key={i}
                className="group relative flex-shrink-0 overflow-hidden rounded-2xl border border-[#e4e8f0] bg-white transition-colors duration-200 hover:border-[#c7d2fe] hover:bg-[#f7f9ff]"
                style={{
                  width: `${CARD_W}px`,
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#003e95] origin-left scale-x-0 transition-transform duration-[250ms] group-hover:scale-x-100" />

                <div className="flex items-center justify-center p-6 h-[160px]">
                  <Image
                    src={cert.src}
                    alt={cert.label}
                    width={160}
                    height={120}
                    className="w-auto max-w-[150px] h-auto max-h-[120px] object-contain"
                    loading={i < total ? 'eager' : 'lazy'}
                  />
                </div>

                <div className="flex items-center justify-between border-t border-[#e4e8f0] px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-[5px] w-[5px] rounded-full bg-emerald-400" />
                    <span className="text-[10px] text-gray-400">
                      Certified
                    </span>
                  </div>

                  <span className="text-[11px] font-medium text-[#dde3f0]">
                    {cert.num}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            onClick={() => goTo(current - 1)}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border border-[#dde3f0] bg-white flex items-center justify-center transition-colors hover:bg-[#f0f4ff] hover:border-[#c7d2fe]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#003e95"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center gap-1.5">
            {CERTIFICATES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-[5px] rounded-full transition-all duration-200 ${
                  i === current
                    ? 'w-[18px] bg-[#003e95]'
                    : 'w-[5px] bg-[#dde3f0] hover:bg-[#c7d2fe]'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(current + 1)}
            aria-label="Next"
            className="w-9 h-9 rounded-full border border-[#dde3f0] bg-white flex items-center justify-center transition-colors hover:bg-[#f0f4ff] hover:border-[#c7d2fe]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#003e95"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <button
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? 'Resume autoplay' : 'Pause autoplay'}
            className="w-9 h-9 rounded-full border border-[#dde3f0] bg-white flex items-center justify-center transition-colors hover:bg-[#f0f4ff] hover:border-[#c7d2fe]"
          >
            {paused ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#003e95">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            ) : (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#003e95"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}