'use client';

import { useEffect, useRef, useState } from 'react';

function useCountUp(target: number, duration = 1600) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setStarted(true); obs.disconnect(); }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return { count, ref };
}

interface Stat { target: number; suffix: string; label: string; }

function StatItem({ target, suffix, label }: Stat) {
  const { count, ref } = useCountUp(target);
  return (
    <div ref={ref} className="flex flex-col items-center">
      <div
        className="font-extrabold tabular-nums text-white"
        style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', letterSpacing: '-0.04em', lineHeight: 1 }}
      >
        {count}{suffix}
      </div>
      <div
        className="mt-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-center"
        style={{ color: 'rgba(255,255,255,0.30)' }}
      >
        {label}
      </div>
    </div>
  );
}

export default function StatsCounter({
  projects, experts, years,
}: { projects: number; experts: number; years: number }) {
  const stats: Stat[] = [
    { target: projects, suffix: '+', label: 'Projects Delivered' },
    { target: experts,  suffix: '+', label: 'Certified Experts'  },
    { target: years,    suffix: '+', label: 'Years Experience'   },
    { target: 15,       suffix: '+', label: 'Countries Served'   },
  ];

  return (
    <div className="grid grid-cols-2 gap-y-10 gap-x-4 sm:flex sm:flex-nowrap sm:items-center sm:justify-center sm:gap-0">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`flex items-center justify-center ${
            i < 2 ? 'border-b border-white/5 pb-8 sm:border-0 sm:pb-0' : ''
          }`}
        >
          <StatItem {...s} />
          {i < stats.length - 1 && (
            <div
              className="mx-8 hidden h-10 w-px sm:mx-12 sm:block lg:mx-16"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            />
          )}
        </div>
      ))}
    </div>
  );
}