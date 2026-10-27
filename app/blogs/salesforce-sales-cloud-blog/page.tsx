import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/app/components/Home/CTASection";
import PageBanner from "@/app/components/PageBanner";
import BlogSlider from "@/app/components/BlogSlider";

const CSS = String.raw`
html { scroll-behavior: smooth; }

.hsc-page {
  --ink: #12182b;
  --muted: #4d566e;
  --paper: #ffffff;
  --wash: #f2f5fa;
  --line: #d9dfeb;
  --brand: #1b3a8f;
  --brand-deep: #0f2566;
  --saffron: #f0a30a;
  --measure: 40.5rem;

  line-height: 1.7;
  color: var(--ink);
  background: var(--paper);
}

.hsc-srOnly {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

/* Layout */
.hsc-layout {
  max-width: 62rem;
  margin: 0 auto;
  padding: 2.5rem 1.25rem 5rem;
  display: block;
}

.hsc-toc {
  background: var(--wash);
  border-left: 4px solid var(--brand);
  padding: 1rem 1.25rem;
  margin-bottom: 2.5rem;
  line-height: 1.45;
  font-size: 0.95rem;
}
.hsc-tocTitle { font-weight: 700; margin: 0 0 0.5rem; }
.hsc-toc ol { margin: 0; padding-left: 1.2rem; list-style: decimal; }
.hsc-toc li { margin: 0.4rem 0; }
.hsc-toc a { color: var(--ink); text-decoration: none; }
.hsc-toc a:hover { color: var(--brand); text-decoration: underline; }

@media (min-width: 62rem) {
  .hsc-layout {
    display: grid;
    grid-template-columns: 15rem minmax(0, var(--measure));
    column-gap: 4rem;
    align-items: start;
  }
  .hsc-toc {
    position: sticky;
    top: 1.5rem;
    margin-bottom: 0;
    max-height: calc(100vh - 3rem);
    overflow-y: auto;
  }
}

/* Article */
.hsc-article section { scroll-margin-top: 1.5rem; margin-bottom: 3.25rem; counter-reset: step; }
.hsc-article h2 {
  font-size: clamp(1.55rem, 3vw, 2.05rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.015em;
  margin: 0 0 1rem;
  color: var(--brand-deep);
  text-wrap: balance;
}
.hsc-article h3 {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 0.4rem;
}
.hsc-article p { margin: 0 0 1.1rem; }
.hsc-article a { color: var(--brand); text-underline-offset: 3px; }
.hsc-article a:hover { color: var(--brand-deep); }
.hsc-article :focus-visible,
.hsc-toc a:focus-visible,
.hsc-button:focus-visible {
  outline: 3px solid var(--saffron);
  outline-offset: 3px;
}

/* Stats */
.hsc-stats {
  list-style: none;
  margin: 1.5rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
}
.hsc-stats li {
  background: var(--paper);
  padding: 1.1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  margin: 0;
}
.hsc-stats strong {
  font-size: 1.9rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--brand);
}
.hsc-stats span {
  font-size: 0.95rem;
  line-height: 1.4;
  color: var(--muted);
}

/* Callout */
.hsc-callout {
  border-left: 4px solid var(--saffron);
  background: #fff8e6;
  padding: 1rem 1.25rem 0.1rem;
  margin: 1.75rem 0 0;
}

/* Image */
.hsc-figure {
  position: relative;
  aspect-ratio: 16 / 9;
  margin: 1.5rem 0;
  overflow: hidden;
  border: 1px solid var(--line);
}

/* Lists */
.hsc-plainList { padding-left: 1.4rem; margin: 0 0 1.25rem; list-style: disc; }
.hsc-plainList li { margin-bottom: 0.6rem; padding-left: 0.2rem; }
.hsc-plainList li::marker { color: var(--brand); font-weight: 700; }

/* Steps: numbered sequence */
.hsc-step {
  counter-increment: step;
  position: relative;
  padding-left: 3.25rem;
  margin-bottom: 1.75rem;
}
.hsc-step::before {
  content: counter(step);
  position: absolute;
  left: 0;
  top: 0.05rem;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background: var(--brand);
  color: #fff;
  font-weight: 700;
  display: grid;
  place-items: center;
}

/* Tables */
.hsc-tableWrap {
  overflow-x: auto;
  margin: 1.5rem 0;
  border: 1px solid var(--line);
}
.hsc-tableWrap table {
  width: 100%;
  min-width: 30rem;
  border-collapse: collapse;
  font-size: 0.95rem;
  line-height: 1.45;
}
.hsc-tableWrap th,
.hsc-tableWrap td {
  text-align: left;
  vertical-align: top;
  padding: 0.7rem 0.9rem;
  border-bottom: 1px solid var(--line);
}
.hsc-tableWrap thead th {
  background: var(--brand-deep);
  color: #fff;
  font-weight: 600;
  border-bottom: 0;
}
.hsc-tableWrap tbody th { font-weight: 700; color: var(--brand-deep); background: var(--wash); }
.hsc-tableWrap tbody tr:last-child > * { border-bottom: 0; }

/* CTA */
.hsc-cta {
  background: var(--brand-deep);
  color: #fff;
  padding: 1.75rem 1.5rem 1.5rem;
  margin-top: 2rem;
}
.hsc-cta p { color: #e6ecff; }
.hsc-button {
  display: inline-block;
  background: var(--saffron);
  color: var(--ink) !important;
  font-weight: 700;
  text-decoration: none !important;
  padding: 0.8rem 1.4rem;
  transition: background-color 0.15s ease;
}
.hsc-button:hover { background: #ffc03d; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .hsc-button { transition: none; }
}

.hsc-item {
  border-top: 1px solid var(--line);
  padding: 1rem 0 0.1rem;
}
.hsc-item:last-of-type { border-bottom: 1px solid var(--line); margin-bottom: 1.25rem; }
`;

