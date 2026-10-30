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
import MarketingCloudSection from '../components/MarketingCloudSection';

const faqs = [
  {
    question: "What does a Marketing Cloud consultant do?",
    answer:
      "A Marketing Cloud consultant sets up your account, data, sending domains, templates and journeys, and helps your team run campaigns that reach the right people at the right time.",
  },
  {
    question: "What is the difference between Marketing Cloud Engagement and Account Engagement?",
    answer:
      "Marketing Cloud Engagement is built for B2C brands that send a lot of email, SMS and mobile messages. Account Engagement, formerly called Pardot, is built for B2B companies that need lead scoring and nurture emails tied closely to Sales Cloud.",
  },
  {
    question: "Is Pardot still available?",
    answer:
      "Yes, under a new name. Salesforce renamed Pardot to Account Engagement. It's the same product for B2B marketing.",
  },
  {
    question: "Can you connect Marketing Cloud to Sales Cloud?",
    answer:
      "Yes. We connect the two, so contacts, unsubscribes and lead status stay in sync, and sales can see which emails a lead engaged with.",
  },
  {
    question: "Why are our emails going to spam?",
    answer:
      "The most common causes are a sending domain that isn't set up with SPF, DKIM and DMARC, old or bought lists, and sending too much to people who never open. We check all three and fix them.",
  },
  {
    question: "Can you fix our existing Marketing Cloud setup?",
    answer:
      "Yes. We review your data, journeys and templates, keep what works, fix what's broken and turn off what nobody uses.",
  },
  {
    question: "Can you build and send our campaigns for us?",
    answer:
      "Yes. If you don't have a Marketing Cloud specialist in-house, we can build and send campaigns, update journeys and keep your data clean every month.",
  },
  {
    question: "Do we need Data 360?",
    answer:
      "Not always. Data 360, formerly called Data Cloud, helps when you need one customer profile built from many sources. Many teams get good results with Marketing Cloud and Sales Cloud data alone. We'll tell you if you need it before you buy.",
  },
  {
    question: "How long does a Marketing Cloud setup take?",
    answer:
      "It depends on the product, the channels and how much data needs to connect. You'll get a timeline in the written scope before any work starts.",
  },
  {
    question: "What does Marketing Cloud consulting cost?",
    answer:
      "The cost depends on your requirements: the product, the channels, the number of journeys and templates, and the data connections. We send you the cost in writing after the discovery call.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you'll get a reply within 24 hours.",
  },
  {
    question: "Is our customer data safe with you?",
    answer:
      "We sign an NDA before we access your data. Saasverse is ISO 27001 and Cyber Essentials Plus certified, and you decide which systems and data our team can see.",
  },
];



export const metadata: Metadata = {
  title: "Salesforce Marketing Cloud Consulting | Saasverse",
  description:
    "Salesforce Marketing Cloud consulting: journeys, email, SMS, Account Engagement and reports, set up and run for your marketing team. Book a free consultation.",
  alternates: { canonical: 'https://www.saasverse.in/salesforce-marketing-cloud' },

  };

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/expbanner.webp"
        title="Salesforce Marketing Cloud Consulting"
        description="We set up Marketing Cloud and help your team send the right message to the right customer."
      />

      <MarketingCloudSection />
      <CertificateSlider />

      <OurPartners />

      <FaqReuseable title="Salesforce Marketing Cloud FAQs" faqs={faqs} />
         <CTASection />
      <ContactForm />
    </>
  );
};

export default page;
