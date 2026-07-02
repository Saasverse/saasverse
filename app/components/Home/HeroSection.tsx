import Link from 'next/link';
 
 
export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#0A0B10', minHeight: '100svh' }}
      aria-label="Hero"
    >
 
      {/* ── Background video — full bleed ── */}
      <div className="absolute inset-0">
        <video
          src="/videos/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-center"
          style={{ opacity: 0.38 }}
        />
      </div>
 
      {/* Dark overlay — keeps text sharp */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'rgba(10,11,16,0.62)' }}
      />
 
      {/* Radial vignette — edges darker, centre clear */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 30%, rgba(10,11,16,0.55) 100%)',
        }}
      />
 
      {/* Very faint ambient — almost invisible, just prevents pure-black feel */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 10% 40%, rgba(29,78,216,0.03) 0%, transparent 60%)',
        }}
      />
 
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
 
      {/* Top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.12) 78%, transparent 95%)',
        }}
      />
 
      {/* Bottom fade — dissolves video into the next section seamlessly */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0"
        style={{
          height: '35%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(10,11,16,0.75) 55%, #0A0B10 100%)',
          zIndex: 5,
        }}
      />
 
      {/* ── Centred content ── */}
      {/*
        paddingTop: max(8rem, 22vh) — whichever is larger.
        On a 375 px mobile: max(128px, 82px) = 128px → clears 80px navbar + 48px air.
        On a 900 px desktop: max(128px, 198px) = 198px → generous breathing room.
        justify-center then distributes the leftover space evenly above/below.
      */}
      <div
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-5 text-center sm:px-8"
        style={{
          paddingTop: 'max(8rem, 22vh)',
          paddingBottom: 'max(4rem, 10vh)',
        }}
      >
 
        {/* Headline — single line */}
        <h1
          className="text-white"
          style={{
          
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
          }}
        >
          INNOVATE,{' '}
          <span
            style={{
              background: 'linear-gradient(125deg, #60A5FA 0%, #2563EB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            INTEGRATE,
          </span>
          {' '}IMPLEMENT
        </h1>
 
        {/* Description — exactly 2 lines */}
        <p
          className="mt-5"
          style={{
            color: 'rgba(255,255,255,0.46)',
           
            lineHeight: 1.8,
            maxWidth: 500,
          }}
        >
          Salesforce consulting, implementation &amp; managed services
          <br />
          trusted by enterprises across 15+ countries.
        </p>
 
        {/* CTAs */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="h-cta-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white"
          >
            Get Free Consultation
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/services"
            className="h-cta-ghost inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium"
          >
            Explore Services
          </Link>
        </div>
 
      </div>
 
      {/* Scroll cue — desktop only */}
      <div
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 lg:flex"
        aria-hidden
      >
        <div
          className="flex h-8 w-4 items-start justify-center rounded-full border p-1"
          style={{ borderColor: 'rgba(255,255,255,0.12)' }}
        >
          <span
            className="h-1.5 w-0.5 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.28)',
              animation: 'scroll-dot 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
 
      <style>{`
        @keyframes scroll-dot {
          0%, 100% { transform: translateY(0);    opacity: 0.3; }
          50%       { transform: translateY(9px);  opacity: 0.08; }
        }
        .h-cta-primary {
          background: #003E95;
          box-shadow: 0 1px 2px rgba(0,0,0,0.4),
                      0 4px 16px rgba(0,62,149,0.28),
                      inset 0 1px 0 rgba(255,255,255,0.12);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .h-cta-primary:hover {
          transform: translateY(-1px);
          background: #0052BF;
          box-shadow: 0 1px 2px rgba(0,0,0,0.4),
                      0 8px 24px rgba(0,62,149,0.40),
                      inset 0 1px 0 rgba(255,255,255,0.12);
        }
        .h-cta-primary:active { transform: translateY(0); }
        .h-cta-ghost {
          color: rgba(255,255,255,0.50);
          border: 1px solid rgba(255,255,255,0.13);
          transition: color 0.18s ease, border-color 0.18s ease, background 0.18s ease;
        }
        .h-cta-ghost:hover {
          color: rgba(255,255,255,0.88);
          border-color: rgba(255,255,255,0.26);
          background: rgba(255,255,255,0.04);
        }
        @media (prefers-reduced-motion: reduce) {
          .h-cta-primary, .h-cta-ghost { transition: none !important; }
          * { animation: none !important; }
        }
      `}</style>
    </section>
  );
}