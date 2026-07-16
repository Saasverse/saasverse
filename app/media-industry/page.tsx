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
    title: "Unified Customer Experience:",
    description:
      "Deliver a seamless experience across all platforms, from content discovery to subscriptions and advertising partnerships.",
  },
  {
    title: "Data-Driven Content Strategy:",
    description:
      "Gain deeper audience insights to personalize content, optimize distribution channels, and maximize engagement.",
  },
  {
    title: "Streamlined Ad Sales & Management:",
    description:
      "Automate workflows, manage ad inventory effectively, and deliver targeted campaigns that resonate with audiences.",
  },
  {
    title: "Subscription Management:",
    description:
      "Simplify subscription processes, reduce churn, and offer flexible pricing models to cater to diverse audience preferences.",
  },
  {
    title: "Real-Time Performance Tracking:",
    description:
      "Measure the effectiveness of your content and advertising campaigns across platforms, and make data-driven decisions for continuous improvement.",
  },
  {
    title: "Enhanced Collaboration:",
    description:
      "Break down silos between teams and foster a collaborative environment for content creation, sales, and marketing.",
  },
];

export const metadata: Metadata = {
  title: "Salesforce Media Cloud Solutions | Saasverse",
  description:
    "Saasverse delivers Salesforce Media Cloud for publishers and broadcasters - ad sales, subscriptions, audience data. Free consultation.",
};

const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/industrybanner.webp"
                 title="Captivate Your Audience"
                 description="Salesforce Solutions for the Media Industry"
               />

                <SalesforceServiceReuseable
      heading="Why Salesforce for Media?"
      benefits={benefits}
    />

   

     <HealthSolution
            title="Saasverse Expertise in"
            highlight="Media"
            description="Healthcare"
            image="/images/websiteimages/20.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
             {
    title: 'Tailored Media Cloud Implementations',
    description:
      'Customize Media Cloud to meet your unique business requirements and workflows.',
  },
  {
    title: 'Seamless Integration with Existing Systems',
    description:
      'Connect your CMS, ad platforms, and other tools to create a unified view of audience and content data.',
  },
  {
    title: 'Custom Solutions for Industry-Specific Challenges',
    description:
      'Build tools to manage digital campaigns, streamline licensing agreements, and optimize content distribution.',
  },
  {
    title: 'End-to-End Training and Support',
    description:
      'Ensure your teams are equipped to make the most of Media Cloud with ongoing support and expert-led training.',
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