const URL_PATH = "https://www.saasverse.in/blogs/salesforce-sales-cloud-blog";
const TITLE = "What Is Salesforce Sales Cloud? Guide | Saasverse";
const DESCRIPTION =
  "Learn what Salesforce Sales Cloud is: features, benefits and use cases. Read more from Saasverse.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL_PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL_PATH,
    type: "article",
    siteName: "Saasverse",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

type Item = { title: string; body: string };

const toc = [
  { id: "what-is-sales-cloud", label: "What is Salesforce Sales Cloud?" },
  { id: "features", label: "Sales Cloud features that drive success" },
  { id: "advantages", label: "Advantages of Salesforce Sales Cloud" },
  { id: "supercharge", label: "Supercharge your sales" },
  { id: "use-cases", label: "Real-world use cases" },
  { id: "pricing", label: "Understanding Sales Cloud pricing" },
  { id: "conclusion", label: "Conclusion" },
];

const features: Item[] = [
  {
    title: "Accounts Management",
    body: "Organizations you plan to do business with are considered accounts, created much like campaigns and leads. Opportunity management and account activities give you a 360-degree picture of your customers, so account managers can review their customer base and spot early warning signs of a potentially upset customer.",
  },
  {
    title: "Leads Management",
    body: "Anyone interested in your product or service, through a campaign or otherwise, is a lead. Sales Cloud helps you manage leads, their source, and their contact details, keeping your customer’s journey intact from the very first stage.",
  },
  {
    title: "Campaign Management",
    body: "Campaign management helps predict a company’s marketing campaigns to generate increased sales. Campaigns can be launched in a variety of ways, including telemarketing, email, seminars, events, and advertising.",
  },
  {
    title: "Opportunity Management",
    body: "Once a lead is closed and it’s time to define what they’ll receive, opportunity management takes over. Opportunities are pending deals: records that track which accounts they’re for, who the players are, and the size of the potential sale, so you can follow progress at every stage.",
  },
  {
    title: "Contacts Management",
    body: "Contacts link to an existing account or to one you create for your company, giving you a real relationship-management system. Contact management keeps every connection involved in a business transaction in one place, along with past conversations, key numbers, and emails.",
  },
  {
    title: "Case Management",
    body: "When issues come up after you’ve closed a deal, case management steps in. Email-to-case features keep the process organized by letting customers submit issues by email, so an agent can work the case without toggling between inboxes, and every issue can be tracked and followed up on.",
  },
  {
    title: "Reports and Dashboards",
    body: "Reports and dashboards pull data out through filters for a clear visualization of what matters most, cutting through mountains of fields. Use them to dig deeper and see whether your campaigns are reliably acquiring leads and accounts.",
  },
];

