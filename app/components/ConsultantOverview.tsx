
import Link from "next/link";
import {
  FaUserMinus,
  FaClock,
  FaPuzzlePiece,
  FaUserPlus,
  FaBug,
  FaClipboardCheck,
  FaAward,
  FaUsers,
  FaGlobe,
  FaShieldAlt,
  FaStar,
  FaChartLine,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const hiringReasons = [
  {
    icon: FaUserMinus,
    title: "Your Salesforce Admin Has Left",
    description:
      "Your only Salesforce admin has left and requests are piling up.",
  },
  {
    icon: FaClock,
    title: "A Deadline Is Approaching",
    description:
      "A deadline is close and your team doesn't have enough Salesforce hands.",
  },
  {
    icon: FaPuzzlePiece,
    title: "You Need Specialist Skills",
    description:
      "You need a skill your team doesn't have, such as CPQ or Marketing Cloud.",
  },
  {
    icon: FaUserPlus,
    title: "Full-Time Hiring Takes Too Long",
    description:
      "Hiring a full-time Salesforce person is taking months.",
  },
  {
    icon: FaBug,
    title: "An Automation Has Broken",
    description:
      "A release broke an automation and nobody knows how it was built.",
  },
  {
    icon: FaClipboardCheck,
    title: "You Need a Second Opinion",
    description:
      "You want a second opinion before signing a large proposal from another vendor.",
  },
];

const salesforceClouds = [
  {
    name: "Sales Cloud",
    href: "/salesforce-sales-cloud",
  },
  {
    name: "Service Cloud",
    href: "/salesforce-service-cloud",
  },
  {
    name: "Marketing Cloud",
    href: "/salesforce-marketing-cloud",
  },
  {
    name: "Experience Cloud",
    href: "/experience-cloud",
  },
  {
    name: "Health Cloud",
    href: "/health-cloud-services",
  },
  {
    name: "Financial Services Cloud",
    href: "/financial-cloud-implementation-services",
  },
  {
    name: "Nonprofit Cloud",
    href: "/nonprofit-cloud",
  },
  {
    name: "CPQ",
    href: "/salesforce-cpq-implementation",
  },
  {
    name: "Field Service",
    href: "/field-service-lightning",
  },
  {
    name: "MuleSoft",
    href: "/mulesoft-development",
  },
  {
    name: "Salesforce AI",
    href: "/salesforce-ai-company",
  },
];

const specialistRoles = [
  {
    name: "Salesforce Admin",
    href: "/hire-salesforce-admin",
  },
  {
    name: "Salesforce Architect",
    href: "/hire-salesforce-architect",
  },
  {
    name: "Salesforce Business Analyst",
    href: "/hire-salesforce-business-analyst",
  },
];

const reasonsToChoose = [
  {
    icon: FaAward,
    title: "Salesforce Partner with Navigator Expert Status",
    description:
      "Work with a Salesforce Partner with Navigator Expert status for your Salesforce consulting requirements.",
  },
  {
    icon: FaUsers,
    title: "50+ Certified Salesforce Experts",
    description:
      "Our team brings together 50+ certified Salesforce experts. Your consultant can collaborate with an architect or developer from the same team when a task requires additional expertise.",
  },
  {
    icon: FaGlobe,
    title: "US Time-Zone Overlap",
    description:
      "Our team is based in Jaipur, India. We agree on overlapping working hours with your team so your consultant can join your meetings.",
  },
  {
    icon: FaShieldAlt,
    title: "Security and Confidentiality",
    description:
      "Saasverse is ISO 27001 and Cyber Essentials Plus certified. We sign an NDA before accessing your Salesforce org.",
  },
  {
    icon: FaStar,
    title: "Rated 5.0 on Clutch",
    description:
      "Explore client feedback and learn about other businesses' experiences working with Saasverse.",
    link: "https://clutch.co/profile/saasverse-salesforce-consulting-partner",
    linkText: "Read our reviews",
    external: true,
  },
  {
    icon: FaChartLine,
    title: "120+ Projects Across 19 Countries",
    description:
      "We've delivered 120+ projects for 40+ clients across 19 countries.",
  },
];

export default function ConsultantOverview() {
  return (
    <>
      {/* SECTION 1: WHEN COMPANIES HIRE */}
      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-[#003e95">
              <span className="h-2 w-2 rounded-full bg-[#003e95]" />
              When You Need Expert Support
            </span>

            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              When Companies Hire a{" "}
              <span className="text-[#003e95]">
                Salesforce Consultant
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Get the right Salesforce expertise when your team needs extra
              capacity, specialist skills or help solving a technical problem.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hiringReasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 sm:p-8"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 transition-colors duration-300 group-hover:border-[#003e95] group-hover:bg-[#003e95]">
                      <Icon className="text-xl text-[#003e95] transition-colors duration-300 group-hover:text-white" />
                    </div>

                    <span className="text-sm font-semibold text-gray-300 group-hover:text-[#003e95]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold leading-snug text-gray-900">
                    {reason.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-600 sm:text-base">
                    {reason.description}
                  </p>

                  <div className="mt-7 h-1 w-10 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-700" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: SALESFORCE CLOUDS AND PRODUCTS */}
      <section className="relative overflow-hidden bg-gray-50 px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700">
              <span className="h-2 w-2 rounded-full bg-[#003e95]" />
              Our Salesforce Expertise
            </span>

            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Clouds and Products Our{" "}
              <span className="text-[#003e95]">Consultants Work On</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Find experienced Salesforce consultants for the platform,
              product or business function your organisation uses.
            </p>
          </div>

          {/* Cloud Links */}
          <div className="flex flex-wrap justify-center gap-3">
            {salesforceClouds.map((cloud) => (
              <Link
                key={cloud.name}
                href={cloud.href}
                className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-[#003e95] hover:shadow-md sm:text-base"
              >
                {cloud.name}
                <FaArrowRight className="text-xs text-[#003e95] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>

          {/* Specialist Roles */}
          <div className="mt-12 rounded-2xl border border-blue-100 bg-white p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-xl">
              <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                Looking for a Specific Role?
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Hire a specialist with the skills and experience your team
                needs.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
              {specialistRoles.map((role) => (
                <Link
                  key={role.name}
                  href={role.href}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-3 text-sm font-semibold text-[#003e95] transition-colors hover:bg-[#003e95] hover:text-white"
                >
                  {role.name}
                  <FaArrowRight className="text-xs" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY HIRE FROM SAASVERSE */}
      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              The Saasverse Advantage
            </span>

            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Why Hire from{" "}
              <span className="text-blue-700">Saasverse?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Get Salesforce expertise backed by a collaborative team,
              security practices and experience across multiple countries.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasonsToChoose.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 sm:p-8"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 transition-colors duration-300 group-hover:border-blue-700 group-hover:bg-blue-700">
                      <Icon className="text-xl text-blue-700 transition-colors duration-300 group-hover:text-white" />
                    </div>

                    <span className="text-sm font-semibold text-gray-300 group-hover:text-blue-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold leading-snug text-gray-900">
                    {reason.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-600 sm:text-base">
                    {reason.description}
                  </p>

                  {reason.link && (
                    <Link
                      href={reason.link}
                      target={reason.external ? "_blank" : undefined}
                      rel={
                        reason.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
                    >
                      Read our reviews
                      <FaArrowRight className="text-xs" />
                    </Link>
                  )}

                  <div className="mt-7 h-1 w-10 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-700" />
                </div>
              );
            })}
          </div>

          {/* Trust Summary */}
          <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-6 sm:grid-cols-4 sm:p-8">
            {[
              { value: "50+", label: "Certified Experts" },
              { value: "120+", label: "Projects Delivered" },
              { value: "40+", label: "Clients Served" },
              { value: "19", label: "Countries Reached" },
            ].map((stat) => (
              <div key={stat.label} className="py-3 text-center">
                <p className="text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium text-gray-600 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Ready to Find Your Salesforce Consultant?
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
              Tell us about your requirements, preferred skills and expected
              hours. We'll help you find a consultant who fits your needs.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-[#003E95] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-800"
            >
              Book a Free Consultation
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

