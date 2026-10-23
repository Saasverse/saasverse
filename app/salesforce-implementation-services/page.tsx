import React from 'react'
import PageBanner from '../components/PageBanner'
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CTASection from '../components/Home/CTASection';
import HealthSolution from '../work-salesforce-health-cloud/HealthSolution';
import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';

import { Metadata } from 'next';
import Link from 'next/link';


const faqs = [
   {
    question: "How long does a Salesforce implementation take?",
    answer:
      "It depends on the clouds, the number of users, the integrations, and the amount of data. A setup with one cloud takes less time than a rollout across several clouds with several integrations. We give you a timeline in the written scope before work starts.",
  },
  {
    question: "What is included in your Salesforce implementation services?",
    answer:
      "Requirements and planning, configuration, custom development where needed, integrations, data migration, testing, go-live and support after launch. The written scope lists exactly what is included in your project.",
  },
  {
    question: "Can you migrate data from our old CRM or spreadsheets?",
    answer:
      "Yes. We map your fields, remove duplicates, move the records into Salesforce, and check the record counts after each load.",
  },
  {
    question: "We already use Salesforce. Can you fix or re-implement our org?",
    answer:
      "Yes. We review your current setup, keep what works, and rebuild what does not. We can also add new clouds to your existing org.",
  },
  {
    question: "Do you work on a fixed scope or time and materials?",
    answer:
      "Both. A fixed scope suits projects where the requirements are clear. Time and materials suits work where the requirements will change as you go. We agree on the model before work starts.",
  },
  {
    question: "What does a Salesforce implementation cost?",
    answer:
      "The cost depends on your requirements: the clouds, the number of users, the integrations, the data to migrate and the custom development involved. We send the cost in writing after the discovery call.",
  },
  {
    question: "Do you provide support after go-live?",
    answer: (
      <>
        Yes. We stay on after launch to fix issues and make changes. For ongoing
        support, we offer{" "}
        <a
          href="/salesforce-managed-services"
          className="font-semibold text-[#003e95] hover:underline"
        >
          Salesforce managed services
        </a>
        .
      </>
    ),
  },
  {
    question: "Will your team work in our time zone?",
    answer:
      "Our team is based in Jaipur, India, and works with clients in the US. Before work starts, we agree on overlapping hours, so we can join your meetings.",
  },
 
];

const benefits = [
  {
    title: "Requirements and Planning",
    description:
      "We talk to the people who will use Salesforce, map how your sales, service or operations work today, and agree on what the first release must include. You get a written scope before any build starts.",
  },
  {
    title: "Configuration",
    description:
      "We set up objects, fields, page layouts, user roles, permissions and automation with Flow, using standard Salesforce features wherever they do the job.",
  },
  {
    title: "Custom Development",
    description: (
      <>
        When standard features are not enough, our developers build what you need
        with Apex and Lightning Web Components. See our{" "}
        <a
          href="/salesforce-custom-development-services"
          className="text-[#003e95] font-semibold hover:underline"
        >
          Salesforce custom development services
        </a>
        .
      </>
    ),
  },
  {
    title: "Integrations",
    description: (
      <>
        We connect Salesforce to your ERP, website, marketing tools, billing or
        other systems, so data moves between them without manual copying. See our{" "}
        <a
          href="/salesforce-integration-services"
          className="text-[#003e95] font-semibold hover:underline"
        >
          Salesforce integration services
        </a>
        .
      </>
    ),
  },
  {
    title: "Data Migration",
    description:
      "We move your records from spreadsheets or your old CRM, remove duplicates, map fields and check the record counts after each load, so your team starts with data it can trust.",
  },
  {
    title: "Testing",
    description:
      "We test every process with your team before launching and fix what fails. Your users sign off before go-live.",
  },
  {
    title: "Go-Live and Handover",
    description:
      "We plan the launch date, move the setup to production, and walk your admins and key users through the new setup, with written documentation.",
  },
  {
    title: "Support After Launch",
    description: (
      <>
        After go-live, we fix issues and make changes as your team starts using
        the system. For ongoing help, see our{" "}
        <a
          href="/salesforce-managed-services"
          className="text-[#003e95] font-semibold hover:underline"
        >
          Salesforce managed services
        </a>
        .
      </>
    ),
  },
 
];

