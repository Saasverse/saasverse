import React from 'react';
import PageBanner from '../components/PageBanner';
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';
import CTASection from '../components/Home/CTASection';
import { Metadata } from 'next';
import Link from 'next/link';

const linkClass =
  'font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900';

/* ------------------------------ Links ------------------------------ */
// TODO: confirm these URLs match your live pages
const INTEGRATION_URL = '/salesforce-integration-services';
const INTEGRATION_GUIDE_URL = '/blog/salesforce-integration-types-tools-patterns';
const CUSTOM_DEV_URL = '/salesforce-custom-development-services';
const ARCHITECT_URL = '/hire-salesforce-architect';
const MANAGED_SERVICES_URL = '/salesforce-managed-services';
const CLUTCH_URL = 'https://clutch.co/profile/saasverse';

/* ---------------------------------- FAQs ---------------------------------- */
const faqs = [
  {
    question: 'What is MuleSoft?',
    answer:
      'MuleSoft is Salesforce’s integration platform. Its Anypoint Platform is used to build, deploy, secure and monitor APIs that connect your systems.',
  },
  {
    question: 'Do we need MuleSoft to integrate Salesforce?',
    answer:
      'Not always. For one or two connections, Salesforce APIs or a ready-made connector are often enough. MuleSoft makes sense when you connect many systems and want reusable APIs.',
  },
  {
    question: 'What is API-led connectivity?',
    answer:
      'It’s MuleSoft’s way of splitting integrations into three layers: system APIs, process APIs and experience APIs. New connections reuse the layers already built.',
  },
  {
    question: 'What is the difference between Anypoint Platform and MuleSoft Composer?',
    answer:
      'Anypoint Platform is for developers building full integrations. MuleSoft Composer is a no-code tool for simple flows that business users can set up themselves.',
  },
  {
    question: 'Where do Mule apps run?',
    answer:
      'On CloudHub 2.0, MuleSoft’s cloud, on Runtime Fabric, or on your own servers. We help you choose based on your security and hosting needs.',
  },
  {
    question: 'Can you upgrade our Mule 3 apps to Mule 4?',
    answer:
      'Yes. We move them one app at a time, rewrite what has to change and test each one before it goes live.',
  },
  {
    question: 'Can you take over MuleSoft apps another partner built?',
    answer:
      'Yes. We review the apps, document how they work, fix what’s risky and then take over support.',
  },
  {
    question: 'Are your developers MuleSoft certified?',
    answer:
      'Yes. Our team includes MuleSoft-certified developers. Each profile we share lists that person’s own certifications.',
  },
  {
    question: 'How do you test MuleSoft integrations?',
    answer:
      'With MUnit tests for every flow, then end-to-end tests with real data in a non-production environment before go-live.',
  },
  {
    question: 'Do we need to buy MuleSoft licenses?',
    answer:
      'Yes. MuleSoft licenses are bought from Salesforce. We can help you work out which parts of the platform you need before you buy.',
  },
  {
    question: 'What does MuleSoft development cost?',
    answer:
      'The cost depends on your requirements: the number of systems and APIs, data volumes, real-time or batch, and where the apps run. We send you the cost in writing after the discovery call.',
  },
  {
    question: 'Do you provide support after go-live?',
    answer:
      'Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you’ll get a reply within 24 hours.',
  },
];

/* ------------------------------ Schema (JSON-LD) ------------------------------ */
// The doc's Appendix A was not included, so these blocks are built from the page copy.
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'MuleSoft Development Services',
  url: 'https://www.saasverse.in/mulesoft-development',
  description:
    'MuleSoft development services: API-led integrations on Anypoint Platform, Salesforce connections, Mule 4 upgrades and support from certified developers.',
  serviceType: 'MuleSoft development',
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
      name: 'MuleSoft Development Services',
      item: 'https://www.saasverse.in/mulesoft-development',
    },
  ],
};

const schemas = [serviceSchema, faqSchema, breadcrumbSchema];

