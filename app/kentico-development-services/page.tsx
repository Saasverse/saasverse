import React from "react";
import PageBanner2 from "../components/PageBanner2";
import FaqReuseable from "../components/FaqReuseable";
import ContactForm from "../components/ContactForm";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kentico Development Services | Saasverse",
  description:
    "Kentico development services: upgrades from Kentico Xperience 13 to Xperience by Kentico, new builds, custom widgets, integrations and support.",
  alternates: {
    canonical:
      "https://www.saasverse.in/kentico-development-services",
  },
  openGraph: {
    title: "Kentico Development Services | Saasverse",
    description:
      "Kentico development services: upgrades from Kentico Xperience 13 to Xperience by Kentico, new builds, custom widgets, integrations and support.",
    url: "https://www.saasverse.in/kentico-development-services",
    siteName: "Saasverse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kentico Development Services | Saasverse",
    description:
      "Kentico development services: upgrades from Kentico Xperience 13 to Xperience by Kentico, new builds, custom widgets, integrations and support.",
  },
};

const services = [
  {
    title: "Upgrades to Xperience by Kentico",
    description:
      "We move sites from Xperience 13 to Xperience by Kentico, one site at a time, and test every page and form.",
  },
  {
    title: "Upgrades From Older Versions",
    description:
      "Sites on Kentico 12 or older need a bigger move. We plan it step by step.",
  },
  {
    title: "New Kentico Builds",
    description:
      "We build new sites on Xperience by Kentico, from the content model to the pages your editors use.",
  },
  {
    title: "Page Builder Widgets",
    description:
      "We build widgets and sections your marketing team can use to build pages without a developer.",
  },
  {
    title: "Marketing Features",
    description:
      "We set up forms, email, contact management and personalization, so marketing can use them from day one.",
  },
  {
    title: "Integrations",
    description:
      "We connect Kentico to your CRM, including Salesforce, and to commerce and analytics tools.",
  },
  {
    title: "Content Migration",
    description:
      "We move content from another CMS into Kentico, with redirects to keep your search rankings.",
  },
  {
    title: "Support and Maintenance",
    description:
      "We apply hotfixes, fix issues and make small changes to live Kentico sites.",
  },
];

const warningSigns = [
  {
    title: "Still on Xperience 13",
    description:
      "Support ends on December 31, 2026, and the upgrade isn’t planned yet.",
  },
  {
    title: "On Kentico 12 or Older",
    description:
      "Your site is two versions behind the current platform.",
  },
  {
    title: "Editors Need a Developer",
    description:
      "Simple page changes need a developer and a release.",
  },
  {
    title: "Behind on Hotfixes",
    description:
      "Security hotfixes haven’t been applied.",
  },
  {
    title: "Leads Stay in Kentico",
    description:
      "Form submissions don’t reach your CRM.",
  },
  {
    title: "Nobody Knows the Code",
    description:
      "The original developer left, and nobody wants to touch the site.",
  },
];

const projectSteps = [
  {
    title: "Discovery Call",
    description:
      "Tell us about your site, your Kentico version and what you want to change. If you’d like an NDA first, we’ll sign one.",
  },
  {
    title: "Site Review",
    description:
      "We review your content, widgets, custom code and integrations.",
  },
  {
    title: "Scope and Plan",
    description:
      "We send you a written scope with the timeline and cost. Nothing starts until you approve it.",
  },
  {
    title: "Build or Upgrade",
    description:
      "We work in short cycles and show you working pages at regular reviews.",
  },
  {
    title: "Test Every Page",
    description:
      "We test pages, forms, integrations and redirects before anything goes live.",
  },
  {
    title: "Launch and Support",
    description:
      "We go live, hand over documentation and stay on to support you after launch.",
  },
];

const relatedServices = [
  {
    title: ".NET Development",
    description: "Kentico runs on .NET.",
    link: "/dotnet-development-services",
    linkText: "Explore .NET development",
  },
  {
    title: "Sitecore Development",
    description: "Another .NET CMS we build on.",
    link: "/sitecore-development-services",
    linkText: "Explore Sitecore development",
  },
  {
    title: "Salesforce Integration Services",
    description: "Send Kentico form leads to Salesforce.",
    link: "/salesforce-integration-services",
    linkText: "Explore integration services",
  },
];

