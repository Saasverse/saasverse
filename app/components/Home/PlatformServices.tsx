import Image from 'next/image';
import Link from 'next/link';
 
 
const SERVICES = [
  {
    icon: '/images/salesforceconsultingnew.png',
    title: 'Salesforce Consulting',
    badge: 'Consulting',
    desc: 'Strategic Salesforce guidance, roadmap planning, and expert advisory to maximise your CRM investment.',
    href: '/salesforce-consulting-company',
    accent: '#0176D3',
  },
  {
    icon: '/images/servicenoww.png',
    title: 'ServiceNow',
    badge: 'Platform',
    desc: 'ServiceNow implementation, customisation, and integration services to streamline enterprise workflows.',
    href: '/services',
    accent: '#62D84E',
  },
  {
    icon: '/images/CRMnew.png',
    title: 'CRM Implementation',
    badge: 'Salesforce',
    desc: 'Salesforce CRM deployments that align with your business goals — from configuration and migration to go-live and adoption.',
    href: '/salesforce-implementation-services',
    accent: '#003E95',
  },
  {
    icon: '/images/cms.webp',
    title: 'CMS Development',
    badge: 'Web',
    desc: 'WordPress, Shopify, and Magento solutions that combine powerful content management with flawless user experiences.',
    href: '/wordpress-development-services',
    accent: '#059669',
  },
  {
    icon: '/images/dotnet-image.webp',
    title: '.NET Development',
    badge: 'Microsoft',
    desc: 'Custom enterprise applications built on Microsoft .NET — secure, scalable, and built for long-term performance.',
    href: '/dotnet-development-services',
    accent: '#0078D4',
  },
  {
    icon: '/images/AWSNEW.png',
    title: 'Amazon Web Services',
    badge: 'AWS Partner',
    desc: 'Leverage AWS cloud infrastructure to build secure, scalable, and cost-effective solutions tailored to your workload.',
    href: '/services-aws',
    accent: '#FF9900',
  },
];
 
export default function PlatformServices() {
  return (
    <section className="bg-white py-20 md:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
 
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#003E95]">
            What We Do
          </p>
          <h2 className="text-slate-900">Our Services</h2>
          <p className="mt-3 text-base text-slate-500 leading-relaxed">
            End-to-end technology services built for enterprise scale and reliability.
          </p>
        </div>
 
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group flex flex-col rounded-2xl border bg-white p-6 transition-all duration-200 hover:-translate-y-1"
              style={{
                borderColor: '#E5E7EB',
                borderTopWidth: '3px',
                borderTopColor: s.accent,
              }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">
                <Image
                  src={s.icon!}
                  alt={s.title}
                  width={36}
                  height={36}
                  loading="lazy"
                  style={{ width: 'auto', height: '28px', objectFit: 'contain' }}
                />
              </div>
 
              <div className="mb-3">
                <p className="text-base font-bold text-slate-800">{s.title}</p>
                <span
                  className="mt-1.5 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                  style={{ background: `${s.accent}14`, color: s.accent }}
                >
                  {s.badge}
                </span>
              </div>
 
              <p className="flex-1  leading-relaxed text-slate-500">{s.desc}</p>
 
              <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-slate-400 transition-colors duration-150 group-hover:text-slate-700">
                Learn more
                <svg className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
 
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-200 hover:text-[#003E95]"
          >
            View All Services
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
 