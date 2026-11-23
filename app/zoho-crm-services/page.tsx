import React from "react";
import PageBanner2 from "../components/PageBanner2";
import FaqReuseable from "../components/FaqReuseable";
import ContactForm from "../components/ContactForm";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zoho CRM Services & Implementation | Saasverse",
  description:
    "Zoho CRM implementation: setup, workflow and Blueprint automation, integrations, data migration and training, plus honest advice on Zoho vs Salesforce.",
  alternates: {
    canonical: "https://www.saasverse.in/zoho-crm-services",
  },
  openGraph: {
    title: "Zoho CRM Services & Implementation | Saasverse",
    description:
      "Zoho CRM implementation: setup, workflow and Blueprint automation, integrations, data migration and training, plus honest advice on Zoho vs Salesforce.",
    url: "https://www.saasverse.in/zoho-crm-services",
    siteName: "Saasverse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoho CRM Services & Implementation | Saasverse",
    description:
      "Zoho CRM implementation: setup, workflow and Blueprint automation, integrations, data migration and training, plus honest advice on Zoho vs Salesforce.",
  },
};

const whatWeDo = [
  {
    title: "Setup and Customization",
    description:
      "We set up modules, fields, layouts and user roles around your sales and service process.",
  },
  {
    title: "Process Automation",
    description:
      "We build workflow rules and Blueprint processes, so deals and requests follow the right steps every time.",
  },
  {
    title: "Integrations",
    description:
      "We connect Zoho CRM to Google Workspace, Microsoft 365, accounting tools, your website forms and other systems.",
  },
  {
    title: "Zoho Apps",
    description:
      "We connect Zoho CRM with Zoho Books, Zoho Desk and other Zoho apps you use.",
  },
  {
    title: "Data Migration",
    description:
      "We move contacts, accounts, deals and history from spreadsheets or another CRM, and check the counts after each load.",
  },
  {
    title: "Reports and Dashboards",
    description:
      "We build the reports and dashboards your managers check every week.",
  },
  {
    title: "Zia, Zoho’s AI",
    description:
      "We set up Zia for lead scoring, predictions and suggestions where your data supports it.",
  },
  {
    title: "Training and Support",
    description:
      "We train each team on what they use, and stay on to fix issues and make changes.",
  },
];

const crmComparison = [
  {
    title: "Zoho CRM",
    description:
      "Often a good fit for small and mid-sized teams that want a CRM that is quick to set up and works with other Zoho apps.",
  },
  {
    title: "Salesforce",
    description: (
      <>
        Often a better fit for larger teams, complex processes, many integrations
        or industry needs. See our{" "}
        <Link
          href="/salesforce-consulting-services"
          className="text-[#003e95] font-semibold hover:underline"
        >
          Salesforce consulting services
        </Link>
        .
      </>
    ),
  },
];

const signs = [
  {
    title: "Deals in Spreadsheets",
    description:
      "Your team tracks the real pipeline outside the CRM.",
  },
  {
    title: "Every Rep Works Differently",
    description:
      "There’s no set process, so reports don’t mean much.",
  },
  {
    title: "Duplicate Contacts",
    description:
      "The same customer appears several times with different details.",
  },
  {
    title: "Tools Don’t Talk",
    description:
      "Email, accounting and support tools aren’t connected to the CRM.",
  },
  {
    title: "Low Use",
    description:
      "The CRM is set up, but the team avoids it.",
  },
  {
    title: "Outgrowing Your CRM",
    description:
      "Your current CRM can’t keep up as the team grows.",
  },
];

const projectSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "Tell us how your team sells and serves customers, and which tools you use. If you’d like an NDA first, we’ll sign one.",
  },
  {
    number: "02",
    title: "Process Mapping",
    description:
      "We map your sales and service steps and agree what the CRM should do.",
  },
  {
    number: "03",
    title: "Scope and Plan",
    description:
      "We send you a written scope with the timeline and cost. Nothing starts until you approve it.",
  },
  {
    number: "04",
    title: "Set Up and Connect",
    description:
      "We set up Zoho CRM, automation and integrations, and show you progress at regular reviews.",
  },
  {
    number: "05",
    title: "Move Data and Test",
    description:
      "We move your data, check the counts and test with your team.",
  },
  {
    number: "06",
    title: "Train and Launch",
    description:
      "We train each team, go live and stay on to fix issues after launch.",
  },
];

