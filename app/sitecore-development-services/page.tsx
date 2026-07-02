import React from 'react';
import PageBanner from '../components/PageBanner';
import HealthClient from '../work-salesforce-health-cloud/HealthClient';
import HealthSolution from '../work-salesforce-health-cloud/HealthSolution';

import FaqReuseable from '../components/FaqReuseable';

import HealthResult from '../work-salesforce-health-cloud/HealthResult';
import WhyChooseUs from '../about/WhyChooseUs';

const faqs = [
  {
    question: 'What is Sitecore and why should I use it for my business?',
    answer:
      'Sitecore is a powerful digital experience platform that enables businesses to deliver personalized content and seamless customer journeys. It helps improve engagement, scalability, and provides data-driven insights.',
  },
  {
    question: 'How can Saasverse Pvt Ltd help with Sitecore implementation?',
    answer:
      'Saasverse provides end-to-end Sitecore implementation services, from strategy and planning to installation, configuration, and data migration, ensuring a smooth and successful deployment.',
  },
  {
    question: 'Can Sitecore be customized to fit my specific business needs?',
    answer:
      'Yes, Sitecore is highly customizable. Saasverse can tailor existing modules or develop new ones to meet your unique business requirements.',
  },
  {
    question: 'What types of integrations can be done with Sitecore?',
    answer:
      'Sitecore can be integrated with various third-party solutions such as CRMs, e-commerce platforms, and marketing automation tools. We also develop custom APIs for seamless data exchange.',
  },
  {
    question:
      'What kind of support can I expect after Sitecore implementation?',
    answer:
      'Saasverse offers ongoing support and maintenance services, including system monitoring, updates, troubleshooting, and user training to ensure your Sitecore environment runs smoothly.',
  },
  {
    question: 'How does Saasverse handle Sitecore migrations?',
    answer:
      'We manage both version upgrades and migrations from other CMS platforms to Sitecore, ensuring data integrity and a seamless transition.',
  },
];

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/sitecoresaasverse.webp"
        title="
Sitecore Development Services"
        description="Elevate Your Digital Experience with Saasverse Pvt Ltd’s Sitecore Development Services"
      />

      <HealthClient
        title="Elevate Your Digital Experience with Saasverse Pvt Ltd’s"
        highlight="Sitecore Development Services"
        paragraphs={[
          'At Saasverse Pvt Ltd, we specialize in delivering top-tier Sitecore Development Services that empower your business to create personalized, scalable, and impactful digital experiences. Our team of Sitecore-certified experts is dedicated to providing tailored solutions that meet your unique business requirements, helping you leverage the full potential of the Sitecore Experience Platform.',
          'From implementation and customization to integration and support, we have the expertise to drive your success in the digital landscape.',
        ]}
      />

      <HealthSolution
        title="Why Opt Saasverse for"
        highlight="Sitecore "
        description="UHS implemented Salesforce Healthcare Cloud to centralize patient information, improve care coordination, and streamline healthcare operations across multiple facilities."
        image="/images/websiteimages/whyaws.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Personalized Experiences',
            description:
              'Deliver targeted and personalized content to your audience for increased engagement and conversions.',
          },
          {
            title: 'Scalability',
            description:
              'Scale your digital solutions effortlessly to meet growing business demands.',
          },
          {
            title: 'Data-Driven Insights',
            description:
              'Gain valuable insights into customer behavior with advanced analytics and reporting tools.',
          },
          {
            title: 'Seamless Integration',
            description:
              'Integrate Sitecore with other systems and platforms for a unified digital ecosystem.',
          },
        ]}
      />

      <HealthResult
        title="Our Sitecore Development Services"
        subtitle=""
        results={[
          {
            number: '01',
            title: 'Sitecore Implementation',
            description:
              'Develop a comprehensive implementation strategy tailored to your business goals and requirements.',
          },
          {
            number: '02',
            title: 'Sitecore Customization',
            description:
              'Tailor the Sitecore platform to meet your specific business needs and user experience requirements.',
          },
          {
            number: '03',
            title: 'Sitecore Integration',
            description:
              'Integrate Sitecore with other software solutions, including CRMs, e-commerce platforms, and marketing automation tools.',
          },
          {
            number: '04',
            title: 'Sitecore Support and Maintenance',
            description:
              'Provide continuous support to address any issues, perform updates, and ensure optimal performance.',
          },
          {
            number: '05',
            title: 'Sitecore Migration',
            description:
              'Upgrade your existing Sitecore installation to the latest version to take advantage of new features and improvements.',
          },
        ]}
      />

      <WhyChooseUs />

      <FaqReuseable title="FAQ" faqs={faqs} />
    </>
  );
};

export default page;
