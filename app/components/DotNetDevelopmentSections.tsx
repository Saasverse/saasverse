
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: "▣",
    title: "Web Applications",
    description:
      "We build web apps on ASP.NET Core, from customer portals to internal tools your team uses every day. Front ends can be built with Blazor, Razor Pages or a JavaScript framework such as React or Angular.",
  },
  {
    number: "02",
    icon: "⇄",
    title: "Web APIs",
    description:
      "We build REST APIs in C# that let your apps, partners and other systems share data in a secure, documented way.",
  },
  {
    number: "03",
    icon: "☁",
    title: "Cloud Applications",
    description:
      "We build and move .NET apps to Azure or AWS, set up deployment pipelines and use managed services, so you spend less time looking after servers.",
    links: [
      {
        label: "Explore AWS services",
        href: "/services-aws",
      },
    ],
  },
  {
    number: "04",
    icon: "↻",
    title: "Upgrades and Modernization",
    description:
      "We move apps from .NET Framework, .NET Core or .NET 8 and 9 to .NET 10, one part at a time where needed, so your business keeps running during the upgrade.",
    links: [
      {
        label: "Application modernization services",
        href: "/application-modernization-services",
      },
    ],
  },
  {
    number: "05",
    icon: "▤",
    title: "Desktop Applications",
    description:
      "We build and maintain Windows desktop apps with WPF and Windows Forms, and cross-platform apps with .NET MAUI where they make sense.",
  },
  {
    number: "06",
    icon: "⌘",
    title: "Salesforce Integration",
    description:
      "We connect your .NET apps to Salesforce, so customer, order and billing data stays in sync.",
    links: [
      {
        label: "Salesforce integration services",
        href: "/salesforce-integration-services",
      },
    ],
  },
  {
    number: "07",
    icon: "◫",
    title: "Sitecore and Kentico",
    description:
      "Both platforms run on .NET. We build and extend sites on them too.",
    links: [
      {
        label: "Sitecore development",
        href: "/sitecore-development-services",
      },
      {
        label: "Kentico development",
        href: "/kentico-development-services",
      },
    ],
  },
  {
    number: "08",
    icon: "🛠",
    title: "Support and Maintenance",
    description:
      "We fix bugs, apply security patches, keep libraries up to date and make small changes to apps that are already live. Support is available 24/7, with a reply within 24 hours.",
  },
];

const technologies = [
  {
    title: "Languages and Frameworks",
    icon: "⌘",
    items: [
      "C#",
      "ASP.NET Core",
      "Blazor",
      "Razor Pages",
      ".NET MAUI",
      "WPF",
      "Windows Forms",
    ],
  },
  {
    title: "Data",
    icon: "▤",
    items: [
      "Entity Framework Core",
      "ADO.NET",
      "SQL Server",
      "PostgreSQL",
    ],
  },
  {
    title: "Real-Time and Background Jobs",
    icon: "↻",
    items: ["SignalR", "Hangfire"],
  },
  {
    title: "Cloud",
    icon: "☁",
    items: ["Microsoft Azure", "Amazon Web Services (AWS)"],
  },
  {
    title: "Delivery",
    icon: "⇧",
    items: [
      "Git",
      "CI/CD Pipelines",
      "Docker",
      "Automated Testing",
    ],
  },
];

const projectSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "Tell us what you want to build or upgrade, who uses it and where it runs today. If you’d like an NDA first, we’ll sign one.",
  },
  {
    number: "02",
    title: "Review and Plan",
    description:
      "For an existing app, we review the code and its dependencies. For a new app, we write the requirements.",
  },
  {
    number: "03",
    title: "Scope and Estimate",
    description:
      "We send you a written scope with the timeline and cost. Nothing starts until you approve it.",
  },
  {
    number: "04",
    title: "Build in Short Cycles",
    description:
      "We build in short cycles and show you working software at regular reviews, so you can give feedback early.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "We test each release before it goes live, including the parts of your app that the change could affect.",
  },
  {
    number: "06",
    title: "Launch and Handover",
    description:
      "We deploy, hand over the code and documentation, and stay on to support you after launch.",
  },
];

const developmentPractices = [
  {
    icon: "✓",
    title: "Code Reviews",
    description:
      "A second developer reviews every change before it’s merged.",
  },
  {
    icon: "▣",
    title: "Automated Tests",
    description:
      "We write unit and integration tests, so changes don’t break what already works.",
  },
  {
    icon: "⇧",
    title: "CI/CD Pipelines",
    description:
      "We set up pipelines that build, test and deploy your app the same way every time.",
  },
  {
    icon: "◈",
    title: "Secure Coding",
    description:
      "We follow OWASP guidance, keep libraries patched and never store secrets in the code.",
  },
  {
    icon: "↻",
    title: "Long-Term Support Versions",
    description:
      "We build new apps on .NET 10, the current long-term support version, so you aren’t forced into an upgrade soon after launch.",
  },
  {
    icon: "▤",
    title: "Documentation",
    description:
      "You get documentation of what we built and how to run it, so your team or any future partner can maintain it.",
  },
];

const workModels = [
  {
    icon: "⚙",
    title: "A Project With a Clear Scope",
    description:
      "You have a defined app or upgrade. We scope it, build it, test it and hand it over to you.",
  },
  {
    icon: "♙",
    title: "A Dedicated .NET Developer",
    description:
      "You want a developer working inside your team by the hour, part time or full time. You interview them and decide who joins.",
  },
];

