import React from 'react'
import PageBanner from '../components/PageBanner'

import CTASection from '../components/Home/CTASection';

import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';

import { Metadata } from 'next';
import SalesforceIntegrationSections from '../components/SalesforceIntegrationSections';

export const metadata: Metadata = {
  title: "Salesforce Integration Services | Saasverse",
  description:
    "Seamless Salesforce integration services connecting CRM, ERP & marketing tools for US, UAE & India clients. Certified experts. Request a demo.",

    alternates: { canonical: 'https://www.saasverse.in/salesforce-integration-services' },
};

const faqs = [
  {
    question: "What are Salesforce integration services?",
    answer:
      "Salesforce integration services connect Salesforce to your other business systems, such as an ERP, accounting tool, website or support tool, so data moves between them automatically instead of being copied by hand.",
  },
  {
    question: "Which systems can you connect to Salesforce?",
    answer:
      "We can connect Salesforce to most systems that have an API, including ERPs, accounting and billing tools, marketing tools, eCommerce platforms, phone systems, other CRMs and internal databases.",
  },
  {
    question: "Do we need MuleSoft to integrate Salesforce?",
    answer:
      "Not always. Many integrations work well with direct APIs or a ready-made connector. MuleSoft is useful when you have many systems to connect and want to manage all connections in one place.",
  },
  {
    question: "Can the data sync in real time?",
    answer:
      "It can be close to real time using APIs or platform events. For large volumes of data, a scheduled sync, such as every hour or every night, is often more reliable. We recommend the method that fits each data flow.",
  },
  {
    question: "What if our system does not have an API?",
    answer:
      "We look at other options, such as file-based imports and exports, database connections or a middleware tool. We tell you what is possible before work starts.",
  },
  {
    question: "How long does a Salesforce integration take?",
    answer:
      "It depends on the number of systems, the amount of data and whether the other system has a ready API. We give you a timeline in the written scope before work starts.",
  },
  {
    question: "How do you handle errors and failed syncs?",
    answer:
      "We add error handling, logs and alerts to every integration, so failed records are caught and can be retried.",
  },
  {
    question: "Will the integration use up our Salesforce API limits?",
    answer:
      "We check your API limits during design and build the integration to use as few calls as possible, for example by batching records.",
  },
  {
    question: "Can you fix an integration another partner built?",
    answer:
      "Yes. We review how it works, document it, and fix or rebuild the parts that fail.",
  },
  {
    question: "Do you provide support after go-live?",
    answer:
      "Yes. Support is available 24/7. Raise a ticket in our ticket portal or send an email, and you get a reply within 24 hours.",
  },
  {
    question: "What does Salesforce integration cost?",
    answer:
      "The cost depends on your requirements: the number of systems, the data volume, how often it syncs and the method used. We send the cost in writing after the discovery call.",
  },
  {
    question: "Is our data safe during an integration?",
    answer:
      "We sign an NDA before we access your systems. Saasverse is ISO 27001 and Cyber Essentials Plus certified. Integrations use secure, authenticated connections, and you decide which data is shared between systems.",
  },
];



const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/banner002.webp"
                 title="Salesforce Integration Services"
                 description="At Saasverse Pvt Ltd, we specialize in delivering tailored Salesforce solutions that perfectly align with your unique business requirements."
               />

              <SalesforceIntegrationSections/>
          <CertificateSlider/>

          <OurPartners/>

           <FaqReuseable title="Salesforce Integration FAQs" faqs={faqs} />
             <CTASection/>
           <ContactForm/>
    </>
  )
}

export default page