import React from 'react';
import PageBanner2 from '../components/PageBanner2';
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import HealthSolution from '../work-salesforce-health-cloud/HealthSolution';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';

import { Metadata } from 'next';
import Link from 'next/link';

const faqs = [
  {
    question: 'Is WordPress a good choice for a business website?',
    answer:
      'For most company sites, blogs and content-led sites, yes. It’s widely used, easy for teams to edit and has a large choice of themes and plugins.',
  },
  {
    question: 'How many websites use WordPress?',
    answer:
      'About 40% of all websites run on WordPress, according to W3Techs (November 2026).',
  },
  {
    question: 'Can our team edit the site without a developer?',
    answer:
      'Yes. We build with the WordPress block editor, so your team can add and change pages without code, and we show them how.',
  },
  {
    question: 'Do you build custom themes or use ready-made ones?',
    answer:
      'Both. We build custom block themes when you need your own design, and adapt a well-built theme when that fits better.',
  },
  {
    question: 'Can you build a custom plugin?',
    answer:
      'Yes, when no existing plugin does what you need, or when the ones you use cause problems.',
  },
  {
    question: 'Can WordPress run an online store?',
    answer:
      'Yes, with WooCommerce. It suits content-led sites with a smaller store. For larger stores, Shopify or Magento may fit better.',
  },
  {
    question: 'Can you fix a slow WordPress site?',
    answer:
      'Yes. We look at plugins, images, theme code and hosting, remove what slows the site down and fix the rest.',
  },
  {
    question: 'Our site was hacked. Can you help?',
    answer:
      'Yes. We clean the site, close the hole that let attackers in, update everything and set up monitoring.',
  },
  {
    question: 'Can WordPress forms send leads to Salesforce?',
    answer:
      'Yes. We connect your forms to Salesforce or your CRM, so leads arrive straight away with the right details.',
  },
  {
    question: 'How long does a WordPress project take?',
    answer:
      'It depends on the design, the number of page types and integrations. You’ll get a timeline in the written scope before any work starts.',
  },
  {
    question: 'What does WordPress development cost?',
    answer:
      'The cost depends on your requirements: design, page types, plugins, integrations and whether you need a store. We send you the cost in writing after the discovery call.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you’ll get a reply within 24 hours.',
  },
];

const benefits = [
  {
    title: 'Custom Block Themes',
    description:
      'We build themes with the WordPress block editor, so your team can build and edit pages without code.',
  },
  {
    title: 'Custom Plugins',
    description:
      'We build plugins for features your site needs, and fix or replace plugins that cause problems.',
  },
  {
    title: 'WooCommerce Stores',
    description:
      'We set up WooCommerce for content-led sites that also sell online.',
  },
  {
    title: 'Speed Fixes',
    description:
      'We find what slows the site down, such as plugins, images or hosting, and fix it.',
  },
  {
    title: 'Security and Updates',
    description:
      'We keep WordPress, themes and plugins updated, harden logins and remove malware if a site is hacked.',
  },
  {
    title: 'Migrations',
    description:
      'We move sites to WordPress from other platforms, or to new hosting, with redirects to keep your search rankings.',
  },
  {
    title: 'Forms and CRM Integration',
    description: (
      <>
        We send form leads to your CRM, including Salesforce, so sales sees them
        straight away. Explore our{' '}
        <Link
          href="/salesforce-integration-services"
          className="text-[#003e95] font-semibold hover:underline"
        >
          Salesforce integration services.
        </Link>
      </>
    ),
  },
  {
    title: 'Headless WordPress',
    description:
      'For faster or app-like sites, we use WordPress for content and a separate front end to show it.',
  },
];

const platformOptions = [
  {
    number: '01',
    title: 'WordPress',
    description:
      'For company sites, blogs and content-led sites, with WooCommerce for smaller stores.',
  },
  {
    number: '02',
    title: 'Shopify',
    description: (
      <>
        For brands where the store comes first. Explore{' '}
        <Link
          href="/shopify-development-services"
          className="text-[#003e95] font-semibold hover:underline"
        >
          Shopify development.
        </Link>
      </>
    ),
  },
  {
    number: '03',
    title: 'Magento',
    description: (
      <>
        For large catalogs and complex B2B stores. Explore{' '}
        <Link
          href="/magento-development-services"
          className="text-[#003e95] font-semibold hover:underline"
        >
          Magento development.
        </Link>
      </>
    ),
  },
];

