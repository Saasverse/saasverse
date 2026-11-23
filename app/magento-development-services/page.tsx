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
    question: 'What is the difference between Magento Open Source and Adobe Commerce?',
    answer:
      'Magento Open Source is the free version. Adobe Commerce is the paid version from Adobe, with extra features such as B2B tools and Adobe’s cloud hosting.',
  },
  {
    question: 'Should we choose Magento or Shopify?',
    answer:
      'Magento suits large catalogs, complex pricing, B2B and full control of the code. Shopify suits brands that want a hosted store that is quick to launch and easy to run. We build on both.',
  },
  {
    question: 'Is Magento a good fit for a small store?',
    answer:
      'Sometimes, but it needs more upkeep than hosted platforms. For a small store, Shopify or WooCommerce is often simpler. We’ll tell you which fits.',
  },
  {
    question: 'We’re still on Magento 1. What should we do?',
    answer:
      'Magento 1 stopped getting updates in 2020, so it is a security risk. We can move you to Magento 2, Adobe Commerce or another platform.',
  },
  {
    question: 'Can you upgrade our Magento 2 store?',
    answer:
      'Yes. We upgrade to a supported version, update extensions and test checkout and orders on a staging store first.',
  },
  {
    question: 'Can you build custom Magento extensions?',
    answer:
      'Yes. We build custom extensions and fix or replace third-party ones that cause problems.',
  },
  {
    question: 'Can Magento connect to our ERP or Salesforce?',
    answer:
      'Yes. We connect Magento to your ERP and to Salesforce, so orders, products and customers stay in sync.',
  },
  {
    question: 'Does Magento make our store PCI compliant?',
    answer:
      'No platform does that on its own. PCI compliance depends on your payment setup, hosting and processes. We help you choose payment options that reduce what you have to manage.',
  },
  {
    question: 'Can you take over a store another developer built?',
    answer:
      'Yes. We review the code and extensions, document what we find and then take over support.',
  },
  {
    question: 'How long does a Magento project take?',
    answer:
      'It depends on the catalog, features and integrations. You’ll get a timeline in the written scope before any work starts.',
  },
  {
    question: 'What does Magento development cost?',
    answer:
      'The cost depends on your requirements: the catalog, custom features, extensions and integrations. We send you the cost in writing after the discovery call.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you’ll get a reply within 24 hours.',
  },
];

const benefits = [
  {
    title: 'New Magento Stores',
    description:
      'We build stores on Magento Open Source or Adobe Commerce, from the catalog and checkout to the admin your team uses.',
  },
  {
    title: 'Store Design',
    description:
      'We design and build themes that match your brand and work well on phones.',
  },
  {
    title: 'Upgrades and Patches',
    description:
      'We upgrade older Magento 2 versions, apply security patches and move stores still on Magento 1.',
  },
  {
    title: 'Extensions',
    description:
      'We build custom extensions and set up and fix third-party ones.',
  },
  {
    title: 'Payments and Shipping',
    description:
      'We connect payment gateways and carriers such as FedEx and UPS, so checkout and shipping rates work.',
  },
  {
    title: 'ERP and CRM Integrations',
    description: (
      <>
        We connect your store to your ERP and to Salesforce, so orders and
        customers flow without re-typing. Explore our{' '}
        <Link
          href="/salesforce-integration-services"
          className="font-semibold text-[#003e95] hover:underline"
        >
          Salesforce Integration Services
        </Link>
        .
      </>
    ),
  },
  {
    title: 'Speed Fixes',
    description:
      'We find what slows your store down, such as extensions, images or caching, and fix it.',
  },
  {
    title: 'Support and Maintenance',
    description:
      'We fix bugs, keep extensions up to date and make small changes to your live store.',
  },
];

const platformOptions = [
  {
    number: '01',
    title: 'Magento or Adobe Commerce',
    description:
      'For large catalogs, complex pricing, B2B features or many stores from one admin, when you want full control of the code.',
  },
  {
    number: '02',
    title: 'Shopify',
    description: (
      <>
        For brands that want a hosted store that’s quick to launch and easy to
        run. Explore{' '}
        <Link
          href="/shopify-development-services"
          className="font-semibold text-[#003e95] hover:underline"
        >
          Shopify development
        </Link>
        .
      </>
    ),
  },
  {
    number: '03',
    title: 'WordPress With WooCommerce',
    description: (
      <>
        For content-led sites with a smaller store. Explore{' '}
        <Link
          href="/wordpress-development-services"
          className="font-semibold text-[#003e95] hover:underline"
        >
          WordPress development
        </Link>
        .
      </>
    ),
  },
];

const warningSigns = [
  {
    number: '01',
    title: 'Still on Magento 1',
    description:
      'Magento 1 stopped getting updates in 2020, and your store still runs on it.',
  },
  {
    number: '02',
    title: 'Behind on Patches',
    description:
      'Security patches haven’t been applied for months.',
  },
  {
    number: '03',
    title: 'Slow Pages',
    description:
      'Product and category pages load slowly, and shoppers leave.',
  },
  {
    number: '04',
    title: 'Extensions Clash',
    description:
      'Every update breaks something because extensions conflict.',
  },
  {
    number: '05',
    title: 'Orders Typed Into the ERP',
    description:
      'Staff copy orders from Magento into other systems by hand.',
  },
  {
    number: '06',
    title: 'Nobody Knows the Code',
    description:
      'The original developer left, and nobody wants to touch the store.',
  },
];

