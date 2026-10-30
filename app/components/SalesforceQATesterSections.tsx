import Link from "next/link";

type Feature = {
  title: string;
  description: string;
};

const qaResponsibilities: Feature[] = [
  {
    title: "Writes Test Plans and Test Cases",
    description:
      "Your tester reviews requirements and user stories and writes step-by-step test cases, so every feature is tested against documented expectations.",
  },
  {
    title: "Tests Every New Feature",
    description:
      "Your tester checks new fields, pages, flows and Apex changes in a sandbox, following the workflows your users rely on.",
  },
  {
    title: "Runs Regression Tests",
    description:
      "Before each release, your tester checks that existing functionality still works, helping prevent new changes from breaking established processes.",
  },
  {
    title: "Automates Repeat Tests",
    description:
      "Your tester identifies repeatable tests that can be automated, helping your team run them more consistently across releases.",
  },
  {
    title: "Tests Your Integrations",
    description:
      "Your tester checks data transfers between Salesforce, your ERP, billing platform and other connected systems, including how failed syncs are handled.",
  },
  {
    title: "Checks Who Can See What",
    description:
      "Your tester validates profiles, permission sets and sharing rules to confirm users can access the records and functionality appropriate to their roles.",
  },
  {
    title: "Tests Data Migrations",
    description:
      "Before and after a data load, your tester checks record counts, field values and relationships to identify missing or incorrectly mapped data.",
  },
  {
    title: "Supports User Acceptance Testing",
    description:
      "Your tester prepares test scripts, helps users carry out user acceptance testing and tracks reported issues through resolution.",
  },
];

const deliverables: Feature[] = [
  {
    title: "Test Plan",
    description:
      "Defines what will be tested, how testing will be performed, which sandbox will be used and who needs to approve the results.",
  },
  {
    title: "Test Cases",
    description:
      "Step-by-step test scenarios with expected results for each step.",
  },
  {
    title: "Defect Reports",
    description:
      "Bugs documented with reproduction steps, screenshots where useful and an assigned priority.",
  },
  {
    title: "Regression Test Pack",
    description:
      "A maintained collection of tests to run before future releases.",
  },
  {
    title: "Automated Test Scripts",
    description:
      "Reusable scripts for selected repeatable tests, ready to run again as part of your testing process.",
  },
  {
    title: "Test Summary Report",
    description:
      "A summary of what was tested, what passed, which issues remain open and the testing team's release-readiness findings.",
  },
];

const hiringModels: Feature[] = [
  {
    title: "Hourly",
    description:
      "Pay for the hours used. Suitable for testing a specific release, validating a fix or checking a data migration.",
  },
  {
    title: "Part-Time Dedicated QA Tester",
    description:
      "The same tester works with your team for an agreed number of hours each week. Useful for teams that release changes regularly.",
  },
  {
    title: "Full-Time Dedicated QA Tester",
    description:
      "A tester focuses on your account. Suitable for a new rollout, a large project or a team with frequent releases.",
  },
];

const hiringSteps: Feature[] = [
  {
    title: "Tell Us What You Need",
    description:
      "Share details about your Salesforce org, release frequency and expected weekly hours. If you would like an NDA first, we can arrange one.",
  },
  {
    title: "Get Matching Profiles",
    description:
      "We share profiles of QA testers with experience relevant to your Salesforce clouds and the types of changes you make.",
  },
  {
    title: "Interview Them",
    description:
      "Talk to the testers and ask how they would approach testing your next release. You decide who joins.",
  },
  {
    title: "Agree on Terms",
    description:
      "We document the engagement model, hours and cost. You then arrange appropriate access to your sandboxes and testing tools.",
  },
  {
    title: "Start Work",
    description:
      "Your tester joins the agreed meetings and tools and shares test results and progress at the frequency you choose.",
  },
];

const hiringScenarios: Feature[] = [
  {
    title: "Users Find the Bugs First",
    description:
      "Problems appear after go-live, and your team hears about them from users instead of finding them during testing.",
  },
  {
    title: "Every Release Breaks Something",
    description:
      "A new change fixes one issue but unexpectedly breaks an existing workflow or feature.",
  },
  {
    title: "Before Go-Live",
    description:
      "You're preparing to launch Salesforce or a new cloud and want to test important workflows before release.",
  },
  {
    title: "Before a Data Migration",
    description:
      "You're moving records from an old system and need to verify that the data arrives complete and correctly mapped.",
  },
  {
    title: "Salesforce Seasonal Releases",
    description:
      "You want to validate your Salesforce configuration against upcoming platform updates in an appropriate preview environment.",
  },
  {
    title: "Developers Test Their Own Work",
    description:
      "Your developers are testing their own changes, and you want an independent testing perspective to help catch overlooked issues.",
  },
];

const reasons: Feature[] = [
  {
    title: "Salesforce Partner with Navigator Expert Status",
    description:
      "Salesforce evaluates partners for Navigator Expert status using criteria that include certified experts, completed projects and customer feedback.",
  },
  {
    title: "Testers Who Know Salesforce",
    description:
      "Our testers can collaborate with our Salesforce specialists to validate flows, permissions, integrations and platform-specific behaviour.",
  },
  {
    title: "120+ Projects for 40+ Clients",
    description:
      "We've delivered 120+ projects for 40+ clients across 19+ countries.",
  },
  {
    title: "US Time-Zone Overlap",
    description:
      "Our team is based in Jaipur, India. We agree on overlapping working hours so your tester can join stand-ups, testing reviews and release calls.",
  },
  {
    title: "Security and Confidentiality",
    description:
      "Saasverse states that it is ISO 27001 and Cyber Essentials Plus certified. NDA arrangements can be made before accessing your org, and testing can be carried out in your sandboxes.",
  },
  {
    title: "Rated 5.0 on Clutch",
    description:
      "Read client reviews to learn about their experience working with Saasverse.",
  },
];

