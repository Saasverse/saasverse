import React from 'react';
import PageBanner from '../components/PageBanner';
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
    title: 'Smarter Scheduling',
    description:
      'Optimize field service operations by automatically assigning the right technician based on skills, location, availability, and workload, reducing delays and improving efficiency.',
  },
  {
    title: 'Real-Time Visibility',
    description:
      'Monitor technician locations, job statuses, and resource utilization in real time through a centralized platform that provides complete operational visibility.',
  },
  {
    title: 'Enhanced Communication',
    description:
      'Enable seamless collaboration between dispatchers, field technicians, and customers with integrated communication tools that keep everyone informed throughout the service process.',
  },
  {
    title: 'Mobile Workforce Management',
    description:
      'Empower technicians with mobile access to work orders, schedules, customer information, and status updates, allowing them to stay productive even when offline.',
  },
  {
    title: 'Improved Customer Satisfaction',
    description:
      'Deliver faster response times, efficient service experiences, and transparent communication that strengthen customer relationships and improve overall satisfaction.',
  },
];

export const metadata: Metadata = {
  title: "Salesforce Field Service Lightning Company - Saasverse",
  description:
    "Saasverse offers Salesforce Field Service Lightning solutions to optimize scheduling, automate workflows, and enhance on-site service efficiency.",
};


const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/expbanner.webp"
        title="Salesforce Field Service Lightning Company"
        description="Are you facing challenges in scheduling, communication, and overall visibility into your on-site operations?"
      />

      <SalesforceServiceReuseable
        heading="Here's how FSL Integration streamlines your field service operations"
        benefits={benefits}
      />

      <CTASection />

      <HealthSolution
        title="FSL Integration: "
        highlight="The Key to Success"
        description=""
        image="/images/websiteimages/20.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: '',
            description:
              'Improved Efficiency',
          },
          {
            title: '',
            description:
              'Enhanced Visibility',
          },
          {
            title: '',
            description:
              'Streamlined Communication',
          },
          {
            title: '',
            description:
              'Increased Productivity',
          },
       
        ]}
      />

      <WhyChooseUs />
      <CertificateSlider />

      <OurPartners />

      <FaqReuseable title="FAQ" faqs={faqs} />

      <ContactForm />
    </>
  );
};

export default page;
