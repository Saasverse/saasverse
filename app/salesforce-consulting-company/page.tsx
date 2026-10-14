
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import PageBanner from '../components/PageBanner';
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CTASection from '../components/Home/CTASection';
import HealthSolution from '../work-salesforce-health-cloud/HealthSolution';
import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';

type Benefit = {
  title: string;
  description: ReactNode;
};

type Solution = {
  title: string;
  description: ReactNode;
};

const faqs = [
  {
    question: 'Why hire Salesforce Consultants?',
    answer:
      'Hiring Salesforce Consultants will make sure that your Salesforce implementation is perfectly aligned with your business goals and delivers maximum ROI.',
  },
  {
    question: 'How quickly can a consultant start?',
    answer:
      'Often within a few days of choosing your consultant. Specialist skills can take up to a few weeks to match.',
  },
  {
    question: 'Can I interview the consultant first?',
    answer:
      'Yes. Before onboarding, we share profiles of certified consultants who match your requirements. You interview them to make sure their skills and communication style fit your team before any work begins.',
  },
  {
    question: 'Will the consultant work in my time zone?',
    answer:
      'Yes. Our consultants work with US and UAE time-zone overlap, so they join your meetings and reply during your working day.',
  },
  {
    question: 'Are your consultants certified?',
    answer:
      'Yes. Our team holds Salesforce certifications including Administrator, Sales Cloud Consultant, Service Cloud Consultant, CPQ Specialist and Field Service Lightning Consultant.',
  },
  {
    question: 'What if the consultant is not the right fit?',
    answer:
      'We replace them at no extra cost and manage the handover, so your project keeps moving without disruption.',
  },
  {
    question: 'Should I hire a consultant or start a consulting project?',
    answer:
      'Hire a consultant when you need extra Salesforce skills inside your team. They can often start within a few days and work on the tasks you give them. Choose a consulting project when you want a fixed scope, timeline and price, and our team plans and delivers the work from start to finish.',
  },
  {
    question: 'Who owns the work the consultant does?',
    answer:
      'You do. All code, configuration and documentation created for your project belong to you, as set out in our service agreement. We also sign an NDA before we access your org.',
  },
  {
    question: 'Can we hire for a different number of hours?',
    answer:
      'Yes. Our standard plans are part-time at 80 hours a month and full-time at 160 hours a month. If your project needs a different level of support, we can arrange a custom block of hours.',
  },
  {
    question: 'Which Salesforce skills can you supply?',
    answer:
      'Admins, developers, consultants and architects across Sales Cloud, Service Cloud, Field Service, Experience Cloud, Marketing Cloud, Revenue Cloud, CPQ, Billing, Einstein and Agent Force.',
  },
  {
    question: 'Where are your consultants based?',
    answer:
      'Our consultants work from our office in Jaipur, India. We also have an office in Boston, US, and our team works with US and UAE time-zone overlap.',
  },
];

const benefits: Benefit[] = [
  {
    title: 'Strategy and Roadmaps',
    description: (
      <>
        Review your org, map your processes and plan what to build next. For a
        complete project, see our{' '}
        <a
          href="/salesforce-consulting-company"
          className="text-blue-600 hover:underline"
        >
          Salesforce consulting services.
        </a>
      </>
    ),
  },
  {
    title: 'Implementation and Customization',
    description: (
      <>
        Set up Sales, Service and Experience Cloud around the way your team
        actually works. Learn more about{' '}
        <a
          href="/salesforce-implementation-services"
          className="text-blue-600 hover:underline"
        >
          Salesforce implementation.
        </a>
      </>
    ),
  },
  {
    title: 'Integration',
    description: (
      <>
        Connect Salesforce to your ERP, marketing and finance tools with APIs
        or MuleSoft, so data moves without manual work. See our{' '}
        <a
          href="/salesforce-integration-services"
          className="text-blue-600 hover:underline"
        >
          Salesforce integration services.
        </a>
      </>
    ),
  },
  {
    title: 'Custom Development',
    description: (
      <>
        Apex, Lightning Web Components and automation for work standard
        Salesforce cannot do. Need coding capacity only?{' '}
        <a
          href="/hire-salesforce-developers"
          className="text-blue-600 hover:underline"
        >
          Hire Salesforce developers.
        </a>
      </>
    ),
  },
  {
    title: 'Data Migration',
    description:
      'Move data from old CRMs and spreadsheets into Salesforce, with field mapping, duplicate checks and testing before go-live.',
  },
  {
    title: 'Training and Adoption',
    description:
      'Train admins and end users and write simple guides, so the system you pay for gets used every day.',
  },
];

export const metadata: Metadata = {
  title: 'Salesforce Consulting Company | Saasverse',
  description:
    'Certified Salesforce consulting company delivering proven implementations for US, UAE & global clients from India. Get a free consultation today.',
  alternates: {
    canonical: 'https://www.saasverse.in/salesforce-consulting-company',
  },
};

export default function SalesforceConsultingCompanyPage() {
  const solutions: Solution[] = [
    {
      title: 'Certified Consultants',
      description:
        'Every consultant holds Salesforce certifications. Between them, our team covers Sales Cloud, Service Cloud, CPQ, Experience Cloud and Field Service.',
    },
    {
      title: 'Your Hours, Your Tools',
      description:
        'Our consultants work with US and UAE time-zone overlap, join your meetings and use your project tools, just like your own staff.',
    },
    {
      title: 'Flexible Arrangements',
      description:
        'Move between hourly, part-time and full-time as your needs change, without a long recruitment process.',
    },
    {
      title: 'Knowledge Stays With You',
      description:
        'Your consultant documents their work and trains your admins and users along the way, so your team never depends on one person.',
    },
    {
      title: 'Support After the Project',
      description: (
        <>
          When the main work is done, our team can look after your org through
          a{' '}
          <a
            href="/salesforce-support-and-maintenance-services"
            className="text-blue-600 hover:underline"
          >
            Salesforce support and maintenance plan.
          </a>
        </>
      ),
    },
    {
      title: 'Easy Replacement',
      description:
        'If a consultant is not the right fit, we replace them at no extra cost and manage the handover, so your work keeps moving.',
    },
  ];

  return (
    <>
      <PageBanner
        image="/images/banner/banner002.webp"
        title="Hire Salesforce Consultants Who Work as Part of Your Team"
        description="Add certified Salesforce consultants to your team by the hour, part-time or full-time. They work with US and UAE time-zone overlap, follow your process and can start within days. Rates start at $25 an hour."
      />

      <SalesforceServiceReuseable
        heading="What Our Salesforce Consultants Can Help With"
        benefits={benefits}
      />

      <HealthSolution
        title="Why Hire a Salesforce Consultant From Saasverse"
        highlight=" "
        description=""
        image="/images/websiteimages/4.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={solutions}
      />

      <CertificateSlider />

      <OurPartners />

      <FaqReuseable
        title="Hiring Salesforce Consultants: FAQs"
        faqs={faqs}
      />

      <CTASection />

      <ContactForm />
    </>
  );
}

