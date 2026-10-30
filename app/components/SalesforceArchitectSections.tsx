
import Link from "next/link";

type Feature = {
  title: string;
  description: string;
};

const architectResponsibilities: Feature[] = [
  {
    title: "Designs Your Data Model",
    description:
      "Your architect decides which objects, fields and relationships you need, so data isn't duplicated and your reports show the right numbers.",
  },
  {
    title: "Plans Security and Sharing",
    description:
      "Your architect configures roles, permission sets and sharing rules so each person sees the records they need and nothing more.",
  },
  {
    title: "Designs Your Integrations",
    description:
      "Your architect decides how Salesforce connects to your ERP, billing and other systems, including which data moves, how often and through which API or middleware. Our integration team can then build it.",
  },
  {
    title: "Keeps Salesforce Fast with Large Data",
    description:
      "When your org contains millions of records, pages and reports can slow down. Your architect plans indexing, archiving and data limits to help maintain performance.",
  },
  {
    title: "Sets Up a Safe Release Process",
    description:
      "Your architect plans sandboxes, source control and deployment steps so changes reach production without breaking what already works.",
  },
  {
    title: "Reviews the Org You Already Have",
    description:
      "Your architect identifies unused fields, overlapping automation, legacy Workflow Rules and Process Builder processes that may need migration to Flow, and code approaching Salesforce limits.",
  },
  {
    title: "Helps You Choose One Org or Several",
    description:
      "After a merger or across multiple business units, your architect evaluates whether to combine orgs or keep them separate and how they should share data.",
  },
  {
    title: "Guides Your Build Team",
    description:
      "Your architect reviews designs and code, sets standards for admins and developers, and answers complex technical questions throughout the build.",
  },
];

const deliverables: Feature[] = [
  {
    title: "Org Review Report",
    description:
      "Understand what works in your org, what doesn't and which issues should be fixed first.",
  },
  {
    title: "Solution Design",
    description:
      "See how the proposed setup will work, which Salesforce features it uses and why.",
  },
  {
    title: "Data Model Diagram",
    description:
      "Get a clear diagram of objects, fields and relationships for your admins and developers.",
  },
  {
    title: "Integration Design",
    description:
      "Document connected systems, data flows, sync frequency and what happens when a sync fails.",
  },
  {
    title: "Security and Sharing Model",
    description:
      "Document who can view and change which records to make access reviews and audits easier.",
  },
  {
    title: "Release Plan",
    description:
      "Define your sandboxes, source control and the steps every change follows before reaching production.",
  },
];

const hiringModels: Feature[] = [
  {
    title: "Hourly",
    description:
      "Pay for the hours used. Suitable for an org review or a design check before a major build.",
  },
  {
    title: "Part-Time Dedicated Architect",
    description:
      "The same architect works with your team for an agreed number of hours each week, reviews designs and answers technical questions.",
  },
  {
    title: "Full-Time Dedicated Architect",
    description:
      "An architect focuses on your account. Suitable for a large rollout, migration or project involving several Salesforce clouds.",
  },
];

const hiringSteps: Feature[] = [
  {
    title: "Tell Us What You Need",
    description:
      "Share details about your org, project and expected weekly hours. If you'd like an NDA first, we can arrange one.",
  },
  {
    title: "Get Matching Profiles",
    description:
      "We share profiles of architects with experience relevant to your Salesforce clouds and systems.",
  },
  {
    title: "Interview Them",
    description:
      "Discuss your project with the architects and ask how they would approach the design. You decide who joins.",
  },
  {
    title: "Agree on Terms",
    description:
      "We document the hiring model, hours and cost. You then arrange the necessary access to your org and tools.",
  },
  {
    title: "Start Work",
    description:
      "Your architect joins the agreed meetings and tools and shares progress at the frequency you choose.",
  },
];

const hiringScenarios: Feature[] = [
  {
    title: "Before a Big Rollout or a New Cloud",
    description:
      "You're preparing to implement Salesforce or add a new cloud and want the architecture planned before development begins.",
  },
  {
    title: "The Org Has Grown Messy",
    description:
      "Years of fields, flows and code from different teams have made it difficult to know what is safe to change.",
  },
  {
    title: "Pages and Reports Are Slow",
    description:
      "Your data has grown, and users are waiting too long for pages and reports to load.",
  },
  {
    title: "Integrations Keep Breaking",
    description:
      "Data doesn't match between Salesforce and other systems, and repeated fixes aren't solving the underlying problems.",
  },
  {
    title: "After a Merger",
    description:
      "You have two or more Salesforce orgs and need to decide whether to combine them or maintain separate environments.",
  },
  {
    title: "Before Adding Agentforce or Data 360",
    description:
      "You're preparing for AI agents or unified data capabilities and need to assess your data model, access controls and architecture.",
  },
];

