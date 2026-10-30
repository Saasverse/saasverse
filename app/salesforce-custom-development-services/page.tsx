import React from 'react'
import PageBanner from '../components/PageBanner'

import CTASection from '../components/Home/CTASection';

import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';

import { Metadata } from 'next';
import SalesforceCustomDevelopmentSections from '../components/Home/SalesforceCustomDevelopmentSections';



const faqs = [
  {
    question: "What is Salesforce custom development?",
    answer:
      "It means building features that standard Salesforce doesn't offer. We do it with Apex code, Lightning Web Components, advanced Flow and custom objects.",
  },
  {
    question: "When do we need custom development instead of standard features?",
    answer:
      "You need it when your process can't be modeled with standard objects and Flow, when the logic or data volume is too much for Flow, or when your users need a custom screen. We always try standard features first and only write code where it's the better choice.",
  },
  {
    question: "What's the difference between custom development and hiring a developer?",
    answer:
      "With custom development, we deliver a defined project with a scope, timeline and handover. When you hire a developer, that person joins your team by the hour, part time or full time and works through your backlog.",
  },
  {
    question: "Do you build with Lightning Web Components?",
    answer:
      "Yes. We build all new screens and components with Lightning Web Components, and we can rebuild old Visualforce pages and Aura components as LWC.",
  },
  {
    question: "Can you fix or improve code another partner wrote?",
    answer:
      "Yes. We review the existing code, list what's slow, risky or untested, and fix it in order of priority.",
  },
  {
    question: "How do you make sure the code is good quality?",
    answer:
      "We build in a sandbox, keep all code in Git and have a second developer review every change. Each change comes with Apex tests, and Salesforce needs at least 75% code coverage before code can go to production.",
  },
  {
    question: "Will our custom code break when Salesforce releases an update?",
    answer:
      "Code built on supported Salesforce features rarely breaks with a release. As part of our support, we test your custom code against each upcoming release in a sandbox.",
  },
  {
    question: "Who owns the code you build?",
    answer:
      "Code ownership is set out in your contract, and we agree on it in writing before work starts.",
  },
  {
    question: "How long does a custom development project take?",
    answer:
      "It depends on what needs to be built. You'll get a timeline in the written scope before any work starts.",
  },
  {
    question: "What does Salesforce custom development cost?",
    answer:
      "The cost depends on your requirements: what needs to be built, how complex it is, which systems are involved and how much testing it needs. We send you the cost in writing after the discovery call.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you'll get a reply within 24 hours.",
  },
  {
    question: "Is our org data safe with you?",
    answer:
      "We sign an NDA before we access your org. Saasverse is ISO 27001 and Cyber Essentials Plus certified, and you decide which systems and data our team can see.",
  },
];





export const metadata: Metadata = {
  title: "Salesforce Custom Development Services | Saasverse",
  description:
    "Salesforce custom development: Apex, Lightning Web Components, Flow and custom apps, built as projects by certified developers. Book a free consultation.",

    alternates: { canonical: 'https://www.saasverse.in/salesforce-custom-development-services' },
};
const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/banner002.webp"
                 title="Salesforce Custom Development Services"
                 description="When standard Salesforce can’t do what you need, our certified developers build it."
               />

               <SalesforceCustomDevelopmentSections/>
          <CertificateSlider/>

          <OurPartners/>

           <FaqReuseable title="Salesforce Custom Development FAQs" faqs={faqs} />
            <CTASection/>
           <ContactForm/>
    </>
  )
}

export default page