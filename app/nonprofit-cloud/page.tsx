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
    title: 'Strategic Planning',
    description:
      'Develop a clear and actionable roadmap for long-term success through strategic planning, SWOT analysis, goal setting, and growth-focused business strategies.',
  },
  {
    title: 'Fundraising Expertise',
    description:
      'Maximize fundraising efforts by identifying funding opportunities, creating compelling grant proposals, and developing effective campaigns that support organizational growth.',
  },
  {
    title: 'Program Optimization',
    description:
      'Evaluate program performance, identify areas for improvement, and implement strategies that enhance effectiveness, efficiency, and measurable impact.',
  },
  {
    title: 'Capacity Building',
    description:
      'Strengthen your organization with training programs, operational improvements, and process enhancements that empower teams and support sustainable growth.',
  },
  {
    title: 'Board Development',
    description:
      'Enhance governance and leadership through board training, strategic guidance, and best-practice frameworks that drive organizational success.',
  },
  {
    title: 'Technology Integration',
    description:
      'Leverage modern technology solutions to improve efficiency, expand reach, streamline operations, and maximize the impact of your organization’s initiatives.',
  },
];

export const metadata: Metadata = {
  title: "Salesforce Nonprofit Cloud Implementation | SaaSverse",
  description:
    "Certified Salesforce Nonprofit Cloud consultants helping NGOs with fundraising, program management & donor engagement. India, US & UAE. Free consultation.",
};


const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/expbanner.webp"
        title="Salesforce Nonprofit Cloud Consultant Services"
        description="The nonprofit sector is a driving force for positive change. But navigating the complexities of fundraising, strategy, and impact measurement can be challenging."
      />

      <SalesforceServiceReuseable
        heading="Here's how a Nonprofit Consultant can amplify your impact"
        benefits={benefits}
      />

      

      <HealthSolution
        title="Benefits of Working with a"
        highlight="Nonprofit Consultant"
        description=""
        image="/images/websiteimages/20.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Increased Efficiency',
            description:
              'Streamline operations, optimize workflows, and free up valuable resources, allowing your organization to focus more effectively on achieving its mission and objectives.',
          },
          {
            title: 'Enhanced Fundraising',
            description:
              'Strengthen fundraising efforts by identifying new opportunities, improving donor engagement, and securing the resources needed to expand your impact.',
          },
          {
            title: 'Measurable Impact',
            description:
              'Track and demonstrate the effectiveness of your programs with clear metrics and reporting that showcase results to donors, volunteers, and stakeholders.',
          },
          {
            title: 'Sustainable Growth',
            description:
              'Build a resilient and scalable organization with the strategies, processes, and resources required to support long-term success and continued growth.',
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
