
import Link from "next/link";

const salesCloudServices = [
  {
    number: "01",
    icon: "↗",
    title: "Lead Capture and Routing",
    description:
      "We bring leads in from your website, events and ads, remove duplicates, and route each one to the right rep based on region, product or account size.",
  },
  {
    number: "02",
    icon: "▤",
    title: "Pipeline Stages",
    description:
      "We set up opportunity stages that match how your team sells, with the fields reps must fill in before a deal can move forward. Your pipeline stops being a guess.",
  },
  {
    number: "03",
    icon: "▥",
    title: "Forecasting",
    description:
      "We set up forecasts by rep, team and region, so managers can see what’s likely to close this quarter and adjust it with the team.",
  },
  {
    number: "04",
    icon: "◎",
    title: "Territories and Account Plans",
    description:
      "We set up territories, account teams and account hierarchies, so everyone knows who owns which customer.",
  },
  {
    number: "05",
    icon: "▧",
    title: "Quotes and Products",
    description:
      "We set up products, price books and quote templates. If your pricing rules get complex, we can help implement Salesforce CPQ.",
    links: [
      {
        label: "Salesforce CPQ",
        href: "/salesforce-cpq-implementation",
      },
    ],
  },
  {
    number: "06",
    icon: "⚙",
    title: "Automation With Flow",
    description:
      "We automate approvals, follow-up tasks, renewal reminders and handoffs to other teams with Flow, so reps spend less time on admin.",
  },
  {
    number: "07",
    icon: "✉",
    title: "Email and Calendar",
    description:
      "We connect Sales Cloud to Outlook or Gmail, so emails and meetings are logged on the right records without reps typing them in.",
  },
  {
    number: "08",
    icon: "▥",
    title: "Reports and Dashboards",
    description:
      "We build dashboards around the questions your managers ask every week: pipeline, win rate, deal size and activity. We check the numbers with finance before they go live.",
  },
];

const warningSigns = [
  {
    icon: "▤",
    title: "Reps Keep Deals in Spreadsheets",
    description:
      "Salesforce feels like extra work, so the real pipeline lives somewhere else.",
  },
  {
    icon: "▥",
    title: "Forecasts Are Guesswork",
    description:
      "Managers build the forecast in a spreadsheet because they don’t trust what Salesforce shows.",
  },
  {
    icon: "◷",
    title: "Leads Go Cold",
    description:
      "New leads sit unassigned for days, or two reps call the same person.",
  },
  {
    icon: "◎",
    title: "Duplicate Accounts and Contacts",
    description:
      "The same customer appears three times, each with different details.",
  },
  {
    icon: "▧",
    title: "Reports Don’t Match Finance",
    description:
      "Revenue in Salesforce and revenue in the books never add up.",
  },
  {
    icon: "↻",
    title: "Old Automation",
    description:
      "Workflow Rules and Process Builder still run parts of your sales process. Salesforce ended support for both on December 31, 2025.",
  },
];

const projectSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "Tell us how your team sells today, how many reps you have and which tools Sales Cloud must connect to. If you’d like an NDA first, we’ll sign one.",
  },
  {
    number: "02",
    title: "Sales Process Mapping",
    description:
      "We sit with your sales leaders and a few reps and map how a lead becomes a closed deal.",
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
      "We configure Sales Cloud in a sandbox and show you progress at regular reviews.",
  },
  {
    number: "05",
    title: "Data and Testing",
    description:
      "We move your data, then test each step of the sales process with your reps.",
  },
  {
    number: "06",
    title: "Launch and Support",
    description:
      "We go live, walk your team through the new setup and stay on to fix issues after launch.",
  },
];

