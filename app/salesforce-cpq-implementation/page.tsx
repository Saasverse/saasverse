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
    question: 'What is Salesforce CPQ?',
    answer:
      'Salesforce CPQ (configure, price, quote) helps reps build accurate quotes: they pick products and bundles, the right prices and discounts apply, and the quote goes for approval if needed.',
  },
  {
    question: 'Is Salesforce CPQ end of life?',
    answer:
      'No. It is end of sale, not end of life. Since 2025, Salesforce no longer sells Salesforce CPQ to new customers, but existing customers can keep using it, add users, renew and get support.',
  },
  {
    question: 'What is Revenue Cloud?',
    answer:
      'Revenue Cloud is Salesforce’s newer quote-to-cash product, built on the core Salesforce platform. It covers product catalog, pricing, quoting, orders and billing, and it is where Salesforce now puts its new development.',
  },
  {
    question: 'Should we move from Salesforce CPQ to Revenue Cloud now?',
    answer:
      'Not always. If CPQ works for you, you can keep it. We help you decide on timing by looking at your renewal date, how much custom work you have and which new features you need.',
  },
  {
    question: 'Do we need CPQ, or are standard quotes enough?',
    answer:
      'If you sell a few products with simple pricing, standard quotes in Sales Cloud are often enough. CPQ or Revenue Cloud helps when you have bundles, complex discounts, approvals or subscriptions.',
  },
  {
    question: 'Can you fix a slow or messy CPQ setup?',
    answer:
      'Yes. We review your price rules, product rules and custom code, remove what overlaps and fix what slows quote calculation down.',
  },
  {
    question: 'Can quotes and orders connect to our ERP?',
    answer:
      'Yes. We send closed orders, products and customer details to your ERP or billing system, so finance doesn’t type them in again.',
  },
  {
    question: 'Can you take over a CPQ setup another partner built?',
    answer:
      'Yes. We review the setup, document how it works and then take over support and changes.',
  },
  {
    question: 'How long does a CPQ or Revenue Cloud project take?',
    answer:
      'It depends on your products, pricing rules and integrations. You’ll get a timeline in the written scope before any work starts.',
  },
  {
    question: 'How do you test pricing before go-live?',
    answer:
      'We test with real deals from your sales team, check every price and approval path in a sandbox, and have finance sign off before launch.',
  },
  {
    question: 'What does CPQ implementation cost?',
    answer:
      'The cost depends on your requirements: your products, pricing and approval rules, renewals and integrations. We send you the cost in writing after the discovery call.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you’ll get a reply within 24 hours.',
  },
];

const whatWeDo: { title: string; description: React.ReactNode }[] = [
  {
    title: 'Product Catalog and Bundles',
    description:
      'We set up products, options and bundles, so reps can only build quotes that make sense.',
  },
  {
    title: 'Price Rules and Discounts',
    description:
      'We set up price books, volume and term discounts, and the rules that keep every quote priced the same way.',
  },
  {
    title: 'Quote Templates',
    description:
      'We build quote documents that look like your brand and show exactly what the customer is buying.',
  },
  {
    title: 'Approvals',
    description:
      'Large discounts and special terms go to the right manager for approval before the quote reaches the customer.',
  },
  {
    title: 'Renewals and Amendments',
    description:
      'We set up subscriptions, renewals and mid-term changes, so upsells and renewals don’t get missed.',
  },
  {
    title: 'CPQ Clean-Up',
    description:
      'We fix slow quote calculation, overlapping price rules and custom code that makes every change risky.',
  },
  {
    title: 'Quote to ERP',
    description: (
      <>
        We send closed orders to your ERP or billing system, so finance doesn’t
        type them in again. See our{' '}
        {/* TODO: confirm the integration services route */}
        <Link
          href="/salesforce-integration-services"
          className="text-blue-600 hover:underline"
        >
          Salesforce integration services
        </Link>
        .
      </>
    ),
  },
  {
    title: 'Move to Revenue Cloud',
    description:
      'We plan and run the move from Salesforce CPQ to Revenue Cloud, product by product, when the time is right for you.',
  },
];

const cpqOrRevenue = [
  {
    title: 'You Already Have Salesforce CPQ',
    description:
      'There’s no need to rush. We fix and improve what you have, and plan a move to Revenue Cloud when it makes business sense.',
  },
  {
    title: 'You’re New to Quoting in Salesforce',
    description:
      'New customers start on Revenue Cloud. We set it up around your products, pricing and approvals.',
  },
  {
    title: 'Your Pricing Is Simple',
    description:
      'You may not need either. Standard quotes and price books in Sales Cloud can be enough.',
  },
];

const signs = [
  {
    title: 'Quotes Take Hours',
    description:
      'Reps build quotes in spreadsheets, then copy them into Salesforce.',
  },
  {
    title: 'Discounts Without Approval',
    description:
      'Reps give large discounts, and nobody sees them until the deal closes.',
  },
  {
    title: 'Wrong Prices on Quotes',
    description:
      'Old price books or overlapping rules put the wrong price in front of customers.',
  },
  {
    title: 'Renewals Slip Through',
    description:
      'Subscriptions renew late, or not at all, because nobody is reminded.',
  },
  {
    title: 'Quote Calculation Is Slow',
    description: 'Large quotes take minutes to calculate, or time out.',
  },
  {
    title: 'Finance Re-Keys Orders',
    description: 'Closed deals are typed into the ERP by hand, with mistakes.',
  },
];

