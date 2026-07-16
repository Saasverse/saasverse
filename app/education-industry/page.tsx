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
    title: 'Seed the Journey:',
    description:
      'Streamline admissions processes, personalize student onboarding, and ensure a smooth transition from prospect to learner.',
  },
  {
    title: 'Nurture Potential:',
    description:
      "Gain a holistic view of each student's progress, identify learning gaps, and provide targeted support for personalized growth.",
  },
  {
    title: 'Cultivate Engagement:',
    description:
      'Foster stronger relationships with students, parents, and alumni through personalized communication and engaging communities.',
  },
  {
    title: 'Fuel Innovation:',
    description:
      'Automate administrative tasks, streamline operations, and unlock resources to focus on what matters most – student success.',
  },
  {
    title: 'Empower Faculty & Staff:',
    description:
      'Equip educators with real-time student insights and collaboration tools to cultivate a thriving learning environment.',
  },
  {
    title: 'Grow Partnerships:',
    description:
      'Strengthen connections with alumni and donors, fostering engagement and driving fundraising efforts.',
  },
];

export const metadata: Metadata = {
  title: "Salesforce Education Cloud Solutions | Saasverse",
  description:
    "Saasverse implements Salesforce Education Cloud for schools and universities - admissions, student success, SIS integration. Book a consult.",
};

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/industrybanner.webp"
        title="Shaping Tomorrow's Minds"
        description="Cultivating Growth with Salesforce for Education"
      />

      <SalesforceServiceReuseable
        heading="Why Salesforce for Education?"
        benefits={benefits}
      />

    

      <HealthSolution
        title="Saasverse: Your Education"
        highlight="Ecosystem Architect"
        description="Healthcare"
        image="/images/websiteimages/20.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Tailored Education Cloud Solutions',
            description:
              'Customize Salesforce Education Cloud to create a nurturing and personalized learning environment.',
          },
          {
            title: 'Seamless System Integration',
            description:
              'Connect with existing SIS, LMS, and other platforms for a unified and efficient student data ecosystem.',
          },
          {
            title: 'Support for Unique Education Challenges',
            description:
              'Build custom solutions for managing scholarships, promoting career development, and more.',
          },
          {
            title: 'Training and Continuous Support',
            description:
              'Ensure your institution is supported with expert guidance, training, and ongoing assistance to maximize success.',
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
