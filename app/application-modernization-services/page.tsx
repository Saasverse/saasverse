import React from "react";
import PageBanner2 from "../components/PageBanner2";
import SalesforceServiceReuseable from "../components/SalesforceServiceReuseable";
import FaqReuseable from "../components/FaqReuseable";
import ContactForm from "../components/ContactForm";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Application Modernization Services | Saasverse",
  description:
    "Application modernization services: we assess aging apps, move them to the cloud, upgrade old code and rebuild the parts that slow your business.",
  alternates: {
    canonical:
      "https://www.saasverse.in/application-modernization-services",
  },
  openGraph: {
    title: "Application Modernization Services | Saasverse",
    description:
      "Application modernization services: we assess aging apps, move them to the cloud, upgrade old code and rebuild the parts that slow your business.",
    url: "https://www.saasverse.in/application-modernization-services",
    siteName: "Saasverse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Application Modernization Services | Saasverse",
    description:
      "Application modernization services: we assess aging apps, move them to the cloud, upgrade old code and rebuild the parts that slow your business.",
  },
};

const services = [
  {
    title: "Application Assessment",
    description:
      "We review each application’s code, data, users and costs, and tell you what to keep, move, rebuild or retire.",
  },
  {
    title: "Rehost and Replatform",
    description:
      "We move applications to AWS or Azure with few changes, then improve them once they’re running there.",
  },
  {
    title: ".NET Framework Upgrades",
    description: (
      <>
        We move apps from .NET Framework and older .NET versions to modern .NET.
        See our{" "}
        <Link
          href="/dotnet-development-services"
          className="text-[#003e95] font-semibold hover:underline"
        >
          .NET development services
        </Link>
        .
      </>
    ),
  },
  {
    title: "Refactor and Rebuild",
    description:
      "We rebuild the parts that are slow, fragile or hard to change, one piece at a time, while the old app keeps running.",
  },
  {
    title: "Database Modernization",
    description:
      "We move old databases to managed cloud databases and clean up the data on the way.",
  },
  {
    title: "New User Interfaces",
    description:
      "We replace dated screens with modern web interfaces that work on any device.",
  },
  {
    title: "Containers and Serverless",
    description:
      "Where it makes sense, we package apps in containers or move parts to serverless services.",
  },
  {
    title: "Replace With Salesforce",
    description: (
      <>
        Old custom CRMs and case-tracking tools can often be replaced by
        Salesforce. See our{" "}
        <Link
          href="/salesforce-implementation"
          className="text-[#003e95] font-semibold hover:underline"
        >
          Salesforce implementation services
        </Link>
        .
      </>
    ),
  },
];

const modernizationPaths = [
  {
    title: "Retire",
    description: "Switch off applications nobody uses any more.",
  },
  {
    title: "Retain",
    description: "Leave stable applications where they are for now.",
  },
  {
    title: "Rehost",
    description: "Move the application to the cloud as it is.",
  },
  {
    title: "Replatform",
    description: "Move it with small changes, such as a managed database.",
  },
  {
    title: "Refactor",
    description:
      "Rebuild parts of it on modern code and cloud services.",
  },
  {
    title: "Replace",
    description: "Swap it for a SaaS product, such as Salesforce.",
  },
];

const warningSigns = [
  {
    title: "Only One Person Understands It",
    description:
      "The original developers have left, and every change is a risk.",
  },
  {
    title: "Unsupported Versions",
    description:
      "It runs on a framework, database or server version that no longer gets security fixes.",
  },
  {
    title: "Slow to Change",
    description:
      "Small features take months because the code is tangled.",
  },
  {
    title: "Hard to Connect",
    description:
      "It can’t share data with Salesforce or your newer systems.",
  },
  {
    title: "Running Costs Keep Rising",
    description:
      "Old servers and licenses cost more every year.",
  },
  {
    title: "Users Work Around It",
    description:
      "Teams keep spreadsheets because the app is slow or hard to use.",
  },
];

