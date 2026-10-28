
import Link from "next/link";

const developmentServices = [
  {
    title: "Apex Code and Triggers",
    description:
      "Business logic that standard tools cannot handle, including complex calculations, bulk data updates and scheduled jobs, written in Apex with test classes.",
  },
  {
    title: "Lightning Web Components",
    description:
      "Custom screens, record pages and components built with Lightning Web Components (LWC), giving users the layouts and actions they need.",
  },
  {
    title: "Flows with Apex Actions",
    description:
      "Automation built with Salesforce Flow first, with Apex actions added where Flow alone is not enough.",
  },
  {
    title: "Integrations and APIs",
    description: (
      <>
        Connections between Salesforce and your ERP, website, billing or other
        systems through REST and SOAP APIs, platform events or MuleSoft. See
        our{" "}
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
    title: "Experience Cloud Portals",
    description: (
      <>
        Custom pages and components for customer and partner portals built on{" "}
        <Link
          href="/experience-cloud"
          className="font-semibold text-[#006b95] hover:underline"
        >
          Experience Cloud
        </Link>
        .
      </>
    ),
  },
  {
    title: "AppExchange Apps",
    description: (
      <>
        Managed packages built for the AppExchange, prepared for the Salesforce
        security review. See our{" "}
        <Link
          href="/salesforce-appexchange-development-company"
          className="font-semibold text-[#006b95] hover:underline"
        >
          AppExchange development services
        </Link>
        .
      </>
    ),
  },
  {
    title: "Visualforce to LWC Migration",
    description:
      "Legacy Visualforce pages and Aura components rebuilt as Lightning Web Components to work effectively in Lightning Experience.",
  },
  {
    title: "Code Review and Cleanup",
    description:
      "A review of existing Apex and components to identify slow queries, governor-limit issues, missing tests and unused code, with fixes prioritized by importance.",
  },
];

const skills = [
  "Apex, SOQL and SOSL",
  "Lightning Web Components, Aura and Visualforce",
  "Flow and Apex actions",
  "REST and SOAP APIs, platform events and Change Data Capture",
  "MuleSoft",
  "Salesforce DX, Salesforce CLI, Git and CI/CD pipelines",
  "Sandboxes, scratch orgs and change sets",
  "Apex test classes and code coverage",
];

const hiringModels = [
  {
    title: "Hourly",
    description:
      "Pay for the hours used. Suitable for a bug fix, code review or a single component.",
  },
  {
    title: "Part-Time Dedicated Developer",
    description:
      "The same developer works on your org for an agreed number of hours each week. Ideal for a steady flow of development requests.",
  },
  {
    title: "Full-Time Dedicated Developer or Team",
    description:
      "One or more developers work exclusively on your account. Suitable for large builds, integrations or AppExchange applications.",
  },
];

const hiringSteps = [
  {
    title: "Tell Us What You Need",
    description:
      "Share the work you have in mind, the required skills and roughly how many hours you expect. We can sign an NDA first if you prefer.",
  },
  {
    title: "Get Matching Profiles",
    description:
      "We share profiles of developers with relevant skills and experience.",
  },
  {
    title: "Interview Them",
    description:
      "Speak with the developers, ask technical questions or give them a short task. You decide who joins your project.",
  },
  {
    title: "Agree on Terms",
    description:
      "We document the engagement model, hours and cost. You then provide the developer with appropriate access to your sandbox and tools.",
  },
  {
    title: "Start Work",
    description:
      "Your developer joins your meetings, tools and code repository, with progress updates at an agreed frequency.",
  },
];

const developmentPractices = [
  {
    title: "Sandbox First",
    description:
      "Development takes place in a sandbox or scratch org rather than directly in production.",
  },
  {
    title: "Clicks Before Code",
    description:
      "When a standard feature or Flow can solve the problem, we prefer that approach. We write code when it is needed, helping keep your org easier to maintain.",
  },
  {
    title: "Tests with Every Change",
    description:
      "Our developers write Apex test classes to validate business logic and help meet Salesforce deployment requirements. Production deployments generally require at least 75% Apex code coverage, alongside passing tests and other deployment checks.",
  },
  {
    title: "Code Within Governor Limits",
    description:
      "Code is designed to handle bulk records and respect Salesforce governor limits, helping it remain reliable as data volumes grow.",
  },
  {
    title: "Version Control and Reviews",
    description:
      "Code can be maintained in Git and reviewed by another developer before deployment, according to the agreed workflow.",
  },
  {
    title: "Documentation",
    description:
      "Changes come with notes explaining what was built and why, helping your team or a future developer maintain the solution.",
  },
];

const hiringReasons = [
  {
    title: "Standard Features Are Not Enough",
    description:
      "Your process needs business logic or screens that standard Flow and page layouts cannot handle.",
  },
  {
    title: "A New Integration",
    description:
      "Salesforce needs to send or receive data from another system.",
  },
  {
    title: "A Development Backlog",
    description:
      "Your administrator or in-house team has more development requests than time to complete them.",
  },
  {
    title: "Old Code That Breaks",
    description:
      "Existing Apex or Visualforce is failing, running slowly or hitting governor limits.",
  },
  {
    title: "Building an AppExchange App",
    description:
      "You want to build an application to distribute through Salesforce AppExchange.",
  },
  {
    title: "Hiring Takes Too Long",
    description:
      "Finding and recruiting a full-time Salesforce developer is taking longer than expected.",
  },
];

const clouds = [
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
  { name: "Salesforce AI", href: "/salesforce-ai-company" },
];

const reasonsToChoose = [
  {
    title: "Salesforce Partner with Navigator Expert Status",
    description:
      "Our Salesforce partner credentials and expertise support customers looking for experienced development resources.",
  },
  {
    title: "50+ Certified Salesforce Experts",
    description:
      "Developers, consultants and architects work together, so your developer can involve an architect when design decisions require additional expertise.",
  },
  {
    title: "120+ Projects for 40+ Clients",
    description:
      "We have delivered 120+ projects for 40+ clients across 19+ countries.",
  },
  {
    title: "US Time-Zone Overlap",
    description:
      "Our team is based in Jaipur, India. We agree on overlapping working hours so your developer can join stand-ups, discussions and reviews.",
  },
  {
    title: "Security and Confidentiality",
    description:
      "Saasverse maintains ISO 27001 and Cyber Essentials Plus certifications. NDA arrangements can be agreed before access to your org or code.",
  },
  {
    title: "Rated 5.0 on Clutch",
    description: (
      <>
        Read what clients say about working with us on{" "}
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

export default function SalesforceDeveloperSections() {
  return (
    <div className="text-gray-800">
      {/* 3.2 Development Services */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="What Our Salesforce Developers Build"
            description="From custom Apex logic to integrations and Lightning components, our developers build Salesforce solutions around your business requirements."
          />
          <ContentCards items={developmentServices} />
        </div>
      </section>

      {/* 3.3 Skills and Tools */}
      <section className="bg-gray-50 px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="Skills and Tools"
            description="Our developers use Salesforce technologies and development tools to build, test and maintain custom solutions."
          />

          <div className="mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
            <ul className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill) => (
                <li key={skill} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#006b95]" />
                  <span className="leading-7 text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3.4 Hiring Models */}
      <section
        id="hiring-models"
        className="scroll-mt-24 bg-white px-4 py-16 md:py-20"
      >
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="Hiring Models"
            description="Choose a Salesforce development arrangement that fits your workload, project scope and team."
          />

          <ContentCards items={hiringModels} />

          <p className="mx-auto mt-8 max-w-3xl text-center leading-7 text-gray-600">
            The engagement can be structured as a fixed-scope project or on a
            time-and-materials basis, depending on the work.
          </p>
        </div>
      </section>

      {/* 3.5 Cost */}
      <section className="bg-[#0d1c31] px-4 py-16 text-white md:py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What It Costs to Hire a Salesforce Developer
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/90 md:text-lg">
            The cost depends on your requirements, the skills you need, the
            hiring model, the time involved and the complexity of the code or
            integration. Tell us what you need and our team will prepare a
            tailored quote. You will receive the cost and terms in writing
            before work starts.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 font-semibold text-[#0d1c31] transition-colors hover:bg-gray-100"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      {/* 3.6 How Hiring Works */}
      <section className="bg-gray-50 px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="How Hiring Works"
            description="A straightforward process to help you find the right Salesforce developer and get started."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {hiringSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf5f9] font-bold text-[#006b95]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3.7 Development Practices */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="How Our Developers Work"
            description="We focus on maintainable code, appropriate testing and a development process that protects your production environment."
          />
          <ContentCards items={developmentPractices} />
        </div>
      </section>

      {/* 3.8 When to Hire */}
      <section className="bg-gray-50 px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="When Companies Hire a Salesforce Developer"
            description="Bring in a developer when your business needs custom functionality, integrations or additional development capacity."
          />
          <ContentCards items={hiringReasons} />
        </div>
      </section>

      {/* 3.9 Developer, Consultant or Admin */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="Developer, Consultant or Admin"
            description="Choose the right Salesforce professional based on the work you need done."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Salesforce Developer
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                You need code, Apex, Lightning Web Components, integrations or
                an AppExchange application. This is the right page for you.
              </p>
            </article>

            <article className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Salesforce Consultant
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                You need someone to plan the work, map processes and define
                requirements. Explore{" "}
                <Link
                  href="/hire-salesforce-consultants"
                  className="font-semibold text-[#006b95] hover:underline"
                >
                  hiring Salesforce consultants
                </Link>
                .
              </p>
            </article>

            <article className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Salesforce Admin
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                You need day-to-day configuration, user management, reports and
                smaller changes without custom code. Explore{" "}
                <Link
                  href="/hire-salesforce-admin"
                  className="font-semibold text-[#006b95] hover:underline"
                >
                  hiring a Salesforce admin
                </Link>
                .
              </p>
            </article>
          </div>

          <div className="mx-auto mt-10 max-w-4xl text-center leading-8 text-gray-600">
            For a complex org, you can also{" "}
            <Link
              href="/hire-salesforce-architect"
              className="font-semibold text-[#006b95] hover:underline"
            >
              hire a Salesforce architect
            </Link>
            . For a complete project, explore{" "}
            <Link
              href="/salesforce-custom-development-services"
              className="font-semibold text-[#006b95] hover:underline"
            >
              Salesforce custom development services
            </Link>{" "}
            or{" "}
            <Link
              href="/salesforce-implementation-services"
              className="font-semibold text-[#006b95] hover:underline"
            >
              Salesforce implementation services
            </Link>
            . For ongoing org support, see{" "}
            <Link
              href="/salesforce-managed-services"
              className="font-semibold text-[#006b95] hover:underline"
            >
              Salesforce managed services
            </Link>
            .
          </div>
        </div>
      </section>

      {/* 3.10 Clouds and Products */}
      <section className="bg-gray-50 px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="Clouds and Products Our Developers Work On"
            description="Explore Salesforce platforms and products for which we offer relevant development services."
          />

          <div className="flex flex-wrap justify-center gap-3">
            {clouds.map((cloud) => (
              <Link
                key={cloud.name}
                href={cloud.href}
                className="rounded-full border border-gray-200 bg-white px-5 py-3 font-medium text-gray-700 transition-all hover:border-[#006b95] hover:bg-[#eaf5f9] hover:text-[#006b95]"
              >
                {cloud.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3.11 Why Saasverse */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="Why Hire Salesforce Developers from Saasverse"
            description="Work with a team that brings Salesforce development skills together with consulting, architecture and delivery experience."
          />
          <ContentCards items={reasonsToChoose} />
        </div>
      </section>
    </div>
  );
}

