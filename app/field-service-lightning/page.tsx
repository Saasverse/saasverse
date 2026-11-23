import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import PageBanner from '../components/PageBanner';
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';

const PAGE_URL = 'https://www.saasverse.in/field-service-lightning';
const PAGE_TITLE = 'Salesforce Field Service Implementation | Saasverse';
const PAGE_DESCRIPTION =
  'Salesforce Field Service implementation: scheduling, dispatch, the mobile app for technicians, work orders, parts and maintenance plans.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const linkClass = 'font-semibold text-[#003e95] hover:underline';

const whatWeSetUp = [
  {
    title: 'Work Orders and Appointments',
    description:
      'Work orders, service appointments and work types, created from cases, assets or maintenance plans.',
  },
  {
    title: 'Scheduling and Optimization',
    description:
      'Rules that assign jobs by skills, territory, travel time and availability, and re-plan the day when jobs change.',
  },
  {
    title: 'Dispatcher Console',
    description:
      'One screen where dispatchers see the map, the schedule and every technician, and move jobs with drag and drop.',
  },
  {
    title: 'Mobile App for Technicians',
    description:
      'The Field Service mobile app with job details, checklists, photos, signatures and service reports, even without signal.',
  },
  {
    title: 'Parts and Inventory',
    description:
      'Van stock, warehouses, part requests and transfers, so technicians arrive with what they need.',
  },
  {
    title: 'Assets and Maintenance Plans',
    description:
      'Installed assets and preventive maintenance plans that create work orders on schedule.',
  },
  {
    title: 'Customer Updates',
    description:
      'Appointment reminders and “technician on the way” messages, so customers aren’t left waiting.',
  },
  {
    title: 'Connected to Service Cloud',
    description:
      'Cases from Service Cloud turn into work orders, and the agent sees the visit outcome.',
  },
];

const signs = [
  {
    title: 'Scheduling on a Whiteboard',
    description: 'Dispatchers plan the day in spreadsheets and phone calls.',
  },
  {
    title: 'Second Visits for Missing Parts',
    description: 'Technicians arrive without the right part and have to come back.',
  },
  {
    title: 'Paper Job Sheets',
    description: 'Notes, photos and signatures come back on paper, days later.',
  },
  {
    title: 'Customers Wait Without News',
    description: 'Customers call to ask when the technician will arrive.',
  },
  {
    title: 'Missed Maintenance',
    description: 'Preventive visits slip because nobody is reminded.',
  },
  {
    title: 'A Setup Nobody Trusts',
    description: 'Field Service is live, but dispatchers work around it.',
  },
];

const projectSteps = [
  {
    title: 'Discovery Call',
    text: 'Tell us about your technicians, territories and the kind of jobs you do. If you’d like an NDA first, we’ll sign one.',
  },
  {
    title: 'Process Mapping',
    text: 'We ride along with your dispatchers and map how a job moves from request to invoice.',
  },
  {
    title: 'Scope and Plan',
    text: 'We send you a written scope with the timeline and cost. Nothing starts until you approve it.',
  },
  {
    title: 'Build in a Sandbox',
    text: 'We set up work types, territories, scheduling rules and the mobile app in a sandbox.',
  },
  {
    title: 'Field Test',
    text: 'A small group of technicians and dispatchers use it on real jobs before full rollout.',
  },
  {
    title: 'Launch and Support',
    text: 'We roll out by region or team, train your staff and stay on to fix issues after launch.',
  },
];

const relatedServices = [
  {
    title: 'Service Cloud',
    description: 'Cases and customer support that feed your field jobs.',
    href: '/salesforce-service-cloud',
    linkText: 'Explore Service Cloud services.',
  },
  {
    title: 'Salesforce Integration Services',
    description: 'Connect Field Service to your ERP for parts and billing.',
    href: '/salesforce-integration-services',
    linkText: 'Explore integration services.',
  },
  {
    title: 'Experience Cloud',
    description: 'Customer portals to book and track visits.',
    href: '/experience-cloud',
    linkText: 'Explore Experience Cloud services.',
  },
  {
    title: 'Salesforce Managed Services',
    description: 'Ongoing help after launch.',
    href: '/salesforce-managed-services',
    linkText: 'Explore managed services.',
  },
];

const reasons = [
  {
    title: 'Salesforce Partner with Navigator Expert Status',
    description:
      'Salesforce gives Navigator Expert status to partners based on certified experts, completed projects and customer feedback.',
  },
  {
    title: '50+ Certified Salesforce Experts',
    description:
      'Our Field Service consultants work with our developers and integration team, so scheduling, the mobile app and your ERP are planned together.',
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
        <a
          href="https://clutch.co/profile/saasverse"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Read our reviews
        </a>
      </>
    ),
  },
];