const projectSteps = [
  {
    title: "Discovery Call",
    description:
      "Tell us about the applications, who uses them and what’s holding you back. If you’d like an NDA first, we’ll sign one.",
  },
  {
    title: "Assessment",
    description:
      "We review the code, data, infrastructure and costs, and recommend a path for each application.",
  },
  {
    title: "Scope and Plan",
    description:
      "We send you a written scope with the timeline and cost. Nothing starts until you approve it.",
  },
  {
    title: "Modernize in Stages",
    description:
      "We work one application or module at a time, so the business keeps running.",
  },
  {
    title: "Test and Cut Over",
    description:
      "We test each stage with your users and agree a cut-over time, with a rollback plan.",
  },
  {
    title: "Handover and Support",
    description:
      "We hand over the code and documentation, and stay on to support you after go-live.",
  },
];

const relatedServices = [
  {
    title: "AWS Cloud Services",
    description:
      "Migration and cloud-native development on AWS.",
    link: "/services-aws",
    linkText: "Explore AWS services",
  },
  {
    title: ".NET Development",
    description:
      "Upgrade .NET Framework apps to modern .NET.",
    link: "/dotnet-development-services",
    linkText: "Explore .NET development",
  },
  {
    title: "Salesforce Implementation",
    description:
      "Replace old CRMs and custom tools with Salesforce.",
    link: "/salesforce-implementation",
    linkText: "Explore implementation services",
  },
];

const whyChooseUs = [
  {
    title: "One Team for Your Systems",
    description:
      "Our .NET, cloud and Salesforce developers work in one team, so we can upgrade an app, move it or replace it with Salesforce, whichever fits.",
  },
  {
    title: "120+ Projects for 40+ Clients",
    description:
      "We’ve delivered 120+ projects for 40+ clients across 19+ countries.",
  },
  {
    title: "US Time-Zone Overlap",
    description:
      "Our team is based in Jaipur, India. We agree on overlapping working hours, so we can join your meetings and reviews.",
  },
  {
    title: "24/7 Support After Launch",
    description:
      "Support is available 24/7, and every request gets a reply within 24 hours through our ticket portal or email.",
  },
  {
    title: "Security and Confidentiality",
    description:
      "Saasverse is ISO 27001 and Cyber Essentials Plus certified. We sign an NDA before we access your code or systems.",
  },
  {
    title: "Rated 5.0 on Clutch",
    description: (
      <>
        See what our clients say about working with us.{" "}
        <a
          href="https://clutch.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#003e95] font-semibold hover:underline"
        >
          Read our reviews
        </a>
        .
      </>
    ),
  },
];

const faqs = [
  {
    question: "What is application modernization?",
    answer:
      "It means updating older applications so they’re easier to change, cheaper to run and able to connect to newer systems. That can mean moving them to the cloud, upgrading the code or replacing them.",
  },
  {
    question: "How do I know if an application needs modernizing?",
    answer:
      "Warning signs include unsupported versions, slow changes, rising running costs, and only one person who understands the code. We start with an assessment to confirm.",
  },
  {
    question: "Do we have to rewrite the whole application?",
    answer:
      "Rarely. Many applications can be moved with small changes or rebuilt one part at a time. We only recommend a rewrite when the numbers support it.",
  },
  {
    question: "Which cloud platforms do you work with?",
    answer:
      "Mainly AWS and Microsoft Azure. We help you choose based on your current systems and team skills.",
  },
  {
    question: "Can you upgrade our .NET Framework applications?",
    answer:
      "Yes. We move .NET Framework and older .NET apps to modern .NET, one part at a time where needed.",
  },
  {
    question: "Will modernization cause downtime?",
    answer:
      "Most stages need a short cut-over window. We plan each one with you, usually outside business hours, and keep a rollback plan ready.",
  },
  {
    question: "Can you replace an old CRM with Salesforce?",
    answer:
      "Yes. As a Salesforce partner, we often replace custom CRMs and case-tracking tools with Salesforce and move the data across.",
  },
  {
    question: "Can you work on applications another team built?",
    answer:
      "Yes. We review the code and documentation, list the risks and then plan the work.",
  },
  {
    question: "How long does a modernization project take?",
    answer:
      "It depends on the number and size of the applications and the path chosen for each. You’ll get a timeline in the written scope after the assessment.",
  },
  {
    question: "What do you need from us to start?",
    answer:
      "Access to the code, a test environment if you have one, and time with the people who use and support the application.",
  },
  {
    question: "What does application modernization cost?",
    answer:
      "The cost depends on your requirements: the number and size of applications and the path chosen for each. We send you the cost in writing after the assessment.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you’ll get a reply within 24 hours.",
  },
];