const whyChooseUs = [
  {
    title: "One Team for Your Systems",
    description:
      "Our .NET developers work next to our Salesforce team, so your Kentico site and your CRM can share leads and data.",
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
    question: "What is Kentico?",
    answer:
      "Kentico is a content management and digital marketing platform built on .NET. Its current product is Xperience by Kentico.",
  },
  {
    question: "When does support for Kentico Xperience 13 end?",
    answer:
      "Kentico ends support for Xperience 13 on December 31, 2026. Sites keep running after that, but they no longer get fixes or support.",
  },
  {
    question: "What is Xperience by Kentico?",
    answer:
      "It’s Kentico’s current platform, which replaces Xperience 13. It gets regular updates, so you don’t face big version upgrades every few years.",
  },
  {
    question: "Can you upgrade our site from Xperience 13?",
    answer:
      "Yes. We review your site, then move content, widgets, forms and integrations to Xperience by Kentico and test every page before go-live.",
  },
  {
    question: "We’re on Kentico 12 or older. Can you help?",
    answer:
      "Yes. Older versions need a bigger move, and we plan it step by step so your site keeps running.",
  },
  {
    question: "Can editors build pages without a developer?",
    answer:
      "Yes. We build Page Builder widgets and sections your marketing team can use on their own.",
  },
  {
    question: "Can Kentico connect to Salesforce?",
    answer:
      "Yes. We send form leads and contact data from Kentico to Salesforce, so sales sees them straight away.",
  },
  {
    question: "Can you take over a Kentico site another partner built?",
    answer:
      "Yes. We review the code and setup, document what we find and then take over support.",
  },
  {
    question: "Do we need to buy Kentico licenses?",
    answer:
      "Yes. Kentico licenses are bought from Kentico. We can help you work out which edition you need.",
  },
  {
    question: "How long does a Kentico upgrade take?",
    answer:
      "It depends on the size of the site, custom code and integrations. You’ll get a timeline in the written scope before any work starts.",
  },
  {
    question: "What does Kentico development cost?",
    answer:
      "The cost depends on your requirements: your version, pages, widgets, custom code and integrations. We send you the cost in writing after the discovery call.",
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
  name: "Kentico Development Services",
  serviceType: "Kentico Development and Migration",
  provider: {
    "@type": "Organization",
    name: "Saasverse Pvt. Ltd.",
    url: "https://www.saasverse.in",
  },
  description:
    "Kentico development services including upgrades from Xperience 13 to Xperience by Kentico, new builds, custom widgets, integrations, content migration and support.",
  areaServed: ["US", "UAE", "India"],
  url: "https://www.saasverse.in/kentico-development-services",
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
      name: "Kentico Development Services",
      item: "https://www.saasverse.in/kentico-development-services",
    },
  ],
};

export default function KenticoDevelopmentPage() {
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
        image="/images/banner/kentico.webp"
        title="Kentico Development Services"
        description="We upgrade sites from Kentico Xperience 13 to Xperience by Kentico, and build and support Kentico sites."
      />

    

      {/* Xperience 13 End of Support */}
      <section
        id="kentico-13-end-of-support"
        className="scroll-mt-24 bg-gray-50 py-16 md:py-20"
      >
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-[#003e95]">
            Important Platform Update
          </span>

          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Kentico Xperience 13 Support Ends on December 31, 2026
          </h2>

          <p className="mb-5 leading-8 text-gray-600">
            After that date, Xperience 13 sites keep running, but they no longer
            get fixes or support from Kentico. Kentico’s upgrade path is
            Xperience by Kentico, its current platform, which gets regular
            updates.
          </p>

          <p className="leading-8 text-gray-600">
            Sites on Kentico 12 or older are even further behind. We review your
            site, plan the upgrade and move your content, widgets and
            integrations across.
          </p>

          <a
            href="#book-a-free-consultation"
            className="mt-7 inline-block rounded-md bg-[#003e95] px-7 py-3 font-semibold text-white transition hover:bg-[#002d70]"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

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

      {/* Signs Your Kentico Site Needs Work */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Signs Your Kentico Site Needs Work
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {warningSigns.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-6 transition hover:shadow-md"
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

      {/* How a Kentico Project Works */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              How a Kentico Project Works
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {projectSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-5 rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
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

      {/* What Kentico Development Costs */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="rounded-2xl bg-[#003e95] px-7 py-12 text-center text-white md:px-16">
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              What Kentico Development Costs
            </h2>

            <p className="mx-auto max-w-3xl leading-8 text-blue-50">
              The cost depends on your requirements: your current version, the
              number of pages and widgets, custom code and integrations. After
              the discovery call, we send you a written scope with the cost and
              timeline. Kentico licenses are bought from Kentico and are
              separate from our work.
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
      <section className="py-16 md:py-20">
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
                className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-lg"
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
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Why Choose Saasverse for Kentico Development
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-7 transition hover:shadow-lg"
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
      <section className="py-16 md:py-2">
        <div className="container mx-auto px-4">
        

          <div className="mx-auto max-w-4xl">
            <FaqReuseable title="Kentico Development FAQs" faqs={faqs} />
          </div>
        </div>
      </section>

   
            <ContactForm />
    </>
  );
}