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
    title: 'Effortless App Creation',
    description:
      'Build engaging mobile applications quickly using pre-built templates and intuitive drag-and-drop tools, ensuring a seamless experience that aligns with your brand identity.',
  },
  {
    title: 'Seamless Deployment',
    description:
      'Distribute your mobile app efficiently to your target audience with streamlined deployment processes, reducing delays and accelerating time to market.',
  },
  {
    title: 'Enhanced Brand Control',
    description:
      'Maintain full control over your app’s design, functionality, and user experience to deliver a consistent brand presence across every mobile interaction.',
  },
  {
    title: 'Real-Time Updates & Analytics',
    description:
      'Deploy updates quickly and monitor user engagement through built-in analytics, enabling continuous optimization and improved app performance.',
  },
];

export const metadata: Metadata = {
  title: "Salesforce Mobile Publisher Services | SaaSverse",
  description:
    "Certified Salesforce Mobile Publisher consultants helping businesses create, customize, and publish branded mobile apps for better user engagement. India, US & UAE. Free consultation.",
};


const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/expbanner.webp"
        title="Salesforce Mobile Publisher Services"
        description="Empower Mobile Engagement with Saasverse Pvt Ltd's Mobile Publisher Expertise"
      />

      <SalesforceServiceReuseable
        heading="Here's how Mobile Publisher unlocks mobile engagement for your business"
        benefits={benefits}
      />

      

      <HealthSolution
        title="Why Choose Saasverse for "
        highlight="Mobile Publisher Expertise?"
        description=""
        image="/images/websiteimages/20.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Mobile Publisher Certified Professionals',
            description:
              'Our experienced Mobile Publisher specialists guide you through every stage of app creation, deployment, and optimization, ensuring a smooth and successful mobile experience.',
          },
          {
            title: 'Data-Driven Optimization',
            description:
              'We utilize app analytics and user behavior insights to continuously improve performance, enhance engagement, and optimize the overall user experience.',
          },
          {
            title: 'Ongoing Support & Maintenance',
            description:
              'Beyond launch, we provide continuous support, updates, and maintenance services to keep your mobile app secure, reliable, and aligned with evolving business needs.',
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
        <CTASection />
      <ContactForm />
    </>
  );
};

export default page;
