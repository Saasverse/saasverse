import Link from 'next/link';
import Image from 'next/image';
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from 'react-icons/fa6';
import GoToTopButton from './GoToTopButton';
 
interface ContactDetails {
  contact_number: string;
  contact_number2: string;
}
interface SocialLinkObj { url: string; target?: string }
interface SocialLinks { [key: string]: SocialLinkObj }
 
const formatPhone = (number: string): string => {
  if (!number) return '';
  let str = String(number);
  if (!str.startsWith('91')) str = '91' + str;
  return `+${str.slice(0, 2)}-${str.slice(2)}`;
};
 
async function getContactData(): Promise<{ contactDetails: ContactDetails; socialLinks: SocialLinks }> {
  try {
    const res = await fetch(
      'https://saasverse.in/saasadmin/wp-json/wp/v2/pages?slug=contact-us-page',
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error('Failed');
    const pages = await res.json();
    if (!pages?.length) throw new Error('No data');
    const acf = pages[0]?.acf || {};
    const details = acf.contact_details || {};
    return {
      contactDetails: {
        contact_number: details.contact_number || '',
        contact_number2: details.contact_number2 || '',
      },
      socialLinks: acf.social_media_links || {},
    };
  } catch {
    return { contactDetails: { contact_number: '', contact_number2: '' }, socialLinks: {} };
  }
}
 
const partnerLogos = [
  { src: '/images/footer/c6.webp', alt: 'Salesforce Crest Partner' },
  { src: '/images/footer/c1.webp', alt: 'Certification Partner 1' },
  { src: '/images/footer/c5.webp', alt: 'Certification Partner 2' },
  { src: '/images/footer/c4.webp', alt: 'Certification Partner 3' },
  { src: '/images/footer/c3.webp', alt: 'Certification Partner 4' },
  { src: '/images/footer/c2.webp', alt: 'Certification Partner 5' },
  { src: '/images/footer/2.webp', alt: 'Certification Partner 6' },
  { src: '/images/footer/4.webp', alt: 'Certification Partner 7' },
  { src: '/images/footer/c8.webp', alt: 'Certification Partner 8' },
];
 
const values = [
  { icon: '/images/footer/value1.svg', label: 'Give Back To The Community' },
  { icon: '/images/footer/value2.svg', label: 'Foster a Culture of Caring' },
  { icon: '/images/footer/value3.svg', label: 'Deliver Seamless Experiences & Best-in-Class Solutions' },
  { icon: '/images/footer/value4.svg', label: 'Embrace Change & Strive for Growth' },
];
 
function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-white/70 text-sm transition-colors duration-150 hover:text-white"
      >
        {label}
      </Link>
    </li>
  );
}
 
