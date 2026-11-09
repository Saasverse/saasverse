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
const ISV_URL = '/salesforce-isv-development-company';
const SECURITY_REVIEW_URL = '/salesforce-security-review';
const CUSTOM_DEV_URL = '/salesforce-custom-development-services';
const DEVELOPERS_URL = '/hire-salesforce-developers';
const CLUTCH_URL = 'https://clutch.co/profile/saasverse'; // TODO: confirm Clutch profile URL

/* ---------------------------------- FAQs ---------------------------------- */
const faqs = [
  {
    question: 'What is AppExchange?',
    answer:
      'AppExchange is Salesforce’s marketplace, where companies find and install apps, components and agents that work with Salesforce.',
  },
  {
    question: 'How do we get an app listed on AppExchange?',
    answer:
      'You join the Salesforce partner program, build the app as a managed package, pass the security review and publish a listing. We help with each step.',
  },
  {
    question: 'How long does it take to build and list an app?',
    answer:
      'It depends on what the app does and how long the security review takes. You’ll get a timeline in the written scope before any work starts.',
  },
  {
    question: 'Do free apps need a security review?',
    answer:
      'Yes. Every app with a public AppExchange listing has to pass the security review, whether it’s free or paid.',
  },
  {
    question: 'What is a managed package?',
    answer:
      'A managed package is how you deliver your app to customers. It protects your code, carries your namespace and lets you release upgrades.',
  },
  {
    question: 'Should we use a first-generation or second-generation package?',
    answer:
      'For new apps, use a second-generation managed package (2GP). Salesforce recommends it, and it makes versions easier to build and test.',
  },
  {
    question: 'Can you build an app that connects our product to Salesforce?',
    answer:
      'Yes. We build connector apps that bring your product’s data and actions into Salesforce and list them on AppExchange.',
  },
  {
    question: 'What is AgentExchange?',
    answer:
      'AgentExchange is Salesforce’s marketplace for Agentforce agents, actions and templates. We can build Agentforce actions into your app.',
  },
  {
    question: 'Who owns the app and the code?',
    answer:
      'You do. Ownership is set out in the contract, and we sign an NDA before work starts.',
  },
  {
    question: 'What happens after the app is live?',
    answer:
      'We release fixes and new versions. Support is available 24/7, and every request gets a reply within 24 hours through our ticket portal or email.',
  },
  {
    question: 'What does AppExchange app development cost?',
    answer:
      'The cost depends on your requirements: what the app does, its screens and integrations, the editions you support and help with the review. We send you the cost in writing after the discovery call.',
  },
  {
    question: 'Is our idea and code safe with you?',
    answer:
      'We sign an NDA before you share your idea or code. Saasverse is ISO 27001 and Cyber Essentials Plus certified.',
  },
];

/* ------------------------------ Schema (JSON-LD) ------------------------------ */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Salesforce AppExchange App Development',
  url: 'https://www.saasverse.in/salesforce-appexchange-development-company',
  description:
    'Salesforce AppExchange app development: we design and build your app, package it, take it through the security review and publish the listing.',
  serviceType: 'Salesforce AppExchange app development',
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

// The doc says "three blocks" but lists two. This third block mirrors the ISV page.
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
      name: 'Salesforce AppExchange Development',
      item: 'https://www.saasverse.in/salesforce-appexchange-development-company',
    },
  ],
};

const schemas = [serviceSchema, faqSchema, breadcrumbSchema];

/* ------------------------------ Card sections ------------------------------ */
const whatWeDo = [
  {
    title: 'Check the Idea',
    description:
      'We look at similar apps on AppExchange and at the Salesforce editions and clouds your buyers use, before anything is built.',
  },
  {
    title: 'Design That Feels Native',
    description:
      'We design screens with the Salesforce Lightning Design System, so your app looks and works like the rest of Salesforce.',
  },
  {
    title: 'Build the App',
    description:
      'We build with Lightning Web Components, Apex, Flow and custom objects, inside a namespace that belongs to you.',
  },
  {
    title: 'Set Up the Managed Package',
    description:
      'We set up a second-generation managed package (2GP), so every version is built and tested the same way.',
  },
  {
    title: 'Test in Different Orgs',
    description:
      'We install and test the app in different editions and setups, so it works for every customer, not just in your demo org.',
  },
  {
    title: 'Security Review',
    description: (
      <>
        We scan the code, fix the findings and prepare the submission. See our{' '}
        <Link href={SECURITY_REVIEW_URL} className={linkClass}>
          security review services
        </Link>
        .
      </>
    ),
  },
  {
    title: 'Listing and Launch',
    description:
      'We help you set up the listing, screenshots, demo video and trial, so buyers can try the app.',
  },
  {
    title: 'Updates After Launch',
    description: (
      <>
        We release fixes and new versions after launch. For long-term product
        work, see our{' '}
        <Link href={ISV_URL} className={linkClass}>
          Salesforce ISV development services
        </Link>
        .
      </>
    ),
  },
];

const appTypes = [
  {
    title: 'Apps Built on Salesforce',
    description:
      'Your whole product runs inside Salesforce, with its own objects, pages and automation.',
  },
  {
    title: 'Connector Apps',
    description:
      'Your product lives outside Salesforce, and the app brings its data and actions into Salesforce.',
  },
  {
    title: 'Lightning Components',
    description:
      'Ready-made components that customers drop onto their own record pages.',
  },
  {
    title: 'Agentforce Actions and Agents',
    description:
      'Actions and agents for Agentforce, listed on AgentExchange, Salesforce’s marketplace for AI agents.',
  },
];