const relatedServices = [
  {
    title: "Salesforce Developers",
    description:
      "Bring in developers for Apex, Lightning Web Components and custom integrations.",
    href: "/hire-salesforce-developers",
  },
  {
    title: "Salesforce Business Analyst",
    description:
      "Translate business requirements into clear processes and documented user stories.",
    href: "/hire-salesforce-business-analyst",
  },
  {
    title: "Salesforce Admin",
    description:
      "Get support with configuration, users, reports and day-to-day administration.",
    href: "/hire-salesforce-admin",
  },
  {
    title: "Salesforce Consultants",
    description:
      "Get help with requirements, Salesforce configuration and solution improvements.",
    href: "/hire-salesforce-consultants",
  },
  {
    title: "Salesforce Custom Development",
    description:
      "Build custom Salesforce features and extend existing functionality.",
    href: "/salesforce-custom-development-services",
  },
  {
    title: "Salesforce Support and Maintenance",
    description:
      "Maintain your Salesforce org and get help resolving issues after go-live.",
    href: "/salesforce-support-and-maintenance-services",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function FeatureCard({
  title,
  description,
  number,
}: Feature & { number?: string }) {
  return (
    <article className="h-full rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      {number && (
        <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
          {number}
        </span>
      )}

      <h3 className="text-lg font-semibold leading-7 text-gray-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
    </article>
  );
}

function ConsultationButton() {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center justify-center rounded-lg bg-[#003e95] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Book a Free Consultation
      <span aria-hidden="true" className="ml-2">
        →
      </span>
    </Link>
  );
}

export default function SalesforceQATesterSections() {
  return (
    <main className="bg-white text-gray-900">
      {/* 1. What a QA tester does */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Salesforce Quality Assurance"
            title="What a Salesforce QA Tester Does for You"
            description="A Salesforce QA tester, sometimes called a quality analyst, checks that changes work the way your users need before they go live."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qaResponsibilities.map((item, index) => (
              <FeatureCard
                key={item.title}
                {...item}
                number={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. What you get */}
      <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Testing Deliverables"
            title="What You Get"
            description="Your tester documents the testing process and results, leaving your team with reusable material for future releases."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Hiring models */}
      <section
        id="hiring-models"
        className="scroll-mt-24 px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Flexible Engagement"
            title="Hiring Models"
            description="Choose the level of QA support that fits your release schedule, project size and testing needs."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {hiringModels.map((item, index) => (
              <FeatureCard
                key={item.title}
                {...item}
                number={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center leading-7 text-gray-600">
            The contract can be a fixed-scope project or time and materials,
            depending on which approach suits the work.
          </p>
        </div>
      </section>

      {/* 4. Cost */}
      <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            eyebrow="Project Planning"
            title="What It Costs to Hire a Salesforce QA Tester"
            description="The cost depends on your hiring model, expected weekly hours, release frequency and how much testing you want to automate. Tell us what you need, and our team will prepare a quote. You'll receive the cost and terms in writing before work starts."
          />

          <ConsultationButton />
        </div>
      </section>

      {/* 5. How hiring works */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Getting Started"
            title="How Hiring Works"
            description="A straightforward process to match you with a QA tester and get your testing process underway."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hiringSteps.map((item, index) => (
              <FeatureCard
                key={item.title}
                {...item}
                number={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. When companies hire */}
      <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Common Testing Challenges"
            title="When Companies Hire a Salesforce QA Tester"
            description="Independent testing helps teams identify issues before they affect users, data or business processes."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hiringScenarios.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. QA tester vs developer vs business analyst */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Choose the Right Specialist"
            title="QA Tester, Developer or Business Analyst"
            description="Each role contributes differently to a Salesforce project. Choose the specialist based on the work you need done."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Salesforce QA Tester"
              description="You need someone to verify that features, workflows, integrations and changes work as expected before release. This is the role covered on this page."
            />

            <FeatureCard
              title="Salesforce Developer"
              description="You need someone to build custom functionality, including Apex, Lightning Web Components and integrations."
            />

            <FeatureCard
              title="Salesforce Business Analyst"
              description="You need someone to gather requirements, analyse business processes and document what needs to be built."
            />
          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-gray-900">
              Explore More Salesforce Roles and Services
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              You can also hire a Salesforce admin or consultant, or ask us to
              build custom functionality and help maintain your Salesforce
              environment.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/hire-salesforce-developers"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-700"
              >
                Hire Salesforce Developers →
              </Link>

              <Link
                href="/hire-salesforce-business-analyst"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-700"
              >
                Hire Business Analyst →
              </Link>

              <Link
                href="/hire-salesforce-admin"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-700"
              >
                Hire Salesforce Admin →
              </Link>

              <Link
                href="/hire-salesforce-consultants"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-700"
              >
                Hire Salesforce Consultants →
              </Link>

              <Link
                href="/salesforce-custom-development-services"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-700"
              >
                Custom Development →
              </Link>

              <Link
                href="/salesforce-support-and-maintenance-services"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-700"
              >
                Support and Maintenance →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Keep the existing credentials badges and approved logo wall
          in the page. Do not duplicate those blocks here. */}

      {/* 8. Why hire from Saasverse */}
      <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Saasverse"
            title="Why Hire Salesforce QA Testers from Saasverse"
            description="Get Salesforce-focused testing support from a team that understands the platform, its configurations and the way your users work."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://clutch.co/profile/saasverse-salesforce-consulting-partner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-blue-700 px-6 py-3 font-semibold text-blue-800 transition hover:bg-blue-50"
            >
              Read Our Clutch Reviews →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

