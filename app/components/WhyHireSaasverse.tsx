import {
  FaAward,
  FaUsers,
  FaGlobeAmericas,
  FaShieldAlt,
  FaStar,
  FaChartLine,
} from 'react-icons/fa';
import Link from 'next/link';

const reasons = [
  {
    icon: FaAward,
    title: 'Salesforce Partner with Navigator Expert Status',
    description:
      'Work with a Salesforce Partner with Navigator Expert status, bringing platform knowledge and experience to your Salesforce projects.',
  },
  {
    icon: FaUsers,
    title: '50+ Certified Professionals',
    description:
      'Our team includes 50+ certified professionals. When your consultant needs an architect or developer, they can collaborate with specialists from the same team.',
  },
  {
    icon: FaGlobeAmericas,
    title: 'Offices in Jaipur and Boston',
    description:
      "We agree on overlapping working hours with your team, whether you're based in the US, UK, Europe, the Middle East or APAC.",
  },
  {
    icon: FaShieldAlt,
    title: 'Security You Can Trust',
    description:
      'ISO 27001 and Cyber Essentials Plus certified. We can sign an NDA before accessing your Salesforce org.',
  },
  {
    icon: FaStar,
    title: 'Rated 5.0 on Clutch',
    description:
      'Our client reviews reflect their experience working with Saasverse. Read their feedback and learn more about our services.',
    link: 'https://clutch.co/profile/saasverse-salesforce-consulting-partner',
    linkText: 'Read our reviews',
    external: true,
  },
  {
    icon: FaChartLine,
    title: '120+ Projects Across 19 Countries',
    description:
      "We've delivered 120+ projects for 41 clients across 19 countries, bringing experience from different business needs and Salesforce implementations.",
  },
];

export default function WhyHireSaasverse() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-0">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-100/50 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-blue-50 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-[#003e95]">
            <span className="h-2 w-2 rounded-full bg-[#003e95]" />
            The Saasverse Advantage
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Why Hire from <span className="text-[#003e95]">Saasverse?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Get the right Salesforce expertise, backed by a certified team,
            security standards and experience across industries and countries.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group relative rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 sm:p-8"
              >
                {/* Number */}
                <span className="absolute right-6 top-6 text-sm font-semibold text-gray-300 transition-colors duration-300 group-hover:text-blue-300">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 transition-all duration-300 group-hover:border-[] group-hover:bg-[#003e95]">
                  <Icon className="text-xl text-[#003e95] transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="mb-3 pr-5 text-xl font-semibold leading-snug text-gray-900">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-7 text-gray-600 sm:text-base">
                  {reason.description}
                </p>

                {/* Optional Link */}
                {reason.link && (
                  <Link
                    href={reason.link}
                    target={reason.external ? '_blank' : undefined}
                    rel={reason.external ? 'noopener noreferrer' : undefined}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#003e95] transition-colors hover:text-blue-900"
                  >
                    {reason.linkText}
                    <span aria-hidden="true">→</span>
                  </Link>
                )}

                {/* Bottom Accent */}
                <div className="mt-7 h-1 w-10 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-16 group-hover:bg-[#003e95]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
