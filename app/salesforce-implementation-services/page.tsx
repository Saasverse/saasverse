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
    title: "Understanding Your Needs (Consulting):",
    description:
      "We discuss your business objectives, such as increasing sales, shortening sales cycles, or gaining a complete view of your customers, and create a Salesforce strategy aligned with your goals.",
  },
  {
    title: "Setting Up and Customizing Salesforce:",
    description:
      "We configure Salesforce using built-in tools and implement custom development when needed to ensure the platform fits your unique business requirements.",
  },
  {
    title: "Configuration:",
    description:
      "Leverage Salesforce's native capabilities to efficiently set up processes, workflows, and features without the need for custom code.",
  },
  {
    title: "Customization:",
    description:
      "Develop tailored solutions and advanced functionality through custom coding to meet specific business needs and enhance user experience.",
  },
  {
    title: "Connecting with Other Systems (Integration):",
    description:
      "Integrate Salesforce with ERP systems, eCommerce platforms, and other business applications to create a unified and seamless data ecosystem.",
  },
  {
    title: "Transferring Your Data (Data Migration):",
    description:
      "Securely migrate data from legacy systems to Salesforce while maintaining data integrity, accuracy, and usability.",
  },
  {
    title: "Data Cleansing & Organization:",
    description:
      "Clean, organize, and optimize your data to ensure high-quality records and reliable reporting from day one.",
  },
  {
    title: "Teaching Your Team:",
    description:
      "Provide comprehensive training and guidance to help users confidently adopt Salesforce and maximize productivity.",
  },
  {
    title: "Testing and Going Live (Launch):",
    description:
      "Conduct thorough testing, gather stakeholder feedback, and ensure everything works perfectly before launching your Salesforce solution.",
  },
 
];

const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/banner002.webp"
                 title="Salesforce Implementation Services"
                 description="We are a dedicated team at Saasverse Pvt Ltd. to help you with the implementation process."
               />

                <SalesforceServiceReuseable
      heading="Our Salesforce implementation covers the following:"
      benefits={benefits}
    />

    <CTASection/>

     <HealthSolution
            title="Why Choose "
            highlight="Salesforce Implementation ?"
            description=""
            image="/images/websiteimages/23.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
              {
                title: 'End-to-End Expertise',
                description:
                  'Saasverse provides salesforce implementation consultant who complete Salesforce implementation services—from consulting and planning to customization, integration, data migration, and post-launch support. You get a one-stop solution to your business needs.',
              },
              {
                title: 'Business-Centric Approach',
                description:
                  'We don’t just implement technology—we understand your business goals first. Whether you are aiming to boost sales, improve customer relationships, or streamline operations, we align Salesforce consulting and implementation with your objectives.',
              },
              {
                title: 'Tailored Solutions, Not Templates',
                description:
                  'We customize Salesforce to match your specific workflows, not the other way around. Our team uses both point-and-click tools and advanced coding (Apex) to deliver a solution that fits perfectly with your goals.',
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