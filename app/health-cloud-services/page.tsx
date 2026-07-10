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
    title: 'Unified Patient View',
    description:
      'Create a single, comprehensive view of each patient’s medical history, treatment plans, and preferences, enabling care teams to deliver personalized and coordinated healthcare experiences.',
  },
  {
    title: 'Enhanced Patient Engagement',
    description:
      'Empower patients with secure access to health information, appointment scheduling, prescription refills, and communication channels that encourage active participation in their care journey.',
  },
  {
    title: 'Streamlined Care Coordination',
    description:
      'Improve collaboration between doctors, nurses, specialists, and healthcare providers through real-time access to patient information, ensuring seamless and efficient care delivery.',
  },
  {
    title: 'Data-Driven Decisions',
    description:
      'Leverage advanced analytics and population health insights to identify trends, optimize care strategies, improve operational efficiency, and achieve better patient outcomes.',
  },
];

export const metadata: Metadata = {
  title: "Salesforce Health Cloud Implementation Services - Saasverse",
  description:
    "Saasverse provides Salesforce Health Cloud implementation services to help healthcare organizations streamline patient management, enhance care, and ensure compliance.",
};

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/expbanner.webp"
        title="Salesforce Health Cloud Implementation Services"
        description="In today's healthcare landscape, delivering personalized care is no longer a luxury, it's essential."
      />

      <SalesforceServiceReuseable
        heading="Saasverse Pvt Ltd leverages the power of Salesforce Health Cloud to provide you with tailored solutions that elevate patient care. Here's how:"
        benefits={benefits}
      />

      

      <HealthSolution
        title="Why Choose Saasverse for "
        highlight="Health Cloud Solutions?"
        description=""
        image="/images/websiteimages/20.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Healthcare Experts & Salesforce Certified',
            description:
              'Our team combines extensive healthcare industry knowledge with Salesforce Health Cloud expertise to configure and optimize solutions that address your unique business and patient care needs.',
          },
          {
            title: 'Tailored Solutions, Not a One-Size-Fits-All Approach',
            description:
              'We analyze your workflows and patient requirements to design customized Health Cloud solutions that improve operations, enhance efficiency, and deliver better healthcare experiences.',
          },
          {
            title: 'Focus on Security & HIPAA Compliance',
            description:
              'We implement strong security practices and compliance-focused solutions to protect sensitive patient data and support HIPAA requirements.',
          },
          {
            title: 'Proven Results',
            description:
              'Our successful Salesforce implementations and satisfied clients across multiple industries reflect our expertise, reliability, and ability to deliver impactful solutions.',
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
