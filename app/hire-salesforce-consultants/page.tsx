import React from 'react';
import PageBanner from '../components/PageBanner';
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CTASection from '../components/Home/CTASection';
import HealthSolution from '../work-salesforce-health-cloud/HealthSolution';
import CertificateSlider from '../components/Home/CertificateSlider';
import OurPartners from '../components/Home/OurPartners';
import FaqReuseable from '../components/FaqReuseable';
import ContactForm from '../components/ContactForm';
import WhyChooseUs from '../about/WhyChooseUs';
import { Metadata } from 'next';
import Link from 'next/link';
import HiringModels from '../components/HiringModels';
import HowHiringWorks from '../components/HowHiringWorks';
import ConsultantOverview from '../components/ConsultantOverview';

const faqs = [
  {
    question:
      'Why hire a Salesforce consultant instead of a full-time employee?',
    answer:
      'A full-time hire can take months to find, and costs the same in busy and quiet months. A Salesforce consultant for hire can start sooner, and you can switch between hourly, part-time and full-time as your workload changes.',
  },
  {
    question: 'How quickly can a Salesforce consultant start?',
    answer:
      'It depends on the skills you need. Many engagements start within a few days. A specialist profile can take a few weeks. We give you a start date when we send profiles.',
  },
  {
    question: 'Can I interview the consultant before hiring?',
    answer:
      'Yes. You talk to the consultants we suggest, and you decide who joins your team.',
  },
  {
    question: 'Which hiring model should I choose?',
    answer:
      'Hourly works for short reviews and one-off fixes. A part-time dedicated consultant works for a steady flow of requests. A full-time consultant or team works for rollouts and big clean-ups. If you’re not sure, start small and add hours later.',
  },
  {
    question: 'Will the consultant work in my time zone?',
    answer:
      'Yes. Our team is in Jaipur, India, and works with clients in the US. Before work starts, we agree on the hours your consultant will overlap with your team, so they can join your meetings.',
  },
  {
    question: 'Which Salesforce certifications do your consultants hold?',
    answer:
      'Our team holds Salesforce certifications across admin, consultant and specialist tracks, covering platform administration, Sales Cloud, Service Cloud, CPQ, Experience Cloud and Field Service. When we send profiles, each one lists that consultant’s own certifications.',
  },
  {
    question:
      'Can a hired consultant work alongside our admin or another partner?',
    answer:
      'Yes. Many clients use our consultants to add capacity next to their own admin team or an existing partner, without handing over the whole account.',
  },
  {
    question: 'Is my org data safe with a hired consultant?',
    answer:
      'We sign an NDA before we look at your org. Saasverse is ISO 27001 and Cyber Essentials Plus certified, and you decide which systems and data the consultant can access.',
  },
];
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
const benefits = [
  {
    title: 'Clean Up an Org That Has Grown Messy',
    description:
      'Years of quick fixes leave behind duplicate fields, old workflow rules and reports nobody trusts. Your consultant goes through the org, lists what is broken and what is risky, and fixes the problems that hurt your teams most first.',
  },
  {
    title: 'Run a New Salesforce Rollout',
    description: (
      <>
        {' '}
        Setting up Sales Cloud, Service Cloud or another cloud for the first
        time? Your consultant runs the requirement sessions, designs the setup
        and works with developers to build it. If you would rather hand us the
        whole project at a fixed scope, see our{' '}
        <Link
          href="https://www.saasverse.in/salesforce-implementation-services"
          className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
        >
          {' '}
          Salesforce implementation services.
        </Link>
      </>
    ),
  },
  {
    title: 'Set Up Processes and Automation',
    description:
      'Think lead routing, approvals, case escalation or renewal reminders. Your consultant maps how the work happens today, then builds it with Flow and standard Salesforce features before writing any code.',
  },
  {
    title: 'Build Reports Your Managers Use',
    description:
      'Your consultant builds reports around the questions your managers ask every week, and checks the numbers with finance or operations before they go on a dashboard.',
  },
  {
    title: 'Work with Developers and Other Systems',
    description: (
      <>
        {' '}
        When a task needs Apex code, an integration or a data migration, your
        consultant writes the requirement and works with the developers, whether
        they are yours or{' '}
        <Link
          href="https://www.saasverse.in/hire-salesforce-developers"
          className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
        >
          {' '}
          our Salesforce developers.{' '}
        </Link>{' '}
         For connecting other systems, see our{' '}
        <Link
          href="https://www.saasverse.in/salesforce-integration-services"
          className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
        >
          {' '}
          Salesforce integration services.{' '}
        </Link>{' '}
        {' '}
      </>
    ),
  },
  {
    title: 'Fill a Gap in Your Team',
    description:
      'Your admin has left, your partner has moved on, or a Salesforce release is coming and nobody has time to test it. A consultant can step in for a few weeks or a few months while you plan the long-term setup.',
  },
];
export const metadata: Metadata = {
  title: 'Hire Salesforce Consultants in India | Saasverse',
  description:
    'Hire certified Salesforce consultants in India. Hourly, part-time or full-time, with US business hours overlap. Book a free consultation.',
  alternates: {
    canonical: 'https://www.saasverse.in/hire-salesforce-consultants',
  },
};

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/hirebanner.webp"
        title="Hire Salesforce Consultants in India"
        description="Hire certified Salesforce consultants who join your team by the hour, part time or full time. They work in your tools, join your meetings and report to you."
      />

      <SalesforceServiceReuseable
        heading="What a Hired Salesforce Consultant Can Do for You"
        benefits={benefits}
      />

      <HiringModels />
      <HowHiringWorks />
      {/* <HealthSolution
        title="What Our Salesforce Consultants Deliver  "
        highlight=""
        description=""
        image="/images/websiteimages/4.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Salesforce Implementation and Customization',
            description:
              'Tailor Salesforce to your specific needs and workflows to optimize your sales processes.',
          },
          {
            title: 'Salesforce Integration',
            description:
              'Seamlessly integrate Salesforce with your existing business systems to eliminate data silos and improve data flow.',
          },
          {
            title: 'Custom Salesforce Development ',
            description:
              'Develop custom applications to extend Salesforce functionality and automate complex tasks.',
          },
          {
            title: 'Flexible Hiring Models  ',
            description:
              'Hourly Engagement / Part-Time Dedicated Consultant / Full-Time Dedicated Team',
          },
        ]}
      /> */}
      <ConsultantOverview />
      {/* <WhyChooseUs /> */}
      <CertificateSlider />

      <OurPartners />
             <FaqReuseable
        title="Hiring Salesforce Consultants: FAQs"
        faqs={faqs}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      {/* <FaqReuseable title="Hiring Salesforce Consultants: FAQs " faqs={faqs} /> */}
      <CTASection />
      <ContactForm />
    </>
  );
};

export default page;
