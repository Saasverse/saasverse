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
    title: "Unified Customer Journey:",
    description:
      "Offer a seamless experience across all touchpoints, from lead generation to billing and support.",
  },
  {
    title: "Empowered Sales Teams:",
    description:
      "Equip your sales reps with real-time insights to close deals faster and deliver personalised offerings.",
  },
  {
    title: "Automated Order Management:",
    description:
      "Streamline order fulfilment, reduce errors, and improve operational efficiency.",
  },
  {
    title: "Enhanced Partner Management:",
    description:
      "Strengthen relationships with partners and distributors through improved communication and collaboration.",
  },
  {
    title: "Data-Driven Network Operations:",
    description:
      "Gain real-time visibility into network performance and proactively identify potential issues.",
  },
  {
    title: "Customer Self-Service:",
    description:
      "Empower customers to manage their accounts, troubleshoot issues, and access information independently.",
  },
];

export const metadata: Metadata = {
  title: "Salesforce Communications Cloud Solutions | Saasverse",
  description:
    "Saasverse implements Salesforce Communications Cloud for telecom providers - order automation, self-service, and CX. Talk to an expert.",
};

const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/industrybanner.webp"
                 title="Connecting the Future"
                 description="Salesforce Solutions for the Communications Industry"
               />

                <SalesforceServiceReuseable
      heading="Why Salesforce for Healthcare?"
      benefits={benefits}
    />

  

     <HealthSolution
            title="Saasverse Expertise in"
            highlight="Communications"
            description="Healthcare"
            image="/images/websiteimages/20.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
              {
    title: 'Customized Communications Cloud Setup',
    description:
      "Tailored implementations to fit your business model, whether you're offering mobile, broadband, or bundled services.",
  },
  {
    title: 'System Integration for Unified Data',
    description:
      'Seamless integration with existing platforms to provide a single, accurate view of customer data and interactions.',
  },
  {
    title: 'Custom Solutions for Industry Challenges',
    description:
      'We build solutions to manage complex service bundles, streamline order fulfillment, and enhance network visibility.',
  },
  {
    title: 'Comprehensive Training & Support',
    description:
      'Empower your teams with ongoing support and training to fully leverage the power of Communications Cloud.',
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