const salesforceClouds = [
  {
    name: "Sales Cloud",
    href: "/salesforce-sales-cloud",
  },
  {
    name: "Service Cloud",
    href: "/salesforce-service-cloud",
  },
  {
    name: "Marketing Cloud",
    href: "/salesforce-marketing-cloud",
  },
  {
    name: "Experience Cloud",
    href: "/experience-cloud",
  },
  {
    name: "Health Cloud",
    href: "/health-cloud-services",
  },
  {
    name: "Financial Services Cloud",
    href: "/financial-cloud-implementation-services",
  },
  {
    name: "Nonprofit Cloud",
    href: "/nonprofit-cloud",
  },
  {
    name: "CPQ",
    href: "/salesforce-cpq-implementation",
  },
  {
    name: "Field Service",
    href: "/field-service-lightning",
  },
  {
    name: "MuleSoft",
    href: "/mulesoft-development",
  },
  {
    name: "Salesforce AI",
    href: "/salesforce-ai-company",
  },
];



const orgOptions = [
  {
    number: "01",
    title: "New to Salesforce",
    description:
      "If you are moving from spreadsheets or another CRM, we plan the setup from scratch and migrate your data.",
  },
  {
    number: "02",
    title: "Already Using Salesforce",
    description:
      "If your org was set up years ago and no longer fits how you work, we review it, keep what works and rebuild what does not. We also roll out new clouds in an existing org.",
  },
];

const reasons = [
  {
    number: "01",
    title: "Salesforce Partner with Navigator Expert Status",
    description:
      "Salesforce gives Navigator Expert status to partners based on certified experts, completed projects and customer feedback.",
  },
  {
    number: "02",
    title: "50+ Certified Salesforce Experts",
    description:
      "Consultants, developers and architects from the same team work on your project.",
  },
  {
    number: "03",
    title: "120+ Projects for 40+ Clients",
    description:
      "We have delivered 120+ projects for 40+ clients across 19 countries.",
  },
  {
    number: "04",
    title: "US Time-Zone Overlap",
    description:
      "Our team is based in Jaipur, India. We agree to overlap working hours with your team, so we can join your meetings.",
  },
  {
    number: "05",
    title: "Security and Confidentiality",
    description:
      "Saasverse is ISO 27001 and Cyber Essentials Plus certified. We sign an NDA before we access your systems.",
  },
];

