"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import CaseStudyForm from "./CaseStudyForm";


// type LinkItem = { name: string; href: string };

type LinkItem = {
  name: string;
  href: string;
  isProfile?: boolean;
  isCaseStudy?: boolean;
};

const servicesLinks: LinkItem[] = [
  { name: "Service Now", href: "/servicenow" },
  { name: "Shopify Development", href: "/shopify-development-services" },
  { name: "Magento Development", href: "/magento-development-services" },
  { name: "WordPress Development", href: "/wordpress-development-services" },
  { name: "DotNet Development", href: "/dotnet-development-services" },
  { name: "Application Modernization", href: "/application-modernization-services" },
  { name: "AWS Services", href: "/services-aws" },
  { name: "Sitecore Development", href: "/sitecore-development-services" },
  { name: "Kentico Development", href: "/kentico-development-services" },
  { name: "Zoho CRM Services", href: "/zoho-crm-services" },
];

const salesforceLinks: LinkItem[] = [
  { name: "Support & Maintenance", href: "/salesforce-support-and-maintenance-services" },
  { name: "Implementation", href: "/salesforce-implementation-services" },
  { name: "Consulting", href: "/salesforce-consulting-company" },
  { name: "ISV Development", href: "/salesforce-isv-development-company" },
  { name: "Custom Development", href: "/salesforce-custom-development-services" },
  { name: "Integration", href: "/salesforce-integration-services" },
  { name: "Managed Services", href: "/salesforce-managed-services" },
  { name: "Security Review", href: "/salesforce-security-review" },
  { name: "AppExchange Development", href: "/salesforce-appexchange-development-company" },
];

const expertiseLinks: LinkItem[] = [
  { name: "Sales Cloud", href: "/salesforce-sales-cloud" },
  { name: "Service Cloud", href: "/salesforce-service-cloud" },
  { name: "Marketing Cloud", href: "/salesforce-marketing-cloud" },
  { name: "Mulesoft Development", href: "/mulesoft-development" },
  { name: "Health Cloud", href: "/health-cloud-services" },
  { name: "Experience Cloud", href: "/experience-cloud" },
  { name: "Tableau CRM", href: "/tableau-crm" },
  { name: "Salesforce AI", href: "/salesforce-ai-company" },
  { name: "Mobile Publisher", href: "/mobile-publisher-services" },
  { name: "CPQ Implementation", href: "/salesforce-cpq-implementation" },
  { name: "Field Service Lightning", href: "/field-service-lightning" },
  { name: "Financial Cloud", href: "/financial-cloud-implementation-services" },
  { name: "Nonprofit Cloud", href: "/nonprofit-cloud" },
];

// ── Discriminated union types ──
// Desktop menu: either the "Services" mega item (no links), or a regular item with links.
type MenuItem =
  | { title: string; isMega: true; links?: undefined }
  | { title: string; isMega?: false; links: LinkItem[] };

// Mobile menu: either the "Services" mega-mobile item (with subSections), or a regular item with links.
type MobileMenuItem =
  | { title: string; isMegaMobile: true; subSections: { heading: string; links: LinkItem[] }[]; links?: undefined }
  | { title: string; isMegaMobile: false; subSections?: undefined; links: LinkItem[] };

