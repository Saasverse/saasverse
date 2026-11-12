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
    question: 'What is Salesforce Nonprofit Cloud?',
    answer:
      'Nonprofit Cloud is Salesforce’s product for nonprofits. It covers donors, gifts, recurring donations, programs, volunteers and outcome reporting, built into the core Salesforce platform.',
  },
  {
    question: 'What is the difference between Nonprofit Cloud and NPSP?',
    answer:
      'NPSP (Nonprofit Success Pack) is the older product, installed as a package. Nonprofit Cloud is the newer one, built into the core Salesforce platform, and it is where Salesforce adds new features.',
  },
  {
    question: 'Should we move from NPSP to Nonprofit Cloud?',
    answer:
      'Not always right away. NPSP is still supported. We help you decide by looking at what you need next, how much custom work you have and your team’s time.',
  },
  {
    question: 'Are Salesforce licenses free for nonprofits?',
    answer:
      'Eligible nonprofits can get donated or discounted licenses through Salesforce’s Power of Us program. Check Salesforce’s current terms, as they change from time to time.',
  },
  {
    question: 'Can you move our data from Raiser’s Edge or spreadsheets?',
    answer:
      'Yes. We move donors, households, gifts and history, and check the totals against your old system before go-live.',
  },
  {
    question: 'Can Nonprofit Cloud handle recurring donations?',
    answer:
      'Yes. We set up recurring gifts and pledges, so monthly donations are recorded and tracked automatically.',
  },
  {
    question: 'Can online donations go straight into Salesforce?',
    answer:
      'Yes. We connect your donation forms and payment processor to Salesforce, so gifts arrive without re-typing.',
  },
  {
    question: 'Can we manage volunteers in Salesforce?',
    answer:
      'Yes. We set up volunteer sign-ups, shifts and hours, and a volunteer portal if you need one.',
  },
  {
    question: 'Can we report program outcomes to funders?',
    answer:
      'Yes. We set up program and outcome tracking with dashboards your funders and board can understand.',
  },
  {
    question: 'How long does a Nonprofit Cloud implementation take?',
    answer:
      'It depends on your processes and how much data you’re moving. You’ll get a timeline in the written scope before any work starts.',
  },
  {
    question: 'What does Nonprofit Cloud implementation cost?',
    answer:
      'The cost depends on your requirements: the processes you start with, data migration and integrations. We send you the cost in writing after the discovery call.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you’ll get a reply within 24 hours.',
  },
];

const whatWeSetUp = [
  {
    title: 'Donor and Household Records',
    description:
      'Donors, households, organizations and their giving history in one place, without duplicates.',
  },
  {
    title: 'Gift Entry and Recurring Gifts',
    description:
      'Fast gift entry, recurring donations and pledges, so every gift is recorded the same way.',
  },
  {
    title: 'Campaigns and Appeals',
    description:
      'Track which campaign, event or appeal each gift came from, and what each one raised.',
  },
  {
    title: 'Major Gifts and Grants Pipeline',
    description:
      'Track major donor prospects and the grants you apply for, the same way a sales team tracks deals.',
  },
  {
    title: 'Programs and Case Management',
    description:
      'Enroll the people you serve, track services delivered and manage cases.',
  },
  {
    title: 'Volunteers',
    description:
      'Volunteer sign-ups, shifts and hours, with a sign-up portal on Experience Cloud if you need one.',
  },
  {
    title: 'Outcome Reporting',
    description:
      'Dashboards that show funders and your board what your programs achieved.',
  },
  {
    title: 'Donation Forms and Payments',
    description:
      'Online donation forms and payment processors connected to Salesforce, so gifts arrive without re-typing.',
  },
];

const nonprofitOrNpsp = [
  {
    title: 'New to Salesforce',
    description:
      'Start on Nonprofit Cloud. We set it up around your fundraising and programs.',
  },
  {
    title: 'On NPSP Today',
    description:
      'There’s no need to rush. We fix and improve your NPSP org and help you decide when a move makes sense.',
  },
  {
    title: 'Ready to Move',
    description:
      'We plan and run the move from NPSP to Nonprofit Cloud, including your data, reports and automation.',
  },
];

const signs = [
  {
    title: 'Gifts Live in Spreadsheets',
    description:
      'Donations are tracked in files, and year-end reports take weeks.',
  },
  {
    title: 'Duplicate Donors',
    description:
      'The same donor appears three times, and thank-you letters go out twice.',
  },
  {
    title: 'Recurring Gifts Break',
    description:
      'Monthly donations stop or get recorded wrongly, and nobody notices.',
  },
  {
    title: 'Funders Ask for Numbers You Can’t Pull',
    description:
      'Program results are hard to report because the data sits in different places.',
  },
  {
    title: 'An Accidental Admin',
    description:
      'One busy staff member keeps Salesforce running on top of their real job.',
  },
  {
    title: 'An Old Donor Database',
    description:
      'You’re moving from Raiser’s Edge, another donor database or NPSP.',
  },
];

