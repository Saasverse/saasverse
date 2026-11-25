import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/app/components/PageBanner";
import CTASection from "@/app/components/Home/CTASection";
import BlogSlider from "@/app/components/BlogSlider";

const URL_PATH = "https://www.saasverse.in/blogs/salesforce-sandbox";

const TITLE =
  "Salesforce Sandbox: Types, Limits and How to Use Them";

const DESCRIPTION =
  "What a Salesforce sandbox is, the 4 sandbox types and their limits, which editions include them, how refresh works and how to keep test data safe.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL_PATH,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL_PATH,
    type: "article",
    siteName: "Saasverse",
    images: [
      {
        url: "/images/blogs/salesforce-sandbox.webp",
        width: 1200,
        height: 630,
        alt: "Salesforce Sandbox Types and Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/blogs/salesforce-sandbox.webp"],
  },
};

const CSS = `
.sandbox-page {
  --ink: #12182b;
  --muted: #4d566e;
  --paper: #fff;
  --wash: #f2f5fa;
  --line: #d9dfeb;
  --brand: #1b3a8f;
  --brand-deep: #0f2566;
  --saffron: #f0a30a;
  color: var(--ink);
  background: var(--paper);
  line-height: 1.7;
}

.sandbox-layout {
  max-width: 72rem;
  margin: 0 auto;
  padding: 2.5rem 1.25rem 5rem;
}

.sandbox-toc {
  background: var(--wash);
  border-left: 4px solid var(--brand);
  padding: 1rem 1.25rem;
  margin-bottom: 2.5rem;
  line-height: 1.45;
}

.sandbox-toc-title {
  font-weight: 700;
  margin: 0 0 .5rem;
}

.sandbox-toc ol {
  margin: 0;
  padding-left: 1.2rem;
}

.sandbox-toc li {
  margin: .4rem 0;
}

.sandbox-toc a {
  color: var(--ink);
  text-decoration: none;
}

.sandbox-toc a:hover {
  color: var(--brand);
  text-decoration: underline;
}

@media (min-width: 62rem) {
  .sandbox-layout {
    display: grid;
    grid-template-columns: 16rem minmax(0, 42rem);
    column-gap: 4rem;
    align-items: start;
  }

  .sandbox-toc {
    position: sticky;
    top: 1.5rem;
    margin-bottom: 0;
  }
}

.sandbox-article section {
  scroll-margin-top: 1.5rem;
  margin-bottom: 3.25rem;
}

.sandbox-article h2 {
  font-size: 1.8rem;
  line-height: 1.2;
  letter-spacing: -.015em;
  margin: 0 0 1rem;
  color: var(--brand-deep);
  font-weight: 700;
}

.sandbox-article h3 {
  font-size: 1.15rem;
  line-height: 1.3;
  margin: 0 0 .5rem;
  color: var(--brand-deep);
  font-weight: 700;
}

.sandbox-article p {
  margin: 0 0 1.1rem;
}

.sandbox-article a {
  color: var(--brand);
  text-underline-offset: 3px;
}

.sandbox-article a:hover {
  color: var(--brand-deep);
}

.sandbox-kicker {
  display: inline-block;
  color: var(--brand);
  background: #edf1fb;
  padding: .3rem .7rem;
  margin-bottom: .75rem;
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.sandbox-takeaways {
  background: #f5f7fc;
  border: 1px solid var(--line);
  border-left: 4px solid var(--brand);
  padding: 1.5rem;
  margin: 2rem 0 3rem;
}

.sandbox-takeaways h2 {
  font-size: 1.4rem;
}

.sandbox-takeaways ul {
  margin: 0;
  padding-left: 1.25rem;
}

.sandbox-takeaways li {
  margin-bottom: .75rem;
}

.sandbox-stats {
  list-style: none;
  margin: 0 0 2rem;
  padding: 0;
  display: grid;
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
}

.sandbox-stats li {
  background: var(--paper);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: .25rem;
}

.sandbox-stats strong {
  font-size: 1.8rem;
  line-height: 1.2;
  color: var(--brand);
}

.sandbox-stats span {
  line-height: 1.4;
  color: var(--muted);
  font-size: .95rem;
}

@media (min-width: 40rem) {
  .sandbox-stats {
    grid-template-columns: repeat(3, 1fr);
  }
}

.sandbox-list {
  padding-left: 1.4rem;
  margin: 0 0 1.25rem;
}

.sandbox-list li {
  margin-bottom: .7rem;
  padding-left: .2rem;
}

.sandbox-list li::marker {
  color: var(--brand);
  font-weight: 700;
}

.sandbox-table-wrap {
  overflow-x: auto;
  margin: 1.5rem 0;
  border: 1px solid var(--line);
  border-radius: .5rem;
}

.sandbox-table-wrap table {
  width: 100%;
  min-width: 36rem;
  border-collapse: collapse;
  line-height: 1.5;
  font-size: .95rem;
}

.sandbox-table-wrap th,
.sandbox-table-wrap td {
  text-align: left;
  vertical-align: top;
  padding: .85rem .9rem;
  border-bottom: 1px solid var(--line);
}

.sandbox-table-wrap thead th {
  background: var(--brand-deep);
  color: #fff;
  font-weight: 600;
  border-bottom: 0;
}

.sandbox-table-wrap tbody th {
  font-weight: 700;
  color: var(--brand-deep);
  background: var(--wash);
}

.sandbox-table-wrap tbody tr:last-child > * {
  border-bottom: 0;
}

.sandbox-callout {
  border-left: 4px solid var(--saffron);
  background: #fff8e6;
  padding: 1rem 1.25rem .1rem;
  margin: 1.75rem 0;
}

.sandbox-steps {
  counter-reset: step;
  margin: 1.5rem 0;
}

.sandbox-step {
  counter-increment: step;
  position: relative;
  padding-left: 3.25rem;
  margin-bottom: 1.75rem;
}

.sandbox-step::before {
  content: counter(step);
  position: absolute;
  left: 0;
  top: .05rem;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background: var(--brand);
  color: #fff;
  font-weight: 700;
  display: grid;
  place-items: center;
}

.sandbox-checklist {
  counter-reset: checklist;
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.sandbox-checklist li {
  counter-increment: checklist;
  position: relative;
  padding: 1rem 1rem 1rem 3.5rem;
  margin-bottom: .75rem;
  background: var(--wash);
  border: 1px solid var(--line);
  border-radius: .5rem;
}

.sandbox-checklist li::before {
  content: counter(checklist);
  position: absolute;
  left: 1rem;
  top: .85rem;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background: var(--brand);
  color: #fff;
  font-weight: 700;
  display: grid;
  place-items: center;
}

.sandbox-cta {
  background: var(--brand-deep);
  color: #fff;
  padding: 1.75rem 1.5rem 1.5rem;
  margin-top: 2rem;
  border-radius: .75rem;
}

.sandbox-cta h3 {
  color: #fff;
}

.sandbox-cta p {
  color: #e5e7eb;
}

.sandbox-button {
  display: inline-block;
  background: var(--saffron);
  color: var(--ink) !important;
  font-weight: 700;
  text-decoration: none !important;
  padding: .8rem 1.4rem;
  border-radius: .35rem;
}

.sandbox-button:hover {
  background: #ffc03d;
}

.sandbox-faq details {
  border-top: 1px solid var(--line);
}

.sandbox-faq details:last-child {
  border-bottom: 1px solid var(--line);
}

.sandbox-faq summary {
  cursor: pointer;
  list-style: none;
  padding: 1rem 2rem 1rem 0;
  font-weight: 600;
  line-height: 1.35;
  position: relative;
}

.sandbox-faq summary::-webkit-details-marker {
  display: none;
}

.sandbox-faq summary::after {
  content: "+";
  position: absolute;
  right: .25rem;
  top: .85rem;
  font-size: 1.4rem;
  color: var(--brand);
}

.sandbox-faq details[open] summary::after {
  content: "–";
}

.sandbox-faq details p {
  margin: 0 0 1.1rem;
  color: var(--muted);
}

.sandbox-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.sandbox-article :focus-visible,
.sandbox-toc a:focus-visible,
.sandbox-button:focus-visible,
.sandbox-faq summary:focus-visible {
  outline: 3px solid var(--saffron);
  outline-offset: 3px;
}
`;

