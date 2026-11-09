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
const APPEXCHANGE_URL = '/salesforce-appexchange-development-company';
const SECURITY_REVIEW_URL = '/salesforce-security-review';
const DEVELOPERS_URL = '/hire-salesforce-developers';
const PRODUCT_MANAGERS_URL = '/hire-salesforce-product-managers';
const CLUTCH_URL = 'https://clutch.co/profile/saasverse'; // TODO: confirm Clutch profile URL

/* ---------------------------------- FAQs ---------------------------------- */
const faqs = [
  {
    question: 'What is a Salesforce ISV?',
    answer:
      'An ISV (independent software vendor) is a company that builds and sells software on the Salesforce platform, usually through AppExchange.',
  },
  {
    question: 'What is the difference between an ISV app and an OEM app?',
    answer:
      'An ISV app extends Salesforce for customers who already have Salesforce licenses. With an OEM app, your app runs on the Salesforce platform and you sell the platform license to customers as part of your product.',
  },
  {
    question:
      'What is the difference between a first-generation and a second-generation managed package?',
    answer:
      'Second-generation packages (2GP) are built from source control and scratch orgs, which makes versions easier to build and test. Salesforce recommends 2GP for new apps. We can move existing 1GP packages to 2GP.',
  },
  {
    question: 'Do we need to pass the security review?',
    answer:
      'Yes, if you want a public AppExchange listing. We prepare your app and help you through the review. See our security review services.',
  },
  {
    question: 'How do we manage licenses and trials?',
    answer:
      'With the License Management App and the Feature Management App, installed in your Partner Business Org. We set them up so you can see installs, versions and trials.',
  },
  {
    question: 'How do upgrades reach our customers?',
    answer:
      'You can let customers install new versions themselves or push upgrades to their orgs. We plan versions so upgrades don’t break customer setups.',
  },
  {
    question: 'Can you connect our SaaS product to Salesforce?',
    answer:
      'Yes. We build connector apps that bring your product’s data and actions into Salesforce, packaged for AppExchange.',
  },
  {
    question: 'Can you take over a package another team built?',
    answer:
      'Yes. We review the code and packaging, list what is risky or out of date and then take over development.',
  },
  {
    question: 'Who owns the code and IP?',
    answer:
      'You do. Ownership is set out in the contract, and we sign an NDA before we see your code.',
  },
  {
    question: 'How long does an ISV project take?',
    answer:
      'It depends on the product and where you are today. You’ll get a timeline in the written scope before any work starts.',
  },
  {
    question: 'What does Salesforce ISV development cost?',
    answer:
      'The cost depends on your requirements: new or existing product, features, integrations and whether you need a team every month. We send you the cost in writing after the discovery call.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you’ll get a reply within 24 hours.',
  },
];

/* ------------------------------ Schema (JSON-LD) ------------------------------ */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Salesforce ISV Development',
  url: 'https://www.saasverse.in/salesforce-isv-development-company',
  description:
    'Salesforce ISV development for software companies: product architecture, managed packages, security review, license setup and ongoing releases.',
  serviceType: 'Salesforce ISV product development',
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
      name: 'Salesforce ISV Development',
      item: 'https://www.saasverse.in/salesforce-isv-development-company',
    },
  ],
};

const schemas = [serviceSchema, faqSchema, breadcrumbSchema];

/* ------------------------------ Card sections ------------------------------ */
const whatWeDo = [
  {
    title: 'Product Architecture',
    description:
      'Your app has to work in thousands of different customer orgs. We design the data model, permission sets and limits so it does.',
  },
  {
    title: 'Managed Package Development',
    description:
      'We build your app as a second-generation managed package (2GP) with Apex, Lightning Web Components and Flow.',
  },
  {
    title: 'Connect Your SaaS Product to Salesforce',
    description:
      'If your main product lives outside Salesforce, we build the connector app that brings its data and actions into Salesforce.',
  },
  {
    title: 'Security Review',
    description: (
      <>
        We prepare your app for the AppExchange security review and fix what
        the scanners find. See our{' '}
        <Link href={SECURITY_REVIEW_URL} className={linkClass}>
          security review services
        </Link>
        .
      </>
    ),
  },
  {
    title: 'Licenses and Trials',
    description:
      'We set up the License Management App, the Feature Management App and trial orgs, so you can see who installed what.',
  },
  {
    title: 'Releases and Upgrades',
    description:
      'We plan package versions, run beta tests and push upgrades to customer orgs without breaking their setup.',
  },
  {
    title: 'Help for Your Support Team',
    description:
      'When a customer org has a technical problem, our developers help your support team find and fix it.',
  },
  {
    title: 'Agentforce Actions',
    description:
      'We build Agentforce actions and agents into your package, ready for AgentExchange, Salesforce’s marketplace for AI agents.',
  },
];

const waysToWork = [
  {
    title: 'Full Product Build',
    text: 'We design, build, test and launch your app, then hand it over or stay on.',
  },
  {
    title: 'Dedicated Product Team',
    text: 'Developers, an architect and a QA tester work on your product every month, from your backlog.',
  },
  {
    title: 'Help With One Part',
    text: 'A security review, a move from 1GP to 2GP, a performance problem or a new connector.',
  },
];

