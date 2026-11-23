import React from 'react';
import PageBanner from '../components/PageBanner';
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';
import { Metadata } from 'next';
import Link from 'next/link';

const linkClass =
  'font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900';

/* ------------------------------ Links ------------------------------ */
const EXPERIENCE_CLOUD_URL = '/salesforce-experience-cloud-services';
const CUSTOM_DEV_URL = '/salesforce-custom-development-services';
const SERVICE_CLOUD_URL = '/salesforce-service-cloud-services';
const CLUTCH_URL = 'https://clutch.co/profile/saasverse';

/* ---------------------------------- FAQs ---------------------------------- */
const faqs = [
  { question: "What is Salesforce Mobile Publisher?", answer: "Mobile Publisher is a Salesforce product that turns your Experience Cloud site, or the Salesforce mobile app, into your own branded app that you publish in the App Store and Google Play." },
  { question: "What is the difference between the two versions?", answer: "Mobile Publisher for Experience Cloud turns your portal into an app for customers, partners or members. Mobile Publisher for Salesforce App gives your staff a branded version of the Salesforce mobile app." },
  { question: "Do we need our own Apple and Google developer accounts?", answer: "Yes. The app is published under your company’s Apple Developer Program and Google Play developer accounts. We help you set them up." },
  { question: "Do we need a separate Mobile Publisher license?", answer: "Yes. Mobile Publisher is licensed separately by Salesforce. We help you check which version you need." },
  { question: "Do we need to rebuild our site for the app?", answer: "Usually not. The app shows your Experience Cloud site, so the main work is making sure the site works well on phones." },
  { question: "Can the app send push notifications?", answer: "Yes. We set up notifications for things like new messages, case updates or orders." },
  { question: "Do site changes need a new app release?", answer: "Most content and page changes show in the app without a new release. Changes to the app itself, such as the icon or name, need a new submission." },
  { question: "How long does Apple or Google review take?", answer: "It varies. Reviews often take a few days, and sometimes longer if the store asks questions. We prepare the listing carefully to avoid delays." },
  { question: "Is Mobile Publisher the right choice for us?", answer: "It suits portals and staff apps built on Salesforce. If you need a fully custom app with features Salesforce doesn’t support, we’ll tell you before you start." },
  { question: "How long does a Mobile Publisher project take?", answer: "It depends on how much the site needs to change and on store review times. You’ll get a timeline in the written scope before any work starts." },
  { question: "What do Mobile Publisher services cost?", answer: "The cost depends on your requirements: site changes, notifications and store submissions. We send you the cost in writing after the discovery call." },
  { question: "Do you provide support after launch?", answer: "Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you’ll get a reply within 24 hours." }
];

/* ------------------------------ Schema (JSON-LD) ------------------------------ */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Salesforce Mobile Publisher Services',
  url: 'https://www.saasverse.in/mobile-publisher-services',
  description:
    'Salesforce Mobile Publisher services: we turn your Experience Cloud site or Salesforce app into your own branded app and help publish it to app stores.',
  serviceType: 'Salesforce Mobile Publisher setup and app store publishing',
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
      name: 'Salesforce Mobile Publisher Services',
      item: 'https://www.saasverse.in/mobile-publisher-services',
    },
  ],
};

const schemas = [serviceSchema, faqSchema, breadcrumbSchema];

/* ------------------------------ Page sections ------------------------------ */
const whatWeDo = [
  {
    title: 'Get the Site Ready for Mobile',
    description:
      'We check your Experience Cloud site on phones and fix the pages, menus and components that don’t work well on a small screen.',
  },
  {
    title: 'Set Up the Mobile Publisher Project',
    description:
      'We create the project in Salesforce with your app name, icons, colors and login settings, and request the app files.',
  },
  {
    title: 'Push Notifications',
    description:
      'We set up notifications, so users hear about new cases, orders or messages.',
  },
  {
    title: 'App Store and Google Play Submission',
    description:
      'We prepare the store listing, screenshots and privacy details, and submit the app under your developer accounts.',
  },
  {
    title: 'Testing on Real Devices',
    description:
      'We test login, navigation and notifications on iPhone and Android phones before the app goes to review.',
  },
  {
    title: 'Updates After Launch',
    description:
      'Site changes usually show in the app without a new release. When the app itself needs an update, we prepare and submit it.',
  },
];

const publisherTypes = [
  {
    title: 'Mobile Publisher for Experience Cloud',
    description:
      'Your customer, partner or member portal as your own branded app. Best for people outside your company.',
  },
  {
    title: 'Mobile Publisher for Salesforce App',
    description:
      'The Salesforce mobile app with your name and branding, for your own staff.',
  },
];

const prerequisites = [
  'A Mobile Publisher license from Salesforce.',
  'An Apple Developer Program account and a Google Play developer account in your company’s name.',
  'An Experience Cloud site that works well on phones (for the Experience Cloud version).',
  'Your app name, icons, colors and a privacy policy page.',
];

