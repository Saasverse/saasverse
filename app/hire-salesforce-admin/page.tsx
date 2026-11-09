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
    question: 'What does a Salesforce admin do?',
    answer:
      'A Salesforce admin manages users and access, makes changes such as new fields and page layouts, builds automation with Flow, builds reports and dashboards, keeps data clean and tests each Salesforce release.',
  },
  {
    question: 'What is the difference between a Salesforce admin and a developer?',
    answer:
      'An admin makes changes with clicks, using setup, Flow and reports. A developer writes code, such as Apex and Lightning Web Components, when clicks aren’t enough.',
  },
  {
    question: 'Should I hire a full-time or part-time admin?',
    answer:
      'It depends on how many requests come in. Many smaller teams start with a part-time admin. A large org, a new rollout or several teams sending requests usually needs a full-time admin.',
  },
  {
    question: 'Are your admins certified?',
    answer:
      'Yes. Our admins hold Salesforce admin certifications. Each profile we send lists that person’s own certifications.',
  },
  {
    question: 'How quickly can an admin start?',
    answer:
      'Many engagements start within a few days. An admin with a specific cloud or industry background can take a few weeks. We give you a start date when we send profiles.',
  },
  {
    question: 'Can I interview the admin before hiring?',
    answer:
      'Yes. You talk to the admins we suggest and decide who joins your team.',
  },
  {
    question: 'Can your admin move our Workflow Rules and Process Builder to Flow?',
    answer:
      'Yes. Salesforce ended support for both on December 31, 2025. Your admin lists every old automation, moves it to Flow and tests it in a sandbox first.',
  },
  {
    question: 'What is the difference between hiring an admin and managed services?',
    answer:
      'A hired admin is one person who works inside your team. With managed services, our team runs your whole org every month: admin work, changes, releases and planning.',
  },
  {
    question: 'Can a hired admin work with our in-house team or another partner?',
    answer:
      'Yes. Many clients use our admins next to their own developers or another Salesforce partner.',
  },
  {
    question: 'What does it cost to hire a Salesforce admin?',
    answer:
      'The cost depends on your requirements: the hiring model, the hours, the number of users and clouds, and how many requests come in. We send you the cost in writing before anyone starts.',
  },
  {
    question: 'Will the admin work in my time zone?',
    answer:
      'Our team is based in Jaipur, India, and works with clients in the US. Before work starts, we agree on overlapping hours, so your admin can join your meetings and handle requests during your working day.',
  },
  {
    question: 'Is my data safe with a hired admin?',
    answer:
      'We sign an NDA before we access your org or documents. Saasverse is ISO 27001 and Cyber Essentials Plus certified, and you decide what the admin can see.',
  },
];

/* ------------------------------ Schema (JSON-LD) ------------------------------ */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Salesforce Admins',
  url: 'https://www.saasverse.in/hire-salesforce-admin',
  description:
    'Hire Salesforce admins in India to manage users, permissions, Flow, reports and data in your org. Hourly, part-time or full-time.',
  serviceType: 'Salesforce administration',
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

/* ------------------------------ Links ------------------------------ */
// TODO: confirm these URLs match your live pages
const CONSULTANTS_URL = '/hire-salesforce-consultants';
const DEVELOPERS_URL = '/hire-salesforce-developers';
const BA_URL = '/hire-salesforce-business-analyst';
const ARCHITECT_URL = '/hire-salesforce-architect';
const MANAGED_SERVICES_URL = '/salesforce-managed-services';
const CLUTCH_URL = 'https://clutch.co/profile/saasverse';

/* ------------------------------ Card sections ------------------------------ */
const adminDoes = [
  {
    title: 'Manages Users and Access',
    description:
      'Your admin sets up new users, assigns roles and permission sets, and removes access the day someone leaves.',
  },
  {
    title: 'Handles Daily Requests',
    description:
      'New fields, picklist values, page layouts and list views. Your admin picks up the small requests that pile up every week.',
  },
  {
    title: 'Builds Automation With Flow',
    description:
      'Your admin builds approvals, alerts and record updates in Flow, and moves old Workflow Rules and Process Builder automation to Flow.',
  },
  {
    title: 'Builds Reports and Dashboards',
    description:
      'Your admin builds the reports and dashboards your managers look at, and fixes the ones that show the wrong numbers.',
  },
  {
    title: 'Keeps Your Data Clean',
    description:
      'Your admin sets up duplicate and validation rules, runs data imports and cleans up records that are missing key fields.',
  },
  {
    title: 'Tests Each Salesforce Release',
    description:
      'Salesforce updates every org three times a year. Your admin checks each release in a sandbox before it reaches your users.',
  },
  {
    title: 'Looks After Security',
    description:
      'Your admin reviews the Security Health Check, multi-factor authentication, login settings and inactive users with access.',
  },
  {
    title: 'Helps Your Users',
    description:
      'Your admin answers how-to questions, writes short guides and shows new hires how to use Salesforce.',
  },
];

