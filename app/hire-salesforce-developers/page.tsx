import React from 'react';
import PageBanner from '../components/PageBanner';

import CTASection from '../components/Home/CTASection';

import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';

import { Metadata } from 'next';
import SalesforceDeveloperSections from '../components/SalesforceDeveloperSections';

const faqs = [
  {
    question:
      'Why hire a Salesforce developer instead of a full-time employee?',
    answer:
      'A full-time hire can take months to find and costs the same in busy and quiet months. A Salesforce developer for hire can start sooner, and you can switch between hourly, part-time and full-time as your workload changes.',
  },
  {
    question: 'How quickly can a Salesforce developer start?',
    answer:
      'It depends on the skills you need. Many engagements start within a few days. A specialist profile can take a few weeks. We give you a start date when we send profiles.',
  },
  {
    question: 'Can I interview the developer before hiring?',
    answer:
      'Yes. You can speak with the developers we recommend, ask technical questions or give them a short task, and decide who joins your team.',
  },
  {
    question: 'Which hiring model should I choose?',
    answer:
      'Hourly works for bug fixes, code reviews and single components. A part-time dedicated developer works for a steady flow of requests. A full-time developer or team works for large builds, integrations and AppExchange apps.',
  },
  {
    question:
      'What is the difference between a Salesforce developer and a Salesforce admin?',
    answer:
      'An admin configures Salesforce using clicks, including users, fields, layouts, reports and Flows. A developer writes code, such as Apex, Lightning Web Components and integrations, for requirements that clicks alone cannot handle.',
  },
  {
    question: 'Do your developers work with Lightning Web Components?',
    answer:
      'Yes. Our developers build new screens and components with Lightning Web Components (LWC) and can rebuild legacy Visualforce pages and Aura components as LWC.',
  },
  {
    question: 'Can your developers build integrations?',
    answer:
      'Yes. Our developers connect Salesforce to other systems through REST and SOAP APIs, platform events and MuleSoft.',
  },
  {
    question: 'How do you make sure the code is good quality?',
    answer:
      'All work is done in a sandbox, maintained in Git and reviewed by a second developer. Every change includes Apex test classes. Salesforce requires at least 75% Apex code coverage for deployment to production, along with successful tests and other deployment checks.',
  },
  {
    question: 'Who owns the code?',
    answer:
      'Ownership of the code is set out in your contract. We agree on it in writing before work starts.',
  },
  {
    question: 'Can a developer work alongside our admin or another partner?',
    answer:
      'Yes. Many clients use our developers to add development capacity alongside their in-house Salesforce admin or an existing implementation partner.',
  },
  {
    question: 'Will the developer work in my time zone?',
    answer:
      'Our team is based in Jaipur, India, and works with clients in the US. Before work starts, we agree on the hours your developer will overlap with your team so they can join meetings and collaborate effectively.',
  },
  {
    question: 'Is my org data safe with a hired developer?',
    answer:
      'We sign an NDA before accessing your org. Saasverse is ISO 27001 and Cyber Essentials Plus certified, and you decide which systems and data the developer can access.',
  },
];


export const metadata: Metadata = {
  title: 'Hire Salesforce Developers in India | Saasverse',
  description:
    'Hire certified Salesforce developers in India for Apex, LWC and integrations. Hourly, part-time or full-time, with US hours overlap. Book a free consultation.',

  alternates: {
    canonical: 'https://www.saasverse.in/hire-salesforce-developers',
  },
};

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/hirebanner.webp"
        title="Hire Salesforce Developers in India"
        description="Hire certified Salesforce developers who join your team by the hour, part time or full time. They write Apex, build Lightning Web Components and connect Salesforce to your other systems."
      />

      <SalesforceDeveloperSections />

      
      <CertificateSlider />

      <OurPartners />

      <FaqReuseable
        title="FAQs About Hiring Salesforce Developers"
        faqs={faqs}
      />
      <CTASection />
      <ContactForm />
    </>
  );
};

export default page;
