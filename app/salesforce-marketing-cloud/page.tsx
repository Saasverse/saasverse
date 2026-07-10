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
  title: 'Craft Laser-Targeted Campaigns',
  description:
    'Design personalized journeys that resonate with each customer across every touchpoint, including email, social media, mobile, and more.',
},
{
  title: 'Turn Prospects into Loyal Fans',
  description:
    'Go beyond basic marketing with data-driven insights that foster deeper customer engagement, satisfaction, and long-term loyalty.',
},
{
  title: 'See Real Results, Fast',
  description:
    'Track key performance metrics and optimize campaigns in real-time to maximize marketing effectiveness and return on investment (ROI).',
},
];

export const metadata: Metadata = {
  title: "Best Salesforce Marketing Cloud Services - Saasverse",
  description:
    "Saasverse provides expert Salesforce Marketing Cloud services to help businesses automate campaigns, personalize customer journeys, and boost engagement.",
};

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/expbanner.webp"
        title="Salesforce Marketing Cloud Consulting"
        description="Stop Wasting Marketing Efforts. Ignite Growth with Saasverse Pvt Ltd's Marketing Cloud Expertise."
      />

      <SalesforceServiceReuseable
        heading="Saasverse Pvt Ltd unlocks the true potential of Marketing Cloud, empowering you to"
        benefits={benefits}
      />

     

      <HealthSolution
        title="Why Partner with "
        highlight="Saasverse?"
        description=""
        image="/images/websiteimages/21.jpg"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
         {
  title: "We're Marketing Cloud Wizards",
  description:
    "Our certified experts have a proven track record of success, ensuring you leverage Salesforce Marketing Cloud to its fullest potential.",
},
{
  title: 'Data Is Our Superpower',
  description:
    "We don't just send emails; we use data-driven insights to understand your audience and create hyper-personalized experiences that drive conversions.",
},
{
  title: 'Your Partner Every Step of the Way',
  description:
    'From developing the right strategy to ongoing optimization, we provide continuous guidance and support to help your marketing efforts succeed.',
},
{
  title: 'Proven Results',
  description:
    'Our track record of successful Salesforce implementations and satisfied clients across various industries demonstrates our expertise, reliability, and commitment to delivering measurable results.',
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
