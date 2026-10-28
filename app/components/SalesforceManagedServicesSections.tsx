import Link from 'next/link';

const services = [
  {
    title: 'Day-to-Day Admin',
    description:
      'We manage user access, picklists, page layouts, reports, dashboards and the small requests that pile up when nobody owns Salesforce.',
  },
  {
    title: 'Fixes and Issue Resolution',
    description: (
      <>
        When something breaks, such as a Flow error, failed integration or
        validation rule, we investigate the cause and work on a fix. For one-off
        fixes without a monthly plan, see our{' '}
        <Link
          href="/salesforce-support-and-maintenance-services"
          className="font-semibold text-[#006b95] hover:underline"
        >
          Salesforce support and maintenance services
        </Link>
        .
      </>
    ),
  },
  {
    title: 'Changes and Enhancements',
    description:
      'We build new fields, automation, reports and smaller features each month, prioritized according to your business needs.',
  },
  {
    title: 'Release Updates',
    description:
      'We review Salesforce releases, test relevant changes in a sandbox and help assess features that could benefit or affect your org.',
  },
  {
    title: 'Monitoring and Health Checks',
    description:
      'We review automation failures, integration errors, data storage, API usage and security settings to identify issues that need attention.',
  },
  {
    title: 'Data Quality',
    description:
      'We identify duplicate records, gaps in important fields and data quality problems, then recommend or implement measures to improve consistency.',
  },
  {
    title: 'Integration Upkeep',
    description: (
      <>
        We help maintain connections between Salesforce and your other systems,
        investigate failed synchronizations and update integrations when
        connected systems change. Explore our{' '}
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
    title: 'Planning and Reporting',
    description:
      "You receive a monthly summary of completed work, open requests and org health, followed by planning for the next month's priorities.",
  },
];

const monthlyProcess = [
  {
    title: 'Request Intake',
    description:
      'Your team sends requests through our ticket portal or by email. Every request gets an owner and a reply within 24 hours.',
  },
  {
    title: 'Prioritization',
    description:
      'We agree on which requests should come first based on business impact and the priorities established with your team.',
  },
  {
    title: 'Build and Test in a Sandbox',
    description:
      'Changes are developed and tested in a sandbox before being considered for production deployment.',
  },
  {
    title: 'Deployment',
    description:
      'Changes are deployed on agreed dates, with a rollback plan for larger or higher-risk changes where appropriate.',
  },
  {
    title: 'Org Health Check',
    description:
      'We review automation errors, limits, security settings and data quality to identify issues that need attention.',
  },
  {
    title: 'Monthly Report and Review Call',
    description:
      'You receive a written report and meet with the team to review completed work, outstanding requests and upcoming priorities.',
  },
];

const managedServicesBenefits = [
  {
    title: 'One Team Instead of One Person',
    description:
      'A dedicated in-house admin can become a single point of failure. A managed services team can bring together admins, developers and architects, with agreed coverage and continuity arrangements.',
  },
  {
    title: 'More Skills on Call',
    description:
      'Some requests need an admin, while others require a developer or integration specialist. The team can assign the appropriate skills to each request.',
  },
  {
    title: 'Predictable Monthly Cost',
    description:
      'An agreed monthly plan helps you budget for ongoing Salesforce work instead of arranging a separate engagement for every request.',
  },
  {
    title: 'Requests Stop Piling Up',
    description:
      'Small requests are reviewed and prioritized within a recurring work cycle instead of waiting indefinitely for available capacity.',
  },
  {
    title: 'Release Updates Are Handled',
    description:
      'Relevant Salesforce releases are reviewed and tested so potential impacts on your configuration and workflows can be addressed.',
  },
  {
    title: 'The Org Stays Clean',
    description:
      'Regular health checks and data quality work help identify unused fields, outdated automation and inconsistent data.',
  },
];

const onboardingSteps = [
  {
    title: 'Discovery Call',
    description:
      'Tell us which Salesforce clouds you use, how many users you have and what kinds of requests your team sends. We can arrange an NDA first if you prefer.',
  },
  {
    title: 'Org Review',
    description:
      'We review your org, automation, integrations and open requests to understand the environment and the work that needs attention.',
  },
  {
    title: 'Plan and Agreement',
    description:
      'We agree on the plan and monthly hours in writing, and set up your access to the ticket portal.',
  },
  {
    title: 'Handover',
    description:
      'We arrange appropriate access, document the org and coordinate the transfer of open requests from your current admin or partner.',
  },
  {
    title: 'Monthly Cycle',
    description:
      'Your ongoing cycle includes request management, sandbox testing, deployment, health checks and a monthly review.',
  },
];

const managedPlans = [
  {
    title: 'Admin Plan',
    description:
      'For teams that need day-to-day administration, user management, reports and smaller changes each month.',
  },
  {
    title: 'Admin and Development Plan',
    description:
      'For teams that need administration alongside new automation, custom development and integration work.',
  },
  {
    title: 'Full Org Management',
    description:
      'For companies looking for one partner to coordinate administration, development, releases, integrations, monitoring and planning.',
  },
];

const supportedClouds = [
  { name: 'Sales Cloud', href: '/salesforce-sales-cloud' },
  { name: 'Service Cloud', href: '/salesforce-service-cloud' },
  { name: 'Marketing Cloud', href: '/salesforce-marketing-cloud' },
  { name: 'Experience Cloud', href: '/experience-cloud' },
  { name: 'Health Cloud', href: '/health-cloud-services' },
  {
    name: 'Financial Services Cloud',
    href: '/financial-cloud-implementation-services',
  },
  { name: 'Nonprofit Cloud', href: '/nonprofit-cloud' },
  { name: 'CPQ', href: '/salesforce-cpq-implementation' },
  { name: 'Field Service', href: '/field-service-lightning' },
  { name: 'MuleSoft', href: '/mulesoft-development' },
];

const idealClients = [
  {
    title: 'Companies Without a Salesforce Admin',
    description:
      'You use Salesforce every day, but nobody is responsible for managing it full time.',
  },
  {
    title: 'Teams Whose Admin Has Left',
    description:
      'Your admin or previous partner has moved on, and support requests are piling up.',
  },
  {
    title: 'Growing Orgs',
    description:
      'You are adding users, clouds or integrations, and one person can no longer keep up with the workload.',
  },
  {
    title: 'After a New Implementation',
    description: (
      <>
        Your Salesforce rollout is complete, and you need a team to manage it
        going forward. Explore our{' '}
        <Link
          href="/salesforce-implementation-services"
          className="font-semibold text-[#006b95] hover:underline"
        >
          Salesforce implementation services
        </Link>
        .
      </>
    ),
  },
];

const whySaasverse = [
  {
    title: 'Salesforce Partner with Navigator Expert Status',
    description:
      'Salesforce gives Navigator Expert status to partners based on certified experts, completed projects and customer feedback.',
  },
  {
    title: '50+ Certified Salesforce Experts',
    description:
      'Admins, developers and architects work within the same team, helping route each request to the appropriate specialist.',
  },
  {
    title: '120+ Projects for 40+ Clients',
    description:
      'We have delivered 120+ projects for 40+ clients across 19+ countries.',
  },
  {
    title: 'US Time-Zone Overlap',
    description:
      'Our team is based in Jaipur, India. We agree on overlapping working hours to support meetings, collaboration and communication with your team.',
  },
  {
    title: 'Security and Confidentiality',
    description:
      'Saasverse is ISO 27001 and Cyber Essentials Plus certified. We sign an NDA before we access your org.',
  },
  {
    title: 'Rated 5.0 on Clutch',
    description: (
      <>
        Read what clients say about working with us on{' '}
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

          <div className="mt-3 leading-7 text-gray-600">{item.description}</div>
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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf5f9] font-bold text-[#006b95]">
            {String(index + 1).padStart(2, '0')}
          </span>

          <h3 className="text-xl font-semibold leading-7 text-gray-900">
            {item.title}
          </h3>

          <p className="mt-3 leading-7 text-gray-600">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export default function SalesforceManagedServicesSections() {
  return (
    <div className="text-gray-800">
      {/* 3.2 What Managed Services Include */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="What Our Salesforce Managed Services Include"
            description="With managed services, one team looks after your Salesforce org month after month. You send requests, we plan and deliver them, and we help keep your org healthy in the background."
          />

          <ContentCards items={services} />
        </div>
      </section>

      {/* 3.3 Every Month */}
      <section className="bg-gray-50 px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="What Happens Every Month"
            description="A recurring process for handling requests, delivering changes and reviewing the health of your Salesforce org."
          />

          <ContentCards items={monthlyProcess} />
        </div>
      </section>

      {/* 3.4 Why Managed Services */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="Why Companies Choose Managed Services"
            description="Ongoing Salesforce management gives your team a structured way to handle requests, improvements and org maintenance."
          />

          <ContentCards items={managedServicesBenefits} />
        </div>
      </section>

      {/* 3.5 Managed Services or Support */}
      <section className="bg-gray-50 px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="Managed Services or Support and Maintenance"
            description="Choose the type of Salesforce assistance that matches your ongoing needs."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm md:p-8">
              <h3 className="text-xl font-semibold text-gray-900">
                Salesforce Managed Services
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                One team manages your org through an ongoing plan covering
                administration, changes, fixes, release reviews, monitoring and
                planning. This is the service covered on this page.
              </p>
            </article>

            <article className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm md:p-8">
              <h3 className="text-xl font-semibold text-gray-900">
                Salesforce Support and Maintenance
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Need help with specific issues or fixes without a full monthly
                plan? Explore our{' '}
                <Link
                  href="/salesforce-support-and-maintenance-services"
                  className="font-semibold text-[#006b95] hover:underline"
                >
                  Salesforce support and maintenance services
                </Link>
                .
              </p>
            </article>
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center leading-8 text-gray-600">
            Need someone to work within your own team instead? You can{' '}
            <Link
              href="/hire-salesforce-admin"
              className="font-semibold text-[#006b95] hover:underline"
            >
              hire a Salesforce admin
            </Link>{' '}
            or{' '}
            <Link
              href="/hire-salesforce-developers"
              className="font-semibold text-[#006b95] hover:underline"
            >
              hire Salesforce developers
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 3.6 Onboarding */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="How Onboarding Works"
            description="We establish a clear understanding of your Salesforce org, responsibilities and monthly work process before ongoing management begins."
          />

          <ProcessCards items={onboardingSteps} />
        </div>
      </section>

      {/* 3.7 Plans */}
      <section className="bg-gray-50 px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="Managed Services Plans"
            description="Choose the level of Salesforce administration and development support that suits your organization."
          />

          <ContentCards items={managedPlans} />

          <p className="mx-auto mt-8 max-w-4xl text-center leading-7 text-gray-600">
            Every plan includes 24/7 support, a reply within 24 hours, and
            requests through our ticket portal or by email. Monthly hours are
            agreed in writing for each plan. Unused hours and extra work are
            handled as set out in your agreement.
          </p>
        </div>
      </section>

      {/* 3.8 Cost */}
      <section className="bg-[#0d1c31] px-4 py-16 text-white md:py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What Salesforce Managed Services Cost
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/90 md:text-lg">
            The cost depends on the clouds you use, the number of users, your
            integrations, the volume of monthly requests and the plan you
            choose. After the discovery call, we provide a written proposal
            explaining the monthly cost and what it covers.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 font-semibold text-[#0d1c31] transition-colors hover:bg-gray-100"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      {/* 3.9 Clouds We Manage */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="Clouds We Manage"
            description="We help maintain Salesforce environments across multiple clouds and the integrations that connect them."
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
        </div>
      </section>

      {/* 3.10 Who It Is For */}
      <section className="bg-gray-50 px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="Who It Is For"
            description="Managed services are useful for teams that need ongoing Salesforce ownership without building every role in-house."
          />

          <ContentCards items={idealClients} />

          <div className="mx-auto mt-10 max-w-4xl rounded-xl border border-gray-200 bg-white p-6 text-center leading-8 text-gray-600 md:p-8">
            Not sure what your org needs? Start with our{' '}
            <Link
              href="/salesforce-consulting-company"
              className="font-semibold text-[#006b95] hover:underline"
            >
              Salesforce consulting services
            </Link>{' '}
            for a review before planning ongoing work.
          </div>
        </div>
      </section>

      {/* 3.12 Why Choose Saasverse */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading
            title="Why Choose Saasverse for Salesforce Managed Services"
            description="Get access to Salesforce administration, development and architecture skills through one coordinated team."
          />

          <ContentCards items={whySaasverse} />
        </div>
      </section>
    </div>
  );
}
