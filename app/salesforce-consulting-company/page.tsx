import React from 'react';
import PageBanner from '../components/PageBanner';
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CTASection from '../components/Home/CTASection';
import HealthSolution from '../work-salesforce-health-cloud/HealthSolution';
import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';
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
    title: 'Strategic Planning:',
    description:
      'We begin by understanding your business goals and processes to create a strategic implementation plan that aligns with your objectives.',
  },
  {
    title: 'Custom Configuration:',
    description:
      'Our team configures Salesforce to meet your specific requirements, ensuring a seamless integration with your existing systems.',
  },
  {
    title: 'Data Migration:',
    description:
      'We ensure a smooth transition of your data to Salesforce, maintaining data integrity and security throughout the process.',
  },
  {
    title: 'Tailored Solutions:',
    description:
      'We customize Salesforce to fit your unique business processes, from custom objects and fields to workflow rules and validation.',
  },
  {
    title: 'App Development:',
    description:
      'Our developers create custom applications within Salesforce to enhance functionality and provide additional value to your operations.',
  },
  {
    title: 'Integration Services:',
    description:
      'We integrate Salesforce with other systems and platforms you use, ensuring a unified and efficient workflow.',
  },
  {
    title: 'Ongoing Support:',
    description:
      'Our support team is always available to help you with any issues, ensuring that your Salesforce environment runs smoothly.',
  },
  {
    title: 'Regular Updates:',
    description:
      'We keep your Salesforce system up to date with the latest features and security updates, maximizing its performance and reliability.',
  },
  {
    title: 'User Training',
    description:
      'We provide comprehensive training to your team, empowering them to utilize Salesforce effectively and efficiently.',
  },
];
export const metadata: Metadata = {
  title: "Salesforce Consulting Services Company - 25$/hour",
  description:
    "We provides best Salesforce Consulting Services in USA, Australia, UK, & India - including implementation, customization, support, and strategy. Unlock Salesforce’s full potential—get a free quote today!",
};
const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/banner002.webp"
        title="Salesforce Consulting Company"
        description="At Saasverse Pvt Ltd, we are dedicated to helping your business unlock its full potential with our comprehensive Salesforce Consulting Services."
      />

      <SalesforceServiceReuseable
        heading="Our Salesforce Consulting Covers the following"
        benefits={benefits}
      />

      <CTASection />

      <HealthSolution
        title="Why Choose Saasverse  "
        highlight=" "
        description=""
        image="/images/websiteimages/4.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Expertise and Experience:',
            description:
              'Our team of certified Salesforce professionals brings extensive experience and deep expertise to every project.',
          },
          {
            title: 'Client-Centric Approach:',
            description:
              'We prioritize understanding your unique needs and delivering solutions that are tailored to your business.',
          },
          {
            title: 'Commitment to Excellence:',
            description:
              'We are dedicated to providing exceptional service and ensuring that our clients achieve outstanding results with Salesforce.',
          },
          {
            title: 'Proven Track Record:',
            description:
              'Our successful track record speaks for itself, with numerous satisfied clients and successful Salesforce implementations across various industries.',
          },
        ]}
      />

      <CertificateSlider />

      <OurPartners />

      <FaqReuseable title="FAQ" faqs={faqs} />

      <ContactForm/>
    </>
  );
};

export default page;
