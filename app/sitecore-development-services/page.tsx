import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import PageBanner2 from '../components/PageBanner2';
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import HealthSolution from '../work-salesforce-health-cloud/HealthSolution';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';

const pageUrl =
  'https://www.saasverse.in/sitecore-development-services';

const metaDescription =
  'Sitecore development services: new builds, upgrades, moves to SitecoreAI (formerly XM Cloud), headless Next.js front ends, integrations and support.';

export const metadata: Metadata = {
  title: 'Sitecore Development Services | Saasverse',
  description: metaDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Sitecore Development Services | Saasverse',
    description: metaDescription,
    url: pageUrl,
    siteName: 'Saasverse',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitecore Development Services | Saasverse',
    description: metaDescription,
  },
};

const faqs = [
  {
    question: 'What is Sitecore?',
    answer:
      'Sitecore is a content management and digital experience platform used by large companies for their websites. It includes Sitecore XP, Sitecore XM and SitecoreAI.',
  },
  {
    question: 'What is SitecoreAI?',
    answer:
      'SitecoreAI is Sitecore’s SaaS platform, renamed from XM Cloud in late 2025. Sitecore runs and updates the platform, and sites are built headless, usually with Next.js.',
  },
  {
    question: 'Should we move from Sitecore XP to SitecoreAI?',
    answer:
      'It depends on how much you use XP’s built-in personalization and analytics, how many custom features you have and when your contract ends. We help you compare the options.',
  },
  {
    question: 'Can you upgrade our Sitecore version?',
    answer:
      'Yes. We upgrade older XP and XM versions to a supported version and test every page, form and integration before go-live.',
  },
  {
    question: 'What is headless Sitecore?',
    answer:
      'In a headless setup, Sitecore manages the content and a separate front end, usually built with Next.js, shows it. Pages are often faster and easier to change.',
  },
  {
    question: 'Can Sitecore connect to Salesforce?',
    answer:
      'Yes. We send form leads and visitor data from Sitecore to Salesforce, so sales and marketing see the same people.',
  },
  {
    question: 'Can you move our content from another CMS to Sitecore?',
    answer:
      'Yes. We move pages, media and URLs, and set up redirects so you keep your search rankings.',
  },
  {
    question: 'Can you take over a Sitecore site another partner built?',
    answer:
      'Yes. We review the code, templates and hosting, document how it works and then take over support.',
  },
  {
    question: 'Do we need to buy Sitecore licenses?',
    answer:
      'Yes. Sitecore licenses are bought from Sitecore. We can help you work out which products you need.',
  },
  {
    question: 'How long does a Sitecore project take?',
    answer:
      'It depends on the number of sites, templates and integrations. You’ll get a timeline in the written scope before any work starts.',
  },
  {
    question: 'What does Sitecore development cost?',
    answer:
      'The cost depends on your requirements: sites, templates, your current version and integrations. We send you the cost in writing after the discovery call.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you’ll get a reply within 24 hours.',
  },
];

const benefits = [
  {
    title: 'New Sitecore Builds',
    description:
      'We build new sites on Sitecore, from the content model and templates to the components your editors use.',
  },
  {
    title: 'Moves to SitecoreAI',
    description:
      'We move sites from Sitecore XP or XM to SitecoreAI (formerly XM Cloud), Sitecore’s SaaS platform, one site at a time.',
  },
  {
    title: 'Sitecore Upgrades',
    description:
      'We upgrade older Sitecore XP and XM versions to a supported version and test every page and integration.',
  },
  {
    title: 'Headless Front Ends',
    description:
      'We build fast front ends with Next.js on top of Sitecore, delivered through Experience Edge.',
  },
  {
    title: 'Personalization',
    description:
      'We set up rules that show different content to different visitors, and test what works.',
  },
  {
    title: 'Integrations',
    description: (
      <>
        We connect Sitecore to your CRM, including{' '}
        <Link
          href="/salesforce-integration-services"
          className="font-semibold text-[#003e95] hover:underline"
        >
          Salesforce
        </Link>
        , and to commerce, search and analytics tools.
      </>
    ),
  },
  {
    title: 'Content Migration',
    description:
      'We move content from another CMS into Sitecore, with redirects so you keep your search rankings.',
  },
  {
    title: 'Support and Maintenance',
    description:
      'We fix issues, apply security patches and make small changes to live Sitecore sites.',
  },
];