const relatedServices = [
  {
    icon: "◈",
    title: "Service Cloud",
    description:
      "Connect sales and support so both teams can see the same customer information.",
    href: "/salesforce-service-cloud",
  },
  {
    icon: "✉",
    title: "Marketing Cloud",
    description:
      "Connect your sales process with marketing campaigns and customer journeys.",
    href: "/salesforce-marketing-cloud",
  },
  {
    icon: "⇄",
    title: "Salesforce Integration Services",
    description:
      "Connect Sales Cloud to your ERP, billing platform and other business systems.",
    href: "/salesforce-integration-services",
  },
  {
    icon: "⚙",
    title: "Salesforce Managed Services",
    description:
      "Get ongoing help managing your Salesforce org, releases and improvements.",
    href: "/salesforce-managed-services",
  },
  {
    icon: "♙",
    title: "Hire Salesforce Consultants",
    description:
      "Add a Salesforce consultant to your team to work on your priorities.",
    href: "/hire-salesforce-consultants",
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
      "Our team includes certified Sales Cloud consultants, plus developers and architects for anything that needs code.",
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
      "Saasverse is ISO 27001 and Cyber Essentials Plus certified. We sign an NDA before we access your org.",
  },
  {
    icon: "★",
    title: "Rated 5.0 on Clutch",
    description:
      "See what our clients say about working with us.",
    link: "https://clutch.co/profile/saasverse-salesforce-consulting-partner",
    linkText: "Read our reviews",
    external: true,
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
  number,
  href,
  links,
  link,
  linkText,
  external = false,
}: {
  icon: string;
  title: string;
  description: string;
  number?: string;
  href?: string;
  links?: { label: string; href: string }[];
  link?: string;
  linkText?: string;
  external?: boolean;
}) {
  return (
    <article className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-7">
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

      {links && (
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#003e95] underline decoration-blue-200 underline-offset-4 hover:decoration-[#003e95]"
            >
              {item.label} →
            </Link>
          ))}
        </div>
      )}

      {href && (
        <div className="mt-4">
          <Link
            href={href}
            className="text-sm font-semibold text-[#003e95] underline decoration-blue-200 underline-offset-4 hover:decoration-[#003e95]"
          >
            Explore service →
          </Link>
        </div>
      )}

      {link && linkText && (
        <div className="mt-4">
          {external ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#003e95] underline decoration-blue-200 underline-offset-4 hover:decoration-[#003e95]"
            >
              {linkText} ↗
            </a>
          ) : (
            <Link
              href={link}
              className="text-sm font-semibold text-[#003e95] underline decoration-blue-200 underline-offset-4 hover:decoration-[#003e95]"
            >
              {linkText} →
            </Link>
          )}
        </div>
      )}

      <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-[#003e95] transition-all duration-300 group-hover:w-2/3" />
    </article>
  );
}

export default function SalesCloudImplementationSections() {
  return (
    <div className="overflow-hidden bg-white text-slate-900">
      {/* What We Set Up */}
      <section className="bg-gradient-to-b from-blue-50/70 to-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Sales Cloud Services"
            title="What We Set Up in Sales Cloud"
            description="A sales CRM configured around your sales process, team structure and reporting requirements."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {salesCloudServices.map((service) => (
              <FeatureCard key={service.number} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Signs Your Org Needs Work */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Common Challenges"
            title="Signs Your Sales Cloud Needs Work"
            description="If these problems sound familiar, your Sales Cloud setup may need attention."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {warningSigns.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* New or Existing Org */}
      <section className="bg-blue-50/70 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Sales Cloud Setup"
            title="New Rollout or Existing Org"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FeatureCard
              icon="✦"
              title="New to Sales Cloud"
              description="Moving from spreadsheets, HubSpot or another CRM? We plan the setup, move your accounts, contacts and open deals, and launch with your team."
              link="/salesforce-implementation-services"
              linkText="Salesforce implementation services"
            />

            <FeatureCard
              icon="⚙"
              title="Already Using Sales Cloud"
              description="If your org was set up years ago and no longer fits how you sell, we review it, keep what works and rebuild what doesn’t."
            />
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Process"
            title="How a Sales Cloud Project Works"
            description="A structured process from discovery and configuration to launch and support."
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

      {/* Adoption */}
      <section className="bg-gradient-to-b from-blue-50/70 to-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="User Adoption"
            title="Getting Reps to Use It"
          />

          <div className="rounded-3xl border border-blue-100 bg-white p-7 text-center shadow-sm sm:p-10">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl text-[#003e95]">
              ♙
            </div>

            <p className="text-sm leading-8 text-slate-600 sm:text-base">
              A Sales Cloud setup only works if reps use it. We keep page
              layouts short, show reps only the fields they need, log
              emails and meetings automatically, and set up the mobile app
              so they can update deals between meetings. After launch, we
              look at who is using it and fix what slows people down.
            </p>
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
              What Sales Cloud Implementation Costs
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
              The cost depends on your requirements: the number of users,
              how complex your sales process is, the data you need to move
              and the tools Sales Cloud has to connect to. After the
              discovery call, we send you a written scope with the cost
              and timeline. You can choose a fixed-scope project or time
              and materials.
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

      {/* Related Services */}
      <section className="bg-blue-50/70 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Explore More"
            title="Related Clouds and Services"
            description="Connect Sales Cloud with other Salesforce clouds, business systems and expert support."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service) => (
              <FeatureCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Saasverse */}
      <section className="bg-gradient-to-b from-white to-blue-50/70 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Saasverse"
            title="Why Choose Saasverse for Sales Cloud"
            description="Work with a team that combines Salesforce expertise, implementation experience and ongoing support."
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


