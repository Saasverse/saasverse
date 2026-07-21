import React from 'react'
import PageBanner from '../components/PageBanner'
import ContactInfo from './ContactInfo'
import CTASection from '../components/Home/CTASection'
import VisitUs from './VisitUs'
import ContactForm from '../components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Saasverse | Hire Salesforce Consultants",
  description:
    "Contact Saasverse to hire expert Salesforce consultants & developers for your US, UAE or India project. Get a free consultation within 24 hours.",

    alternates: { canonical: 'https://www.saasverse.in/contact' },
};

const page = () => {
  return (
    <>
     <PageBanner
            image="/images/banner/contactbanner.webp"
            title="Contact Us"
            description="At Saasverse Pvt Ltd, we value open communication and are always here to assist you. "
          />
          <ContactForm/>
          <ContactInfo/>
          <VisitUs/>
          <CTASection/>

   </>
  )
}

export default page