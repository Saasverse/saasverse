
import Link from "next/link";

const supportServices = [
  {
    title: "Bug Fixing and Issue Resolution",
    description:
      "We investigate errors in Flows, Apex, validation rules, page layouts and reports, fix the underlying cause and test changes before production deployment.",
  },
  {
    title: "Admin Requests",
    description:
      "We handle user setup, access and permission issues, picklist and field changes, and report and dashboard fixes.",
  },
  {
    title: "Release Readiness",
    description:
      "We review upcoming Salesforce releases, test relevant changes in a sandbox and address potential issues before they affect your production org.",
  },
  {
    title: "Integration Support",
    description: (
      <>
        We investigate failed synchronizations and API errors between
        Salesforce and your other systems. For new integrations, explore our{" "}
        <Link
          href="/salesforce-integration-services"
          className="font-semibold text-[#006b95] hover:underline"
        >
          Salesforce integration services
        </Link>
        .
      </>
    ),
  },
  {
    title: "Performance Fixes",
    description:
      "We investigate slow pages, reports and automation, then address problems in queries, layouts and code where appropriate.",
  },
  {
    title: "Data Fixes",
    description:
      "We correct inaccurate records, merge duplicates, investigate failed data loads and introduce validation to help prevent recurring problems.",
  },
  {
    title: "Small Changes and Enhancements",
    description: (
      <>
        We handle smaller changes such as new fields, updated automation and
        reports. For larger builds, see our{" "}
        <Link
          href="/salesforce-custom-development-services"
          className="font-semibold text-[#006b95] hover:underline"
        >
          Salesforce custom development services
        </Link>
        .
      </>
    ),
  },
  {
    title: "Scheduled Maintenance",
    description:
      "We check your org on an agreed schedule for errors, limits, security settings and unused configuration, then address the findings within the agreed scope.",
  },
];

const commonIssues = [
  {
    title: "Flow and Apex Errors",
    description:
      "Automation failures, error notifications or processes that prevent records from saving correctly.",
  },
  {
    title: "Users Locked Out or Missing Access",
    description:
      "Login problems, missing permissions and records that users cannot access.",
  },
  {
    title: "Reports That Show Wrong Numbers",
    description:
      "Incorrect filters, report types or sharing settings that cause records to be omitted from reports.",
  },
  {
    title: "Failed Integrations",
    description:
      "Records that stop synchronizing between Salesforce and another connected system.",
  },
  {
    title: "Governor Limit Errors",
    description:
      "Code or automation that fails when processing too many records or exceeding Salesforce governor limits.",
  },
  {
    title: "Storage and API Limits",
    description:
      "Data or file storage approaching capacity, or API usage approaching its available limits.",
  },
  {
    title: "Changes After a Salesforce Release",
    description:
      "Features or processes that behave differently after Salesforce updates the platform.",
  },
  {
    title: "Old Workflow Rules and Process Builder",
    description:
      "We assess legacy Workflow Rules and Process Builder automation and plan migration to Flow where appropriate.",
  },
];

const supportSteps = [
  {
    title: "Log the Issue",
    description:
      "Raise a ticket in our ticket portal or send an email, with screenshots or error messages if you have them. Support is available 24/7. Include screenshots and error messages when available.",
  },
  {
    title: "Reply and Priority",
    description:
      "You get a reply within 24 hours. We set the priority based on how many users are affected, and assign an owner.",
  },
  {
    title: "Find the Cause",
    description:
      "We investigate the issue, reproduce it where possible and use a sandbox when appropriate to identify the underlying cause.",
  },
  {
    title: "Fix and Test",
    description:
      "We implement an appropriate fix and test it before deploying the change to production.",
  },
  {
    title: "Close and Document",
    description:
      "We confirm the outcome with you, close the request and document the changes made.",
  },
];

const supportModels = [
  {
    title: "On-Demand Support",
    description:
      "Support for specific issues as they arise. Suitable for teams with an existing admin who needs help resolving more complex problems.",
  },
  {
    title: "Monthly Support Hours",
    description:
      "An agreed allocation of support hours for recurring issues and smaller requests throughout the month.",
  },
  {
    title: "Scheduled Maintenance",
    description:
      "Regular health checks and release reviews on an agreed monthly or quarterly schedule to help keep your org stable.",
  },
];

