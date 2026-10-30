import React from 'react';
import PageBanner from '../components/PageBanner';

import CTASection from '../components/Home/CTASection';

import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';

import { Metadata } from 'next';
import SalesforceArchitectSections from '../components/SalesforceArchitectSections';

const faqs = [
  {
    question: "What does a Salesforce architect do?",
    answer:
      "A Salesforce architect decides how your org should be built. That covers the data model, security and sharing, integrations with other systems, how Salesforce handles large data volumes and how changes are released. They also guide the admins and developers who do the build.",
  },
  {
    question: "What is the difference between a Salesforce architect and a consultant?",
    answer:
      "A consultant works out what your teams need and sets it up in Salesforce. An architect looks at the whole system: how the data, security, integrations and code fit together, and whether the design will still work as you grow.",
  },
  {
    question: "When do I need an architect instead of a developer?",
    answer:
      "Bring in an architect before a big rollout, when you connect several systems, when your org has millions of records or when the org has become hard to change. A developer writes the code. An architect decides what should be built and how it fits together.",
  },
  {
    question: "Are your Salesforce architects certified?",
    answer:
      "Yes. Our architects hold Salesforce architect certifications. Each profile we send lists that person's own certifications, so you can check them before the interview.",
  },
  {
    question: "Can an architect review the Salesforce org we already have?",
    answer:
      "Yes. An org review is a common first step. Your architect checks the data model, security, automation, code and integrations, then gives you a written report with what to fix first.",
  },
  {
    question: "How quickly can an architect start?",
    answer:
      "Many engagements start within a few days. An architect with a specific cloud or industry background can take a few weeks. We give you a start date when we send profiles.",
  },
  {
    question: "Can I interview the architect before hiring?",
    answer:
      "Yes. You talk to the architects we suggest and decide who joins your team.",
  },
  {
    question: "Which hiring model should I choose?",
    answer:
      "Hourly works for an org review or a design check. A part-time architect works when you need regular design reviews during ongoing projects. A full-time architect works for a large rollout or migration.",
  },
  {
    question: "Can your architect work with our in-house team or another partner?",
    answer:
      "Yes. Many clients use our architect to design and review while their own team or another Salesforce partner does the build.",
  },
  {
    question: "What does it cost to hire a Salesforce architect?",
    answer:
      "The cost depends on your requirements: the hiring model, the hours, the size of your org and how many systems are involved. We send you the cost in writing before anyone starts.",
  },
  {
    question: "Will the architect work in my time zone?",
    answer:
      "Our team is based in Jaipur, India, and works with clients in the US. Before work starts, we agree on overlapping hours, so your architect can join your meetings and design reviews.",
  },
  {
    question: "Is my data safe with a hired architect?",
    answer:
      "We sign an NDA before we access your org or documents. Saasverse is ISO 27001 and Cyber Essentials Plus certified, and you decide what access the architect gets.",
  },
];



export const metadata: Metadata = {
  title: 'Hire Salesforce Architects in India | Saasverse',
  description:
    'Hire Salesforce architects in India to design your data model, security and integrations so your org holds up as you grow. Hourly, part-time or full-time.',

  alternates: {
    canonical: 'https://www.saasverse.in/hire-salesforce-architect',
  },
};

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/hirebanner.webp"
        title=" Hire Salesforce Architects in India"
        description="Certified Salesforce architects who plan how your org should be built, so it holds up as you grow."
      />

      <SalesforceArchitectSections/>

      <CertificateSlider />

      <OurPartners />

      <FaqReuseable title="FAQ" faqs={faqs} />
      <CTASection />
      <ContactForm />
    </>
  );
};

export default page;
