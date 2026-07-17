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
    title: "Needs Assessment:",
    description:
      "We start by understanding your business objectives, processes, and challenges to identify opportunities for app development.",
  },
  {
    title: "Market Research:",
    description:
      "Conduct a thorough analysis of existing apps on the AppExchange to identify gaps and areas for innovation.",
  },
  {
    title: "Tailored Solutions:",
    description:
      "Develop custom applications that address your specific business requirements and provide unique value to your users.",
  },
  {
    title: "User-Centric Design:",
    description:
      "Design intuitive and user-friendly interfaces that enhance user adoption and satisfaction.",
  },
  {
    title: "Rigorous Testing:",
    description:
      "Conduct comprehensive testing to ensure the functionality, security, and performance of the app meet the highest standards.",
  },
  {
    title: "User Acceptance Testing:",
    description:
      "Involve key stakeholders in the testing process to validate the app's functionality and usability.",
  },
  {
    title: "Security Review:",
    description:
      "Prepare and submit the app for Salesforce's security review process to ensure compliance with AppExchange guidelines.",
  },
  {
    title: "Packaging and Deployment:",
    description:
      "Package the app for distribution on the AppExchange, ensuring seamless installation and integration with Salesforce orgs.",
  },
  {
    title: "Continuous Support:",
    description:
      "Provide ongoing support and maintenance to address any issues, implement updates, and ensure the app remains optimized.",
  },
];

export const metadata: Metadata = {
  title: "Salesforce AppExchange Development Company | Saasverse",
  description:
    "Salesforce AppExchange development company building & launching apps for US, UAE & global markets. Certified ISV experts. Book a consultation.",

    alternates: { canonical: 'https://www.saasverse.in/salesforce-appexchange-development-company' },
};

const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/banner002.webp"
                 title="Salesforce AppExchange Development Company"
                 description="Elevate Your Business with Salesforce AppExchange App Development"
               />

                <SalesforceServiceReuseable
      heading="Our Approach to Salesforce AppExchange App Development"
      benefits={benefits}
    />

   

     <HealthSolution
            title="Why Choose Salesforce"
            highlight="AppExchange App Development?"
            description=""
            image="/images/websiteimages/6.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
              {
                title: 'Meet Specific Business Needs',
                description:
                  'Address your business unique challenges and requirements with tailored solutions.',
              },
              {
                title: 'Extend Salesforce  Capabilities',
                description:
                  'Expand Salesforce  functionality to better serve your business processes and goals.',
              },
              {
                title: 'Reach a Global Audience',
                description:
                  'Gain exposure to millions of Salesforce users worldwide by listing your app on the AppExchange.',
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