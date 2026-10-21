import {
  FaClock,
  FaUserTie,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const hiringModels = [
  {
    number: "01",
    icon: FaClock,
    title: "Hourly",
    description:
      "You pay only for the hours used. Good for a short review, a set of fixes or advice on one problem.",
    benefits: [
      "Pay only for hours used",
      "Short reviews and audits",
      "Flexible short-term support",
    ],
    label: "Best for Quick Tasks",
  },
  {
    number: "02",
    icon: FaUserTie,
    title: "Part-time Dedicated Consultant",
    description:
      "The same consultant works on your org for a fixed number of hours each week. Good when requests keep coming in, but not enough for a full-time person.",
    benefits: [
      "Consistent weekly availability",
      "A dedicated point of contact",
      "Ideal for ongoing requests",
    ],
    label: "Best for Ongoing Support",
  },
  {
    number: "03",
    icon: FaUsers,
    title: "Full-time Dedicated Consultant or Team",
    description:
      "One or more consultants work only on your account. Good for rollouts, big clean-ups or a long list of changes.",
    benefits: [
      "Dedicated project resources",
      "Focused execution and delivery",
      "Ideal for large projects",
    ],
    label: "Best for Major Projects",
  },
];

export default function HiringModels() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-0">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-blue-50 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-[#003e95]">
            <span className="h-2 w-2 rounded-full bg-[#003e95]" />
            Flexible Engagement Options
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Our Salesforce{" "}
            <span className="text-[#003e95]">Hiring Models</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Choose the model that fits your workload and project scope. You can switch models later as the work changes.
          </p>
        </div>

        {/* Hiring Model Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hiringModels.map((model) => {
            const Icon = model.icon;

            return (
              <div
                key={model.number}
                className="group relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 sm:p-8"
              >
                {/* Card Top */}
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 transition-all duration-300 group-hover:border-[#003e95] group-hover:bg-[#003e95]">
                    <Icon className="text-xl text-blue-700 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <span className="text-3xl font-bold text-gray-200 transition-colors duration-300 group-hover:text-[#003e95]">
                    {model.number}
                  </span>
                </div>

                {/* Label */}
                <span className="mb-4 w-fit rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-[#003e95]">
                  {model.label}
                </span>

                {/* Title */}
                <h3 className="mb-4 text-xl font-semibold leading-snug text-gray-900 sm:text-2xl">
                  {model.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-7 text-gray-600 sm:text-base">
                  {model.description}
                </p>

                {/* Benefits */}
                <ul className="mt-6 space-y-3">
                  {model.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-700"
                    >
                      <FaCheckCircle className="mt-1 shrink-0 text-[#003e95]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Accent */}
                <div className="mt-auto pt-8">
                  <div className="h-1 w-12 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-20 group-hover:bg-[#003e95]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Contract Types */}
        <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50/70 p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Flexible Contract Options
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
              The contract can be a fixed-scope project or time and material,
              whichever suits the work.
            </p>
          </div>

          <div className="mt-6 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
            <div className="rounded-xl border border-blue-100 bg-white px-5 py-4">
              <p className="font-semibold text-gray-900">
                Fixed-Scope Project
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Defined deliverables
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-white px-5 py-4">
              <p className="font-semibold text-gray-900">
                Time & Materials
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Flexible working hours
              </p>
            </div>
          </div>
        </div>

        {/* Salesforce Consultant Cost Section - Added */}
        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10 lg:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-[#003e95]">
              <span className="h-2 w-2 rounded-full bg-[#003e95]" />
              Transparent Pricing
            </span>

            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              What It Costs to Hire a{" "}
              <span className="text-[#003e95]">
                Salesforce Consultant
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              The cost depends on your requirements: the role you need, the
              clouds you use, the hiring model and how many hours the work takes.
              Tell us what you need and our experts will send you a quote. You
              get the cost and terms in writing before anyone starts.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#003e95] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#002a66] hover:shadow-lg"
            >
              Request a Quote
              <span className="ml-2 text-lg" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