/* ------------------------------ Card sections ------------------------------ */
const whatWeBuild = [
  {
    title: 'API-Led Integrations',
    description:
      'We build system, process and experience APIs, so each new connection reuses the work already done.',
  },
  {
    title: 'Salesforce and ERP Connections',
    description:
      'We connect Salesforce to NetSuite, SAP, Microsoft Dynamics and other ERPs, so orders, invoices and stock levels match.',
  },
  {
    title: 'Data Transformations',
    description:
      'We write DataWeave transformations that map fields and formats between systems.',
  },
  {
    title: 'Real-Time and Batch Flows',
    description:
      'We use events and queues for data that must move straight away, and batch jobs for large volumes.',
  },
  {
    title: 'API Security and Management',
    description:
      'We set up policies in API Manager, such as client ID checks, rate limits and OAuth.',
  },
  {
    title: 'Deployment',
    description:
      'We deploy Mule apps to CloudHub 2.0, Runtime Fabric or your own servers, with CI/CD pipelines.',
  },
  {
    title: 'Monitoring and Alerts',
    description:
      'We set up Anypoint Monitoring and alerts, so failed messages are caught and retried.',
  },
  {
    title: 'Mule 3 to Mule 4 Upgrades',
    description:
      'We move older Mule 3 apps to Mule 4, one app at a time, and test each one before it goes live.',
  },
];

const apiLayers = [
  {
    title: 'System APIs',
    text: 'One API for each core system, such as Salesforce, your ERP or your database.',
  },
  {
    title: 'Process APIs',
    text: 'APIs that combine data from several systems for one business process, such as order to cash.',
  },
  {
    title: 'Experience APIs',
    text: 'APIs shaped for one channel, such as your website, a mobile app or a partner portal.',
  },
];

const steps = [
  {
    title: 'Discovery Call',
    text: 'Tell us which systems you want to connect, what data needs to move and how often. We sign an NDA first.',
  },
  {
    title: 'API Design',
    text: 'We design the APIs and write the specs, so everyone agrees on them before the build.',
  },
  {
    title: 'Scope and Plan',
    text: 'We send you a written scope with the timeline and cost. Nothing starts until you approve it.',
  },
  {
    title: 'Build and Test',
    text: 'We build the Mule apps, write MUnit tests and test with real data in a non-production environment.',
  },
  {
    title: 'Deploy',
    text: 'We deploy through a pipeline to CloudHub, Runtime Fabric or your servers, and set up monitoring.',
  },
  {
    title: 'Handover and Support',
    text: 'We hand over the code, specs and runbooks, and stay on to support you after go-live.',
  },
];

const howWeBuild = [
  {
    title: 'MUnit Tests',
    description:
      'Every flow has MUnit tests, so changes don’t break what already works.',
  },
  {
    title: 'Reusable Assets',
    description:
      'We publish APIs, specs and templates to Anypoint Exchange, so your team can reuse them.',
  },
  {
    title: 'CI/CD Pipelines',
    description: 'Builds and deployments run the same way every time.',
  },
  {
    title: 'Error Handling',
    description:
      'Every flow logs failures, sends alerts and retries where it makes sense.',
  },
  {
    title: 'Secure Properties',
    description:
      'Passwords and keys are encrypted, never stored as plain text in the code.',
  },
  {
    title: 'Documentation',
    description:
      'You get API specs and runbooks, so your team or any future partner can maintain the integrations.',
  },
];

