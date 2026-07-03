import React from 'react';
import PageBanner from '../components/PageBanner';
import HealthClient from '../work-salesforce-health-cloud/HealthClient';
import HealthSolution from '../work-salesforce-health-cloud/HealthSolution';

import FaqReuseable from '../components/FaqReuseable';

import HealthResult from '../work-salesforce-health-cloud/HealthResult';
import WhyChooseUs from '../about/WhyChooseUs';
import { Metadata } from 'next';

const faqs = [
  {
    question: 'What is Kentico and why should I use it for my business?',
    answer:
      'Kentico is a powerful digital experience platform that integrates content management, digital marketing, and e-commerce capabilities. It helps deliver personalized experiences, streamline content management, and boost digital marketing efforts.',
  },
  {
    question: 'How can Saasverse Pvt Ltd assist with Kentico implementation?',
    answer:
      'Saasverse provides end-to-end Kentico implementation services, from consultation and strategy development to setup, configuration, and data migration, ensuring a smooth and successful deployment.',
  },
  {
    question: 'Can Kentico be customized to fit my specific business needs?',
    answer:
      'Yes, Kentico is highly customizable. Saasverse can develop tailored solutions, custom modules, and integrate Kentico with other systems to meet your unique business requirements.',
  },
  {
    question: 'What types of integrations can be done with Kentico?',
    answer:
      'Kentico can be integrated with various third-party solutions such as CRMs, e-commerce platforms, and marketing automation tools. We also develop custom APIs for seamless data exchange.',
  },
];

export const metadata: Metadata = {
  title: "Kentico Development & Integration | Scalable CMS Solutions",
  description:
    "Looking for seamless Kentico development and integration? We help you build a secure, scalable CMS that enhances your digital experience and business growth",
};

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/kentico.webp"
        title="Unlock the Power of Kentico with Saasverse Pvt Ltd"
        description=""
      />

      <HealthClient
        title="Unlock the Power of"
        highlight="Kentico with Saasverse Pvt Ltd"
        paragraphs={[
          'At Saasverse Pvt Ltd, we bring you top-tier Kentico Development Services to revolutionize your digital presence. As a leading provider of Kentico solutions, we specialize in creating robust, scalable, and personalized digital experiences that drive business growth.',
          'Our team of certified Kentico experts is dedicated to delivering tailored solutions that meet your unique business needs.',
        ]}
      />

      <HealthSolution
        title="Why Choose"
        highlight="Kentico? "
        description=""
        image="/images/websiteimages/whyaws.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Deliver Personalized Experiences',
            description:
              'Engage your audience with targeted content and personalized user journeys.',
          },
          {
            title: 'Streamline Content Management',
            description:
              'Efficiently manage and publish content across multiple channels.',
          },
          {
            title: 'Boost Digital Marketing Efforts',
            description:
              'Utilize advanced marketing tools to drive customer engagement and conversions.',
          },
          {
            title: 'Scale Seamlessly',
            description:
              'Easily scale your digital solutions to meet evolving business demands.',
          },
        ]}
      />

      <HealthResult
        title="Our Kentico  Development Services"
        subtitle=""
        results={[
          {
            number: '01',
            title: 'Kentico  Implementation',
            description:
              'Understand your business goals and develop a comprehensive implementation strategy.',
          },
          {
            number: '02',
            title: 'Custom Development',
            description:
              'Develop custom modules and functionalities to meet your specific business needs.',
          },
          {
            number: '03',
            title: 'Kentico Optimization',
            description:
              'Optimize your Kentico environment for speed and efficiency. Implement SEO best practices to improve your website’s search engine rankings.',
          },
          {
            number: '04',
            title: 'Ongoing Support and Maintenance',
            description:
              'Provide continuous support to address any issues and ensure optimal performance.',
          },
          {
            number: '05',
            title: 'Kentico Migration',
            description:
              'Manage the migration from other CMS platforms to Kentico, ensuring a smooth transition and data continuity.',
          },
        ]}
      />

      <WhyChooseUs />

      <FaqReuseable title="FAQ" faqs={faqs} />
    </>
  );
};

export default page;