export const metadata: Metadata = {
  title: "Salesforce Implementation Services | Saasverse",
  description:
    "Salesforce implementation by a certified Salesforce Partner: setup, data migration, integrations and testing for US businesses. Book a free consultation.",

    alternates: { canonical: 'https://www.saasverse.in/salesforce-implementation-services' },
};
const page = () => {
  return (
    <>
       <PageBanner
                 image="/images/banner/banner002.webp"
                 title="Salesforce Implementation Services"
                 description="We set up Salesforce for your business, from requirements to go-live: configuration, data migration, integrations, testing and support after launch."
               />

                <SalesforceServiceReuseable
      heading=" What Our Salesforce Implementation Covers"
      benefits={benefits}
    />

    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
            Our Salesforce Expertise
          </span>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Salesforce Clouds We Implement
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            We implement Salesforce clouds and products that help businesses
            streamline operations, improve customer experiences, and drive
            sustainable growth.
          </p>
        </div>

        {/* Salesforce Cloud Links */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {salesforceClouds.map((cloud) => (
            <Link
              key={cloud.name}
              href={cloud.href}
              className="group inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#003e95] hover:bg-[#003e95] hover:text-white hover:shadow-lg sm:px-6 sm:py-3.5 sm:text-base"
            >
              <span>{cloud.name}</span>

              <svg
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-7-7 7 7-7 7"
                />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>

     <HealthSolution
            title=" How a Salesforce Implementation Works"
           highlight=""
            description=""
            image="/images/websiteimages/23.webp"
            imageAlt="Salesforce Healthcare Cloud Solution"
            solutions={[
              {
                title: 'Discovery Call',
                description:
                  'Tell us which clouds you need, how many users will work in Salesforce, and which systems it must connect to. We sign an NDA first if you want one. ',
              },
              {
                title: 'Scope and Plan',
                description:
                  'We write down what will be built, in what order, the timeline, and the cost. You review and approve it. ',
              },
              {
                title: 'Build',
                description:
                  'We customize Salesforce to match your specific workflows, not the other way around. Our team uses both point-and-click tools and advanced coding (Apex) to deliver a solution that fits perfectly with your goals.',
              },
              {
                title: 'Data and Testing',
                description:
                  'We migrate your data and test each process with your team. ',
              },
              {
                title: 'Build',
                description:
                  'We launch, hand over the documentation, and stay on for support after launch. ',
              },
             
            ]}
          />


           {/* New Org or Existing Org */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              Salesforce Implementation
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              New Org or Existing Org
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              Whether you are implementing Salesforce for the first time or
              improving an existing org, we tailor the approach to your needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {orgOptions.map((option) => (
              <div
                key={option.number}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#003e95]/40 hover:shadow-xl sm:p-9"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#003e95]/10 text-lg font-bold text-[#003e95] transition-colors duration-300 group-hover:bg-[#003e95] group-hover:text-white">
                  {option.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-gray-900 sm:text-2xl">
                  {option.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-gray-600">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Cost */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#003e95] px-6 py-10 text-white shadow-xl sm:px-12 sm:py-14 lg:px-16">
            {/* Decorative background elements */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10"
            />

            <div className="relative z-10 max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
                Transparent Planning
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                What It Costs to Implement Salesforce
              </h2>

              <p className="mt-6 text-base leading-8 text-white/85 sm:text-lg">
               The cost depends on your requirements: the clouds you need, the number of users, the integrations, the amount of data to migrate, and how much custom development is involved.
              </p>

              <p className="mt-4 text-base leading-8 text-white/85 sm:text-lg">
                 After the discovery call, we sent a written scope with the cost and timeline. You can choose a fixed-scope project or time and materials.
              </p>

              <Link
                href="/contact#contact-form"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white px-7 py-4 text-center text-sm font-semibold text-[#003e95] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 sm:w-auto sm:text-base"
              >
                Book a Free Consultation
                <svg
                  className="ml-2 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-7-7 7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Saasverse */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              The Saasverse Advantage
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Why Choose Saasverse for Salesforce Implementation
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              Work with a team of certified Salesforce professionals focused
              on building solutions around your business requirements.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#003e95]/40 hover:shadow-lg sm:p-7"
              >
                <span className="text-sm font-bold tracking-widest text-[#003e95]">
                  {reason.number}
                </span>

                <h3 className="mt-4 text-lg font-bold leading-snug text-gray-900 sm:text-xl">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                  {reason.description}
                </p>
              </div>
            ))}

            {/* Clutch Reviews */}
            <div className="flex flex-col items-start rounded-2xl border border-[#003e95]/20 bg-blue-50/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
              <span className="text-sm font-bold tracking-widest text-[#043e8f]">
                06
              </span>

              <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                Rated 5.0 on Clutch
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Read what clients say about working with us.
              </p>

              <a
                href="https://clutch.co/profile/saasverse-salesforce-consulting-partner"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center font-semibold text-[#003e95] hover:underline"
              >
                Read our reviews
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17 17 7M8 7h9v9"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Hiring Links */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center sm:p-8">
            <p className="text-base leading-7 text-gray-700 sm:text-lg">
              Need people inside your own team instead of a project?
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <Link
                href="/hire-salesforce-consultants"
                className="font-semibold text-[#003e95] hover:underline"
              >
                Hire Salesforce Consultants
                <span aria-hidden="true"> ↗</span>
              </Link>

              <Link
                href="/hire-salesforce-developers"
                className="font-semibold text-[#003e95] hover:underline"
              >
                Hire Salesforce Developers
                <span aria-hidden="true"> ↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>


          <CertificateSlider/>

          <OurPartners/>

           <FaqReuseable title="Salesforce Implementation FAQs" faqs={faqs} />
             <CTASection/>
           <ContactForm/>
    </>
  )
}

export default page