const relatedServices = [
  {
    title: "Salesforce Consulting",
    description:
      "Help choosing between Zoho and Salesforce. Explore Salesforce consulting.",
    href: "/salesforce-consulting-services",
    linkText: "Explore Salesforce Consulting",
  },
  {
    title: "Salesforce Sales Cloud",
    description:
      "A sales CRM for larger teams. Explore Sales Cloud services.",
    href: "/salesforce-sales-cloud",
    linkText: "Explore Sales Cloud Services",
  },
  {
    title: "Shopify Development",
    description:
      "Connect your online store to your CRM. Explore Shopify development.",
    href: "/shopify-development-services",
    linkText: "Explore Shopify Development",
  },
];

const whyChooseUs = [
  {
    title: "One Team for Your Systems",
    description:
      "Our CRM consultants work on both Zoho and Salesforce, so the advice you get is about your business, not about one product.",
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
    question: "What is Zoho CRM?",
    answer:
      "Zoho CRM is a customer relationship management app from Zoho for managing leads, deals, contacts and customer service, with automation and reports.",
  },
  {
    question: "What do Zoho CRM implementation services include?",
    answer:
      "Setup and customization, process automation with workflow rules and Blueprint, integrations, data migration, reports, training and support.",
  },
  {
    question: "Should we choose Zoho CRM or Salesforce?",
    answer:
      "Zoho often suits small and mid-sized teams that want a quick setup. Salesforce often suits larger teams, complex processes and many integrations. We work with both and will tell you which fits.",
  },
  {
    question: "Can Zoho CRM connect to Google Workspace or Microsoft 365?",
    answer:
      "Yes. We connect Zoho CRM to Google Workspace or Microsoft 365, so emails and meetings show on the right records.",
  },
  {
    question: "Can you move our data from another CRM or spreadsheets?",
    answer:
      "Yes. We move contacts, accounts, deals and history, remove duplicates and check the counts after each load.",
  },
  {
    question: "What is Blueprint in Zoho CRM?",
    answer:
      "Blueprint is Zoho CRM’s tool for setting the steps a deal or request must follow, with the fields and approvals needed at each step.",
  },
  {
    question: "What is Zia?",
    answer:
      "Zia is Zoho’s AI assistant. In Zoho CRM it can score leads, predict outcomes and suggest next steps, when there is enough data.",
  },
  {
    question: "Do you train our team?",
    answer:
      "Yes. We run training for each team on what they use, plus admin training for the people who will manage the CRM.",
  },
  {
    question: "Can you fix a Zoho CRM setup someone else built?",
    answer:
      "Yes. We review the setup, clean up what doesn’t work and document how it runs.",
  },
  {
    question: "How long does a Zoho CRM implementation take?",
    answer:
      "It depends on the number of users, the automation and the integrations involved. You’ll get a timeline in the written scope before any work starts.",
  },
  {
    question: "What does Zoho CRM implementation cost?",
    answer:
      "The cost depends on your requirements: users, automation, customization, data migration and integrations. We send you the cost in writing after the discovery call.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you’ll get a reply within 24 hours.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Zoho CRM Implementation Services",
  serviceType: "Zoho CRM Implementation and Consulting",
  description:
    "Zoho CRM implementation, setup, customization, workflow automation, Blueprint, integrations, data migration, reports, training and support.",
  provider: {
    "@type": "Organization",
    name: "Saasverse Pvt Ltd",
    url: "https://www.saasverse.in",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
    {
      "@type": "Country",
      name: "United States",
    },
    {
      "@type": "Country",
      name: "United Arab Emirates",
    },
  ],
  url: "https://www.saasverse.in/zoho-crm-services",
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
      name: "Zoho CRM Implementation Services",
      item: "https://www.saasverse.in/zoho-crm-services",
    },
  ],
};

const cardClass =
  "h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg";

const sectionHeading =
  "mb-4 text-3xl font-bold text-gray-900 md:text-4xl";

const sectionDescription =
  "mx-auto mb-10 max-w-3xl text-center text-gray-600";

