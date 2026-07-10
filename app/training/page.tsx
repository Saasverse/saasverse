import React from 'react';
import PageBanner from '../components/PageBanner';
import HealthSolution from '../work-salesforce-health-cloud/HealthSolution';
import LogoGrid from '../components/LogoGrid';
import TrainingService from '../components/TrainingService';
import BatchList from '../components/BatchList';
import WhyChooseUs from '../about/WhyChooseUs';
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CTASection from '../components/Home/CTASection';
import ContactForm from '../components/ContactForm';
import { Metadata } from 'next';

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

const benefits = [
  {
    title: 'Personalized Sessions:',
    description:
      'Deliver tailored training programs at your location for a hands-on learning experience.',
  },
  {
    title: 'Team Building:',
    description:
      'Foster collaboration and team building with group training sessions.',
  },
  {
    title: 'Flexible Scheduling:',
    description:
      'Access training sessions from anywhere, at any time, with our online learning platform.',
  },
  {
    title: 'Interactive Learning:',
    description:
      'Engage with instructors through live webinars, interactive modules, and virtual labs.',
  },
  {
    title: 'Blended Approach:',
    description:
      'Combine the benefits of on-site and online training for a comprehensive learning experience.',
  },
  {
    title: 'Adaptable Solutions:',
    description:
      "Customize the training format to suit your team's needs and availability.",
  },
];
export const metadata: Metadata = {
  title: " Salesforce Training & Certification Courses | Saasverse",
  description:
    "Get hands-on Salesforce training & certification from Saasverse's certified trainers. Flexible online, on-site & hybrid programs for all skill levels.",
};
const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/trainingbanner.png"
        title="Salesforce Training & Certifications"
        description="At Saasverse Pvt Ltd, we are committed to helping individuals and organizations unlock the full potential of Salesforce."
      />

      <HealthSolution
        title="Why Choose Saasverse for"
        highlight="Salesforce Training?"
        description="Investing in Salesforce training ensures that your team can leverage the platform's full capabilities, stay updated with the latest features, and implement best practices. Our training programs offer"
        image="/images/websiteimages/4.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Expert Instructors',
            description:
              'Learn from certified Salesforce professionals with extensive industry experience.',
          },
          {
            title: 'Customized Curriculum',
            description:
              'Tailor-made training programs that align with your specific business needs and objectives.',
          },
          {
            title: 'Flexible Learning Options',
            description:
              'Choose from on-site, online, or hybrid training formats to suit your schedule and preferences.',
          },
        ]}
      />

      <LogoGrid
        title="Elevating Training Through Accredited Collaborations"
        subtitle="Industry Partnerships"
        logos={partnerLogos}
      />

      <TrainingService />

      <BatchList />

      <WhyChooseUs />
      <CTASection />
      <SalesforceServiceReuseable
        heading="Our Salesforce Integration Services"
        benefits={benefits}
      />

      <ContactForm />
    </>
  );
};

export default page;
