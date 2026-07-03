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
    title: 'Real-time Insights',
    description:
      'Monitor service metrics in real-time to proactively address issues and optimise performance.',
  },
  {
    title: 'Intuitive Dashboards',
    description:
      'Visualize data with customizable dashboards for actionable insights and informed decision-making.',
  },
  {
    title: 'Scalable Solutions',
    description:
      'Grow your service capabilities with scalable solutions that adapt to your business needs and customer demands.',
  },
];

export const metadata: Metadata = {
  title: "Salesforce Service Cloud Consultant | Expert Solutions - Saasverse",
  description:
    "Saasverse offers an expert Salesforce Service Cloud consultant to enhance customer service, streamline support processes, and improve customer satisfaction.",
};

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/expbanner.webp"
        title="Salesforce Service Cloud Consulting"
        description="Saasverse Pvt Limited specializes in transforming service operations through advanced Service Cloud solutions"
      />

      <SalesforceServiceReuseable
        heading="Key Benefits of Our Approach"
        benefits={benefits}
      />

      <CTASection />

      <HealthSolution
        title="Why Choose "
        highlight="Service Cloud?"
        description=""
        image="/images/websiteimages/21.jpg"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Efficient Case Management',
            description:
              'Handle customer inquiries and issues seamlessly with a centralised platform.',
          },
          {
            title: 'Automated Workflows',
            description:
              'Streamline processes with automated workflows to reduce response times and improve service delivery.',
          },
          {
            title: '360-Degree View of Customers',
            description:
              'Gain insights into customer interactions and preferences to personalize service experiences.',
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
