import React from 'react';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';

import { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '../components/PageBanner2';

const faqs = [
  {
    question: 'What AWS services do you offer?',
    answer:
      'Migration to AWS, cloud-native application development, infrastructure as code, CI/CD pipelines, security and cost reviews, monitoring, backups and ongoing support.',
  },
  {
    question: 'How do you move our applications to AWS?',
    answer:
      'We assess each application, choose a path for it (rehost, replatform, refactor, replace or retire), then move them in waves with a rollback plan for each one.',
  },
  {
    question: 'Will the migration cause downtime?',
    answer:
      'Most moves need a short cut-over window. We plan it with you, usually outside business hours, and keep a rollback plan ready.',
  },
  {
    question: 'What is infrastructure as code?',
    answer:
      'It means your AWS setup is written as code with tools like CloudFormation, the AWS CDK or Terraform, so it can be reviewed, versioned and rebuilt the same way every time.',
  },
  {
    question: 'Can you reduce our AWS bill?',
    answer:
      'Often, yes. We find idle and oversized resources, set up tagging and budgets, and show you where Savings Plans or Reserved Instances make sense.',
  },
  {
    question: 'How do you keep our AWS environment secure?',
    answer:
      'We review IAM roles, network rules, encryption and logging, follow AWS security guidance and fix what gives more access than it should. Your compliance team decides which standards you must meet.',
  },
  {
    question: 'Can you build serverless applications?',
    answer:
      'Yes. We build with Lambda, API Gateway, DynamoDB and other managed services when they suit the workload.',
  },
  {
    question: 'Can you set up CI/CD for our applications?',
    answer:
      'Yes. We set up pipelines that build, test and deploy automatically, with AWS tools or the tools your team already uses.',
  },
  {
    question: 'Can you take over an AWS setup another team built?',
    answer:
      'Yes. We review the accounts, security and costs, document what we find and then take over support.',
  },
  {
    question: 'How long does an AWS migration take?',
    answer:
      'It depends on the number and size of the applications. You’ll get a timeline in the written scope before any work starts.',
  },
  {
    question: 'What do AWS services cost?',
    answer:
      'The cost depends on your requirements: the applications, environments and support you need. Your AWS bill is separate. We send you our cost in writing after the discovery call.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. Support is available 24/7. Raise a ticket in our ticket portal or send us an email, and you’ll get a reply within 24 hours.',
  },
];

const awsServices = [
  {
    number: '01',
    title: 'Migration to AWS',
    description:
      'We move applications, databases and file shares to AWS, in waves, with a rollback plan for each one.',
  },
  {
    number: '02',
    title: 'Cloud-Native Applications',
    description:
      'We build new applications with services such as Lambda, ECS and Fargate, API Gateway, RDS and DynamoDB.',
  },
  {
    number: '03',
    title: 'Infrastructure as Code',
    description:
      'We set up your AWS environment with CloudFormation, the AWS CDK or Terraform, so it can be rebuilt the same way every time.',
  },
  {
    number: '04',
    title: 'CI/CD Pipelines',
    description:
      'We set up pipelines that build, test and deploy your applications automatically.',
  },
  {
    number: '05',
    title: 'Security and Access',
    description:
      'We review IAM roles, network rules, encryption and logging, and fix what gives more access than it should.',
  },
  {
    number: '06',
    title: 'Cost Reviews',
    description:
      'We find idle and oversized resources, set up tagging and budgets, and show you where Savings Plans make sense.',
  },
  {
    number: '07',
    title: 'Monitoring and Alerts',
    description:
      'We set up CloudWatch dashboards and alerts, so problems are caught before your users notice.',
  },
  {
    number: '08',
    title: 'Backups and Recovery',
    description:
      'We set up backups and test that you can restore them, with a recovery plan for your most important systems.',
  },
];

const migrationPaths = [
  {
    number: '01',
    title: 'Rehost',
    description:
      'Move the application as it is. The fastest route, often used first.',
  },
  {
    number: '02',
    title: 'Replatform',
    description:
      'Move it with small changes, such as a managed database instead of your own server.',
  },
  {
    number: '03',
    title: 'Refactor',
    description: (
      <>
        Rebuild parts of it to use cloud services. More work, but often cheaper
        to run. See our{' '}
        <Link
          href="/application-modernization-services"
          className="font-semibold text-[#003e95] hover:underline"
        >
          application modernization services
        </Link>
        .
      </>
    ),
  },
  {
    number: '04',
    title: 'Repurchase',
    description: (
      <>
        Replace it with a SaaS product, such as moving an old CRM to{' '}
        <Link
          href="/salesforce"
          className="font-semibold text-[#003e95] hover:underline"
        >
          Salesforce
        </Link>
        .
      </>
    ),
  },
  {
    number: '05',
    title: 'Retain or Relocate',
    description:
      'Keep it where it is for now, or move it to AWS with no changes to how it runs.',
  },
  {
    number: '06',
    title: 'Retire',
    description:
      'Switch it off. Most estates have applications nobody uses any more.',
  },
];

const warningSigns = [
  {
    number: '01',
    title: 'The Bill Keeps Growing',
    description:
      'Costs go up every month, and nobody knows which team or service is behind it.',
  },
  {
    number: '02',
    title: 'Built by Hand in the Console',
    description:
      'Nobody could rebuild your environment if they had to.',
  },
  {
    number: '03',
    title: 'Everyone Is an Admin',
    description:
      'Too many people and services have full access.',
  },
  {
    number: '04',
    title: 'Releases Are Manual',
    description:
      'Deployments need a person, a checklist and a quiet weekend.',
  },
  {
    number: '05',
    title: 'No Tested Backups',
    description:
      'Backups exist, but nobody has tried restoring one.',
  },
  {
    number: '06',
    title: 'Old Servers Waiting to Move',
    description:
      'Applications still run in your data center, and the move keeps slipping.',
  },
];

const projectSteps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'Tell us what runs where today and what you want to change. If you’d like an NDA first, we’ll sign one.',
  },
  {
    number: '02',
    title: 'Assessment',
    description:
      'We review your applications, AWS accounts, security and costs.',
  },
  {
    number: '03',
    title: 'Scope and Plan',
    description:
      'We send you a written scope with the timeline and cost. Nothing starts until you approve it.',
  },
  {
    number: '04',
    title: 'Build or Migrate in Waves',
    description:
      'We work one application or environment at a time and show you progress at regular reviews.',
  },
  {
    number: '05',
    title: 'Test and Cut Over',
    description:
      'We test each move, agree a cut-over time with you and keep a rollback plan ready.',
  },
  {
    number: '06',
    title: 'Handover and Support',
    description:
      'We hand over the code, diagrams and runbooks, and stay on to support you after go-live.',
  },
];

