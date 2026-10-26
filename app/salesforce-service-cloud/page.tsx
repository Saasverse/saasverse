import React from 'react';
import PageBanner from '../components/PageBanner';
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CTASection from '../components/Home/CTASection';
import HealthSolution from '../work-salesforce-health-cloud/HealthSolution';
import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';

import { Metadata } from 'next';
import Link from 'next/link';

const faqs = [
  {
    question: 'What does a Salesforce Service Cloud consultant do?',
    answer:
      'A Service Cloud consultant maps how your support team works, then sets up case management, routing, knowledge, SLAs, automation and reports in Salesforce to match. They also plan the data migration and the integrations with your other systems.',
  },
  {
    question: 'How long does a Service Cloud implementation take?',
    answer:
      'It depends on the number of agents, the channels, the integrations and the amount of data to migrate. We give you a timeline in the written scope, before work starts.',
  },
  {
    question:
      'Can you move our cases from another help desk or a shared inbox?',
    answer:
      'Yes. We migrate open and past cases, contacts and accounts, map the fields and check the record counts after each load.',
  },
  {
    question: 'Can you fix our existing Service Cloud setup?',
    answer:
      'Yes. We review your current setup, keep what works, fix what is broken and remove what nobody uses.',
  },
  {
    question: 'Can Service Cloud connect to our phone system?',
    answer:
      'Yes. Service Cloud works with many phone systems through computer telephony integration (CTI), and Salesforce also offers Service Cloud Voice. We check which option fits your current phone provider.',
  },
  {
    question: 'Do we need Experience Cloud for a customer portal?',
    answer:
      'If you want customers to log in, see their cases and search help articles, Experience Cloud is the usual way to build that portal on top of Service Cloud. We can set up both.',
  },
  {
    question: 'What does Service Cloud consulting cost?',
    answer:
      'The cost depends on your requirements: the number of agents, the channels, the integrations, the data to migrate and the custom development involved. We send the cost in writing after the discovery call.',
  },
  {
    question: 'Do you provide support after go-live?',
    answer:
      'Yes. We stay on after launch to fix issues and make changes. For ongoing support, we offer Salesforce managed services.',
  },
];

const benefits = [
  {
    title: 'Case Management',
    description:
      'We set up Email-to-Case, Web-to-Case, case record types, queues and assignment rules, so every request becomes a case and reaches the right team.',
  },
  {
    title: 'Omni-Channel Routing',
    description:
      'We route cases, chats and messages to agents based on their skills, workload and availability.',
  },
  {
    title: 'Service Console',
    description:
      'We build a console that shows the case, the customer’s history and related records on one screen.',
  },
  {
    title: ' Knowledge Base',
    description: (
      <>
        We set up Salesforce Knowledge so agents can find answers and attach
        them to cases, and publish articles to a customer portal built on{' '}
        <a
          href="/experience-cloud"
          className="text-[#003e95] font-semibold hover:underline"
        >
          Experience Cloud
        </a>{' '}
        if you have one.
      </>
    ),
  },
  {
    title: 'SLAs and Escalations',
    description:
      'We set up entitlements, milestones and escalation rules, so cases that are close to missing an SLA are flagged in time.',
  },
  {
    title: 'Automation with Flow',
    description:
      'We automate case updates, notifications, approvals and follow-up tasks with Flow, and add macros for steps agents repeat every day.',
  },
  {
    title: 'Reports and Dashboards',
    description:
      'We build reports on case volume, first response time, resolution time and backlog, and check the numbers with your support leads.',
  },
  {
    title: 'Integrations',
    description: (
      <>
        We connect Service Cloud to your phone system, ERP, order or billing
        system, so agents see what they need without leaving Salesforce. See our{' '}
        <a
          href="/salesforce-integration-services"
          className="text-[#003e95] font-semibold hover:underline"
        >
          Salesforce integration services.
        </a>
      </>
    ),
  },
];