const steps = [
  {
    title: 'Discovery Call',
    text: 'Tell us about the app, who will buy it and which Salesforce editions they use. We sign an NDA first.',
  },
  {
    title: 'Scope and Plan',
    text: 'We send you a written scope with the timeline and cost. Nothing starts until you approve it.',
  },
  {
    title: 'Design',
    text: 'We design the data model and the screens, and agree on them with you.',
  },
  {
    title: 'Build',
    text: 'We build in scratch orgs and show you working pieces at regular reviews.',
  },
  {
    title: 'Test',
    text: 'We test in different editions and with your users, then fix what we find.',
  },
  {
    title: 'Security Review',
    text: 'We prepare the submission and support you until the app is approved.',
  },
  {
    title: 'Listing and Launch',
    text: 'We help publish the listing and release the first version.',
  },
];

const holdUps = [
  {
    title: 'A Failed Security Review',
    description:
      'Findings in the review report push the launch back by weeks.',
  },
  {
    title: 'Installs That Fail',
    description: 'The package depends on features some editions don’t have.',
  },
  {
    title: 'Partner Setup Not Done',
    description:
      'The partner agreement, Partner Business Org or namespace is set up late.',
  },
  {
    title: 'An Incomplete Listing',
    description:
      'Missing screenshots, documents or trial setup delay the listing.',
  },
  {
    title: 'License Setup Left Too Late',
    description:
      'Nobody set up the License Management App before the first customer installed.',
  },
  {
    title: 'No Plan for Updates',
    description:
      'The first version ships, and nobody knows how fixes will reach customers.',
  },
];

const relatedServices = [
  {
    title: 'Salesforce ISV Development',
    intro: 'Long-term product engineering for software companies.',
    linkText: 'Explore ISV development.',
    href: ISV_URL,
  },
  {
    title: 'Security Review Preparation',
    intro: 'Get your app through the AppExchange security review.',
    linkText: 'Explore security review services.',
    href: SECURITY_REVIEW_URL,
  },
  {
    title: 'Salesforce Custom Development',
    intro: 'Custom apps for your own org, not for sale.',
    linkText: 'Explore custom development.',
    href: CUSTOM_DEV_URL,
  },
  {
    title: 'Hire Salesforce Developers',
    intro: 'Add developers to your own team.',
    linkText: 'Hire Salesforce developers.',
    href: DEVELOPERS_URL,
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
      'Our developers, architects and QA testers work in one team, so design, code and testing are planned together from day one.',
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
const PAGE_URL =
  'https://www.saasverse.in/salesforce-appexchange-development-company';
const PAGE_TITLE = 'Salesforce AppExchange Development Company | Saasverse';
const PAGE_DESCRIPTION =
  'Salesforce AppExchange app development: we design and build your app, package it, take it through the security review and publish the listing.';

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
        title="Salesforce AppExchange Development Company"
        description="We design, build and list your app on AppExchange, from first idea to live listing."
      />

      {/* 2. What We Do (8 cards) */}
      <SalesforceServiceReuseable heading="What We Do" benefits={whatWeDo} />

      {/* 3. Types of AppExchange Apps We Build (4 cards) */}
      <SalesforceServiceReuseable
        heading="Types of AppExchange Apps We Build"
        benefits={appTypes}
      />

      {/* 4. How an AppExchange Project Works (7 steps) */}
      <section id="how-it-works" className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          How an AppExchange Project Works
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

      {/* 5. What Can Hold Up a Launch (6 cards) */}
      <SalesforceServiceReuseable
        heading="What Can Hold Up a Launch"
        benefits={holdUps}
      />

      {/* 6. Building a Product Business on Salesforce? */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold">
          Building a Product Business on Salesforce?
        </h2>
        <p className="text-gray-700">
          If you already sell on AppExchange, or need a team to keep improving
          your product every month, see our{' '}
          <Link href={ISV_URL} className={linkClass}>
            Salesforce ISV development services
          </Link>
          .
        </p>
      </section>

      {/* 7. Cost (no prices) */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold">
          What AppExchange App Development Costs
        </h2>
        <p className="text-gray-700">
          The cost depends on your requirements: what the app does, how many
          screens and integrations it has, which editions you support and how
          much help you need with the security review and listing. After the
          discovery call, we send you a written scope with the cost and
          timeline. You can choose a fixed-scope project or time and materials.
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
        heading="Why Choose Saasverse for AppExchange Development"
        benefits={whySaasverse}
      />

      {/* 10. Credentials badge carousel (kept) */}
      <CertificateSlider />

      {/* 11. Logo wall (kept) */}
      <OurPartners />

      {/* 12. FAQs (12 questions) */}
      <FaqReuseable title="Salesforce AppExchange Development FAQs" faqs={faqs} />

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
            intro: "Tell us about your app idea, who will buy it and where you are today. We’ll reply within 24 hours."
            dropdown: Select a service… | AppExchange App Development | Salesforce ISV Development | Security Review Preparation | Salesforce Custom Development | Other
            note: "No spam. We’ll only use this to respond to your inquiry."
            button: "Book a Free Consultation" */}
        <CTASection />
        <ContactForm />
      </div>
    </>
  );
};

export default page;