export default function ZohoCrmServices() {
  return (
    <>
      {/* Structured Data */}
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
         image="/images/banner/zolo.jpg"
        title="Zoho CRM Implementation Services"
        description="We set up Zoho CRM around how your team sells and serves customers, and connect it to the tools you already use."
      />

    

      {/* What We Do */}
      <section id="what-we-do" className="scroll-mt-24 bg-gray-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className={`${sectionHeading} text-center`}>
            What We Do in Zoho CRM
          </h2>

          <p className={sectionDescription}>
            We configure Zoho CRM around your business processes, connect your
            systems and help your team get more from their CRM.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.map((item, index) => (
              <div key={index} className={cardClass}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 font-bold text-[#003e95]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900">
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

      {/* Zoho vs Salesforce */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className={`${sectionHeading} text-center`}>
            Zoho CRM or Salesforce?
          </h2>

          <p className={sectionDescription}>
            We work with both, so we’ll tell you which fits.
          </p>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {crmComparison.map((item, index) => (
              <div key={index} className={cardClass}>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
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

      {/* Signs Your CRM Needs Work */}
      <section className="bg-gray-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className={`${sectionHeading} text-center`}>
            Signs Your CRM Setup Needs Work
          </h2>

          <p className={sectionDescription}>
            These common problems can indicate that your CRM needs a review,
            better configuration or improved integrations.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {signs.map((item, index) => (
              <div key={index} className={cardClass}>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
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

      {/* Project Process */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className={`${sectionHeading} text-center`}>
            How a Zoho CRM Project Works
          </h2>

          <p className={sectionDescription}>
            A clear process helps your team understand what happens at each
            stage, from the first discussion through launch.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectSteps.map((step) => (
              <div key={step.number} className={cardClass}>
                <span className="mb-4 inline-flex rounded-lg bg-blue-50 px-4 py-2 text-lg font-bold text-[#003e95]">
                  {step.number}
                </span>

                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="bg-gray-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-12">
            <h2 className={`${sectionHeading} text-center`}>
              What Zoho CRM Implementation Costs
            </h2>

            <p className="text-center leading-8 text-gray-600">
              The cost depends on your requirements: the number of users and
              teams, how much automation and customization you need, the data
              to move and the tools to connect. After the discovery call, we
              send you a written scope with the cost and timeline. Zoho
              licenses are bought from Zoho and are separate from our work.
            </p>

            <div className="mt-8 text-center">
              <Link
                href="#book-a-free-consultation"
                className="inline-block rounded-full bg-[#003e95] px-7 py-3 font-semibold text-white transition hover:bg-[#002e70]"
              >
                Discuss Your Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className={`${sectionHeading} text-center`}>
            Related Services
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedServices.map((service, index) => (
              <div key={index} className={cardClass}>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mb-5 leading-7 text-gray-600">
                  {service.description}
                </p>

                <Link
                  href={service.href}
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
      <section className="bg-gray-50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className={`${sectionHeading} text-center`}>
            Why Choose Saasverse for Zoho CRM
          </h2>

          <p className={sectionDescription}>
            Work with a team that understands CRM implementation, integrations
            and the systems your business depends on.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <div key={index} className={cardClass}>
                <h3 className="mb-3 text-xl font-bold text-gray-900">
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

      {/* FAQs */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className={`${sectionHeading} text-center`}>
            Zoho CRM FAQs
          </h2>

          <p className={sectionDescription}>
            Find answers to common questions about Zoho CRM implementation,
            customization, integrations and support.
          </p>

          <FaqReuseable faqs={faqs} />
        </div>
      </section>

      {/* Consultation Form */}
      <section
        id="book-a-free-consultation"
        className="scroll-mt-24 bg-gray-50 px-4 py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className={sectionHeading}>
              Book a Free Consultation
            </h2>

            <p className="mx-auto max-w-3xl leading-7 text-gray-600">
              Tell us about your CRM requirements, current setup and business
              processes. Our team will discuss how Zoho CRM can fit your needs.
            </p>
          </div>

          <div className="mx-auto max-w-4xl rounded-3xl bg-white p-5 shadow-sm md:p-10">
            <ContactForm />

            <p className="mt-5 text-center text-sm text-gray-500">
              No spam. We’ll only use this to respond to your inquiry.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}