const orgOptions = [
  {
    number: '01',
    title: 'New Service Cloud Implementation',
    description: (
      <>
        Moving from shared inboxes, spreadsheets or another help desk? We plan
        the setup, migrate your open and past cases, and launch with your team.
        See our{' '}
        <a
          href="/salesforce-implementation-services"
          className="text-[#003e95] font-semibold hover:underline"
        >
          Salesforce implementation services.
        </a>
      </>
    ),
  },
  {
    number: '02',
    title: 'Improving an Existing Service Cloud Org',
    description:
      'If agents work around the system, cases get lost or the reports don’t add up, we review your setup, fix what is broken and remove what nobody uses.',
  },
];

const reasons = [
  {
    number: '01',
    title: 'Salesforce Partner with Navigator Expert Status',
    description:
      'Salesforce gives Navigator Expert status to partners based on certified experts, completed projects and customer feedback.',
  },
  {
    number: '02',
    title: '50+ Certified Salesforce Experts',
    description:
      'Our team includes certified Service Cloud consultants, and developers and architects from the same team join when a task needs them.',
  },
  {
    number: '03',
    title: '120+ Projects for 40+ Clients',
    description:
      'We have delivered 120+ projects for 40+ clients across 19 countries.',
  },
  {
    number: '04',
    title: 'US Time-Zone Overlap',
    description:
      'Our team is based in Jaipur, India. We agree to overlap working hours with your team, so we can join your meetings.',
  },
  {
    number: '05',
    title: 'Security and Confidentiality',
    description:
      'Saasverse is ISO 27001 and Cyber Essentials Plus certified. We sign an NDA before we access your systems.',
  },
];
export const metadata: Metadata = {
  title: 'Salesforce Service Cloud Consulting | Saasverse',
  description:
    'Salesforce Service Cloud consulting: case management, routing, knowledge, SLAs and automation for US support teams. Book a free consultation.',
  alternates: {
    canonical: 'https://www.saasverse.in/salesforce-service-cloud',
  },
};

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/expbanner.webp"
        title="Salesforce Service Cloud Consulting"
        description="We set up and improve Salesforce Service Cloud for support teams: case management, routing, knowledge, SLAs, automation and reporting."
      />

      <SalesforceServiceReuseable
        heading="What We Set Up"
        benefits={benefits}
      />

      {/* New Org or Existing Org */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              Salesforce Implementation
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              New Implementation or Existing Org
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              Whether you are implementing Salesforce for the first time or
              improving an existing org, we tailor the approach to your needs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {orgOptions.map((option) => (
              <div
                key={option.number}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#003e95]/40 hover:shadow-xl sm:p-9"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#003e95]/10 text-lg font-bold text-[#003e95] transition-colors duration-300 group-hover:bg-[#003e95] group-hover:text-white">
                  {option.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-gray-900 sm:text-2xl">
                  {option.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-gray-600">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HealthSolution
        title=" How We Work"
        highlight=""
        description=""
        image="/images/websiteimages/21.jpg"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Discovery Call',
            description:
              'Tell us how your support team works today, which channels you use and which systems Service Cloud must connect to. We sign an NDA first if you want one.',
          },
          {
            title: 'Scope and Plan',
            description:
              'We write down what will be built, the timeline and the cost. You review and approve it.',
          },
          {
            title: 'Build in a Sandbox',
            description:
              'We configure and test in a sandbox and show you progress at regular reviews.',
          },
          {
            title: 'Data and Testing',
            description:
              'We migrate cases, contacts and accounts, and test each process with your agents.',
          },
          {
            title: 'Go-Live and Support',
            description:
              'We launch, hand over the documentation and stay on to fix issues after launch.',
          },
        ]}
      />

      <section className="w-full bg-[#fbfaf7] py-16 md:py-20">
        {' '}
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {' '}
          <div className="mx-auto max-w-4xl text-center">
            {' '}
            <h2 className="mb-6  font-bold tracking-tight text-gray-900 ">
              {' '}
              Related Clouds and Services{' '}
            </h2>{' '}
            <p className=" leading-8 text-gray-600 ">
              {' '}
              Service Cloud often works with{' '}
              <a
                href="/experience-cloud"
                className="font-semibold text-[#003e95] hover:underline"
              >
                {' '}
                Experience Cloud{' '}
              </a>{' '}
              for customer self-service,{' '}
              <a
                href="/field-service-lightning"
                className="font-semibold text-[#003e95] hover:underline"
              >
                {' '}
                Field Service{' '}
              </a>{' '}
              for on-site work and{' '}
              <a
                href="/salesforce-sales-cloud"
                className="font-semibold text-[#003e95] hover:underline"
              >
                {' '}
                Sales Cloud{' '}
              </a>{' '}
              for a shared view of each customer. For changes and fixes after
              launch, see our{' '}
              <a
                href="/salesforce-managed-services"
                className="font-semibold text-[#003e95] hover:underline"
              >
                {' '}
                Salesforce managed services{' '}
              </a>{' '}
              .{' '}
            </p>{' '}
          </div>{' '}
        </div>{' '}
      </section>

      {/* Implementation Cost */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#003e95] px-6 py-10 text-white shadow-xl sm:px-12 sm:py-14 lg:px-16">
            {/* Decorative background elements */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10"
            />

            <div className="relative z-10 max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
                Transparent Planning
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                What Service Cloud Consulting Costs
              </h2>

              <p className="mt-6 text-base leading-8 text-white/85 sm:text-lg">
                The cost depends on your requirements: the number of agents, the
                channels you support, the integrations, the cases and data to
                migrate and how much custom development is involved.
              </p>

              <p className="mt-4 text-base leading-8 text-white/85 sm:text-lg">
                After the discovery call, we send a written scope with the cost
                and timeline. You can choose a fixed-scope project or time and
                materials.
              </p>

              <Link
                href="/contact#contact-form"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white px-7 py-4 text-center text-sm font-semibold text-[#003e95] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 sm:w-auto sm:text-base"
              >
                Book a Free Consultation
                <svg
                  className="ml-2 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-7-7 7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Saasverse */}
      <section className="bg-white py-16 sm:py-20">
        {' '}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {' '}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            {' '}
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              {' '}
              Why Choose Saasverse{' '}
            </span>{' '}
            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              {' '}
              Why Choose Saasverse for Service Cloud{' '}
            </h2>{' '}
          </div>{' '}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {' '}
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#003e95]/40 hover:shadow-lg sm:p-7"
              >
                {' '}
                <span className="text-sm font-bold tracking-widest text-[#003e95]">
                  {' '}
                  {reason.number}{' '}
                </span>{' '}
                <h3 className="mt-4 text-lg font-bold leading-snug text-gray-900 sm:text-xl">
                  {' '}
                  {reason.title}{' '}
                </h3>{' '}
                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                  {' '}
                  {reason.description}{' '}
                </p>{' '}
              </div>
            ))}{' '}
            {/* Clutch Reviews */}{' '}
            <div className="flex flex-col items-start rounded-2xl border border-[#003e95]/20 bg-blue-50/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
              {' '}
              <span className="text-sm font-bold tracking-widest text-[#043e8f]">
                {' '}
                06{' '}
              </span>{' '}
              <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                {' '}
                Rated 5.0 on Clutch{' '}
              </h3>{' '}
              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                {' '}
                Read what clients say about working with us.{' '}
              </p>{' '}
              <a
                href="https://clutch.co/profile/saasverse-salesforce-consulting-partner"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center font-semibold text-[#003e95] hover:underline"
              >
                {' '}
                Read our reviews{' '}
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  {' '}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17 17 7M8 7h9v9"
                  />{' '}
                </svg>{' '}
              </a>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </section>

      <CertificateSlider />

      <OurPartners />

      <FaqReuseable title="FAQ" faqs={faqs} />
      <CTASection />
      <ContactForm />
    </>
  );
};

export default page;
