
import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "Salesforce Partner with Navigator Expert Status",
    description:
      "Salesforce gives Navigator Expert status to partners based on certified experts, completed projects and customer feedback.",
    icon: "✦",
  },
  {
    number: "02",
    title: "50+ Certified Salesforce Experts",
    description:
      "Consultants, architects and developers work in the same team, so the advice we give is advice we know how to build.",
    icon: "♙",
  },
  {
    number: "03",
    title: "120+ Projects for 40+ Clients",
    description:
      "We have delivered 120+ projects for 40+ clients across 19+ countries.",
    icon: "▥",
  },
  {
    number: "04",
    title: "US Time-Zone Overlap",
    description:
      "Our team is based in Jaipur, India. We agree on overlapping working hours with your team, so we can join your meetings.",
    icon: "◷",
  },
  {
    number: "05",
    title: "Security and Confidentiality",
    description:
      "Saasverse is ISO 27001 and Cyber Essentials Plus certified. We sign an NDA before we access your org.",
    icon: "◇",
  },
  {
    number: "06",
    title: "Rated 5.0 on Clutch",
    description:
      "Read what clients say about working with us.",
    icon: "★",
    link: "https://clutch.co/profile/saasverse-salesforce-consulting-partner",
  },
];

export default function SalesforceConsultingWhyChooseUs() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Saasverse
          </span>

          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Why Choose Saasverse for{" "}
            <span className="text-[#003e95]">
              Salesforce Consulting
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Work with a Salesforce consulting team that combines platform
            expertise, practical implementation experience and a focus on
            your business requirements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.number}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              {/* Number */}
              <span className="absolute right-5 top-5 text-sm font-bold text-slate-300">
                {solution.number}
              </span>

              {/* Icon */}
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl font-bold text-[#003e95] transition-all duration-300 group-hover:bg-[#003e95] group-hover:text-white">
                {solution.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                {solution.description}
              </p>

              {/* Clutch Link */}
              {solution.link && (
                <div className="mt-5">
                  <Link
                    href={solution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 px-5 py-2.5 text-sm font-semibold text-[#003e95] transition-all hover:bg-[#003e95] hover:text-white"
                  >
                    Read Our Reviews
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              )}

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-[#003e95] transition-all duration-300 group-hover:w-2/3" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#book-a-free-consultation"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#003e95] px-8 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
          >
            Book a Free Consultation
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

