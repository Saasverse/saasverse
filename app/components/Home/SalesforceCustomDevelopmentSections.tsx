
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: "⚙",
    title: "Custom Apps on Salesforce",
    description:
      "Some processes don’t fit Salesforce out of the box, like project tracking, site inspections, multi-step approvals or partner onboarding. We build the objects, pages and logic so these processes run inside Salesforce too.",
  },
  {
    number: "02",
    icon: "▣",
    title: "Lightning Web Components",
    description:
      "We build custom screens, record pages, wizards and data tables with Lightning Web Components (LWC). Your users get the information and actions they need on one screen, instead of clicking through five.",
  },
  {
    number: "03",
    icon: "⌘",
    title: "Apex Code",
    description:
      "For logic that Flow can’t handle well, such as complex calculations, bulk updates, scheduled jobs and custom APIs, we write Apex. Every class comes with tests.",
  },
  {
    number: "04",
    icon: "⇄",
    title: "Advanced Flow",
    description:
      "We build screen flows that guide users step by step, and record-triggered flows that run in the background. Where Flow reaches its limit, we add an Apex action.",
  },
  {
    number: "05",
    icon: "▤",
    title: "Reports and Dashboards",
    description:
      "We build report types, dashboards and CRM Analytics apps around the numbers your managers actually look at every week.",
  },
  {
    number: "06",
    icon: "◫",
    title: "Experience Cloud Components",
    description:
      "We build custom pages and components for customer and partner portals.",
    link: "/experience-cloud",
    linkText: "Explore Experience Cloud services",
  },
  {
    number: "07",
    icon: "↗",
    title: "Visualforce and Aura to LWC",
    description:
      "Old Visualforce pages and Aura components can become difficult to maintain. We rebuild them as Lightning Web Components to make them easier to maintain and improve the user experience.",
  },
  {
    number: "08",
    icon: "▧",
    title: "AppExchange Apps",
    description:
      "We build managed packages designed for Salesforce security review requirements.",
    link: "/salesforce-appexchange-development-company",
    linkText: "Explore AppExchange development",
  },
];

const useCases = [
  {
    icon: "⚙",
    title: "Salesforce Doesn’t Fit Your Process",
    description:
      "You have a way of working that standard objects and fields can’t model without workarounds.",
  },
  {
    icon: "▣",
    title: "Too Many Clicks for One Task",
    description:
      "Your users jump between several pages to finish one job. A custom component can bring it onto one screen.",
  },
  {
    icon: "⌘",
    title: "Rules Too Complex for Flow",
    description:
      "The logic has too many conditions, or the data volume is too high, for Flow to run reliably.",
  },
  {
    icon: "↻",
    title: "Old Code Holding You Back",
    description:
      "You have Visualforce pages, Aura components or old Apex that are slow, hard to change or keep breaking.",
  },
  {
    icon: "▧",
    title: "An App You Want to Sell",
    description:
      "You want to build an app and sell it to other Salesforce customers on the AppExchange.",
  },
  {
    icon: "⇄",
    title: "Data That Lives Elsewhere",
    description:
      "Your users need to see or update data from another system without leaving Salesforce.",
  },
];

const projectSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "Tell us what you need built, who will use it and how it fits into your current setup. If you’d like an NDA first, we’ll sign one.",
  },
  {
    number: "02",
    title: "Requirements and Design",
    description:
      "We write the requirements and user stories, then design the data model, screens and logic.",
  },
  {
    number: "03",
    title: "Scope and Plan",
    description:
      "We send you a written scope with the timeline and cost. Nothing starts until you approve it.",
  },
  {
    number: "04",
    title: "Build in a Sandbox",
    description:
      "We build in a sandbox or scratch org and show you working pieces at regular reviews, so you can give feedback early.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "We run the Apex tests, then test with your users before anything goes to production.",
  },
  {
    number: "06",
    title: "Launch and Handover",
    description:
      "We deploy to production, hand over the code and documentation, and stay on to support you after launch.",
  },
];

