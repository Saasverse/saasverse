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
    question: 'What is Salesforce Experience Cloud?',
    answer:
      'Experience Cloud is Salesforce’s product for building portals, help centers and websites that customers and partners log in to. It uses the same data as the rest of your Salesforce org.',
  },
  {
    question: 'What can we build with Experience Cloud?',
    answer:
      'Customer portals, partner portals, help centers, self-service sites for cases and orders, and industry portals for patients, clients or volunteers.',
  },
  {
    question: 'Which Experience Cloud licenses do we need?',
    answer:
      'It depends on who logs in and what they need to do. Customer and partner licenses come with different features. We match each user group to the right license before the build.',
  },
  {
    question: 'How do you keep customer data private?',
    answer:
      'We use sharing sets and sharing rules so each user sees only their own records, and we test logged in as each type of user and as a guest before launch.',
  },
  {
    question: 'Can the portal match our brand?',
    answer:
      'Yes. We build sites with your colors, fonts and logo that work on phones and desktops.',
  },
  {
    question: 'Can customers log in with single sign-on?',
    answer:
      'Yes. Customers and partners can log in with an email and password, or with single sign-on from your own login system.',
  },
  {
    question: 'Can you rebuild our old portal?',
    answer:
      'Yes. If your portal runs on older templates or Visualforce pages, we rebuild it on current templates and Lightning Web Components, one part at a time if needed.',
  },
  {
    question: 'Can the portal show data from other systems?',
    answer:
      'Yes. We connect the portal to your ERP, billing or other systems, so customers see orders and invoices in one place.',
  },
  {
    question: 'How long does an Experience Cloud project take?',
    answer:
      'It depends on the number of user groups, pages and integrations. You’ll get a timeline in the written scope before any work starts.',
  },
  {
    question: 'Can you fix an Experience Cloud site another partner built?',
    answer:
      'Yes. We review the site, its licenses and sharing, list what is risky and then take over support and changes.',
  },
  {
    question: 'What does Experience Cloud implementation cost?',
    answer:
      'The cost depends on your requirements: user groups, pages, custom design and integrations. We send you the cost in writing after the discovery call.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you’ll get a reply within 24 hours.',
  },
];

const whatWeBuild: { title: string; description: React.ReactNode }[] = [
  {
    title: 'Customer Portals',
    description:
      'Customers log in to see their orders, cases, invoices and documents without calling your team.',
  },
  {
    title: 'Partner Portals',
    description:
      'Resellers and partners register deals, work shared leads and find sales material in one place.',
  },
  {
    title: 'Help Centers',
    description:
      'Public or logged-in help centers built on Salesforce Knowledge, so customers find answers before they open a case.',
  },
  {
    title: 'Self-Service for Cases',
    description:
      'Customers open, track and update cases themselves. Your agents see everything in Service Cloud.',
  },
  {
    title: 'Industry Portals',
    description:
      'Patient portals for Health Cloud, client portals for Financial Services Cloud and volunteer portals for Nonprofit Cloud.',
  },
  {
    title: 'Branded Sites',
    description:
      'Sites that match your brand and work on phones, built with Experience Builder and Lightning Web Runtime (LWR) templates.',
  },
  {
    title: 'Custom Components',
    description: (
      <>
        When the standard components aren’t enough, we build Lightning Web
        Components for your portal. See our{' '}
        {/* TODO: confirm the custom development route */}
        <Link
          href="/salesforce-custom-development-services"
          className="text-blue-600 hover:underline"
        >
          custom development services
        </Link>
        .
      </>
    ),
  },
  {
    title: 'Login and Single Sign-On',
    description:
      'Customers and partners log in with their email, or with single sign-on from your own login system.',
  },
];

const licensesAccess = [
  {
    title: 'The Right Licenses',
    description:
      'Experience Cloud has different licenses for customers and partners, with different features. We match each user group to the license it needs, so you don’t pay for features nobody uses.',
  },
  {
    title: 'External Sharing',
    description:
      'Sharing sets and sharing rules make sure each customer or partner sees only their own records.',
  },
  {
    title: 'Guest User Security',
    description:
      'Public pages show only what you choose. We check guest user access, so no data is open to anyone with the link.',
  },
];

const signs = [
  {
    title: 'Customers Call for Simple Things',
    description:
      'Order status, invoices and password resets fill up your support queue.',
  },
  {
    title: 'Partners Email Spreadsheets',
    description: 'Deal registrations and leads arrive by email and get lost.',
  },
  {
    title: 'The Old Portal Is Slow',
    description:
      'Your portal was built years ago on older templates or Visualforce, and it’s hard to change.',
  },
  {
    title: 'The Wrong People See Records',
    description:
      'Sharing was set up quickly, and nobody is sure who can see what.',
  },
  {
    title: 'Nobody Uses the Portal',
    description: 'Customers find it hard to log in or can’t find what they need.',
  },
  {
    title: 'Licenses Don’t Match Use',
    description:
      'You pay for licenses with features nobody uses, or users hit limits.',
  },
];

