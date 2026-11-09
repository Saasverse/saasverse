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
    question: 'What does a Salesforce project manager do?',
    answer:
      'A Salesforce project manager plans the project, runs it day to day, controls scope, tracks risks, reports progress every week and leads testing and go-live.',
  },
  {
    question: 'What is the difference between a project manager and a product manager?',
    answer:
      'A project manager runs one project from start to go-live, with a fixed scope and date. A product manager owns your Salesforce roadmap over time and decides what gets built next.',
  },
  {
    question: 'What is the difference between a project manager and a business analyst?',
    answer:
      'A business analyst works out and writes down what to build. A project manager makes sure it gets built on time, within budget and by the right people.',
  },
  {
    question: 'Do your project managers use Agile or waterfall?',
    answer:
      'Both. Most Salesforce projects run in sprints, with fixed milestones for testing and go-live. We follow the way your company already works.',
  },
  {
    question: 'Which tools do your project managers use?',
    answer:
      'Whatever your team already uses, such as Jira, Azure DevOps, Asana or Smartsheet. If you don’t have a tool yet, we’ll suggest one.',
  },
  {
    question: 'Are your project managers certified?',
    answer:
      'Our project managers hold project management and Salesforce certifications. Each profile we send lists that person’s own certifications.',
  },
  {
    question: 'Can your project manager run work from other vendors?',
    answer:
      'Yes. Many clients use our project manager to coordinate their own team, another Salesforce partner and other vendors on the same plan.',
  },
  {
    question: 'How quickly can a project manager start?',
    answer:
      'Many engagements start within a few days. A project manager with a specific cloud or industry background can take a few weeks. We give you a start date when we send profiles.',
  },
  {
    question: 'Which hiring model should I choose?',
    answer:
      'Hourly works for a project review. A part-time project manager works for one or two projects. A full-time project manager works for a large rollout or several projects at once.',
  },
  {
    question: 'What does it cost to hire a Salesforce project manager?',
    answer:
      'The cost depends on your requirements: the hiring model, the hours, the size of the project and how many teams are involved. We send you the cost in writing before anyone starts.',
  },
  {
    question: 'Will the project manager work in my time zone?',
    answer:
      'Our team is based in Jaipur, India, and works with clients in the US. Before work starts, we agree on overlapping hours, so your project manager can run your stand-ups and status calls.',
  },
  {
    question: 'Is my data safe with a hired project manager?',
    answer:
      'We sign an NDA before we access your org or documents. Saasverse is ISO 27001 and Cyber Essentials Plus certified, and you decide what the project manager can see.',
  },
];

/* ------------------------------ Schema (JSON-LD) ------------------------------ */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Salesforce Project Managers',
  url: 'https://www.saasverse.in/hire-salesforce-project-managers',
  description:
    'Hire Salesforce project managers in India to plan, run and deliver your Salesforce project on schedule. Hourly, part-time or full-time.',
  serviceType: 'Salesforce project management',
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
const PRODUCT_MANAGERS_URL = '/hire-salesforce-product-managers';
const BA_URL = '/hire-salesforce-business-analyst';
const ARCHITECT_URL = '/hire-salesforce-architect';
const CONSULTANTS_URL = '/hire-salesforce-consultants';
const IMPLEMENTATION_URL = '/salesforce-implementation-services';
const CLUTCH_URL = 'https://clutch.co/profile/saasverse';

