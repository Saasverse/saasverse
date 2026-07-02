import React from 'react';
import PageBanner from '../components/PageBanner';
import HealthClient from '../work-salesforce-health-cloud/HealthClient';

import FaqReuseable from '../components/FaqReuseable';
import StickyServices from '../components/StickyServices';

import HealthResult from '../work-salesforce-health-cloud/HealthResult';
import WhyChooseUs from '../about/WhyChooseUs';

const faqs = [
  {
    question: 'What is Zoho CRM and how can it help my business?',
    answer:
      'Zoho CRM is a cloud-based customer relationship management platform that helps you manage leads, track sales, automate workflows, and build stronger customer relationships. It centralizes all your sales, marketing, and support data, making your processes more efficient and results-driven.',
  },
  {
    question: 'How long does it take to implement Zoho CRM?',
    answer:
      'Implementation timelines vary based on your business requirements, number of users, and complexity of customization. For most businesses, basic setup can be completed within 2–4 weeks, while more advanced, customized solutions may take 6–8 weeks.',
  },
  {
    question: 'Can Zoho CRM integrate with my existing business tools?',
    answer:
      'Yes! Zoho CRM seamlessly integrates with popular tools like G Suite, Microsoft Office 365, QuickBooks, Shopify, Mailchimp, Slack, WhatsApp, and many more. We also offer custom API integrations to connect Zoho CRM with your internal systems.',
  },
  {
    question: 'Will my team receive training after implementation?',
    answer:
      'Absolutely. We provide role-based training sessions for sales, marketing, and support teams, along with admin training for managing the CRM. This ensures your team can confidently use Zoho CRM from day one.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer:
      'Yes, we provide continuous support, system updates, troubleshooting, and performance optimization to ensure Zoho CRM continues to meet your evolving business needs.',
  },
];

const wordpressServices = [
  {
    title: 'Customized Implementation of CRM',
    description:
      'We dont think there is a one-size-fits-all solution. For optimal effectiveness, our team sets up Zoho CRM to fit your particular sales procedures, customer journeys, and workflows.',
  },
  {
    title: 'Fast Go-Live Using Tested Techniques',
    description:
      'You can see results in weeks rather than months due to our agile deployment approach, which guarantees quicker implementation without sacrificing quality.',
  },
  {
    title: 'Professional Mapping of Business Processes',
    description:
      'We match Zoho CRM modules to your precise business requirements, making sure that each workflow, field, and automation has a functional purpose.',
  },
  {
    title: 'Smooth Integrations with Third Parties',
    description:
      'For easy data flow and unified operations, we integrate Zoho CRM with your current tech stack, including marketing tools and ERP systems.',
  },
  {
    title: 'Easily Accessible AI and Automation',
    description:
      'We use Zia AI insights with Zoho robust automation features to cut down on manual labor and assist your team in making better decisions.',
  },
  {
    title: 'Downtime-Free Data Migration',
    description:
      'Leaving your previous CRM? We manage safe data transfers with perfect correctness, little loss, and little disturbance.',
  },
  {
    title: 'Sector-Specific Knowledge',
    description:
      'Regardless of your industry—retail, IT, manufacturing, or services—we can tailor Zoho CRM to your unique set of requirements and compliance requirements.',
  },
];

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/zolo.jpg"
        title="Boost Your Company with Intelligent, Scalable, and Smooth Zoho CRM Solutions."
        description="Get Zoho CRM Customer Service"
      />

      <StickyServices
        heading="Why Saasverse is Top Choice for Zoho Implemenation?"
        paragraphs={[
          'With solutions that are specifically designed to meet your business objectives, we at Saasverse assist you in realizing the full potential of Zoho CRM.',
          "Our professional Zoho CRM services simplify your sales, marketing, support, and operations – all in one location — whether you're a rapidly expanding startup, an established business, or a developing service provider.",
        ]}
        services={wordpressServices}
      />

      <HealthResult
        title="Boost Your Company with Effective Zoho CRM Services"
        subtitle="Our specialty at Saasverse is providing comprehensive Zoho CRM solutions that increase lead generation, expedite transaction completion, and foster enduring client relationships. We make sure Zoho CRM functions flawlessly for the expansion of your company, from setup and customization to training and continuing support."
        results={[
          {
            number: '01',
            title: 'Customized Implementation of CRM',
            description:
              'We guarantee a flawless fit from the start by designing and configuring Zoho CRM to fit your particular sales process, customer journey, and operational requirements.',
          },
          {
            number: '02',
            title: 'Smooth Integrations',
            description:
              'Connect Zoho CRM with your existing tools — from marketing platforms to accounting software — for easy data flow and streamlined operations.',
          },
          {
            number: '03',
            title: 'Deeper Automation & AI Understanding',
            description:
              'Use Zia AI and Zoho automation tools to expedite repetitive activities, identify patterns, and make data-driven decisions more quickly.',
          },
          {
            number: '04',
            title: 'Safe Data Transfer',
            description:
              'With total accuracy and a safe and effective transition, get rid of your outdated CRM without any downtime or data loss.',
          },
          {
            number: '05',
            title: 'Adoption & Role-Based Training',
            description:
              'Provide practical training sessions to your support, marketing, and sales staff to increase adoption and optimize return on investment.',
          },
          {
            number: '06',
            title: 'Continuous Assistance & Enhancement',
            description:
              'Take advantage of 24/7 technical support, frequent upgrades, and performance optimization to maintain optimal CRM performance.',
          },
        ]}
      />

      <WhyChooseUs />

      <HealthClient
        title="Start Using Zoho CRM Right Now "
        highlight=""
        paragraphs={[
          'Saasverse Pvt Ltd knows how to help you and automate your daily tasks, improve your current system, or build up Zoho CRM from scratch. Our team provides solutions that are customized for your company, enabling you to increase customer satisfaction, close sales more quickly, and grow with assurance.',
          'For a free consultation and to learn how our Zoho CRM services may improve your workflow, get in touch with Saasverse today.',
        ]}
      />

      <FaqReuseable title="FAQ" faqs={faqs} />
    </>
  );
};

export default page;