const steps = [
  {
    title: 'Discovery Call',
    description:
      'Tell us who will use the portal and what they need to do there. If you’d like an NDA first, we’ll sign one.',
  },
  {
    title: 'Plan Users and Access',
    description:
      'We map user groups, licenses and what each group can see and change.',
  },
  {
    title: 'Scope and Plan',
    description:
      'We send you a written scope with the timeline and cost. Nothing starts until you approve it.',
  },
  {
    title: 'Design and Build',
    description:
      'We design the pages with you and build the site in a sandbox, showing progress at regular reviews.',
  },
  {
    title: 'Test as Real Users',
    description:
      'We test logged in as each type of user and as a guest, so nobody sees what they shouldn’t.',
  },
  {
    title: 'Launch and Support',
    description:
      'We go live, help you invite users and stay on to fix issues after launch.',
  },
];

// TODO: confirm these URLs match your real routes
const related = [
  {
    title: 'Service Cloud',
    text: 'Cases, knowledge and support for your customers.',
    linkText: 'Explore Service Cloud services',
    href: '/salesforce-service-cloud',
  },
  {
    title: 'Salesforce Integration Services',
    text: 'Show ERP and billing data in your portal.',
    linkText: 'Explore integration services',
    href: '/salesforce-integration-services',
  },
  {
    title: 'Salesforce Custom Development',
    text: 'Custom components and logic for your site.',
    linkText: 'Explore custom development',
    href: '/salesforce-custom-development-services',
  },
  {
    title: 'Salesforce Managed Services',
    text: 'Ongoing help with your portal and org.',
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
      'Our consultants, developers and designers work in one team, so the portal’s pages, access rules and code are planned together.',
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

const PAGE_URL = 'https://www.saasverse.in/experience-cloud';
const META_TITLE = 'Salesforce Experience Cloud Implementation | Saasverse';
const META_DESC =
  'Salesforce Experience Cloud implementation: customer portals, partner portals and help centers built on your Salesforce data, with the right access.';

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
  name: 'Salesforce Experience Cloud Implementation',
  url: PAGE_URL,
  description: META_DESC,
  serviceType: 'Salesforce Experience Cloud implementation',
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
  numbered = false,
  bg = 'bg-white',
}: {
  id?: string;
  heading: string;
  intro?: string;
  items: CardItem[];
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
        title="Salesforce Experience Cloud Implementation"
        description="We build customer, partner and help center portals on Salesforce, connected to the data your teams already use."
      />

      {/* 1. What We Build With Experience Cloud (8 cards) */}
      <div id="what-we-build">
        <SalesforceServiceReuseable
          heading="What We Build With Experience Cloud"
          subheading=""
          benefits={whatWeBuild}
        />
      </div>

      {/* 2. Licenses and Access, Done Right (3 cards) */}
      <CardSection
        heading="Licenses and Access, Done Right"
        intro="Most portal problems come from three places. We plan each one before the build."
        items={licensesAccess}
        bg="bg-gray-50"
      />

      {/* 3. Signs You Need a Portal, or a Better One (6 cards) */}
      <CardSection
        heading="Signs You Need a Portal, or a Better One"
        items={signs}
      />

      {/* 4. How an Experience Cloud Project Works (6 steps) */}
      <CardSection
        heading="How an Experience Cloud Project Works"
        items={steps}
        numbered
        bg="bg-gray-50"
      />

      {/* 5. Cost (no prices) */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5">What Experience Cloud Implementation Costs</h2>
            <p className="leading-7 text-gray-600">
              The cost depends on your requirements: how many user groups and
              pages you need, how much custom design and code it takes, and
              which systems the portal connects to. After the discovery call, we
              send you a written scope with the cost and timeline. You can
              choose a fixed-scope project or time and materials.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Related Clouds and Services (4 cards with links) */}
      <section className="bg-gray-50 py-16 md:py-20">
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

      {/* 7. Why Choose Saasverse for Experience Cloud (6 cards) */}
      <CardSection
        heading="Why Choose Saasverse for Experience Cloud"
        items={whyChoose}
      />

      {/* 8. Credentials (kept as is) */}
      <CertificateSlider />

      {/* 9. Logo wall (kept as is) */}
      <OurPartners />

      {/* 10. FAQs */}
      <FaqReuseable title="Salesforce Experience Cloud FAQs" faqs={faqs} />

      <CTASection />

      {/*
        ContactForm copy for this page:
        H2: Book a Free Salesforce Consultation
        Intro: Tell us who will use the portal, what they need to do there and whether you have one today. We’ll reply within 24 hours.
        Dropdown: Select a service… | Experience Cloud | Service Cloud | Salesforce Integration | Salesforce Custom Development | Other
        Note: No spam. We’ll only use this to respond to your inquiry.
        Button: Book a Free Consultation
      */}
      <ContactForm />
    </>
  );
};

export default page;