const reasons: Feature[] = [
  {
    title: "Salesforce Partner with Navigator Expert Status",
    description:
      "Salesforce evaluates partners for Navigator Expert status using criteria that include certified experts, completed projects and customer feedback.",
  },
  {
    title: "50+ Certified Salesforce Experts",
    description:
      "Your architect can collaborate with our consultants and developers, helping ensure that proposed designs can be implemented in practice.",
  },
  {
    title: "120+ Projects for 40+ Clients",
    description:
      "We've delivered 120+ projects for 40+ clients across 19+ countries.",
  },
  {
    title: "US Time-Zone Overlap",
    description:
      "Our team is based in Jaipur, India. We agree on overlapping working hours so your architect can join design reviews and project meetings.",
  },
  {
    title: "Security and Confidentiality",
    description:
      "Saasverse states that it is ISO 27001 and Cyber Essentials Plus certified. NDA arrangements can be made before accessing your org or documents.",
  },
  {
    title: "Rated 5.0 on Clutch",
    description:
      "Read client reviews to learn about their experience working with Saasverse.",
  },
];

const relatedRoles = [
  {
    title: "Salesforce Consultant",
    description:
      "For understanding business requirements and configuring Salesforce for your teams.",
    href: "/hire-salesforce-consultants",
  },
  {
    title: "Salesforce Developer",
    description:
      "For Apex, Lightning Web Components, custom functionality and integration development.",
    href: "/hire-salesforce-developers",
  },
  {
    title: "Salesforce Admin",
    description:
      "For user management, configuration, reports and day-to-day org administration.",
    href: "/hire-salesforce-admin",
  },
  {
    title: "Salesforce Business Analyst",
    description:
      "For requirements gathering, process analysis and translating business needs into solutions.",
    href: "/hire-salesforce-business-analyst",
  },
  {
    title: "Salesforce Consulting Services",
    description:
      "For broader Salesforce advice, planning and project guidance.",
    href: "/salesforce-consulting-company",
  },
  {
    title: "Salesforce Implementation Services",
    description:
      "For planning and delivering a Salesforce implementation project.",
    href: "/salesforce-implementation-services",
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
      href="#book-a-free-consultation"
      className="inline-flex items-center justify-center rounded-lg bg-[#003e95] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Book a Free Consultation
      <span aria-hidden="true" className="ml-2">
        →
      </span>
    </Link>
  );
}

export default function SalesforceArchitectSections() {
  return (
    <main className="bg-white text-gray-900">
      {/* 1. What an architect does */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Architecture Expertise"
            title="What a Salesforce Architect Does for You"
            description="Plan a Salesforce environment that supports your business, protects your data and gives your team a reliable foundation for growth."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {architectResponsibilities.map((item, index) => (
              <FeatureCard
                key={item.title}
                {...item}
                number={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Deliverables */}
      <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Project Deliverables"
            title="What You Get"
            description="Your architect leaves you with practical design documents your team can continue using after the engagement ends."
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
            description="Choose an engagement model based on your project, internal team and the level of architecture support you need."
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
            depending on which approach best suits the work.
          </p>
        </div>
      </section>

      {/* 4. Cost */}
      <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            eyebrow="Project Planning"
            title="What It Costs to Hire a Salesforce Architect"
            description="The cost depends on your requirements, hiring model, expected weekly hours, org size and the number of connected systems. Tell us what you need, and our team will prepare a quote. You'll receive the cost and terms in writing before work starts."
          />

          <ConsultationButton />
        </div>
      </section>

      {/* 5. Hiring process */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Getting Started"
            title="How Hiring Works"
            description="A straightforward process to find the right architect and get started with confidence."
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

      {/* 6. When to hire */}
      <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="When You Need an Architect"
            title="When Companies Hire a Salesforce Architect"
            description="Architecture expertise is particularly valuable when your Salesforce environment becomes more complex or your business is preparing for a major change."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hiringScenarios.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Architect vs consultant vs developer */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Choose the Right Specialist"
            title="Architect, Consultant or Developer"
            description="Different Salesforce specialists solve different problems. Choose the role that matches the work you need done."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Salesforce Architect"
              description="You need someone to decide how the overall system should be designed and how its components fit together. This is the role covered on this page."
            />

            <FeatureCard
              title="Salesforce Consultant"
              description="You need someone to understand your teams' requirements and configure Salesforce to support them."
            />

            <FeatureCard
              title="Salesforce Developer"
              description="You need custom code, including Apex, Lightning Web Components or integration development."
            />
          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-gray-900">
              Explore More Salesforce Roles and Services
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              You can also hire a Salesforce admin or business analyst, or ask
              us to guide your wider Salesforce project through consulting
              and implementation services.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/hire-salesforce-consultants"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-700"
              >
                Hire Salesforce Consultants →
              </Link>

              <Link
                href="/hire-salesforce-developers"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-700"
              >
                Hire Salesforce Developers →
              </Link>

              <Link
                href="/hire-salesforce-admin"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-700"
              >
                Hire Salesforce Admin →
              </Link>

              <Link
                href="/hire-salesforce-business-analyst"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-700"
              >
                Hire Salesforce Business Analyst →
              </Link>

              <Link
                href="/salesforce-consulting-company"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-700"
              >
                Salesforce Consulting →
              </Link>

              <Link
                href="/salesforce-implementation-services"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-700"
              >
                Salesforce Implementation →
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
            title="Why Hire Salesforce Architects from Saasverse"
            description="Get architecture guidance backed by Salesforce expertise, practical implementation experience and a team that can support your wider project."
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

