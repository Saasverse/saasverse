import React from 'react';
import PageBanner from '../components/PageBanner';
import HealthClient from '../work-salesforce-health-cloud/HealthClient';

import FaqReuseable from '../components/FaqReuseable';
import StickyServices from '../components/StickyServices';
import WhyChoose from '../components/WhyChoose';
import { Metadata } from 'next';
import CTASection from '../components/Home/CTASection';

const faqs = [
  {
    question: 'How does a .NET application work?',
    answer:
      'Native desktop, web, and mobile applications can be made for any operating system using the open-source .NET framework. The tools, libraries, and languages that comprise the .NET system facilitate the development of high-performance, scalable, and modern software.',
  },
  {
    question: 'What is .NET migration?',
    answer:
      'Our area of expertise in .NET migration services is rebuilding or reorganizing legacy systems into scalable, high-performance .NET Core applications without interfering with ongoing business operations.',
  },
  {
    question: 'Why is .NET preferred for enterprise applications?',
    answer:
      '.NET is considered as best for enterprise applications due to its exceptional performance, scalability, and security. It supports multiple languages, easily connects to legacy systems, and operates flawlessly on desktop, mobile, and online platforms.',
  },
  {
    question: 'What are the security features of .NET?',
    answer:
      '.NET comes with built-in security features like code access security, role-based restrictions, and data encryption. Together with our secure coding methods, you get a strong application that protects against vulnerabilities and attacks.',
  },
  {
    question:
      'Is .NET a suitable framework for creating cloud-based applications?  ',
    answer:
      '.NET Core is compatible with popular cloud platforms like Google Cloud, AWS, and Azure. We can assist you with private, public, or hybrid cloud deployments.',
  },
];

const wordpressServices = [
  {
    title: 'Custom Web App Development',
    description:
      'Hire .NET developers to create practical, safe web apps that are customized for your company. From simple websites to intricate enterprise-grade solutions spanning several domains, our developers are adept at creating anything.',
  },
  {
    title: 'Development of .NET Desktop Applications',
    description:
      'Create feature-rich desktop applications for Windows platforms with Dot NET. Our team provides reliable, quick, and responsive solutions that are customized to your workflows, ranging from GUI-based tools to intelligent client applications.',
  },
  {
    title: 'RESTful Web API Development',
    description:
      'Using C# and VB.NET, we create and implement scalable APIs that facilitate third-party integration and modular service connectivity. Performance, security, and adaptable website design are given top priority when hiring ASP.NET developers.',
  },
  {
    title: 'Cloud-Based.NET Applications',
    description:
      'In order to give ASP.NET programmers easy performance, quick deployments, and improved availability, we create scalable .NET applications with secure cloud-native design that integrate with leading cloud providers like Azure, AWS, and GCP.',
  },
  {
    title: 'Modernization of Legacy .NET Apps',
    description:
      'Update out-of-date apps to the newest .NET frameworks to transform them. Our developers make sure that changes go smoothly without interfering with your core business modernized architecture and speed improvements.',
  },
  {
    title: 'Ongoing Support & Improvement',
    description:
      'With proactive maintenance, frequent updates, improved security, and plugin troubleshooting. Hire the.NET developers from Saasverse in India to make sure your app functions at its best, reducing downtime and increasing user satisfaction.',
  },
];

const whyChooseHeading = 'Popular Dotnet Frameworks We Excel In';

const whyChooseDescription = '';

const features = [
  {
    title: '.NET Core',
    description:
      'Build high-performance, cross-platform web applications that scale effortlessly.',
  },
  {
    title: 'ADO.NET',
    description:
      'Efficiently access and manage data from diverse sources using robust .NET libraries.',
  },
  {
    title: 'SignalR',
    description:
      'Enable real-time web functionality for responsive and interactive user experiences.',
  },
  {
    title: 'Blazor',
    description:
      'Develop interactive web UIs using C# instead of JavaScript for seamless client-server integration.',
  },
  {
    title: 'Hangfire',
    description:
      'Reliably manage background jobs, scheduled tasks, and delayed processing.',
  },
  {
    title: 'Entity Framework',
    description:
      'Simplify data access with a powerful object-relational mapper for .NET applications.',
  },
];

export const metadata: Metadata = {
  title: "DotNet development services | saasverse",
  description:
    "Get robust and scalable web solutions with expert DotNet development services tailored to your business needs.",
};
const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/shopify2.jpg"
        title="
Expert DotNET Development Services for Web, Mobile & Desktop Apps"
        description="The Solutions of Enterprise-Level are designed through Dot Net for Scale, Security, and Performance"
      />

      <StickyServices
        heading="Explore our end-to-end .NET development services"
        paragraphs={[
          'You can hire the best .NET developers for your business with our affordable staff augmentation services.',
        ]}
        services={wordpressServices}
      />

      <WhyChoose
        heading={whyChooseHeading}
        description={whyChooseDescription}
        features={features}
      />

      <HealthClient
        title="Trusted by World Leaders "
        highlight=""
        paragraphs={[
          'We are global, not just local! We are pleased to present our valued customers who have selected Saasverse to hire .NET specialists whenever they need them.',
          'Contact Saasverse today for a free consultation and customized .NET solutions that drive your business forward.',
        ]}
      />

      <FaqReuseable title=".NET Development FAQ" faqs={faqs} />
      <CTASection/>
    </>
  );
};

export default page;