const relatedServices = [
  {
    title: 'Salesforce Integration Services',
    intro: 'Connect Salesforce to your other systems with any tool.',
    linkText: 'Explore integration services.',
    href: INTEGRATION_URL,
  },
  {
    title: 'Salesforce Custom Development',
    intro: 'Apex and Lightning Web Components inside Salesforce.',
    linkText: 'Explore custom development.',
    href: CUSTOM_DEV_URL,
  },
  {
    title: 'Hire a Salesforce Architect',
    intro: 'Someone to design the whole integration landscape.',
    linkText: 'Hire a Salesforce architect.',
    href: ARCHITECT_URL,
  },
  {
    title: 'Salesforce Managed Services',
    intro: 'Ongoing help with your org and its integrations.',
    linkText: 'Explore managed services.',
    href: MANAGED_SERVICES_URL,
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
      'Our MuleSoft developers work next to our Salesforce consultants and architects, so both ends of every integration are built by the same team.',
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
const PAGE_URL = 'https://www.saasverse.in/mulesoft-development';
const PAGE_TITLE = 'MuleSoft Development Services | Saasverse';
const PAGE_DESCRIPTION =
  'MuleSoft development services: API-led integrations on Anypoint Platform, Salesforce connections, Mule 4 upgrades and support from certified developers.';

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
      {/* 1. Hero: H1, one line (keep the existing trust line as it is) */}
      <PageBanner
        image="/images/banner/hirebanner.webp"
        title="MuleSoft Development Services"
        description="Certified MuleSoft developers who connect Salesforce to the rest of your systems with reusable APIs."
      />

      {/* 2. What We Build With MuleSoft (8 cards) */}
      <div id="what-we-build">
        <SalesforceServiceReuseable
          heading="What We Build With MuleSoft"
          benefits={whatWeBuild}
        />
      </div>

      {/* 3. How API-Led Connectivity Works (3 cards) */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-4 text-center text-3xl font-semibold">
          How API-Led Connectivity Works
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-gray-700">
          MuleSoft’s approach splits each integration into three layers. It
          takes more planning up front, but every new system after the first one
          is faster to connect.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {apiLayers.map((l) => (
            <div key={l.title} className="rounded-lg border border-gray-200 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">{l.title}</h3>
              <p className="text-gray-700">{l.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Do You Need MuleSoft? */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold">Do You Need MuleSoft?</h2>
        <p className="text-gray-700">
          Not always. If Salesforce only needs to talk to one or two systems, a
          direct API connection or a ready-made connector is often enough.
          MuleSoft pays off when you connect many systems and want to reuse APIs
          and monitor them in one place. Our{' '}
          <Link href={INTEGRATION_URL} className={linkClass}>
            Salesforce integration services
          </Link>{' '}
          team helps you choose, and our guide to{' '}
          <Link href={INTEGRATION_GUIDE_URL} className={linkClass}>
            Salesforce integration types, tools and patterns
          </Link>{' '}
          explains the options.
        </p>
      </section>

      {/* 5. How a MuleSoft Project Works (6 steps) */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          How a MuleSoft Project Works
        </h2>
        <ol className="space-y-4">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-4 rounded-lg border border-gray-200 p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-700 font-semibold text-white">
                {i + 1}
              </span>
              <p className="text-gray-700">
                <strong className="text-gray-900">{s.title}.</strong> {s.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* 6. How We Build (6 cards) */}
      <SalesforceServiceReuseable heading="How We Build" benefits={howWeBuild} />

      {/* 7. Cost (no prices) + button */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold">What MuleSoft Development Costs</h2>
        <p className="text-gray-700">
          The cost depends on your requirements: how many systems and APIs are
          involved, the data volumes, real-time or batch, where the apps run and
          how much existing work can be reused. After the discovery call, we
          send you a written scope with the cost and timeline. MuleSoft licenses
          are bought from Salesforce and are separate from our work.
        </p>
        <a
          href="#book-a-free-consultation"
          className="mt-6 inline-block rounded-md bg-[#003e95] px-6 py-3 font-medium text-white hover:bg-blue-900"
        >
          Book a Free Consultation
        </a>
      </section>

      {/* 8. Related Services (4 cards with links) */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-semibold">Related Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {relatedServices.map((s) => (
            <div key={s.title} className="rounded-lg border border-gray-200 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-700">
                {s.intro}{' '}
                <Link href={s.href} className={linkClass}>
                  {s.linkText}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Why Choose Saasverse (6 cards) */}
      <SalesforceServiceReuseable
        heading="Why Choose Saasverse for MuleSoft Development"
        benefits={whySaasverse}
      />

      {/* 10. Credentials badge carousel (kept) */}
      <CertificateSlider />

      {/* 11. Logo wall (kept) */}
      <OurPartners />

      {/* 12. FAQs (12 questions) */}
      <FaqReuseable title="MuleSoft Development FAQs" faqs={faqs} />

      {/* Schema: Service + FAQPage + BreadcrumbList */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
          }}
        />
      ))}

      {/* 13. Form: Book a Free Salesforce Consultation */}
      <div id="book-a-free-consultation">
        {/* TODO: ContactForm ke andar ye content set karna hai:
            heading: "Book a Free Salesforce Consultation"
            intro: (doc mein nahi diya, Form section missing hai)
            dropdown: (doc mein nahi diya)
            note: "No spam. We’ll only use this to respond to your inquiry."
            button: "Book a Free Consultation" */}
        <CTASection />
        <ContactForm />
      </div>
    </>
  );
};

export default page;