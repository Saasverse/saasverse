
import Link from "next/link";
import type { ReactNode } from "react";

const systems = [
  {
    icon: "▤",
    title: "ERP Systems",
    description:
      "Connect Salesforce to your ERP, such as NetSuite, SAP, Microsoft Dynamics or Acumatica, so orders, invoices, products and stock levels match in both systems.",
  },
  {
    icon: "▣",
    title: "Accounting and Billing",
    description:
      "Send closed deals to QuickBooks, Xero or your billing system, and show invoice and payment status in Salesforce.",
  },
  {
    icon: "↗",
    title: "Marketing Tools",
    description:
      "Sync leads, contacts and campaign results between Salesforce and tools such as HubSpot, Mailchimp or Account Engagement (Pardot).",
    link: "/salesforce-marketing-cloud",
    linkText: "Explore Marketing Cloud services",
  },
  {
    icon: "◎",
    title: "Website and Forms",
    description:
      "Send website form submissions, sign-ups and quote requests straight into Salesforce as leads or cases.",
  },
  {
    icon: "🛒",
    title: "eCommerce Platforms",
    description:
      "Bring orders and customer data from Shopify, Magento or other online stores into Salesforce.",
  },
  {
    icon: "☎",
    title: "Phone and Support Tools",
    description:
      "Connect your phone system, help desk or chat tool, so calls and conversations are logged on the right record.",
    link: "/salesforce-service-cloud",
    linkText: "Explore Service Cloud services",
  },
  {
    icon: "▥",
    title: "Other CRMs and Databases",
    description:
      "Connect Salesforce to another CRM or an internal database during a migration or when both systems must stay in use.",
  },
  {
    icon: "◉",
    title: "Collaboration Tools",
    description:
      "Connect Salesforce to Slack, Microsoft Teams, Outlook or Google Workspace for alerts, emails and calendar events.",
  },
];

const connectionMethods = [
  {
    icon: "⌘",
    title: "REST and SOAP APIs",
    description:
      "Create direct connections between Salesforce and another system's API for most one-to-one integrations.",
  },
  {
    icon: "ϟ",
    title: "Platform Events and Change Data Capture",
    description:
      "Send messages when Salesforce records change, allowing connected systems to react near real time.",
  },
  {
    icon: "◷",
    title: "Scheduled Batch Syncs",
    description:
      "Move large volumes of data on a schedule, such as every hour or every night, when real-time updates are unnecessary.",
  },
  {
    icon: "↔",
    title: "MuleSoft",
    description:
      "Connect multiple systems through a managed integration platform with reusable APIs and centralized orchestration.",
    link: "/mulesoft-development",
    linkText: "Explore MuleSoft development",
  },
  {
    icon: "⚙",
    title: "Other Middleware",
    description:
      "Use middleware such as Boomi, Jitterbit, Workato or Zapier when it fits your existing systems and requirements.",
  },
  {
    icon: "▦",
    title: "Ready-Made Connectors",
    description:
      "Evaluate AppExchange apps and vendor connectors first when a suitable integration already exists.",
  },
];

const benefits = [
  {
    icon: "✓",
    title: "No More Copying Data by Hand",
    description:
      "Reduce repetitive data entry by syncing orders, customer details and invoices between systems.",
  },
  {
    icon: "◎",
    title: "One View of Each Customer",
    description:
      "Give sales and support teams better visibility into orders, invoices and service history from Salesforce.",
  },
  {
    icon: "◇",
    title: "Fewer Errors",
    description:
      "Reduce typos, duplicate records and mismatched information through consistent data synchronization.",
  },
  {
    icon: "➜",
    title: "Faster Handoffs",
    description:
      "Trigger downstream processes when a deal closes instead of waiting for someone to enter the same details again.",
  },
  {
    icon: "▥",
    title: "Reports You Can Trust",
    description:
      "Improve reporting consistency by aligning revenue, pipeline and order data across connected systems.",
  },
  {
    icon: "↗",
    title: "Fewer Logins",
    description:
      "Help users find relevant customer information in Salesforce without constantly switching between applications.",
  },
];

const projectSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "Tell us which systems you want to connect, what data needs to move and how often. We can sign an NDA first if required.",
  },
  {
    number: "02",
    title: "Data Mapping",
    description:
      "Map fields between systems, identify the source of truth for each record, and agree how to handle duplicates and conflicts.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Choose the integration method, plan error handling and review API and data limits on both sides.",
  },
  {
    number: "04",
    title: "Build in a Sandbox",
    description:
      "Develop and test the integration in a suitable sandbox or test environment using representative data.",
  },
  {
    number: "05",
    title: "Testing with Your Team",
    description:
      "Validate real-world scenarios, including failed requests, duplicate records and recovery procedures, before go-live.",
  },
  {
    number: "06",
    title: "Go-Live and Monitoring",
    description:
      "Launch the integration, monitor initial runs and provide documentation for your team.",
  },
];

