import React from "react";
import PageBanner2 from "../components/PageBanner2";
import FaqReuseable from "../components/FaqReuseable";
import ContactForm from "../components/ContactForm";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ServiceNow Implementation & Consulting | Saasverse",
  description:
    "ServiceNow implementation and consulting: ITSM, ITOM, HR Service Delivery, Customer Service Management, upgrades and ServiceNow–Salesforce integration.",
  alternates: {
    canonical: "https://www.saasverse.in/servicenow",
  },
  openGraph: {
    title: "ServiceNow Implementation & Consulting | Saasverse",
    description:
      "ServiceNow implementation and consulting: ITSM, ITOM, HR Service Delivery, Customer Service Management, upgrades and ServiceNow–Salesforce integration.",
    url: "https://www.saasverse.in/servicenow",
    siteName: "Saasverse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ServiceNow Implementation & Consulting | Saasverse",
    description:
      "ServiceNow implementation and consulting: ITSM, ITOM, HR Service Delivery, Customer Service Management, upgrades and ServiceNow–Salesforce integration.",
  },
};

const services = [
  {
    title: "IT Service Management (ITSM)",
    description:
      "Incident, problem, change and request management, with a service catalog your employees can use.",
  },
  {
    title: "IT Operations Management (ITOM)",
    description:
      "Discovery, service mapping and event management, so you can see what runs where and what depends on it.",
  },
  {
    title: "HR Service Delivery (HRSD)",
    description:
      "HR cases, onboarding and an employee portal, so HR questions don’t live in email.",
  },
  {
    title: "Customer Service Management (CSM)",
    description:
      "Customer cases that connect your service team with the teams behind them.",
  },
  {
    title: "Security and Risk",
    description:
      "Security incident response, vulnerability response and integrated risk management.",
  },
  {
    title: "Strategic Portfolio Management (SPM)",
    description:
      "Demand, project and portfolio planning in one place.",
  },
  {
    title: "Employee Portal",
    description:
      "A single portal where employees find answers and raise requests for IT, HR and facilities.",
  },
  {
    title: "ServiceNow and Salesforce",
    description: (
      <>
        We connect ServiceNow and Salesforce, so customer cases and IT incidents
        move between them. See our{" "}
        <Link
          href="/salesforce-integration-services"
          className="font-semibold text-[#003e95] hover:underline"
        >
          Salesforce integration services
        </Link>
        .
      </>
    ),
  },
];

const warningSigns = [
  {
    title: "Upgrades Keep Slipping",
    description:
      "Every upgrade breaks custom code, so you stay on old versions.",
  },
  {
    title: "Too Much Custom Code",
    description:
      "Changes take weeks because the instance has moved far from the out-of-the-box setup.",
  },
  {
    title: "Employees Avoid the Portal",
    description:
      "People still email or call the service desk.",
  },
  {
    title: "A CMDB Nobody Trusts",
    description:
      "The configuration database is out of date, so impact analysis is guesswork.",
  },
  {
    title: "Separate Tools for Each Team",
    description:
      "IT, HR and facilities each use different tools for the same kind of request.",
  },
  {
    title: "ServiceNow and Salesforce Don’t Talk",
    description:
      "Customer issues are retyped from one system to the other.",
  },
];

const projectSteps = [
  {
    title: "Discovery Call",
    description:
      "Tell us which teams and processes you want to improve. If you’d like an NDA first, we’ll sign one.",
  },
  {
    title: "Process Review",
    description:
      "We map your current processes and compare them with ServiceNow’s out-of-the-box setup.",
  },
  {
    title: "Scope and Plan",
    description:
      "We send you a written scope with the timeline and cost. Nothing starts until you approve it.",
  },
  {
    title: "Build and Show",
    description:
      "We build in short cycles, staying close to the standard setup, and show you working features at regular reviews.",
  },
  {
    title: "User Testing",
    description:
      "Your teams test with real scenarios before anything goes live.",
  },
  {
    title: "Launch and Support",
    description:
      "We go live, train your teams and stay on to support you after launch.",
  },
];

const relatedServices = [
  {
    title: "Salesforce Integration Services",
    description:
      "Connect ServiceNow with Salesforce and other systems.",
    link: "/salesforce-integration-services",
    linkText: "Explore integration services",
  },
  {
    title: "Service Cloud",
    description:
      "Customer service on Salesforce.",
    link: "/salesforce-service-cloud",
    linkText: "Explore Service Cloud services",
  },
  {
    title: "MuleSoft Development",
    description:
      "APIs that connect many systems.",
    link: "/mulesoft-development-services",
    linkText: "Explore MuleSoft development",
  },
];