const toc = [
  { id: "basics", label: "What is a Salesforce sandbox?" },
  { id: "types", label: "What are the four types of sandboxes?" },
  { id: "editions", label: "Which sandboxes come with your edition?" },
  { id: "setup", label: "How to create and log in to a sandbox" },
  { id: "refresh", label: "How does a sandbox refresh work?" },
  { id: "data", label: "How to keep sandbox data safe and useful" },
  { id: "scratch-org", label: "Sandbox or scratch org?" },
  { id: "why-saasverse", label: "Why Saasverse?" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faq", label: "Frequently asked questions" },
];

const sandboxTypes = {
  head: [
    "Sandbox type",
    "What is copied",
    "Data storage",
    "File storage",
    "Refresh interval",
    "Best for",
  ],
  rows: [
    [
      "Developer",
      "Metadata only",
      "200 MB",
      "200 MB",
      "1 day",
      "Building and unit testing one change",
    ],
    [
      "Developer Pro",
      "Metadata only",
      "1 GB",
      "1 GB",
      "1 day",
      "Larger builds, integration testing, training",
    ],
    [
      "Partial Copy",
      "Metadata and sample data (needs a template)",
      "5 GB",
      "Same as production",
      "5 days",
      "Testing with realistic records, user acceptance testing",
    ],
    [
      "Full",
      "Metadata and all data",
      "Same as production",
      "Same as production",
      "29 days",
      "Final testing, data migration rehearsals, performance checks",
    ],
  ],
};

const editions = {
  head: [
    "Edition",
    "Developer",
    "Developer Pro",
    "Partial Copy",
    "Full",
  ],
  rows: [
    ["Professional", "10", "Not included", "Not available", "Not available"],
    ["Enterprise", "25", "Not included", "1", "Not included"],
    ["Unlimited", "100", "5", "1", "1"],
    ["Performance", "100", "5", "1", "1"],
  ],
};

const sandboxComparison = {
  head: ["", "Sandbox", "Scratch org"],
  rows: [
    [
      "Created from",
      "Your production org",
      "A definition file in source control",
    ],
    ["Data", "None to all, by type", "Empty unless you load it"],
    [
      "Lifespan",
      "Until you delete it (or 180 days unused)",
      "Short, set when created",
    ],
    [
      "Best for",
      "Admin work, testing, training, UAT",
      "Pro-code development of one feature",
    ],
  ],
};

const faqs = [
  [
    "What is a sandbox in Salesforce?",
    "A sandbox is a copy of your Salesforce production org used for building, testing and training. It has the same configuration as production and, depending on the type, no data, sample data or all data. Changes stay in the sandbox until you deploy them to production.",
  ],
  [
    "What are the four types of sandboxes in Salesforce?",
    "The four types are Developer, Developer Pro, Partial Copy and Full. Developer and Developer Pro copy only metadata and can be refreshed daily. Partial Copy adds sample data and refreshes every 5 days. Full copies all data and can be refreshed every 29 days.",
  ],
  [
    "How much does a Full sandbox cost in Salesforce?",
    "Salesforce sets sandbox prices and quotes them as add-ons, so the figure depends on your edition and contract. A Full sandbox is already included in Unlimited and Performance editions. Enterprise Edition customers can buy one. Ask your Salesforce account executive for current pricing for your org.",
  ],
  [
    "How do I log in to a Salesforce sandbox?",
    "Go to test.salesforce.com and sign in with your production username plus a dot and the sandbox name, such as anna@company.com.uat. Your password is the same as your production password. If your company uses My Domain or single sign-on, use the sandbox's own login URL.",
  ],
  [
    "How often can you refresh a Salesforce sandbox?",
    "Developer and Developer Pro sandboxes can be refreshed once a day, Partial Copy once every 5 days and Full once every 29 days. A refresh replaces everything in the sandbox with a new copy of production, so deploy or save any work you want to keep before you start it.",
  ],
  [
    "Does a sandbox affect production data?",
    "No. Records you create, edit or delete in a sandbox stay in the sandbox. The risk is outside Salesforce: an integration that still points at a live system, or email sent to real contacts. Check endpoints, contact emails and email deliverability after every refresh, before testing starts.",
  ],
  [
    "What is sandbox seeding in Salesforce?",
    "Seeding means loading test data into a sandbox after it is created or refreshed. Developer sandboxes have no records, so teams load a small, repeatable set of accounts, contacts and cases with Data Loader, a script or Salesforce's Data Mask & Seed tool.",
  ],
  [
    "What is the difference between a sandbox and a scratch org?",
    "A sandbox is copied from production and lasts until you delete it. A scratch org is built from a definition file in source control, starts empty and expires after a short, set period. Scratch orgs suit developers working with the Salesforce CLI; sandboxes suit admins, testers and trainers.",
  ],
];

function DataTable({
  caption,
  data,
}: {
  caption: string;
  data: { head: string[]; rows: string[][] };
}) {
  return (
    <div
      className="sandbox-table-wrap"
      role="region"
      aria-label={caption}
      tabIndex={0}
    >
      <table>
        <caption className="sandbox-sr-only">{caption}</caption>
        <thead>
          <tr>
            {data.head.map((heading, index) => (
              <th key={index} scope="col">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) =>
                cellIndex === 0 ? (
                  <th key={cellIndex} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={cellIndex}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: TITLE,
      description: DESCRIPTION,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": URL_PATH,
      },
      image: [
        "https://www.saasverse.in/images/blogs/salesforce-sandbox.webp",
      ],
      author: {
        "@type": "Organization",
        name: "Saasverse",
      },
      publisher: {
        "@type": "Organization",
        name: "Saasverse",
        url: "https://www.saasverse.in",
      },
      datePublished: "2026-11-25",
      dateModified: "2026-11-25",
      articleSection: "Salesforce",
      keywords:
        "salesforce sandbox, salesforce sandbox types, salesforce developer sandbox, full sandbox salesforce, salesforce sandbox refresh, salesforce scratch org vs sandbox",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.saasverse.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blogs",
          item: "https://www.saasverse.in/blogs",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: TITLE,
          item: URL_PATH,
        },
      ],
    },
  ];

  return (
    <div className="sandbox-page">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <PageBanner
        image="/images/banner/banner002.webp"
        title="Salesforce Sandbox: Types, Limits and How to Use Them Well"
        description="Understand Salesforce sandbox types, refresh limits, setup and best practices to build and test changes safely."
      />

      <div className="sandbox-layout">
        <aside className="sandbox-toc" aria-label="In this guide">
          <p className="sandbox-toc-title">In this guide</p>
          <ol>
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ol>
        </aside>

        <article className="sandbox-article">
          {/* Introduction */}

          <p className="text-base leading-7 text-gray-600 mb-6">
            A Salesforce sandbox is a copy of your production org where you
            build and test changes without touching live data or users. There
            are four types: Developer, Developer Pro, Partial Copy and Full.
            They differ in how much data they hold, what gets copied and how
            often you can refresh them, from once a day to once every 29 days.
          </p>

          <p>
            Most Salesforce problems that reach users started as a change
            someone made straight in production. A new validation rule blocks
            a sales rep mid-quarter. A Flow sends 4,000 emails nobody meant to
            send. A sandbox is the cheap way to stop that. This guide explains
            each Salesforce sandbox type, what your edition includes, and how
            to set up a simple routine your team will actually follow.
          </p>

          {/* Key Takeaways */}

          <div className="sandbox-takeaways">
            <h2>Key Takeaways</h2>
            <p className="text-sm text-gray-500">
              Checked 25 November 2026
            </p>
            <ul>
              <li>
                Developer and Developer Pro sandboxes copy metadata only and
                can be refreshed every day; a Full sandbox copies all data and
                can be refreshed every 29 days (Salesforce Help).
              </li>
              <li>
                Enterprise Edition includes 25 Developer sandboxes and 1
                Partial Copy sandbox. A Full sandbox is included with
                Unlimited and Performance editions (Salesforce Help).
              </li>
              <li>
                A sandbox nobody has opened for 180 days can be deleted
                (Salesforce Help).
              </li>
              <li>
                Salesforce ends service for the Data Mask managed package on
                December 31, 2026 (Salesforce Help).
              </li>
            </ul>
          </div>

          {/* Stats */}

          <ul className="sandbox-stats">
            <li>
              <strong>4</strong>
              <span>
                sandbox types: Developer, Developer Pro, Partial Copy and Full
              </span>
            </li>
            <li>
              <strong>29 days</strong>
              <span>minimum wait between Full sandbox refreshes</span>
            </li>
            <li>
              <strong>180 days</strong>
              <span>without access before a sandbox can be deleted</span>
            </li>
          </ul>

          {/* What is Sandbox */}

          <section id="basics">
            <span className="sandbox-kicker">The Basics</span>
            <h2>What Is a Salesforce Sandbox?</h2>

            <p>
              A sandbox is a separate Salesforce org created from your
              production org. It has the same setup (objects, fields, Flows,
              page layouts, Apex code) and, depending on the type, some or all
              of your data.
            </p>

            <p>You use it to:</p>

            <ul className="sandbox-list">
              <li>
                build new features and automation before users see them
              </li>
              <li>test releases, integrations and AppExchange packages</li>
              <li>
                train new users without them editing real records
              </li>
            </ul>

            <p>
              Changes made in a sandbox stay there. To move them to production
              you deploy them, using change sets, the Salesforce CLI or a
              DevOps tool. Salesforce&apos;s own{" "}
              <a
                href="https://www.salesforce.com/platform/sandboxes-environments/salesforce-sandbox-guide/"
                rel="nofollow noopener"
                target="_blank"
              >
                sandbox guide
              </a>{" "}
              covers the main uses in more detail. If you are still planning
              your first rollout, our{" "}
              <Link href="/blogs/salesforce-implementation-blog">
                Salesforce implementation guide
              </Link>{" "}
              explains where testing fits in the project.
            </p>
          </section>

          {/* Sandbox Types */}

          <section id="types">
            <span className="sandbox-kicker">Sandbox Types</span>
            <h2>What Are the Four Types of Sandboxes in Salesforce?</h2>

            <p>
              The four types are Developer, Developer Pro, Partial Copy and
              Full. The two Developer types are for building, Partial Copy is
              for testing with realistic data, and Full is for final testing
              and performance checks.
            </p>

            <DataTable
              caption="Salesforce sandbox types, storage and refresh intervals"
              data={sandboxTypes}
            />

            <p>
              Figures from Salesforce Help&apos;s{" "}
              <a
                href="https://help.salesforce.com/s/articleView?id=platform.data_sandbox_environments.htm&language=en_US&type=5"
                rel="nofollow noopener"
                target="_blank"
              >
                sandbox licenses and storage limits
              </a>{" "}
              page. Developer and Developer Pro data storage can be doubled
              with a storage upgrade.
            </p>

            <p>A few practical notes:</p>

            <ul className="sandbox-list">
              <li>
                <strong>Partial Copy</strong> takes a sample, up to 10,000
                parent records with their related child records, or 5 GB in
                total, based on a sandbox template you define.
              </li>
              <li>
                <strong>Full</strong> is a real copy of production. Because
                you can only refresh it every 29 days, Salesforce itself says
                it is hard to use for day-to-day development. Keep it for
                testing.
              </li>
              <li>
                <strong>Developer</strong> sandboxes are small on purpose.
                Give each developer or admin their own so they don&apos;t
                overwrite each other&apos;s work.
              </li>
            </ul>
          </section>

          {/* Editions */}

          <section id="editions">
            <span className="sandbox-kicker">Editions</span>
            <h2>Which Sandboxes Come With Your Salesforce Edition?</h2>

            <p>
              It depends on your edition. Professional Edition gets Developer
              sandboxes only, Enterprise adds one Partial Copy, and Unlimited
              and Performance include a Full sandbox.
            </p>

            <DataTable
              caption="Salesforce sandboxes available per edition"
              data={editions}
            />

            <p>
              Source: Salesforce Help, Sandboxes Available Per Edition. You
              can buy extra Developer Pro sandboxes on any edition, and extra
              Partial Copy or Full sandboxes on Enterprise, Unlimited and
              Performance. Sandbox add-ons are priced by Salesforce, so ask
              your account executive for a quote.
            </p>

            <p>
              For many Enterprise Edition customers, the gap is the Full
              sandbox. If you run large data migrations or heavy integrations,
              that is usually the one worth buying.
            </p>

            <aside className="sandbox-callout">
              <p>
                <strong>Not sure your release process is safe?</strong> Our{" "}
                <Link href="/salesforce-support-and-maintenance-services">
                  Salesforce support and maintenance
                </Link>{" "}
                team builds and tests every change in a sandbox before it goes
                live. We sign an NDA before we look at your org.
              </p>
            </aside>
          </section>

          {/* Setup */}

          <section id="setup">
            <span className="sandbox-kicker">Setup</span>
            <h2>How Do You Create and Log In to a Sandbox?</h2>

            <p>
              An admin creates sandboxes in Setup in a few minutes. The copy
              itself can take minutes for a Developer sandbox and much longer
              for a Full sandbox with a lot of data.
            </p>

            <div className="sandbox-steps">
              <div className="sandbox-step">
                <h3>Open Sandboxes in Setup</h3>
                <p>
                  In Setup, enter <strong>Sandboxes</strong> in Quick Find and
                  open <strong>Sandboxes</strong>.
                </p>
              </div>

              <div className="sandbox-step">
                <h3>Create a New Sandbox</h3>
                <p>
                  Click <strong>New Sandbox</strong> and give it a short, clear
                  name of 10 characters or fewer, such as UAT or Dev1. The name
                  becomes part of every username.
                </p>
              </div>

              <div className="sandbox-step">
                <h3>Choose the Sandbox Type</h3>
                <p>
                  Pick the type. For Partial Copy, choose or create a sandbox
                  template that lists the objects to copy.
                </p>
              </div>

              <div className="sandbox-step">
                <h3>Add a Post-Copy Script (Optional)</h3>
                <p>
                  Optionally add an Apex class that runs after the copy, for
                  example to create test users or clean data.
                </p>
              </div>

              <div className="sandbox-step">
                <h3>Create the Sandbox</h3>
                <p>
                  Click <strong>Create</strong>. Salesforce emails you when
                  the sandbox is ready.
                </p>
              </div>
            </div>

            <p>
              To log in, go to{" "}
              <a
                href="https://test.salesforce.com"
                rel="nofollow noopener"
                target="_blank"
              >
                test.salesforce.com
              </a>{" "}
              instead of login.salesforce.com, or use the <strong>Log In</strong>{" "}
              link next to the sandbox in Setup. If your company blocks the
              standard login page through My Domain, use your sandbox&apos;s My
              Domain URL instead.
            </p>

            <p>
              Your username is your production username plus a dot and the
              sandbox name, for example anna@company.com.uat, and your password
              is the same as in production. Salesforce adds
              &quot;.invalid&quot; to user email addresses so production users
              don&apos;t get automatic emails from the sandbox. If testers need
              those emails, correct their addresses inside the sandbox. Email
              addresses on contact records are not changed, so mask or edit
              those yourself.
            </p>
          </section>

          {/* Refresh */}

          <section id="refresh">
            <span className="sandbox-kicker">Refresh</span>
            <h2>How Does a Sandbox Refresh Work?</h2>

            <p>
              A refresh replaces the sandbox with a fresh copy of production.
              Anything built in the sandbox that isn&apos;t saved elsewhere is
              gone, so deploy or back up work first.
            </p>

            <p>
              Salesforce Help&apos;s{" "}
              <a
                href="https://help.salesforce.com/s/articleView?id=000387743&language=en_US&type=1"
                rel="nofollow noopener"
                target="_blank"
              >
                sandbox types and management best practices
              </a>{" "}
              article recommends not refreshing or cloning many sandboxes at
              once, because copies are processed one after another. When the
              refresh finishes, you choose whether to activate the new copy
              or keep using the current one for a while.
            </p>

            <p>A simple refresh checklist:</p>

            <ul className="sandbox-list">
              <li>
                Every change worth keeping is deployed to production or stored
                in source control.
              </li>
              <li>
                Testers and developers know the date and time of the refresh.
              </li>
              <li>
                Integration endpoints in the sandbox point to test systems,
                not live ones.
              </li>
              <li>
                The post-copy Apex class or a written checklist resets users,
                emails and test data.
              </li>
              <li>
                Email deliverability is checked in Setup (new and refreshed
                sandboxes default to &quot;System email only&quot;) before
                anyone tests something that sends email.
              </li>
            </ul>

            <p>
              Plan refreshes around your release calendar, for example
              refreshing the UAT sandbox right after each production release.
            </p>
          </section>

          {/* Data */}

          <section id="data">
            <span className="sandbox-kicker">Data</span>
            <h2>How Do You Keep Sandbox Data Safe and Useful?</h2>

            <p>
              Treat a Partial Copy or Full sandbox like production, because it
              holds real customer data. Mask or remove personal data that
              testers don&apos;t need, and seed test records for anything the
              sample doesn&apos;t cover.
            </p>

            <p>Three things to set up:</p>

            <div className="sandbox-steps">
              <div className="sandbox-step">
                <h3>Masking</h3>
                <p>
                  Salesforce ends service for the Data Mask managed package on
                  December 31, 2026. Its newer tool, Data Mask &amp; Seed, both
                  obscures selected data and seeds data between refreshes. If
                  you rely on the old package, plan the move now.
                </p>
              </div>

              <div className="sandbox-step">
                <h3>Seeding</h3>
                <p>
                  Developer sandboxes have no data. Keep a small, repeatable
                  set of test records (a few accounts, contacts, open deals
                  and cases) that you can load after each refresh with Data
                  Loader or a script.
                </p>
              </div>

              <div className="sandbox-step">
                <h3>Access</h3>
                <p>
                  Give sandbox access only to people working on the release. A
                  sandbox that copies production users also copies their
                  access, so review it.
                </p>
              </div>
            </div>
          </section>

          {/* Sandbox vs Scratch Org */}

          <section id="scratch-org">
            <span className="sandbox-kicker">Sandbox vs Scratch Org</span>
            <h2>Sandbox or Scratch Org: Which Should You Use?</h2>

            <p>
              Use sandboxes if you build mostly with clicks and change sets.
              Use scratch orgs if your developers work from source control with
              the Salesforce CLI and want a short-lived, empty org for each
              feature.
            </p>

            <DataTable
              caption="Comparison between Salesforce sandbox and scratch org"
              data={sandboxComparison}
            />

            <p>
              Most teams use both: scratch orgs or Developer sandboxes for
              building, then a Partial Copy or Full sandbox for testing the
              combined release before it reaches production. For bigger
              builds, our{" "}
              <Link href="/salesforce-custom-development-services">
                Salesforce custom development services
              </Link>{" "}
              team follows this path for every release.
            </p>
          </section>

          {/* Why Saasverse */}

          <section id="why-saasverse">
            <span className="sandbox-kicker">Why Saasverse</span>
            <h2>Why Saasverse for Your Salesforce Environments?</h2>

            <ul className="sandbox-list">
              <li>
                <strong>
                  Salesforce Partner with Navigator Expert status.
                </strong>
              </li>
              <li>
                <strong>50+ certified people</strong> across admin, developer,
                consultant and architect roles.
              </li>
              <li>
                <strong>
                  120+ projects for 41 clients in 19 countries.
                </strong>
              </li>
              <li>
                <strong>
                  ISO 27001 and Cyber Essentials Plus certified.
                </strong>
              </li>
              <li>
                <strong>Offices in Jaipur and Boston.</strong>
              </li>
              <li>
                <strong>Rated 5.0 on Clutch.</strong>
              </li>
            </ul>
          </section>

          {/* Conclusion */}

          <section id="conclusion">
            <h2>
              Conclusion: Build in a Sandbox, Test in a Copy, Release With a
              Plan
            </h2>

            <p>
              A Salesforce sandbox gives you a safe place to build and test
              before your users see anything. Use Developer sandboxes for
              building, a Partial Copy for testing with realistic data, and a
              Full sandbox, if your edition has one, for final checks. Refresh
              on a schedule, mask personal data, and keep a seed file so every
              test cycle starts clean.
            </p>

            <p>
              If you are connecting Salesforce to other systems, our{" "}
              <Link href="/blogs/salesforce-integration-blog">
                guide to Salesforce integration
              </Link>{" "}
              covers how to test those links too. If you want help setting up
              sandboxes and a release routine your team can keep,{" "}
              <Link href="/contact-us">talk to Saasverse</Link>. We reply
              within 24 hours.
            </p>

            <div className="sandbox-cta">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Need Help Managing Your Salesforce Environment?
              </h3>

              <p>
                Our Salesforce team can help you set up sandbox environments,
                test releases, manage integrations and build a reliable
                deployment process.
              </p>

              <Link href="/contact-us" className="sandbox-button">
                Talk to Saasverse
              </Link>
            </div>
          </section>

          {/* FAQs */}

          <section id="faq">
            <h2>Frequently Asked Questions</h2>

            <div className="sandbox-faq">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    <h3>{question}</h3>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </section>
        </article>
      </div>

      <BlogSlider />
      <CTASection />
    </div>
  );
}