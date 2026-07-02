import React from 'react'
import PageBanner from '../components/PageBanner'
import ContactInfo from './ContactInfo'
import CTASection from '../components/Home/CTASection'
import VisitUs from './VisitUs'
import ContactForm from '../components/ContactForm'

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