/* ------------------------------ Card sections ------------------------------ */
const pmDoes = [
  {
    title: 'Builds the Project Plan',
    description:
      'Your project manager sets the scope, milestones and timeline, and writes down who does what.',
  },
  {
    title: 'Runs the Day-to-Day',
    description:
      'Your project manager runs stand-ups and sprint planning and keeps tasks moving in Jira or whichever tool your team uses.',
  },
  {
    title: 'Keeps Scope Under Control',
    description:
      'New requests are logged, estimated and approved before anyone starts on them, so the project doesn’t grow without anyone noticing.',
  },
  {
    title: 'Tracks Risks and Issues',
    description:
      'Your project manager keeps a log of risks, issues and decisions, and raises problems early, while they’re still small.',
  },
  {
    title: 'Reports Progress Every Week',
    description:
      'You get a short status report: what’s done, what’s next, what’s blocked and how much of the budget is used.',
  },
  {
    title: 'Coordinates Everyone',
    description:
      'Your teams, our consultants and developers, and any other vendors all work from the same plan.',
  },
  {
    title: 'Plans Testing and Go-Live',
    description:
      'Your project manager schedules user testing, writes the go-live plan with a rollback step and runs the go/no-go call.',
  },
  {
    title: 'Hands Over Cleanly',
    description:
      'At the end, documentation, training and support are in place before the project closes.',
  },
];

const deliverables = [
  {
    title: 'Project Plan',
    description: 'Scope, milestones, timeline and owners on one page.',
  },
  {
    title: 'Weekly Status Report',
    description: 'Progress, next steps, blockers and budget used.',
  },
  {
    title: 'Risk and Issue Log',
    description: 'Every risk, issue and decision, with an owner and a date.',
  },
  {
    title: 'Change Request Log',
    description:
      'Every new request, its effect on time and cost, and who approved it.',
  },
  {
    title: 'Go-Live Plan',
    description:
      'The cutover steps, who does each one, and how to roll back if needed.',
  },
  {
    title: 'Project Close Report',
    description:
      'What was delivered, what is still open and who looks after it now.',
  },
];

const whenCompaniesHire = [
  {
    title: 'A Rollout Is About to Start',
    description:
      'You’re setting up Salesforce or adding a new cloud, and nobody owns the plan.',
  },
  {
    title: 'The Project Is Behind',
    description:
      'Dates keep moving, and nobody can say what is actually left to do.',
  },
  {
    title: 'Too Many Vendors',
    description:
      'Several partners and internal teams work on the same org, and nobody coordinates them.',
  },
  {
    title: 'Your Team Has No Time',
    description:
      'Your Salesforce lead is also doing their day job, and the project waits.',
  },
  {
    title: 'A Migration or a Merger',
    description:
      'You’re moving from another CRM or combining orgs, with many teams and a fixed date.',
  },
  {
    title: 'Leadership Wants Clear Reporting',
    description:
      'Executives want to know where the project stands without chasing anyone.',
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
      'Your project manager works next to our consultants, architects and developers, so plans are checked against what can actually be built.',
  },
  {
    title: '120+ Projects for 40+ Clients',
    description:
      'We’ve delivered 120+ projects for 40+ clients across 19+ countries.',
  },
  {
    title: 'US Time-Zone Overlap',
    description:
      'Our team is based in Jaipur, India. We agree on overlapping working hours, so your project manager can run stand-ups and status calls in your working day.',
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
    text: 'You pay only for the hours used. Good for a project review or getting a stalled project back on track.',
  },
  {
    title: 'Part-Time Dedicated Project Manager',
    text: 'The same project manager works with your team for a set number of hours each week. Good for one or two projects that need steady oversight.',
  },
  {
    title: 'Full-Time Dedicated Project Manager',
    text: 'A project manager works only on your account. Good for a large rollout, a migration or several projects at once.',
  },
];

const steps = [
  {
    title: 'Tell Us What You Need',
    text: 'Share the project, the teams involved and roughly how many hours a week you expect. If you’d like an NDA first, we’ll sign one.',
  },
  {
    title: 'Get Matching Profiles',
    text: 'We send you profiles of project managers who have run Salesforce projects like yours.',
  },
  {
    title: 'Interview Them',
    text: 'Talk to the project managers and ask how they would run your project. You decide who joins.',
  },
  {
    title: 'Agree on Terms',
    text: 'We put the model, hours and cost in writing. You give the project manager access to the tools your team uses.',
  },
  {
    title: 'Start Work',
    text: 'Your project manager joins your meetings and tools and shares progress as often as you want.',
  },
];

