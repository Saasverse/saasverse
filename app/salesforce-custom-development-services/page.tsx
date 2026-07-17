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
    question:
      'What is the typical engagement process with Saasverse Consultants?',
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
    title: "Automation Solutions:",
    description:
      "Automate repetitive tasks and complex workflows to save time and reduce errors.",
  },
  {
    title: "Custom Workflows:",
    description:
      "Design and implement custom workflows that align with your business processes and improve efficiency.",
  },
  {
    title: "Seamless Integration:",
    description:
      "We integrate Salesforce with other systems and platforms you use, ensuring smooth data flow and operational efficiency.",
  },
  {
    title: "Data Migration:",
    description:
      "Safely migrate your data to Salesforce, maintaining data integrity and security throughout the process.",
  },
  {
    title: "Intuitive Designs:",
    description:
      "Design user-friendly and intuitive interfaces that enhance user adoption and satisfaction.",
  },
  {
    title: "Brand Consistency:",
    description:
      "Ensure brand consistency across all Salesforce interfaces, creating a cohesive and professional appearance.",
  },
  {
    title: "Intuitive Designs:",
    description:
      "Design user-friendly and intuitive interfaces that enhance user adoption and satisfaction.",
  },
  {
    title: "Brand Consistency:",
    description:
      "Ensure brand consistency across all Salesforce interfaces, creating a cohesive and professional appearance.",
  },
  {
    title: "Data-Driven Insights:",
    description:
      "Implement Salesforce Einstein Analytics to gain actionable insights and make informed business decisions.",
  },
  {
    title: "Custom Dashboards:",
    description:
      "Create custom dashboards that provide real-time data and metrics tailored to your business needs.",
  },
  {
    title: "Bespoke Solutions:",
    description:
      "We develop custom applications tailored to your business requirements, ensuring they seamlessly integrate with your existing Salesforce environment.",
  },
  {
    title: "Advanced Coding:",
    description:
      "Our team leverages Salesforce’s Apex and Visualforce to build robust and scalable applications.",
  },
 
];

export const metadata: Metadata = {
  title: "Salesforce Custom Development Services | Saasverse",
  description:
    "Custom Salesforce development services - Apex, Visualforce & workflow automation for US, UAE & India teams. Certified developers. Get a quote.",

    alternates: { canonical: 'https://www.saasverse.in/salesforce-custom-development-services' },
};
const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/banner002.webp"
                 title="Salesforce Custom Development Services"
                 description="At Saasverse Pvt Ltd, we specialize in delivering tailored Salesforce solutions that perfectly align with your unique business requirements. "
               />

                <SalesforceServiceReuseable
      heading="Our Salesforce Custom Development Services"
      benefits={benefits}
    />

    

     <HealthSolution
            title="Why Opt for  "
            highlight="Custom Development? "
            description=""
            image="/images/websiteimages/3.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
              {
                title: 'Bespoke Solutions',
                description:
                  'We develop custom applications tailored to your business requirements, ensuring they seamlessly integrate with your existing Salesforce environment.',
              },
              {
                title: 'Advanced Coding',
                description:
                  'Our team leverages Salesforce’s Apex and Visualforce to build robust and scalable applications.',
              },
              {
                title: 'Lightning Components',
                description:
                  'We create dynamic and responsive Lightning Components to enhance the user experience and functionality.',
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