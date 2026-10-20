
import {
  FaUserMinus,
  FaClock,
  FaPuzzlePiece,
  FaUserPlus,
  FaBug,
  FaClipboardCheck,
} from "react-icons/fa";

const hiringReasons = [
  {
    icon: FaUserMinus,
    title: "Your Salesforce Admin Has Left",
    description:
      "Your only Salesforce admin has left and requests are piling up. Bring in an experienced consultant to keep your Salesforce operations running smoothly.",
  },
  {
    icon: FaClock,
    title: "A Deadline Is Approaching",
    description:
      "A deadline is close and your team doesn't have enough Salesforce hands. Get additional expertise to move the project forward without delays.",
  },
  {
    icon: FaPuzzlePiece,
    title: "You Need a Specialist Skill",
    description:
      "You need a skill your team doesn't have, such as CPQ or Marketing Cloud. Hire a consultant with the right experience for your specific requirements.",
  },
  {
    icon: FaUserPlus,
    title: "Full-Time Hiring Takes Too Long",
    description:
      "Hiring a full-time Salesforce person is taking months. Bring in a consultant who can contribute to your team while you plan your long-term hiring.",
  },
  {
    icon: FaBug,
    title: "An Automation Has Broken",
    description:
      "A release broke an automation and nobody knows how it was built. Get an experienced consultant to investigate the issue and restore the expected functionality.",
  },
  {
    icon: FaClipboardCheck,
    title: "You Need a Second Opinion",
    description:
      "You want a second opinion before signing a large proposal from another vendor. Get an independent review of the proposed solution, scope and technical approach.",
  },
];

export default function WhenHireConsultant() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-blue-50 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            When You Need Expert Support
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            When Companies Hire a{" "}
            <span className="text-blue-700">
              Salesforce Consultant
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            From unexpected team gaps to complex technical challenges, get the
            Salesforce expertise you need, exactly when you need it.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hiringReasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group relative rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 sm:p-8"
              >
                {/* Step Number */}
                <span className="absolute right-6 top-6 text-sm font-semibold text-gray-300 transition-colors duration-300 group-hover:text-blue-300">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600">
                  <Icon className="text-xl text-blue-700 transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-3 pr-5 text-xl font-semibold leading-snug text-gray-900">
                  {reason.title}
                </h3>

                <p className="text-sm leading-7 text-gray-600 sm:text-base">
                  {reason.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-7 h-1 w-10 rounded-full bg-blue-200 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-700" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

