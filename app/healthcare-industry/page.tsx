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
    title: "Unified Patient View:",
    description:
      "Gain a 360-degree view of your patients, including medical history, treatment plans, and communication preferences.",
  },
  {
    title: "Enhanced Patient Engagement:",
    description:
      "Foster stronger relationships with patients through personalized communication and self-service portals.",
  },
  {
    title: "Improved Care Coordination:",
    description:
      "Break down silos and enable seamless collaboration between care teams.",
  },
  {
    title: "Streamlined Operations:",
    description:
      "Automate tasks, optimize workflows, and boost operational efficiency.",
  },
  {
    title: "Compliance Management:",
    description:
      "Ensure patient data security and HIPAA compliance with robust security features.",
  },
  {
    title: "Population Health Management:",
    description:
      "Proactively identify at-risk patients and tailor preventive care programs.",
  },
];

export const metadata: Metadata = {
  title: " Salesforce Solutions for the Healthcare Industry- Saasverse",
  description:
    "Saasverse provides Salesforce solutions for the healthcare industry to improve patient management, streamline operations, and enhance care delivery.",

    alternates: { canonical: 'https://www.saasverse.in/healthcare-industry' },
  };

const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/industrybanner.webp"
                 title="Delivering Holistic Care"
                 description="Salesforce Solutions for the Healthcare Industry"
               />

                <SalesforceServiceReuseable
      heading="Why Salesforce for Healthcare?"
      benefits={benefits}
    />

   

     <HealthSolution
            title="Saasverse Expertise in"
            highlight="Salesforce Quality Analyst"
            description="Healthcare"
            image="/images/websiteimages/4.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
              {
    title: 'Tailored Health Cloud Solutions',
    description:
      'We customize Salesforce Health Cloud for hospitals, clinics, payers, and pharmaceutical companies to align with your unique operational needs.',
  },
  {
    title: 'Seamless EHR Integration',
    description:
      'Our team ensures smooth integration with your Electronic Health Records (EHR) system, enabling unified and efficient data access.',
  },
  {
    title: 'Ongoing Support & Innovation',
    description:
      "We offer continuous support, user training, and build custom applications to solve your organization's specific challenges.",
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