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
    question: 'What is the Salesforce security review?',
    answer:
      'It’s the check Salesforce runs on every app before it can be listed publicly on AppExchange. The security team tests the package and any external services it uses for common security problems.',
  },
  {
    question: 'Do free apps need to pass the security review?',
    answer:
      'Yes. Every app with a public AppExchange listing has to pass, whether it’s free or paid.',
  },
  {
    question: 'How long does the security review take?',
    answer:
      'It depends on how ready your app is and how long Salesforce’s review queue is at the time. The review itself often takes several weeks. We give you our own timeline for the preparation work in the written scope.',
  },
  {
    question: 'What are the most common reasons apps fail?',
    answer:
      'Missing CRUD and FLS checks, Apex classes without sharing, unescaped user input, hard-coded secrets, weak external servers and false positives submitted without explanations.',
  },
  {
    question: 'Which tools do you use to prepare an app?',
    answer:
      'Salesforce Code Analyzer, the Checkmarx scan in the Partner Security Portal, and tools such as OWASP ZAP or Burp Suite for external web services.',
  },
  {
    question: 'What is a false-positive document?',
    answer:
      'Scanners often flag code that is not a real risk. A false-positive document explains each of those findings, so the review team can see why it’s safe.',
  },
  {
    question: 'Our app already failed. Can you help?',
    answer:
      'Yes. Send us the failure report. We fix every finding, scan again and help you resubmit.',
  },
  {
    question: 'Are external web services tested too?',
    answer:
      'Yes. If your app calls your own servers or APIs, the review team tests them as well. We scan them before you submit.',
  },
  {
    question: 'Do you need access to our source code?',
    answer:
      'Yes. We need the package source or a development org to scan and fix the code. We sign an NDA first, and your code stays yours.',
  },
  {
    question: 'Does Salesforce review the app again after it’s listed?',
    answer:
      'Salesforce can review listed apps again. We recommend scanning each new version before release, and we can do that for you.',
  },
  {
    question: 'What does security review preparation cost?',
    answer:
      'The cost depends on your requirements: the size of the package, the number of findings and whether external services are in scope. We send you the cost in writing after the readiness check.',
  },
  {
    question: 'Is our code safe with you?',
    answer:
      'We sign an NDA before we access your code or orgs. Saasverse is ISO 27001 and Cyber Essentials Plus certified, and you decide what access our team gets.',
  },
];

/* ------------------------------ Schema (JSON-LD) ------------------------------ */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Salesforce AppExchange Security Review Services',
  url: 'https://www.saasverse.in/salesforce-security-review',
  description:
    'Get your app through the Salesforce AppExchange security review. We scan your code, fix CRUD, FLS and sharing issues, and prepare the submission.',
  serviceType: 'Salesforce AppExchange security review preparation',
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
const ISV_URL = '/salesforce-isv-development-company';
const APPEXCHANGE_URL = '/salesforce-appexchange-development-company';
const CUSTOM_DEV_URL = '/salesforce-custom-development-services';
const DEVELOPERS_URL = '/hire-salesforce-developers';
const SUPPORT_URL = '/salesforce-support-and-maintenance-services';
const MANAGED_SERVICES_URL = '/salesforce-managed-services';
const CLUTCH_URL = 'https://clutch.co/profile/saasverse';