const steps = [
  {
    title: 'Discovery Call',
    text: 'Tell us about your product, your customers and where you are today. We sign an NDA first.',
  },
  {
    title: 'Review and Plan',
    text: 'For an existing package, we review the code and packaging. For a new product, we write the requirements and architecture.',
  },
  {
    title: 'Scope and Estimate',
    text: 'We send you a written scope with the timeline and cost. Nothing starts until you approve it.',
  },
  {
    title: 'Build in Short Cycles',
    text: 'We build in scratch orgs and show you working software at regular reviews.',
  },
  {
    title: 'Test in Real Orgs',
    text: 'We test in different editions and setups, so the package installs and works for every customer.',
  },
  {
    title: 'Release and Support',
    text: 'We publish the version, push the upgrade and stay on for the next release.',
  },
];

const commonProblems = [
  {
    title: 'Stuck on a First-Generation Package',
    description:
      'Old 1GP packaging makes every release slow and hard to test.',
  },
  {
    title: 'Failed Security Review',
    description:
      'The review report lists findings, and the launch date keeps moving.',
  },
  {
    title: 'Customers Hit Governor Limits',
    description: 'The app works in demos but fails in large customer orgs.',
  },
  {
    title: 'Installs Fail in Some Orgs',
    description:
      'The package depends on features or settings that some customers don’t have.',
  },
  {
    title: 'Slow Release Cycle',
    description:
      'Customers wait months for fixes because upgrades are hard to ship.',
  },
  {
    title: 'No View of Licenses',
    description:
      'You can’t see who installed the app, which version they run or when trials end.',
  },
];

const relatedServices = [
  {
    title: 'AppExchange App Development',
    intro: 'Get your first app built and listed.',
    linkText: 'Explore AppExchange development.',
    href: APPEXCHANGE_URL,
  },
  {
    title: 'Security Review Preparation',
    intro: 'Pass the AppExchange security review.',
    linkText: 'Explore security review services.',
    href: SECURITY_REVIEW_URL,
  },
  {
    title: 'Hire Salesforce Developers',
    intro: 'Add developers to your product team.',
    linkText: 'Hire Salesforce developers.',
    href: DEVELOPERS_URL,
  },
  {
    title: 'Hire a Product Manager',
    intro: 'Someone to own your app’s features and releases.',
    linkText: 'Hire Salesforce product managers.',
    href: PRODUCT_MANAGERS_URL,
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
      'Our developers, architects and QA testers work in one team, so your product is designed, built and tested by people who talk to each other every day.',
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
const PAGE_URL = 'https://www.saasverse.in/salesforce-isv-development-company';
const PAGE_TITLE = 'Salesforce ISV Development Company | Saasverse';
const PAGE_DESCRIPTION =
  'Salesforce ISV development for software companies: product architecture, managed packages, security review, license setup and ongoing releases.';

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
        title="Salesforce ISV Development Company"
        description="We help software companies build, ship and keep improving their product on Salesforce."
      />

      {/* 2. What We Do for ISVs (8 cards) */}
      <div id="what-we-do">
        <SalesforceServiceReuseable
          heading="What We Do for ISVs"
          benefits={whatWeDo}
        />
      </div>

      {/* 3. Building Your First App? */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold">Building Your First App?</h2>
        <p className="text-gray-700">
          If you’re starting from an idea and want an app built and listed,
          start with our{' '}
          <Link href={APPEXCHANGE_URL} className={linkClass}>
            Salesforce AppExchange development services
          </Link>
          . This page is for teams that already sell, or plan to sell, a
          product on Salesforce and need a team for the long run.
        </p>
      </section>

      {/* 4. Ways to Work With Us (3 cards) */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          Ways to Work With Us
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {waysToWork.map((m) => (
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

      {/* 5. How an ISV Project Works (6 steps) */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          How an ISV Project Works
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

      {/* 6. Common ISV Problems We Fix (6 cards) */}
      <SalesforceServiceReuseable
        heading="Common ISV Problems We Fix"
        benefits={commonProblems}
      />

      {/* 7. Cost (no prices) */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold">What ISV Development Costs</h2>
        <p className="text-gray-700">
          The cost depends on your requirements: whether it’s a new product or
          an existing package, how many features and integrations it has, how
          many editions you support and whether you need a team every month.
          After the discovery call, we send you a written scope with the cost
          and timeline.
        </p>
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
        heading="Why Choose Saasverse for Salesforce ISV Development"
        benefits={whySaasverse}
      />

      {/* 10. Credentials badge carousel (kept) */}
      <CertificateSlider />

      {/* 11. Logo wall (kept) */}
      <OurPartners />

      {/* 12. FAQs (12 questions) */}
      <FaqReuseable title="Salesforce ISV Development FAQs" faqs={faqs} />

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
            intro: "Tell us about your product, your customers and where you are today: idea, first version or live on AppExchange. We’ll reply within 24 hours."
            dropdown: Select a service… | Salesforce ISV Development | AppExchange App Development | Security Review Preparation | Hire Salesforce Developer | Other
            note: "No spam. We’ll only use this to respond to your inquiry."
            button: "Book a Free Consultation" */}
        <CTASection />
        <ContactForm />
      </div>
    </>
  );
};

export default page;