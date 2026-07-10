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
    title: 'Building a Fortress of Trust:',
    description:
      'Enhance customer interactions, personalize experiences, and foster stronger relationships built on transparency and security.',
  },
  {
    title: 'Empowering Advisors & Relationship Managers:',
    description:
      'Equip your team with real-time client data and intuitive tools to deliver personalized financial advice and foster deeper client relationships.',
  },
  {
    title: 'Streamlining Onboarding & Account Management:',
    description:
      'Automate repetitive tasks, streamline onboarding processes, and deliver a frictionless experience for new and existing clients.',
  },
  {
    title: 'Optimizing Compliance & Risk Management:',
    description:
      'Ensure regulatory compliance with robust security features, audit trails, and automated compliance workflows.',
  },
  {
    title: 'Data-Driven Decision Making:',
    description:
      'Gain real-time insights into customer behavior, market trends, and risk factors to make informed financial decisions.',
  },
  {
    title: 'Unleashing Innovation:',
    description:
      'Leverage AI and automation to personalize client experiences, streamline workflows, and drive operational efficiency.',
  },
];

export const metadata: Metadata = {
  title: "Salesforce Solutions for the Financial Industry - Saasverse",
  description:
    "Saasverse provides Salesforce solutions for the financial industry to optimize operations, enhance client relationships, and drive business growth.",
};

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/industrybanner.webp"
        title="Forge Financial Futures" 
        description="Architecting Trust with Salesforce for Banking & Finance"
      />

      <SalesforceServiceReuseable
        heading="Why Salesforce for Banking & Finance?"
        benefits={benefits}
      />

      

      <HealthSolution
        title="Why Partner with Saasverse?:"
        highlight=""
        description="Healthcare"
        image="/images/websiteimages/20.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Experienced Professionals:',
            description:
              'Our team of certified Salesforce experts has extensive experience in managing and optimizing Salesforce environments.',
          },
          {
            title: 'Client-Focused Approach:',
            description:
              'We work closely with you to understand your specific needs and deliver personalized solutions that drive results.',
          },
          {
            title: 'Commitment to Excellence:',
            description:
              'We are dedicated to providing high-quality services that exceed your expectations and support your business goals.',
          },
          {
            title: 'Proven Results:',
            description:
              'Our track record of successful Salesforce management and satisfied clients across various industries speaks to our capability and reliability.',
          },
        ]}
      />

      <WhyChooseUs />
      <CertificateSlider />

      <OurPartners />

      <FaqReuseable title="FAQ" faqs={faqs} />
        <CTASection />
      <ContactForm />
    </>
  );
};

export default page;
