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
    title: 'Illuminating Customer Connections:',
    description:
      'Unify customer data across touchpoints, personalize communication, and build stronger relationships with consumers and businesses.',
  },
  {
    title: 'Optimizing the Grid:',
    description:
      'Gain real-time insights into energy usage, streamline grid management, and enable proactive maintenance to ensure reliable power delivery.',
  },
  {
    title: 'Empowering Field Operations:',
    description:
      'Equip field service teams with mobile tools to manage work orders efficiently, improve response times, and enhance customer satisfaction.',
  },
  {
    title: 'Fueling Sustainability Initiatives:',
    description:
      'Track and report on environmental impact, manage renewable energy sources, and support sustainability goals effectively.',
  },
  {
    title: 'Harnessing the Power of Data:',
    description:
      'Leverage AI and analytics to optimize pricing strategies, predict energy demand, and make data-driven decisions for a more sustainable future.',
  },
  {
    title: 'Connecting the Energy Ecosystem:',
    description:
      'Facilitate seamless collaboration between utilities, renewable energy providers, and consumers to create a more efficient and sustainable energy landscape.',
  },
];

export const metadata: Metadata = {
  title: "Salesforce for Energy and Utilities | Saasverse",
  description:
    "Saasverse delivers Salesforce CRM solutions for energy and utility firms - grid ops, field service, sustainability tracking. Get a free consult.",
};

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/industrybanner.webp"
        title="Powering a Sustainable Future"
        description="Spark Innovation with Salesforce for Energy"
      />

      <SalesforceServiceReuseable
        heading="Why Salesforce for Energy?"
        benefits={benefits}
      />

    

      <HealthSolution
        title="Saasverse: Your Energy"
        highlight="Industry Experts"
        description="Healthcare"
        image="/images/websiteimages/20.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Industry-Specific Customization',
            description:
              "Tailor Salesforce to meet your unique requirements—whether you're a utility provider, renewable energy company, or energy consultant.",
          },
          {
            title: 'Seamless System Integration',
            description:
              'Connect Salesforce with existing systems like metering and asset management platforms for a unified view of operations and customer data.',
          },
          {
            title: 'Custom App Development',
            description:
              'Build solutions for challenges like managing smart grid infrastructure or optimizing large-scale energy consumption.',
          },
          {
            title: 'Ongoing Training & Support',
            description:
              'Enable your team with expert support and training to fully leverage Salesforce and drive sustainable innovation.',
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
