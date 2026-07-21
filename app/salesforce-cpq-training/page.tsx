import React from 'react';
import PageBanner from '../components/PageBanner';
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CTASection from '../components/Home/CTASection';
import ContactForm from '../components/ContactForm';
import LogoGrid from '../components/LogoGrid';
import TrainingContactForm from '../components/TrainingContactForm';

const benefits = [
  {
    title: "Module 1 - Introduction to Salesforce CPQ",
    description:
      "Overview of Salesforce CPQ and its role in sales quoting. Understanding the benefits and features of CPQ. Exploring the components and architecture of CPQ.",
  },
  {
    title: "Module 2 - Product Catalog and Configuration",
    description:
      "Setting up a product catalog and pricing rules. Defining product families, bundles, and options. Configuring product attributes and constraints. Creating guided selling and product selection rules.",
  },
  {
    title: "Module 3 - Pricing and Discounting",
    description:
      "Managing pricing strategies and price books. Configuring price rules and price matrices. Defining discount schedules and discounting methods. Implementing volume-based pricing and tiered pricing.",
  },
  {
    title: "Module 4 - Quote Creation and Configuration",
    description:
      "Creating and managing quotes in Salesforce CPQ. Customizing quote templates and document generation. Configuring quote line editor and quote line fields. Implementing quote approval processes.",
  },
  {
    title: "Module 5 - Quote Calculation and Pricing Rules",
    description:
      "Understanding quote line calculation and pricing rules. Configuring quote line editor and quote line fields. Implementing custom calculations and formula fields. Setting up pricing rules for complex pricing scenarios.",
  },
  {
    title: "Module 6 - Quote Amendments and Renewals",
    description:
      "Managing quote amendments and renewals in CPQ. Creating renewal opportunities and contracts. Implementing quote line amendments and updates. Tracking quote changes and versioning.",
  },
  {
    title: "Module 7 - Contract Lifecycle Management",
    description:
      "Utilizing contracts and contract management in CPQ. Creating and managing service contracts and subscriptions. Implementing contract amendments and renewals. Tracking contract terms, renewals, and terminations.",
  },
  {
    title: "Module 8 - Approval Processes and Workflow Automation",
    description:
      "Configuring approval processes for quotes and contracts. Implementing workflow rules and automation. Defining approval steps and escalation rules. Monitoring and managing approval history and notifications.",
  },
  {
    title: "Module 9 - Integration and Data Management",
    description:
      "Integrating Salesforce CPQ with other Salesforce products and systems. Implementing data synchronization and integration patterns. Managing data quality and data migration for CPQ. Utilizing data import/export tools and APIs.",
  },
  {
    title: "Module 10 - CPQ Administration and Customization",
    description:
      "Administering and customizing CPQ to meet business requirements. Configuring CPQ settings and preferences. Customizing page layouts, record types, and fields. Implementing CPQ-specific automation and workflows.",
  },
];

const partnerLogos = [
  '/images/traininglogoo/CapgeminiLogo.png',
  '/images/traininglogoo/CognizantLogo.png',
  '/images/traininglogoo/FujitsuLogo.png',
  '/images/traininglogoo/genpactlogo.png',
  '/images/traininglogoo/WileyEdgelogo.png',
  '/images/traininglogoo/ibmlogo.png',
  '/images/traininglogoo/HCLLogo.png',
  '/images/traininglogoo/TataLogo.png',
  '/images/traininglogoo/Ilearninglogo.png',
];
const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/trainingbanner.png"
        title="Salesforce CPQ Training & Certification"
        description="Ensure your business gets value from Salesforce"
      />

    <TrainingContactForm/>

      <SalesforceServiceReuseable
        heading="Salesforce CPQ Training"
        benefits={benefits}
      />
      
      <LogoGrid
        title="Elevating Training Through Accredited Collaborations"
        subtitle="Industry Partnerships"
        logos={partnerLogos}
      />
      <CTASection />
      <ContactForm />
    </>
  );
};

export default page;