const steps = [
  {
    title: 'Discovery Call',
    description:
      'Tell us about your fundraising, programs and the systems you use today. If you’d like an NDA first, we’ll sign one.',
  },
  {
    title: 'Process and Data Review',
    description:
      'We map how gifts, donors and program data move today, and what needs to come across.',
  },
  {
    title: 'Scope and Plan',
    description:
      'We send you a written scope with the timeline and cost. Nothing starts until you approve it.',
  },
  {
    title: 'Build in a Sandbox',
    description:
      'We set up Nonprofit Cloud in a sandbox and show you progress at regular reviews.',
  },
  {
    title: 'Move Your Data and Test',
    description:
      'We move your data, check the totals against your old system and test with your staff.',
  },
  {
    title: 'Launch and Support',
    description:
      'We go live, train your team and stay on to fix issues after launch.',
  },
];

// TODO: confirm these URLs match your real routes
const related = [
  {
    title: 'Marketing Cloud',
    text: 'Donor emails, journeys and appeals.',
    linkText: 'Explore Marketing Cloud services',
    href: '/salesforce-marketing-cloud',
  },
  {
    title: 'Experience Cloud',
    text: 'Portals for volunteers, members and grantees.',
    linkText: 'Explore Experience Cloud services',
    href: '/experience-cloud',
  },
  {
    title: 'Salesforce Integration Services',
    text: 'Connect donation forms, payments and accounting.',
    linkText: 'Explore integration services',
    href: '/salesforce-integration-services',
  },
  {
    title: 'Salesforce Managed Services',
    text: 'A team that looks after your org every month.',
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
      'Our Nonprofit Cloud consultants work with our admins and developers, so your setup is simple enough for a small team to run.',
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

const PAGE_URL = 'https://www.saasverse.in/nonprofit-cloud';
const META_TITLE = 'Salesforce Nonprofit Cloud Implementation | Saasverse';
const META_DESC =
  'Salesforce Nonprofit Cloud implementation: donor records, gifts, recurring donations, programs and volunteers, plus moves from NPSP and other systems.';

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
  name: 'Salesforce Nonprofit Cloud Implementation',
  url: PAGE_URL,
  description: META_DESC,
  serviceType: 'Salesforce Nonprofit Cloud implementation',
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
        title="Salesforce Nonprofit Cloud Implementation"
        description="We set up Nonprofit Cloud for fundraising, programs and volunteers, so your team spends less time on spreadsheets."
      />

      {/* 1. What We Set Up in Nonprofit Cloud (8 cards) */}
      <SalesforceServiceReuseable
        heading="What We Set Up in Nonprofit Cloud"
        subheading=""
        benefits={whatWeSetUp}
      />

      {/* 2. Nonprofit Cloud or NPSP? (3 cards) */}
      <CardSection
        id="nonprofit-cloud-or-npsp"
        heading="Nonprofit Cloud or NPSP?"
        intro="Salesforce has two nonprofit products. Nonprofit Cloud is the newer one, built into the core Salesforce platform. The Nonprofit Success Pack (NPSP) is the older one, installed as a package. NPSP is still supported for the organizations that use it."
        items={nonprofitOrNpsp}
        bg="bg-gray-50"
      />

      {/* 3. Signs Your Donor Data Needs Work (6 cards) */}
      <CardSection heading="Signs Your Donor Data Needs Work" items={signs} />

      {/* 4. How a Nonprofit Cloud Project Works (6 steps) */}
      <CardSection
        heading="How a Nonprofit Cloud Project Works"
        items={steps}
        numbered
        bg="bg-gray-50"
      />

      {/* 5. Cost (no prices) */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5">What Nonprofit Cloud Implementation Costs</h2>
            <p className="leading-7 text-gray-600">
              The cost depends on your requirements: how many fundraising and
              program processes you start with, the data you need to move and
              the systems Salesforce connects to. After the discovery call, we
              send you a written scope with the cost and timeline. Eligible
              nonprofits can get donated or discounted Salesforce licenses
              through Salesforce’s Power of Us program. That is separate from
              our work.
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

      {/* 7. Why Choose Saasverse for Nonprofit Cloud (6 cards) */}
      <CardSection
        heading="Why Choose Saasverse for Nonprofit Cloud"
        items={whyChoose}
      />

      {/* 8. Credentials (kept as is) */}
      <CertificateSlider />

      {/* 9. Logo wall (kept as is) */}
      <OurPartners />

      {/* 10. FAQs */}
      <FaqReuseable title="Salesforce Nonprofit Cloud FAQs" faqs={faqs} />

      <CTASection />

      {/*
        ContactForm copy for this page:
        H2: Book a Free Salesforce Consultation
        Intro: Tell us about your fundraising, your programs and the systems you use today. We’ll reply within 24 hours.
        Dropdown: Select a service… | Nonprofit Cloud | NPSP Support | Marketing Cloud | Salesforce Integration | Other
        Note: No spam. We’ll only use this to respond to your inquiry.
        Button: Book a Free Consultation
      */}
      <ContactForm />
    </>
  );
};

export default page;