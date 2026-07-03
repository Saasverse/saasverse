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
    title: "Enhanced User Adoption:",
    description:
      "A user-centric approach leads to a positive user experience and higher adoption rates of the Salesforce platform.",
  },
  {
    title: "Improved Business Alignment:",
    description:
      "Your Salesforce product will perfectly align with your business goals, driving strategic initiatives and maximizing ROI.",
  },
  {
    title: "Optimized Functionality:",
    description:
      "Data-driven decision-making ensures your Salesforce product offers the most relevant and valuable features for your users.",
  },
  {
    title: "Boosted Productivity:",
    description:
      "Streamlined workflows and user-friendly functionalities enhance team productivity and empower them to achieve more.",
  },
  {
    title: "A Future-Proofed Salesforce Solution:",
    description:
      "Your PM will proactively plan for future growth and evolving needs, ensuring your Salesforce solution remains sustainable and scalable.",
  },
];

export const metadata: Metadata = {
  title: "Hire Salesforce Product Manager | Expert Leadership - Saasverse",
  description:
    "Saasverse offers skilled Salesforce product managers to drive strategy, enhance CRM solutions, and ensure successful product development and execution.",
};

const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/hirebanner.webp"
                 title="Hire Salesforce Product Manager"
                 description="Shape Your Salesforce Vision: Hire Top-Tier Salesforce Product Managers at Saasverse Pvt Ltd"
               />

                <SalesforceServiceReuseable
      heading="Our Approach to Hire Product Manager"
      benefits={benefits}
    />

    <CTASection/>

     <HealthSolution
            title="Why Hire a Salesforce Product Manager "
            highlight="from Saasverse?"
            description=""
            image="/images/websiteimages/4.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
              {
    title: 'Strategic Visionaries',
    description:
      "Our PMs are Salesforce-certified experts with a keen understanding of the platform's capabilities and strategic thinking to define a roadmap aligned with your business objectives.",
  },
  {
    title: 'Product Expertise',
    description:
      'They possess a deep understanding of product development lifecycles, user experience (UX) principles, and best practices for maximizing Salesforce product adoption.',
  },
  {
    title: 'User Advocacy',
    description:
      'Our PMs champion the needs of your users, ensuring the Salesforce solution caters to their workflows and drives productivity and satisfaction.',
  },
  {
    title: 'Technical Proficiency',
    description:
      'They possess a solid grasp of Salesforce functionalities and collaborate effectively with development teams to translate product vision into reality.',
  },
             
            ]}
          />

<WhyChooseUs/>
          <CertificateSlider/>

          <OurPartners/>

           <FaqReuseable title="FAQ" faqs={faqs} />

           <ContactForm/>
    </>
  )
}

export default page