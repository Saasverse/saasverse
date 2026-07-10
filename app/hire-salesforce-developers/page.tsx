import React from 'react'
import PageBanner from '../components/PageBanner'
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CTASection from '../components/Home/CTASection';
import HealthSolution from '../work-salesforce-health-cloud/HealthSolution';
import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';
import WhyChooseUs from '../about/WhyChooseUs';
import { Metadata } from 'next';


const faqs = [
  {
    question: 'Why hire Salesforce Consultants?',
    answer:
      'Hiring Salesforce Consultants will make sure that your Salesforce implementation is perfectly aligned with your business goals and delivers maximum ROI.',
  },
  {
    question: 'Can you customize Salesforce to fit my business needs?',
    answer:
      'Absolutely. Our Consultants specialize in customizing Salesforce solutions – be it CRM, Marketing Cloud, Mobile App development, or CDP – to meet your specific business requirements.',
  },
  {
    question: 'What is the typical engagement process with Saasverse Consultants?',
    answer:
      'Our engagement process is client-centric, starting with understanding your business needs, followed by providing strategic Salesforce consultancy tailored to those needs. We work either on a project basis or time & material contracts.',
  },
  {
    question: 'How long does it take to hire Saasverse Consultants?',
    answer:
      'Our efficient hiring process ensures that you can quickly onboard a skilled Salesforce Consultant, often within a few days to a few weeks, depending on your specific requirements.',
  },
  {
    question: 'Can Saasverse provide ongoing support after implementation?',
    answer:
      'Yes, we offer ongoing support and consultancy to ensure your Salesforce ecosystem continues to evolve with your business, delivering continual value.',
  },
  {
    question:
      'How do I get started with hiring Salesforce Consultants from Saasverse?',
    answer:
      'Starting is simple. Contact us, and we will guide you through our straightforward process to connect you with the ideal Salesforce consultant for your needs.',
  },
];

const benefits = [
  {
    title: "Enhanced Productivity:",
    description:
      "Custom applications and automations streamline workflows, reduce manual effort, and boost team productivity.",
  },
  {
    title: "Improved Efficiency:",
    description:
      "Seamless integrations eliminate data silos and optimize data flow, leading to increased efficiency across your operations.",
  },
  {
    title: "Reduced Costs:",
    description:
      "Automation can minimize development costs associated with manual processes and ongoing maintenance.",
  },
  {
    title: "A Competitive Advantage:",
    description:
      "Custom solutions can differentiate you from competitors and enhance customer experiences.",
  },
  {
    title: "Scalability & Flexibility:",
    description:
      "Our developers build solutions that scale with your business growth and adapt to evolving needs.",
  },
];

export const metadata: Metadata = {
  title: "Hire Salesforce Developer | Certified Experts - Saasverse",
  description:
    "Saasverse provides expert Salesforce developers to build custom solutions, optimize CRM functionality, and enhance business processes efficiently.",
};

const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/hirebanner.webp"
                 title="Hire Salesforce Developer"
                 description="Craft Your Salesforce Vision: Hire Top-Tier Salesforce Developers at Saasverse Pvt Ltd"
               />

                <SalesforceServiceReuseable
      heading="Benefits of Hiring a Saasverse Salesforce Developer"
      benefits={benefits}
    />

    

     <HealthSolution
            title="Why Hire a Salesforce Developer from Saasverse? "
            highlight=""
            description=""
            image="/images/websiteimages/4.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
              {
    title: 'Proven Expertise',
    description:
      "Our developers are Salesforce-certified professionals with a deep understanding of the platform's architecture, development tools, and best practices.",
  },
  {
    title: 'Custom Application Development',
    description:
      'They excel at crafting custom applications that address your unique business challenges and streamline critical workflows.',
  },
  {
    title: 'Apex & Visualforce Proficiency',
    description:
      "Our developers are masters of Salesforce's core programming languages (Apex & Visualforce), ensuring robust and scalable solutions.",
  },
  {
    title: 'Testing & Deployment Expertise',
    description:
      'They prioritize rigorous testing throughout the development lifecycle and ensure smooth deployment of your Salesforce customizations.',
  },
             
            ]}
          />

<WhyChooseUs/>
          <CertificateSlider/>

          <OurPartners/>

           <FaqReuseable title="FAQ" faqs={faqs} />
            <CTASection/>
           <ContactForm/>
    </>
  )
}

export default page