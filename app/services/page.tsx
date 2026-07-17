import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '../components/Home/CTASection';
import ContactForm from '../components/ContactForm';
import PageBanner from '../components/PageBanner';
 
export const metadata: Metadata = {
  title: 'Salesforce Cloud Services & Consulting | Saasverse',
  description:
    'Certified Salesforce consultants delivering Sales, Service & Marketing Cloud solutions for India, US & UAE businesses. Book a free consultation today.',
  alternates: { canonical: 'https://www.saasverse.in/services' },
  openGraph: {
    title: 'All Services — Saasverse Global Consulting Partner',
    description:
      'Browse the complete Saasverse service catalogue: Salesforce, cloud, and enterprise technology solutions delivered by certified experts across 15+ countries.',
    url: 'https://saasverse.in/services',
  },
};
 
const SF = '#003E95';   // Salesforce Services section colour
const EX = '#60A5FA';   // Expertise section colour
const TK = '#0891B2';   // Technology Services section colour
 
const SALESFORCE_SERVICES = [
  { title: 'Salesforce Consulting',    badge: 'Strategy',    desc: 'Strategic Salesforce alignment, implementation planning, and expert guidance to maximise your CRM investment.',                  href: '/salesforce-consulting-company',               accent: SF },
  { title: 'Salesforce Implementation',badge: 'Deployment',  desc: 'End-to-end Salesforce deployments — from discovery and configuration to data migration and user adoption.',                   href: '/salesforce-implementation-services',          accent: SF },
  { title: 'Salesforce Integration',   badge: 'Integration', desc: 'Connect Salesforce with ERP, marketing, and custom platforms for a seamless unified data ecosystem.',                           href: '/salesforce-integration-services',             accent: SF },
  { title: 'Custom Development',       badge: 'Dev',         desc: 'Bespoke Apex, Lightning Web Components, and Flow automation built to your exact business requirements.',                         href: '/salesforce-custom-development-services',      accent: SF },
  { title: 'AppExchange Development',  badge: 'ISV',         desc: 'Build, package, and publish enterprise-grade AppExchange apps with full security-review support.',                               href: '/salesforce-appexchange-development-company',  accent: SF },
  { title: 'Managed Services',         badge: 'Ongoing',     desc: 'Proactive Salesforce administration, enhancements, and governance as a fully managed partnership.',                              href: '/salesforce-managed-services',                 accent: SF },
  { title: 'Support & Maintenance',    badge: 'Support',     desc: 'Dedicated Salesforce support for issue resolution, release management, and continuous optimisation.',                            href: '/salesforce-support-and-maintenance-services', accent: SF },
  { title: 'Security Review',          badge: 'Security',    desc: 'Comprehensive Salesforce security audits, penetration testing, and AppExchange security-review preparation.',                    href: '/salesforce-security-review',                  accent: SF },
];
 
const EXPERTISE = [
  { title: 'Sales Cloud',           badge: 'Revenue',    desc: 'Accelerate your pipeline with intelligent automation, forecasting, and real-time deal intelligence.',                   href: '/salesforce-sales-cloud',                   accent: EX },
  { title: 'Service Cloud',         badge: 'Support',    desc: 'Omnichannel case management, AI-driven routing, and self-service portals that delight customers at scale.',            href: '/salesforce-service-cloud',                 accent: EX },
  { title: 'Marketing Cloud',       badge: 'Engagement', desc: 'Personalised customer journeys, predictive segmentation, and full-funnel campaign automation.',                       href: '/salesforce-marketing-cloud',               accent: EX },
  { title: 'Health Cloud',          badge: 'Healthcare', desc: 'HIPAA-compliant care coordination, patient management, and connected provider networks.',                            href: '/health-cloud-services',                    accent: EX },
  { title: 'Financial Cloud',       badge: 'Finance',    desc: 'Intelligent client relationship management and compliant workflows for wealth and financial services.',               href: '/financial-cloud-implementation-services',  accent: EX },
  { title: 'Experience Cloud',      badge: 'Portals',    desc: 'Build branded partner portals, customer communities, and employee hubs on the Salesforce platform.',                 href: '/experience-cloud',                         accent: EX },
  { title: 'Nonprofit Cloud',       badge: 'Nonprofit',  desc: 'Donor management, grant tracking, and programme delivery for mission-driven organisations.',                        href: '/nonprofit-cloud',                          accent: EX },
  { title: 'Mulesoft Development',  badge: 'API',        desc: 'Enterprise API management and data integration using MuleSoft Anypoint Platform.',                                  href: '/mulesoft-development',                     accent: EX },
  { title: 'Salesforce AI',         badge: 'Einstein AI',desc: 'Embed predictive analytics, generative AI, and intelligent automation across your Salesforce org.',                  href: '/salesforce-ai-company',                    accent: EX },
  { title: 'Tableau CRM',           badge: 'Analytics',  desc: 'Actionable dashboards and AI-powered analytics embedded directly in your Salesforce workflows.',                    href: '/tableau-crm',                              accent: EX },
  { title: 'CPQ Implementation',    badge: 'CPQ',        desc: 'Configure, price, and quote faster with Salesforce CPQ — reducing errors and accelerating approvals.',               href: '/salesforce-cpq-implementation',            accent: EX },
  { title: 'Field Service',         badge: 'Field Ops',  desc: 'Optimise field technician scheduling, mobile workflows, and real-time job management.',                             href: '/field-service-lightning',                  accent: EX },
  { title: 'Mobile Publisher',      badge: 'Mobile',     desc: 'Publish branded iOS and Android apps powered by Salesforce with no native development required.',                   href: '/mobile-publisher-services',                accent: EX },
];
 
