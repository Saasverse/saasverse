import React from 'react';
import PageBanner from '../components/PageBanner';
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CTASection from '../components/Home/CTASection';
import HealthSolution from '../work-salesforce-health-cloud/HealthSolution';
import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';
import WhyChooseUs from '../about/WhyChooseUs';
import { Metadata } from 'next';
import SalesCloudImplementationSections from '../components/SalesCloudImplementationSections';

const faqs = [
  {
    question: 'What does a Sales Cloud consultant do?',
    answer:
      'A Sales Cloud consultant maps how your team sells and sets up Salesforce to match: lead routing, pipeline stages, forecasting, quotes, automation and reports. They also plan the data move and the connections to your other tools.',
  },
  {
    question: 'How long does a Sales Cloud implementation take?',
    answer:
      "It depends on the number of users, how complex your sales process is and how much data you're moving. You'll get a timeline in the written scope before any work starts.",
  },
  {
    question:
      'Can you move our data from HubSpot, spreadsheets or another CRM?',
    answer:
      'Yes. We move your accounts, contacts, open deals and history, remove duplicates and check the record counts after each load.',
  },
  {
    question: 'Can you fix our existing Sales Cloud setup?',
    answer:
      "Yes. We review your current setup, keep what works, fix what's broken and remove what nobody uses.",
  },
  {
    question: 'Do we need Salesforce CPQ?',
    answer:
      'Not always. Standard quotes and price books work well for simple pricing. CPQ helps when you have complex pricing rules, bundles, discount approvals or many product options.',
  },
  {
    question: 'Can Sales Cloud connect to Outlook or Gmail?',
    answer:
      'Yes. We connect Sales Cloud to Outlook or Gmail, so reps can log emails and meetings to Salesforce without leaving their inbox.',
  },
  {
    question: 'Can Sales Cloud connect to our ERP or billing system?',
    answer:
      'Yes. We connect Sales Cloud to your ERP or billing system, so orders, invoices and payment status show up on the account in Salesforce.',
  },
  {
    question: 'How do you get reps to actually use Sales Cloud?',
    answer:
      'We keep the setup simple, show reps only what they need, log activity automatically and set up the mobile app. After launch, we check usage and fix what slows people down.',
  },
  {
    question:
      'We still use Workflow Rules and Process Builder. What should we do?',
    answer:
      'Salesforce ended support for both on December 31, 2025, so they should be moved to Flow. We list every old automation in your org and move it in order of risk.',
  },
  {
    question: 'What does Sales Cloud implementation cost?',
    answer:
      'The cost depends on your requirements: the number of users, how complex your sales process is, the data to move and the integrations. We send you the cost in writing after the discovery call.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      "Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you'll get a reply within 24 hours.",
  },
  {
    question: 'Will your team work in our time zone?',
    answer:
      'Our team is based in Jaipur, India, and works with clients in the US. Before work starts, we agree on overlapping hours, so we can join your meetings.',
  },
];

export const metadata: Metadata = {
  title: 'Salesforce Sales Cloud Implementation | Saasverse',
  description:
    'Salesforce Sales Cloud implementation: lead routing, pipeline stages, forecasting, quotes and reports set up for your sales team. Book a free consultation.',

  alternates: { canonical: 'https://www.saasverse.in/salesforce-sales-cloud' },
};

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/expbanner.webp"
        title="Salesforce Sales Cloud Implementation and Consulting"
        description="We set up Sales Cloud around how your team actually sells."
      />

      <SalesCloudImplementationSections />

      <CertificateSlider />

      <OurPartners />

      <FaqReuseable title="Salesforce Sales Cloud FAQs" faqs={faqs} />
      <CTASection />
      <ContactForm />
    </>
  );
};

export default page;
