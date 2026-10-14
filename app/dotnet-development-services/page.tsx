import React from 'react';
import PageBanner from '../components/PageBanner';
import HealthClient from '../work-salesforce-health-cloud/HealthClient';
import { FaArrowRight } from "react-icons/fa";
import FaqReuseable from '../components/FaqReuseable';
import StickyServices from '../components/StickyServices';
import WhyChoose from '../components/WhyChoose';
import { Metadata } from 'next';
import CTASection from '../components/Home/CTASection';
import Link from 'next/link';

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
    title: 'Custom .NET Web Application Development ',
    description:
      'Hire .NET developers to create practical, safe web apps that are customized for your company. From simple websites to intricate enterprise-grade solutions spanning several domains, our developers are adept at creating anything.',
  },
  {
    title: '.NET Desktop Application Development ',
    description:
      'Create feature-rich desktop applications for Windows platforms with Dot NET. Our team provides reliable, quick, and responsive solutions that are customized to your workflows, ranging from GUI-based tools to intelligent client applications.',
  },
  {
    title: 'RESTful Web API Development',
    description:
      'Using C# and VB.NET, we create and implement scalable APIs that facilitate third-party integration and modular service connectivity. Performance, security, and adaptable website design are given top priority when hiring ASP.NET developers.',
  },
  {
    title: 'Cloud-Based .NET Applications ',
    description:
      'In order to give ASP.NET programmers easy performance, quick deployments, and improved availability, we create scalable .NET applications with secure cloud-native design that integrate with leading cloud providers like Azure, AWS, and GCP.',
  },
  {
    title: 'Legacy .NET Modernization ',
    description:
      'Update out-of-date apps to the newest .NET frameworks to transform them. Our developers make sure that changes go smoothly without interfering with your core business modernized architecture and speed improvements.',
  },
  {
    title: 'Ongoing .NET Support and Maintenance ',
    description:
      'With proactive maintenance, frequent updates, improved security, and plugin troubleshooting. Hire the.NET developers from Saasverse in India to make sure your app functions at its best, reducing downtime and increasing user satisfaction.',
  },
];

const whyChooseHeading = '.NET Technologies and Frameworks We Use ';

const whyChooseDescription = '';

const features = [
  {
    title: 'ASP.NET Core ',
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
    title: 'Entity Framework Core ',
    description:
      'Simplify data access with a powerful object-relational mapper for .NET applications.',
  },
];

export const metadata: Metadata = {
  title: ".NET Development Services for Web & Cloud Apps | Saasverse ",
  description:
    "Custom .NET development services for web, cloud and desktop apps. Hire dedicated ASP.NET Core developers or modernize legacy .NET systems. Get a free quote. ",
    alternates: { canonical: 'https://www.saasverse.in/dotnet-development-services' },

  };
const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/shopify2.jpg"
        title="
Custom .NET Development Services "
        description="The Solutions of Enterprise-Level are designed through Dot Net for Scale, Security, and Performance"
      />

      <StickyServices
        heading="Our .NET Development Services "
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
        title="Trusted by Global Enterprises  "
        highlight=""
        paragraphs={[
          'We are global, not just local! We are pleased to present our valued customers who have selected Saasverse to hire .NET specialists whenever they need them.',
          'Contact Saasverse today for a free consultation and customized .NET solutions that drive your business forward.',
        ]}
      />

      <FaqReuseable title=".NET Development FAQs " faqs={faqs} />


       <section className="w-full px-4 py-16 sm:px-6 lg:px-8">
     <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[rgb(10,11,16)]">
        <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          
          {/* Background Effects */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
            
            {/* Content */}
            <div className="max-w-3xl text-center lg:text-left">
             

              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
               Start Your .NET Project 
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                Partner with our .NET experts to build secure, scalable, and
  high-performance solutions tailored to your business needs.
              </p>
            </div>

            {/* CTA Button */}
            <div className="shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:gap-4 hover:bg-gray-100 sm:px-8 sm:py-4 sm:text-base"
              >
                Talk to Our Experts
                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>

      <CTASection/>
    </>
  );
};

export default page;
