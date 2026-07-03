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
    title: "Reduced Risks:",
    description:
      "Experienced PMs anticipate and mitigate potential issues, keeping your project on track.",
  },
  {
    title: "Improved Efficiency:",
    description:
      "Streamlined workflows and clear communication lead to increased project efficiency.",
  },
  {
    title: "Enhanced User Adoption:",
    description:
      "Our PMs ensure user needs are considered throughout the process, leading to higher user adoption rates of the Salesforce platform.",
  },
  {
    title: "Maximized ROI:",
    description:
      "By ensuring project success, you maximize the return on investment in your Salesforce implementation.",
  },
  {
    title: "Peace of Mind:",
    description:
      "With a dedicated PM at the helm, you can focus on your core business while your Salesforce project progresses smoothly.",
  },
];

export const metadata: Metadata = {
  title: "  Hire Salesforce Project Managers | Expert Management - Saasverse",
  description:
    "Saasverse offers skilled Salesforce project managers to ensure smooth implementation, efficient workflows, and successful project execution for your business.",
};

const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/hirebanner.webp"
                 title="Hire Salesforce Project Manager"
                 description="Supercharge Your Salesforce Journey: Hire Top-Tier Salesforce Project Managers at Saasverse Pvt Ltd"
               />

                <SalesforceServiceReuseable
      heading="Benefits of Hiring a Saasverse Salesforce Project Manager"
      benefits={benefits}
    />

    <CTASection/>

     <HealthSolution
            title="Why Hire a Salesforce Project Manager from"
            highlight="Saasverse?"
            description=""
            image="/images/websiteimages/23.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
              {
    title: 'Proven Track Record',
    description:
      'Our PMs are Salesforce-certified experts with a history of delivering successful Salesforce projects on time and within budget.',
  },
  {
    title: 'Deep Expertise',
    description:
      'They possess not only technical prowess in Salesforce but also strong project management skills. This ensures smooth execution, clear communication, and effective risk mitigation.',
  },
  {
    title: 'Business Acumen',
    description:
      'Our PMs understand the broader business context of your project. They translate your goals into actionable plans and ensure the Salesforce solution aligns with your overall strategy.',
  },
  {
    title: 'Effective Communication',
    description:
      'They bridge the gap between technical teams and business stakeholders, fostering clear communication and seamless collaboration throughout the project lifecycle.',
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