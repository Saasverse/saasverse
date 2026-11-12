import React from 'react';
import PageBanner from '../components/PageBanner';
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CTASection from '../components/Home/CTASection';
import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';
import { Metadata } from 'next';
import Link from 'next/link';

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    question: 'What is Salesforce Health Cloud?',
    answer:
      'Health Cloud is Salesforce’s product for healthcare providers and health plans. It brings patient or member details, care plans, referrals and conversations into one place for care and service teams.',
  },
  {
    question: 'Is Salesforce Health Cloud HIPAA compliant?',
    answer:
      'Salesforce signs a Business Associate Addendum for its covered services, and Health Cloud has the tools to protect patient data. Compliance depends on how the org is set up and how your teams use it. We set it up to support your compliance program, and your compliance team signs off.',
  },
  {
    question: 'Can Health Cloud connect to Epic or other EHRs?',
    answer:
      'Yes. We connect Health Cloud to Epic, Oracle Health and other EHRs using FHIR and HL7, often through MuleSoft.',
  },
  {
    question: 'Is Health Cloud only for hospitals?',
    answer:
      'No. Hospitals, clinics, health plans and digital health companies all use it. Providers focus on patients and care teams; health plans focus on members, care management and prior authorization.',
  },
  {
    question: 'Do we need Salesforce Shield?',
    answer:
      'Many healthcare organizations do, for encryption, event monitoring and audit history. We look at your data and compliance needs and tell you which parts you need.',
  },
  {
    question: 'Can patients use a portal?',
    answer:
      'Yes. We build patient and member portals on Experience Cloud, so they can see appointments, care plans and messages.',
  },
  {
    question: 'What is Agentforce for Health?',
    answer:
      'It’s Salesforce’s set of AI agents for healthcare, built on Health Cloud, for tasks such as scheduling and answering patient or member questions. We can help you decide where it fits.',
  },
  {
    question: 'Can you fix a Health Cloud org another partner set up?',
    answer:
      'Yes. We review the setup, access and integrations, list what is risky and then take over support and changes.',
  },
  {
    question: 'How long does a Health Cloud implementation take?',
    answer:
      'It depends on the processes, teams and integrations involved. You’ll get a timeline in the written scope before any work starts.',
  },
  {
    question: 'Do you test with real patient data?',
    answer:
      'No. We test with masked or made-up data in a sandbox. Real data is only loaded in production, with your approval.',
  },
  {
    question: 'What does Health Cloud implementation cost?',
    answer:
      'The cost depends on your requirements: the processes, teams, integrations and whether you need a portal. We send you the cost in writing after the discovery call.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you’ll get a reply within 24 hours.',
  },
];

const whatWeSetUp = [
  {
    title: 'Patient and Member 360',
    description:
      'One record with each patient’s or member’s conditions, care team, coverage, appointments and conversations.',
  },
  {
    title: 'Care Plans and Care Programs',
    description:
      'Care plans with goals, tasks and owners, so nurses and coordinators know who does what next.',
  },
  {
    title: 'Referrals and Intake',
    description:
      'Referrals come in, get checked and are assigned to the right team, instead of sitting in a fax queue.',
  },
  {
    title: 'Appointment Scheduling',
    description:
      'Staff and patients book appointments with the right provider, location and time slot.',
  },
  {
    title: 'Utilization Management',
    description:
      'For health plans, we set up prior authorization requests and reviews, with the documents and decisions on one record.',
  },
  {
    title: 'Provider Network Management',
    description:
      'Provider credentials, contracts and network data kept in one place and up to date.',
  },
  {
    title: 'Patient and Member Portals',
    description:
      'Patients and members check appointments, care plans and messages in a portal built on Experience Cloud.',
  },
  {
    title: 'EHR Integration',
    description:
      'We connect Health Cloud to Epic, Oracle Health and other EHRs using FHIR and HL7, often through MuleSoft.',
  },
];

const whoWeWorkWith = [
  {
    title: 'Hospitals and Clinics',
    description:
      'Patient access, referrals, care coordination and patient communication.',
  },
  {
    title: 'Health Plans',
    description:
      'Member services, care management, prior authorization and provider networks.',
  },
  {
    title: 'Digital Health Companies',
    description: 'Patient programs, remote care and the support teams behind them.',
  },
];

const hipaa = [
  {
    title: 'Business Associate Addendum',
    description:
      'Salesforce signs a Business Associate Addendum (BAA) for its covered services. We help you check which services your setup uses.',
  },
  {
    title: 'Shield',
    description:
      'We set up Salesforce Shield where you need it: encryption for sensitive fields, event monitoring and field audit trail.',
  },
  {
    title: 'Least Access',
    description:
      'Each user sees only the patients and fields their role needs, set with permission sets and sharing rules.',
  },
  {
    title: 'Sandbox Data',
    description: 'We test with masked or made-up data, not real patient records.',
  },
];