const advantages: Item[] = [
  {
    title: "Enhanced Sales Productivity",
    body: "Automates lead management, opportunity tracking, and activity logging, freeing salespeople to focus on closing. Auto-responders and task reminders boost efficiency further.",
  },
  {
    title: "Improved Sales Pipeline Management",
    body: "A clear picture of your pipeline lets you see potential deals, monitor progress, and forecast revenue more accurately, with leads and opportunities categorized by likelihood to convert.",
  },
  {
    title: "Enhanced Collaboration",
    body: "Supports collaboration between sales reps and other departments through shared communication and data. Internal notes, activity streams, and team tools keep everyone aligned.",
  },
  {
    title: "Better Customer Relationships",
    body: "Store detailed customer information, track interactions, and tailor your approach to each individual for stronger relationships and greater satisfaction.",
  },
  {
    title: "Data-Driven Decision Making",
    body: "Build powerful reports and analytics to surface sales performance, spot trends, and make decisions grounded in data rather than guesswork.",
  },
  {
    title: "Mobile Accessibility",
    body: "The Salesforce mobile app lets your salespeople access customer information, manage leads, and close deals from anywhere.",
  },
  {
    title: "Scalability and Customisation",
    body: "Scales to meet your growing business needs, with customisation features that tailor the platform to your specific sales processes and workflows.",
  },
  {
    title: "Integration with Other Tools",
    body: "Integrates easily with other Salesforce products (Marketing Cloud, Service Cloud) and third-party tools, forming a comprehensive business ecosystem.",
  },
];

const useCases: Item[] = [
  {
    title: "B2B Sales Management",
    body: "Businesses selling complex products to other companies use Sales Cloud to manage lengthy sales cycles, track interactions, and forecast revenue.",
  },
  {
    title: "Retail and eCommerce",
    body: "Retailers use Sales Cloud to understand the customer, tailor marketing efforts, and optimise in-store and online conversions.",
  },
  {
    title: "Healthcare Sales Teams",
    body: "Pharmaceutical reps and medical device companies use Sales Cloud to manage territory, monitor physician calls, and stay compliant with industry regulations.",
  },
  {
    title: "Financial Services",
    body: "Insurance providers and banks use Sales Cloud to manage client relationships, cross-sell products, and streamline the onboarding process.",
  },
  {
    title: "Startups and SMBs",
    body: "Startups use Sales Cloud for lead management and pipeline visibility, while SMBs benefit from low-cost packages that scale with the business.",
  },
];

const pricing = {
  head: ["Edition", "Price per user per month", "What it covers"],
  rows: [
    ["Essentials", "$25", "Suitable for small businesses. Covers essential CRM capabilities."],
    ["Professional", "$75", "Aimed at growing teams, with deeper sales tools."],
    ["Enterprise (most popular)", "$150", "The most sought-after plan: full CRM capabilities and customisation features."],
    ["Unlimited", "$300", "Unlimited CRM power, 24/7 support, and advanced features."],
  ],
};

