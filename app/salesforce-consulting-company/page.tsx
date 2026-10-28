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
import SalesforceConsultingSections from '../components/SalesforceConsultingSections';

const faqs = [
  {
    question: 'What does a Salesforce consulting company do?',
    answer:
      'A Salesforce consulting company reviews how you use Salesforce, plans what to change and designs the processes, data model and integrations behind it. Many consulting companies, including Saasverse, can also build what they recommend.',
  },
  {
    question:
      'What is the difference between Salesforce consulting and implementation?',
    answer:
      'Consulting is the advice and the plan: reviews, roadmaps, architecture and requirements. Implementation is the build: configuration, development, data migration, testing and go-live. You can hire us for one or both.',
  },
  {
    question: 'Can you review our existing Salesforce org?',
    answer:
      'Yes. We review your setup, data, automation, security and reports, and give you a written report with the fixes in order of priority.',
  },
  {
    question: 'What do we get at the end of a consulting engagement?',
    answer:
      'Depending on the scope: an org health report, a roadmap, process maps, an architecture diagram, requirements and user stories, and a license recommendation. Your team keeps all of it.',
  },
  {
    question: 'Do we have to use you to build what you recommend?',
    answer:
      'No. You get a written plan and requirements that your own team or another partner can build from. If you want us to build it, we can.',
  },
  {
    question:
      'Can you help us choose the right Salesforce clouds and licenses?',
    answer:
      'Yes. We look at how your teams work and recommend which clouds, editions and add-ons you need, and which you can skip.',
  },
  {
    question:
      'We still use Workflow Rules and Process Builder. What should we do?',
    answer:
      'Salesforce ended support for both on December 31, 2025, so they should be moved to Flow. We list every old automation in your org and plan the move in order of risk.',
  },
  {
    question: 'Can you review a proposal from another Salesforce partner?',
    answer:
      'Yes. We review the scope, approach and effort, and tell you what is missing, unclear or overestimated before you sign.',
  },
  {
    question: 'Do you offer ongoing Salesforce advice?',
    answer:
      'Yes. With ongoing advisory, you get a set number of consulting hours each month for design reviews, advice and new requests.',
  },
  {
    question: 'How long does a Salesforce consulting engagement take?',
    answer:
      'It depends on what you need. A focused org review is shorter than a full roadmap across several teams and clouds. We give you a timeline in the written scope, before work starts.',
  },
  {
    question: 'What does Salesforce consulting cost?',
    answer:
      'The cost depends on your requirements: the size of your org, the clouds involved, the number of teams and whether you need a one-time review or ongoing advice. We send the cost in writing after the discovery call.',
  },
  {
    question: 'Will your consultants work in our time zone?',
    answer:
      'Our team is based in Jaipur, India, and works with clients in the US. Before work starts, we agree on overlapping hours, so we can join your meetings.',
  },
];

const benefits = [
  {
    title: 'Org Review',
    description:
      'We go through your Salesforce org and list what works, what is broken and what is risky: unused fields, old automation, security gaps, slow pages and reports nobody trusts. You get a written report with the fixes in order of priority, so you know where to start.',
  },
  {
    title: 'Roadmap and Priorities',
    description:
      'We turn your business goals into a plan for the next 6 to 12 months: what to build first, what can wait and what to stop doing. Each item in the roadmap has an owner, an effort estimate and a reason it is there.',
  },
  {
    title: 'Process Design',
    description:
      'We map how your sales, service or operations teams work today, step by step, and design how that work should run in Salesforce. We do this before anyone writes a line of code, so the build matches the way people work.',
  },
  {
    title: 'Solution Architecture',
    description: (
      <>
        {' '}
        We design the data model, the integrations and the security model, so
        the setup still works as you add users, clouds and systems. For complex
        orgs, you can also{' '}
        <Link
          href="/hire-salesforce-architect"
          className="text-blue-600 hover:underline"
        >
          {' '}
          hire a Salesforce architect{' '}
        </Link>{' '}
        to stay with your team.{' '}
      </>
    ),
  },
  {
    title: 'Cloud and License Selection',
    description:
      'We help you decide which Salesforce clouds, editions and add-ons you need, and which you don’t, based on how your teams work. This often saves money on licenses nobody uses.',
  },
  {
    title: 'Requirements and Scope',
    description:
      'We write the requirements and user stories for each change, with acceptance criteria, so your team, our team or another partner can build it without guesswork.',
  },
  {
    title: 'Second Opinion on Proposals',
    description:
      'Received a large proposal from another vendor? We review the scope, the approach and the effort before you sign, and tell you what is missing or overestimated.',
  },
  {
    title: 'Adoption Review',
    description:
      'We talk to your users, find out where they work around Salesforce instead of in it, and recommend changes to page layouts, automation and reports to fix that.',
  },
];