const platformOptions = [
  {
    title: 'Sitecore XP',
    description:
      'The self-hosted platform with built-in personalization and analytics. Many large sites still run on it.',
  },
  {
    title: 'Sitecore XM',
    description:
      'The self-hosted content management part of Sitecore, without the built-in analytics.',
  },
  {
    title: 'SitecoreAI',
    description:
      'Sitecore’s SaaS platform, formerly XM Cloud. Sitecore runs the platform, and your site is built headless with Next.js.',
  },
];

const warningSigns = [
  {
    title: 'An Old Version',
    description:
      'Your Sitecore version is out of support, and upgrades keep getting pushed back.',
  },
  {
    title: 'Slow Pages',
    description:
      'Pages load slowly, and your search rankings suffer.',
  },
  {
    title: 'Editors Need a Developer',
    description:
      'Simple content changes need a developer and a release.',
  },
  {
    title: 'Paying for Features You Don’t Use',
    description:
      'You pay for XP’s personalization and analytics but don’t use them.',
  },
  {
    title: 'Hosting Takes Too Much Time',
    description:
      'Your team spends more time on servers than on the site.',
  },
  {
    title: 'No Plan for SitecoreAI',
    description:
      'You know a move is coming, but nobody has planned it.',
  },
];

const projectSteps = [
  {
    title: 'Discovery Call',
    description:
      'Tell us about your sites, your Sitecore version and what you want to change. We sign an NDA first.',
  },
  {
    title: 'Site Review',
    description:
      'We review your templates, components, integrations and hosting.',
  },
  {
    title: 'Scope and Plan',
    description:
      'We send you a written scope with the timeline and cost. Nothing starts until you approve it.',
  },
  {
    title: 'Build in Short Cycles',
    description:
      'We build in short cycles and show you working pages at regular reviews.',
  },
  {
    title: 'Test Every Page',
    description:
      'We test pages, forms, integrations and redirects before anything goes live.',
  },
  {
    title: 'Launch and Support',
    description:
      'We go live, hand over documentation and stay on to support you after launch.',
  },
];

const relatedServices = [
  {
    title: '.NET Development',
    description:
      'Sitecore XP and XM run on .NET. Explore .NET development.',
    href: '/dotnet-development-services',
    linkText: 'Explore .NET development',
  },
  {
    title: 'Kentico Development',
    description:
      'Another .NET CMS we build on. Explore Kentico development.',
    href: '/kentico-development-services',
    linkText: 'Explore Kentico development',
  },
  {
    title: 'Salesforce Integration Services',
    description:
      'Send form leads and visitor data to Salesforce. Explore integration services.',
    href: '/salesforce-integration-services',
    linkText: 'Explore integration services',
  },
];

