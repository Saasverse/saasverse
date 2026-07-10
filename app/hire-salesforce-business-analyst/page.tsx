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
      "A clear understanding of user needs leads to user-friendly Salesforce configurations that promote user adoption and engagement.",
  },
  {
    title: "Improved Business Processes:",
    description:
      "Our BAs identify opportunities to optimize workflows and automate repetitive tasks, leading to increased efficiency and productivity.",
  },
  {
    title: "Data-Driven Decisions:",
    description:
      "Insights gleaned from data analysis empower you to make informed business decisions that drive growth and success.",
  },
  {
    title: "Reduced Project Risks:",
    description:
      "Clear requirements gathering and stakeholder communication minimize project risks and ensure the final solution aligns with your business goals.",
  },
  {
    title: "Maximized ROI:",
    description:
      "By optimizing processes and promoting user adoption, you maximize the return on investment in your Salesforce platform.",
  },
];

export const metadata: Metadata = {
  title: "Hire Salesforce Business Analysts in India | Saasverse",
  description:
    "Hire a dedicated Salesforce business analyst in India. Flexible hourly or full-time hire, US/UAE time-zone overlap. Get a free quote today.",
};

const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/hirebanner.webp"
                 title="Hire Salesforce Business Analysts"
                 description="Bridge the Gap: Hire Top-Tier Salesforce Business Analysts at Saasverse Pvt Ltd"
               />

                <SalesforceServiceReuseable
      heading="Benefits of Hiring a Saasverse Salesforce Business Analyst:"
      benefits={benefits}
    />

    

     <HealthSolution
            title="Why Hire a Salesforce Business Analyst"
            highlight="from Saasverse?"
            description=""
            image="/images/websiteimages/4.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
              {
    title: 'Business Acumen & Technical Expertise',
    description:
      'Our BAs possess a unique blend of business understanding and Salesforce knowledge. They translate your business processes and objectives into actionable Salesforce solutions.',
  },
  {
    title: 'Process Optimization Champions',
    description:
      'Our BAs identify areas for process improvement and leverage Salesforce functionalities to streamline workflows and boost efficiency.',
  },
  {
    title: 'Change Management Champions',
    description:
      'Our BAs facilitate change management initiatives to ensure user adoption and maximize the value of your Salesforce implementation.',
  },
  {
    title: 'Communication Bridge',
    description:
      'They act as a bridge between business stakeholders and technical teams, fostering clear communication and collaboration throughout the project lifecycle.',
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