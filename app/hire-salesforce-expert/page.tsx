import React from 'react'
import PageBanner from '../components/PageBanner'
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
    question: 'What is the typical engagement process with Saasverse Consultants?',
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
    title: "Salesforce Expertise & Testing Prowess:",
    description:
      "Our QAs are Salesforce Certified professionals with a keen eye for detail and a mastery of testing methodologies. They ensure your Salesforce solution functions flawlessly and meets all your requirements.",
  },
  {
    title: "Functional & Technical Testing Masters:",
    description:
      "They excel at conducting both functional testing (verifying features work as intended) and technical testing (ensuring performance, security, and compatibility).",
  },
  {
    title: "Automation Champions:",
    description:
      "Our QAs leverage automation tools to streamline the testing process, improve efficiency, and minimize human error.",
  },
  {
    title: "Risk Management & Mitigation Focus:",
    description:
      "Our QAs proactively identify potential risks associated with functionality, security, or performance and recommend effective mitigation strategies.",
  },
  {
    title: "Collaboration Champions:",
    description:
      "They collaborate effectively with developers, business analysts, and other stakeholders to ensure a smooth and successful project outcome.",
  },
];

const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/hirebanner.webp"
                 title="Hire Salesforce Quality Analyst"
                 description="Ensure Flawless Execution: Hire Top-Tier Salesforce Quality Analysts at Saasverse Pvt Ltd"
               />

                <SalesforceServiceReuseable
      heading="Why Hire a Salesforce Quality Analyst from Saasverse?"
      benefits={benefits}
    />

    <CTASection/>

     <HealthSolution
            title="Benefits of Hiring a Saasverse"
            highlight="Salesforce Quality Analyst"
            description=""
            image="/images/websiteimages/4.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
               {
    title: 'Reduced Costs',
    description:
      'Early detection and correction of defects minimizes rework and reduces the cost of fixing issues later in the development lifecycle.',
  },
  {
    title: 'Enhanced User Experience',
    description:
      'Rigorous testing ensures a bug-free and user-friendly Salesforce environment, leading to higher user satisfaction and adoption.',
  },
  {
    title: 'Improved System Performance',
    description:
      'Our QAs identify and address performance bottlenecks, ensuring your Salesforce platform functions optimally.',
  },
  {
    title: 'Peace of Mind',
    description:
      'With a dedicated QA professional on board, you gain peace of mind knowing your Salesforce project is in expert hands.',
  },
             
            ]}
          />

<WhyChooseUs/>
          <CertificateSlider/>

          <OurPartners/>

           <FaqReuseable title="FAQ" faqs={faqs} />

           <ContactForm/>
    </>
  )
}

export default page