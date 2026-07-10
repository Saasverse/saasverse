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
    title: "Market Research:",
    description:
      "We conduct thorough market research to identify opportunities and validate your app concept.",
  },
  {
    title: "Strategic Planning:",
    description:
      "Our team works with you to develop a strategic plan, outlining the app's features, target audience, and go-to-market strategy.",
  },
  {
    title: "Security Review Preparation:",
    description:
      "We ensure your application meets Salesforce's security standards and guide you through the security review process.",
  },
  {
    title: "Packaging and Deployment:",
    description:
      "Our experts handle the packaging and deployment of your app on the AppExchange, ensuring a smooth and hassle-free launch.",
  },
  {
    title: "Ongoing Maintenance:",
    description:
      "We provide continuous support and maintenance to ensure your application remains up-to-date and performs optimally.",
  },
  {
    title: "User Training:",
    description:
      "We offer comprehensive training to help your team and customers get the most out of your new application.",
  },
  {
    title: "Tailored Solutions:",
    description:
      "We design and develop custom applications that meet your unique business requirements and stand out in the Salesforce ecosystem.",
  },
  {
    title: "Apex and Visualforce Development:",
    description:
      "Our developers use Salesforce's powerful programming languages to create robust and scalable solutions.",
  },
  {
    title: "Lightning Components:",
    description:
      "We build responsive Lightning Components to enhance user experience and functionality.",
  },
];
export const metadata: Metadata = {
  title: " Salesforce ISV Development Company | Custom App Solutions Experts",
  description:
    "Looking for a trusted Salesforce ISV development partner? Saasverse builds custom Salesforce apps, offering expert services in the USA, UK, and Australia.",
};
const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/banner002.webp"
                 title="Salesforce ISV Development Company"
                 description="At Saasverse Pvt Ltd, we specialize in Salesforce ISV (Independent Software Vendor) Development, empowering businesses to create and launch their own Salesforce applications."
               />

                <SalesforceServiceReuseable
      heading="Our Salesforce ISV Development Services"
      benefits={benefits}
    />

    

     <HealthSolution
            title="Why Choose "
            highlight="Salesforce ISV Development ?"
            description=""
            image="/images/websiteimages/6.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
              {
                title: 'Expand Your Market Reach:',
                description:
                  'Tap into the vast Salesforce ecosystem and reach a global audience of potential customers.',
              },
              {
                title: 'Enhance Business Efficiency:',
                description:
                  'Create custom solutions tailored to your specific business needs, improving operational efficiency and productivity.',
              },
              {
                title: 'Generate New Revenue Streams:',
                description:
                  'Monetize your applications by offering them on the Salesforce AppExchange, creating new revenue opportunities.',
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