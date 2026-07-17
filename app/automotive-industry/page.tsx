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
    title: "Enhanced Customer Experience:",
    description:
      "Provide a seamless experience across all touchpoints, from the initial showroom visit to after-sales service.",
  },
  {
    title: "Streamlined Lead Management:",
    description:
      "Capture and qualify leads effectively, automate follow-ups, and prioritize high-potential opportunities.",
  },
  {
    title: "Improved Sales Efficiency:",
    description:
      "Equip your sales teams with real-time data and insights to close deals faster.",
  },
  {
    title: "Personalized Marketing:",
    description:
      "Deliver targeted campaigns based on customer preferences and buying history.",
  },
  {
    title: "Inventory Management:",
    description:
      "Gain real-time visibility into your inventory levels and optimize stock allocation.",
  },
  {
    title: "Connected Service:",
    description:
      "Offer a seamless after-sales service experience by providing service reps with a centralized view of customer history and service needs.",
  },
];

export const metadata: Metadata = {
  title: "Salesforce Automotive Cloud Solutions | Saasverse",
  description:
    "Saasverse builds Salesforce Automotive Cloud solutions for dealers and OEMs - lead management, service, and CX. Book a free consult.",

    alternates: { canonical: 'https://www.saasverse.in/automotive-industry' },
  };

const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/industrybanner.webp"
                 title="Revving Up Sales with Salesforce"
                 description="Solutions for the Automotive Industry"
               />

                <SalesforceServiceReuseable
      heading="Key Benefits of Salesforce for Automotive"
      benefits={benefits}
    />

   

     <HealthSolution
            title="Benefits of Hiring a Saasverse"
            highlight="Salesforce Quality Analyst"
            description=""
            image="/images/websiteimages/4.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
              {
    title: 'Customized Salesforce Implementation',
    description:
      'We analyze your unique business challenges and design a Salesforce setup that fits your specific automotive needs.',
  },
  {
    title: 'Seamless System Integration',
    description:
      'Our team ensures smooth integration between Salesforce and your existing systems to enable real-time data flow and operational efficiency.',
  },
  {
    title: 'Ongoing Support & User Training',
    description:
      'We offer continuous support and hands-on training to drive successful user adoption and long-term value from your Salesforce investment.',
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