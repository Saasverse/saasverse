import React from 'react'
import PageBanner from '../components/PageBanner'
import WhyWork from './WhyWork'
import JobOpenings from './JobOpenings'
import HowToApply from './HowToApply'
import { Metadata } from 'next'
import CTASection from '../components/Home/CTASection'

export const metadata: Metadata = {
  title: "Careers at Saasverse | Salesforce Jobs in India",
  description:
    "Build your career at Saasverse. Explore open Salesforce consultant & developer jobs in India and grow with a fast-scaling global consulting team.",

    alternates: { canonical: 'https://www.saasverse.in/careers' },
};

const page = () => {
  return (
    <>
     <PageBanner
            image="/images/banner/careerbanner.webp"
            title="Careers Our Success Starts With You"
            description="We are looking for Phenomenal people, who are willing to join industries’ leading team., and awesomely creative beings."
          />
          <WhyWork/>
          <JobOpenings/>
          <HowToApply/>
          <CTASection/>

    </>
  )
}

export default page