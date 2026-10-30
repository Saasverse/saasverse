
import Link from "next/link";

type Feature = {
  title: string;
  description: string;
};

const marketingSetup: Feature[] = [
  {
    title: "Account Setup and Sending Domains",
    description:
      "We set up your business units, sender profiles and sending domains, and authenticate them with SPF, DKIM and DMARC to help improve email deliverability.",
  },
  {
    title: "Data and Contact Model",
    description:
      "We define which data enters Marketing Cloud, how contacts are matched and how frequently data syncs, helping keep your lists accurate and relevant.",
  },
  {
    title: "Customer Journeys",
    description:
      "We build journeys in Journey Builder for welcome series, abandoned carts, renewals and re-engagement, with each step based on customer activity.",
  },
  {
    title: "Email Templates",
    description:
      "We build reusable email templates your team can edit without code, with testing across major email clients and mobile devices.",
  },
  {
    title: "SMS and Mobile Push",
    description:
      "We configure SMS and mobile push messaging, including opt-in and opt-out handling, where supported by your Marketing Cloud product and requirements.",
  },
  {
    title: "Segments and Personalization",
    description:
      "We create audience segments and personalize subject lines, content and send times using the customer data available to your team.",
  },
  {
    title: "Sales Cloud Connection",
    description:
      "We connect Marketing Cloud with Sales Cloud so marketing and sales teams can work with relevant campaign activity and lead information.",
  },
  {
    title: "Reports and Tracking",
    description:
      "We configure reporting for opens, clicks, conversions and unsubscribes, and connect campaign activity to revenue where the available data allows.",
  },
];

const marketingProducts: Feature[] = [
  {
    title: "Marketing Cloud Engagement",
    description:
      "For B2C brands sending high volumes of email, SMS and mobile messages and building customer journeys across channels.",
  },
  {
    title: "Account Engagement (formerly Pardot)",
    description:
      "For B2B companies that need lead scoring, nurture emails and a close connection between marketing and the sales team in Sales Cloud.",
  },
  {
    title: "Marketing Cloud Next",
    description:
      "Salesforce's newer marketing platform, built on the core Salesforce platform for teams looking to bring marketing, sales and service data together.",
  },
];

const warningSigns: Feature[] = [
  {
    title: "Emails Land in Spam",
    description:
      "Open rates are dropping, and more of your emails are reaching junk folders instead of inboxes.",
  },
  {
    title: "One Big Newsletter for Everyone",
    description:
      "You have customer data available, but every subscriber still receives the same message.",
  },
  {
    title: "Journeys Nobody Trusts",
    description:
      "Old journeys are still running, and your team is unsure who receives which messages.",
  },
  {
    title: "Data Doesn't Match Sales Cloud",
    description:
      "Contacts, unsubscribe preferences and lead statuses differ between marketing and sales.",
  },
  {
    title: "Paying for Contacts You Don't Use",
    description:
      "Your contact count keeps growing, including records you no longer need for campaigns.",
  },
  {
    title: "Reports Stop at Opens and Clicks",
    description:
      "You can see engagement metrics but cannot clearly identify which campaigns contribute to revenue.",
  },
];

const projectSteps: Feature[] = [
  {
    title: "Discovery Call",
    description:
      "Tell us which channels you use, who you send messages to and what isn't working. We can sign an NDA first if required.",
  },
  {
    title: "Audit or Plan",
    description:
      "For an existing account, we review your setup, data and journeys. For a new account, we plan the data model and initial journeys.",
  },
  {
    title: "Scope and Plan",
    description:
      "We provide a written scope with the proposed timeline and cost. Work starts after you approve the plan.",
  },
  {
    title: "Build and Test",
    description:
      "We build the setup, templates and journeys, then test email rendering and journey paths before launch.",
  },
  {
    title: "Launch",
    description:
      "We launch your first campaigns and monitor their performance closely during the initial period.",
  },
  {
    title: "Handover and Support",
    description:
      "We walk your team through the setup, provide documentation and discuss ongoing support requirements.",
  },
];

const reasons: Feature[] = [
  {
    title: "Salesforce Partner with Navigator Expert Status",
    description:
      "Salesforce awards Navigator Expert status to partners based on criteria that include certified experts, completed projects and customer feedback.",
  },
  {
    title: "Marketing and Sales in One Team",
    description:
      "Our team works across Marketing Cloud and Sales Cloud, helping create a more connected handoff between marketing and sales.",
  },
  {
    title: "120+ Projects for 40+ Clients",
    description:
      "We've delivered 120+ projects for 40+ clients across 19+ countries.",
  },
  {
    title: "24/7 Support",
    description:
      "Support is available around the clock, with requests handled through the agreed support channels and response commitments.",
  },
  {
    title: "Security and Confidentiality",
    description:
      "Saasverse maintains ISO 27001 and Cyber Essentials Plus certifications. NDA arrangements can be made before accessing your data.",
  },
  {
    title: "Rated 5.0 on Clutch",
    description:
      "Read client feedback about their experience working with Saasverse.",
  },
];

