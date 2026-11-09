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

/* ---------------------------------- FAQs ---------------------------------- */
const faqs = [
  {
    question: 'What does a Salesforce product manager do?',
    answer:
      'A Salesforce product manager owns the roadmap for your org, collects and ranks requests, plans releases, measures adoption and decides with your leaders what gets built next.',
  },
  {
    question: 'What is the difference between a product manager and a project manager?',
    answer:
      'A product manager owns the roadmap over time and decides what to build and why. A project manager runs one project and makes sure it ships on time and within budget.',
  },
  {
    question: 'What is the difference between a product manager and a product owner?',
    answer:
      'In many Agile teams it’s the same person. The product manager looks at the longer-term roadmap, and the product owner runs the sprint backlog. Our product managers can do both.',
  },
  {
    question: 'Do we need a product manager if we already have an admin?',
    answer:
      'If requests come from several teams and the admin decides what to build, yes. The admin builds. The product manager decides what is worth building first.',
  },
  {
    question: 'How do you decide what goes on the roadmap?',
    answer:
      'We score each request with your leaders on business value, how many users it helps, effort and risk. The scores and the reasons go into the decision log.',
  },
  {
    question: 'Can your product manager help us build an AppExchange app?',
    answer:
      'Yes. For software companies, our product managers plan the app’s features, package versions and release schedule, and work with our ISV developers.',
  },
  {
    question: 'How quickly can a product manager start?',
    answer:
      'Many engagements start within a few days. A product manager with a specific cloud or industry background can take a few weeks. We give you a start date when we send profiles.',
  },
  {
    question: 'Which hiring model should I choose?',
    answer:
      'Hourly works for a roadmap workshop. A part-time product manager works for an org with a steady flow of requests. A full-time product manager works for a large org or an AppExchange product.',
  },
  {
    question: 'Can your product manager work with our in-house team or another partner?',
    answer:
      'Yes. Many clients use our product manager to guide their own admins and developers, or a team from another Salesforce partner.',
  },
  {
    question: 'What does it cost to hire a Salesforce product manager?',
    answer:
      'The cost depends on your requirements: the hiring model, the hours, the size of your org and how many teams send requests. We send you the cost in writing before anyone starts.',
  },
  {
    question: 'Will the product manager work in my time zone?',
    answer:
      'Our team is based in Jaipur, India, and works with clients in the US. Before work starts, we agree on overlapping hours, so your product manager can join your planning and leadership meetings.',
  },
  {
    question: 'Is my data safe with a hired product manager?',
    answer:
      'We sign an NDA before we access your org or documents. Saasverse is ISO 27001 and Cyber Essentials Plus certified, and you decide what the product manager can see.',
  },
];

/* ------------------------------ Schema (JSON-LD) ------------------------------ */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Salesforce Product Managers',
  url: 'https://www.saasverse.in/hire-salesforce-product-managers',
  description:
    'Hire Salesforce product managers in India to own your Salesforce roadmap, rank the backlog and plan each release. Hourly, part-time or full-time.',
  serviceType: 'Salesforce product management',
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

const schemas = [serviceSchema, faqSchema];

/* ------------------------------ Card sections ------------------------------ */
// TODO: replace the ISV / AppExchange URL with the real page URL
const ISV_URL = '/salesforce-isv-development-company';
const APPEXCHANGE_URL = 'salesforce-appexchange-development-company';
// TODO: replace with your Clutch profile URL
const CLUTCH_URL = 'https://clutch.co/profile/saasverse';

const pmDoes = [
  {
    title: 'Owns the Salesforce Roadmap',
    description:
      'Your product manager keeps one roadmap for your org: what’s coming this quarter, next quarter and later, and why.',
  },
  {
    title: 'Collects and Ranks Requests',
    description:
      'Every request from sales, service, marketing and finance goes into one backlog, ranked by value, effort and risk.',
  },
  {
    title: 'Acts as Product Owner',
    description:
      'Your product manager runs sprint planning with your admins and developers and accepts the finished work.',
  },
  {
    title: 'Plans Releases',
    description:
      'Your product manager plans your own release calendar around Salesforce’s three releases a year, so nothing lands at a bad time.',
  },
  {
    title: 'Measures Adoption',
    description:
      'Your product manager tracks who logs in, which features people use and where they work around Salesforce, then plans fixes.',
  },
  {
    title: 'Says No to the Right Things',
    description:
      'Not every request should be built. Your product manager explains the trade-offs, so the org doesn’t fill up with one-off features.',
  },
  {
    title: 'Keeps Leaders Informed',
    description:
      'Sales, service and finance leaders get a clear view of what’s planned, what shipped and what it changed.',
  },
  {
    title: 'Shapes AppExchange Products',
    description: (
      <>
        For software companies, your product manager plans the features, the
        package versions and the release schedule of your app. See our{' '}
        <Link href={ISV_URL} className={linkClass}>
          Salesforce ISV development services
        </Link>
        .
      </>
    ),
  },
];