/* ------------------------------ Card sections ------------------------------ */
const reviewChecks = [
  {
    title: 'Object and Field Access',
    description:
      'Your code must respect CRUD and field-level security, so users only read and change the records and fields they’re allowed to.',
  },
  {
    title: 'Record Sharing',
    description:
      'Apex classes must follow sharing rules, so your app never shows records a user shouldn’t see.',
  },
  {
    title: 'SOQL and SOSL Injection',
    description:
      'User input must never be added to a query as plain text without escaping or binding.',
  },
  {
    title: 'Cross-Site Scripting',
    description:
      'Lightning Web Components, Aura components and Visualforce pages must not output user input without encoding.',
  },
  {
    title: 'Secrets and Credentials',
    description:
      'API keys and passwords can’t sit in code. They belong in Named Credentials or protected custom metadata.',
  },
  {
    title: 'External Web Services',
    description:
      'Any server your app calls is tested too, including its TLS setup, login and known vulnerabilities.',
  },
  {
    title: 'Third-Party Libraries',
    description:
      'JavaScript libraries with known vulnerabilities have to be updated or removed.',
  },
  {
    title: 'Connected Apps and OAuth',
    description:
      'Connected apps should ask only for the access they need, and tokens must be stored safely.',
  },
];

const prepareApp = [
  {
    title: 'Pre-Review Scan',
    description:
      'We scan your package with Salesforce Code Analyzer and the Checkmarx scan in the Partner Security Portal before you submit.',
  },
  {
    title: 'Fix the Findings',
    description:
      'Our developers fix CRUD and FLS checks, sharing, injection and cross-site scripting issues in your code.',
  },
  {
    title: 'Test Your External Endpoints',
    description:
      'We scan the web services your app connects to with tools such as OWASP ZAP or Burp Suite.',
  },
  {
    title: 'Write the False-Positive Document',
    description:
      'Scanners flag things that aren’t real problems. We explain each one, so the reviewers don’t have to guess.',
  },
  {
    title: 'Prepare the Submission',
    description:
      'We set up the test org, test users and the step-by-step usage notes the review team needs.',
  },
  {
    title: 'Fix and Resubmit After a Failure',
    description:
      'If your app has already failed, we read the report, fix every finding and help you resubmit.',
  },
];

const steps = [
  {
    title: 'Discovery Call',
    text: 'Tell us about your app, its components and any external services it uses. We sign an NDA first.',
  },
  {
    title: 'Readiness Check',
    text: 'We scan the package and your endpoints and send you a list of findings, ranked by risk.',
  },
  {
    title: 'Scope and Plan',
    text: 'We send you a written scope with the timeline and cost. Nothing starts until you approve it.',
  },
  {
    title: 'Fix',
    text: 'We fix the findings in your development org or code repository and scan again.',
  },
  {
    title: 'Submit',
    text: 'We prepare the documents and test org, and you submit through the Salesforce Partner Console.',
  },
  {
    title: 'Support Through the Review',
    text: 'We answer the review team’s questions and fix anything they raise until the app is approved.',
  },
];

const whyAppsFail = [
  {
    title: 'Missing CRUD and FLS Checks',
    description: 'Code reads or updates fields without checking the user’s access.',
  },
  {
    title: 'Classes Without Sharing',
    description:
      'Apex runs in system mode and shows records the user shouldn’t see.',
  },
  {
    title: 'Unescaped User Input',
    description: 'Input goes straight into a query or onto a page.',
  },
  {
    title: 'Hard-Coded Secrets',
    description:
      'Keys or passwords are stored in code or in unprotected custom settings.',
  },
  {
    title: 'Weak External Servers',
    description:
      'Old TLS versions, missing login checks or outdated server software.',
  },
  {
    title: 'Scan Results Without Explanations',
    description:
      'Findings that are false positives are submitted with no document explaining them.',
  },
];

