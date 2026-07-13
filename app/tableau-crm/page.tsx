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
    title: 'Effortless Data Exploration',
    description:
      'Explore and analyze Salesforce data with an intuitive interface that makes advanced analytics accessible to users of all technical skill levels.',
  },
  {
    title: 'Dynamic Insights at Your Fingertips',
    description:
      'Access real-time insights into customer behavior, sales performance, and business trends through interactive dashboards and visualizations that support faster decision-making.',
  },
  {
    title: 'Uncover Hidden Patterns',
    description:
      'Leverage advanced analytics to identify trends, correlations, and growth opportunities that traditional reporting methods may overlook.',
  },
  {
    title: 'Drive Actionable Results',
    description:
      'Transform insights into action by drilling into key metrics, identifying improvement areas, and making data-driven decisions that enhance business performance.',
  },
];

export const metadata: Metadata = {
  title: "Tableau CRM (Einstein Analytics) Services | SaaSverse",
  description:
    "Certified Tableau CRM consultants helping businesses unlock insights, visualize data, and make data-driven decisions for better growth. India, US & UAE. Free consultation.",
};

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/expbanner.webp"
        title="Tableau Consulting Services"
        description="Untangle Complexity, Unleash Insights. Supercharge Your Data with Saasverse Pvt Ltd's Tableau CRM Expertise."
      />

      <SalesforceServiceReuseable
        heading="Here's how we empower you to unlock the true power of your data"
        benefits={benefits}
      />

      <CTASection />

      <HealthSolution
        title="Why Partner with"
        highlight="Saasverse?"
        description=""
        image="/images/websiteimages/20.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Tableau CRM Certified Professionals',
            description:
              'Our certified Salesforce and Tableau CRM experts help you unlock the full potential of your data, delivering actionable insights that drive smarter business decisions.',
          },
          {
            title: 'Customizable Dashboards & Reports',
            description:
              'We create tailored dashboards and reports aligned with your unique business objectives and KPIs, ensuring the right information is always available when you need it.',
          },
          {
            title: 'Data Storytelling Experts',
            description:
              'We transform complex datasets into clear, compelling visual stories that help stakeholders understand trends, opportunities, and business performance with confidence.',
          },
          {
            title: 'Proven Results',
            description:
              'Our successful Salesforce implementations and satisfied clients across diverse industries demonstrate our expertise, reliability, and commitment to delivering measurable business outcomes.',
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
