import React from 'react'

import PageBanner from '../components/PageBanner'
import Our from './Our'
import AboutOurServices from './AboutOurServices'
import CTASection from '../components/Home/CTASection'
import WhyChooseUs from './WhyChooseUs'
import ContactForm from '../components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About us- Salesforce Implementation Experts",
  description:
    "Saasverse specializes in Salesforce implementation, customization, app development, and automation, delivering tailored solutions to drive business success.",
};

const page = () => {
  return (
    <>
    <PageBanner
        image="/images/banner/aboutus.webp"
        title="Welcome to Saasverse!"
        description="We are a thriving squad of nerd minds, think tankers, pro coders, business geeks, and awesomely creative beings."
      />
      <Our/>
      <AboutOurServices/>
      <CTASection/>
      <WhyChooseUs/>
      <ContactForm/>
    </>
  )
}

export default page