/* -------------------------------- Metadata -------------------------------- */
const PAGE_URL = 'https://www.saasverse.in/hire-salesforce-project-managers';
const PAGE_TITLE = 'Hire Salesforce Project Managers in India | Saasverse';
const PAGE_DESCRIPTION =
  'Hire Salesforce project managers in India to plan, run and deliver your Salesforce project on schedule. Hourly, part-time or full-time.';

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
        title="Hire Salesforce Project Managers in India"
        description="Salesforce project managers who keep your project on schedule and everyone on the same page."
      />

      {/* 2. What a Salesforce Project Manager Does for You (8 cards) */}
      <SalesforceServiceReuseable
        heading="What a Salesforce Project Manager Does for You"
        benefits={pmDoes}
      />

      {/* 3. What You Get (6 cards) */}
      <SalesforceServiceReuseable heading="What You Get" benefits={deliverables} />
      <p className="mx-auto max-w-3xl px-4 pb-8 text-center text-gray-700">
        Your project manager leaves you with documents your team can keep using
        after the project ends.
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
          What It Costs to Hire a Salesforce Project Manager
        </h2>
        <p className="text-gray-700">
          The cost depends on your requirements: the hiring model, how many
          hours a week you need, the size of the project and how many teams and
          vendors are involved. Tell us what you need and our experts will send
          you a quote. You get the cost and terms in writing before anyone
          starts.
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
        heading="When Companies Hire a Salesforce Project Manager"
        benefits={whenCompaniesHire}
      />

      {/* 8. Project Manager, Product Manager or Business Analyst */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          Project Manager, Product Manager or Business Analyst
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Salesforce Project Manager</h3>
            <p className="text-gray-700">
              You need someone to run the plan, timeline and budget of a project
              until it goes live. That’s the role on this page.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Salesforce Product Manager</h3>
            <p className="text-gray-700">
              You need someone to own your Salesforce roadmap long term and
              decide what gets built next.{' '}
              <Link href={PRODUCT_MANAGERS_URL} className={linkClass}>
                Hire Salesforce product managers.
              </Link>
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Salesforce Business Analyst</h3>
            <p className="text-gray-700">
              You need someone to work out and write down the detailed
              requirements.{' '}
              <Link href={BA_URL} className={linkClass}>
                Hire a Salesforce business analyst.
              </Link>
            </p>
          </div>
        </div>
        <p className="mt-6 text-center text-gray-700">
          You can also{' '}
          <Link href={ARCHITECT_URL} className={linkClass}>
            hire a Salesforce architect
          </Link>{' '}
          or{' '}
          <Link href={CONSULTANTS_URL} className={linkClass}>
            hire Salesforce consultants
          </Link>
          . Would you rather we run the whole project? See our{' '}
          <Link href={IMPLEMENTATION_URL} className={linkClass}>
            Salesforce implementation services
          </Link>
          .
        </p>
      </section>

      {/* 9. Why Hire from Saasverse (6 cards) */}
      <SalesforceServiceReuseable
        heading="Why Hire Salesforce Project Managers from Saasverse"
        benefits={whySaasverse}
      />

      {/* 10. Credentials badge carousel (kept) */}
      <CertificateSlider />

      {/* 11. Logo wall (kept) */}
      <OurPartners />

      {/* 12. FAQs (12 questions) */}
      <FaqReuseable
        title="FAQs About Hiring Salesforce Project Managers"
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
        {/* TODO: ContactForm ke andar ye content set karna hai:
            heading: "Book a Free Salesforce Consultation"
            intro: "Tell us about the project, the teams involved and roughly how many hours a week you need a project manager. We’ll reply within 24 hours with matching profiles."
            dropdown: Select a service… | Hire Salesforce Project Manager | Hire Salesforce Consultant | Salesforce Implementation | Salesforce Consulting | Other
            note: "No spam. We’ll only use this to respond to your inquiry."
            button: "Book a Free Consultation" */}
        <CTASection />
        <ContactForm />
      </div>
    </>
  );
};

export default page;