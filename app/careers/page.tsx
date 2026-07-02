import React from 'react'
import PageBanner from '../components/PageBanner'
import WhyWork from './WhyWork'
import JobOpenings from './JobOpenings'
import HowToApply from './HowToApply'

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