const relatedServices = [
  {
    title: 'Salesforce ISV Development',
    intro: 'Building a product business on Salesforce?',
    linkText: 'Explore ISV development.',
    href: ISV_URL,
  },
  {
    title: 'AppExchange App Development',
    intro: 'Need the app built first?',
    linkText: 'Explore AppExchange development.',
    href: APPEXCHANGE_URL,
  },
  {
    title: 'Salesforce Custom Development',
    intro: 'Apex, Lightning Web Components and Flow for your own org.',
    linkText: 'Explore custom development.',
    href: CUSTOM_DEV_URL,
  },
  {
    title: 'Hire Salesforce Developers',
    intro: 'Add a developer to your product team.',
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
      'Our developers build managed packages for AppExchange, so they know what the review team looks for.',
  },
  {
    title: '120+ Projects for 40+ Clients',
    description:
      'We’ve delivered 120+ projects for 40+ clients across 19+ countries.',
  },
  {
    title: 'Support After Approval',
    description:
      'Salesforce can review listed apps again. We can scan each new version before you release it. Support is available 24/7, with a reply within 24 hours.',
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
const PAGE_URL = 'https://www.saasverse.in/salesforce-security-review';
const PAGE_TITLE = 'Salesforce AppExchange Security Review Services | Saasverse';
const PAGE_DESCRIPTION =
  'Get your app through the Salesforce AppExchange security review. We scan your code, fix CRUD, FLS and sharing issues, and prepare the submission.';

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
        title="Salesforce AppExchange Security Review Services"
        description="We get your app ready for the AppExchange security review and help you through to approval."
      />

      {/* 2. What the Security Review Checks (8 cards) */}
      <SalesforceServiceReuseable
        heading="What the Security Review Checks"
        benefits={reviewChecks}
      />
      <p className="mx-auto max-w-3xl px-4 pb-8 text-center text-gray-700">
        Salesforce tests every app before it can be listed publicly on
        AppExchange, including free apps. The security team tests your package
        and any web services or APIs it connects to outside Salesforce.
      </p>

      {/* 3. How We Prepare Your App (6 cards) */}
      <SalesforceServiceReuseable
        heading="How We Prepare Your App"
        benefits={prepareApp}
      />

      {/* 4. How a Security Review Project Works (6 steps) */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          How a Security Review Project Works
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

      {/* 5. Common Reasons Apps Fail the Security Review (6 cards) */}
      <div id="why-apps-fail">
        <SalesforceServiceReuseable
          heading="Common Reasons Apps Fail the Security Review"
          benefits={whyAppsFail}
        />
      </div>

      {/* 6. Need a Security Check of Your Own Org? */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold">
          Need a Security Check of Your Own Org?
        </h2>
        <p className="text-gray-700">
          This page is about the review Salesforce runs on AppExchange apps. If
          you want us to check users, permissions, sharing and the Security
          Health Check in your own Salesforce org, see our{' '}
          <Link href={SUPPORT_URL} className={linkClass}>
            Salesforce support and maintenance services
          </Link>{' '}
          or{' '}
          <Link href={MANAGED_SERVICES_URL} className={linkClass}>
            Salesforce managed services
          </Link>
          .
        </p>
      </section>

      {/* 7. Cost (no prices) */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold">
          What Security Review Preparation Costs
        </h2>
        <p className="text-gray-700">
          The cost depends on your requirements: the size of your package, how
          many findings the scans show, whether external services are in scope
          and whether this is a first review or a resubmission. After the
          readiness check, we send you the cost and timeline in writing.
          Salesforce’s own review fee, where it applies, is separate from our
          work.
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
        heading="Why Choose Saasverse for Salesforce Security Review"
        benefits={whySaasverse}
      />

      {/* 10. Credentials badge carousel (kept) */}
      <CertificateSlider />

      {/* 11. Logo wall (kept) */}
      <OurPartners />

      {/* 12. FAQs (12 questions) */}
      <FaqReuseable title="Salesforce Security Review FAQs" faqs={faqs} />

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
            intro: "Tell us about your app, its components and any external services it uses. If it has already failed the review, attach or describe the report. We’ll reply within 24 hours."
            dropdown: Select a service… | Security Review Preparation | AppExchange App Development | Salesforce ISV Development | Salesforce Custom Development | Other
            note: "No spam. We’ll only use this to respond to your inquiry."
            button: "Book a Free Consultation" */}
        <CTASection />
        <ContactForm />
      </div>
    </>
  );
};

export default page;