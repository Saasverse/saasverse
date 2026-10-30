import React from 'react';
import PageBanner from '../components/PageBanner';
import HealthClient from '../work-salesforce-health-cloud/HealthClient';
import { FaArrowRight } from "react-icons/fa";
import FaqReuseable from '../components/FaqReuseable';

import { Metadata } from 'next';
import CTASection from '../components/Home/CTASection';
import Link from 'next/link';
import DotNetDevelopmentSections from '../components/DotNetDevelopmentSections';


const faqs = [
  {
    question: "What is .NET used for?",
    answer:
      ".NET is Microsoft's platform for building web apps, APIs, cloud services, desktop apps and mobile apps, mostly in C#. Modern .NET is open source and runs on Windows, Linux and macOS.",
  },
  {
    question: "What is the difference between .NET Framework and .NET?",
    answer:
      ".NET Framework is the older, Windows-only version, now in maintenance. Modern .NET (from .NET 5 onward, now .NET 10) is cross-platform, faster and gets all new features. New apps should be built on modern .NET.",
  },
  {
    question: "When does support end for .NET 8 and .NET 9?",
    answer:
      "Microsoft ends support for both on November 10, 2026. After that, they no longer get security patches. .NET 10 is supported until November 14, 2028.",
  },
  {
    question: "How do you upgrade an older .NET application?",
    answer:
      "We review the code and its dependencies, plan the upgrade path, and move the app to .NET 10 step by step. For large apps, we upgrade one part at a time so the business keeps running.",
  },
  {
    question: "Can you take over a .NET app another team built?",
    answer:
      "Yes. We review the code, document how it works, list what is risky or out of date, and then take over support and new work.",
  },
  {
    question: "Do you build .NET apps for Azure and AWS?",
    answer:
      "Yes. We build and host .NET apps on both, and we can move existing apps from your own servers to either one.",
  },
  {
    question: "Can you connect our .NET app to Salesforce?",
    answer:
      "Yes. We're also a Salesforce partner, so we can build the connection between your .NET app and Salesforce and support both sides.",
  },
  {
    question: "Can I hire a dedicated .NET developer?",
    answer:
      "Yes. You can add a .NET developer to your team by the hour, part time or full time. You interview the developer before they join.",
  },
  {
    question: "How do you keep .NET applications secure?",
    answer:
      "We follow secure coding practices, keep libraries and the .NET runtime patched, use role-based access, and never store secrets in the code. We sign an NDA before we access your systems.",
  },
  {
    question: "How long does a .NET project take?",
    answer:
      "It depends on the size of the app and the work involved. You'll get a timeline in the written scope before any work starts.",
  },
  {
    question: "What does .NET development cost?",
    answer:
      "The cost depends on your requirements: what needs to be built or upgraded, the size of the code, the integrations and the hosting setup. We send you the cost in writing after the discovery call.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you'll get a reply within 24 hours.",
  },
];




export const metadata: Metadata = {
  title: ".NET Development Services for Web & Cloud Apps | Saasverse ",
  description:
    "Custom .NET development: ASP.NET Core web apps, APIs, cloud apps on Azure and AWS, and upgrades from older .NET versions. Book a free consultation.",
    alternates: { canonical: 'https://www.saasverse.in/dotnet-development-services' },

  };
const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/shopify2.jpg"
        title="
Custom .NET Development Services"
        description="We build new .NET applications and upgrade older ones to .NET 10."
      />

      <DotNetDevelopmentSections />
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
