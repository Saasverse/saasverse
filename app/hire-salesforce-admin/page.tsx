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
    title: "Increased Efficiency:",
    description:
      "Streamlined workflows, automated tasks, and optimized configurations lead to a more efficient Salesforce operation.",
  },
  {
    title: "Enhanced User Experience:",
    description:
      "Customizations and user-friendly configurations create a positive user experience, promoting user adoption and maximizing platform value.",
  },
  {
    title: "Improved Data Quality:",
    description:
      "Data management expertise ensures accurate, clean, and organized data, leading to better decision-making.",
  },
  {
    title: "Reduced Costs:",
    description:
      "Automation and streamlined processes can minimize administrative overhead and reduce reliance on external resources.",
  },
  {
    title: "Enhanced Security:",
    description:
      "Robust security protocols and user access controls protect your data and ensure regulatory compliance.",
  },
];

export const metadata: Metadata = {
  title: "Hire Salesforce Admin in India | Saasverse",
  description:
    "Hire a dedicated Salesforce admin in India. Flexible hourly, part-time or full-time hire, US/UAE time-zone overlap. Get a free quote today.",
    alternates: { canonical: 'https://www.saasverse.in/hire-salesforce-admin' },

  };

const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/hirebanner.webp"
                 title="Hire Salesforce Administrator"
                 description="Empower Your Salesforce Journey: Hire Top-Tier Salesforce Administrators at Saasverse Pvt Ltd"
               />

                <SalesforceServiceReuseable
      heading="Benefits of Hiring a Saasverse Salesforce Administrator"
      benefits={benefits}
    />

    

     <HealthSolution
            title="Why Hire a Salesforce Administrator  "
            highlight="from Saasverse?"
            description=""
            image="/images/websiteimages/4.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
               {
    title: 'Certified Expertise',
    description:
      'Our Admins are Salesforce-certified professionals with a deep understanding of platform functionalities, security protocols, and best practices.',
  },
  {
    title: 'Customization Prowess',
    description:
      'They can customize Salesforce to match your specific workflows and user requirements, optimizing your Salesforce experience.',
  },
  {
    title: 'Data Management Masters',
    description:
      'Our Admins are experts in data management, ensuring data accuracy, integrity, and compliance with security regulations.',
  },
  {
    title: 'Automation Champions',
    description:
      "They leverage automation tools to streamline repetitive tasks, freeing up your team's time to focus on higher-value activities.",
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