const steps = [
  {
    title: 'Discovery Call',
    description:
      'Tell us what you sell, how you price it and where quoting breaks today. If you’d like an NDA first, we’ll sign one.',
  },
  {
    title: 'Pricing Workshop',
    description:
      'We map your products, bundles, discounts and approval rules with sales and finance.',
  },
  {
    title: 'Scope and Plan',
    description:
      'We send you a written scope with the timeline and cost. Nothing starts until you approve it.',
  },
  {
    title: 'Build in a Sandbox',
    description:
      'We set up products, pricing and templates in a sandbox and show you progress at regular reviews.',
  },
  {
    title: 'Test With Real Quotes',
    description:
      'Your reps and finance team test with real deals before anything goes live.',
  },
  {
    title: 'Launch and Support',
    description:
      'We go live, train your reps and stay on to fix issues after launch.',
  },
];

// TODO: confirm these URLs match your real routes
const related = [
  {
    title: 'Sales Cloud',
    text: 'Pipeline, forecasting and simple quotes.',
    linkText: 'Explore Sales Cloud services',
    href: '/salesforce-sales-cloud',
  },
  {
    title: 'Salesforce Integration Services',
    text: 'Send orders to your ERP and billing system.',
    linkText: 'Explore integration services',
    href: '/salesforce-integration-services',
  },
  {
    title: 'Salesforce Custom Development',
    text: 'Custom pricing logic and components.',
    linkText: 'Explore custom development',
    href: '/salesforce-custom-development-services',
  },
  {
    title: 'Hire Salesforce Consultants',
    text: 'A CPQ consultant inside your own team.',
    linkText: 'Hire Salesforce consultants',
    href: '/hire-salesforce-consultants',
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
      'Our CPQ consultants work with our developers and architects, so pricing logic, integrations and code are planned together.',
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

const PAGE_URL = 'https://www.saasverse.in/salesforce-cpq-implementation';
const META_TITLE = 'Salesforce CPQ & Revenue Cloud Implementation | Saasverse';
const META_DESC =
  'Salesforce CPQ and Revenue Cloud implementation: product bundles, pricing rules, approvals, renewals, CPQ fixes and CPQ to Revenue Cloud moves.';

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
  name: 'Salesforce CPQ and Revenue Cloud Implementation',
  url: PAGE_URL,
  description: META_DESC,
  serviceType: 'Salesforce CPQ and Revenue Cloud implementation',
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
        title="Salesforce CPQ and Revenue Cloud Implementation"
        description="We set up, fix and upgrade quoting in Salesforce, so reps send the right price the first time."
      />

      {/* 1. What We Do (8 cards) */}
      <SalesforceServiceReuseable
        heading="What We Do"
        subheading=""
        benefits={whatWeDo}
      />

      {/* 2. Salesforce CPQ or Revenue Cloud? (3 cards) */}
      <CardSection
        id="cpq-or-revenue-cloud"
        heading="Salesforce CPQ or Revenue Cloud?"
        intro="In 2025 Salesforce stopped selling Salesforce CPQ to new customers. It is end of sale, not end of life: existing customers can keep using it, renew and get support. New quote-to-cash work now goes into Revenue Cloud."
        items={cpqOrRevenue}
        bg="bg-gray-50"
      />

      {/* 3. Signs Your Quoting Needs Work (6 cards) */}
      <CardSection heading="Signs Your Quoting Needs Work" items={signs} />

      {/* 4. How a CPQ or Revenue Cloud Project Works (6 steps) */}
      <CardSection
        heading="How a CPQ or Revenue Cloud Project Works"
        items={steps}
        numbered
        bg="bg-gray-50"
      />

      {/* 5. Cost (no prices) */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5">
              What CPQ and Revenue Cloud Implementation Costs
            </h2>
            <p className="leading-7 text-gray-600">
              The cost depends on your requirements: how many products and
              bundles you sell, how complex your pricing and approvals are,
              whether you need renewals and amendments, and which systems
              quoting has to connect to. After the discovery call, we send you a
              written scope with the cost and timeline. You can choose a
              fixed-scope project or time and materials.
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

      {/* 7. Why Choose Saasverse for CPQ and Revenue Cloud (6 cards) */}
      <CardSection
        heading="Why Choose Saasverse for CPQ and Revenue Cloud"
        items={whyChoose}
      />

      {/* 8. Credentials (kept as is) */}
      <CertificateSlider />

      {/* 9. Logo wall (kept as is) */}
      <OurPartners />

      {/* 10. FAQs */}
      <FaqReuseable title="Salesforce CPQ and Revenue Cloud FAQs" faqs={faqs} />

      <CTASection />

      {/*
        ContactForm copy for this page:
        H2: Book a Free Salesforce Consultation
        Intro: Tell us what you sell, whether you use Salesforce CPQ today and where quoting breaks. We’ll reply within 24 hours.
        Dropdown: Select a service… | Salesforce CPQ | Revenue Cloud | Sales Cloud | Salesforce Integration | Other
        Note: No spam. We’ll only use this to respond to your inquiry.
        Button: Book a Free Consultation
      */}
      <ContactForm />
    </>
  );
};

export default page;