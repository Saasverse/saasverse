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
    title: 'Charting Personalized Adventures:',
    description:
      'Unify guest data across touchpoints, personalize recommendations, and curate itineraries that exceed expectations.',
  },
  {
    title: 'Building Lasting Relationships:',
    description:
      'Foster deeper guest connections, nurture loyalty programs, and turn one-time visitors into lifelong brand advocates.',
  },
  {
    title: 'Optimizing Operations:',
    description:
      'Streamline reservations, automate tasks, and gain real-time insights to ensure flawless execution at every stage of the guest journey.',
  },
  {
    title: 'Revenue Management on Autopilot:',
    description:
      'Leverage dynamic pricing strategies and automated upselling tactics to maximize revenue without compromising guest value.',
  },
  {
    title: 'Empowering Your Team:',
    description:
      'Equip staff with the tools they need to personalize guest interactions, anticipate needs, and deliver exceptional service.',
  },
  {
    title: 'Navigating the Digital Wave:',
    description:
      'Integrate seamlessly with online travel agencies, booking platforms, and loyalty programs to create a frictionless digital experience.',
  },
];

export const metadata: Metadata = {
  title: "Salesforce CRM for Travel and Hospitality | Saasverse",
  description:
    "Saasverse builds Salesforce CRM solutions for hotels and travel brands - guest 360, loyalty, PMS integration. Book a free consult.",
    alternates: { canonical: 'https://www.saasverse.in/travels-hospitality-industry' },

  };

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/industrybanner.webp"
        title="Craft Unforgettable Journeys"
        description="Unleash the Power of Salesforce for Travel & Hospitality"
      />

      <SalesforceServiceReuseable
        heading="Why Salesforce for Travel & Hospitality?"
        benefits={benefits}
      />

      <CTASection />

      <HealthSolution
        title="Saasverse:"
        highlight="Your Travel & Hospitality Expertise"
        description="Healthcare"
        image="/images/websiteimages/20.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Tailored CRM for Hospitality',
            description:
              'Customize Salesforce to align with your services—be it hotels, cruises, resorts, or tour operations.',
          },
          {
            title: 'Unified Guest Experience',
            description:
              'Integrate with your Property Management Systems (PMS) and booking engines to build a single source of truth for every guest.',
          },
          {
            title: 'Smart Solutions & Support',
            description:
              'Build custom tools for managing loyalty programs, handling seasonal demand, and receive ongoing training and support to maximize ROI.',
          },
          {
            title: 'Training and Continuous Support',
            description:
              'Enable your team with expert guidance, hands-on training, and ongoing support to maximize the value of your Salesforce investment.',
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