const reasons = [
  {
    number: '01',
    title: 'One Team for Your Site and Your Systems',
    description:
      'Our ecommerce developers work next to our Salesforce and integration team, so your store, ERP and CRM can share orders and customers.',
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
  {
    number: '06',
    title: 'Rated 5.0 on Clutch',
    description:
      'See what our clients say about working with us. Read our reviews.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Magento Development Services',
  url: 'https://www.saasverse.in/magento-development-services',
  description:
    'Magento and Adobe Commerce development: new stores, Magento 2 upgrades, extensions, payment and shipping integrations, performance fixes and support.',
  serviceType: 'Magento and Adobe Commerce development',
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

export const metadata: Metadata = {
  title: 'Magento Development Services | Saasverse',
  description:
    'Magento and Adobe Commerce development: new stores, Magento 2 upgrades, extensions, payment and shipping integrations, performance fixes and support.',
  alternates: {
    canonical: 'https://www.saasverse.in/magento-development-services',
  },
  openGraph: {
    title: 'Magento Development Services | Saasverse',
    description:
      'Magento and Adobe Commerce development: new stores, Magento 2 upgrades, extensions, payment and shipping integrations, performance fixes and support.',
    url: 'https://www.saasverse.in/magento-development-services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magento Development Services | Saasverse',
    description:
      'Magento and Adobe Commerce development: new stores, Magento 2 upgrades, extensions, payment and shipping integrations, performance fixes and support.',
  },
};

const page = () => {
  return (
    <>
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero Section */}
      <PageBanner2
        image="/images/banner/mage.webp"
        title="Magento Development Services"
        description="We build, upgrade and look after Magento and Adobe Commerce stores for growing online brands."
      />

     

      {/* What We Do */}
      <div id="what-we-do">
        <SalesforceServiceReuseable
          heading="What We Do"
          benefits={benefits}
        />
      </div>

      {/* Magento, Shopify or WordPress */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              Choose the Right Platform
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Magento, Shopify or WordPress?
            </h2>
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

          <p className="mt-9 text-center text-base leading-7 text-gray-600 sm:text-lg">
            We build on all three, so we’ll tell you which one fits.
          </p>
        </div>
      </section>

      {/* Signs Your Magento Store Needs Work */}
      <section className="bg-[#fbfaf7] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              Store Performance
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Signs Your Magento Store Needs Work
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

      {/* How a Magento Project Works */}
      <HealthSolution
        title="How a Magento Project Works"
        highlight=""
        description=""
        image="/images/websiteimages/21.jpg"
        imageAlt="Magento Development Project Process"
        solutions={[
          {
            title: 'Discovery Call',
            description:
              'Tell us about your store, your Magento version and what you want to change. If you’d like an NDA first, we’ll sign one.',
          },
          {
            title: 'Store Review',
            description:
              'We review the code, extensions, hosting and speed.',
          },
          {
            title: 'Scope and Plan',
            description:
              'We send you a written scope with the timeline and cost. Nothing starts until you approve it.',
          },
          {
            title: 'Build in a Staging Store',
            description:
              'We work on a copy of your store, never on the live one.',
          },
          {
            title: 'Test Checkout and Orders',
            description:
              'We test browsing, checkout, payments, shipping and order flow before launch.',
          },
          {
            title: 'Launch and Support',
            description:
              'We go live at a quiet time and stay on to fix issues after launch.',
          },
        ]}
      />

      {/* Magento Development Costs */}
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
                What Magento Development Costs
              </h2>

              <p className="mt-6 text-base leading-8 text-white/85 sm:text-lg">
                The cost depends on your requirements: the size of your
                catalog, custom features and extensions, integrations, and
                whether you’re on Magento Open Source or Adobe Commerce. After
                the discovery call, we send you a written scope with the cost
                and timeline. Adobe Commerce licenses are bought from Adobe
                and are separate from our work.
              </p>

              <Link
                href="/contact-us"
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
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              Explore More
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Related Services
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">
                Shopify Development
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Hosted stores that are quick to launch.
              </p>

              <Link
                href="/shopify-development-services"
                className="mt-5 inline-flex font-semibold text-[#003e95] hover:underline"
              >
                Explore Shopify development
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">
                WordPress Development
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Content sites and WooCommerce stores.
              </p>

              <Link
                href="/wordpress-development-services"
                className="mt-5 inline-flex font-semibold text-[#003e95] hover:underline"
              >
                Explore WordPress development
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">
                Salesforce Integration Services
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Send orders and customers to Salesforce.
              </p>

              <Link
                href="/salesforce-integration-services"
                className="mt-5 inline-flex font-semibold text-[#003e95] hover:underline"
              >
                Explore integration services
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
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
              Why Choose Saasverse for Magento Development
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

                {reason.title === 'Rated 5.0 on Clutch' && (
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
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqReuseable title="Magento Development FAQs" faqs={faqs} />

      {/* Consultation Form */}
      <section
        id="book-a-free-consultation"
        className="scroll-mt-24 bg-[#fbfaf7] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              Let’s Discuss Your Store
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Book a Free Consultation
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              Tell us about your store, your Magento version and what you want
              to change. We’ll reply within 24 hours.
            </p>
          </div>

          <ContactForm />

          <p className="mt-5 text-center text-sm text-gray-500">
            No spam. We’ll only use this to respond to your inquiry.
          </p>
        </div>
      </section>
    </>
  );
};

export default page;