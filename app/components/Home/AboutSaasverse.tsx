import Image from 'next/image';
import Link from 'next/link';
 
const PILLARS = [
  { icon: '◈', text: 'Certified Salesforce Consulting Partner' },
  { icon: '◈', text: '120+ Enterprise Projects Delivered' },
  { icon: '◈', text: 'Certified across Sales, Service, Marketing & Health Cloud' },
  { icon: '◈', text: 'Trusted by enterprises in 15+ countries' },
];
 
export default function AboutSaasverse() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
 
          {/* Image */}
          <div className="relative">
            <Image
              src="/images/team.webp"
              alt="Saasverse team working on Salesforce solutions"
              width={600}
              height={440}
              className="w-full rounded-2xl object-cover"
              style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.09)' }}
              loading="lazy"
            />
          </div>
 
          {/* Copy */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#003E95]">
              About Saasverse
            </p>
 
            <h2 className="text-slate-900">
              Your Trusted Salesforce Partner
            </h2>
 
            <p className="mt-5 text-base leading-7 text-slate-500">
              Saasverse Technologies helps businesses unlock their full potential with
              comprehensive Salesforce consulting, custom development, data integration,
              and automation. We tailor every engagement to the unique demands of each
              client — from initial strategy through deployment, training, and ongoing support.
            </p>
 
            <ul className="mt-7 space-y-3">
              {PILLARS.map((p) => (
                <li key={p.text} className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#003E95]" style={{ fontSize: '0.8rem' }}>{p.icon}</span>
                  <span className="text-sm text-slate-600">{p.text}</span>
                </li>
              ))}
            </ul>
 
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-blue-200 hover:text-[#003E95]"
            >
              Learn more about us
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}