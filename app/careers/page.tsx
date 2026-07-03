import React from 'react'
import PageBanner from '../components/PageBanner'
import WhyWork from './WhyWork'
import JobOpenings from './JobOpenings'
import HowToApply from './HowToApply'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Careers at Saasverse | Join Our Salesforce Consulting Team",
  description:
    "Explore career opportunities at Saasverse. Join our team of passionate professionals and contribute to transforming businesses through cutting-edge technology.",
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

    </>
  )
}

export default page