const whyChooseUs = [
  {
    title: "One Team for Your Systems",
    description:
      "Our ServiceNow developers work next to our Salesforce and integration team, so your IT, HR and customer systems can share data.",
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
          className="font-semibold text-[#003e95] hover:underline"
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
    question: "What is ServiceNow?",
    answer:
      "ServiceNow is a platform for managing work across IT, HR, customer service, security and other teams, with workflows, a service portal and a shared data model.",
  },
  {
    question: "Which ServiceNow products do you implement?",
    answer:
      "IT Service Management, IT Operations Management, HR Service Delivery, Customer Service Management, Security Operations, risk management and Strategic Portfolio Management.",
  },
  {
    question: "Can ServiceNow connect to Salesforce?",
    answer:
      "Yes. We connect the two, so customer cases in Salesforce and incidents or requests in ServiceNow move between them without retyping.",
  },
  {
    question: "Can you upgrade our ServiceNow instance?",
    answer:
      "Yes. We check custom code and integrations against the new release, run the upgrade in a sub-production instance first and fix what breaks.",
  },
  {
    question: "How often does ServiceNow release updates?",
    answer:
      "ServiceNow releases two major updates a year. Staying current keeps you supported and gives you new features.",
  },
  {
    question: "Can you clean up a heavily customized instance?",
    answer:
      "Yes. We find customizations that the standard setup now covers, move them back to standard features where we can and document what stays.",
  },
  {
    question: "Can you fix our CMDB?",
    answer:
      "Yes. We set up discovery and service mapping, clean the data and agree who keeps each part of it up to date.",
  },
  {
    question: "Can you take over an instance another partner built?",
    answer:
      "Yes. We review the instance, document what we find and then take over support and changes.",
  },
  {
    question: "Do we need to buy ServiceNow licenses?",
    answer:
      "Yes. ServiceNow licenses are bought from ServiceNow. We help you work out which products you need.",
  },
  {
    question: "How long does a ServiceNow implementation take?",
    answer:
      "It depends on the products, teams and integrations involved. You’ll get a timeline in the written scope before any work starts.",
  },
  {
    question: "What does ServiceNow implementation cost?",
    answer:
      "The cost depends on your requirements: the products, processes, teams and integrations. We send you the cost in writing after the discovery call.",
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
  name: "ServiceNow Implementation and Consulting",
  serviceType: "ServiceNow Implementation and Consulting",
  provider: {
    "@type": "Organization",
    name: "Saasverse Pvt. Ltd.",
    url: "https://www.saasverse.in",
  },
  description:
    "ServiceNow implementation and consulting services covering ITSM, ITOM, HR Service Delivery, Customer Service Management, upgrades and ServiceNow-Salesforce integration.",
  areaServed: ["US", "UAE", "India"],
  url: "https://www.saasverse.in/servicenow",
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
      name: "ServiceNow",
      item: "https://www.saasverse.in/servicenow",
    },
  ],
};

export default function ServiceNowPage() {
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

      {/* Hero Section */}
      <PageBanner2
        image="/images/banner/expbanner.webp"
        title="ServiceNow Implementation and Consulting"
        description="We set up, extend and upgrade ServiceNow for IT, HR and customer service teams, and connect it to Salesforce."
      />

     
      {/* What We Implement */}
      <section id="services" className="scroll-mt-24 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-[#003e95]">
              Our Services
            </span>

            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              What We Implement
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

      {/* Upgrades and Health Checks */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-[#003e95]">
            Platform Maintenance
          </span>

          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Upgrades and Health Checks
          </h2>

          <p className="mx-auto max-w-4xl leading-8 text-gray-600">
            ServiceNow releases two major updates a year. We review your
            instance, check custom code and integrations against the new
            release, run the upgrade in a sub-production instance first and fix
            what breaks. We also run health checks that find heavy
            customizations, slow scripts and unused configuration.
          </p>
        </div>
      </section>

      {/* Signs Your ServiceNow Instance Needs Work */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Signs Your ServiceNow Instance Needs Work
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {warningSigns.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 p-6 transition hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How a ServiceNow Project Works */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              How a ServiceNow Project Works
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

      {/* Implementation Cost */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="rounded-2xl bg-[#003e95] px-7 py-12 text-center text-white md:px-16">
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              What ServiceNow Implementation Costs
            </h2>

            <p className="mx-auto max-w-3xl leading-8 text-blue-50">
              The cost depends on your requirements: which products and
              processes, how many teams and integrations, and how much data
              needs to move. After the discovery call, we send you a written
              scope with the cost and timeline. ServiceNow licenses are bought
              from ServiceNow and are separate from our work.
            </p>

            <a
              href="#book-a-free-consultation"
              className="mt-7 inline-block rounded-md bg-white px-7 py-3 font-semibold text-[#003e95] transition hover:bg-gray-100"
            >
              Book a Free Consultation
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
                className="rounded-xl bg-white p-7 shadow-sm transition hover:shadow-lg"
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
              Why Choose Saasverse for ServiceNow
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 p-7 transition hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 font-bold text-[#003e95]">
                  {String(index + 1).padStart(2, "0")}
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
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          

          <div className="mx-auto max-w-4xl">
            <FaqReuseable title="ServiceNow Implementation FAQs" faqs={faqs} />
          </div>
        </div>
      </section>

 
            <ContactForm />
    </>
  );
}