const reasons = [
  {
    title: 'One Team for Your Site and Your Systems',
    description:
      'Our .NET developers and front-end developers work next to our Salesforce team, so your Sitecore site and your CRM can share data.',
  },
  {
    title: '120+ Projects for 40+ Clients',
    description:
      'We’ve delivered 120+ projects for 40+ clients across 19+ countries.',
  },
  {
    title: 'US Time-Zone Overlap',
    description:
      'Our team is based in Jaipur, India. We agree on overlapping working hours, so we can join your meetings and reviews.',
  },
  {
    title: '24/7 Support After Launch',
    description:
      'Support is available 24/7, and every request gets a reply within 24 hours through our ticket portal or email.',
  },
  {
    title: 'Security and Confidentiality',
    description:
      'Saasverse is ISO 27001 and Cyber Essentials Plus certified. We sign an NDA before we access your code or systems.',
  },
  {
    title: 'Rated 5.0 on Clutch',
    description:
      'See what our clients say about working with us. Read our reviews.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sitecore Development Services',
  url: pageUrl,
  description: metaDescription,
  serviceType: 'Sitecore development',
  provider: {
    '@type': 'Organization',
    name: 'Saasverse Pvt. Ltd.',
    url: 'https://www.saasverse.in',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const cardClass =
  'h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg';

const sectionHeadingClass =
  'text-3xl font-bold leading-tight text-gray-900 sm:text-4xl';

const page = () => {
  return (
    <>
      {/* JSON-LD Schema */}
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

      {/* Hero */}
      <PageBanner2
        image="/images/banner/sitecoresaasverse.webp"
        title="Sitecore Development Services"
        description="We build, upgrade and move Sitecore sites, including moves from Sitecore XP to SitecoreAI."
      />

    

      {/* What We Do */}
      <section
        id="what-we-do"
        className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-0 text-center">
            <h2 className={sectionHeadingClass}>What We Do</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600">
              Sitecore development services covering new builds, platform
              upgrades, SitecoreAI moves, headless front ends, integrations and
              ongoing support.
            </p>
          </div>

          <SalesforceServiceReuseable
            heading=""
            benefits={benefits}
          />
        </div>
      </section>

      {/* Sitecore XP, XM or SitecoreAI */}
      <section className="bg-[#fbfaf7] px-5 py-16 sm:px-8 sm:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className={sectionHeadingClass}>
              Sitecore XP, XM or SitecoreAI?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {platformOptions.map((item) => (
              <div key={item.title} className={cardClass}>
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center leading-7 text-gray-700">
            We help you decide whether to upgrade where you are or move to
            SitecoreAI, based on your sites, your team and your contract dates.
          </p>
        </div>
      </section>

      {/* Signs Your Sitecore Site Needs Work */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className={sectionHeadingClass}>
              Signs Your Sitecore Site Needs Work
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {warningSigns.map((item) => (
              <div key={item.title} className={cardClass}>
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How a Sitecore Project Works */}
      <section className="bg-[#fbfaf7] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <HealthSolution
            title="How a Sitecore Project Works"
            highlight=""
            description="A clear process takes your project from the first discussion through development, testing and launch."
            image="/images/websiteimages/whyaws.webp"
            imageAlt="Sitecore development project process"
            solutions={projectSteps}
          />
        </div>
      </section>

      {/* What Sitecore Development Costs */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-gray-200 bg-[#fbfaf7] p-7 text-center sm:p-12">
            <h2 className={sectionHeadingClass}>
              What Sitecore Development Costs
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
              The cost depends on your requirements: how many sites and
              templates, your current version, whether you move to SitecoreAI
              and which systems the site connects to. After the discovery call,
              we send you a written scope with the cost and timeline. Sitecore
              licenses are bought from Sitecore and are separate from our work.
            </p>

            <Link
              href="/contact-us"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#003e95] px-8 py-3 font-semibold text-white transition hover:bg-[#002e70]"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-[#fbfaf7] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className={sectionHeadingClass}>Related Services</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map((service) => (
              <div key={service.title} className={cardClass}>
                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-5 inline-flex items-center font-semibold text-[#003e95] hover:underline"
                >
                  {service.linkText}
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Saasverse */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className={sectionHeadingClass}>
              Why Choose Saasverse for Sitecore Development
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className={cardClass}>
                <h3 className="text-xl font-bold text-gray-900">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {reason.description}
                </p>

                {reason.title === 'Rated 5.0 on Clutch' && (
                  <a
                    href="https://clutch.co/profile/saasverse-salesforce-consulting-partner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center font-semibold text-[#003e95] hover:underline"
                  >
                    Read our reviews
                    <span className="ml-2" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqReuseable
        title="Sitecore Development FAQs"
        faqs={faqs}
      />

    
          <ContactForm />
    </>
  );
};

export default page;