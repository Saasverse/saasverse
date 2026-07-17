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
    title: 'Automate Quote Generation',
    description:
      'Eliminate manual data entry and reduce errors with automated quote generation, enabling sales teams to focus more on closing deals and less on administrative tasks.',
  },
  {
    title: 'Accurate Pricing & Profitability',
    description:
      'Ensure consistent pricing and discount management across all quotes with predefined pricing rules that help protect margins and prevent revenue leakage.',
  },
  {
    title: 'Improved Sales Cycle Efficiency',
    description:
      'Accelerate the sales process through automated approvals and streamlined workflows, helping your team deliver quotes faster and close opportunities more quickly.',
  },
  {
    title: 'Enhanced Sales Team Productivity',
    description:
      'Provide sales representatives with intuitive CPQ tools that simplify complex quoting processes, increase efficiency, and create more time for customer engagement.',
  },
];

export const metadata: Metadata = {
  title: "Salesforce CPQ Implementation Services | Saasverse",
  description:
    "Certified Salesforce CPQ implementation consultants helping businesses streamline pricing, automate quotes, and enhance sales efficiency. India, US & UAE. Free consultation.",
    alternates: { canonical: 'https://www.saasverse.in/salesforce-cpq-implementation' },

  };


const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/expbanner.webp"
        title="Salesforce CPQ Implementation Services"
        description="Optimize Sales Workflow Solutions with Saasverse Pvt Ltd's CPQ Implementation."
      />

      <SalesforceServiceReuseable
        heading="Saasverse Pvt Ltd unlocks the power of CPQ solutions"
        benefits={benefits}
      />

      

      <HealthSolution
        title="Why Choose  "
        highlight="Saasverse?"
        description=""
        image="/images/websiteimages/20.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Proven CPQ Experts',
            description:
              'Our experienced CPQ consultants have successfully implemented leading CPQ solutions, ensuring your system is configured to support your sales processes and business objectives.',
          },
          {
            title: 'Data-Driven Approach',
            description:
              'We evaluate your existing sales and pricing data to identify inefficiencies and optimize your CPQ solution for improved accuracy, efficiency, and performance.',
          },
          {
            title: 'Seamless Integrations',
            description:
              'We integrate CPQ with Salesforce CRM and other critical business systems, creating a unified data ecosystem that eliminates silos and streamlines operations.',
          },
          {
            title: 'Change Management Expertise',
            description:
              'We support successful user adoption through comprehensive training, onboarding, and ongoing assistance, ensuring your sales team maximizes the value of your CPQ investment.',
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
