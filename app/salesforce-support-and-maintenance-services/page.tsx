import React from 'react'
import PageBanner from '../components/PageBanner'
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CTASection from '../components/Home/CTASection';
import HealthSolution from '../work-salesforce-health-cloud/HealthSolution';
import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';
import { Metadata } from 'next';
import SalesforceSupportMaintenanceSections from '../components/SalesforceSupportMaintenanceSections';



const faqs = [
  {
    question: "What is included in your Salesforce support and maintenance services?",
    answer:
      "Bug fixing and issue resolution, admin requests, release testing, integration support, performance fixes, data fixes, small changes and scheduled maintenance. Your support model sets out exactly what is included.",
  },
  {
    question: "What is the difference between support and managed services?",
    answer:
      "Support and maintenance covers issues and fixes as they come up, plus regular maintenance. Managed services is a monthly plan where one team runs your whole org: admin, changes, releases, monitoring and planning.",
  },
  {
    question: "Do you provide 24/7 Salesforce support?",
    answer:
      "Yes. Support is available 24/7. Raise a ticket in our ticket portal or send an email at any time, and you get a reply within 24 hours.",
  },
  {
    question: "How quickly do you respond to support requests?",
    answer:
      "Every request gets a reply within 24 hours. How long the fix takes depends on the issue, and we keep you updated until it is closed.",
  },
  {
    question: "How do we report an issue?",
    answer:
      "Raise a ticket in our ticket portal or send an email. Screenshots or error messages help us find the cause faster.",
  },
  {
    question: "Can you support an org that another partner set up?",
    answer:
      "Yes. We review the org first, document what we find and then take on support.",
  },
  {
    question: "Do you test changes before they go live?",
    answer:
      "Yes. We reproduce issues and test fixes in a sandbox before they go to production.",
  },
  {
    question: "How do you handle Salesforce releases?",
    answer:
      "Salesforce releases updates three times a year. We test each release in a sandbox before it reaches your production org, and fix anything that would break.",
  },
  {
    question: "Can you fix Apex code and integrations, not only admin issues?",
    answer:
      "Yes. Our team includes developers who fix Apex, Lightning Web Components and integrations, as well as admins for setup issues.",
  },
  {
    question: "Can you help with customizing our existing Salesforce setup?",
    answer:
      "Yes. We make small changes as part of support. For larger changes, we scope them as a separate piece of work.",
  },
  {
    question: "What does Salesforce support cost?",
    answer:
      "The cost depends on your requirements: the size of your org, the clouds and integrations, the number of issues, and the support model. We send the cost in writing after the discovery call.",
  },
  {
    question: "Is our org data safe with you?",
    answer:
      "We sign an NDA before we access your org. Saasverse is ISO 27001 and Cyber Essentials Plus certified, and you decide which systems and data our team can access.",
  },
];



const benefits = [
  {
    title: "Implementation Monitoring",
    description:
      "Our experienced Salesforce experts will actively keep an eye on Salesforce implementation activities. We will also offer the recommendations required for improvement areas so that your Salesforce solution can provide a seamless experience.",
  },
  {
    title: "Ongoing Salesforce Administration ",
    description:
      "Our Salesforce professionals will assist you in managing and monitoring the system operation 24/7. From security management, system operation free of bugs to demo and training, we will provide an extensive variety of services based on your business needs.",
  },
  {
    title: "Bug Fixing and Issue Resolution ",
    description:
      "We will help you enhance your current infrastructure by determining and fixing the mistakes within the present system. Our specialists will go through the codes and address the performance problems to ensure the faultless running of your Salesforce solution.",
  },
  {
    title: "Salesforce Customization and Enhancements ",
    description:
      "We make every effort to provide best-in-class features and functionalities that provide your Salesforce solutions with a competitive advantage. We are always on our toes with the newest trends and technologies of the world of CRM that will enable you to provide more sophisticated solutions to your customers.",
  },
  {
    title: "Application Maintenance and Release Updates ",
    description:
      "We will give you long-term application maintenance service and support, such as debugging, changing applications functionality, increasing, and others, prolonging the life of your application.",
  },
  {
    title: "Performance Optimization ",
    description:
      "For an effortless customer experience, we provide improvement plans that leverage the full potential of your current Salesforce infrastructure and lead to enhancing the productivity and performance of your workforce.",
  },
  {
    title: "On-Demand Salesforce Support (under Support Engagement Models) ",
    description:
      "We offer round-the-clock Salesforce Support Services to handle everything from minor bugs to system-wide issues. Our certified experts ensure your Salesforce CRM runs seamlessly, enhancing overall performance and user satisfaction.",
  },
  {
    title: "Scheduled Salesforce Maintenance (under Support Engagement Models) ",
    description:
      "Routine maintenance is essential for the longevity of your CRM. Our Salesforce Maintenance Services cover performance tuning, updates, health checks, and proactive error handling to ensure maximum system uptime.",
  },
  {
    title: "Fully Managed Salesforce Support (under Support Engagement Models) ",
    description:
      "Whether you're a startup or an enterprise, our managed Salesforce support and maintenance services give you peace of mind. We offer scalable packages tailored to your business size and goals.",
  },
];

export const metadata: Metadata = {
  title: "Salesforce Support and Maintenance Services | Saasverse",
  description:
    "24/7 Salesforce support and maintenance: bug fixes, issue resolution, release checks and health checks from certified experts. Book a free consultation.",
    alternates: { canonical: 'https://www.saasverse.in/salesforce-support-and-maintenance-services' },
  };
const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/banner002.webp"
                 title="Salesforce Support and Maintenance Services"
                 description="24/7 Salesforce support from certified experts. We fix issues in your org, keep it maintained and check every Salesforce release before it reaches your users."
               />

                <SalesforceServiceReuseable
      heading="Salesforce Support Services We Offer"
      benefits={benefits}
    />

  <SalesforceSupportMaintenanceSections/>

     <HealthSolution
            title="Why Choose Saasverse for"
            highlight="Salesforce Support"
            description=""
            image="/images/websiteimages/1.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
              {
                title: 'Certified Salesforce Experts',
                description:
                  'Our team holds extensive certifications and experience across Salesforce products.',
              },
              {
                title: '24/7 Support Coverage ',
                description:
                  'Global support to address your needs and issues you are facing anytime, anywhere.',
              },
              {
                title: 'Flexible Support Plans ',
                description:
                  'Flexible service models suited to your business as per unique operational needs.',
              },
              {
                title: 'Performance-Focused Approach ',
                description:
                  'Regular system audits and optimizations to keep your CRM at peak performance.',
              },
            ]}
          />

          <CertificateSlider/>

          <OurPartners/>

           <FaqReuseable title="Salesforce Support FAQs " faqs={faqs} />
              <CTASection/>
           <ContactForm/>
    </>
  )
}

export default page