const developmentStandards = [
  {
    icon: "◇",
    title: "Sandbox First",
    description:
      "We build and test everything in a sandbox or scratch org. Nothing is built directly in your production org.",
  },
  {
    icon: "✓",
    title: "Tests With Every Change",
    description:
      "Salesforce requires at least 75% Apex code coverage for deployment. Our tests check that the business logic works, not just that the number is reached.",
  },
  {
    icon: "↗",
    title: "Code That Handles Volume",
    description:
      "We write code that works on thousands of records at once and stays within Salesforce governor limits, so it keeps working as your data grows.",
  },
  {
    icon: "⌘",
    title: "Version Control and Code Review",
    description:
      "We keep all code in Git, and a second developer reviews every change before it’s deployed.",
  },
  {
    icon: "◈",
    title: "Security Built In",
    description:
      "Our code follows your sharing rules and field-level security, so people only see the data they’re allowed to see.",
  },
  {
    icon: "▤",
    title: "Documentation",
    description:
      "At the end of every project, you get documentation of what we built and how it works, so your team or any future partner can maintain it.",
  },
];

const projectOptions = [
  {
    icon: "⚙",
    title: "Custom Development Project",
    description:
      "You have a defined piece of work. We scope it, build it, test it and hand it over to you.",
  },
  {
    icon: "♙",
    title: "Hire a Salesforce Developer",
    description:
      "You want a developer working inside your team by the hour, part time or full time, picking up items from your backlog.",
    link: "/hire-salesforce-developers",
    linkText: "Hire Salesforce developers",
  },
];

const reasons = [
  {
    icon: "✦",
    title: "Salesforce Partner with Navigator Expert Status",
    description:
      "Salesforce gives Navigator Expert status to partners based on certified experts, completed projects and customer feedback.",
  },
  {
    icon: "♙",
    title: "50+ Certified Salesforce Experts",
    description:
      "Our developers, architects and consultants work in the same team, so the design and the code are planned together from day one.",
  },
  {
    icon: "▥",
    title: "120+ Projects for 40+ Clients",
    description:
      "We’ve delivered 120+ projects for 40+ clients across 19+ countries.",
  },
  {
    icon: "◷",
    title: "24/7 Support After Launch",
    description:
      "Support is available 24/7, and every request gets a reply within 24 hours through our ticket portal or email.",
  },
  {
    icon: "◇",
    title: "Security and Confidentiality",
    description:
      "Saasverse is ISO 27001 and Cyber Essentials Plus certified. We sign an NDA before we touch your org or code.",
  },
  {
    icon: "★",
    title: "Rated 5.0 on Clutch",
    description: "See what our clients say about working with us.",
    link: "https://clutch.co/profile/saasverse-salesforce-consulting-partner",
    linkText: "Read our reviews",
    external: true,
  },
];