const maintenanceChecklist = [
  "Failed Flows, Apex jobs and error notifications",
  "Integration failures and API errors",
  "Data and file storage usage",
  "API usage and available limits",
  "Users, profiles, permission sets and inactive users with access",
  "Salesforce Security Health Check score in Setup",
  "Unused fields, reports and automation",
  "Duplicate records and missing data in important fields",
  "Changes relevant to the next Salesforce release",
];

const supportedClouds = [
  { name: "Sales Cloud", href: "/salesforce-sales-cloud" },
  { name: "Service Cloud", href: "/salesforce-service-cloud" },
  { name: "Marketing Cloud", href: "/salesforce-marketing-cloud" },
  { name: "Experience Cloud", href: "/experience-cloud" },
  { name: "Health Cloud", href: "/health-cloud-services" },
  {
    name: "Financial Services Cloud",
    href: "/financial-cloud-implementation-services",
  },
  { name: "Nonprofit Cloud", href: "/nonprofit-cloud" },
  { name: "CPQ", href: "/salesforce-cpq-implementation" },
  { name: "Field Service", href: "/field-service-lightning" },
  { name: "MuleSoft", href: "/mulesoft-development" },
];

const reasonsToChoose = [
  {
    title: "Salesforce Partner with Navigator Expert Status",
    description:
      "Our Salesforce partner expertise supports organizations looking for experienced help with their Salesforce environments.",
  },
  {
    title: "50+ Certified Salesforce Experts",
    description:
      "Admins, developers and architects work together, helping route each issue to someone with the relevant Salesforce skills.",
  },
  {
    title: "120+ Projects for 40+ Clients",
    description:
      "We have delivered 120+ projects for 40+ clients across 19+ countries.",
  },
  {
    title: "24/7 Support",
    description:
      "Support is available 24/7, whatever your time zone. Every request gets a reply within 24 hours.",
  },
  {
    title: "Security and Confidentiality",
    description:
      "Saasverse maintains ISO 27001 and Cyber Essentials Plus certifications. NDA arrangements can be agreed before access to your org.",
  },
  {
    title: "Rated 5.0 on Clutch",
    description: (
      <>
        Read what clients say about working with us in our{" "}
        <a
          href="https://clutch.co/profile/saasverse-salesforce-consulting-partner"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#006b95] hover:underline"
        >
          Clutch reviews
        </a>
        .
      </>
    ),
  },
];

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function ContentCards({
  items,
}: {
  items: {
    title: string;
    description: React.ReactNode;
  }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#006b95] hover:shadow-md"
        >
          <h3 className="text-xl font-semibold leading-7 text-gray-900">
            {item.title}
          </h3>

          <div className="mt-3 leading-7 text-gray-600">
            {item.description}
          </div>
        </article>
      ))}
    </div>
  );
}