const deliverables = [
  {
    title: 'Product Roadmap',
    description: 'What will be built and when, linked to the goals it supports.',
  },
  {
    title: 'Ranked Backlog',
    description: 'Every request in one list, with its value, effort and status.',
  },
  {
    title: 'Release Plan',
    description:
      'Your release dates, what goes in each one and how it fits around Salesforce’s releases.',
  },
  {
    title: 'Adoption Report',
    description: 'Logins, feature usage and the gaps that need attention.',
  },
  {
    title: 'Decision Log',
    description:
      'What was decided, by whom and why, so nobody has the same debate twice.',
  },
  {
    title: 'Quarterly Review',
    description: 'What shipped, what changed for users and what comes next.',
  },
];

const whenCompaniesHire = [
  {
    title: 'Every Team Wants Something Different',
    description:
      'Sales, service and finance all send requests, and nobody decides what comes first.',
  },
  {
    title: 'The Backlog Never Shrinks',
    description:
      'Hundreds of requests sit in a list, and the team builds whatever is shouted loudest.',
  },
  {
    title: 'Nobody Owns Salesforce',
    description:
      'The org belongs to everyone and to no one, so it grows without a plan.',
  },
  {
    title: 'People Work Around the System',
    description:
      'Salesforce is live, but teams still use spreadsheets for the important work.',
  },
  {
    title: 'Planning for Agentforce',
    description:
      'Leadership wants AI agents, and someone needs to decide where they help first.',
  },
  {
    title: 'Building an AppExchange App',
    description:
      'You’re a software company and need someone to own the app’s features and releases.',
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
      'Your product manager works next to our consultants, architects and developers, so every roadmap item is checked against what Salesforce can do.',
  },
  {
    title: '120+ Projects for 40+ Clients',
    description:
      'We’ve delivered 120+ projects for 40+ clients across 19+ countries.',
  },
  {
    title: 'US Time-Zone Overlap',
    description:
      'Our team is based in Jaipur, India. We agree on overlapping working hours, so your product manager can join your planning and leadership meetings.',
  },
  {
    title: 'Security and Confidentiality',
    description:
      'Saasverse is ISO 27001 and Cyber Essentials Plus certified. We sign an NDA before we access your org or documents.',
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

const hiringModels = [
  {
    title: 'Hourly',
    text: 'You pay only for the hours used. Good for a roadmap workshop or a backlog cleanup.',
  },
  {
    title: 'Part-Time Dedicated Product Manager',
    text: 'The same product manager works with your team for a set number of hours each week. Good for an org with a steady flow of requests from several teams.',
  },
  {
    title: 'Full-Time Dedicated Product Manager',
    text: 'A product manager works only on your account. Good for a large org, several Salesforce clouds or an AppExchange product.',
  },
];

const steps = [
  {
    title: 'Tell Us What You Need',
    text: 'Share your org, the teams that use it and roughly how many hours a week you expect. If you’d like an NDA first, we’ll sign one.',
  },
  {
    title: 'Get Matching Profiles',
    text: 'We send you profiles of product managers who have owned Salesforce roadmaps like yours.',
  },
  {
    title: 'Interview Them',
    text: 'Talk to the product managers and ask how they would rank your current backlog. You decide who joins.',
  },
  {
    title: 'Agree on Terms',
    text: 'We put the model, hours and cost in writing. You give the product manager access to the tools your team uses.',
  },
  {
    title: 'Start Work',
    text: 'Your product manager joins your meetings and tools and shares progress as often as you want.',
  },
];

/* -------------------------------- Metadata -------------------------------- */
const PAGE_URL = 'https://www.saasverse.in/hire-salesforce-product-managers';
const PAGE_TITLE = 'Hire Salesforce Product Managers in India | Saasverse';
const PAGE_DESCRIPTION =
  'Hire Salesforce product managers in India to own your Salesforce roadmap, rank the backlog and plan each release. Hourly, part-time or full-time.';

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
      {/* 1. Hero: H1, one line, two buttons (trust line: keep your existing one) */}
      <PageBanner
        image="/images/banner/hirebanner.webp"
        title="Hire Salesforce Product Managers in India"
        description="Salesforce product managers who decide what gets built next, and why."
      />
     

      {/* 2. What a Salesforce Product Manager Does for You (8 cards) */}
      <SalesforceServiceReuseable
        heading="What a Salesforce Product Manager Does for You"
        benefits={pmDoes}
      />

      {/* 3. What You Get (6 cards) */}
      <SalesforceServiceReuseable heading="What You Get" benefits={deliverables} />
      <p className="mx-auto max-w-3xl px-4 pb-8 text-center text-gray-700">
        Your product manager leaves you with material your team can keep using.
      </p>

      {/* 4. Hiring Models */}
      <section id="hiring-models" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-semibold">Hiring Models</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {hiringModels.map((m) => (
            <div key={m.title} className="rounded-lg border border-gray-200 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">{m.title}</h3>
              <p className="text-gray-700">{m.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-gray-700">
          The contract can be a fixed-scope project or time and materials,
          whichever suits the work.
        </p>
      </section>

      {/* 5. Cost (no prices) */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold">
          What It Costs to Hire a Salesforce Product Manager
        </h2>
        <p className="text-gray-700">
          The cost depends on your requirements: the hiring model, how many
          hours a week you need, the size of your org and how many teams send
          requests. Tell us what you need and our experts will send you a quote.
          You get the cost and terms in writing before anyone starts.
        </p>
      </section>

      {/* 6. How Hiring Works (5 steps) */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-semibold">How Hiring Works</h2>
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

      {/* 7. When Companies Hire (6 cards) */}
      <SalesforceServiceReuseable
        heading="When Companies Hire a Salesforce Product Manager"
        benefits={whenCompaniesHire}
      />

      {/* 8. Product Manager, Project Manager or Business Analyst */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          Product Manager, Project Manager or Business Analyst
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Salesforce Product Manager</h3>
            <p className="text-gray-700">
              You need someone to own the roadmap and decide what gets built
              next. That’s the role on this page.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Salesforce Project Manager</h3>
            <p className="text-gray-700">
              You need someone to run one project to a deadline and budget.{' '}
              <Link href="/hire-salesforce-project-managers" className={linkClass}>
                Hire Salesforce project managers.
              </Link>
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Salesforce Business Analyst</h3>
            <p className="text-gray-700">
              You need someone to work out and write down the detailed
              requirements.{' '}
              <Link href="/hire-salesforce-business-analyst" className={linkClass}>
                Hire a Salesforce business analyst.
              </Link>
            </p>
          </div>
        </div>
        <p className="mt-6 text-center text-gray-700">
          You can also{' '}
          <Link href="/hire-salesforce-admin" className={linkClass}>
            hire a Salesforce admin
          </Link>{' '}
          or{' '}
          <Link href="/hire-salesforce-consultants" className={linkClass}>
            hire Salesforce consultants
          </Link>
          . Building an app for AppExchange? See our{' '}
          <Link href={APPEXCHANGE_URL} className={linkClass}>
            Salesforce AppExchange development services
          </Link>
          .
        </p>
      </section>

      {/* 9. Why Hire from Saasverse (6 cards) */}
      <SalesforceServiceReuseable
        heading="Why Hire Salesforce Product Managers from Saasverse"
        benefits={whySaasverse}
      />

      {/* 10. Credentials badge carousel (kept) */}
      <CertificateSlider />

      {/* 11. Logo wall (kept) */}
      <OurPartners />

      {/* 12. FAQs (12 questions) */}
      <FaqReuseable
        title="FAQs About Hiring Salesforce Product Managers"
        faqs={faqs}
      />

      {/* Schema: Service + FAQPage */}
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
        {/* TODO: ContactForm ko ye content chahiye (see notes):
            heading: "Book a Free Salesforce Consultation"
            intro: "Tell us about your org, the teams that send requests and roughly how many hours a week you need a product manager. We’ll reply within 24 hours with matching profiles."
            dropdown: Select a service… | Hire Salesforce Product Manager | Hire Salesforce Project Manager | Hire Salesforce Business Analyst | Salesforce ISV Development | Other
            note: "No spam. We’ll only use this to respond to your inquiry."
            button: "Book a Free Consultation" */}

            <CTASection />
        <ContactForm />
      </div>
    </>
  );
};

export default page;