function DataTable({
  caption,
  data,
}: {
  caption: string;
  data: { head: string[]; rows: string[][] };
}) {
  return (
    <div className="hsc-tableWrap" role="region" aria-label={caption} tabIndex={0}>
      <table>
        <caption className="hsc-srOnly">{caption}</caption>
        <thead>
          <tr>
            {data.head.map((h, i) => (
              <th key={i} scope="col">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) =>
                c === 0 ? (
                  <th key={c} scope="row">{cell}</th>
                ) : (
                  <td key={c}>{cell}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Items({ items }: { items: Item[] }) {
  return (
    <>
      {items.map((it) => (
        <div className="hsc-item" key={it.title}>
          <h3>{it.title}</h3>
          <p>{it.body}</p>
        </div>
      ))}
    </>
  );
}

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Explore Salesforce Sales Cloud: Features, Benefits & Use Cases",
    description: DESCRIPTION,
    mainEntityOfPage: URL_PATH,
    publisher: { "@type": "Organization", name: "Saasverse", url: "https://www.saasverse.in" },
  };

  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageBanner
        image="/images/banner/banner002.webp"
        title="Explore Salesforce Sales Cloud: Features, Benefits & Use Cases"
        description="Salesforce Sales Cloud presents a set of tools specifically designed for sales teams to effectively manage leads, monitor customer interactions, and close sales more swiftly."
      />

      <div className="hsc-page">
        <div className="hsc-layout">
          <aside className="hsc-toc" aria-label="In this guide">
            <p className="hsc-tocTitle">In this guide</p>
            <ol>
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`}>{t.label}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="hsc-article">
            <section>
              <h2>Manage leads, track customers, and close deals faster.</h2>
              <p>
                In order to operate the sales department of any organization, Salesforce offers Sales Cloud. It simplifies the handling of sales operations by keeping customer interactions organized and on record, and gives teams room for better collaboration and automation. You can monitor your contacts, leads, products, quotes, and campaigns, and keep your whole sales process under control.
              </p>
              <p>
                Salesforce Sales Cloud is a robust solution built to boost sales productivity and business growth. Part of the larger Salesforce ecosystem, it gives sales teams a set of tools to effectively manage leads, monitor customer interactions, and close sales more swiftly. Below, we walk through what Sales Cloud is, its fundamental features, its advantages, real-world use cases, and a summary of its pricing.
              </p>
            </section>

            <section id="what-is-sales-cloud">
              <h2>What Is Salesforce Sales Cloud?</h2>
              <p>
                Sales Cloud is a fully customizable, cloud-based sales solution and CRM built by Salesforce that hosts all of your customer data in a single location.
              </p>
              <p>
                All your sales automation lives in one place with{" "}
                <Link href="/salesforce-sales-cloud/">Sales Cloud</Link>. It helps companies manage leads easily, monitor progress, and automate the sales process, enabling sales teams to engage prospects and customers across multiple channels, access real-time information, and work more collaboratively. Whether you are an enterprise or a small business, Sales Cloud offers the scalability and flexibility needed to simplify your sales processes.
              </p>
              <div className="hsc-figure">
                <Image
                  src="/images/blogs/blogimp.webp"
                  alt="Salesforce Sales Cloud dashboard"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(min-width: 62rem) 40rem, 100vw"
                />
              </div>
            </section>

            <section id="features">
              <h2>Salesforce Sales Cloud Features That Drive Success</h2>
              <p>
                Sales representatives and organizations looking for account management and customer success solutions will find real advantages in these Sales Cloud features.
              </p>
              <Items items={features} />
            </section>

            <section id="advantages">
              <h2>Advantages of Salesforce Sales Cloud</h2>
              <Items items={advantages} />
            </section>

            <section id="supercharge">
              <h2>Supercharge Your Sales With Salesforce Sales Cloud</h2>
              <p>
                Sales Cloud is more than a CRM. It is your intelligent sales partner. From lead generation to closing the deal, empower your teams with advanced automation, real-time data, customizable dashboards, and AI-powered insights that drive smarter decisions. Whether you are a growing business or an established enterprise, Sales Cloud adapts to your process and scales with your success.
              </p>
            </section>

            <section id="use-cases">
              <h2>Real-World Use Cases for Sales Cloud</h2>
              <p>
                Sales Cloud is used across industries and business models. Here are some of its most notable applications.
              </p>
              <Items items={useCases} />
            </section>

            <section id="pricing">
              <h2>Understanding Sales Cloud Pricing</h2>
              <p>
                Sales Cloud pricing supports businesses of different sizes and requirements, across four editions.
              </p>
              <DataTable caption="Salesforce Sales Cloud editions and pricing" data={pricing} />
            </section>

            <section id="conclusion">
              <h2>Conclusion</h2>
              <p>
                Salesforce Sales Cloud is a powerful CRM solution that helps sales teams become more productive, data-driven, and customer-centric. With its extensive features, concrete benefits, flexible pricing, and real-world applications, Sales Cloud has become a go-to solution for organizations looking to scale their sales operations.
              </p>
              <p>
                Whether you are new to CRM or upgrading your current system, Sales Cloud offers the tools and insights you need to drive sales excellence. Join the future of selling with Salesforce Sales Cloud and unlock the full potential of your business.
              </p>
              <div className="hsc-cta">
                <p>
                  <strong>Ready to unlock Sales Cloud for your team?</strong> Collaborate with a leading Salesforce implementation company to make that first step.
                </p>
                <Link href="/contact" className="hsc-button">
                  Get a quote
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>

      <BlogSlider />
      <CTASection />
    </div>
  );
}