const relatedServices = [
  {
    title: 'Application Modernization',
    description:
      'Update older applications as you move them.',
    link: '/application-modernization-services',
    linkText: 'Explore application modernization',
  },
  {
    title: '.NET Development',
    description:
      'Build and upgrade .NET applications on AWS.',
    link: '/dotnet-development-services',
    linkText: 'Explore .NET development',
  },
  {
    title: 'Salesforce Integration Services',
    description:
      'Connect your AWS applications to Salesforce.',
    link: '/salesforce-integration-services',
    linkText: 'Explore integration services',
  },
];

const reasons = [
  {
    number: '01',
    title: 'One Team for Your Systems',
    description:
      'Our cloud, .NET and Salesforce developers work in one team, so applications on AWS and your CRM can share data.',
  },
  {
    number: '02',
    title: '120+ Projects for 40+ Clients',
    description:
      'We’ve delivered 120+ projects for 40+ clients across 19+ countries.',
  },
  {
    number: '03',
    title: 'US Time-Zone Overlap',
    description:
      'Our team is based in Jaipur, India. We agree on overlapping working hours, so we can join your meetings and reviews.',
  },
  {
    number: '04',
    title: '24/7 Support After Launch',
    description:
      'Support is available 24/7, and every request gets a reply within 24 hours through our ticket portal or email.',
  },
  {
    number: '05',
    title: 'Security and Confidentiality',
    description:
      'Saasverse is ISO 27001 and Cyber Essentials Plus certified. We sign an NDA before we access your code or systems.',
  },
  {
    number: '06',
    title: 'Rated 5.0 on Clutch',
    description:
      'See what our clients say about working with us.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AWS Cloud Services and Development',
  url: 'https://www.saasverse.in/services-aws',
  description:
    'AWS cloud services including migration to AWS, cloud-native applications, infrastructure as code, CI/CD pipelines, security reviews, cost reviews, monitoring, backups and ongoing support.',
  serviceType: 'AWS Cloud Services and Development',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.saasverse.in',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'AWS Cloud Services and Development',
      item: 'https://www.saasverse.in/services-aws',
    },
  ],
};

