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
    title: 'Real-time Insights:',
    description:
      'Gain instant visibility into crucial sales metrics such as lead conversion rates, pipeline status, and revenue forecasts.',
  },
  {
    title: 'Customizable Reporting:',
    description:
      'Create personalized reports that align with your business objectives, enabling you to track performance metrics and make data-driven decisions.',
  },
  {
    title: 'Automated Efficiency:',
    description:
      'Implement automated workflows to streamline repetitive tasks, reduce manual effort, and empower your team to focus on strategic initiatives.',
  },
];

export const metadata: Metadata = {
  title: "Salesforce Sales Cloud Consulting Service - Saasverse",
  description:
    "Saasverse offers expert Salesforce Sales Cloud consulting services to help businesses optimize sales processes, improve efficiency, and drive revenue growth.",
};

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/expbanner.webp"
        title="Salesforce Sales Cloud Consulting Service"
        description="Elevate Your Sales Process Monitoring with Saasverse Pvt Limited"
      />

      <SalesforceServiceReuseable
        heading="Why Monitor Your Sales Process?"
        benefits={benefits}
      />

      <CTASection />

      <HealthSolution
        title="Why Partner with ?"
        highlight="Saasverse"
        description=""
        image="/images/websiteimages/4.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
         {
  title: 'Experienced Professionals',
  description:
    'Our team of certified Salesforce experts has extensive experience in managing and optimizing Salesforce environments.',
},
{
  title: 'Client-Focused Approach',
  description:
    'We work closely with you to understand your specific needs and deliver personalized solutions that drive results.',
},
{
  title: 'Commitment to Excellence',
  description:
    'We are dedicated to providing high-quality services that exceed your expectations and support your business goals.',
},
{
  title: 'Proven Results',
  description:
    'Our track record of successful Salesforce management and satisfied clients across various industries speaks to our capability and reliability.',
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
