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
    title: "System Health Checks:",
    description:
      "Conduct regular health checks to ensure your Salesforce instance is performing optimally.",
  },
  {
    title: "Security Updates:",
    description:
      "Implement the latest security patches and updates to protect your data and maintain compliance.",
  },
  {
    title: "Feature Enhancements:",
    description:
      "Regularly review and implement new Salesforce features and enhancements to keep your system up-to-date.",
  },
  {
    title: "Proactive Monitoring:",
    description:
      "Our dedicated teams continuously monitor your Salesforce environment to identify and resolve issues before they impact your operations.",
  },
  {
    title: "Responsive Support:",
    description:
      "We provide timely and efficient support to address any questions or issues, ensuring minimal downtime and disruption.",
  },
  {
    title: "Tailored Customizations:",
    description:
      "Adjust and customize Salesforce configurations to better align with your evolving business processes.",
  },
  {
    title: "Performance Optimization:",
    description:
      "Optimize workflows, reports, and dashboards to improve efficiency and user experience.",
  },
  {
    title: "Data Quality Management:",
    description:
      "Ensure data accuracy, consistency, and integrity across your Salesforce environment.",
  },
  {
    title: "Integration Maintenance:",
    description:
      "Maintain and optimize integrations with other systems to ensure seamless data flow and operational efficiency.",
  },
];

export const metadata: Metadata = {
  title: "Salesforce Managed Services | Saasverse",
  description:
    "Salesforce managed services for US, UAE & India orgs - proactive monitoring, health checks & security updates. Certified team. Get a free audit.",
};
const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/banner002.webp"
                 title="Salesforce Managed Services"
                 description="At Saasverse Pvt Ltd, we provide comprehensive Salesforce Managed Services, ensuring that your Salesforce environment runs smoothly, and efficiently, and continuously supports your business goals."
               />

                <SalesforceServiceReuseable
      heading="Our Salesforce Managed Services"
      benefits={benefits}
    />

   

     <HealthSolution
            title="Why Choose  "
            highlight="Salesforce Managed Services "
            description=""
            image="/images/websiteimages/3.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
              {
                title: 'Experienced Professionals',
                description:
                  'Our team of certified Salesforce experts has extensive experience in managing and optimizing Salesforce environments.',
              },
              {
                title: 'Advanced Coding',
                description:
                  'Our team leverages Salesforce’s Apex and Visualforce to build robust and scalable applications.',
              },
              {
                title: 'Lightning Components',
                description:
                  'We create dynamic and responsive Lightning Components to enhance the user experience and functionality.',
              },
             
            ]}
          />

<WhyChooseUs/>
          <CertificateSlider/>

          <OurPartners/>

           <FaqReuseable title="FAQ" faqs={faqs} />
             <CTASection/>
           <ContactForm/>
    </>
  )
}

export default page