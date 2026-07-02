'use client';

import Image from 'next/image';

const partners = [
  { src: '/images/salesforce.webp', alt: 'Salesforce',  name: 'Salesforce'          },
  { src: '/images/servicenoww.png',   alt: 'Sitecore',    name: 'ServiceNow'            },
  { src: '/images/aws22.webp',      alt: 'AWS',         name: 'Amazon Web Services' },
  { src: '/images/micros.webp',     alt: 'Microsoft',   name: 'Microsoft'           },
  { src: '/images/google.webp',     alt: 'Google',      name: 'Google'              },
];

export default function Partner() {
  return (
    <section
      className="relative mt-12 overflow-hidden rounded-[28px]"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FBFCFE 100%)',
        border: '1px solid #E7ECF5',
        boxShadow: '0 1px 2px rgba(10,22,40,0.03), 0 24px 48px -28px rgba(10,22,40,0.12)',
      }}
    >
      {/* faint corner glow — quiet, not decorative noise */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,62,149,0.07) 0%, rgba(0,62,149,0) 70%)',
        }}
      />

      {/* Header */}
      <div
        className="relative flex flex-col gap-8 px-8 py-12 sm:px-12 sm:py-14 md:flex-row md:items-end md:justify-between"
      >
        <div className="flex max-w-xl flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8" style={{ background: '#003e95' }} />
            <span
              className="text-[10.5px] font-semibold uppercase"
              style={{ color: '#003e95', letterSpacing: '0.28em' }}
            >
              Partnerships
            </span>
          </div>

          <h2
            className="font-medium leading-[1.08] text-[#0A1628]"
            style={{
              
              letterSpacing: '-0.03em',
            }}
          >
            Backed by the world's
            <br />
            <span style={{ color: '#003e95' }}>best&nbsp;platforms.</span>
          </h2>
        </div>

        <p
          className="max-w-[300px]  leading-[1.8] text-[#5B6B85] md:pb-1.5"
        >
          We partner with global technology and industry leaders to deliver expert
          solutions to clients worldwide — so you always get the best of the ecosystem.
        </p>
      </div>

      {/* Partners row */}
      <div
        className="relative border-t"
        style={{ borderColor: '#E7ECF5' }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          {partners.map((p) => (
            <div
              key={p.alt}
              className="group relative flex flex-col items-center justify-center gap-4 px-6 py-10 transition-all duration-300 hover:bg-[#F7FAFF]"
            >
              <div className="flex h-9 w-24 items-center justify-center opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-[1.04]">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={72}
                  height={30}
                  className="object-contain"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <span
                className="text-[9.5px] font-medium uppercase text-[#9AA8BD] transition-colors duration-300 group-hover:text-[#003e95]"
                style={{ letterSpacing: '0.14em' }}
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="relative flex flex-col items-start gap-4 border-t px-8 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-12"
        style={{ borderColor: '#E7ECF5', background: '#FAFBFE' }}
      >
        <span
          className="text-[10.5px] uppercase text-[#9AA8BD]"
          style={{ letterSpacing: '0.16em' }}
        >
          Trusted technology ecosystem
        </span>

        <div className="flex items-center gap-6">
          {['Certified', 'Active agreements'].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{
                  background: '#16A364',
                  boxShadow: '0 0 0 3px rgba(22,163,100,0.14)',
                }}
              />
              <span
                className="text-[11px] text-[#5B6B85]"
                style={{ letterSpacing: '0.04em' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}   