interface Deliverable {
  title: string;
  description: string;
}
const deliverables: Deliverable[] = [
  {
    title: 'Org Health Report',
    description:
      'A list of issues in your org, each with the risk it carries, the fix and the effort to fix it.',
  },
  {
    title: 'Roadmap',
    description:
      'A prioritized plan for the next 6 to 12 months, with timelines and dependencies.',
  },
  {
    title: 'Process Maps',
    description:
      'Diagrams of how each process works today and how it will work in Salesforce.',
  },
  {
    title: 'Architecture Diagram',
    description:
      'The data model, integrations and security model on one page, for your team and any future partner.',
  },
  {
    title: 'Requirements and User Stories',
    description:
      'Build-ready requirements with acceptance criteria for each change.',
  },
  {
    title: 'License Recommendation',
    description:
      'Which clouds, editions and add-ons you need, and which you can drop or skip.',
  },
];

export const metadata: Metadata = {
  title: 'Salesforce Consulting Company | Saasverse',
  description:
    'Salesforce consulting from a certified Salesforce Partner: org reviews, roadmaps, architecture and process design for US teams. Book a free consultation',

  alternates: {
    canonical: 'https://www.saasverse.in/salesforce-consulting-company',
  },
};
const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/banner002.webp"
        title="Salesforce Consulting Company"
        description="Certified Salesforce consultants who review your org, plan your roadmap and design processes that your team will use, before anything is built. "
      />

      <SalesforceServiceReuseable
        heading=" What Our Salesforce Consulting Covers"
        subheading="Salesforce consulting is the work that happens before and around the build: finding out what is wrong, deciding what to change and designing how it should work. Our consultants cover eight areas."
        benefits={benefits}
      />

      <section className="bg-white py-16 md:py-20">
        {' '}
        <div className="container mx-auto px-4">
          {' '}
          {/* Section Heading */}{' '}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            {' '}
            <h2 className="mb-5">
              {' '}
              What You Get from a Consulting Engagement{' '}
            </h2>{' '}
            <p className="leading-7 text-gray-600">
              {' '}
              Every engagement ends with documents your team keeps and can act
              on, whether or not you work with us afterwards.{' '}
            </p>{' '}
          </div>{' '}
          {/* Deliverables Grid */}{' '}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {' '}
            {deliverables.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#006b95] hover:shadow-lg"
              >
                {' '}
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#eaf5f9] text-lg font-semibold text-[#006b95] transition-colors duration-300 group-hover:bg-[#006b95] group-hover:text-white">
                  {' '}
                  {String(index + 1).padStart(2, '0')}{' '}
                </div>{' '}
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {' '}
                  {item.title}{' '}
                </h3>{' '}
                <p className="leading-7 text-gray-600">
                  {' '}
                  {item.description}{' '}
                </p>{' '}
              </div>
            ))}{' '}
          </div>{' '}
        </div>{' '}
      </section>


<SalesforceConsultingSections/>
      <HealthSolution
        title="Why Choose Saasverse for "
        highlight="Salesforce Consulting "
        description=""
        image="/images/websiteimages/4.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Salesforce Partner with Navigator Expert Status',
            description:
              'Salesforce gives Navigator Expert status to partners based on certified experts, completed projects and customer feedback.',
          },
          {
            title: '50+ Certified Salesforce Experts',
            description:
              'Consultants, architects and developers work in the same team, so the advice we give is advice we know how to build.',
          },
          {
            title: '120+ Projects for 40+ Clients',
            description:
              'We have delivered 120+ projects for 40+ clients across 19+ countries.',
          },
          {
            title: 'US Time-Zone Overlap',
            description:
              'Our team is based in Jaipur, India. We agree on overlapping working hours with your team, so we can join your meetings.',
          },
          {
            title: 'Security and Confidentiality',
            description:
              'Saasverse is ISO 27001 and Cyber Essentials Plus certified. We sign an NDA before we access your org.',
          },
          {
            title: 'Rated 5.0 on Clutch',
            description: (
              <>
                {' '}
                Read what clients say about working with us.{' '}
                <a
                  href="https://clutch.co/profile/saasverse-salesforce-consulting-partner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {' '}
                  Read our reviews{' '}
                </a>{' '}
              </>
            ),
          },
        ]}
      />

      <CertificateSlider />

      <OurPartners />

      <FaqReuseable title="Salesforce Consulting FAQs" faqs={faqs} />
      <CTASection />
      <ContactForm />
    </>
  );
};

export default page;