const commonProblems = [
  {
    icon: "⚠",
    title: "Syncs That Fail Without Warning",
    description:
      "Add error logging, alerts and retry handling so failed records can be identified and investigated.",
  },
  {
    icon: "▤",
    title: "Duplicate Records",
    description:
      "Use matching rules, external IDs and suitable upsert logic to prevent duplicate customers and orders.",
  },
  {
    icon: "ϟ",
    title: "API Limits Running Out",
    description:
      "Reduce unnecessary API calls, use bulk operations where suitable and schedule heavy syncs appropriately.",
  },
  {
    icon: "◷",
    title: "Slow or Delayed Data",
    description:
      "Use event-driven updates for time-sensitive information and scheduled processing for larger, less urgent data.",
  },
  {
    icon: "▥",
    title: "Data That Doesn't Match",
    description:
      "Correct field mappings, transformation rules and ownership so connected systems use consistent information.",
  },
  {
    icon: "▣",
    title: "Integrations Nobody Understands",
    description:
      "Document data flows, dependencies, error handling and recovery steps to make ongoing maintenance easier.",
  },
];

const maintenanceItems = [
  "Monitor integration jobs and failed transactions",
  "Review error logs and retry unsuccessful records",
  "Check field mappings when either system changes",
  "Review API usage and integration performance",
  "Test important workflows after releases",
  "Maintain integration documentation and recovery steps",
];

const trustCards = [
  {
    icon: "✦",
    title: "Salesforce Partner",
    description: "Navigator Expert status",
  },
  {
    icon: "♙",
    title: "50+ Certified Experts",
    description: "Salesforce specialists",
  },
  {
    icon: "▥",
    title: "120+ Projects",
    description: "Across 40+ clients",
  },
  {
    icon: "◷",
    title: "Support Options",
    description: "Discuss your coverage needs",
  },
  {
    icon: "◇",
    title: "Security",
    description: "Confidentiality-focused delivery",
  },
  {
    icon: "★",
    title: "Rated 5.0 on Clutch",
    description: "Read client reviews",
    link: "https://clutch.co/profile/saasverse-salesforce-consulting-partner",
  },
];

