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
    question: 'What is Agentforce?',
    answer:
      'Agentforce is Salesforce’s platform for AI agents. An agent can answer questions and take actions, such as updating a record or booking a meeting, within rules you set.',
  },
  {
    question: 'How is Agentforce different from Einstein?',
    answer:
      'Einstein was Salesforce’s earlier AI brand, for predictions such as lead scoring and later for generative features. Agentforce is about agents that take actions. Many Einstein features are still available.',
  },
  {
    question: 'What can an AI agent do in Salesforce?',
    answer:
      'Answer customer questions, summarize cases, follow up with leads, draft emails, look up orders and update records, using only the actions and data you allow.',
  },
  {
    question: 'Is our data safe with Agentforce?',
    answer:
      'Agentforce runs through Salesforce’s Einstein Trust Layer, which masks sensitive data and doesn’t let outside AI models keep your data. We also give each agent only the access it needs.',
  },
  {
    question: 'Do we need Data 360 to use Agentforce?',
    answer:
      'Not always. Many agents work well with your Salesforce records and knowledge articles. Data 360 helps when the agent needs data from many other systems.',
  },
  {
    question: 'How do you test an AI agent?',
    answer:
      'We test it with real questions from your team, including ones it should refuse or pass to a person, and fix what it gets wrong before launch.',
  },
  {
    question: 'Can an agent hand a conversation to a person?',
    answer:
      'Yes. Every agent we build knows when to pass the conversation to a person, with the history attached.',
  },
  {
    question: 'Where should we start?',
    answer:
      'With one frequent, simple task you can measure, such as case summaries or order status questions. Then expand from there.',
  },
  {
    question: 'Can AI agents work in Slack?',
    answer:
      'Yes. Agents can work inside Slack as well as Salesforce, so staff can ask questions where they already work.',
  },
  {
    question: 'How long does an Agentforce project take?',
    answer:
      'It depends on the use case, the actions involved and how clean your data is. You’ll get a timeline in the written scope before any work starts.',
  },
  {
    question: 'What does an Agentforce project cost?',
    answer:
      'The cost depends on your requirements: the use cases, actions and data work involved. Salesforce charges for Agentforce usage separately. We send you our cost in writing after the discovery call.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you’ll get a reply within 24 hours.',
  },
];

const whatWeBuild = [
  {
    title: 'Service Agents',
    description:
      'Agents that answer customer questions on your website or chat, using your knowledge articles and order data, and hand over to a person when needed.',
  },
  {
    title: 'Sales Agents',
    description:
      'Agents that follow up with new leads, answer product questions and book meetings for your reps.',
  },
  {
    title: 'Employee Agents',
    description:
      'Agents that help reps and support staff inside Salesforce and Slack: summaries, next steps and answers from your records.',
  },
  {
    title: 'Topics and Actions',
    description:
      'We decide what each agent is allowed to do, and build the actions it uses with Flow, Apex and prompt templates.',
  },
  {
    title: 'Prompt Templates',
    description:
      'Templates for case summaries, email drafts and record summaries, built with Prompt Builder on your own data.',
  },
  {
    title: 'Grounding in Your Data',
    description:
      'We connect agents to the right data, from Salesforce records and knowledge to Data 360, so answers come from your facts.',
  },
  {
    title: 'Testing and Guardrails',
    description:
      'We test every agent against real questions, including the ones it should refuse, before customers see it.',
  },
  {
    title: 'Predictions',
    description:
      'Einstein lead scoring, opportunity scoring and case classification, set up and checked against your data.',
  },
];

const whereToStart = [
  {
    title: 'Case Summaries',
    description:
      'Agents read the case history and write a short summary for the next agent or a manager.',
  },
  {
    title: 'Order Status Questions',
    description:
      'Customers ask where their order is, and the agent answers from your order data.',
  },
  {
    title: 'Lead Follow-Up',
    description:
      'New leads get a fast first reply and a meeting link, any time of day.',
  },
  {
    title: 'Knowledge Answers',
    description:
      'Customers and staff get answers from your help articles, with a link to the source.',
  },
  {
    title: 'Email Drafts for Reps',
    description:
      'Reps get a first draft of follow-up emails, based on the opportunity and recent activity.',
  },
  {
    title: 'Meeting Prep',
    description: 'Reps get a one-page brief on the account before every call.',
  },
];

const whyStall = [
  {
    title: 'Messy Data',
    description:
      'Duplicates and missing fields lead to wrong answers. We clean the data the agent uses first.',
  },
  {
    title: 'No Clear Use Case',
    description:
      'A broad goal like “use AI” never ships. We start with one task you can measure.',
  },
  {
    title: 'Tested Only in Demos',
    description:
      'An agent that looks good in a demo fails on real questions. We test with real ones.',
  },
  {
    title: 'Too Much Access',
    description:
      'An agent that can see everything can share everything. We give it only what it needs.',
  },
  {
    title: 'No Handover to People',
    description:
      'Customers get stuck in a loop. Every agent we build knows when to pass to a person.',
  },
  {
    title: 'No Way to Measure It',
    description:
      'Nobody knows if it worked. We agree on the numbers to track before launch.',
  },
];