const warningSigns = [
  {
    number: '01',
    title: 'Every Change Needs a Developer',
    description:
      'Your team can’t edit pages without breaking the layout.',
  },
  {
    number: '02',
    title: 'Too Many Plugins',
    description:
      'Dozens of plugins slow the site down and clash after updates.',
  },
  {
    number: '03',
    title: 'Slow Pages',
    description:
      'Pages load slowly on phones, and visitors leave.',
  },
  {
    number: '04',
    title: 'Behind on Updates',
    description:
      'WordPress or plugins haven’t been updated in months.',
  },
  {
    number: '05',
    title: 'The Site Was Hacked',
    description:
      'Spam pages, redirects or warnings from Google.',
  },
  {
    number: '06',
    title: 'Leads Go Nowhere',
    description:
      'Form submissions land in an inbox instead of your CRM.',
  },
];

const projectSteps = [
  {
    title: 'Discovery Call',
    description:
      'Tell us about your site, who edits it and what you want to change. If you’d like an NDA first, we’ll sign one.',
  },
  {
    title: 'Plan and Design',
    description:
      'We agree on the page structure, design and plugins with you.',
  },
  {
    title: 'Scope and Plan',
    description:
      'We send you a written scope with the timeline and cost. Nothing starts until you approve it.',
  },
  {
    title: 'Build on a Staging Site',
    description:
      'We build on a copy of the site, never on the live one, and show you progress at regular reviews.',
  },
  {
    title: 'Test',
    description:
      'We test pages, forms, speed and redirects on phones and desktops before launch.',
  },
  {
    title: 'Launch and Support',
    description:
      'We go live, show your team how to edit the site and stay on for updates.',
  },
];

const relatedServices = [
  {
    number: '01',
    title: 'Shopify Development',
    description: 'Hosted stores that are quick to launch.',
    link: '/shopify-development-services',
    linkText: 'Explore Shopify development',
  },
  {
    number: '02',
    title: 'Magento Development',
    description: 'Large catalogs and complex stores.',
    link: '/magento-development-services',
    linkText: 'Explore Magento development',
  },
  {
    number: '03',
    title: 'Salesforce Integration Services',
    description: 'Send form leads to Salesforce.',
    link: '/salesforce-integration-services',
    linkText: 'Explore integration services',
  },
];

const reasons = [
  {
    number: '01',
    title: 'One Team for Your Site and Your Systems',
    description:
      'Our web developers work next to our Salesforce team, so your WordPress site can send leads and data straight into your CRM.',
  },
  {
    number: '02',
    title: '120+ Projects for 40+ Clients',
    description:
      'We’ve delivered 120+ projects for 40+ clients across 19+ countries.',
  },
  {
    number: '03',
    title: 'US Time-Zone Overlap',
    description:
      'Our team is based in Jaipur, India. We agree on overlapping working hours, so we can join your meetings and reviews.',
  },
  {
    number: '04',
    title: '24/7 Support After Launch',
    description:
      'Support is available 24/7, and every request gets a reply within 24 hours through our ticket portal or email.',
  },
  {
    number: '05',
    title: 'Security and Confidentiality',
    description:
      'Saasverse is ISO 27001 and Cyber Essentials Plus certified. We sign an NDA before we access your code or systems.',
  },
];

