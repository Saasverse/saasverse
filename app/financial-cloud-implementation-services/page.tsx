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
    question: 'What is Salesforce Financial Services Cloud?',
    answer:
      'Financial Services Cloud is Salesforce’s product for banks, wealth firms and insurers. It adds households, financial accounts, goals, onboarding and compliant data sharing to Sales Cloud and Service Cloud.',
  },
  {
    question: 'Who is Financial Services Cloud for?',
    answer:
      'Retail and commercial banks, credit unions, wealth and asset managers, and insurers and agencies.',
  },
  {
    question:
      'What is the difference between Financial Services Cloud and Sales Cloud?',
    answer:
      'Sales Cloud is a general sales CRM. Financial Services Cloud adds what financial firms need: households, financial accounts, goals, onboarding and rules for who can see which clients.',
  },
  {
    question:
      'Can Financial Services Cloud connect to our core banking or custodian systems?',
    answer:
      'Yes. We connect it to core banking, custodian and policy systems, so balances, accounts and policies show up on the client record.',
  },
  {
    question: 'What is compliant data sharing?',
    answer:
      'It’s a Financial Services Cloud feature that controls which advisors and bankers can see which clients and accounts, based on rules such as branch, team or line of business.',
  },
  {
    question: 'Does Financial Services Cloud make us compliant?',
    answer:
      'It gives you tools such as compliant data sharing, audit history and Shield encryption. Your compliance team sets the rules, and we set up Salesforce to follow them.',
  },
  {
    question:
      'Our org runs an older version of Financial Services Cloud. Can you upgrade it?',
    answer:
      'Yes. We review your setup and plan the move to the current data model, step by step, so your teams keep working.',
  },
  {
    question: 'Can clients use a portal?',
    answer:
      'Yes. We build secure client portals on Experience Cloud for documents, tasks and messages.',
  },
  {
    question: 'Can you move our data from another CRM?',
    answer:
      'Yes. We move clients, households, accounts and history from your current CRM or spreadsheets, and check the record counts after each load.',
  },
  {
    question: 'How long does a Financial Services Cloud implementation take?',
    answer:
      'It depends on the business lines, teams, data and integrations involved. You’ll get a timeline in the written scope before any work starts.',
  },
  {
    question: 'What does Financial Services Cloud implementation cost?',
    answer:
      'The cost depends on your requirements: business lines, users, data migration and integrations. We send you the cost in writing after the discovery call.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you’ll get a reply within 24 hours.',
  },
];

const whatWeSetUp = [
  {
    title: 'Client and Household View',
    description:
      'Clients, households, financial accounts, goals and relationships on one screen, so advisors see the whole picture.',
  },
  {
    title: 'Client Onboarding',
    description:
      'Account opening with checklists, document collection and action plans, so nothing waits in someone’s inbox.',
  },
  {
    title: 'Wealth Management',
    description:
      'Advisor workspaces, financial goals, client reviews and referrals between advisors and specialists.',
  },
  {
    title: 'Retail and Commercial Banking',
    description:
      'Deposit and loan pipelines, branch referrals and relationship management for business clients.',
  },
  {
    title: 'Insurance',
    description:
      'Policies, claims and agent or broker relationships, connected to each customer’s record.',
  },
  {
    title: 'Compliant Data Sharing',
    description:
      'Advisors and bankers see only the clients and accounts they should, based on rules your compliance team sets.',
  },
  {
    title: 'Client Portals',
    description:
      'Clients see documents, tasks and messages in a secure portal built on Experience Cloud.',
  },
  {
    title: 'Core System Integrations',
    description:
      'We connect Financial Services Cloud to core banking, custodian and policy systems, often through MuleSoft.',
  },
];

const whoWeWorkWith = [
  {
    title: 'Banks and Credit Unions',
    description:
      'Retail and business banking, onboarding, referrals and loan pipelines.',
  },
  {
    title: 'Wealth and Asset Managers',
    description: 'Advisors, client households, reviews and financial goals.',
  },
  {
    title: 'Insurers and Agencies',
    description: 'Policies, claims, agents and service for policyholders.',
  },
];

const signs = [
  {
    title: 'Advisors Keep Their Own Spreadsheets',
    description: 'The real client list lives outside Salesforce.',
  },
  {
    title: 'No Household View',
    description: 'Nobody can see that three accounts belong to the same family.',
  },
  {
    title: 'Onboarding by Email and PDF',
    description:
      'New accounts take weeks because forms move back and forth by email.',
  },
  {
    title: 'Referrals Get Lost',
    description:
      'A branch sends a referral to wealth or insurance, and nobody follows up.',
  },
  {
    title: 'Core Data Doesn’t Reach Salesforce',
    description:
      'Balances and policies sit in the core system, and advisors call someone to check.',
  },
  {
    title: 'An Older Setup',
    description:
      'Your org runs on an older version of Financial Services Cloud and is hard to upgrade.',
  },
];