export const metadata: Metadata = {
  title: 'AWS Cloud Services & Development | Saasverse',
  description:
    'AWS cloud services: migration to AWS, cloud-native apps, infrastructure as code, CI/CD, security reviews, cost reviews and ongoing support.',
  alternates: {
    canonical: 'https://www.saasverse.in/services-aws',
  },
  openGraph: {
    title: 'AWS Cloud Services & Development | Saasverse',
    description:
      'AWS cloud services: migration to AWS, cloud-native apps, infrastructure as code, CI/CD, security reviews, cost reviews and ongoing support.',
    url: 'https://www.saasverse.in/services-aws',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWS Cloud Services & Development | Saasverse',
    description:
      'AWS cloud services: migration to AWS, cloud-native apps, infrastructure as code, CI/CD, security reviews, cost reviews and ongoing support.',
  },
};

const page = () => {
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

      {/* Hero Section */}

     {/* Hero Section */}
<PageBanner
  image="/images/banner/aws.webp"
  title="AWS Cloud Services and Development"
  description="We move applications to AWS, build new ones there and keep your setup secure and your bill under control."
/>

      {/* What We Do on AWS */}

      <section
        id="what-we-do"
        className="scroll-mt-24 bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              Our AWS Services
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              What We Do on AWS
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {awsServices.map((service) => (
              <div
                key={service.number}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#003e95]/40 hover:shadow-xl sm:p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#003e95]/10 text-sm font-bold text-[#003e95] transition-colors duration-300 group-hover:bg-[#003e95] group-hover:text-white">
                  {service.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Paths */}

      <section className="bg-[#fbfaf7] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              AWS Migration Strategy
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              How We Choose a Migration Path
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              AWS describes seven ways to handle each application in a
              migration, known as the 7 Rs. We decide one application at a
              time.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {migrationPaths.map((path) => (
              <div
                key={path.number}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#003e95]/40 hover:shadow-lg"
              >
                <span className="text-sm font-bold tracking-widest text-[#003e95]">
                  {path.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {path.title}
                </h3>

                <div className="mt-3 text-base leading-7 text-gray-600">
                  {path.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs Your AWS Setup Needs Work */}

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              Cloud Infrastructure
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Signs Your AWS Setup Needs Work
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {warningSigns.map((item) => (
              <div
                key={item.number}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#003e95]/40 hover:shadow-lg"
              >
                <span className="text-sm font-bold tracking-widest text-[#003e95]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How an AWS Project Works */}

      <section className="bg-[#fbfaf7] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              Our Working Process
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              How an AWS Project Works
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#003e95] text-sm font-bold text-white">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWS Cost Section */}

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#003e95] px-6 py-10 text-white shadow-xl sm:px-12 sm:py-14 lg:px-16">
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
                What AWS Services Cost
              </h2>

              <p className="mt-6 text-base leading-8 text-white/85 sm:text-lg">
                The cost depends on your requirements: how many applications
                and environments, how complex they are and whether you need
                ongoing support. After the discovery call, we send you a
                written scope with the cost and timeline. Your AWS bill is
                paid to AWS and is separate from our work.
              </p>

              <a
                href="#book-a-free-consultation"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white px-7 py-4 text-center text-sm font-semibold text-[#003e95] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 sm:w-auto sm:text-base"
              >
                Book a Free Consultation
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}

      <section className="w-full bg-[#fbfaf7] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              Explore More
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Related Services
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                <Link
                  href={service.link}
                  className="mt-5 inline-flex font-semibold text-[#003e95] hover:underline"
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

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003e95]">
              Why Choose Saasverse
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Why Choose Saasverse for AWS
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <div
                key={reason.number}
                className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7 ${
                  index === 5
                    ? 'border-[#003e95]/20 bg-blue-50/60'
                    : 'border-gray-200 bg-white hover:border-[#003e95]/40'
                }`}
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

                {index === 5 && (
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
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}

      <FaqReuseable
        title="AWS Cloud Services FAQs"
        faqs={faqs}
      />

   
            <ContactForm />
    </>
  );
};

export default page;