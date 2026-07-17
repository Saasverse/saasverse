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
  title: 'Effortless Data Exchange',
  description:
    'Automate data exchange between Salesforce CRM and other applications, ensuring real-time updates, eliminating manual data entry, and reducing errors across your business processes.',
},
{
  title: 'Unified Customer Experience',
  description:
    'Break down data silos and create a complete 360-degree customer view, enabling marketing, sales, and service teams to deliver personalized and consistent customer experiences.',
},
{
  title: 'Boosted Productivity & Efficiency',
  description:
    'Free your employees from repetitive tasks by automating data synchronization, allowing them to focus on building customer relationships and driving business growth.',
},
{
  title: 'Actionable Insights',
  description:
    'Leverage integrated data across systems to generate meaningful reports, uncover valuable insights, and make data-driven decisions that improve marketing, sales, and customer service outcomes.',
},
];

export const metadata: Metadata = {
  title: "MuleSoft Development Services | Saasverse",
  description:
    "Certified MuleSoft developers helping businesses streamline API integration, connect applications, and enhance business efficiency. India, US & UAE. Free consultation.",
  alternates: { canonical: 'https://www.saasverse.in/mulesoft-development' },

  };

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/expbanner.webp"
        title="Mulesoft Development Services"
        description="Ready to integrate Mulesoft products with your Salesforce"
      />

      <SalesforceServiceReuseable
        heading="Saasverse Pvt Ltd's Mulesoft development expertise can be your secret weapon"
        benefits={benefits}
      />

      

      <HealthSolution
        title="Why Choose Saasverse for "
        highlight="Mulesoft Development?"
        description=""
        image="/images/websiteimages/20.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
       {
  title: 'MuleSoft Certified Experts',
  description:
    'Our certified MuleSoft professionals possess deep expertise in the Anypoint Platform, delivering secure, scalable, and high-performance integrations tailored to your business requirements.',
},
{
  title: 'Custom Solutions, Not Cookie-Cutter',
  description:
    'We take the time to understand your unique business goals and CRM workflows, designing customized MuleSoft integrations that streamline operations and unlock greater efficiency.',
},
{
  title: 'Security & Reliability Always',
  description:
    'Data security is our top priority. We implement robust security practices and build reliable integrations that operate seamlessly around the clock with minimal downtime.',
},
{
  title: 'Proven Results',
  description:
    'Our track record of successful Salesforce and MuleSoft implementations across diverse industries demonstrates our expertise, reliability, and commitment to delivering measurable business outcomes.',
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