function ProcessCards({
  items,
}: {
  items: {
    title: string;
    description: string;
  }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf5f9] font-bold text-[#006b95]">
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3 className="text-lg font-semibold leading-7 text-gray-900">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}

export default function SalesforceSupportMaintenanceSections() {
  return (
    <div className="text-gray-800">
      {/* 3.2 What Support and Maintenance Covers */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="What Our Salesforce Support and Maintenance Covers"
            description="We help resolve Salesforce issues, maintain existing functionality and keep your org working reliably through troubleshooting, fixes and scheduled checks."
          />

          <ContentCards items={supportServices} />
        </div>
      </section>

      {/* 3.3 Common Issues */}
      <section className="bg-gray-50 px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="Common Issues We Fix"
            description=""
          />

          <ContentCards items={commonIssues} />
        </div>
      </section>

      {/* 3.4 How a Support Request Works */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="How a Support Request Works"
            description="A clear process for reporting issues, investigating their cause, testing fixes and documenting the outcome."
          />

          <ProcessCards items={supportSteps} />
        </div>
      </section>

      {/* 3.5 Support Models */}
      <section
        id="support-models"
        className="scroll-mt-24 bg-gray-50 px-4 py-16 md:py-20"
      >
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="Support Models"
            description="Choose the support arrangement that best matches your Salesforce workload and maintenance needs."
          />

          <ContentCards items={supportModels} />

          <p className="mx-auto mt-8 max-w-4xl text-center leading-7 text-gray-600">
          All models include 24/7 support, a reply within 24 hours, and requests through our ticket portal or by email.
          </p>
        </div>
      </section>

      {/* 3.6 Support, Managed Services or Hiring */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="Support, Managed Services or Hiring"
            description="Choose the right option based on whether you need issue resolution, ongoing org management or an individual working within your team."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Salesforce Support and Maintenance
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                You need specific issues resolved and your Salesforce org
                maintained. This is the service covered on this page.
              </p>
            </article>

            <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Salesforce Managed Services
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                You want one team to manage your org month after month,
                including administration, changes, releases, monitoring and
                planning. Explore{" "}
                <Link
                  href="/salesforce-managed-services"
                  className="font-semibold text-[#006b95] hover:underline"
                >
                  Salesforce managed services
                </Link>
                .
              </p>
            </article>

            <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Hire Someone for Your Team
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                You want a professional working within your own team. You can{" "}
                <Link
                  href="/hire-salesforce-admin"
                  className="font-semibold text-[#006b95] hover:underline"
                >
                  hire a Salesforce admin
                </Link>{" "}
                or{" "}
                <Link
                  href="/hire-salesforce-developers"
                  className="font-semibold text-[#006b95] hover:underline"
                >
                  hire Salesforce developers
                </Link>
                .
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 3.7 Cost */}
      <section className="bg-[#0d1c31] px-4 py-16 text-white md:py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What Salesforce Support Costs
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/90 md:text-lg">
            The cost depends on the size of your org, the clouds and
            integrations you use, the volume of issues and the support model
            you choose. After the discovery call, we provide a written proposal
            explaining the applicable costs and terms.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 font-semibold text-[#0d1c31] transition-colors hover:bg-gray-100"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      {/* 3.8 Maintenance Checklist */}
      <section className="bg-gray-50 px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title="What We Check During Scheduled Maintenance"
            description="Our maintenance checklist helps identify common operational, security, data and configuration issues."
          />

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
            <ul className="grid gap-4 sm:grid-cols-2">
              {maintenanceChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#006b95]" />
                  <span className="leading-7 text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 border-t border-gray-200 pt-6 leading-7 text-gray-600">
              After each scheduled check, you receive a written summary of
              findings, actions taken and any outstanding recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* 3.9 Clouds We Support */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="Clouds We Support"
            description="We help maintain Salesforce environments across multiple clouds and related integrations."
          />

          <div className="flex flex-wrap justify-center gap-3">
            {supportedClouds.map((cloud) => (
              <Link
                key={cloud.name}
                href={cloud.href}
                className="rounded-full border border-gray-200 bg-white px-5 py-3 font-medium text-gray-700 transition-all hover:border-[#006b95] hover:bg-[#eaf5f9] hover:text-[#006b95]"
              >
                {cloud.name}
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-4xl text-center leading-8 text-gray-600">
            If your org needs a full review first, start with our{" "}
            <Link
              href="/salesforce-consulting-company"
              className="font-semibold text-[#006b95] hover:underline"
            >
              Salesforce consulting services
            </Link>
            . If your Salesforce environment needs to be set up or rebuilt,
            explore our{" "}
            <Link
              href="/salesforce-implementation-services"
              className="font-semibold text-[#006b95] hover:underline"
            >
              Salesforce implementation services
            </Link>
            .
          </div>
        </div>
      </section>

      {/* 3.10 Why Choose Saasverse */}
      <section className="bg-gray-50 px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="Why Choose Saasverse for Salesforce Support"
            description="Get access to Salesforce administration, development and architecture expertise to help resolve issues and maintain your org."
          />

          <ContentCards items={reasonsToChoose} />
        </div>
      </section>
    </div>
  );
}