const reasons = [
  {
    icon: "⌘",
    title: ".NET and Salesforce Under One Roof",
    description:
      "One team can build your .NET app and connect it to Salesforce.",
  },
  {
    icon: "▥",
    title: "120+ Projects for 40+ Clients",
    description:
      "We’ve delivered 120+ projects for 40+ clients across 19+ countries.",
  },
  {
    icon: "◷",
    title: "US Time-Zone Overlap",
    description:
      "Our team is based in Jaipur, India. We agree on overlapping working hours, so we can join your meetings and reviews.",
  },
  {
    icon: "◉",
    title: "24/7 Support",
    description:
      "Support is available 24/7, and every request gets a reply within 24 hours through our ticket portal or email.",
  },
  {
    icon: "◈",
    title: "Security and Confidentiality",
    description:
      "Saasverse is ISO 27001 and Cyber Essentials Plus certified. We sign an NDA before we touch your code or systems.",
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
  links,
  link,
  linkText,
  external = false,
}: {
  icon: string;
  title: string;
  description: string;
  number?: string;
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

      {links && links.length > 0 && (
        <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#003e95] underline decoration-blue-200 underline-offset-4 transition hover:decoration-[#003e95]"
            >
              {item.label} <span aria-hidden="true">→</span>
            </Link>
          ))}
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
              {linkText} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <Link
              href={link}
              className="text-sm font-semibold text-[#003e95] underline decoration-blue-200 underline-offset-4 hover:decoration-[#003e95]"
            >
              {linkText} <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      )}

      <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-[#003e95] transition-all duration-300 group-hover:w-2/3" />
    </article>
  );
}

export default function DotNetDevelopmentSections() {
  return (
    <div className="overflow-hidden bg-white text-slate-900">
      {/* Our .NET Development Services */}
      <section className="bg-gradient-to-b from-blue-50/70 to-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow=".NET Development"
            title="Our .NET Development Services"
            description="New apps, upgrades or keeping an old app running: here’s what our .NET developers do."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <FeatureCard key={service.number} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* .NET Upgrade */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 text-center shadow-sm sm:p-10 lg:p-12">
            <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#003e95]">
              Plan Your Upgrade
            </span>

            <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
              .NET 8 and .NET 9 Support Ends on November 10, 2026
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
              After that date, Microsoft stops releasing security patches
              for .NET 8 and .NET 9. Apps that stay on these versions will
              keep running, but any new security issue will stay open.
              .NET 10 is the current long-term support version, supported
              until November 14, 2028.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
              Apps still on .NET Framework or older .NET Core versions are
              even further behind. We review your app, plan the upgrade
              path and move it to .NET 10 with as little disruption as
              possible.
            </p>

            <p className="mt-5 text-xs leading-6 text-slate-500">
              Source: Microsoft .NET support policy. Verify the current
              lifecycle dates before publishing.
            </p>

            <a
              href="https://dotnet.microsoft.com/platform/support/policy/dotnet-core"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-[#003e95] underline underline-offset-4"
            >
              View Microsoft .NET support policy ↗
            </a>

            <div>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-[#003e95] px-7 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
              >
                Book a Free Consultation
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* .NET and Salesforce */}
      <section className="bg-blue-50/70 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Connected Solutions"
            title=".NET and Salesforce, One Team"
          />

          <div className="rounded-3xl border border-blue-100 bg-white p-7 text-center shadow-sm sm:p-10">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl text-[#003e95]">
              ⇄
            </div>

            <p className="mx-auto max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
              Many companies run their own .NET applications next to
              Salesforce. Because Saasverse is also a Salesforce partner,
              the same team can build your .NET app and connect it to
              Salesforce, so you don’t have to coordinate two vendors.
            </p>

            <Link
              href="/salesforce-integration-services"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#003e95] underline underline-offset-4"
            >
              Explore Salesforce integration services →
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Tech Stack"
            title="Technologies We Use"
            description="The technologies used depend on your application, existing architecture and project requirements."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <article
                key={technology.title}
                className="flex h-full flex-col items-center rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl text-[#003e95]">
                  <span aria-hidden="true">{technology.icon}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {technology.title}
                </h3>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {technology.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-blue-100 bg-blue-50/60 px-3 py-2 text-xs font-medium text-slate-700 sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="bg-gradient-to-b from-blue-50/70 to-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Process"
            title="How a .NET Project Works"
            description="A clear process for new applications, upgrades and existing application improvements."
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

      {/* Ways to Work */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Engagement Models"
            title="Ways to Work With Us"
            description="Choose the approach that fits your application, team and project requirements."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {workModels.map((model) => (
              <FeatureCard key={model.title} {...model} />
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-7 text-slate-600 sm:text-base">
            The contract can be a fixed-scope project or time and
            materials, whichever suits the work.
          </p>
        </div>
      </section>

      {/* How We Build */}
      <section className="bg-blue-50/70 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Engineering Standards"
            title="How We Build"
            description="Maintainable code, testing and secure development practices help keep your application reliable."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {developmentPractices.map((practice) => (
              <FeatureCard key={practice.title} {...practice} />
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
              What .NET Development Costs
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-slate-600 sm:text-base">
              The cost depends on your requirements: what needs to be
              built or upgraded, how big and old the current code is, the
              integrations involved and the hosting setup. After the
              discovery call, we send you a written scope with the cost
              and timeline.
            </p>

            <Link
              href="#book-a-free-consultation"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#003e95] px-7 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
            >
              Book a Free Consultation
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Saasverse */}
      <section className="bg-gradient-to-b from-blue-50/70 to-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Saasverse"
            title="Why Choose Saasverse for .NET Development"
            description="Work with a team focused on practical development, connected systems and long-term application support."
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

