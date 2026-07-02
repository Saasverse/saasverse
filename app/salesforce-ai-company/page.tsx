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
    title: 'Deep AI Expertise',
    description:
      'Our team brings extensive experience across a wide range of AI technologies, including machine learning, natural language processing, computer vision, and deep learning.',
  },
  {
    title: 'Tailored AI Solutions',
    description:
      'We take the time to understand your business objectives and challenges, designing custom AI solutions that deliver measurable value and support long-term growth.',
  },
  {
    title: 'Data-Driven Approach',
    description:
      'By leveraging your existing data, we develop and optimize AI models that generate accurate insights, improve decision-making, and drive better business outcomes.',
  },
  {
    title: 'Seamless Integration',
    description:
      'We integrate AI capabilities with your existing systems and workflows, ensuring smooth adoption, operational efficiency, and minimal disruption to your business.',
  },
];
const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/expbanner.webp"
        title="Salesforce Einstein AI Solutions"
        description="In today's competitive landscape, leveraging artificial intelligence (AI) is no longer a luxury, it's a necessity."
      />

      <SalesforceServiceReuseable
        heading="Saasverse Pvt Ltd is your trusted partner on the AI journey"
        benefits={benefits}
      />

      <CTASection />

      <HealthSolution
        title="Why Choose Saasverse"
        highlight="for Your AI Needs?"
        description=""
        image="/images/websiteimages/20.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Proven Track Record of Success',
            description:
              'We have successfully helped businesses across multiple industries leverage AI technologies to improve efficiency, drive innovation, and achieve measurable business outcomes.',
          },
          {
            title: 'Focus on Transparency & Explainability',
            description:
              'We prioritize building AI solutions that are transparent, understandable, and trustworthy, helping stakeholders gain confidence in AI-driven decisions and recommendations.',
          },
          {
            title: 'Ongoing Support & Optimization',
            description:
              'Our partnership extends beyond deployment, with continuous monitoring, maintenance, and optimization to ensure your AI solutions remain effective and deliver long-term value.',
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
