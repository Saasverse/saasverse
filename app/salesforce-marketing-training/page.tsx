import React from 'react';
import PageBanner from '../components/PageBanner';
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CTASection from '../components/Home/CTASection';
import ContactForm from '../components/ContactForm';
import LogoGrid from '../components/LogoGrid';

const benefits = [
  {
    title: "Chapter 1 - Introduction to Salesforce Marketing Cloud",
    description:
      "Overview of Salesforce Marketing Cloud. Key features and benefits. Understanding the role of Marketing Cloud in digital marketing strategies.",
  },
  {
    title: "Chapter 2 - Email Marketing",
    description:
      "Creating and managing email campaigns. Designing responsive email templates. Personalization and dynamic content in emails. A/B testing and optimizing email performance. Email deliverability best practices.",
  },
  {
    title: "Chapter 3 - Journey Builder",
    description:
      "Understanding customer journeys. Creating and managing journeys in Journey Builder. Setting up entry and exit criteria. Using decision splits and engagement splits. Personalization and automation in customer journeys.",
  },
  {
    title: "Chapter 4 - Automation Studio",
    description:
      "Introduction to Automation Studio. Creating and scheduling automation. Data extraction and file import activities. Data filtering and segmentation. Advanced automation workflows.",
  },
  {
    title: "Chapter 5 - Mobile Marketing",
    description:
      "Mobile messaging channels (SMS, push notifications). Creating and managing mobile messages. Mobile message personalization and automation. Mobile message tracking and analytics.",
  },
  {
    title: "Chapter 6 - Social Media Marketing",
    description:
      "Overview of Social Studio. Social listening and monitoring. Social media publishing and engagement. Social media advertising and analytics.",
  },
  {
    title: "Chapter 7 - Advertising Studio",
    description:
      "Advertising Studio overview. Audience segmentation and targeting. Advertising campaign creation and management. Advertising data integration and tracking.",
  },
  {
    title: "Chapter 8 - Data Management and Analytics",
    description:
      "Data management practices in Marketing Cloud. Data synchronization and integration. Data extensions and data relationships. Reporting and analytics in Marketing Cloud. Utilizing Marketing Cloud Connect with Salesforce CRM.",
  },
  {
    title: "Chapter 9 - Personalization and Content Recommendations",
    description:
      "Creating personalized experiences with Audience Builder. Implementing content recommendations with Einstein. Leveraging AI and machine learning for personalization.",
  },
  {
    title: "Chapter 10 - Marketing Cloud Connect",
    description:
      "Integration between Salesforce CRM and Marketing Cloud. Syncing and managing data between the platforms. Leveraging CRM data for targeted marketing campaigns. Utilizing Sales and Service Cloud data in Marketing Cloud.",
  },
  {
    title: "Chapter 11 - Compliance and Security",
    description:
      "Data privacy and compliance regulations. Implementing best practices for data security. Managing subscriber consent and preferences. Ensuring email deliverability and sender reputation.",
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
        title="Salesforce Marketing Cloud Training & Certification"
        description="Ensure your business gets value from Salesforce"
      />

      <SalesforceServiceReuseable
        heading="Salesforce Marketing Cloud Training"
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
