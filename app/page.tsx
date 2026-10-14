import Image from 'next/image';
import HeroSection from './components/Home/HeroSection';
import AboutSaasverse from './components/Home/AboutSaasverse';
import HomeSlider from './components/Home/HomeSlider';
import PlatformServices from './components/Home/PlatformServices';
import CertificateSlider from './components/Home/CertificateSlider';
import Partner from './components/Home/Partner';

import OurPartners from './components/Home/OurPartners';
import Testimonials from './components/Home/Testimonials';
import CTASection from './components/Home/CTASection';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Salesforce Consulting & Implementation Partner | Saasverse ',
  description:
    'Salesforce consulting partner with offices in Boston and Jaipur. 120+ projects for 41 clients in 19 countries, rated 5.0 on Clutch. Book a free consultation.  ',

  alternates: {
    canonical: 'https://www.saasverse.in/',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <CTASection />
      <AboutSaasverse />
      <HomeSlider />
      <PlatformServices />
      <Partner />
      <CertificateSlider />
 
      <OurPartners />
      <Testimonials />
      <Faq />
      <ContactForm />
    </>
  );
}
