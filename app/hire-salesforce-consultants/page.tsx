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
    title: "Proven Expertise:",
    description:
      "Our consultants are Salesforce certified professionals with a proven track record of success. They stay up-to-date on the latest Salesforce features and functionalities to ensure you receive the most cutting-edge solutions.",
  },
  {
    title: "End-to-End Support:",
    description:
      "We offer a comprehensive suite of Salesforce consulting services, from implementation and customization to integration and data migration. We guide you through every step of the process, ensuring a smooth and successful Salesforce adoption.",
  },
  {
    title: "Business-Centric Approach:",
    description:
      "We don't just implement technology; we understand your business goals. Our consultants work closely with you to develop a customized Salesforce strategy that drives measurable results.",
  },
  {
    title: "Focus on User Adoption:",
    description:
      "We believe that successful Salesforce implementations hinge on user adoption. Our team provides comprehensive training programs to empower your team to leverage the platform effectively.",
  },
  {
    title: "Ongoing Support:",
    description:
      "Our commitment to your success doesn't end with implementation. We offer ongoing support services to ensure you continue to maximize the value of your Salesforce investment.",
  },
];

export const metadata: Metadata = {
  title: "Hire Salesforce Consultants in India | Saasverse",
  description:
    "Hire dedicated Salesforce consultants in India. Flexible hourly, part-time or full-time hire, US/UAE time-zone overlap. Get a free quote today.",
};


const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/hirebanner.webp"
                 title="Hire Saasverse Salesforce Consultants"
                 description="Saasverse Pvt Ltd: Your Trusted Salesforce Consulting Partner"
               />

                <SalesforceServiceReuseable
      heading="Why Hire Saasverse Salesforce Consultants?"
      benefits={benefits}
    />

    

     <HealthSolution
            title="What We Can Do for You: "
            highlight=""
            description=""
            image="/images/websiteimages/4.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
              {
                title: 'Salesforce Implementation and Customization',
                description:
                  'Tailor Salesforce to your specific needs and workflows to optimize your sales processes.',
              },
              {
                title: 'Salesforce Integration',
                description:
                  'Seamlessly integrate Salesforce with your existing business systems to eliminate data silos and improve data flow.',
              },
              {
                title: 'Salesforce Development',
                description:
                  'Develop custom applications to extend Salesforce functionality and automate complex tasks.',
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