const signs = [
  {
    title: 'Care Teams Switch Between Systems',
    description:
      'Nurses check the EHR, a spreadsheet and email to answer one question.',
  },
  {
    title: 'Referrals Get Lost',
    description:
      'Referrals arrive by fax or email, and nobody knows which ones are waiting.',
  },
  {
    title: 'Patients Call for the Basics',
    description: 'Appointment and care plan questions fill up the phone lines.',
  },
  {
    title: 'Care Programs Run on Spreadsheets',
    description:
      'Enrollment, tasks and follow-ups live in files only one person understands.',
  },
  {
    title: 'Prior Authorizations by Email',
    description:
      'Requests and documents move by email and fax, with no clear status.',
  },
  {
    title: 'EHR Data Doesn’t Reach Salesforce',
    description: 'Staff retype patient details, or work without them.',
  },
];

const steps = [
  {
    title: 'Discovery Call',
    description:
      'Tell us who will use Health Cloud, which processes you want to fix and which systems hold patient data. We sign an NDA first.',
  },
  {
    title: 'Process and Data Mapping',
    description:
      'We map your care, referral or member processes and agree which system owns each piece of data.',
  },
  {
    title: 'Scope and Plan',
    description:
      'We send you a written scope with the timeline and cost. Nothing starts until you approve it.',
  },
  {
    title: 'Build in a Sandbox',
    description:
      'We set up Health Cloud and integrations in a sandbox with test data, and show you progress at regular reviews.',
  },
  {
    title: 'Test With Your Staff',
    description:
      'Care teams and your compliance team test the setup before anything goes live.',
  },
  {
    title: 'Launch and Support',
    description:
      'We go live, train your teams and stay on to fix issues after launch.',
  },
];

// TODO: confirm these URLs match your real routes
const related = [
  {
    title: 'Service Cloud',
    text: 'Contact center and case management for patients and members.',
    linkText: 'Explore Service Cloud services',
    href: '/salesforce-service-cloud',
  },
  {
    title: 'Experience Cloud',
    text: 'Patient and member portals.',
    linkText: 'Explore Experience Cloud services',
    href: '/experience-cloud',
  },
  {
    title: 'MuleSoft Development',
    text: 'EHR and claims system integrations.',
    linkText: 'Explore MuleSoft development',
    href: '/mulesoft-development',
  },
  {
    title: 'Salesforce AI and Agentforce',
    text: 'AI agents for scheduling and member questions.',
    linkText: 'Explore Salesforce AI services',
    href: '/salesforce-ai-company',
  },
];

const whyChoose: { title: string; description: React.ReactNode }[] = [
  {
    title: 'Salesforce Partner with Navigator Expert Status',
    description:
      'Salesforce gives Navigator Expert status to partners based on certified experts, completed projects and customer feedback.',
  },
  {
    title: '50+ Certified Salesforce Experts',
    description:
      'Our Health Cloud consultants work with our integration developers and architects, so care processes, data and EHR connections are planned together.',
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
        {/* TODO: replace with your real Clutch profile URL */}
        <a
          href="https://clutch.co/profile/saasverse"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Read our reviews
        </a>
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* METADATA                                                            */
/* ------------------------------------------------------------------ */

const PAGE_URL = 'https://www.saasverse.in/health-cloud-services';
const META_TITLE = 'Salesforce Health Cloud Implementation | Saasverse';
const META_DESC =
  'Salesforce Health Cloud implementation for providers and payers: patient 360, care plans, referrals, portals and EHR integration, set up with care.';

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESC,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESC,
    url: PAGE_URL,
  },
  twitter: {
    title: META_TITLE,
    description: META_DESC,
  },
};

/* ------------------------------------------------------------------ */
/* SCHEMA (JSON-LD)                                                    */
/* ------------------------------------------------------------------ */

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Salesforce Health Cloud Implementation',
  url: PAGE_URL,
  description: META_DESC,
  serviceType: 'Salesforce Health Cloud implementation',
  provider: {
    '@type': 'Organization',
    name: 'Saasverse Pvt. Ltd.',
    url: 'https://www.saasverse.in',
  },
};

// Built from the same `faqs` array, so page copy and schema never drift apart.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

/* ------------------------------------------------------------------ */
/* SMALL REUSABLE SECTION                                              */
/* ------------------------------------------------------------------ */

interface CardItem {
  title: string;
  description: React.ReactNode;
}

