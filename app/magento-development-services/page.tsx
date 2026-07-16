import React from 'react';
import PageBanner from '../components/PageBanner';
import HealthClient from '../work-salesforce-health-cloud/HealthClient';

import FaqReuseable from '../components/FaqReuseable';
import StickyServices from '../components/StickyServices';
import WhyChoose from '../components/WhyChoose';
import { Metadata } from 'next';

const faqs = [
  {
    question: 'Why would I want to choose Magento over WooCommerce?',
    answer:
      'Unlike WooCommerce, which positions itself as a community solution, Magento complies with organizations. In any event, this does not rule out the possibility that its provisions will be advantageous to independent businesses. Magento is available in two flavors: an endeavor release for larger organizations and a free commerce version that is incredibly impressive on its own.',
  },
  {
    question: 'Can I add features to your Marketplace solution?',
    answer:
      'You can, of course. The various components and modules that make up our commercial solution are extremely robust and easy to implement.',
  },
  {
    question:
      'Is your Magento team in India capable of developing enterprise-level tasks?',
    answer:
      'Yes. We have collaborated with a diverse range of enterprise-level clients in sectors such as the transportation sector, healthcare, and broadcast communications. View our clientele by clicking this link.',
  },
  {
    question: 'Does Magento Make Sense for Small Businesses?',
    answer:
      'Indeed, without a doubt. In actuality, Magento can always be the ideal choice whether you are managing a sizable company or even a relatively small internet business. Magneto has gained a lot of popularity in this fast-paced world because it can easily meet all of your unique needs and help your company expand as a whole.',
  },
  {
    question: 'How Much Will Magento Development Cost?',
    answer:
      "License fees are required for Magento's paid options, such as Magento Commerce Cloud and Magento Commerce. As a result, it may be a somewhat expensive choice. However, because of its truly amazing features, large and medium-sized businesses may find the costs worthwhile.",
  },
];

const wordpressServices = [
  {
    title: 'Magento E-commerce Design',
    description:
      "Develop an engaging shopping experience on your beautifully crafted Magento eCommerce website. Our Magento specialists provide bespoke e-commerce design solutions according to the client's business needs. We implement the latest trends in e-store design.",
  },
  {
    title: 'API Module Integration',
    description:
      'As a professional Magento development agency, we are experts in third-party API integration to enhance website performance. We possess the capability to integrate FedEx API Integration shipping services, UPS API Integration, etc.',
  },
  {
    title: 'Payment Module Services',
    description:
      'We develop various payment modules to allow clients to expand their online ventures. Various payment gateways are supported to assist clients in paying for goods at their convenience and making secure transactions.',
  },
  {
    title: 'Regular Magento Support',
    description:
      'Besides the design and development services, our Magento professionals also provide 24/7 support services. The aim is to enable clients to push their businesses to the next level through timely maintenance.',
  },
  {
    title: 'Magento Upgrade & Migration',
    description:
      'Our seasoned Magento architects provide professional migration and upgrade solutions to assist you with a seamless move to the newer version of Magento. Our team of experts ensures that everything from your data, configurations, extensions, and custom functionalities is safely migrated without any interruption. Whether you’re upgrading from Magento 1 to Magento 2 or upgrading to the most recent release, we offer a smooth, safe, and optimized upgrade experience.',
  },
];

const whyChooseHeading =
  'Why do we give Magento the most preference among all platforms?';

const whyChooseDescription =
  'At Saasverse, we trust Magento for delivering powerful, flexible, and scalable eCommerce experiences. Whether you’re launching a small store or expanding an enterprise business, Magento provides the tools, control, and performance to build your success.';

const features = [
  {
    title: 'All-in-One Commerce Platform',
    description:
      'Magento provides all the tools you require to create, operate, and grow an online store with enterprise-level capabilities.',
  },
  {
    title: 'Open Source Flexibility',
    description:
      'Magento is flexible and customizable to suit individual business requirements with complete mastery of your codebase.',
  },
  {
    title: 'Highly Scalable',
    description:
      'Magento scales from small stores to large companies, large traffic, and large product ranges comfortably.',
  },
  {
    title: 'Extensive Marketplace',
    description:
      'There are thousands of extensions and themes available for extending functionality and styling.',
  },
  {
    title: 'Advanced Customization',
    description:
      'Magento can customize your eCommerce experience with robust theming and modular architecture.',
  },
  {
    title: 'Secure and Reliable',
    description:
      'Magento allows secure transactions, PCI compliance, and regular updates to ensure customer data security.',
  },
];

export const metadata: Metadata = {
  title: "Magento Development Services | Saasverse",
  description:
    "Expert Magento development services from India. Custom stores, migrations & support for US/UAE brands. Get a free quote.",
};

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/mage.webp"
        title="
Build High-Performance Stores with Our Magento Development Services"
        description="Knock on our door to hire end-to-end Magento eCommerce development services to have a low-cost platform that promises quality."
      />

      <StickyServices
        heading="Build a Website That Sells with Saasverse"
        paragraphs={[
          'An online store is worth more than your retail store in light of the customer outreach it offers 24/7 worldwide. In the era of advanced e-tail customers, Saasverse shatters the bar of customer attention by providing Magento web development services guaranteed to turn your eCommerce into a hit.',
          'Our Magento-certified developers design from concepts to solutions, surfacing above the screens to in-store operations to provide you services spanning multi-store platforms to single-store implementations, from extensions development to migration.',
        ]}
        services={wordpressServices}
      />

      <WhyChoose
        heading={whyChooseHeading}
        description={whyChooseDescription}
        features={features}
      />

      <HealthClient
        title="Start Using "
        highlight="Magento"
        paragraphs={[
          'Are you prepared to use Magento strength and versatility to start or grow your online store?',
          'For a free consultation and customized Magento solutions that support business expansion, get in touch with Saasverse right now.',
        ]}
      />

      <FaqReuseable title="Magento FAQ" faqs={faqs} />
    </>
  );
};

export default page;
