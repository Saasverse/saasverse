
const hiringSteps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Share the clouds you use, the work you have in mind and roughly how many hours you expect. We sign an NDA first if you want one.",
  },
  {
    number: "02",
    title: "Get Matching Profiles",
    description:
      "We send you profiles of consultants who know your clouds and your type of work.",
  },
  {
    number: "03",
    title: "Interview Them",
    description:
      "Talk to the consultants and ask them about your own org. You decide who joins.",
  },
  {
    number: "04",
    title: "Agree on Terms",
    description:
      "We put the model, hours and rate in writing. You then give the consultant access to the systems they need.",
  },
  {
    number: "05",
    title: "Start Work",
    description:
      "Your consultant joins your meetings and tools and reports progress as often as you want.",
  },
];

export default function HowHiringWorks() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-15">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#003e95]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#003e95]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#003e95]/20 bg-[#003e95]/5 px-4 py-2 text-sm font-medium text-[#003e95]">

            <span className="h-2 w-2 rounded-full bg-[#003e95]" />
           5 Steps to Start
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            How Hiring{" "}
            <span className="text-[#003e95]">Works</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            From your first conversation to getting work done, we make it easy
            to find and onboard the right Salesforce consultant for your team.
          </p>
        </div>

        {/* Hiring Steps */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {hiringSteps.map((step, index) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#003e95]/40 hover:shadow-xl hover:shadow-[#003e95]/10"
            >
              {/* Number and Connector */}
              <div className="mb-7 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#003e95]/20 bg-[#003e95]/5 text-lg font-semibold text-[#003e95] transition-all duration-300 group-hover:border-[#003e95] group-hover:bg-[#003e95] group-hover:text-white">
                  {step.number}
                </div>

                {index !== hiringSteps.length - 1 && (
                  <div className="hidden h-px flex-1 bg-gradient-to-r from-[#003e95]/50 to-[#003e95]/10 lg:ml-3 lg:block" />
                )}
              </div>

              {/* Step Content */}
              <h3 className="mb-3 text-lg font-semibold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-[#003e95]">
                {step.title}
              </h3>

              <p className="text-sm leading-7 text-gray-600">
                {step.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-6 h-1 w-10 rounded-full bg-[#003e95]/25 transition-all duration-300 group-hover:w-16 group-hover:bg-[#003e95]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