const faqs = [
  {
    question: 'What is Salesforce Field Service?',
    answer:
      'Salesforce Field Service, once called Field Service Lightning (FSL), manages work orders, scheduling, dispatch, technicians’ mobile app, parts and maintenance plans inside Salesforce.',
  },
  {
    question: 'Is Field Service Lightning the same as Salesforce Field Service?',
    answer:
      'Yes. Field Service Lightning, or FSL, is the older name for the same product.',
  },
  {
    question: 'Does the mobile app work offline?',
    answer:
      'Yes. Technicians can see job details, fill in forms and capture signatures without signal, and the app syncs when they’re back online.',
  },
  {
    question: 'How does scheduling work?',
    answer:
      'Field Service assigns jobs based on rules you set, such as skills, territory, travel time and working hours. Dispatchers can still move jobs by hand.',
  },
  {
    question: 'Do we need Service Cloud for Field Service?',
    answer:
      'Field Service is usually used with Service Cloud, so cases can turn into work orders. We help you check which licenses you need.',
  },
  {
    question: 'Can Field Service track parts and inventory?',
    answer:
      'Yes. It tracks stock in warehouses and vans, part requests and transfers, so technicians arrive with what they need.',
  },
  {
    question: 'Can Field Service connect to our ERP?',
    answer:
      'Yes. We connect it to your ERP for parts, pricing and billing, so finance doesn’t re-type job data.',
  },
  {
    question: 'Can customers see when the technician will arrive?',
    answer:
      'Yes. We set up reminders and arrival updates, and can add a customer portal to book and track visits.',
  },
  {
    question: 'Can you fix a Field Service setup another partner built?',
    answer:
      'Yes. We review scheduling rules, territories and the mobile setup, list what is wrong and then fix it.',
  },
  {
    question: 'How long does a Field Service implementation take?',
    answer:
      'It depends on the number of technicians, territories and integrations. You’ll get a timeline in the written scope before any work starts.',
  },
  {
    question: 'What does Field Service implementation cost?',
    answer:
      'The cost depends on your requirements: technicians, territories, scheduling rules, parts and integrations. We send you the cost in writing after the discovery call.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you’ll get a reply within 24 hours.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Salesforce Field Service Implementation',
  url: PAGE_URL,
  description: PAGE_DESCRIPTION,
  serviceType: 'Salesforce Field Service implementation',
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
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
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
      name: 'Salesforce Field Service Implementation',
      item: PAGE_URL,
    },
  ],
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <>
      {/*
        The PageBanner component retains the existing trust line:
        Salesforce Partner | Navigator Expert | ISO 27001 Certified | Rated 5.0 on Clutch.
        Update the image alt inside PageBanner to:
        Illustration of a dispatcher assigning field technicians in Salesforce Field Service
      */}
      <PageBanner
        image="/images/banner/expbanner.webp"
        title="Salesforce Field Service Implementation"
        description="We set up Salesforce Field Service so the right technician reaches the right job with the right parts."
      />

     

      {/* What We Set Up */}
      <section id="what-we-set-up" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What We Set Up in Field Service" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeSetUp.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Signs Your Field Service Needs Work */}
      <section className="bg-[#fbfaf7] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Signs Your Field Service Needs Work" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {signs.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-7"
              >
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How a Field Service Project Works */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="How a Field Service Project Works" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-gray-200 p-7"
              >
                <span className="text-sm font-bold tracking-widest text-[#003e95]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Cost */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#003e95] px-6 py-10 text-white shadow-xl sm:px-12 sm:py-14">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
              Transparent Planning
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              What Field Service Implementation Costs
            </h2>
            <p className="mt-6 text-base leading-8 text-white/90 sm:text-lg">
              The cost depends on your requirements: how many technicians and
              territories, how complex your scheduling rules are, whether you
              track parts and assets, and which systems it connects to. After
              the discovery call, we send you a written scope with the cost and
              timeline. You can choose a fixed-scope project or time and
              materials.
            </p>
            <a
              href="#book-a-free-consultation"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 text-sm font-semibold text-[#003e95] transition hover:bg-blue-50 sm:text-base"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Related Clouds and Services */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Related Clouds and Services" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  {service.description}
                </p>
                <Link href={service.href} className={`mt-4 inline-block ${linkClass}`}>
                  {service.linkText}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Saasverse */}
      <section className="bg-[#fbfaf7] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Choose Saasverse for Field Service" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className="rounded-2xl border border-gray-200 bg-white p-7"
              >
                <span className="text-sm font-bold tracking-widest text-[#003e95]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {reason.title}
                </h3>
                <div className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                  {reason.description}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Existing credentials and approved client logos */}
      <CertificateSlider />
      <OurPartners />

      {/* FAQs */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
         
          <FaqReuseable title="Salesforce Field Service FAQs" faqs={faqs} />
        </div>
      </section>

    
            <ContactForm />

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
