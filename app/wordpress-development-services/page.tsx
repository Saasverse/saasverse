import React from 'react';
import PageBanner from '../components/PageBanner';
import HealthClient from '../work-salesforce-health-cloud/HealthClient';

import FaqReuseable from '../components/FaqReuseable';
import StickyServices from '../components/StickyServices';
import WhyChoose from '../components/WhyChoose';
import { Metadata } from 'next';

const whyChooseHeading = 'Why Choose Saasverse for WordPress Development?';

const whyChooseDescription =
  'At Saasverse, we leverage WordPress as our primary platform because it delivers a complete solution to build, customize, and manage websites efficiently.';

const faqs = [
  {
    question: 'Does WordPress work well for creating websites?',
    answer:
      'Indeed, it is without a doubt the most popular content management system in the world. When it comes to creating websites and online stores, developers also favor it highly.',
  },
  {
    question: 'How much time does it take to create a website using WordPress?',
    answer:
      'Your unique needs will determine how long it takes to develop a WordPress website. It takes relatively less time if your development needs are clear and constrained. As a top WordPress development company, we have a reputation for creating websites as quickly as possible.',
  },
  {
    question: 'What is the price of creating a WordPress website?',
    answer:
      "The type of website you require will determine the development cost for a WordPress website. For a website with simple themes and features, WordPress development services are less expensive. The price will vary if you require a high-performance website with more sophisticated features. We provide adjustable pricing structures that are made to accommodate each client's particular requirements.",
  },
  {
    question:
      'After the site is launched, do you provide WordPress maintenance services?',
    answer:
      'Yes, our robust support and maintenance services have helped us establish a solid reputation as a WordPress web development company.',
  },
  {
    question: 'How easy is it to manage content in WordPress?',
    answer:
      'WordPress provides a user-friendly content management system with a block editor (Gutenberg) that allows you to create and edit pages and posts effortlessly. You can schedule content, manage media, and control user permissions without needing any coding knowledge.',
  },
];

const wordpressServices = [
  {
    title: 'WordPress SEO',
    description:
      'Saasverse advances your site for web indexing by adhering to the most recent strategy and best practices.',
  },
  {
    title: 'WordPress Support',
    description:
      'Our WordPress support services include customization, updates, migration, maintenance, and troubleshooting.',
  },
  {
    title: 'WordPress Upgrading',
    description:
      'We provide WordPress and plugin upgrades while maintaining high security standards.',
  },
  {
    title: 'WordPress Customization',
    description:
      'Custom themes, plugin integrations, and tailored website enhancements.',
  },
  {
    title: 'WordPress Design',
    description:
      'From blogs to enterprise eCommerce platforms, we create modern WordPress designs.',
  },
  {
    title: 'WordPress Services',
    description:
      'Theme development, plugin customization, speed optimization, SEO, and third-party integrations.',
  },
];

const features = [
  {
    title: 'Expert WordPress Developers',
    description:
      'Our experienced developers build scalable and high-performing WordPress solutions.',
  },
  {
    title: 'Custom Development',
    description:
      'Tailored themes, plugins, and integrations based on your business requirements.',
  },
  {
    title: 'SEO Optimized',
    description:
      'We follow modern SEO practices to improve visibility and search rankings.',
  },
  {
    title: 'Secure Solutions',
    description:
      'Security-focused development with regular updates and best practices.',
  },
  {
    title: 'Performance Driven',
    description: 'Optimized code and architecture for faster loading websites.',
  },
  {
    title: 'Ongoing Support',
    description:
      'Continuous maintenance and support to keep your website running smoothly.',
  },
];
export const metadata: Metadata = {
  title: "WordPress Development Services | Saasverse",
  description:
    "Custom WordPress development services by India-based experts. Themes, plugins & secure sites for US/UAE clients. Free quote.",
    alternates: { canonical: 'https://www.saasverse.in/wordpress-development-services' },

  };
const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/dotnet.webp"
        title="Top Notch Custom Wordpress Development Services"
        description="Get your company online with a powerful CMS. Countless SMEs, bloggers, and Fortune 500 companies trust our WordPress development services."
      />

      <StickyServices
        heading="WordPress to upgrade your Digital Presence with Saasverse"
        paragraphs={[
          "WordPress is the most widely used content management system, accounting for between 60 and 75 percent of all websites created. Web developers and designers can create or update websites with minimal effort due to this content management system's ease of customization.",
          'It has a lot of built-in features that are helpful for creating a simple content management system and a blogging platform to improve search engine visibility. Along with its unparalleled features, WordPress is easily adaptable to a variety of platforms, including e-commerce and content resource management.',
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
        highlight="WordPress"
        paragraphs={[
          'Look no further than Saasverse Pvt Ltd, one of the top WordPress development service providers, if you want to add your unique touches to a blog webpage or create a feature-rich and user-friendly business website.',
          'Contact Saasverse today for a free consultation and customized WordPress solutions that help grow your business.',
        ]}
      />

      <FaqReuseable title="WordPress FAQ" faqs={faqs} />
    </>
  );
};

export default page;