const relatedServices = [
  {
    title: "Sales Cloud",
    description: "Connect campaign activity with sales processes and lead handoffs.",
    href: "/salesforce-sales-cloud",
  },
  {
    title: "Service Cloud",
    description: "Coordinate relevant customer communications with service teams.",
    href: "/salesforce-service-cloud",
  },
  {
    title: "Salesforce Integration Services",
    description: "Connect Marketing Cloud with your website and other business systems.",
    href: "/salesforce-integration-services",
  },
  {
    title: "Salesforce Implementation Services",
    description: "Plan and implement your Salesforce environment.",
    href: "/salesforce-implementation-services",
  },
  {
    title: "Salesforce Managed Services",
    description: "Get ongoing help managing and improving your Salesforce org.",
    href: "/salesforce-managed-services",
  },
  {
    title: "Hire Salesforce Consultants",
    description: "Add Salesforce expertise to your existing team.",
    href: "/hire-salesforce-consultants",
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

export default function MarketingCloudSection() {
  // Confirm with the team before publishing these optional offerings.
  const showSmsAndMobilePush = true;
  const showMarketingCloudNext = true;
  const showOngoingCampaignServices = true;

  const setupCards = marketingSetup.filter(
    (item) =>
      showSmsAndMobilePush || item.title !== "SMS and Mobile Push"
  );

  const products = marketingProducts.filter(
    (item) =>
      showMarketingCloudNext || item.title !== "Marketing Cloud Next"
  );

  return (
    <main className="bg-white text-gray-900">
      {/* 1. Marketing Cloud setup */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Services"
            title="What We Set Up in Marketing Cloud"
            description="Build a connected marketing environment with reliable data, relevant customer journeys and measurable campaigns."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {setupCards.map((item, index) => (
              <FeatureCard
                key={item.title}
                {...item}
                number={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Product selection */}
      <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Choose the Right Platform"
            title="Which Marketing Cloud Is Right for You?"
            description="The right product depends on your audience, marketing channels, data model and campaign goals."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-blue-100 bg-white p-7 text-center shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">
              Not Sure Which Product You Need?
            </h3>
            <p className="mt-3 leading-7 text-gray-600">
              We&apos;ll review how your team markets today and recommend a
              suitable option before you buy.
            </p>
            <div className="mt-6">
              <ConsultationButton />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Warning signs */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Common Challenges"
            title="Signs Your Marketing Cloud Needs Work"
            description="Small gaps in data, deliverability and automation can make campaigns harder to manage and measure."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {warningSigns.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Project process */}
      <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Process"
            title="How a Marketing Cloud Project Works"
            description="A clear process from initial discovery through implementation, testing and handover."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectSteps.map((item, index) => (
              <FeatureCard
                key={item.title}
                {...item}
                number={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Ongoing support */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#003e95] px-7 py-10 text-white sm:px-12 sm:py-14">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
                Ongoing Support
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Ongoing Campaign Support
              </h2>

              {showOngoingCampaignServices ? (
                <p className="mt-5 max-w-2xl leading-7 text-blue-50">
                  Don&apos;t have a Marketing Cloud specialist in-house? We can
                  help build and send campaigns, update journeys, maintain
                  data quality and review deliverability based on your agreed
                  support scope.
                </p>
              ) : (
                <p className="mt-5 max-w-2xl leading-7 text-blue-50">
                  Get help maintaining your Marketing Cloud environment,
                  resolving issues and improving its reliability.
                </p>
              )}

              <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-100">
                Support availability and response times are defined by the
                agreed support arrangement.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex whitespace-nowrap items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#003e95] transition hover:bg-blue-50"
              >
                Discuss Your Needs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Cost */}
      <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            eyebrow="Project Planning"
            title="What Marketing Cloud Consulting Costs"
            description="The cost depends on the Marketing Cloud product you use, the channels involved, the number of journeys and templates required, and how your data needs to connect. After discovery, we provide a written scope with the proposed cost and timeline. You can choose a fixed-scope project or a time-and-materials engagement."
          />
          <ConsultationButton />
        </div>
      </section>

      {/* 7. Related services */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Explore More"
            title="Related Clouds and Services"
            description="Connect marketing with sales, service and the wider Salesforce environment."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 transition group-hover:text-blue-700">
                  {service.title}
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Keep existing credentials badges and approved logo wall
          in the page. Do not replace them with duplicate sections here. */}

      {/* 8. Why choose Saasverse */}
      <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Saasverse"
            title="Why Choose Saasverse for Marketing Cloud"
            description="Work with a Salesforce-focused team to connect marketing technology, customer data and sales processes."
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