const trustPoints = [
  "ISO 27001 Certified",
  "Cyber Essentials Plus",
  "Rated 5.0 on Clutch",
  "120+ Projects Delivered",
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Application Modernization Services",
  serviceType: "Application Modernization",
  provider: {
    "@type": "Organization",
    name: "Saasverse Pvt. Ltd.",
    url: "https://www.saasverse.in",
  },
  description:
    "Application modernization services including application assessment, cloud migration, .NET upgrades, refactoring, database modernization and application replacement.",
  areaServed: ["US", "UAE", "India"],
  url: "https://www.saasverse.in/application-modernization-services",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.saasverse.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Application Modernization Services",
      item: "https://www.saasverse.in/application-modernization-services",
    },
  ],
};

export default function ApplicationModernization() {
  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero */}
      <PageBanner2
        image="/images/banner/modernization.webp"
        title="Application Modernization Services"
        description="We update aging applications, move them to the cloud and rebuild the parts that hold your business back."
      />

     

      {/* What We Do */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-[#003e95]">
              Our Services
            </span>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              What We Do
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 font-bold text-[#003e95]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <div className="leading-7 text-gray-600">
                  {service.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Modernize */}
      <section
        id="how-we-modernize"
        className="bg-gray-50 py-16 md:py-20"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-[#003e95]">
              Our Approach
            </span>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              How We Modernize
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Not every application needs a rewrite. We pick one path for each
              application, based on its value, its condition and your budget.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modernizationPaths.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-7 shadow-sm"
              >
                <div className="mb-4 text-3xl font-bold text-blue-100">
                  0{index + 1}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs an Application Needs Modernizing */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Signs an Application Needs Modernizing
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {warningSigns.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 p-6"
              >
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How a Modernization Project Works */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              How a Modernization Project Works
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {projectSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-5 rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#003e95] text-lg font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="rounded-2xl bg-[#003e95] px-7 py-12 text-center text-white md:px-16">
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              What Application Modernization Costs
            </h2>
            <p className="mx-auto max-w-3xl leading-8 text-blue-50">
              The cost depends on your requirements: how many applications,
              their size and condition, the path chosen for each one, and the
              data involved. After the assessment, we send you a written scope
              with the cost and timeline.
            </p>
            <a
              href="#book-a-free-consultation"
              className="mt-7 inline-block rounded-md bg-white px-7 py-3 font-semibold text-[#003e95] transition hover:bg-gray-100"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Related Services
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map((service) => (
              <div
                key={service.title}
                className="rounded-xl bg-white p-7 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-5 leading-7 text-gray-600">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="font-semibold text-[#003e95] hover:underline"
                >
                  {service.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Saasverse */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Why Choose Saasverse for Application Modernization
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 p-7 transition hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 font-bold text-[#003e95]">
                  0{index + 1}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <div className="leading-7 text-gray-600">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-16 md:py-2">
        <div className="container mx-auto px-4">
         

          <div className="mx-auto max-w-4xl">
            <FaqReuseable title="Application Modernization FAQs" faqs={faqs} />
          </div>
        </div>
      </section>

    
            <ContactForm />
    </>
  );
}