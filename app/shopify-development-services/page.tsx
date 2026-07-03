import React from 'react';
import PageBanner from '../components/PageBanner';
import HealthClient from '../work-salesforce-health-cloud/HealthClient';

import FaqReuseable from '../components/FaqReuseable';
import StickyServices from '../components/StickyServices';
import WhyChoose from '../components/WhyChoose';
import { Metadata } from 'next';

const faqs = [
  {
    question: ' How much to create a Shopify website?',
    answer:
      'The cost of a Shopify website depends on your requirements—like design sophistication, number of products, custom features, and third-party apps. A Normal stores start at a few hundred dollars, and more complicated, custom-built stores cost more. We offer custom quotes as per your needs.',
  },
  {
    question: 'How long does it take to create a Shopify website?',
    answer:
      'Development timelines vary based on project size and complexity. A typical Shopify site or store would take 1–2 weeks, and complex solutions could take 3–6 weeks. We always offer an exact timeline initially after checking all the requirements and sticking to it for on-time delivery.',
  },
  {
    question: 'What is Shopify website development at Saasverse?',
    answer:
      'Our process is transparent and simple: Requirement Gathering , Design & Wireframe Approval . Development & Integration , Testing & Quality Checks . Launch & Support . We keep you updated at every step of the way for a smooth experience.',
  },
  {
    question: 'Will I get support and maintenance once the site is live?',
    answer:
      'Yes, we offer full support and maintenance even after your Shopify store goes live. Whether fixes for bugs, new feature inclusion, or performance boosts — our team is always ready to help you whenever needed.',
  },
  {
    question: 'Can I update and maintain the website later myself?',
    answer:
      "Yes! Shopify is very easy to use, and we also provide initial assistance and training materials. You'll be able to easily manage products, change content, and process orders. And if you ever need help, our team is just a message away.",
  },
];

const wordpressServices = [
  {
    title: 'Secure Multi-Gateway Integration',
    description:
      'Get multiple reliable payment gateways integrated to provide secure, streamlined, and easy checkout experiences.',
  },
  {
    title: 'Effortless Shipping & Fulfillment Solutions',
    description:
      'Our process Automatically links your store to trusted shipping carriers to streamline logistics, calculate precise shipping rates, and provide real-time tracking.',
  },
  {
    title: 'Business System Integration (CRM & ERP)',
    description:
      'You Can integrate powerful CRM and ERP systems into your eCommerce site to streamline your customer data, order management, and back-end processes.',
  },
  {
    title: 'WordPress Customization',
    description:
      'Custom themes, plugin integrations, and tailored website enhancements.',
  },
  {
    title: 'Smart Marketing & Insights Tools',
    description:
      'Improve campaign performance, ROI, and data-driven decisions by integrating integrated marketing and analytics solutions.',
  },
  {
    title: 'Centralized Inventory Sync & Management',
    description:
      'The automated reordering and synchronization of inventory across sales channels and warehouses are essential to maintaining complete and timely inventory.',
  },
  {
    title: ' Grow Your Audience with Social & Marketplace Integration',
    description:
      'Link your store seamlessly to leading social networks and online marketplaces to gain more visibility and drive more revenue.',
  },
];

const whyChooseHeading =
  'Build your High-Performance & Conversion Driven Shopify E-commerce Sites';

const whyChooseDescription =
  "Our philosophy is focused on driving our customers' sales from the very beginning. In order to do this, we work with our customers and use the Shopify and Shopify Plus e-commerce platforms to open up new doors. We set very high standards, and we ensure that our team of Shopify experts in India meet and surpass them.";

const features = [
  {
    title: 'Interactive interface',
    description:
      'Streamlined CMS interface to add, edit, list and manage the products with ease.',
  },
  {
    title: 'Unlimited posting',
    description:
      'Increase the number of SKUs according to your preference with an effectively unlimited product posting facility.',
  },
  {
    title: 'Seamless Integration',
    description:
      'Integrate with the ERP, CRM and other third-party softwares through the provided apps to simplify your work.',
  },
  {
    title: 'Powerful Marketing Tools',
    description:
      'Integrated advanced marketing tools to push visitors and conversions.',
  },
  {
    title: 'Easy to use',
    description:
      'Interactive and easy-to-use dashboard to control the products and other services.',
  },
  {
    title: 'SEO Friendly',
    description:
      'Shopify possesses robust SEO capabilities to reach the top of search results pages.',
  },
];

export const metadata: Metadata = {
  title: "Shopify development services | saasverse",
  description:
    "Get custom Shopify development services to build scalable, user-friendly, and mobile-optimized eCommerce websites.",
};

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/shopify2.jpg"
        title="
Reliable Shopify Development Services for E-Commerce Brands"
        description="Launch the store with us!"
      />

      <StickyServices
        heading="Shopify Solutions Customised to Your Business"
        paragraphs={[
          'Take your business ideas into an online store with Shopify Development Services. Shopify services at Saasverse include Shopify app development, Shopify theme design, Shopify e-store setup, website migration, API integration.',
        ]}
        services={wordpressServices}
      />

      <WhyChoose
        heading={whyChooseHeading}
        description={whyChooseDescription}
        features={features}
      />

      <HealthClient
        title="Get Started with "
        highlight="Shopify"
        paragraphs={[
          'Ready to launch or scale your online store with the power and flexibility of Shopify?',
          'Contact Saasverse today for a free consultation and customized Shopify solutions that help grow your business.',
        ]}
      />

      <FaqReuseable title="Shopify FAQ" faqs={faqs} />
    </>
  );
};

export default page;
