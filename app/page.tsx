import Image from "next/image";
import HeroSection from "./components/Home/HeroSection";
import AboutSaasverse from "./components/Home/AboutSaasverse";
import HomeSlider from "./components/Home/HomeSlider";
import PlatformServices from "./components/Home/PlatformServices";
import CertificateSlider from "./components/Home/CertificateSlider";
import Partner from "./components/Home/Partner";

import OurPartners from "./components/Home/OurPartners";
import Testimonials from "./components/Home/Testimonials";
import CTASection from "./components/Home/CTASection";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Saasverse – Salesforce Consulting & Software Development",
  description:
    "Saasverse: Salesforce consulting, implementation & custom software development for US, UAE & global businesses. India-based experts. Get a free quote",
};

export default function Home() {
  return (
   <>
   <HeroSection/>
   <CTASection/>
   <AboutSaasverse/>
   <HomeSlider/>
   <PlatformServices/>
   <Partner/>
   <CertificateSlider/>

   <OurPartners/>
   <Testimonials/>
   <Faq/>
   <ContactForm/>
   
   </>
  );
}
