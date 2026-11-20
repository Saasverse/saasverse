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
    question: 'What do Shopify development services include?',
    answer:
      'Store setup, custom themes, apps, checkout extensions, migrations from other platforms, integrations and support after launch.',
  },
  {
    question: 'Should we use Shopify or Shopify Plus?',
    answer:
      'Shopify suits most growing brands. Shopify Plus suits larger brands that need checkout customization, B2B selling, more stores or higher volumes.',
  },
  {
    question: 'Can you move our store from Magento or WooCommerce to Shopify?',
    answer:
      'Yes. We move products, customers and orders, and set up redirects so you keep your search rankings.',
  },
  {
    question: 'Can you build a custom Shopify theme?',
    answer:
      'Yes. We design and build themes that match your brand, work on phones and let your team edit pages without a developer.',
  },
  {
    question: 'Can you build a custom Shopify app?',
    answer:
      'Yes, when no app in the Shopify App Store does what you need.',
  },
  {
    question: 'Can Shopify connect to our ERP or Salesforce?',
    answer:
      'Yes. We connect Shopify to your ERP and to Salesforce, so orders, products and customers stay in sync.',
  },
  {
    question: 'Can you customize the Shopify checkout?',
    answer:
      'On Shopify Plus, yes. We use Shopify’s checkout extensions to add upsells, custom fields and delivery options.',
  },
  {
    question: 'Can we update the store ourselves after launch?',
    answer:
      'Yes. We build the store so your team can add products, edit pages and run sales without a developer, and we show them how.',
  },
  {
    question: 'Can you fix a slow Shopify store?',
    answer:
      'Yes. We look at apps, theme code and images, remove what slows the store down and fix the rest.',
  },
  {
    question: 'How long does a Shopify project take?',
    answer:
      'It depends on the design, the number of products, apps and integrations, and whether you’re moving from another platform. You’ll get a timeline in the written scope before any work starts.',
  },
  {
    question: 'What does Shopify development cost?',
    answer:
      'The cost depends on your requirements: design, products, apps, integrations and migration. We send you the cost in writing after the discovery call.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you’ll get a reply within 24 hours.',
  },
];

