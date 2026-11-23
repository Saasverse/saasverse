import React from 'react';
import PageBanner from '../components/PageBanner';
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';
import { Metadata } from 'next';
import Link from 'next/link';

const linkClass =
  'font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900';

/* ------------------------------ Links ------------------------------ */
const SALES_CLOUD_URL = '/salesforce-sales-cloud-services';
const SERVICE_CLOUD_URL = '/salesforce-service-cloud-services';
const INTEGRATION_URL = '/salesforce-integration-services';
const AI_URL = '/salesforce-ai-services';
const CLUTCH_URL = 'https://clutch.co/profile/saasverse';

/* ---------------------------------- FAQs ---------------------------------- */
const faqs = [
  {
    question: 'What is Salesforce CRM Analytics?',
    answer:
      'CRM Analytics is Salesforce’s analytics product inside Salesforce. It builds dashboards on Salesforce data and data from other systems, and can add predictions.',
  },
  {
    question: 'Is CRM Analytics the same as Tableau CRM and Einstein Analytics?',
    answer:
      'Yes. Einstein Analytics was renamed Tableau CRM, and Tableau CRM was renamed CRM Analytics. It’s the same product.',
  },
  {
    question: 'What is the difference between CRM Analytics and Tableau?',
    answer:
      'CRM Analytics works inside Salesforce, on record pages and in the Salesforce app. Tableau is a separate product for company-wide analytics across many sources.',
  },
  {
    question: 'Do we need CRM Analytics, or are Salesforce reports enough?',
    answer:
      'Standard reports are enough for many teams. CRM Analytics helps when you have large data, data from other systems, or need charts on record pages and predictions.',
  },
  {
    question: 'Can CRM Analytics use data from outside Salesforce?',
    answer:
      'Yes. We bring in data from your ERP, billing system or data warehouse, and join it with Salesforce data.',
  },
  {
    question: 'Will users see only their own data?',
    answer:
      'Yes. We set up row-level security so each user sees only what matches their Salesforce access.',
  },
  {
    question: 'Can you fix slow or broken dashboards?',
    answer:
      'Yes. We review the recipes, datasets and dashboards, fix what is broken and speed up what is slow.',
  },
  {
    question: 'Can CRM Analytics predict which deals will close?',
    answer:
      'Yes. It can score deals or accounts and show the reasons behind each score. We check the results against your past data first.',
  },
  {
    question: 'How long does a CRM Analytics project take?',
    answer:
      'It depends on the number of dashboards and data sources. You’ll get a timeline in the written scope before any work starts.',
  },
  {
    question: 'Do you train our team?',
    answer:
      'Yes. We show managers how to use the dashboards and admins how to keep recipes and datasets running.',
  },
  {
    question: 'What do CRM Analytics services cost?',
    answer:
      'The cost depends on your requirements: dashboards, teams, data sources and predictions. We send you the cost in writing after the discovery call.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you’ll get a reply within 24 hours.',
  },
];

/* ------------------------------ Schema (JSON-LD) ------------------------------ */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Salesforce CRM Analytics Services',
  url: 'https://www.saasverse.in/tableau-crm',
  description:
    'Salesforce CRM Analytics (formerly Tableau CRM and Einstein Analytics) services: dashboards, data recipes, external data and forecasts inside Salesforce.',
  serviceType: 'Salesforce CRM Analytics consulting and implementation',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.saasverse.in/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Salesforce CRM Analytics Services',
      item: 'https://www.saasverse.in/tableau-crm',
    },
  ],
};

const schemas = [serviceSchema, faqSchema, breadcrumbSchema];

/* ------------------------------ Page sections ------------------------------ */
const whatWeBuild = [
  {
    title: 'Sales Dashboards',
    description:
      'Pipeline, win rate, deal size and forecast against target, by rep, team and region.',
  },
  {
    title: 'Service Dashboards',
    description:
      'Case volume, backlog, response times and agent workload, in one view for service managers.',
  },
  {
    title: 'Data From Other Systems',
    description:
      'We bring in data from your ERP, billing or data warehouse, so dashboards show the full picture.',
  },
  {
    title: 'Recipes and Data Prep',
    description:
      'We build recipes that clean, join and shape your data on a schedule, so dashboards stay current.',
  },
  {
    title: 'Dashboards on Record Pages',
    description:
      'Charts on the account or opportunity page, so reps see the numbers without leaving the record.',
  },
  {
    title: 'Row-Level Security',
    description:
      'Each user sees only the data they’re allowed to see, matching your Salesforce sharing.',
  },
  {
    title: 'Predictions',
    description:
      'Models that score deals or flag accounts likely to churn, with the reasons behind each score.',
  },
  {
    title: 'Fixes and Speed',
    description:
      'We fix slow dashboards, broken recipes and data that doesn’t match your reports.',
  },
];

