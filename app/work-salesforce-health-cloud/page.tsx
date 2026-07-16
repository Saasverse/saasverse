import React from 'react';
import PageBanner from '../components/PageBanner';
import HealthClient from './HealthClient';
import HealthSolution from './HealthSolution';
import HealthImplementation from './HealthImplementation';
import CertificateSlider from '../components/Home/CertificateSlider';
import HealthResult from './HealthResult';
import HealthFuture from './HealthFuture';
import HealthConclusion from './HealthConclusion';
import ContactForm from '../components/ContactForm';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Salesforce Health Cloud Case Study | Saasverse",
  description:
    "See how Saasverse implemented Salesforce Health Cloud to boost patient care and efficiency. Read the case study.",
};

const page = () => {
  return (
    <>
      <PageBanner
        image="/images/banner/workS.webp"
        title="Transforming Patient Care with Salesforce Healthcare Cloud"
        description="We are a thriving squad of nerd minds, think tankers, pro coders, business geeks, and awesomely creative beings. "
      />

      <HealthClient
        title="Business"
        highlight="Challenge"
        paragraphs={[
          'Unity Health Systems (UHS) faced challenges in managing patient data effectively across multiple departments and facilities. With outdated systems, they struggled with fragmented patient records, inefficient communication between care teams, and delays in accessing critical patient information.',

          'They sought a solution to unify their patient management processes, enhance care coordination, and improve overall operational efficiency.',
        ]}
      />
      <HealthSolution
        title="Implementation of"
        highlight="Salesforce Healthcare Cloud"
        description="UHS implemented Salesforce Healthcare Cloud to centralize patient information, improve care coordination, and streamline healthcare operations across multiple facilities."
        image="/images/healthsolution.webp"
        imageAlt="Salesforce Healthcare Cloud Solution"
        solutions={[
          {
            title: 'Platform Deployment',
            description:
              'UHS adopted Salesforce Healthcare Cloud to leverage advanced patient relationship management, care coordination, and data integration capabilities.',
          },
          {
            title: 'Customization',
            description:
              'The platform was tailored to support UHS-specific workflows and compliance requirements, including HIPAA standards for secure patient data management.',
          },
          {
            title: 'Integration',
            description:
              'Salesforce was integrated with Electronic Health Records (EHR), billing systems, and other healthcare applications, providing a unified patient view across departments.',
          },
        ]}
      />
      <HealthImplementation
        badge="Salesforce Health Cloud"
        title="Implementation"
        highlight="Highlights"
        highlights={[
          {
            no: '01',
            title: 'Patient Engagement',
            desc: 'Salesforce enabled UHS to improve patient engagement through personalized communication and care plans.',
          },
          {
            no: '02',
            title: 'Care Coordination',
            desc: 'Care teams gained real-time access to patient data, improving collaboration between providers.',
          },
          {
            no: '03',
            title: 'Analytics & Insights',
            desc: 'Advanced analytics delivered actionable insights into patient outcomes and operational efficiency.',
          },
        ]}
      />
      <CertificateSlider />
      <HealthResult
        title="Results"
        subtitle="Measurable outcomes achieved through Salesforce Health Cloud implementation."
        results={[
          {
            number: '01',
            title: 'Enhanced Efficiency',
            description:
              'Streamlined workflows and automated processes reduced administrative burden, allowing healthcare staff to focus more on patient care.',
          },
          {
            number: '02',
            title: 'Improved Patient Outcomes',
            description:
              'Better coordination and access to comprehensive patient data improved treatment outcomes while reducing medical errors.',
          },
          {
            number: '03',
            title: 'Cost Savings',
            description:
              'Operational efficiencies and reduced administrative overhead resulted in significant cost savings across the organization.',
          },
        ]}
      />
      <HealthFuture
        badge="Healthcare Innovation"
        title="Future Directions"
        subtitle="Looking ahead, UHS plans to further leverage Salesforce Healthcare Cloud to drive innovation and improve patient outcomes."
        image="/images/futurehealth.webp"
        points={[
          'Expand patient engagement initiatives through mobile and telehealth solutions.',
          'Implement predictive analytics to anticipate patient needs and optimize resource allocation.',
          'Enhance interoperability with external healthcare providers for seamless care transitions.',
        ]}
      />

      <HealthConclusion
        title="Conclusion"
        description="Salesforce Healthcare Cloud has empowered Unity Health Systems to deliver patient-centered care more efficiently and effectively. By integrating patient data, enhancing care coordination, and improving operational workflows, UHS has positioned itself as a leader in healthcare innovation, ensuring better outcomes for patients and providers alike."
      />
      <ContactForm />
    </>
  );
};

export default page;