const CardSection = ({
  id,
  heading,
  intro,
  items,
  footer,
  columns = 'lg:grid-cols-3',
  numbered = false,
  bg = 'bg-white',
}: {
  id?: string;
  heading: string;
  intro?: string;
  items: CardItem[];
  footer?: React.ReactNode;
  columns?: string;
  numbered?: boolean;
  bg?: string;
}) => (
  <section id={id} className={`${bg} py-16 md:py-20`}>
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="mb-5">{heading}</h2>
        {intro && <p className="leading-7 text-gray-600">{intro}</p>}
      </div>
      <div className={`grid gap-6 sm:grid-cols-2 ${columns}`}>
        {items.map((item, index) => (
          <div
            key={item.title}
            className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#006b95] hover:shadow-lg"
          >
            {numbered && (
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#eaf5f9] text-lg font-semibold text-[#006b95] transition-colors duration-300 group-hover:bg-[#006b95] group-hover:text-white">
                {String(index + 1).padStart(2, '0')}
              </div>
            )}
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="leading-7 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      {footer && (
        <div className="mx-auto mt-10 max-w-3xl text-center leading-7 text-gray-600">
          {footer}
        </div>
      )}
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero: H1, one line, trust line */}
      <PageBanner
        image="/images/banner/banner002.webp"
        title="Salesforce Health Cloud Implementation Services"
        description="We set up Health Cloud for providers and payers, so care teams see the full patient picture in one place."
      />

      {/* 1. What We Set Up in Health Cloud (8 cards) */}
      <div id="what-we-set-up">
        <SalesforceServiceReuseable
          heading="What We Set Up in Health Cloud"
          subheading=""
          benefits={whatWeSetUp}
        />
      </div>

      {/* 2. Who We Work With (3 cards) */}
      <CardSection
        heading="Who We Work With"
        items={whoWeWorkWith}
        bg="bg-gray-50"
        footer={
          <p>
            See how we work with healthcare organizations on our{' '}
            {/* TODO: confirm the industry page route */}
            <Link
              href="/healthcare-industry"
              className="text-blue-600 hover:underline"
            >
              healthcare industry page
            </Link>
            .
          </p>
        }
      />

      {/* 3. Patient Data and HIPAA (4 cards) */}
      <CardSection
        heading="Patient Data and HIPAA"
        intro="HIPAA compliance belongs to your organization. Our job is to set up Salesforce so it supports your compliance program, and to show your compliance team exactly how."
        items={hipaa}
        columns="lg:grid-cols-4"
      />

      {/* 4. Signs Your Patient Data Needs Work (6 cards) */}
      <CardSection
        heading="Signs Your Patient Data Needs Work"
        items={signs}
        bg="bg-gray-50"
      />

      {/* 5. How a Health Cloud Project Works (6 steps) */}
      <CardSection
        heading="How a Health Cloud Project Works"
        items={steps}
        numbered
      />

      {/* 6. Cost (no prices) */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5">What Health Cloud Implementation Costs</h2>
            <p className="leading-7 text-gray-600">
              The cost depends on your requirements: which processes you start
              with, how many teams use it, which EHR and other systems it
              connects to, and whether you need a portal. After the discovery
              call, we send you a written scope with the cost and timeline. You
              can choose a fixed-scope project or time and materials.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Related Clouds and Services (4 cards with links) */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-5">Related Clouds and Services</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#006b95] hover:shadow-lg"
              >
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="leading-7 text-gray-600">
                  {item.text}{' '}
                  <Link
                    href={item.href}
                    className="text-blue-600 hover:underline"
                  >
                    {item.linkText}
                  </Link>
                  .
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why Choose Saasverse for Health Cloud (6 cards) */}
      <CardSection
        heading="Why Choose Saasverse for Health Cloud"
        items={whyChoose}
        bg="bg-gray-50"
      />

      {/* 9. Credentials (kept as is) */}
      <CertificateSlider />

      {/* 10. Logo wall (kept as is) */}
      <OurPartners />

      {/* 11. FAQs */}
      <FaqReuseable title="Salesforce Health Cloud FAQs" faqs={faqs} />

      <CTASection />

      {/*
        ContactForm copy for this page:
        H2: Book a Free Salesforce Consultation
        Intro: Tell us whether you’re a provider, health plan or digital health company, which processes you want to fix and which systems hold patient data today. Please don’t include patient information. We’ll reply within 24 hours.
        Dropdown: Select a service… | Health Cloud | Service Cloud | Experience Cloud | Salesforce Integration | Other
        Note: No spam. We’ll only use this to respond to your inquiry.
        Button: Book a Free Consultation
      */}
      <ContactForm />
    </>
  );
};

export default page;