const relatedServices = [
  {
    title: "Salesforce Implementation",
    description:
      "Setting up Salesforce for the first time? Plan your implementation around your business processes and integration requirements.",
    link: "/salesforce-implementation-services",
  },
  {
    title: "Custom Development",
    description:
      "Build custom Salesforce functionality, automation and applications to support your integration requirements.",
    link: "/salesforce-custom-development-services",
  },
  {
    title: "Hire Salesforce Developers",
    description:
      "Extend your team with Salesforce developers for integration development and ongoing enhancements.",
    link: "/hire-salesforce-developers",
  },
  {
    title: "Experience Cloud",
    description:
      "Build customer or partner portals that can display relevant information from connected systems.",
    link: "/experience-cloud",
  },
  {
    title: "Support and Maintenance",
    description:
      "Keep integrations running with troubleshooting, maintenance and planned improvements.",
    link: "/salesforce-support-and-maintenance-services",
  },
  {
    title: "Salesforce Managed Services",
    description:
      "Get ongoing help managing your Salesforce environment and its connected solutions.",
    link: "/salesforce-managed-services",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div
      className="mx-auto mb-8 max-w-3xl text-center"
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#006b95]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function ContentCard({
  icon,
  title,
  description,
  link,
  linkText,
}: {
  icon: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}) {
  return (
    <article className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl font-bold text-[#006b95] transition-colors group-hover:bg-[#006b95] group-hover:text-white">
        {icon}
      </div>

      <h3 className="text-center text-lg font-bold leading-snug text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-center text-sm leading-6 text-slate-600">
        {description}
      </p>

      {link && linkText && (
        <Link
          href={link}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#006b95] transition-colors hover:text-blue-800"
        >
          {linkText}
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </article>
  );
}



export default function SalesforceIntegrationSections() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* Systems We Connect */}
      <Section className="bg-slate-50/70">
        <SectionHeading
          eyebrow="Integration Capabilities"
          title="Systems We Connect to Salesforce"
          description="Connect Salesforce with the business applications your teams rely on. We plan integrations around your data, workflows and existing technology."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {systems.map((item) => (
            <ContentCard key={item.title} {...item} />
          ))}
        </div>

       
      </Section>

      {/* Connection Methods */}
      <Section>
        <SectionHeading
          eyebrow="Integration Methods"
          title="How We Connect Them"
          description="The right method depends on how much data moves, how quickly it must arrive and how many systems are involved."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {connectionMethods.map((item) => (
            <ContentCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-slate-50/70">
        <SectionHeading
          eyebrow="Business Benefits"
          title="Why Companies Integrate Salesforce"
          description="A well-designed integration reduces manual work and helps teams work with more consistent information across the business."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <ContentCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      {/* Project Process */}
      <Section>
        <SectionHeading
          eyebrow="Our Process"
          title="How an Integration Project Works"
          description="We take your integration from discovery and design through testing, launch and documentation."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projectSteps.map((step) => (
            <article
              key={step.number}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
            >
              <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#006b95] text-sm font-bold text-white">
                {step.number}
              </span>

              <h3 className="text-center text-lg font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 text-center text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Common Problems */}
      <Section className="bg-slate-50/70">
        <SectionHeading
          eyebrow="Troubleshooting"
          title="Common Integration Problems We Fix"
          description="We investigate integration failures, inconsistent records and performance issues to help your connected systems exchange data reliably."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {commonProblems.map((item) => (
            <ContentCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      {/* Cost */}
      <Section>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Project Scope"
              title="What Salesforce Integration Costs"
              description="Integration costs depend on your requirements, the number of systems, the volume of data and the complexity of the workflows."
            />

            <p className="mb-4 text-base leading-7 text-slate-600">
              We also consider how frequently data needs to sync, which
              integration method is appropriate, and whether the other system
              provides a suitable API or ready-made connector.
            </p>

            <p className="text-base leading-7 text-slate-600">
              After the discovery call, we provide a written scope outlining
              the proposed solution, deliverables, cost and timeline. Depending
              on the project, you can discuss a fixed-scope engagement or a
              time-and-materials arrangement.
            </p>
          </div>

          <div className="rounded-3xl border border-[#006b95] bg-blue-50/70 p-6 sm:p-8">
            <h3 className="text-center text-xl font-bold text-slate-900">
              What We'll Assess
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "Systems and applications involved",
                "Data volume and sync frequency",
                "API access and platform limitations",
                "Field mapping and transformation rules",
                "Error handling, security and testing",
                "Monitoring and ongoing maintenance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#006b95] text-sm font-bold text-white">
                    ✓
                  </span>
                  <span className="text-sm leading-6 text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="#book-a-free-consultation"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#006b95] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-blue-700 sm:w-auto"
            >
              Book a Free Consultation
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* After Go-Live */}
      <Section className="bg-slate-50/70">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Ongoing Reliability"
              title="After Go-Live"
              description="Integrations need attention when Salesforce, connected applications or business processes change."
            />

            <p className="text-base leading-7 text-slate-600">
              Ongoing maintenance can include monitoring integration jobs,
              investigating failed transactions, reviewing API usage, testing
              changes and updating documentation. We offer 24/7 support: raise a ticket in our ticket portal or send an email, and you get a reply within 24 hours.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/salesforce-support-and-maintenance-services"
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
              >
                Support and Maintenance <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/salesforce-managed-services"
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
              >
                Managed Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-center text-xl font-bold text-slate-900">
              Integration Maintenance Checklist
            </h3>

            <ul className="mt-6 space-y-4">
              {maintenanceItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-600">
                    ✓
                  </span>
                  <span className="text-sm leading-6 text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section>
        <SectionHeading
          eyebrow="Explore More"
          title="Related Services"
          description="Explore other Salesforce services that can support your integration project, implementation or ongoing development."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <h3 className="text-center text-lg font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {service.description}
              </p>

              <Link
                href={service.link}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#006b95] hover:text-blue-800"
              >
                Explore Service <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* Why Saasverse */}
      <Section className="bg-slate-50/70">
        <SectionHeading
          
          title="Why Choose Saasverse for Salesforce Integration"
          description="Choose an integration partner that understands Salesforce, connected systems, data flows and the operational needs of your business."
          centered
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustCards.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl font-bold text-[#006b95]">
                {item.icon}
              </span>

              <h3 className="text-center text-base font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              {item.link && (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#006b95] hover:text-blue-800"
                >
                  Read our reviews <span aria-hidden="true">↗</span>
                </Link>
              )}
            </article>
          ))}
        </div>

      
      </Section>

      
    </main>
  );
}