const benefits = [
  {
    title: 'Store Setup',
    description:
      'We set up products, collections, payments, shipping, taxes and the admin your team will use.',
  },
  {
    title: 'Custom Themes',
    description:
      'We design and build Shopify themes that match your brand and work well on phones.',
  },
  {
    title: 'Shopify Apps',
    description:
      'We set up apps from the Shopify App Store and build custom apps when nothing fits.',
  },
  {
    title: 'Checkout Extensions',
    description:
      'On Shopify Plus, we customize checkout with Shopify’s checkout extensions, such as upsells, custom fields and delivery options.',
  },
  {
    title: 'Migrations to Shopify',
    description:
      'We move products, customers and orders from Magento, WooCommerce or another platform, with redirects to keep your search rankings.',
  },
  {
    title: 'ERP and CRM Integrations',
    description: (
      <>
        We connect Shopify to your ERP and to Salesforce, so orders and
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
    title: 'Markets and Selling Channels',
    description:
      'We set up selling in other countries and currencies, and connect marketplaces and social channels.',
  },
  {
    title: 'Support and Speed Fixes',
    description:
      'We fix issues, remove apps that slow the store down and make small changes to your live store.',
  },
];

const platformOptions = [
  {
    number: '01',
    title: 'Shopify',
    description:
      'For most growing brands. Quick to launch and easy to run.',
  },
  {
    number: '02',
    title: 'Shopify Plus',
    description:
      'For larger brands that need checkout customization, B2B selling, more stores or higher volumes.',
  },
  {
    number: '03',
    title: 'Another Platform',
    description: (
      <>
        Very large catalogs or complex B2B pricing may suit{' '}
        <Link
          href="/magento-development-services"
          className="font-semibold text-[#003e95] hover:underline"
        >
          Magento
        </Link>{' '}
        better. Content-led sites may suit{' '}
        <Link
          href="/wordpress-development-services"
          className="font-semibold text-[#003e95] hover:underline"
        >
          WordPress with WooCommerce
        </Link>
        .
      </>
    ),
  },
];

const warningSigns = [
  {
    number: '01',
    title: 'Too Many Apps',
    description:
      'Each app adds code, and the store keeps getting slower.',
  },
  {
    number: '02',
    title: 'An Old Theme',
    description:
      'Your theme is hard to edit, and every change needs a developer.',
  },
  {
    number: '03',
    title: 'Orders Typed Into the ERP',
    description:
      'Staff copy orders from Shopify into other systems by hand.',
  },
  {
    number: '04',
    title: 'Checkout Changes on Hold',
    description:
      'You need checkout changes that your current setup can’t handle.',
  },
  {
    number: '05',
    title: 'Moving From Another Platform',
    description:
      'You’re leaving Magento or WooCommerce and worry about losing data or rankings.',
  },
  {
    number: '06',
    title: 'Selling Abroad',
    description:
      'You want to sell in other countries but don’t know where to start.',
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
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shopify Development Services',
  url: 'https://www.saasverse.in/shopify-development-services',
  description:
    'Shopify and Shopify Plus development: store setup, custom themes, apps, checkout extensions, migrations and ERP or Salesforce integrations.',
  serviceType: 'Shopify development',
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
  title: 'Shopify Development Services | Saasverse',
  description:
    'Shopify and Shopify Plus development: store setup, custom themes, apps, checkout extensions, migrations and ERP or Salesforce integrations.',
  alternates: {
    canonical: 'https://www.saasverse.in/shopify-development-services',
  },
  openGraph: {
    title: 'Shopify Development Services | Saasverse',
    description:
      'Shopify and Shopify Plus development: store setup, custom themes, apps, checkout extensions, migrations and ERP or Salesforce integrations.',
    url: 'https://www.saasverse.in/shopify-development-services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Development Services | Saasverse',
    description:
      'Shopify and Shopify Plus development: store setup, custom themes, apps, checkout extensions, migrations and ERP or Salesforce integrations.',
  },
};

const page = () => {
  return (
    <>
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
        image="/images/banner/expbanner.webp"
        title="Shopify Development Services"
        description="We set up, design and grow Shopify and Shopify Plus stores, and connect them to the systems behind your business."
      />

     

      {/* What We Do */}
      <div id="what-we-do">
        <SalesforceServiceReuseable
          heading="What We Do"
          benefits={benefits}
        />
      </div>

      {/* Shopify or Shopify Plus */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              Choose the Right Platform
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Shopify or Shopify Plus?
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
            We build on all of them, so we’ll tell you which one fits.
          </p>
        </div>
      </section>

      {/* Signs Your Shopify Store Needs Work */}
      <section className="bg-[#fbfaf7] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              Store Performance
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Signs Your Shopify Store Needs Work
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

      {/* How a Shopify Project Works */}
      <HealthSolution
        title="How a Shopify Project Works"
        highlight=""
        description=""
        image="/images/websiteimages/21.jpg"
        imageAlt="Shopify Development Project Process"
        solutions={[
          {
            title: 'Discovery Call',
            description:
              'Tell us about your products, your current store and what you want to change. If you’d like an NDA first, we’ll sign one.',
          },
          {
            title: 'Plan and Design',
            description:
              'We agree on the store structure, apps and design with you.',
          },
          {
            title: 'Scope and Plan',
            description:
              'We send you a written scope with the timeline and cost. Nothing starts until you approve it.',
          },
          {
            title: 'Build',
            description:
              'We build the theme, set up apps and integrations, and show you progress at regular reviews.',
          },
          {
            title: 'Test Checkout and Orders',
            description:
              'We test browsing, checkout, payments, shipping and order flow before launch.',
          },
          {
            title: 'Launch and Support',
            description:
              'We go live, check redirects and stay on to fix issues after launch.',
          },
        ]}
      />

      {/* Shopify Development Costs */}
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
                What Shopify Development Costs
              </h2>

              <p className="mt-6 text-base leading-8 text-white/85 sm:text-lg">
                The cost depends on your requirements: custom design, the
                number of products, apps and integrations, and whether you’re
                moving from another platform. After the discovery call, we send
                you a written scope with the cost and timeline. Your Shopify
                plan and app subscriptions are paid to Shopify and app makers,
                separate from our work.
              </p>

              <Link
                href="/contact"
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
                Magento Development
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                For large catalogs and complex B2B stores.
              </p>

              <Link
                href="/magento-development-services"
                className="mt-5 inline-flex font-semibold text-[#003e95] hover:underline"
              >
                Explore Magento development
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
              Why Choose Saasverse for Shopify Development
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
      <FaqReuseable title="Shopify Development FAQs" faqs={faqs} />

    
          <ContactForm />
    </>
  );
};

export default page;