const analyticsOptions = [
  {
    title: 'Standard Reports and Dashboards',
    description:
      'Enough for most day-to-day questions on Salesforce data alone.',
  },
  {
    title: 'CRM Analytics',
    description:
      'For larger data, data from other systems, record-page charts and predictions, all inside Salesforce.',
  },
  {
    title: 'Tableau',
    description:
      'For company-wide analytics across many sources, used mostly outside Salesforce.',
  },
];

const reportingSigns = [
  {
    title: 'Numbers Built in Spreadsheets',
    description:
      'Managers export reports every week and rebuild them in Excel.',
  },
  {
    title: 'Reports Don’t Match',
    description:
      'Sales, finance and service each have a different number for the same thing.',
  },
  {
    title: 'Data Lives Elsewhere',
    description:
      'The answers need ERP or billing data that Salesforce reports can’t reach.',
  },
  {
    title: 'Slow Dashboards',
    description:
      'Dashboards take too long to load, so nobody opens them.',
  },
  {
    title: 'Nobody Owns the Dashboards',
    description:
      'They were built years ago, and nobody knows what they show.',
  },
  {
    title: 'Guesswork on Deals',
    description:
      'Reps and managers guess which deals will close.',
  },
];

const steps = [
  {
    title: 'Discovery Call',
    text: 'Tell us which questions you need answered and where the data lives. If you’d like an NDA first, we’ll sign one.',
  },
  {
    title: 'Questions and Data Review',
    text: 'We list the questions each team asks and check the data needed to answer them.',
  },
  {
    title: 'Scope and Plan',
    text: 'We send you a written scope with the timeline and cost. Nothing starts until you approve it.',
  },
  {
    title: 'Build in a Sandbox',
    text: 'We build the recipes, datasets and dashboards, and show you working versions at regular reviews.',
  },
  {
    title: 'Check the Numbers',
    text: 'Your managers and finance team check the numbers against the source before go-live.',
  },
  {
    title: 'Launch and Support',
    text: 'We go live, show your team how to use the dashboards and stay on to fix issues.',
  },
];

const relatedServices = [
  {
    title: 'Sales Cloud',
    intro: 'Clean pipeline data for better dashboards.',
    linkText: 'Explore Sales Cloud services.',
    href: SALES_CLOUD_URL,
  },
  {
    title: 'Service Cloud',
    intro: 'Case and agent data for service dashboards.',
    linkText: 'Explore Service Cloud services.',
    href: SERVICE_CLOUD_URL,
  },
  {
    title: 'Salesforce Integration Services',
    intro: 'Bring ERP and billing data into Salesforce.',
    linkText: 'Explore integration services.',
    href: INTEGRATION_URL,
  },
  {
    title: 'Salesforce AI and Agentforce',
    intro: 'AI that acts on your data.',
    linkText: 'Explore Salesforce AI services.',
    href: AI_URL,
  },
];

const whySaasverse = [
  {
    title: 'Salesforce Partner with Navigator Expert Status',
    description:
      'Salesforce gives Navigator Expert status to partners based on certified experts, completed projects and customer feedback.',
  },
  {
    title: '50+ Certified Salesforce Experts',
    description:
      'Our analytics consultants work with the admins and developers who set up your org, so dashboards are built on data they know is right.',
  },
  {
    title: '120+ Projects for 40+ Clients',
    description:
      'We’ve delivered 120+ projects for 40+ clients across 19+ countries.',
  },
  {
    title: '24/7 Support After Launch',
    description:
      'Support is available 24/7, and every request gets a reply within 24 hours through our ticket portal or email.',
  },
  {
    title: 'Security and Confidentiality',
    description:
      'Saasverse is ISO 27001 and Cyber Essentials Plus certified. We sign an NDA before we access your code or org.',
  },
  {
    title: 'Rated 5.0 on Clutch',
    description: (
      <>
        See what our clients say about working with us.{' '}
        <Link href={CLUTCH_URL} className={linkClass}>
          Read our reviews
        </Link>
      </>
    ),
  },
];

