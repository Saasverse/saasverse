import Image from 'next/image';
 
const clients = [
  { src: '/images/ourclients/Databricks.webp',         alt: 'Databricks' },
  { src: '/images/ourclients/Doordash.webp',           alt: 'DoorDash' },
  { src: '/images/ourclients/Elkay.webp',              alt: 'Elkay' },
  { src: '/images/ourclients/Five9.webp',              alt: 'Five9' },
  { src: '/images/ourclients/IngersolRand.webp',       alt: 'Ingersoll Rand' },
  { src: '/images/ourclients/Lafarge.webp',            alt: 'Lafarge' },
  { src: '/images/ourclients/Lkpackaging.webp',        alt: 'LK Packaging' },
  { src: '/images/ourclients/Marlab.webp',             alt: 'Marlab' },
  { src: '/images/ourclients/SYSCO.webp',              alt: 'Sysco' },
  { src: '/images/ourclients/Telstra.webp',            alt: 'Telstra' },
  { src: '/images/ourclients/XPO.webp',                alt: 'XPO Logistics' },
  { src: '/images/ourclients/origin.webp',             alt: 'Origin Energy' },
  { src: '/images/ourclients/SpringEducationGroup.webp', alt: 'Spring Education Group' },
];
 
export default function OurPartners() {
  return (
    <section
      className="overflow-hidden py-20"
      style={{ background: '#0D0E15' }}
      aria-label="Our clients"
    >
      {/* Header */}
      <div className="mx-auto mb-14 max-w-3xl px-6 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
          Trusted By
        </p>
        <h2 className="text-white">
          Global Enterprises That Scale With Us
        </h2>
        <p className="mt-4 leading-relaxed text-white/45">
          From Fortune 500 corporations to high-growth innovators — enterprises across
          every industry trust Saasverse to power their Salesforce transformation.
        </p>
      </div>
 
      {/* Marquee track — single infinite loop */}
      <div className="relative">
        {/* Fade masks left & right */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
          style={{ background: 'linear-gradient(to right, #0D0E15, transparent)' }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
          style={{ background: 'linear-gradient(to left, #0D0E15, transparent)' }}
        />
 
        {/* Scrolling track — duplicated for seamless loop */}
        <div className="overflow-hidden">
          <div
            className="flex gap-12 w-max"
            style={{ animation: 'marqueeLeft 36s linear infinite' }}
          >
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center justify-center px-2"
                style={{ height: 56 }}
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={140}
                  height={50}
                  loading="lazy"
                  className="client-logo h-10 md:h-14 w-auto object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
 
 
      <style>{`
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .client-logo { opacity: 0.35; transition: opacity 300ms ease; }
        .client-logo:hover { opacity: 0.9; }
        @media (prefers-reduced-motion: reduce) {
          [style*="marqueeLeft"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}