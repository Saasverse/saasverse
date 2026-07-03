import React from 'react'
import PageBanner from '../components/PageBanner'
import ContactInfo from './ContactInfo'
import CTASection from '../components/Home/CTASection'
import VisitUs from './VisitUs'
import ContactForm from '../components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Us - Saasverse Pvt. Ltd.",
  description:
    "Reach out to Saasverse for expert Salesforce consulting and development. Connect with us to discuss your business needs and explore tailored solutions.",
};

const page = () => {
  return (
    <>
     <PageBanner
            image="/images/banner/contactbanner.webp"
            title="Contact Us"
            description="At Saasverse Pvt Ltd, we value open communication and are always here to assist you. "
          />
          <ContactInfo/>
          <CTASection/>
          <ContactForm/>
          <VisitUs/>

   </>
  )
}

export default page