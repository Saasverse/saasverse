import React from 'react';
import PageBanner from '../components/PageBanner';
import SalesforceServiceReuseable from '../components/SalesforceServiceReuseable';
import CTASection from '../components/Home/CTASection';
import ContactForm from '../components/ContactForm';
import LogoGrid from '../components/LogoGrid';

const benefits = [
  {
    title: "Chapter 1 - Unleashing the Potential of Salesforce Development",
    description:
      "Welcome to a realm where innovation meets business transformation - Salesforce Development. In this chapter, we embark on a journey to explore the limitless possibilities of designing and building custom applications and integrations on the Salesforce platform. With the power of Apex, Visualforce, and Lightning Web Components, we dive into automating business processes, elevating customer experiences, and driving unprecedented organizational growth. Join us and unlock the secrets to success with our free Salesforce tutorials brought to you by Saasverse Technologies.",
  },
  {
    title: "Chapter 2 - Apex Basics: Unleashing the Force Within",
    description:
      "Prepare to harness the power of Apex, the mighty programming language that fuels custom application development and business logic on the Salesforce platform. Similar to Java, Apex empowers you to write custom triggers, controllers, and server-side code that seamlessly automates and extends the functionality of Salesforce. Unleash the force within and embark on a journey of unparalleled development possibilities.",
  },

    {
    title: "Chapter 3 - Apex Data Types: Forging the Foundations of Innovation",
    description:
      "Salesforce Apex, a formidable object-oriented programming (OOP) language, acts as the catalyst for developing custom applications and integrations. Dive into the realm of OOP concepts that Salesforce Apex offers, empowering you to construct intricate, scalable, and maintainable applications. Equip yourself with the knowledge to forge the foundations of innovation and unleash the true potential of your Salesforce development endeavors.",
  },
  {
    title: "Chapter 4 - Object Oriented Programming: Sculpting Solutions with Elegance",
    description:
      "Immerse yourself in the artistry of object-oriented programming (OOP) within the Salesforce ecosystem. As Salesforce Apex embraces the power of OOP, you gain the ability to shape sophisticated, scalable, and easily maintainable applications. Step into the realm where code becomes art, and discover the elegance of sculpting solutions that stand the test of time.",
  },
  {
    title: "Chapter 5 - Logical and Conditional Statements: Mastering the Symphony of Decision-Making",
    description:
      "Welcome to the symphony of logical and conditional statements in Apex, where you become the conductor of program execution. Unleash the power of if-else statements, switch statements, logical operators, and ternary operators. With this orchestration of decision-making, developers can gracefully navigate through conditions and variables, harmonizing the flow of code and orchestrating the desired outcomes.",
  },
  {
    title: "Chapter 6 - SOQL: Unveiling the Secrets of Data Retrieval",
    description:
      "Embark on a quest to master the art of data retrieval with SOQL, the query language designed for unearthing treasures hidden within Salesforce databases. Journey through the intricacies of querying records from a single object, discovering the nuances and potential of this powerful language. Join us as we unravel the secrets of SOQL and equip you with the skills to fetch data with finesse.",
  },
  {
    title: "Chapter 7 - SOSL: Exploring the Depths of Salesforce Data Search",
    description:
      "Venture into the depths of Salesforce data search with SOSL, the query language that transcends boundaries and spans multiple objects. Dive into the world of full-text search capabilities and experience the thrill of unearthing ranked lists of results. Join us as we explore the expansive possibilities of SOSL and empower you to navigate through Salesforce data like never before.",
  },
  {
    title: "Chapter 8 - Data Manipulation Language (DML) Statements: Shaping and Transforming Data",
    description:
      "Experience the art of shaping and transforming data within Salesforce with the Data Manipulation Language (DML) statements. Seamlessly manipulate records in the database through operations like insert, update, upsert, delete, and undelete. Explore the stand-alone power of DML, enabling you to retrieve and manipulate data without the need for triggers or complex programmatic logic.",
  },
  {
    title: "Chapter 9 - Apex Triggers: Automating Salesforce Processes with Finesse",
    description:
      "Unleash the power of automation in Salesforce with Apex Triggers. These intelligent pieces of code execute before or after events occur on a record, enabling you to automate processes with finesse. Dive into the world of validation, related record updates, and data manipulation as triggers access and modify data of the triggering record. Whether you're synchronously or asynchronously executing triggers for any object, get ready to automate Salesforce processes like never before.",
  },
  {
    title: "Chapter 10 - Exception Handling: Mastering the Art of Error Management",
    description:
      "Navigate the complex terrain of error management with Salesforce's Exception Handling. Discover how to catch errors, prevent code crashes, and gracefully handle exceptions. Explore a range of built-in exceptions like DMLException and System.Exception, as well as the ability to create custom exceptions. With the power of try-catch, finally, and throw statements, you'll become a master of handling exceptions and ensuring the smooth execution of your code.",
  },
  {
    title: "Chapter 11 - Apex Testing: Ensuring Code Excellence",
    description:
      "Ensure the excellence of your Salesforce code with Apex Testing. Dive into the world of separate testing environments and unleash the power of unit tests. From testing classes to triggers and beyond, learn how to validate your code's functionality and reliability before deployment. Discover the insights provided by test results, all within the Salesforce UI, and elevate your development process to new heights.",
  },
  {
    title: "Chapter 12 - Governor Limits & Asynchronous Apex: Harnessing Efficiency and Scalability",
    description:
      "Enter the realm of efficiency and scalability with Salesforce's Governor Limits and Asynchronous Apex. Gain an understanding of the limits enforced by Salesforce to ensure optimal resource utilization. Explore the boundaries of operations, queries, record retrieval, CPU time, and memory, all while adapting to the specific limits based on your Salesforce edition. With a firm grasp on Governor Limits, you'll learn to develop code that maximizes performance and avoids exceptions.",
  },
  {
    title: "Chapter 13 - APIs: Bridging Salesforce with the World",
    description:
      "Discover the power of Salesforce APIs and unlock the ability to interact with the platform programmatically. Seamlessly create custom integrations and applications with the REST, SOAP, and Bulk APIs. Explore the breadth of operations, from data retrieval, creation, update, and deletion to performing other platform operations. With APIs as your bridge, you'll open up a world of possibilities for extending Salesforce's capabilities and integrating it with external systems.",
  },
  {
    title: "Chapter 14 - Lightning Component Framework (Aura): Enchanting User Interfaces",
    description:
      "Step into the realm of enchanting user interfaces with the Lightning Component Framework, also known as Aura. Experience the first lightning framework that empowers you to create stunning UIs in Salesforce. Dive into the complexities and intricacies of this powerful framework, leveraging its capabilities to enhance the user experience and create captivating interfaces that leave a lasting impression.",
  },
  {
    title: "Chapter 15 - Visualforce Pages: Unleashing Creativity in User Interface Design",
    description:
      "Unleash your creativity and design custom user interfaces using Salesforce Visualforce Pages. Combining the power of HTML, Apex, and Visualforce tags, you'll unlock the potential to create tailor-made forms, reports, and dashboards that seamlessly integrate with Salesforce data and metadata. Step into the world of Visualforce Pages and elevate the user experience to new heights.",
  },

  {
    title: "Chapter 16 - Deployment: Managing Changes with Precision",
    description:
      "Navigate the complex landscape of Salesforce deployment with precision and confidence. Discover the indispensable tools such as ANT Migration and Change Sets that facilitate the seamless movement of metadata changes between Salesforce environments. From selecting metadata components to tracking deployments and even rolling back changes if needed, these tools are essential for managing changes between development, testing, and production environments. Master the art of deployment and ensure smooth transitions across your Salesforce ecosystem.",
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
        title="Salesforce Developer Training & Certification"
        description="Ensure your business gets value from Salesforce"
      />

      <SalesforceServiceReuseable
        heading="Salesforce Development Training"
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