const whenCompaniesHire = [
  {
    title: 'Your Only Admin Just Left',
    description:
      'Nobody else knows how the org is set up, and requests are already waiting.',
  },
  {
    title: 'Requests Pile Up',
    description:
      'Small changes take weeks because nobody has time to make them.',
  },
  {
    title: 'An Accidental Admin',
    description:
      'Someone in sales ops or IT runs Salesforce on top of their real job.',
  },
  {
    title: 'Data Is a Mess',
    description:
      'Duplicates, missing fields and old records make reports hard to trust.',
  },
  {
    title: 'After a New Rollout',
    description:
      'Salesforce is live, and someone needs to look after it every day.',
  },
  {
    title: 'Old Automation Still Running',
    description:
      'Salesforce ended support for Workflow Rules and Process Builder on December 31, 2025, and yours still run key processes.',
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
      'Your admin can call on our developers and architects when a request needs code or a bigger design.',
  },
  {
    title: '120+ Projects for 40+ Clients',
    description:
      'We’ve delivered 120+ projects for 40+ clients across 19+ countries.',
  },
  {
    title: 'US Time-Zone Overlap',
    description:
      'Our team is based in Jaipur, India. We agree on overlapping working hours, so your admin can join your meetings and answer requests during your working day.',
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
    text: 'You pay only for the hours used. Good for a backlog of small requests or a one-time cleanup.',
  },
  {
    title: 'Part-Time Dedicated Admin',
    text: 'The same admin works with your team for a set number of hours each week. Good when requests come in every week but don’t fill a full-time role.',
  },
  {
    title: 'Full-Time Dedicated Admin',
    text: 'An admin works only on your account. Good for a large org, a new rollout or several teams sending requests.',
  },
];

const steps = [
  {
    title: 'Tell Us What You Need',
    text: 'Share your org, the clouds you use and roughly how many hours a week you need. If you’d like an NDA first, we’ll sign one.',
  },
  {
    title: 'Get Matching Profiles',
    text: 'We send you profiles of admins who know your clouds and the kind of requests you get.',
  },
  {
    title: 'Interview Them',
    text: 'Talk to the admins and ask how they would handle your current backlog. You decide who joins.',
  },
  {
    title: 'Agree on Terms',
    text: 'We put the model, hours and cost in writing. You give the admin access to the tools your team uses.',
  },
  {
    title: 'Start Work',
    text: 'Your admin joins your meetings and tools and shares progress as often as you want.',
  },
];

/* -------------------------------- Metadata -------------------------------- */
const PAGE_URL = 'https://www.saasverse.in/hire-salesforce-admin';
const PAGE_TITLE = 'Hire Salesforce Admins in India | Saasverse';
const PAGE_DESCRIPTION =
  'Hire Salesforce admins in India to manage users, permissions, Flow, reports and data in your org. Hourly, part-time or full-time.';

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
      {/* 1. Hero: H1, one line (trust line: keep your existing one) */}
      <PageBanner
        image="/images/banner/hirebanner.webp"
        title="Hire Salesforce Admins in India"
        description="Certified Salesforce admins who take care of your org’s day-to-day work, from new users to new reports."
      />

      {/* 2. What a Salesforce Admin Does for You (8 cards) */}
      <SalesforceServiceReuseable
        heading="What a Salesforce Admin Does for You"
        benefits={adminDoes}
      />

      {/* 3. Hiring Models */}
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

      {/* 4. Cost (no prices) */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold">
          What It Costs to Hire a Salesforce Admin
        </h2>
        <p className="text-gray-700">
          The cost depends on your requirements: the hiring model, how many
          hours a week you need, how many users and clouds you have, and how
          many requests come in. Tell us what you need and our experts will send
          you a quote. You get the cost and terms in writing before anyone
          starts.
        </p>
      </section>

      {/* 5. How Hiring Works (5 steps) */}
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

      {/* 6. When Companies Hire (6 cards) */}
      <SalesforceServiceReuseable
        heading="When Companies Hire a Salesforce Admin"
        benefits={whenCompaniesHire}
      />

      {/* 7. Admin, Consultant or Developer */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          Admin, Consultant or Developer
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Salesforce Admin</h3>
            <p className="text-gray-700">
              You need someone to run your org day to day and make changes
              without code. That’s the role on this page.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Salesforce Consultant</h3>
            <p className="text-gray-700">
              You need someone to design a bigger change, such as a new cloud or
              a new sales process.{' '}
              <Link href={CONSULTANTS_URL} className={linkClass}>
                Hire Salesforce consultants.
              </Link>
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Salesforce Developer</h3>
            <p className="text-gray-700">
              You need code: Apex, Lightning Web Components or integrations.{' '}
              <Link href={DEVELOPERS_URL} className={linkClass}>
                Hire Salesforce developers.
              </Link>
            </p>
          </div>
        </div>
        <p className="mt-6 text-center text-gray-700">
          You can also{' '}
          <Link href={BA_URL} className={linkClass}>
            hire a Salesforce business analyst
          </Link>{' '}
          or{' '}
          <Link href={ARCHITECT_URL} className={linkClass}>
            hire a Salesforce architect
          </Link>
          . Would you rather a team runs the whole org every month? See our{' '}
          <Link href={MANAGED_SERVICES_URL} className={linkClass}>
            Salesforce managed services
          </Link>
          .
        </p>
      </section>

      {/* 8. Why Hire from Saasverse (6 cards) */}
      <SalesforceServiceReuseable
        heading="Why Hire Salesforce Admins from Saasverse"
        benefits={whySaasverse}
      />

      {/* 9. Credentials badge carousel (kept) */}
      <CertificateSlider />

      {/* 10. Logo wall (kept) */}
      <OurPartners />

      {/* 11. FAQs (12 questions) */}
      <FaqReuseable
        title="FAQs About Hiring Salesforce Admins"
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

      {/* 12. Form: Book a Free Salesforce Consultation */}
      <div id="book-a-free-consultation">
        {/* TODO: ContactForm ke andar ye content set karna hai:
            heading: "Book a Free Salesforce Consultation"
            intro: "Tell us about your org, how many users you have and roughly how many hours a week you need an admin. We’ll reply within 24 hours with matching profiles."
            dropdown: Select a service… | Hire Salesforce Admin | Hire Salesforce Developer | Hire Salesforce Consultant | Salesforce Managed Services | Other
            note: "No spam. We’ll only use this to respond to your inquiry."
            button: "Book a Free Consultation" */}
        <CTASection />
        <ContactForm />
      </div>
    </>
  );
};

export default page;