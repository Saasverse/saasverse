
import Link from "next/link";

interface ContentCard {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

const consultantSituations: ContentCard[] = [
  {
    title: "Before Buying Salesforce",
    description:
      "You are about to buy Salesforce and want a plan, the right clouds and a realistic budget before you sign.",
  },
  {
    title: "The Org Has Grown Messy",
    description:
      "Your org has grown over years of quick fixes, and nobody knows how parts of it work.",
  },
  {
    title: "Users Work Around Salesforce",
    description:
      "Your team keeps data in spreadsheets and email because Salesforce is slow or confusing to use.",
  },
  {
    title: "Adding a Cloud or Merging Orgs",
    description:
      "You are adding a new cloud, merging two orgs after an acquisition or moving from Salesforce Classic.",
  },
  {
    title: "Reports Don't Match",
    description:
      "Your Salesforce reports and the numbers in finance don't match, and managers have stopped trusting dashboards.",
  },
  {
    title: "A Second Opinion",
    description:
      "You want an independent review of a proposal or a project from another partner.",
  },
];

const commonProblems: ContentCard[] = [
  {
    title: "Old Workflow Rules and Process Builder",
    description:
      "Salesforce ended support for Workflow Rules and Process Builder on December 31, 2025. We list every old automation in your org and plan its move to Flow, so nothing breaks without support.",
  },
  {
    title: "Duplicate and Incomplete Data",
    description:
      "We find duplicate accounts, contacts and leads, set up matching and duplicate rules, and add required fields and validation where data is missing.",
  },
  {
    title: "Too Many Profiles and Open Access",
    description:
      "We review profiles, permission sets and sharing rules, and close access that users don't need.",
  },
  {
    title: "Automation That Nobody Understands",
    description:
      "We document what each Flow, trigger and rule does, remove the ones that conflict and combine the ones that do the same job.",
  },
  {
    title: "Slow Pages and Cluttered Layouts",
    description:
      "We simplify page layouts and Lightning pages, so users see the fields they need and pages load faster.",
  },
  {
    title: "Integrations That Fail Quietly",
    description:
      "We check how data moves between Salesforce and your other systems, and add error alerts so failed syncs are caught.",
    link: "/salesforce-integration-services",
    linkText: "Salesforce integration services",
  },
];

const engagementSteps: ContentCard[] = [
  {
    title: "Discovery Call",
    description:
      "Tell us your goals, the clouds you use and what is not working. We agree on the scope of the review. We sign an NDA first if you want one.",
  },
  {
    title: "Review",
    description:
      "We look at your org, your data and your processes, and talk to the people who use Salesforce every day: users, managers and admins.",
  },
  {
    title: "Findings",
    description:
      "We share what we found, in writing, with the risk of each issue and the options to fix it. We walk you through it in a call.",
  },
  {
    title: "Roadmap",
    description:
      "We agree on priorities with you and turn them into a plan with timelines, owners and effort estimates.",
  },
  {
    title: "Next Steps",
    description:
      "Your team builds from the plan, another partner does, or our team does it through our Salesforce implementation services.",
    link: "/salesforce-implementation-services",
    linkText: "Salesforce implementation services",
  },
];

const engagementModels: ContentCard[] = [
  {
    title: "One-Time Org Review",
    description:
      "A fixed-scope review of your org with a written report and a findings call. Good when you need to know where you stand.",
  },
  {
    title: "Roadmap Project",
    description:
      "A review plus a 6 to 12 month plan, process maps and requirements. Good before a large change or a new cloud.",
  },
  {
    title: "Ongoing Advisory",
    description:
      "A set number of consulting hours each month for advice, design reviews and help with new requests. Good when your team builds and needs a second pair of eyes.",
  },
  {
    title: "Consultant in Your Team",
    description:
      "A consultant who works inside your team by the hour, part time or full time.",
    link: "/hire-salesforce-consultants",
    linkText: "Hire Salesforce consultants",
  },
];

const clouds: ContentCard[] = [
  {
    title: "Sales Cloud",
    description:
      "Lead routing, opportunity stages, forecasting and the reports your sales managers use every week.",
    link: "/salesforce-sales-cloud",
    linkText: "Sales Cloud services",
  },
  {
    title: "Service Cloud",
    description:
      "Case management, routing, SLAs and knowledge for support teams.",
    link: "/salesforce-service-cloud",
    linkText: "Service Cloud services",
  },
  {
    title: "Marketing Cloud",
    description:
      "Customer journeys, segmentation and how marketing data connects to sales.",
    link: "/salesforce-marketing-cloud",
    linkText: "Marketing Cloud services",
  },
  {
    title: "Experience Cloud",
    description:
      "Customer and partner portals: who logs in, what they see and how it stays secure.",
    link: "/experience-cloud",
    linkText: "Experience Cloud services",
  },
  {
    title: "CPQ",
    description:
      "Product catalogs, pricing rules, discount approvals and quote templates.",
    link: "/salesforce-cpq-implementation",
    linkText: "CPQ services",
  },
  {
    title: "Field Service",
    description:
      "Work orders, scheduling and the mobile app for technicians.",
    link: "/field-service-lightning",
    linkText: "Field Service services",
  },
  {
    title: "Health Cloud",
    description:
      "Patient and member records, care plans and data privacy requirements.",
    link: "/health-cloud-services",
    linkText: "Health Cloud services",
  },
  {
    title: "Financial Services Cloud",
    description:
      "Client households, financial accounts and advisor workflows.",
    link: "/financial-cloud-implementation-services",
    linkText: "Financial Services Cloud services",
  },
  {
    title: "Nonprofit Cloud",
    description:
      "Donors, gifts, programs and grant tracking.",
    link: "/nonprofit-cloud",
    linkText: "Nonprofit Cloud services",
  },
  {
    title: "MuleSoft",
    description:
      "Integration design when Salesforce must connect to many systems.",
    link: "/mulesoft-development",
    linkText: "MuleSoft services",
  },
];

const industries: ContentCard[] = [
  {
    title: "Healthcare",
    description: "Salesforce consulting for healthcare organizations.",
    link: "/healthcare-industry",
    linkText: "Healthcare",
  },
  {
    title: "Financial Services",
    description: "Salesforce consulting for financial services businesses.",
    link: "/financial-industry",
    linkText: "Financial Services",
  },
  {
    title: "Retail",
    description: "Salesforce solutions for retail businesses.",
    link: "/retail-industry",
    linkText: "Retail",
  },
  {
    title: "Education",
    description: "Salesforce solutions for education organizations.",
    link: "/education-industry",
    linkText: "Education",
  },
  {
    title: "Energy",
    description: "Salesforce consulting for energy businesses.",
    link: "/energy-industry",
    linkText: "Energy",
  },
  {
    title: "Automotive",
    description: "Salesforce solutions for automotive businesses.",
    link: "/automotive-industry",
    linkText: "Automotive",
  },
  {
    title: "Media",
    description: "Salesforce consulting for media organizations.",
    link: "/media-industry",
    linkText: "Media",
  },
  {
    title: "Communications",
    description: "Salesforce solutions for communications businesses.",
    link: "/communications-industry",
    linkText: "Communications",
  },
  {
    title: "Consumer Goods",
    description: "Salesforce solutions for consumer goods companies.",
    link: "/consumer-goods-industry",
    linkText: "Consumer Goods",
  },
  {
    title: "Travel and Hospitality",
    description: "Salesforce consulting for travel and hospitality businesses.",
    link: "/travels-hospitality-industry",
    linkText: "Travel and Hospitality",
  },
  {
    title: "Nonprofit",
    description: "Salesforce solutions for nonprofit organizations.",
    link: "/nonprofit-cloud",
    linkText: "Nonprofit",
  },
];

const serviceChoices: ContentCard[] = [
  {
    title: "Salesforce Consulting",
    description:
      "You need advice, a review or a plan before anything is built. That is this page.",
  },
  {
    title: "Salesforce Implementation",
    description:
      "You need Salesforce set up or rebuilt, from requirements to go-live.",
    link: "/salesforce-implementation-services",
    linkText: "Salesforce implementation services",
  },
  {
    title: "Hire a Consultant",
    description:
      "You need a consultant inside your team by the hour, part time or full time.",
    link: "/hire-salesforce-consultants",
    linkText: "Hire Salesforce consultants",
  },
];

interface SectionProps {
  title: string;
  intro?: string;
  items: ContentCard[];
  columns?: 2 | 3 | 4;
}

function ContentGrid({
  title,
  intro,
  items,
  columns = 3,
}: SectionProps) {
  const gridColumns = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <h2 className="mb-4">{title}</h2>

          {intro && (
            <p className="leading-7 text-gray-600">{intro}</p>
          )}
        </div>

        <div className={`grid gap-6 ${gridColumns[columns]}`}>
          {items.map((item, index) => (
            <article
              key={item.title}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#006b95] hover:shadow-lg"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-[#eaf5f9] text-sm font-semibold text-[#006b95] transition-colors group-hover:bg-[#006b95] group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {item.description}
              </p>

              {item.link && item.linkText && (
                <Link
                  href={item.link}
                  className="mt-4 inline-flex font-medium text-[#006b95] hover:underline"
                >
                  {item.linkText}
                  <span className="ml-1" aria-hidden="true">
                    →
                  </span>
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultingProcess() {
  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4">How a Consulting Engagement Works</h2>
          <p className="leading-7 text-gray-600">
            A clear process takes you from the initial conversation to
            practical recommendations and a roadmap your team can follow.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {engagementSteps.map((step, index) => (
            <div key={step.title} className="relative flex gap-5 pb-10 last:pb-0">
              <div className="flex shrink-0 flex-col items-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#006b95] font-semibold text-white">
                  {index + 1}
                </div>

                {index !== engagementSteps.length - 1 && (
                  <div className="mt-2 w-px grow bg-gray-300" />
                )}
              </div>

              <div className="pb-2">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {step.description}
                </p>

                {step.link && step.linkText && (
                  <Link
                    href={step.link}
                    className="mt-2 inline-block font-medium text-[#006b95] hover:underline"
                  >
                    {step.linkText} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultingCost() {
  return (
    <section className="bg-[#0d1c31] py-16 text-white md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-5 text-white">
            What Salesforce Consulting Costs
          </h2>

          <p className="mb-8 leading-8 text-white/90">
            The cost depends on your requirements: the size of your org, the
            clouds involved, the number of teams we need to talk to and whether
            you need a one-time review, a roadmap or ongoing advice. After the
            discovery call, we send a written scope with the cost and timeline.
            You get the cost and terms in writing before any work starts.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 font-semibold text-[#0d1c31] transition-colors hover:bg-gray-100"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

function ConsultingComparison() {
  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4">
            Consulting, Implementation or Hiring
          </h2>

          <p className="leading-7 text-gray-600">
            Choose the engagement that matches what your business needs right
            now.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {serviceChoices.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {item.description}
              </p>

              {item.link && item.linkText && (
                <Link
                  href={item.link}
                  className="mt-4 inline-block font-medium text-[#006b95] hover:underline"
                >
                  {item.linkText} →
                </Link>
              )}
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center leading-7 text-gray-600">
          The contract can be a fixed-scope project or time and materials,
          whichever suits the work.
        </p>

        <div className="mt-8 text-center">
          <Link
            href="/hire-salesforce-architect"
            className="font-medium text-[#006b95] hover:underline"
          >
            Hire a Salesforce architect →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function SalesforceConsultingSections() {
  return (
    <>
      <ContentGrid
        title="When Companies Bring In a Salesforce Consultant"
        items={consultantSituations}
        columns={3}
      />

      <ContentGrid
        title="Common Salesforce Problems We Fix"
        items={commonProblems}
        columns={3}
      />

      <ConsultingProcess />

      <ContentGrid
        title="Consulting Engagement Models"
        intro="Choose the consulting model that fits your Salesforce goals, internal team and the level of support you need."
        items={engagementModels}
        columns={2}
      />

      <ConsultingCost />

      <ContentGrid
        title="Salesforce Consulting by Cloud"
        intro="Get advice tailored to the Salesforce clouds and platforms your business uses."
        items={clouds}
        columns={3}
      />

      <ContentGrid
        title="Industries We Work With"
        intro="Our consultants work with businesses across industries. Each industry uses Salesforce differently, so we start every review by learning how your industry works."
        items={industries}
        columns={3}
      />

      <ConsultingComparison />
    </>
  );
}