export default async function Footer() {
  const { contactDetails, socialLinks } = await getContactData();
 
  return (
    <footer
      className="relative text-white pt-12 pb-6"
      style={{ background: 'linear-gradient(175deg, #08090D 0%, #0A0B10 100%)' }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
 
        {/* Top grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
 
          {/* Core Services */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.13em] text-white/50">Core Services</p>
            <ul className="space-y-2.5">
              <FooterLink href="/salesforce-appexchange-development-company" label="AppExchange Development" />
              <FooterLink href="/salesforce-managed-services" label="Managed Services" />
              <FooterLink href="/salesforce-consulting-company" label="Consulting Services" />
              <FooterLink href="/salesforce-integration-services" label="Integration Services" />
              <FooterLink href="/salesforce-custom-development-services" label="Custom Development" />
              <FooterLink href="/salesforce-security-review" label="Security Review" />
            </ul>
          </div>
 
          {/* Expertise */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.13em] text-white/50">Expertise</p>
            <ul className="space-y-2.5">
              <FooterLink href="/salesforce-sales-cloud" label="Sales Cloud" />
              <FooterLink href="/salesforce-service-cloud" label="Service Cloud" />
              <FooterLink href="/salesforce-marketing-cloud" label="Marketing Cloud" />
              <FooterLink href="/health-cloud-services" label="Health Cloud" />
              <FooterLink href="/mulesoft-development" label="MuleSoft Development" />
              <FooterLink href="/salesforce-cpq-implementation" label="CPQ Implementation" />
              <FooterLink href="/nonprofit-cloud" label="Nonprofit Cloud" />
            </ul>
          </div>
 
          {/* Company */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.13em] text-white/50">Company</p>
            <ul className="space-y-2.5">
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/careers" label="Careers" />
              <FooterLink href="/blogs" label="Blog" />
              <FooterLink href="/contact" label="Contact" />
              <FooterLink href="/disclaimer" label="Disclaimer" />
              <FooterLink href="/privacy" label="Privacy Policy" />
              <FooterLink href="/terms" label="Terms & Conditions" />
            </ul>
          </div>
 
          {/* Contact */}
          <div>
  <div className="mb-5 -mt-1">
    <Image
      src="/images/footer/saasverse_whitelogo.webp"
      alt="Saasverse"
      width={150}
      height={80}
      style={{ width: "150px", height: "auto" }}
    />
  </div>

  <address className="not-italic mb-5">
    <p className="text-xs font-bold uppercase tracking-[0.13em] text-white/50 mb-2">
      Call Us
    </p>

   

    <a
      href="tel:+919001622254"
      className="block text-sm text-white/80 hover:text-white mt-1"
    >
      +91-9001622254
    </a>

    <a
      href="mailto:contact@saasverse.in"
      className="mt-2 block text-sm text-white/80 hover:text-white"
    >
      contact@saasverse.in
    </a>
  </address>

  {/* Social Icons */}
  <div className="flex gap-3">
    <a
      href="https://www.linkedin.com/company/saasverse-pvt-ltd/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="text-white/60 hover:text-white transition-colors"
    >
      <FaLinkedin size={20} />
    </a>

    <a
      href="https://www.instagram.com/saasverse.in/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="text-white/60 hover:text-white transition-colors"
    >
      <FaInstagram size={20} />
    </a>

    <a
      href="https://www.facebook.com/saasverse.in"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="text-white/60 hover:text-white transition-colors"
    >
      <FaFacebook size={20} />
    </a>

    <a
      href="https://x.com/SAASVERSEIndia"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="X (Twitter)"
      className="text-white/60 hover:text-white transition-colors"
    >
      <FaXTwitter size={20} />
    </a>
  </div>
</div>
        </div>
 
        {/* Divider */}
        <hr className="my-8 border-0 border-t border-white/15" />
 
        {/* Certifications row */}
        <div>
          <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.13em] text-white/40">
            Certified Partnerships &amp; Recognitions
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            {partnerLogos.map(({ src, alt }) => (
              <div key={src} className="flex items-center justify-center">
                <Image src={src} alt={alt} width={60} height={55} style={{ width: '55px', height: '50px', objectFit: 'contain' }} />
              </div>
            ))}
            <a href="https://clutch.co/profile/saasverse" target="_blank" rel="noopener noreferrer">
              <Image src="/images/footer/1.webp" alt="Clutch Profile" width={200} height={65} style={{ width: '200px', height: '65px', objectFit: 'contain' }} />
            </a>
          </div>
        </div>
 
        {/* Divider */}
        <hr className="my-8 border-0 border-t border-white/15" />
 
        {/* Values */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-semibold text-white/60 whitespace-nowrap">Our Values</p>
          {values.map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Image src={icon} alt="" width={20} height={20} className="opacity-70" />
              <span className="text-xs text-white/60">{label}</span>
            </div>
          ))}
        </div>
 
        {/* Divider */}
        <hr className="my-6 border-0 border-t border-white/15" />
 
        <p className="text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Saasverse Technologies Pvt. Ltd. All rights reserved.
        </p>
      </div>
 
      <GoToTopButton />
    </footer>
  );
}
 