const steps = [
  {
    title: 'Discovery Call',
    text: 'Tell us who will use the app and what they need to do in it. If you’d like an NDA first, we’ll sign one.',
  },
  {
    title: 'Site and Account Check',
    text: 'We check your site on phones and your Salesforce, Apple and Google accounts.',
  },
  {
    title: 'Scope and Plan',
    text: 'We send you a written scope with the timeline and cost. Nothing starts until you approve it.',
  },
  {
    title: 'Build the App',
    text: 'We fix the site for mobile and set up the Mobile Publisher project, branding and notifications.',
  },
  {
    title: 'Test and Submit',
    text: 'We test on real phones and submit the app to the App Store and Google Play.',
  },
  {
    title: 'Launch and Support',
    text: 'We help with any store review questions and stay on for updates after launch.',
  },
];

const relatedServices = [
  {
    title: 'Experience Cloud',
    intro: 'Build the portal your app is based on.',
    linkText: 'Explore Experience Cloud services.',
    href: EXPERIENCE_CLOUD_URL,
  },
  {
    title: 'Salesforce Custom Development',
    intro: 'Custom components that work on phones.',
    linkText: 'Explore custom development.',
    href: CUSTOM_DEV_URL,
  },
  {
    title: 'Service Cloud',
    intro: 'Cases and support behind your customer app.',
    linkText: 'Explore Service Cloud services.',
    href: SERVICE_CLOUD_URL,
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
      'Our Experience Cloud consultants and developers build the site and the app together, so both work the same way.',
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
const PAGE_URL = 'https://www.saasverse.in/mobile-publisher-services';
const PAGE_TITLE = 'Salesforce Mobile Publisher Services | Saasverse';
const PAGE_DESCRIPTION =
  'Salesforce Mobile Publisher services: we turn your Experience Cloud site or Salesforce app into your own branded app and help publish it to app stores.';

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
      {/* Keep PageBanner's existing trust line unchanged */}
      <PageBanner
        image="/images/banner/hirebanner.webp"
        title="Salesforce Mobile Publisher Services"
        description="We turn your Experience Cloud site or Salesforce app into your own branded app in the App Store and Google Play."
      />

     

      {/* What We Do: 6 cards */}
      <div id="what-we-do">
        <SalesforceServiceReuseable
          heading="What We Do With Mobile Publisher"
          benefits={whatWeDo}
        />
      </div>

      {/* Which Mobile Publisher Do You Need? */}
      <SalesforceServiceReuseable
        heading="Which Mobile Publisher Do You Need?"
        benefits={publisherTypes}
      />

      {/* What You Need Before You Start */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-6 text-center text-3xl font-semibold">
          What You Need Before You Start
        </h2>
        <ul className="list-disc space-y-3 pl-6 text-gray-700">
          {prerequisites.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-5 text-center text-gray-700">
          Don’t have all of these yet? We help you set them up.
        </p>
      </section>

      {/* How a Mobile Publisher Project Works: 6 steps */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          How a Mobile Publisher Project Works
        </h2>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-lg border border-gray-200 p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-700 font-semibold text-white">
                {index + 1}
              </span>
              <p className="text-gray-700">
                <strong className="text-gray-900">{step.title}.</strong>{' '}
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Cost section: no prices */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold">
          What Mobile Publisher Services Cost
        </h2>
        <p className="text-gray-700">
          The cost depends on your requirements: how much your site needs to
          change for mobile, whether you need push notifications, and how many
          store submissions are involved. After the discovery call, we send you
          a written scope with the cost and timeline. The Mobile Publisher
          license and the Apple and Google developer accounts are separate from
          our work.
        </p>
        <a
          href="#book-a-free-consultation"
          className="mt-6 inline-block rounded-md bg-[#003e95] px-6 py-3 font-medium text-white hover:bg-blue-900"
        >
          Book a Free Consultation
        </a>
      </section>

      {/* Related Clouds and Services: 3 cards */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          Related Clouds and Services
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {relatedServices.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-gray-200 p-6 shadow-sm"
            >
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-700">
                {service.intro}{' '}
                <Link href={service.href} className={linkClass}>
                  {service.linkText}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Saasverse: 6 cards */}
      <SalesforceServiceReuseable
        heading="Why Choose Saasverse for Mobile Publisher"
        benefits={whySaasverse}
      />

      {/* Keep existing credentials and logo wall */}
      <CertificateSlider />
      <OurPartners />

      {/* 12 Mobile Publisher FAQs */}
      <FaqReuseable title="Salesforce Mobile Publisher FAQs" faqs={faqs} />

      {/* Form section */}
      <section id="book-a-free-consultation" className="scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 pt-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold">
            Book a Free Salesforce Consultation
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-gray-700">
            Tell us whether you want an app for customers or for your staff, and
            whether you already have an Experience Cloud site. We’ll reply
            within 24 hours.
          </p>
        </div>
        {/*
          Update ContactForm component dropdown options to:
          Select a service… | Mobile Publisher | Experience Cloud |
          Salesforce Custom Development | Other
          Add the note under its submit button:
          No spam. We’ll only use this to respond to your inquiry.
        */}
        <div id="contact-form">
          <ContactForm />
        </div>
      </section>

    

      {/* Service + FAQPage + BreadcrumbList JSON-LD */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
          }}
        />
      ))}
    </>
  );
};

export default page;