export const metadata: Metadata = {
  title: 'WordPress Development Services | Saasverse',
  description:
    'WordPress development services: custom block themes, plugins, WooCommerce stores, speed and security fixes, migrations and ongoing support.',
  alternates: {
    canonical:
      'https://www.saasverse.in/wordpress-development-services',
  },
  openGraph: {
    title: 'WordPress Development Services | Saasverse',
    description:
      'WordPress development services: custom block themes, plugins, WooCommerce stores, speed and security fixes, migrations and ongoing support.',
    url: 'https://www.saasverse.in/wordpress-development-services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordPress Development Services | Saasverse',
    description:
      'WordPress development services: custom block themes, plugins, WooCommerce stores, speed and security fixes, migrations and ongoing support.',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WordPress Development Services',
  url: 'https://www.saasverse.in/wordpress-development-services',
  description:
    'WordPress development services: custom block themes, plugins, WooCommerce stores, speed and security fixes, migrations and ongoing support.',
  serviceType: 'WordPress development',
  provider: {
    '@type': 'Organization',
    name: 'Saasverse Pvt. Ltd.',
    url: 'https://www.saasverse.in',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const page = () => {
  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero Section */}
      <PageBanner2
        image="/images/banner/dotnet.webp"
        title="Custom WordPress Development Services"
        description="We build WordPress sites your team can edit without a developer, and keep them fast and secure."
      />



      {/* What We Do */}
      <SalesforceServiceReuseable
        heading="What We Do"
        benefits={benefits}
      />

      {/* Is WordPress the Right Choice */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              Platform Comparison
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Is WordPress the Right Choice?
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              Different platforms suit different business needs. We help you
              choose the right platform based on your website and business
              requirements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {platformOptions.map((option) => (
              <div
                key={option.number}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#003e95]/40 hover:shadow-xl sm:p-9"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#003e95]/10 text-lg font-bold text-[#003e95] transition-colors duration-300 group-hover:bg-[#003e95] group-hover:text-white">
                  {option.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-gray-900 sm:text-2xl">
                  {option.title}
                </h3>

                <div className="mt-4 text-base leading-7 text-gray-600">
                  {option.description}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-base font-medium text-gray-700 sm:text-lg">
            We build on all three, so we’ll tell you which one fits.
          </p>
        </div>
      </section>

      {/* Signs Your WordPress Site Needs Work */}
      <section className="bg-[#fbfaf7] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              Website Performance
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Signs Your WordPress Site Needs Work
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {warningSigns.map((item) => (
              <div
                key={item.number}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#003e95]/40 hover:shadow-lg sm:p-7"
              >
                <span className="text-sm font-bold tracking-widest text-[#003e95]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-lg font-bold leading-snug text-gray-900 sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <HealthSolution
        title="How a WordPress Project Works"
        highlight=""
        description=""
        image="/images/websiteimages/21.jpg"
        imageAlt="WordPress Development Process"
        solutions={projectSteps.map((step) => ({
          title: step.title,
          description: step.description,
        }))}
      />

      {/* Development Cost */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#003e95] px-6 py-10 text-white shadow-xl sm:px-12 sm:py-14 lg:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10"
            />

            <div className="relative z-10 max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
                Transparent Planning
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                What WordPress Development Costs
              </h2>

              <p className="mt-6 text-base leading-8 text-white/85 sm:text-lg">
                The cost depends on your requirements: custom design, the
                number of page types, plugins and integrations, and whether
                you need a store.
              </p>

              <p className="mt-4 text-base leading-8 text-white/85 sm:text-lg">
                After the discovery call, we send you a written scope with the
                cost and timeline. Hosting and paid plugins are separate from
                our work.
              </p>

              <Link
                href="contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white px-7 py-4 text-center text-sm font-semibold text-[#003e95] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 sm:w-auto sm:text-base"
              >
                Book a Free Consultation

                <svg
                  className="ml-2 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-7-7 7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="w-full bg-[#fbfaf7] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              Explore Our Services
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Related Services
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map((service) => (
              <div
                key={service.number}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#003e95]/40 hover:shadow-xl"
              >
                <span className="text-sm font-bold tracking-widest text-[#003e95]">
                  {service.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-gray-600">
                  {service.description}
                </p>

                <Link
                  href={service.link}
                  className="mt-5 inline-flex items-center font-semibold text-[#003e95] hover:underline"
                >
                  {service.linkText}

                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m-7-7 7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Saasverse */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              Why Choose Saasverse
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Why Choose Saasverse for WordPress Development
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#003e95]/40 hover:shadow-lg sm:p-7"
              >
                <span className="text-sm font-bold tracking-widest text-[#003e95]">
                  {reason.number}
                </span>

                <h3 className="mt-4 text-lg font-bold leading-snug text-gray-900 sm:text-xl">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                  {reason.description}
                </p>
              </div>
            ))}

            {/* Clutch Reviews */}
            <div className="flex flex-col items-start rounded-2xl border border-[#003e95]/20 bg-blue-50/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
              <span className="text-sm font-bold tracking-widest text-[#043e8f]">
                06
              </span>

              <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                Rated 5.0 on Clutch
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                See what our clients say about working with us.
              </p>

              <a
                href="https://clutch.co/profile/saasverse-salesforce-consulting-partner"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center font-semibold text-[#003e95] hover:underline"
              >
                Read our reviews

                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17 17 7M8 7h9v9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqReuseable
        title="WordPress Development FAQs"
        faqs={faqs}
      />

    
            <ContactForm />
    </>
  );
};

export default page;