const TECH_SERVICES = [
  { title: 'AWS Services',             badge: 'Cloud',      desc: 'Scalable cloud infrastructure, DevOps automation, and cost-optimised AWS architecture.',                            href: '/services-aws',                        accent: TK },
  { title: 'App Modernization',        badge: 'Azure',      desc: 'Migrate legacy systems to modern cloud-native architectures on Azure and hybrid platforms.',                       href: '/application-modernization-services',  accent: TK },
  { title: 'Sitecore Development',     badge: 'DXP',        desc: 'Personalised digital experiences and headless CMS solutions built on Sitecore.',                                   href: '/sitecore-development-services',       accent: TK },
  { title: 'ServiceNow',               badge: 'Platform',   desc: 'ServiceNow implementation, customisation, and integration services to streamline enterprise workflows and processes.',    href: '/servicenow',                            accent: TK },
  { title: 'Shopify Development',      badge: 'eCommerce',  desc: 'Custom Shopify themes, app integrations, and headless commerce for high-growth brands.',                           href: '/shopify-development-services',        accent: TK },
  { title: 'Magento Development',      badge: 'eCommerce',  desc: 'Scalable Magento storefronts with custom extensions, performance tuning, and enterprise integrations.',            href: '/magento-development-services',        accent: TK },
  { title: 'WordPress Development',    badge: 'CMS',        desc: 'Enterprise WordPress sites with custom plugins, headless setups, and performance-first builds.',                   href: '/wordpress-development-services',      accent: TK },
  { title: '.NET Development',         badge: 'Microsoft',  desc: 'Secure, scalable enterprise applications on Microsoft .NET — API-first and built for longevity.',                  href: '/dotnet-development-services',         accent: TK },
  { title: 'Kentico Development',      badge: 'CMS',        desc: 'Feature-rich digital experience portals and intranets powered by Kentico Xperience.',                              href: '/kentico-development-services',        accent: TK },
  { title: 'Zoho CRM Services',        badge: 'CRM',        desc: 'Zoho CRM implementation, customisation, and integration for growing sales-driven organisations.',                  href: '/zoho-crm-services',                   accent: TK },
];
 
function ServiceCard({ title, badge, desc, href, accent }: {
  title: string; badge: string; desc: string; href: string; accent: string;
}) {
  return (
    <Link
      href={href}
      className="svc-card group flex flex-col rounded-xl transition-all duration-200 hover:-translate-y-1"
      style={{
        background: '#FFFFFF',
        border: '1px solid #E5E7EB',
        borderTopWidth: '3px',
        borderTopColor: accent,
        padding: '1.25rem 1.375rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}
    >
      <div className="mb-2.5">
        <p className="text-[0.9375rem] font-bold leading-snug text-slate-800">
          {title}
        </p>
        <span
          className="mt-2 inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest"
          style={{ background: `${accent}18`, color: accent }}
        >
          {badge}
        </span>
      </div>
      <p className="flex-1 text-[12.5px] leading-relaxed text-slate-500">
        {desc}
      </p>
      <div className="svc-footer mt-4 flex items-center gap-1 text-[11px] font-semibold text-slate-300 transition-colors duration-150">
        Learn more
        <svg className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
 
const CATEGORIES = [
  {
    eyebrow: 'Core Offerings',
    title: 'Salesforce Services',
    desc: 'From strategy to deployment and ongoing support — our certified consultants cover every dimension of the Salesforce platform.',
    accent: SF,
    bg: '#FFFFFF',
    services: SALESFORCE_SERVICES,
  },
  {
    eyebrow: 'Cloud Solutions',
    title: 'Expertise',
    desc: 'Deep specialisation across every Salesforce Cloud — purpose-built solutions for sales, service, marketing, and beyond.',
    accent: EX,
    bg: '#EFF6FF',
    services: EXPERTISE,
  },
  {
    eyebrow: 'Technology Stack',
    title: 'Technology Services',
    desc: 'Beyond Salesforce — our engineers deliver cloud infrastructure, enterprise portals, and custom software at scale.',
    accent: TK,
    bg: '#F0FDFA',
    services: TECH_SERVICES,
  },
];
 
export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Saasverse Services',
            description: 'Full-spectrum Salesforce, cloud, and enterprise technology services.',
            url: 'https://saasverse.in/services',
            itemListElement: [...SALESFORCE_SERVICES, ...EXPERTISE, ...TECH_SERVICES].map((s, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: s.title,
              url: `https://saasverse.in${s.href}`,
            })),
          }),
        }}
      />
 
    <PageBanner
           image="/images/banner/services.png"
           title="Our Services"
           description="Transform your business with tailored cloud solutions that streamline operations, enhance customer relationships, and drive sustainable growth."
         />
 
      {/* ── Service categories — light theme ── */}
      {CATEGORIES.map((cat) => (
        <section key={cat.title} className="py-16 md:py-24" style={{ background: cat.bg }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
 
            {/* Section heading */}
            <div className="mb-10 max-w-2xl">
              <p
                className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: cat.accent }}
              >
                <span className="inline-block h-px w-6 rounded-full" style={{ background: cat.accent }} />
                {cat.eyebrow}
              </p>
              <h2 className="text-slate-900" style={{ letterSpacing: '-0.02em' }}>{cat.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-500">{cat.desc}</p>
            </div>
 
            {/* Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cat.services.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </section>
      ))}
 
      <CTASection />
      <ContactForm />
 
      <style>{`
        .svc-card:hover {
          background: #F9FAFB !important;
          border-color: #D1D5DB !important;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08) !important;
        }
        .svc-card:hover .svc-footer { color: #475569 !important; }
      `}</style>
    </>
  );
}