const menuItems: MenuItem[] = [
  { title: "Services", isMega: true },
  {
    title: "Industries",
    links: [
      { name: "Automotive", href: "/automotive-industry" },
      { name: "Healthcare", href: "/healthcare-industry" },
      { name: "Communications", href: "/communications-industry" },
      { name: "Media", href: "/media-industry" },
      { name: "Consumer Goods", href: "/consumer-goods-industry" },
      { name: "Retail", href: "/retail-industry" },
      { name: "Education", href: "/education-industry" },
      { name: "Energy", href: "/energy-industry" },
      // { name: "Technology", href: "/technology-industry" },
      { name: "Travel & Hospitality", href: "/travels-hospitality-industry" },
      { name: "Financial", href: "/financial-industry" },
    ],
  },
  {
    title: "Hire",
    links: [
      { name: "Salesforce Consultants", href: "/hire-salesforce-consultants" },
      { name: "Project Managers", href: "/hire-salesforce-project-managers" },
      { name: "Developers", href: "/hire-salesforce-developers" },
      { name: "Architects", href: "/hire-salesforce-architect" },
      { name: "Administrators", href: "/hire-salesforce-admin" },
      { name: "Product Managers", href: "/hire-salesforce-product-managers" },
      { name: "Business Analysts", href: "/hire-salesforce-business-analyst" },
      { name: "Quality Analysts", href: "/hire-salesforce-expert" },
    ],
  },
  {
    title: "Training",
    links: [
      { name: "Training & Certifications", href: "/training" },
      { name: "Admin Training", href: "/salesforce-admin-training" },
      { name: "Developer Training", href: "/salesforce-developer-training" },
      { name: "CPQ Training", href: "/salesforce-cpq-training" },
      { name: "Marketing Training", href: "/salesforce-marketing-training" },
    ],
  },
  {
    title: "Work",
    links: [
      
       {
      name: "Get Our Company Profile",
      href:"/documents/company-profile.pdf",
      isProfile: true,
    },
      {   name: "Explore Our Case Study",
  href: "/work-gg",
  isCaseStudy: true, },
      { name: "Healthcare Cloud", href: "/work-salesforce-health-cloud" },
      { name: "Sales Cloud", href: "/work-salesforce-sales-cloud" },
      { name: "Service Cloud", href: "/work-salesforce-service-cloud" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Services", href: "/services" },
      { name: "Blogs", href: "/blogs" },
      { name: "Careers", href: "/careers" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
];

// Mobile: Services button ke andar teeno sub-sections
const mobileServicesSubSections = [
  { heading: "Salesforce", links: salesforceLinks },
  { heading: "Expertise", links: expertiseLinks },
  { heading: "Services", links: servicesLinks },
];

const mobileMenuItems: MobileMenuItem[] = [
  { title: "Services", isMegaMobile: true, subSections: mobileServicesSubSections },
  ...menuItems
    .filter((m): m is Extract<MenuItem, { isMega?: false }> => !m.isMega)
    .map((m) => ({ title: m.title, isMegaMobile: false as const, links: m.links })),
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [navHeight, setNavHeight] = useState(72);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement>(null);
const [profileModal, setProfileModal] = useState(false);
const [profileSubmitted, setProfileSubmitted] = useState(false);
const [profileLoading, setProfileLoading] = useState(false);
const [profileError, setProfileError] = useState("");
const [formError, setFormError] = useState("");

 const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamically measure header height for mobile menu offset
  useEffect(() => {
    const measure = () => {
      if (headerRef.current) setNavHeight(headerRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [scrolled]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
        setMobileDropdown(null);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenu]);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 80);
  };

  return (
    <>
      <style>{`
        /* ── Nav link ── */
        .nav-link {
          position: relative;
          font-size: clamp(13px, 1.1vw, 15px);
          font-weight: 500;
          letter-spacing: 0.01em;
          transition: color 0.2s ease;
          white-space: nowrap;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: currentColor;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after,
        .nav-link.active::after { width: 100%; }

        /* ── Dropdown animation ── */
        .mega-panel {
          animation: dropIn 0.18s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Mega dropdown links ── */
        .mega-link {
          display: block;
          padding: 8px 14px;
          border-radius: 6px;
          font-size: clamp(12.5px, 1vw, 14.5px);
          font-weight: 450;
          color: #1a1a2e;
          letter-spacing: 0.01em;
          transition: background 0.15s ease, color 0.15s ease, padding-left 0.15s ease;
          white-space: nowrap;
        }
        .mega-link:hover {
          background: #f0f4ff;
          color: #003e95;
          padding-left: 18px;
        }

        /* ── Column divider ── */
        .col-divider {
          width: 1px;
          background: linear-gradient(to bottom, transparent, #e2e6f0 20%, #e2e6f0 80%, transparent);
          align-self: stretch;
          flex-shrink: 0;
        }

        /* ── Column heading ── */
        .col-heading {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #003e95;
          padding: 0 14px 10px;
          border-bottom: 1px solid #edf0f7;
          margin-bottom: 6px;
        }

        /* ── Regular dropdown links ── */
        .regular-link {
          display: block;
          padding: 10px 14px;
          border-radius: 8px;
          font-size: clamp(12.5px, 1vw, 14.5px);
          font-weight: 450;
          color: #1a1a2e;
          letter-spacing: 0.01em;
          transition: background 0.15s ease, color 0.15s ease, padding-left 0.15s ease;
          white-space: nowrap;
        }
        .regular-link:hover {
          background: #f0f4ff;
          color: #003e95;
          padding-left: 20px;
        }

        /* ── CTA Button ── */
        .cta-btn {
          font-size: clamp(12px, 1vw, 14px);
          font-weight: 600;
          letter-spacing: 0.04em;
          background: #003e95;
          color: #fff;
          padding: 11px 22px;
          border-radius: 9px;
          white-space: nowrap;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          box-shadow: 0 2px 8px rgba(0,62,149,0.25);
        }
        .cta-btn:hover {
          background: #002d70;
          box-shadow: 0 4px 16px rgba(0,62,149,0.35);
          transform: translateY(-1px);
        }

        /* ── Hamburger ── */
        .hamburger-line {
          width: 24px;
          height: 1.5px;
          background: currentColor;
          transition: all 0.25s ease;
          display: block;
        }

        /* ── Mobile menu items ── */
        .mobile-section-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 17px 20px;
          font-size: 15px;
          font-weight: 600;
          color: #1a1a2e;
          letter-spacing: 0.01em;
          border-bottom: 1px solid #f0f2f8;
          background: transparent;
          transition: color 0.15s;
          text-align: left;
        }
        .mobile-section-btn:hover { color: #003e95; }

        .mobile-item-link {
          display: block;
          padding: 13px 36px;
          font-size: 14px;
          color: #2d2d3f;
          border-top: 1px solid #f3f4f8;
          transition: background 0.12s, color 0.12s, padding-left 0.15s;
          font-weight: 450;
        }
        .mobile-item-link:hover {
          background: #f0f4ff;
          color: #003e95;
          padding-left: 42px;
        }

        /* ── Chevron ── */
        .chevron {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }
        .chevron.open { transform: rotate(180deg); }

        /* ── Mobile sub-section heading ── */
        .mobile-sub-heading {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #003e95;
          padding: 14px 20px 8px;
          border-top: 1px solid #edf0f7;
          background: #f8f9ff;
        }

        /* ── Mega dropdown: responsive column widths ── */
        .mega-col-1 { width: clamp(180px, 18vw, 250px); }
        .mega-col-2 { width: clamp(175px, 17vw, 245px); }
        .mega-col-3 { width: clamp(175px, 17vw, 245px); }

        /* ── Tablet: tighten nav gaps ── */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .desktop-nav { gap: 20px !important; }
          .nav-link { font-size: 13px; }
          .cta-btn { padding: 9px 16px; font-size: 12.5px; }
        }

        /* ── Large desktop ── */
        @media (min-width: 1280px) {
          .desktop-nav { gap: 36px !important; }
        }import CaseStudyForm from './CaseStudyForm';


        /* ── Mobile overlay slide-in ── */
        .mobile-overlay {
          animation: slideDown 0.22s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Tablet: mobile menu 2-col grid for links ── */
        @media (min-width: 640px) and (max-width: 1023px) {
          .mobile-links-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>

      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/96 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06),0_4px_24px_rgba(0,0,0,0.08)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={scrolled ? "/images/logo4.svg" : "/images/logo.png"}
              alt="Saasverse"
              width={0}
              height={0}
              sizes="(max-width: 640px) 100px, 130px"
              style={{ width: "clamp(90px, 10vw, 130px)", height: "auto" }}
              priority
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="desktop-nav hidden lg:flex items-center">
            {menuItems.map((menu) => (
              <div
                key={menu.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.title)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`nav-link flex items-center gap-1 ${
                    activeDropdown === menu.title ? "active" : ""
                  } ${scrolled ? "text-[#1a1a2e]" : "text-white"}`}
                >
                  {menu.title}
                  <svg
                    className={`chevron ${activeDropdown === menu.title ? "open" : ""}`}
                    fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* ── MEGA DROPDOWN ── */}
                {menu.isMega && activeDropdown === menu.title && (
                  <div
                    className="mega-panel absolute left-0 top-[calc(100%+12px)] z-50 bg-white rounded-2xl border border-gray-100/80 shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
                    onMouseEnter={() => handleMouseEnter(menu.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="h-[2.5px] rounded-t-2xl bg-gradient-to-r from-[#003e95] via-[#2563eb] to-[#60a5fa]" />
                    <div className="flex p-5 xl:p-6 gap-0">
                      <div className="mega-col-1 pr-5 xl:pr-6">
                        <div className="col-heading">Services</div>
                        {servicesLinks.map((item) => (
                          <Link key={item.href} href={item.href} className="mega-link" onClick={() => setActiveDropdown(null)}>{item.name}</Link>
                        ))}
                      </div>
                      <div className="col-divider mx-1" />
                      <div className="mega-col-2 px-5 xl:px-6">
                        <div className="col-heading">Salesforce</div>
                        {salesforceLinks.map((item) => (
                          <Link key={item.href} href={item.href} className="mega-link" onClick={() => setActiveDropdown(null)}>{item.name}</Link>
                        ))}
                      </div>
                      <div className="col-divider mx-1" />
                      <div className="mega-col-3 pl-5 xl:pl-6">
                        <div className="col-heading">Expertise</div>
                        {expertiseLinks.map((item) => (
                          <Link key={item.href} href={item.href} className="mega-link" onClick={() => setActiveDropdown(null)}>{item.name}</Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── REGULAR DROPDOWN ── */}
                {!menu.isMega && activeDropdown === menu.title && menu.links && (
                  <div
                    className="mega-panel absolute left-0 top-[calc(100%+12px)] z-50 bg-white rounded-2xl border border-gray-100/80 shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden"
                    onMouseEnter={() => handleMouseEnter(menu.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="h-[2.5px] bg-gradient-to-r from-[#003e95] via-[#2563eb] to-[#60a5fa]" />
                    <div
                      className={`p-3 ${
                        ["Training", "Work", "Company"].includes(menu.title)
                          ? "w-[230px]"
                          : "w-[440px] xl:w-[520px] grid grid-cols-2"
                      }`}
                    >
  {menu.links.map((item) =>
  item.isProfile ? (
    <button
      key={`${menu.title}-${item.name}`}
      type="button"
      className="regular-link w-full text-left"
      onClick={() => {
        setActiveDropdown(null);
        setProfileError("");
        setProfileSubmitted(false);
        setProfileModal(true);
      }}
    >
      {item.name}
    </button>
  ) : item.isCaseStudy ? (
    <button
      key={`${menu.title}-${item.name}`}
      type="button"
      className="regular-link w-full text-left"
      onClick={() => {
        setActiveDropdown(null);
        setCaseStudyOpen(true);
      }}
    >
      {item.name}
    </button>
  ) : (
    <Link
      key={`${menu.title}-${item.name}`}
      href={item.href}
      className="regular-link"
      onClick={() => setActiveDropdown(null)}
    >
      {item.name}
    </Link>
  )
)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ── CTA ── */}
          <Link href="/contact" className="cta-btn hidden lg:inline-flex items-center">
            Get Free Consultation
          </Link>

          {/* ── Hamburger ── */}
          <button
            type="button"
            className={`lg:hidden flex flex-col gap-[5px] p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#1a1a2e]" : "text-white"
            }`}
            onClick={() => setMobileMenu((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line" style={mobileMenu ? { transform: "rotate(45deg) translateY(6.5px)" } : {}} />
            <span className="hamburger-line" style={mobileMenu ? { opacity: 0 } : {}} />
            <span className="hamburger-line" style={mobileMenu ? { transform: "rotate(-45deg) translateY(-6.5px)" } : {}} />
          </button>
        </div>

        {/* ── MOBILE / TABLET MENU ── */}
        {mobileMenu && (
          <div
            className="mobile-overlay lg:hidden fixed left-0 w-full overflow-y-auto bg-white z-40 border-t border-gray-100"
            style={{ top: navHeight, height: `calc(100dvh - ${navHeight}px)` }}
          >
            <div className="pt-1 pb-8">
              {mobileMenuItems.map((menu) => (
                <div key={menu.title}>
                  {/* Section toggle button */}
                  <button
                    type="button"
                    className="mobile-section-btn"
                    onClick={() =>
                      setMobileDropdown(mobileDropdown === menu.title ? null : menu.title)
                    }
                  >
                    <span>{menu.title}</span>
                    <svg
                      className={`chevron ${mobileDropdown === menu.title ? "open" : ""}`}
                      fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Mega mobile: Services with 3 sub-sections */}
                  {mobileDropdown === menu.title && menu.isMegaMobile && (
                    <div>
                      {menu.subSections.map((section) => (
                        <div key={section.heading}>
                          <div className="mobile-sub-heading">{section.heading}</div>
                          <div className="mobile-links-grid">
                            {section.links.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="mobile-item-link"
                                onClick={() => setMobileMenu(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Regular mobile dropdown */}
                {/* Regular mobile dropdown */}
{mobileDropdown === menu.title && !menu.isMegaMobile && (
  <div className="mobile-links-grid">
    {menu.links.map((item) =>
      item.isProfile ? (
        <button
          key={item.name}
          type="button"
          className="mobile-item-link w-full text-left"
          onClick={() => {
            setMobileMenu(false);
            setMobileDropdown(null);
            setProfileError("");
            setProfileSubmitted(false);
            setProfileModal(true);
          }}
        >
          {item.name}
        </button>
      ) : item.isCaseStudy ? (
        <button
          key={item.name}
          type="button"
          className="mobile-item-link w-full text-left"
          onClick={() => {
            setMobileMenu(false);
            setMobileDropdown(null);
            setCaseStudyOpen(true);
          }}
        >
          {item.name}
        </button>
      ) : (
        <Link
          key={item.href}
          href={item.href}
          className="mobile-item-link"
          onClick={() => setMobileMenu(false)}
        >
          {item.name}
        </Link>
      )
    )}
  </div>
)}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="px-4 sm:px-6 mt-6">
                <Link
                  href="/contact"
                  className="block rounded-xl bg-[#003e95] py-4 text-center text-white font-semibold text-[15px] tracking-wide shadow-[0_4px_16px_rgba(0,62,149,0.3)]"
                  onClick={() => setMobileMenu(false)}
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>


      {/* ── COMPANY PROFILE MODAL ── */}
{/* ── COMPANY PROFILE MODAL ── */}
{profileModal && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
    onClick={() => {
      setProfileModal(false);
      setProfileSubmitted(false);
      setProfileError("");
    }}
  >
    <div
      className="relative w-full max-w-[500px] rounded-2xl bg-white p-6 sm:p-8 shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close */}
      <button
        type="button"
        onClick={() => {
          setProfileModal(false);
          setProfileSubmitted(false);
          setProfileError("");
        }}
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
      >
        ✕
      </button>

      {!profileSubmitted ? (
        <>
          <div className="pr-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a2e]">
              Get Our Company Profile
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Fill in your details to receive our company profile.
            </p>
          </div>

          <form
            className="mt-6 space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setProfileError("");

              const form = e.currentTarget;

              const name = (
                form.elements.namedItem("profile_name") as HTMLInputElement
              ).value.trim();

              const email = (
                form.elements.namedItem("profile_email") as HTMLInputElement
              ).value.trim();

              const company = (
                form.elements.namedItem("profile_company") as HTMLInputElement
              ).value.trim();

              const phone = (
                form.elements.namedItem("profile_phone") as HTMLInputElement
              ).value.trim();

              // Email validation
              const emailRegex =
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

              // Indian mobile validation
              const phoneRegex = /^[6-9]\d{9}$/;

              if (!name) {
                setProfileError("Please enter your full name.");
                return;
              }

              if (!emailRegex.test(email)) {
                setProfileError("Please enter a valid email address.");
                return;
              }

              if (!company) {
                setProfileError("Please enter your company name.");
                return;
              }

              if (!phoneRegex.test(phone)) {
                setProfileError(
                  "Please enter a valid 10-digit Indian mobile number."
                );
                return;
              }

              try {
                setProfileLoading(true);

                // EmailJS submission
                await emailjs.send(
                  "service_7isxnke",
                  "template_ukxkdd6",
                  {
                    name: name,
                    email: email,
                    phone: phone,
                    company: company,
                    subject: "Company Profile Request",
                    message: `Company Profile requested by ${name} from ${company}.`,
                  },
                  "Nyne2oTRE0UX0KKSA"
                );

                // Only after EmailJS success
                setProfileSubmitted(true);

              } catch (error) {
                console.error("Company Profile Email Error:", error);

                setProfileError(
                  "Something went wrong while submitting. Please try again."
                );
              } finally {
                setProfileLoading(false);
              }
            }}
          >
            {/* Name */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="profile_name"
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#003e95]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Business Email
              </label>

              <input
                type="email"
                name="profile_email"
                placeholder="Enter your business email"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#003e95]"
                required
              />
            </div>

            {/* Company */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Company Name
              </label>

              <input
                type="text"
                name="profile_company"
                placeholder="Enter your company name"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#003e95]"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="tel"
                name="profile_phone"
                placeholder="10-digit mobile number"
                maxLength={10}
                inputMode="numeric"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#003e95]"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value
                    .replace(/\D/g, "")
                    .slice(0, 10);
                }}
                required
              />
            </div>

            {/* Error */}
            {profileError && (
              <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                {profileError}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={profileLoading}
              className="w-full rounded-lg bg-[#003e95] py-3.5 text-sm font-semibold text-white transition hover:bg-[#002d70] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {profileLoading ? "Submitting..." : "Request Company Profile"}
            </button>
          </form>
        </>
      ) : (
        /* SUCCESS */
        <div className="py-8 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className="mt-5 text-2xl font-bold text-[#1a1a2e]">
            Thank You!
          </h2>

          <p className="mt-2 text-gray-500">
            Your details have been submitted successfully.
          </p>

          <p className="mt-1 text-sm text-gray-400">
            You can now access our company profile.
          </p>

          {/* PDF Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            {/* Preview */}
            <a
              href="/documents/company-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg border border-[#003e95] px-5 py-3 text-sm font-semibold text-[#003e95] transition hover:bg-[#003e95] hover:text-white"
            >
              Preview PDF
            </a>

            {/* Download */}
            <a
              href="/documents/company-profile.pdf"
              download="Saasverse-Company-Profile.pdf"
              className="flex-1 rounded-lg bg-[#003e95] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#002d70]"
            >
              Download PDF
            </a>

          </div>
        </div>
      )}
    </div>
  </div>
)}


{caseStudyOpen && (
  <CaseStudyForm
    onClose={() => setCaseStudyOpen(false)}
  />
)}

    </>
  );
}