import React from 'react';
import PageBanner from '../components/PageBanner';
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CTASection from '../components/Home/CTASection';
import ContactForm from '../components/ContactForm';
import LogoGrid from '../components/LogoGrid';
import TrainingContactForm from '../components/TrainingContactForm';

const benefits = [
  {
    title: 'Chapter 1 - Unlocking the Power of Cloud Computing',
    description:
      'Embark on a journey into the world of cloud computing, the backbone of Salesforce administration. Discover the benefits and intricacies of cloud computing service models, virtualization, and multi-tenant architecture. Gain a deeper understanding of how Salesforce leverages the cloud to provide a robust and scalable platform for managing customer relationships.',
  },
  {
    title:
      'Chapter 2 - Salesforce.com & CRM: Unleashing Customer Relationship Management',
    description:
      'Uncover the foundations of Salesforce.com and Customer Relationship Management (CRM). Explore how Salesforce revolutionizes customer interactions by automating and organizing sales, marketing, and support processes. Dive into the core concepts of CRM technology and discover how it drives business success.',
  },
  {
    title:
      'Chapter 3 - Salesforce Platform & Environments: Building the Future',
    description:
      "Unleash the power of the Salesforce Platform, a robust Platform-as-a-Service (PaaS) solution previously known as Force.com. Learn how this platform simplifies the development and deployment of cloud-based applications and websites. Explore the cloud Integrated Development Environment (IDE) and discover how to quickly deploy applications to Salesforce.com's multi-tenant servers.",
  },
  {
    title: 'Chapter 4 - Data Modelling: Shaping Your Salesforce Universe',
    description:
      'Master the art of data modeling in Salesforce. Create a robust data structure by designing custom objects, variables, and connections. Leverage essential tools like Schema Builder and Object Manager to implement accurate and effective data analysis. Lay the foundation for data-driven decision-making and maximize the value of your Salesforce implementation.',
  },
  {
    title: 'Chapter 5 - UI Customization: Crafting User Experiences',
    description:
      'Elevate user experiences through Salesforce UI customization. Delve into the world of page layouts, buttons, and appearance customization using the Lightning Experience. Streamline workflows, reduce manual data entry, and improve productivity with tailor-made interfaces. Master the art of UI customization for a seamless and intuitive user experience.',
  },
  {
    title: 'Chapter 6 - Data Management: Nurturing Your Data Ecosystem',
    description:
      'Unlock the secrets of effective data management in Salesforce. Discover best practices for creating, storing, importing, and maintaining data. Ensure data quality, deduplication, backup, recovery, and compliance with regulations. Leverage powerful tools like Data Loader and Data Import Wizard to streamline data management processes.',
  },
  {
    title: 'Chapter 7 - Data Security: Safeguarding Your Salesforce Fortress',
    description:
      'Master the art of data security in Salesforce. Learn how to protect sensitive data from unauthorized access, modification, or deletion. Explore features like two-factor authentication and role-based access control to ensure data integrity and maintain customer trust. Build a solid foundation of data security to safeguard your Salesforce ecosystem.',
  },
  {
    title: 'Chapter 8 - Queues: Collaboration and Workload Sharing',
    description:
      'Harness the power of Salesforce Queues to boost collaboration and workload sharing. Create groups that enable multiple users to collaborate on shared records or cases. Automate business processes and assign work to relevant teams based on ownership or location criteria. Optimize efficiency in handling customer inquiries and streamline your operations.',
  },
  {
    title: 'Chapter 9 - Process Automation: Streamlining Your Business',
    description:
      'Unleash the potential of process automation in Salesforce. Automate common tasks, emails, and data flows between entities using Lightning Flows and the Process Builder. Streamline your business processes and save valuable time and effort. Master the art of process automation and supercharge your productivity.',
  },
  {
    title: 'Chapter 10 - Reports & Dashboards: Unleashing Data Insights',
    description:
      'Unlock the power of Salesforce Reports and Dashboards to gain actionable insights. Customize data analysis and visualization to gain a deeper understanding of your business. Filter, group, and summarize data to identify trends and make data-driven decisions. Share and schedule reports for delivery and access them on various devices. Empower your organization with data-driven decision-making.',
  },
  {
    title: 'Chapter 11 - Sales Cloud: Empowering Sales Success',
    description:
      "Discover the Sales Cloud, Salesforce's cloud-based application designed to empower your sales team. Centralize customer information, log interactions, and automate sales tasks. Sell smarter and faster with a comprehensive suite of tools designed to drive sales success.",
  },
  {
    title: 'Chapter 12 - Service Cloud: Elevating Customer Service',
    description:
      "Enter the realm of the Service Cloud, Salesforce's solution for exceptional customer service. Manage accounts, contacts, cases, and solutions to support your customer service efforts. Retain existing customers and provide exceptional support with a comprehensive suite of tools designed to meet customer service requests.",
  },
  {
    title: 'Chapter 13 - MVC Architecture: Building Solid Foundations',
    description:
      'Dive into the Model-View-Controller (MVC) architecture, a software architectural pattern commonly used for developing user interfaces. Explore how this pattern separates program logic into three interconnected elements, enabling robust and scalable application development. Master the foundations of MVC architecture for building powerful Salesforce applications.',
  },
  {
    title: 'Chapter 14 - Activity Management: Mastering Productivity',
    description:
      "Optimize your productivity with Salesforce's Activity Management features. Track tasks and meetings, prioritize your time, and stay up to date with your accounts, campaigns, contacts, leads, and opportunities. Streamline your activity management processes and boost your efficiency.",
  },
  {
    title: 'Chapter 15 - Miscellaneous Tools: Unleashing the Full Potential',
    description:
      'Explore a range of powerful declarative tools available in Salesforce. From mass deletes and transfers to a myriad of other features, uncover hidden gems that enhance your Salesforce administration toolkit. Maximize the potential of these tools to drive success in your Salesforce implementation.',
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
        title="Salesforce Admin Training & Certification"
        description="Ensure your business gets value from Salesforce"
      />
      <TrainingContactForm/>
      <SalesforceServiceReuseable
        heading="Salesforce Admin Training"
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