/* -------------------------------- Metadata -------------------------------- */
const PAGE_URL = 'https://www.saasverse.in/tableau-crm';
const PAGE_TITLE = 'Salesforce CRM Analytics Services | Saasverse';
const PAGE_DESCRIPTION =
  'Salesforce CRM Analytics (formerly Tableau CRM and Einstein Analytics) services: dashboards, data recipes, external data and forecasts inside Salesforce.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

/* ---------------------------------- Page ---------------------------------- */
const page = () => {
  return (
    <>
      {/* Keep the existing trust line and canonical URL unchanged. */}
      <PageBanner
        image="/images/banner/hirebanner.webp"
        title="Salesforce CRM Analytics Services"
        description="We build CRM Analytics dashboards that answer your team’s questions inside Salesforce, where they already work."
      />

    

      {/* What We Build: 8 cards */}
      <div id="what-we-build" className="scroll-mt-20">
        <SalesforceServiceReuseable
          heading="What We Build With CRM Analytics"
          benefits={whatWeBuild}
        />
      </div>

      {/* Salesforce Reports, CRM Analytics or Tableau: 3 cards */}
      <SalesforceServiceReuseable
        heading="Salesforce Reports, CRM Analytics or Tableau?"
        benefits={analyticsOptions}
      />
      <p className="mx-auto max-w-3xl px-4 pb-8 text-center text-gray-700">
        We help you pick the simplest option that answers your questions.
      </p>

      {/* Signs Your Reporting Needs Work: 6 cards */}
      <SalesforceServiceReuseable
        heading="Signs Your Reporting Needs Work"
        benefits={reportingSigns}
      />

      {/* How a CRM Analytics Project Works: 6 steps */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          How a CRM Analytics Project Works
        </h2>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-lg border border-gray-200 p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-700 font-semibold text-white">
                {index + 1}
              </span>
              <p className="text-gray-700">
                <strong className="text-gray-900">{step.title}.</strong>{' '}
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Cost section: no prices or rates */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold">
          What CRM Analytics Services Cost
        </h2>
        <p className="text-gray-700">
          The cost depends on your requirements: how many dashboards and teams,
          how many data sources, and whether you need predictions. After the
          discovery call, we send you a written scope with the cost and timeline.
          You can choose a fixed-scope project or time and materials.
        </p>
        <a
          href="#book-a-free-consultation"
          className="mt-6 inline-block rounded-md bg-[#003e95] px-6 py-3 font-medium text-white hover:bg-blue-900"
        >
          Book a Free Consultation
        </a>
      </section>

      {/* Related Clouds and Services: 4 cards */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          Related Clouds and Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {relatedServices.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-gray-200 p-6 shadow-sm"
            >
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-700">
                {service.intro}{' '}
                <Link href={service.href} className={linkClass}>
                  {service.linkText}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Saasverse: 6 cards */}
      <SalesforceServiceReuseable
        heading="Why Choose Saasverse for CRM Analytics"
        benefits={whySaasverse}
      />

      {/* Keep existing credentials and logo wall blocks unchanged. */}
      <CertificateSlider />
      <OurPartners />

      {/* 12 CRM Analytics FAQs */}
      <FaqReuseable title="Salesforce CRM Analytics FAQs" faqs={faqs} />

      {/* Consultation form */}
      <section id="book-a-free-consultation" className="scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 pt-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold">
            Book a Free Salesforce Consultation
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-gray-700">
            Tell us which questions you need answered, which teams need the
            dashboards and where your data lives. We’ll reply within 24 hours.
          </p>
        </div>
        {/*
          Update ContactForm dropdown options to:
          Select a service… | CRM Analytics | Sales Cloud | Service Cloud |
          Salesforce Integration Services | Other
          Add this note below the submit button:
          No spam. We’ll only use this to respond to your inquiry.
        */}
        <div id="contact-form">
          <ContactForm />
        </div>
      </section>

      {/* Floating consultation button */}
      <a
        href="#book-a-free-consultation"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[#003e95] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-900"
      >
        Book a Free Consultation
      </a>

      {/* Service + FAQPage + BreadcrumbList JSON-LD */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
          }}
        />
      ))}
    </>
  );
};

export default page;