const steps = [
  {
    title: 'Discovery Call',
    description:
      'Tell us about your business lines, your teams and the systems that hold client data. We sign an NDA first.',
  },
  {
    title: 'Process and Data Mapping',
    description:
      'We map onboarding, servicing and referral processes, and agree which system owns each piece of data.',
  },
  {
    title: 'Scope and Plan',
    description:
      'We send you a written scope with the timeline and cost. Nothing starts until you approve it.',
  },
  {
    title: 'Build in a Sandbox',
    description:
      'We set up Financial Services Cloud, access rules and integrations in a sandbox with test data.',
  },
  {
    title: 'Test With Your Teams',
    description:
      'Advisors, operations and your compliance team test the setup before go-live.',
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
    title: 'Sales Cloud',
    text: 'Pipelines and forecasting for business development teams.',
    linkText: 'Explore Sales Cloud services',
    href: '/salesforce-sales-cloud',
  },
  {
    title: 'Experience Cloud',
    text: 'Secure client portals.',
    linkText: 'Explore Experience Cloud services',
    href: '/experience-cloud',
  },
  {
    title: 'MuleSoft Development',
    text: 'Core banking and custodian integrations.',
    linkText: 'Explore MuleSoft development',
    href: '/mulesoft-development',
  },
  {
    title: 'Salesforce Managed Services',
    text: 'Ongoing help with your org after launch.',
    linkText: 'Explore managed services',
    href: '/salesforce-managed-services',
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
      'Our Financial Services Cloud consultants work with our integration developers and architects, so client data, access rules and core connections are planned together.',
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

const PAGE_URL =
  'https://www.saasverse.in/financial-cloud-implementation-services';
const META_TITLE = 'Financial Services Cloud Implementation | Saasverse';
const META_DESC =
  'Salesforce Financial Services Cloud implementation for banks, wealth firms and insurers: client and household views, onboarding and core integrations.';

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
  name: 'Salesforce Financial Services Cloud Implementation',
  url: PAGE_URL,
  description: META_DESC,
  serviceType: 'Salesforce Financial Services Cloud implementation',
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
  numbered = false,
  bg = 'bg-white',
}: {
  id?: string;
  heading: string;
  intro?: string;
  items: CardItem[];
  footer?: React.ReactNode;
  numbered?: boolean;
  bg?: string;
}) => (
  <section id={id} className={`${bg} py-16 md:py-20`}>
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="mb-5">{heading}</h2>
        {intro && <p className="leading-7 text-gray-600">{intro}</p>}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        image="/images/banner/expbanner.webp"
        title="Salesforce Financial Services Cloud Implementation"
        description="We set up Financial Services Cloud for banks, wealth firms and insurers, so advisors see each client’s full relationship."
      />

      {/* 1. What We Set Up in Financial Services Cloud (8 cards) */}
      <div id="what-we-set-up">
        <SalesforceServiceReuseable
          heading="What We Set Up in Financial Services Cloud"
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
            See how we work with financial services firms on our{' '}
            {/* TODO: confirm the industry page route */}
            <Link
              href="/financial-industry"
              className="text-blue-600 hover:underline"
            >
              financial services industry page
            </Link>
            .
          </p>
        }
      />

      {/* 3. Security and Compliance (short paragraph) */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5">Security and Compliance</h2>
            <p className="leading-7 text-gray-600">
              Financial Services Cloud gives you the tools: compliant data
              sharing, audit history, and Salesforce Shield for encryption and
              event monitoring. Your compliance team sets the rules. We set up
              Salesforce to follow them, test them, and document every access
              rule, so your auditors can see who can see what.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Signs Your Client Data Needs Work (6 cards) */}
      <CardSection
        heading="Signs Your Client Data Needs Work"
        items={signs}
        bg="bg-gray-50"
      />

      {/* 5. How a Financial Services Cloud Project Works (6 steps) */}
      <CardSection
        heading="How a Financial Services Cloud Project Works"
        items={steps}
        numbered
      />

      {/* 6. Cost (no prices) */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5">
              What Financial Services Cloud Implementation Costs
            </h2>
            <p className="leading-7 text-gray-600">
              The cost depends on your requirements: which business lines you
              start with, how many users and teams, the data you need to move
              and the core systems it connects to. After the discovery call, we
              send you a written scope with the cost and timeline. You can
              choose a fixed-scope project or time and materials.
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

      {/* 8. Why Choose Saasverse for Financial Services Cloud (6 cards) */}
      <CardSection
        heading="Why Choose Saasverse for Financial Services Cloud"
        items={whyChoose}
        bg="bg-gray-50"
      />

      {/* 9. Credentials (kept as is) */}
      <CertificateSlider />

      {/* 10. Logo wall (kept as is) */}
      <OurPartners />

      {/* 11. FAQs */}
      <FaqReuseable
        title="Salesforce Financial Services Cloud FAQs"
        faqs={faqs}
      />

      <CTASection />

      {/*
        ContactForm copy for this page:
        H2: Book a Free Salesforce Consultation
        Intro: Tell us about your business lines, how many advisors or bankers will use Salesforce and which systems hold client data today. We’ll reply within 24 hours.
        Dropdown: Select a service… | Financial Services Cloud | Sales Cloud | Experience Cloud | Salesforce Integration | Other
        Note: No spam. We’ll only use this to respond to your inquiry.
        Button: Book a Free Consultation
      */}
      <ContactForm />
    </>
  );
};

export default page;