const steps = [
  {
    title: 'Discovery Call',
    description:
      'Tell us which task you want to improve and where the data lives. If you’d like an NDA first, we’ll sign one.',
  },
  {
    title: 'Use Case and Data Check',
    description:
      'We pick the first use case with you and check that the data it needs is clean and accessible.',
  },
  {
    title: 'Scope and Plan',
    description:
      'We send you a written scope with the timeline and cost. Nothing starts until you approve it.',
  },
  {
    title: 'Build in a Sandbox',
    description:
      'We build the agent, its topics, actions and prompts in a sandbox.',
  },
  {
    title: 'Test With Real Questions',
    description:
      'Your team tests it with real questions, and we fix what it gets wrong.',
  },
  {
    title: 'Launch and Measure',
    description:
      'We go live with a small group first, track the agreed numbers and improve from there.',
  },
];

// TODO: confirm these URLs match your real routes
const related = [
  {
    title: 'Service Cloud',
    text: 'Service agents work inside Service Cloud.',
    linkText: 'Explore Service Cloud services',
    href: '/salesforce-service-cloud',
  },
  {
    title: 'Sales Cloud',
    text: 'Sales agents and AI for your reps.',
    linkText: 'Explore Sales Cloud services',
    href: '/salesforce-sales-cloud',
  },
  {
    title: 'Health Cloud',
    text: 'AI agents for patient and member questions.',
    linkText: 'Explore Health Cloud services',
    href: '/health-cloud-services',
  },
  {
    title: 'Hire a Product Manager',
    text: 'Someone to decide where AI helps first.',
    linkText: 'Hire Salesforce product managers',
    href: '/hire-salesforce-product-managers',
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
      'Our consultants, developers and architects build agents on the same Salesforce data and automation they set up every day.',
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

const PAGE_URL = 'https://www.saasverse.in/salesforce-ai-company';
const META_TITLE = 'Salesforce AI and Agentforce Services | Saasverse';
const META_DESC =
  'Agentforce and Salesforce AI services: we plan, build and test AI agents, prompts and predictions on your Salesforce data, with clear guardrails.';

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
  name: 'Salesforce AI and Agentforce Services',
  url: PAGE_URL,
  description: META_DESC,
  serviceType: 'Salesforce AI and Agentforce implementation',
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
        title="Salesforce AI and Agentforce Services"
        description="We build and test AI agents that work on your Salesforce data, with clear rules about what they can and can’t do."
      />

     

      {/* 1. What We Build With Agentforce (8 cards) */}
      <SalesforceServiceReuseable
        heading="What We Build With Agentforce"
        subheading=""
        benefits={whatWeBuild}
      />

      {/* 2. Where to Start (6 cards) */}
      <CardSection
        id="where-to-start"
        heading="Where to Start With AI in Salesforce"
        intro="Most teams get the best results by starting with one small, frequent task and measuring it."
        items={whereToStart}
        numbered
      />

      {/* 3. Why AI Projects Stall (6 cards) */}
      <CardSection
        heading="Why AI Projects Stall"
        items={whyStall}
        bg="bg-gray-50"
      />

      {/* 4. How an Agentforce Project Works (6 steps) */}
      <CardSection
        heading="How an Agentforce Project Works"
        items={steps}
        numbered
      />

      {/* 5. Cost (no prices) */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5">What Agentforce Projects Cost</h2>
            <p className="leading-7 text-gray-600">
              The cost depends on your requirements: how many use cases and
              agents, the actions they need, how clean your data is and how much
              testing it takes. After the discovery call, we send you a written
              scope with the cost and timeline. Salesforce charges for
              Agentforce usage separately from our work.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Related Clouds and Services (4 cards with links) */}
      <section className="bg-white py-16 md:py-20">
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

      {/* 7. Why Choose Saasverse for Salesforce AI (6 cards) */}
      <CardSection
        heading="Why Choose Saasverse for Salesforce AI"
        items={whyChoose}
        bg="bg-gray-50"
      />

      {/* 8. Credentials (kept as is) */}
      <CertificateSlider />

      {/* 9. Logo wall (kept as is) */}
      <OurPartners />

      {/* 10. FAQs */}
      <FaqReuseable title="Salesforce AI and Agentforce FAQs" faqs={faqs} />

      <CTASection />

     
        <ContactForm />
     
    </>
  );
};

export default page;