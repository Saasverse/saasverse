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
    title: 'Craft Personalized Journeys',
    description:
      'Create personalized digital experiences that adapt to each visitor’s needs and interests, delivering relevant content, recommendations, and targeted interactions across every touchpoint.',
  },
  {
    title: 'Boost Engagement & Loyalty',
    description:
      'Use data-driven insights to understand your audience and personalize every interaction with tailored content, offers, and experiences that increase engagement and build lasting customer loyalty.',
  },
  {
    title: 'Empower Your Brand Advocates',
    description:
      'Build connected online communities where customers can engage, share knowledge, and support each other, strengthening relationships and creating powerful brand advocates.',
  },
  {
    title: 'Drive Measurable Results',
    description:
      'Focus on meaningful business outcomes with Experience Cloud solutions that help improve customer lifetime value, reduce churn, and deliver measurable return on investment (ROI).',
  },
];

export const metadata: Metadata = {
  title: "Salesforce Experience Cloud Services - Saasverse",
  description:
    "Saasverse offers Salesforce Experience Cloud services to build engaging digital experiences, enhance customer interactions, and improve business collaboration.",
};


const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/expbanner.webp"
        title="Salesforce Experience Cloud Services"
        description="Craft Unforgettable Experiences with Saasverse Pvt Ltd's Experience Cloud Expertise."
      />

      <SalesforceServiceReuseable
        heading="Here's how Saasverse Pvt Ltd unlocks the full potential of Experience Cloud for you:"
        benefits={benefits}
      />

    

      <HealthSolution
        title="Why Partner with"
        highlight="Saasverse?"
        description=""
        image="/images/websiteimages/20.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Experience Cloud Architects, Not Just Builders',
            description:
              'Our experienced team specializes in Experience Cloud, creating strategic digital experiences that align with your business goals and deliver measurable results beyond just website development.',
          },
          {
            title: 'Data Champions',
            description:
              'We leverage customer data and insights to create personalized interactions, ensuring your content and experiences connect with visitors and drive higher engagement and conversions.',
          },
          {
            title: 'Seamless Integrations',
            description:
              'We integrate Experience Cloud with your CRM, marketing automation, and essential business tools to create a unified customer experience, eliminate data silos, and streamline operations.',
          },
          {
            title: 'Proven Results',
            description:
              'Our successful Salesforce implementations and satisfied clients across multiple industries demonstrate our expertise, reliability, and commitment to delivering impactful solutions.',
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
