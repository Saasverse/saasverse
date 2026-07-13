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
    title: "Thorough Analysis:",
    description:
      "Conduct a detailed evaluation of your Salesforce instance, including user permissions, data access controls, and configuration settings.",
  },
  {
    title: "Vulnerability Identification:",
    description:
      "Identify potential security vulnerabilities, loopholes, and weaknesses that could compromise your Salesforce environment.",
  },
  {
    title: "Actionable Insights:",
    description:
      "Provide personalized recommendations and best practices to address identified security gaps and strengthen your Salesforce security posture.",
  },
  {
    title: "Security Policy Development:",
    description:
      "Assist in developing and implementing security policies and procedures to mitigate risks and maintain compliance.",
  },
  {
    title: "Permission Set Analysis:",
    description:
      "Review and analyze user permission sets, profiles, and roles to ensure appropriate access controls are in place.",
  },
  {
    title: "User Activity Monitoring:",
    description:
      "Monitor user activity and behavior to detect anomalies and suspicious activities that may indicate security threats.",
  },
  {
    title: "Data Encryption:",
    description:
      "Implement encryption mechanisms to protect sensitive data at rest and in transit.",
  },
  {
    title: "Data Loss Prevention:",
    description:
      "Set up data loss prevention measures to prevent unauthorized data leakage and ensure data integrity.",
  },
  {
    title: "Regulatory Compliance Check:",
    description:
      "Assess your Salesforce environment against relevant regulatory requirements and industry standards.",
  },
];
export const metadata: Metadata = {
  title: "Salesforce Security Review Services | SaaSverse",
  description:
    "Salesforce security review services for AppExchange ISVs in US, UAE & India - vulnerability checks, compliance & data protection. Contact us.",
};
const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/banner002.webp"
                 title="Salesforce Security Review"
                 description="Ensure Your Salesforce Environment is Secure and Protected"
               />

                <SalesforceServiceReuseable
      heading="Our Salesforce Integration Services"
      benefits={benefits}
    />

   

     <HealthSolution
            title="Why Choose "
            highlight="Salesforce Security Review"
            description=""
            image="/images/websiteimages/4.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
              {
                title: 'Expand Your Market Reach:',
                description:
                  'Tap into the vast Salesforce ecosystem and reach a global audience of potential customers.',
              },
              {
                title: 'Enhance Business Efficiency:',
                description:
                  'Create custom solutions tailored to your specific business needs, improving operational efficiency and productivity.',
              },
              {
                title: 'Generate New Revenue Streams:',
                description:
                  'Monetize your applications by offering them on the Salesforce AppExchange, creating new revenue opportunities.',
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