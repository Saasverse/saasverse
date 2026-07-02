import React from 'react'
import PageBanner from '../components/PageBanner'
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CTASection from '../components/Home/CTASection';
import HealthSolution from '../work-salesforce-health-cloud/HealthSolution';
import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';


const faqs = [
  {
    question: 'What is included in your Salesforce Support and Maintenance Services?',
    answer:
      'Saasverse Salesforce support and maintenance services include implementation monitoring, continuous administration, bug fixing, customization, application maintenance, and performance optimization under the guidance of experienced developers in particular industries. We also provide round-the-clock support, regular updates, and proactive performance management.',
  },
  {
    question: 'Do you provide 24/7 Salesforce support?',
    answer:
      'Yes, the Saasverse team offers 24/7 Salesforce support to ensure uninterrupted operations during your peak hours. Our team is always available to resolve technical issues, monitor system performance, and provide expert assistance, which doesn’t stop the flow of user.',
  },
  {
    question: 'Can you help with customizing our existing Salesforce setup?',
    answer:
      'Absolutely. The team working at Saasverse provides comprehensive Salesforce customization services customized to your business needs, which ensure optimal functionality, a better user experience, and alignment with the latest CRM trends.',
  },
  {
    question: 'What types of businesses do you work with?',
    answer:
      'The certified Salesforce developers at Saasverse work with almost all types of businesses, such as startups, mid-sized companies, and enterprises across industries. Our service plans are scalable and customized to fit your operational and technical requirements',
  },
  {
    question: 'How does your managed support model work?',
    answer:
      'The managed Salesforce support model at Saasverse includes continuous system monitoring, proactive issue resolution, periodic audits, and performance enhancements — all under flexible service plans customized to your goals.',
  },
 
];

const benefits = [
  {
    title: "Implementation Monitoring",
    description:
      "Our experienced Salesforce experts will actively keep an eye on Salesforce implementation activities. We will also offer the recommendations required for improvement areas so that your Salesforce solution can provide a seamless experience.",
  },
  {
    title: "Continuous Administration",
    description:
      "Our Salesforce professionals will assist you in managing and monitoring the system operation 24/7. From security management, system operation free of bugs to demo and training, we will provide an extensive variety of services based on your business needs.",
  },
  {
    title: "Bug fixing and resolution",
    description:
      "We will help you enhance your current infrastructure by determining and fixing the mistakes within the present system. Our specialists will go through the codes and address the performance problems to ensure the faultless running of your Salesforce solution.",
  },
  {
    title: "Salesforce Customization",
    description:
      "We make every effort to provide best-in-class features and functionalities that provide your Salesforce solutions with a competitive advantage. We are always on our toes with the newest trends and technologies of the world of CRM that will enable you to provide more sophisticated solutions to your customers.",
  },
  {
    title: "Application Maintenance Support",
    description:
      "We will give you long-term application maintenance service and support, such as debugging, changing applications functionality, increasing, and others, prolonging the life of your application.",
  },
  {
    title: "Performance Support",
    description:
      "For an effortless customer experience, we provide improvement plans that leverage the full potential of your current Salesforce infrastructure and lead to enhancing the productivity and performance of your workforce.",
  },
  {
    title: "Salesforce Support Services",
    description:
      "We offer round-the-clock Salesforce Support Services to handle everything from minor bugs to system-wide issues. Our certified experts ensure your Salesforce CRM runs seamlessly, enhancing overall performance and user satisfaction.",
  },
  {
    title: "Salesforce Maintenance Services",
    description:
      "Routine maintenance is essential for the longevity of your CRM. Our Salesforce Maintenance Services cover performance tuning, updates, health checks, and proactive error handling to ensure maximum system uptime.",
  },
  {
    title: "Managed Salesforce Support and Maintenance Services",
    description:
      "Whether you're a startup or an enterprise, our managed Salesforce support and maintenance services give you peace of mind. We offer scalable packages tailored to your business size and goals.",
  },
];


const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/banner002.webp"
                 title="Salesforce Support and Maintenance Services"
                 description="Trusted Salesforce Solutions for Continuous Business Growth "
               />

                <SalesforceServiceReuseable
      heading="Our Comprehensive Salesforce Services"
      benefits={benefits}
    />

    <CTASection/>

     <HealthSolution
            title="Why Choose Saasverse for  "
            highlight="Salesforce Support and Maintenance? "
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
                title: '24/7 Support',
                description:
                  'Global support to address your needs and issues you are facing anytime, anywhere.',
              },
              {
                title: 'Tailored Plans',
                description:
                  'Flexible service models suited to your business as per unique operational needs.',
              },
              {
                title: 'Performance-Focused',
                description:
                  'Regular system audits and optimizations to keep your CRM at peak performance.',
              },
            ]}
          />

          <CertificateSlider/>

          <OurPartners/>

           <FaqReuseable title="FAQ" faqs={faqs} />

           <ContactForm/>
    </>
  )
}

export default page