import React from 'react';
import PageBanner from '../components/PageBanner';

import CTASection from '../components/Home/CTASection';

import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';

import { Metadata } from 'next';
import SalesforceManagedServicesSections from '../components/SalesforceManagedServicesSections';

const faqs = [
  {
    question:
      'What is included in your Salesforce support and maintenance services?',
    answer:
      'Bug fixing and issue resolution, admin requests, release testing, integration support, performance fixes, data fixes, small changes and scheduled maintenance. Your support model sets out exactly what is included.',
  },
  {
    question: 'What is the difference between support and managed services?',
    answer:
      'Support and maintenance covers issues and fixes as they come up, plus regular maintenance. Managed services is a monthly plan where one team runs your whole org, including admin, changes, releases, monitoring and planning.',
  },
  {
    question: 'Do you provide 24/7 Salesforce support?',
    answer:
      'Yes. Support is available 24/7. Raise a ticket in our ticket portal or send an email at any time, and you get a reply within 24 hours.',
  },
  {
    question: 'How quickly do you respond to support requests?',
    answer:
      'Every request gets a reply within 24 hours. How long the fix takes depends on the issue, and we keep you updated until it is closed.',
  },
  {
    question: 'How do we report an issue?',
    answer:
      'Raise a ticket in our ticket portal or send an email. Screenshots or error messages help us find the cause faster.',
  },
  {
    question: 'Can you support an org that another partner set up?',
    answer:
      'Yes. We review the org first, document what we find and then take on support.',
  },
  {
    question: 'Do you test changes before they go live?',
    answer:
      'Yes. We reproduce issues and test fixes in a sandbox before they go to production.',
  },
  {
    question: 'How do you handle Salesforce releases?',
    answer:
      'Salesforce releases updates three times a year. We test each release in a sandbox before it reaches your production org and fix anything that would break.',
  },
  {
    question: 'Can you fix Apex code and integrations, not only admin issues?',
    answer:
      'Yes. Our team includes developers who fix Apex, Lightning Web Components and integrations, as well as admins for setup issues.',
  },
  {
    question: 'Can you help with customizing our existing Salesforce setup?',
    answer:
      'Yes. We make small changes as part of support. For larger changes, we scope them as a separate piece of work.',
  },
  {
    question: 'What does Salesforce support cost?',
    answer:
      'The cost depends on your requirements: the size of your org, the clouds and integrations, the number of issues, and the support model. We send the cost in writing after the discovery call.',
  },
  {
    question: 'Is our org data safe with you?',
    answer:
      'We sign an NDA before we access your org. Saasverse is ISO 27001 and Cyber Essentials Plus certified, and you decide which systems and data our team can access.',
  },
];

export const metadata: Metadata = {
  title: 'Salesforce Managed Services | Saasverse',
  description:
    'Salesforce managed services: admin, fixes, release updates and monitoring on a monthly plan from a certified Salesforce Partner. Book a free consultation.',

  alternates: {
    canonical: 'https://www.saasverse.in/salesforce-managed-services',
  },
};
const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/banner002.webp"
        title="Salesforce Managed Services"
        description="A certified Salesforce team that runs your org every month: admin work, fixes, changes, release updates and monitoring, on one plan."
      />

      <SalesforceManagedServicesSections />

      <CertificateSlider />

      <OurPartners />

      <FaqReuseable title="Salesforce Managed Services FAQs" faqs={faqs} />
      <CTASection />
      <ContactForm />
    </>
  );
};

export default page;
