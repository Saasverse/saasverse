import React from 'react'
import PageBanner from '../components/PageBanner'

import CTASection from '../components/Home/CTASection';

import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';
import WhyChooseUs from '../about/WhyChooseUs';
import { Metadata } from 'next';
import SalesforceQATesterSections from '../components/SalesforceQATesterSections';


const faqs = [
  {
    question: "What does a Salesforce QA tester do?",
    answer:
      "A Salesforce QA tester writes test cases, tests new features in a sandbox, runs regression tests before each release, automates repeat tests and helps your users with user acceptance testing. The goal is to catch problems before your users do.",
  },
  {
    question: "Is a Salesforce QA tester the same as a quality analyst?",
    answer:
      "Yes. Companies use both names for the same role. Some also say QA engineer or test analyst. The work is the same: making sure each change works before it goes live.",
  },
  {
    question: "Do your testers do manual or automated testing?",
    answer:
      "Both. New features usually need manual testing first. Tests you repeat every release, like regression tests, can be automated so they run faster and the same way each time.",
  },
  {
    question: "Why do I need a tester if my developers already write Apex tests?",
    answer:
      "Salesforce needs 75% Apex test coverage before code can be deployed, but those tests only check the code. A QA tester checks the whole change the way a user sees it: flows, page layouts, permissions, reports and integrations.",
  },
  {
    question: "Can a QA tester help with Salesforce's seasonal releases?",
    answer:
      "Yes. Salesforce updates every org three times a year. Your tester can run your regression tests in a preview sandbox before the update reaches production, so you see any problems early.",
  },
  {
    question: "How quickly can a QA tester start?",
    answer:
      "Many engagements start within a few days. A tester with a specific cloud or tool background can take a few weeks. We give you a start date when we send profiles.",
  },
  {
    question: "Can I interview the QA tester before hiring?",
    answer:
      "Yes. You talk to the testers we suggest and decide who joins your team.",
  },
  {
    question: "Which hiring model should I choose?",
    answer:
      "Hourly works for testing a single release or a data migration. A part-time tester works if you release every few weeks. A full-time tester works for a new rollout or a team that releases often.",
  },
  {
    question: "Can your tester work with our in-house team or another partner?",
    answer:
      "Yes. Many clients use our testers alongside their own developers, or to test work delivered by another Salesforce partner.",
  },
  {
    question: "What does it cost to hire a Salesforce QA tester?",
    answer:
      "The cost depends on your requirements: the hiring model, the hours, how often you release and how much testing you want automated. We send you the cost in writing before anyone starts.",
  },
  {
    question: "Will the QA tester work in my time zone?",
    answer:
      "Our team is based in Jaipur, India, and works with clients in the US. Before work starts, we agree on overlapping hours, so your tester can join your stand-ups and release calls.",
  },
  {
    question: "Is my data safe with a hired QA tester?",
    answer:
      "We sign an NDA before we access your org. Saasverse is ISO 27001 and Cyber Essentials Plus certified. Your tester works in your sandboxes, and you decide what access they get.",
  },
];


export const metadata: Metadata = {
  title: "Hire Salesforce QA Testers in India | Saasverse",
  description:
    "Hire Salesforce QA testers in India for manual and automated testing, regression and user acceptance testing. Hourly, part-time or full-time.",

    alternates: { canonical: 'https://www.saasverse.in/hire-salesforce-expert' },
  };

const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/hirebanner.webp"
                 title="Hire Salesforce QA Testers in India”"
                 description="Salesforce QA testers who find the bugs in your org before your users do."
               />

              <SalesforceQATesterSections/>
          <CertificateSlider/>

          <OurPartners/>

           <FaqReuseable title="FAQ" faqs={faqs} />
            <CTASection/>
           <ContactForm/>
    </>
  )
}

export default page