const clouds = [
  { name: "Sales Cloud", href: "/salesforce-sales-cloud" },
  { name: "Service Cloud", href: "/salesforce-service-cloud" },
  { name: "Experience Cloud", href: "/experience-cloud" },
  { name: "Health Cloud", href: "/health-cloud-services" },
  {
    name: "Financial Services Cloud",
    href: "/financial-cloud-implementation-services",
  },
  { name: "Nonprofit Cloud", href: "/nonprofit-cloud" },
  { name: "CPQ", href: "/salesforce-cpq-implementation" },
  { name: "Field Service", href: "/field-service-lightning" },
  { name: "Salesforce AI", href: "/salesforce-ai-company" },
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
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
          {eyebrow}
        </span>
      )}

      <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  link,
  linkText,
  external = false,
  number,
}: {
  icon: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  external?: boolean;
  number?: string;
}) {
  return (
    <article className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-7">
      {number && (
        <span className="absolute right-4 top-4 text-xs font-bold text-slate-300">
          {number}
        </span>
      )}

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-[#003e95] transition-colors duration-300 group-hover:bg-[#003e95] group-hover:text-white">
        <span aria-hidden="true">{icon}</span>
      </div>

      <h3 className="text-lg font-bold leading-snug text-slate-900">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
        {description}
      </p>

      {link && linkText && (
        <div className="mt-4">
          {external ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#003e95] underline decoration-blue-200 underline-offset-4 hover:decoration-[#003e95]"
            >
              {linkText} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <Link
              href={link}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#003e95] underline decoration-blue-200 underline-offset-4 hover:decoration-[#003e95]"
            >
              {linkText} <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      )}
    </article>
  );
}

export default function SalesforceCustomDevelopmentSections() {
  return (
    <div className="overflow-hidden bg-white text-slate-900">
      {/* What We Build */}
      <section className="bg-gradient-to-b from-blue-50/70 to-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Services"
            title="What We Build"
            description="Custom Salesforce applications, components and automation designed around the way your business works."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <FeatureCard key={service.number} {...service} />
            ))}
          </div>

          <p className="mt-8 text-center text-sm leading-7 text-slate-600">
            Need Salesforce connected to other systems?{" "}
            <Link
              href="/salesforce-integration-services"
              className="font-semibold text-[#003e95] underline underline-offset-4"
            >
              Explore Salesforce integration services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* When You Need Custom Development */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Use Cases"
            title="When You Need Custom Development"
            description="Custom development can help when standard Salesforce features no longer meet your requirements."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Clicks or Code */}
      <section className="bg-blue-50/70 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Our Approach"
            title="Clicks or Code: How We Decide"
          />

          <div className="rounded-3xl border border-blue-100 bg-white p-7 text-center shadow-sm sm:p-10">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl text-[#003e95]">
              ⌘
            </div>

            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              We start with standard Salesforce features and Flow, because
              your admins can maintain them without a developer. We write
              code only when it’s the better choice: the logic is complex,
              the data volume is high, the screen needs a custom layout, or
              the same result would take a pile of fragile Flows. Before we
              build anything, we show you which parts will be clicks and
              which will be code, and why.
            </p>
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Process"
            title="How a Custom Development Project Works"
            description="A clear process from initial discovery to deployment and handover."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectSteps.map((step) => (
              <article
                key={step.number}
                className="flex h-full flex-col items-center rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#003e95] text-sm font-bold text-white">
                  {step.number}
                </span>

                <h3 className="text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build */}
      <section className="bg-gradient-to-b from-blue-50/70 to-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Development Standards"
            title="How We Build"
            description="A development approach focused on testing, maintainability, performance and security."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {developmentStandards.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 text-center sm:p-12">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Project Planning
            </span>

            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              What Custom Development Costs
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
              The cost depends on your requirements: what needs to be built,
              how complex the logic and screens are, which systems are
              involved and how much testing it needs. After the discovery
              call, we send you a written scope with the cost and timeline.
              You can choose a fixed-scope project or time and materials.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#003e95] px-7 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
            >
              Book a Free Consultation
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Project or Developer */}
      <section className="bg-blue-50/70 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Choose Your Model"
            title="A Project or a Developer in Your Team?"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projectOptions.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-4xl text-center">
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              After launch, you get 24/7 support with a reply within 24
              hours through our ticket portal or email. Explore{" "}
              <Link
                href="/salesforce-support-and-maintenance-services"
                className="font-semibold text-[#003e95] underline underline-offset-4"
              >
                Salesforce support and maintenance
              </Link>{" "}
              or{" "}
              <Link
                href="/salesforce-managed-services"
                className="font-semibold text-[#003e95] underline underline-offset-4"
              >
                Salesforce managed services
              </Link>
              . Setting up Salesforce from scratch? See our{" "}
              <Link
                href="/salesforce-implementation-services"
                className="font-semibold text-[#003e95] underline underline-offset-4"
              >
                Salesforce implementation services
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Clouds We Build On */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Salesforce Platforms"
            title="Clouds We Build On"
            description="We build custom features and business solutions across Salesforce clouds."
          />

          <div className="flex flex-wrap justify-center gap-3">
            {clouds.map((cloud) => (
              <Link
                key={cloud.name}
                href={cloud.href}
                className="rounded-full border border-blue-100 bg-blue-50/60 px-5 py-3 text-sm font-semibold text-[#003e95] transition-all duration-300 hover:border-[#003e95] hover:bg-[#003e95] hover:text-white"
              >
                {cloud.name}
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Saasverse */}
      <section className="bg-gradient-to-b from-blue-50/70 to-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Saasverse"
            title="Why Choose Saasverse for Salesforce Custom Development"
            description="Work with a team that combines Salesforce expertise, custom development experience and a structured delivery process."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <FeatureCard key={reason.title} {...reason} />
            ))}
          </div>

        
        </div>
      </section>
    </div>
  );
}

