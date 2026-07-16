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
    title: 'Unified Customer Experience:',
    description:
      'Deliver a seamless omnichannel experience across all touchpoints, from product discovery and purchase to post-sale support and loyalty programs.',
  },
  {
    title: 'Enhanced Collaboration:',
    description:
      'Streamline communication and collaboration between internal teams, distributors, and retailers to optimize supply chains and meet customer demands efficiently.',
  },
  {
    title: 'Data-Driven Marketing:',
    description:
      'Gain deeper customer insights to personalize marketing campaigns, target high-value segments, and maximize ROI.',
  },
  {
    title: 'Improved Trade & Promotion Management:',
    description:
      'Automate complex trade promotions, optimize pricing strategies, and ensure seamless collaboration with retailers.',
  },
  {
    title: 'Real-Time Inventory Visibility:',
    description:
      'Gain real-time insights into inventory levels across your entire supply chain, minimize stockouts, and optimize inventory management.',
  },
  {
    title: 'Empowered Sales Teams:',
    description:
      'Equip your sales reps with customer data and insights to close deals faster and build stronger relationships with retailers and distributors.',
  },
];

export const metadata: Metadata = {
  title: "Salesforce Consumer Goods Cloud | Saasverse",
  description:
    "Saasverse delivers Salesforce Consumer Goods Cloud for CPG brands and retailers - omnichannel CX, supply chain. Get a free consult.",
};

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/industrybanner.webp"
        title="Powering Your Brand"
        description="Salesforce Solutions for the Consumer Goods Industry"
      />

      <SalesforceServiceReuseable
        heading="Why Salesforce for Consumer Goods?"
        benefits={benefits}
      />

      

      <HealthSolution
        title="Saasverse Expertise in"
        highlight="Consumer Goods"
        description="Healthcare"
        image="/images/websiteimages/20.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Tailored Consumer Goods Cloud Solutions',
            description:
              "Customize the platform to meet your specific needs—whether you're a brand owner, manufacturer, or retailer.",
          },
          {
            title: 'Seamless System Integration',
            description:
              'Integrate Consumer Goods Cloud with ERP, WMS, and other systems for a unified, real-time view of operations and data.',
          },
          {
            title: 'Custom Tools for Complex Challenges',
            description:
              'Build solutions to manage product lifecycles, pricing strategies, and marketing campaigns across multiple channels.',
          },
          {
            title: 'Comprehensive Training and Support',
            description:
              'Enable your teams with hands-on support and training to maximize the value of Salesforce Consumer Goods Cloud.',
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
