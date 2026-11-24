import type { Metadata } from "next";
import Link from "next/link";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import PageBanner from "@/app/components/PageBanner";
import CTASection from "@/app/components/Home/CTASection";
import BlogSlider from "@/app/components/BlogSlider";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  display: "swap",
});

const text = Newsreader({
  variable: "--font-text",
  display: "swap",
});

const CSS = String.raw`
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

/* Hero */
.hsc-hero {
  background: var(--brand-deep);
  color: #fff;
  padding: clamp(2.5rem, 7vw, 5.5rem) 1.25rem clamp(2.5rem, 6vw, 4.5rem);
  border-bottom: 6px solid var(--saffron);
}
.hsc-heroInner {
  max-width: 62rem;
  margin: 0 auto;
}
.hsc-crumb {
  margin: 0 0 1.25rem;
  color: #b9c6ee;
}
.hsc-crumb a { color: inherit; }
.hsc-hero h1 {
  line-height: 1.06;
  letter-spacing: -0.02em;
  font-weight: 700;
  margin: 0 0 1.75rem;
  max-width: 20ch;
  text-wrap: balance;
}
.hsc-lede {
  line-height: 1.6;
  max-width: 44rem;
  margin: 0 0 0.75rem;
  color: #e6ecff;
}
.hsc-ledeSub {
  margin: 0;
  max-width: 44rem;
  color: #b9c6ee;
  font-style: italic;
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
}
.hsc-tocTitle {
  font-weight: 700;
  margin: 0 0 0.5rem;
}
.hsc-toc ol { margin: 0; padding-left: 1.2rem; }
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
  }
}

/* Article */
.hsc-article section { scroll-margin-top: 1.5rem; margin-bottom: 3.25rem; }
.hsc-article h2 {
  line-height: 1.15;
  letter-spacing: -0.015em;
  margin: 0 0 1rem;
  color: var(--brand-deep);
  text-wrap: balance;
}
.hsc-article h3 {
  line-height: 1.3;
  margin: 0 0 0.4rem;
}
.hsc-article p { margin: 0 0 1.1rem; }
.hsc-article a { color: var(--brand); text-underline-offset: 3px; }
.hsc-article a:hover { color: var(--brand-deep); }
.hsc-article :focus-visible,
.hsc-toc a:focus-visible,
.hsc-button:focus-visible,
.hsc-faq summary:focus-visible {
  outline: 3px solid var(--saffron);
  outline-offset: 3px;
}

/* Stats */
.hsc-stats {
  list-style: none;
  margin: 0 0 3.25rem;
  padding: 0;
  display: grid;
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
}
.hsc-stats li {
  background: var(--paper);
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.hsc-stats strong {
  line-height: 1.2;
  color: var(--brand);
}
.hsc-stats span {
  line-height: 1.4;
  color: var(--muted);
}
@media (min-width: 40rem) {
  .hsc-stats { grid-template-columns: repeat(3, 1fr); }
  .hsc-stats li { padding: 1.25rem; }
}

/* Callout */
.hsc-callout {
  border-left: 4px solid var(--saffron);
  background: #fff8e6;
  padding: 1rem 1.25rem 0.1rem;
  margin: 1.75rem 0 0;
}

/* Lists */
.hsc-plainList { padding-left: 1.4rem; margin: 0 0 1.25rem; }
.hsc-plainList li { margin-bottom: 0.7rem; padding-left: 0.2rem; }
.hsc-plainList li::marker { color: var(--brand); font-weight: 700; }

/* Steps */
.hsc-steps,
.hsc-article section#steps { counter-reset: step; }
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
.hsc-step ul { margin: 0 0 1rem; padding-left: 1.2rem; }
.hsc-step li { margin-bottom: 0.4rem; }

/* Tables */
.hsc-tableWrap {
  overflow-x: auto;
  margin: 1.5rem 0;
  border: 1px solid var(--line);
}
.hsc-tableWrap table {
  width: 100%;
  min-width: 36rem;
  border-collapse: collapse;
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

/* FAQ */
.hsc-faq details { border-top: 1px solid var(--line); }
.hsc-faq details:last-child { border-bottom: 1px solid var(--line); }
.hsc-faq summary {
  cursor: pointer;
  list-style: none;
  padding: 1rem 2rem 1rem 0;
  font-weight: 600;
  line-height: 1.35;
  position: relative;
}
.hsc-faq summary::-webkit-details-marker { display: none; }
.hsc-faq summary::after {
  content: "+";
  position: absolute;
  right: 0.25rem;
  top: 0.85rem;
  line-height: 1;
  color: var(--brand);
}
.hsc-faq details[open] summary::after { content: "–"; }
.hsc-faq details p { margin: 0 0 1.1rem; color: var(--muted); }

@media (prefers-reduced-motion: reduce) {
  .hsc-button { transition: none; }
}
`;

const URL_PATH =
  "https://www.saasverse.in/blogs/salesforce-case-management-blog";

const TITLE =
  "Salesforce Case Management: How It Works and How to Set It Up";

const DESCRIPTION =
  "Learn how Salesforce case management works, from Email-to-Case and assignment rules to escalation, Omni-Channel routing and Service Cloud setup.";

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
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const toc = [
  { id: "basics", label: "What is Salesforce case management?" },
  { id: "channels", label: "How do cases get into Salesforce?" },
  { id: "routing", label: "How are cases routed to the right agent?" },
  { id: "automation", label: "What do escalation and auto-response rules do?" },
  { id: "daily-work", label: "How do agents work cases day to day?" },
  { id: "setup", label: "How do you set up case management in Salesforce?" },
  { id: "example", label: "What does case management look like at scale?" },
  { id: "pitfalls", label: "What are common case management mistakes?" },
  { id: "why", label: "Why Saasverse?" },
  { id: "conclusion", label: "Conclusion and FAQs" },
];

const stats = [
  {
    value: "550,000",
    label: "Service cases a month handled by Air India on Salesforce",
  },
  {
    value: "1 rule",
    label: "Active at a time: activating an assignment rule turns off the others",
  },
  {
    value: "3 rule types",
    label: "Assignment, escalation and auto-response do most of the work",
  },
];

const channels = {
  head: ["Channel", "How the case is created", "Good for"],
  rows: [
    [
      "Email-to-Case",
      "Emails sent to your support address become cases, and replies stay on the same case",
      "Teams moving off a shared inbox",
    ],
    [
      "Web-to-Case",
      "A form on your website creates a case with the fields the customer filled in",
      "Structured requests, such as order or warranty issues",
    ],
    [
      "Phone",
      "The agent creates or updates a case during the call, often from a phone system linked to Salesforce",
      "High-touch or urgent support",
    ],
    [
      "Chat and messaging",
      "Conversations from chat, SMS or messaging apps are logged and can become cases",
      "Quick questions and mobile customers",
    ],
    [
      "Customer portal",
      "Logged-in customers raise and track their own cases",
      "B2B customers with many open issues",
    ],
  ],
};

const routing = {
  head: ["Rule condition", "Routing destination"],
  rows: [
    ["High priority + Customer account", "Priority Support queue"],
    ["Case type is Billing", "Billing queue"],
    ["Product is Hardware", "Hardware queue"],
    ["Everything else", "General Support queue"],
  ],
};

const faqs = [
  [
    "What is a case in Salesforce?",
    "A case is the Salesforce record for one customer question, problem or request. It stores the customer, the channel it came from, status, priority, owner and every email or comment about it. Cases sit on the same contact and account records as sales data, so the whole company sees the same history.",
  ],
  [
    "Can Salesforce be used as a case management system?",
    "Yes. Service Cloud is built for it. It creates cases from email, web forms, phone and chat, routes them with queues and assignment rules, escalates slow ones and reports on volume and resolution time. Public sector teams also use Salesforce for casework such as benefits or permits, often with extra configuration.",
  ],
  [
    "What is the difference between case management and CRM?",
    "CRM tracks your relationship with a customer: contacts, accounts, deals and activity. Case management tracks individual issues from report to fix. In Salesforce the two share one database, so a case links to the same account and contact your sales team uses, rather than living in a separate helpdesk.",
  ],
  [
    "How does Email-to-Case work in Salesforce?",
    "Customers email your support address, which forwards to Salesforce. Each new email becomes a case with the message and attachments, and replies stay on the same case. Assignment and auto-response rules then run on the new case. Test threading before go-live so replies don't create duplicate cases.",
  ],
  [
    "How many assignment rules can be active in Salesforce?",
    "One case assignment rule can be active at a time. Activating a new one turns off the others. That single rule can contain many entries, which Salesforce checks in order until one matches. Always end with a catch-all entry so no case is left without an owner.",
  ],
  [
    "Do we need Omni-Channel for case routing?",
    "Not always. Queues with assignment rules work well for smaller teams where agents pick their next case. Omni-Channel helps when volume is high, agents have different skills or languages, or you want work pushed to whoever has capacity. Many teams start with queues and add Omni-Channel later.",
  ],
  [
    "How long does it take to set up case management in Salesforce?",
    "A basic setup with one channel, queues, assignment, auto-response and escalation rules, a console layout and core reports often takes a few weeks including testing. More channels, a customer portal, outside system connections or history migration add time. A short pilot with one team helps catch issues early.",
  ],
  [
    "What reports should a support manager build first?",
    "Start with three: open cases by queue and owner, cases past their target time, and cases closed this week by type. Together they show workload, risk and output. Add first response time and reopened cases once your status values are used consistently.",
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
      className="hsc-tableWrap"
      role="region"
      aria-label={caption}
      tabIndex={0}
    >
      <table>
        <caption className="hsc-srOnly">{caption}</caption>
        <thead>
          <tr>
            {data.head.map((h, i) => (
              <th key={i} scope="col">
                {h || <span className="hsc-srOnly">Factor</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) =>
                c === 0 ? (
                  <th key={c} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={c}>{cell}</td>
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
      "@type": "Article",
      headline: TITLE,
      description: DESCRIPTION,
      mainEntityOfPage: URL_PATH,
      publisher: {
        "@type": "Organization",
        name: "Saasverse",
        url: "https://www.saasverse.in",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: {
          "@type": "Answer",
          text: a,
        },
      })),
    },
  ];

  return (
    <div className={`hsc-page ${display.variable} ${text.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageBanner
        image="/images/banner/banner002.webp"
        title="Salesforce Case Management: How It Works and How to Set It Up"
        description=""
      />

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
          <p className="mb-6 text-base leading-7 text-gray-600">
            Salesforce case management is how Service Cloud records every
            customer question or problem as a case, sends it to the right
            person, and tracks it until it is solved. Cases come in from email,
            web forms, phone and chat. Queues and assignment rules route them,
            escalation rules flag slow ones, and auto-response rules reply to
            the customer.
          </p>

          <p>
            Most support teams don't start on Salesforce. They start in a
            shared inbox. It works until two agents answer the same email, a
            refund request sits unread over a weekend, and nobody can say how
            many complaints came in last month. Case management in Salesforce
            fixes that by giving every request an owner, a status and a
            history. This guide explains how the pieces fit together and what
            to set up first.
          </p>

          <ul className="hsc-stats">
            {stats.map((s) => (
              <li key={s.value}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>

          <aside className="hsc-callout">
            <p>
              <strong>Key takeaways (checked 23 Nov 2026):</strong>
            </p>
            <ul className="hsc-plainList">
              <li>
                A case is the Salesforce record for one customer issue, with
                an owner, status, priority and full history.
              </li>
              <li>
                Only one case assignment rule and one escalation rule can be
                active at a time, each holding many entries.
              </li>
              <li>
                Salesforce's Case Management Best Practice Guide recommends
                routing by urgency, issue type or customer status.
              </li>
              <li>
                Set up queues and rules before go-live. Fixing routing after
                agents have built habits takes far longer.
              </li>
            </ul>
          </aside>

          <section id="basics">
            <h2>What Is Salesforce Case Management?</h2>

            <p>
              It's the set of Service Cloud features that track customer
              issues from the first message to the fix. Every email, form or
              call becomes a case record, and that record stays open, with an
              owner, until the issue is solved.
            </p>

            <p>Each case holds:</p>

            <ul className="hsc-plainList">
              <li>The contact and account it belongs to</li>
              <li>The channel it came from (Case Origin)</li>
              <li>Status, priority and type</li>
              <li>An owner, either a person or a queue</li>
              <li>Every email, call note and comment, in order</li>
            </ul>

            <p>
              Because cases sit on the same contact and account records your
              sales team uses, a rep can see open complaints before a renewal
              call. That shared view is one of the main{" "}
              <Link href="https://www.saasverse.in/blogs/salesforce-crm-blog">
                benefits of Salesforce CRM
              </Link>{" "}
              over a separate helpdesk tool.
            </p>
          </section>

          <section id="channels">
            <h2>How Do Cases Get Into Salesforce?</h2>

            <p>
              Most teams use two or three channels, and each one creates cases
              automatically once set up.
            </p>

            <DataTable
              caption="Salesforce case creation channels"
              data={channels}
            />

            <p>
              Start with the channel that brings most of your volume today.
              For many teams that's email, so Email-to-Case comes first. If
              cases also need data from an ERP or order system, plan that
              connection early; our{" "}
              <Link href="https://www.saasverse.in/blogs/salesforce-integration-blog">
                guide to Salesforce integration
              </Link>{" "}
              explains the common patterns.
            </p>
          </section>

          <section id="routing">
            <h2>How Are Cases Routed to the Right Agent?</h2>

            <p>
              Through queues and assignment rules. Trailhead describes
              assignment rules as a way to automatically assign incoming cases
              to specific reps and notes that when you activate an assignment
              rule, it disables any other assignment rules in your
              organization. Read{" "}
              <a
                href="https://trailhead.salesforce.com/content/learn/modules/service_lex/service_lex_case_manage"
                rel="nofollow noopener"
                target="_blank"
              >
                Trailhead's automated case management unit
              </a>
              .
            </p>

            <p>
              That single active rule can still hold many entries, checked in
              order. For example:
            </p>

            <DataTable
              caption="Example Salesforce case assignment rule conditions"
              data={routing}
            />

            <p>
              <strong>Queues</strong> are shared lists that a group of agents
              works from. An agent takes the next case, and ownership moves
              from the queue to that person.
            </p>

            <p>
              For larger teams, <strong>Omni-Channel</strong> pushes work to
              agents instead of waiting for them to pick it. Salesforce's Case
              Management Best Practice Guide says it can intelligently route
              work based on skills, availability, and workload. Read the{" "}
              <a
                href="https://help.salesforce.com/s/articleView?id=000390829&language=en_US&type=1"
                rel="nofollow noopener"
                target="_blank"
              >
                Case Management Best Practice Guide
              </a>
              . Queues and assignment rules are enough for most teams under
              about 15 agents; Omni-Channel earns its setup time when volume or
              skill mix grows.
            </p>

            <aside className="hsc-callout">
              <p>
                <strong>
                  Setting up Service Cloud, or fixing one that agents work
                  around?
                </strong>{" "}
                See our{" "}
                <Link href="https://www.saasverse.in/salesforce-service-cloud">
                  Salesforce Service Cloud implementation services
                </Link>
                . We sign an NDA before we look at your org and reply within
                24 hours.
              </p>
            </aside>
          </section>

          <section id="automation">
            <h2>What Do Escalation and Auto-Response Rules Do?</h2>

            <p>
              Escalation rules catch cases that sit too long. Auto-response
              rules tell the customer you have their request.
            </p>

            <p>
              <strong>Escalation rules.</strong> Trailhead says they
              automatically escalate cases to the right people when the cases
              aren't solved by a certain time. Like assignment rules, only one
              can be active. A typical setup:
            </p>

            <ul className="hsc-plainList">
              <li>
                High priority case not closed in 4 business hours: reassign to
                a team lead and notify them.
              </li>
              <li>
                Any case not touched in 2 business days: notify the queue
                owner.
              </li>
            </ul>

            <p>
              Tie escalation to business hours, not clock hours, or cases
              logged on Friday night will escalate before anyone is in.
            </p>

            <p>
              <strong>Auto-response rules</strong> send an email to the
              customer based on the case details, such as a different reply
              for billing questions than for technical ones. Keep it short: a
              case number, what happens next and when they can expect a reply.
              Promise only the response time your team can actually keep.
            </p>
          </section>

          <section id="daily-work">
            <h2>How Do Agents Work Cases Day to Day?</h2>

            <p>
              Mostly in the Service Console, an app built for working several
              cases at once in tabs. A good console setup shows the case, the
              customer's other open cases and the account details on one
              screen.
            </p>

            <p>Features that save the most agent time:</p>

            <ul className="hsc-plainList">
              <li>
                <strong>Salesforce Knowledge:</strong> articles agents can
                attach to replies, and that customers can read in a help
                center before they raise a case.
              </li>
              <li>
                <strong>Macros and quick text:</strong> saved replies and
                actions for repeat requests.
              </li>
              <li>
                <strong>Case history and feed:</strong> every email and
                comment in order, so a new agent can pick up a case without
                asking around.
              </li>
              <li>
                <strong>Related records:</strong> orders, assets or contracts
                shown on the case page.
              </li>
            </ul>

            <p>
              The best practice guide also points to keyboard shortcuts and
              macros for faster handling. Small time savings add up when an
              agent handles 40 or 50 cases a day.
            </p>
          </section>

          <section id="setup">
            <h2>How Do You Set Up Case Management in Salesforce?</h2>

            <p>
              Work through this checklist in order. Each step depends on the
              one before.
            </p>

            <div className="hsc-step">
              <h3>Agree on case fields</h3>
              <p>
                Decide the status values, types, reasons and priorities. Keep
                each list short so agents pick consistently.
              </p>
            </div>

            <div className="hsc-step">
              <h3>Set business hours and holidays</h3>
              <p>
                Escalation and service targets depend on them.
              </p>
            </div>

            <div className="hsc-step">
              <h3>Create queues</h3>
              <p>
                Create queues for each team or skill, with clear membership.
              </p>
            </div>

            <div className="hsc-step">
              <h3>Set up your main channel</h3>
              <p>
                Usually Email-to-Case. Test replies to confirm they thread onto
                the same case.
              </p>
            </div>

            <div className="hsc-step">
              <h3>Build one assignment rule</h3>
              <p>
                Create ordered entries, ending with a catch-all rule so every
                case gets routed.
              </p>
            </div>

            <div className="hsc-step">
              <h3>Add auto-response rules</h3>
              <p>
                Create responses for each main channel.
              </p>
            </div>

            <div className="hsc-step">
              <h3>Add an escalation rule</h3>
              <p>
                Configure escalation for high-priority and untouched cases.
              </p>
            </div>

            <div className="hsc-step">
              <h3>Configure the Service Console</h3>
              <p>
                Set up page layouts and a few macros to help agents work
                efficiently.
              </p>
            </div>

            <div className="hsc-step">
              <h3>Build three reports first</h3>
              <p>
                Start with open cases by queue, cases past target and cases
                closed this week.
              </p>
            </div>

            <div className="hsc-step">
              <h3>Pilot with one team for two weeks</h3>
              <p>
                Test the process with one team, then adjust rules before the
                full rollout.
              </p>
            </div>

            <p>
              If you already have cases in another helpdesk, plan the history
              move as its own step with a test load first. Most teams bring
              over open cases and a limited window of closed ones.
            </p>
          </section>

          <section id="example">
            <h2>What Does Case Management Look Like at Scale?</h2>

            <p>
              Air India is a good example of how big the job can get. According
              to the{" "}
              <a
                href="https://www.salesforce.com/in/customer-stories/air-india-delivers-world-class-service-data-ai/"
                rel="nofollow noopener"
                target="_blank"
              >
                Air India customer story published by Salesforce
              </a>
              , the airline handles about 550,000 incoming service cases a
              month, many of them by phone. It brought customer data into one
              view per customer and set up unified case management across its
              brands. Salesforce's AI automatically classifies cases and
              omnichannel routing assigns them to agents with the right skill
              sets.
            </p>

            <p>
              The lesson for smaller teams: the same building blocks apply at
              any size. Clean case fields make classification possible,
              routing rules get cases to the right person, and one customer
              view stops agents asking for details the company already has.
            </p>
          </section>

          <section id="pitfalls">
            <h2>What Are Common Case Management Mistakes?</h2>

            <p>
              The same few problems show up in most orgs we review:
            </p>

            <ul className="hsc-plainList">
              <li>
                <strong>Too many status values.</strong> Twelve statuses mean
                twelve opinions. Five or six are usually enough.
              </li>
              <li>
                <strong>No catch-all rule entry.</strong> Cases that match
                nothing stay with the default owner and get missed.
              </li>
              <li>
                <strong>Escalation on clock hours.</strong> Weekend cases
                escalate before Monday.
              </li>
              <li>
                <strong>Duplicate cases from email.</strong> Customers reply
                to an old thread or CC two addresses. Check threading and merge
                duplicates.
              </li>
              <li>
                <strong>Reports nobody trusts.</strong> If "Closed" is used
                for both solved and abandoned cases, resolution numbers mean
                nothing.
              </li>
              <li>
                <strong>Rules changed in production without testing.</strong>{" "}
                Test rule changes in a sandbox first.
              </li>
            </ul>
          </section>

          <section id="why">
            <h2>Why Saasverse for Salesforce Case Management?</h2>

            <ul className="hsc-plainList">
              <li>Salesforce Partner with Navigator Expert status.</li>
              <li>
                50+ certified people across admin, developer, consultant and
                architect roles.
              </li>
              <li>120+ projects for 41 clients in 19 countries.</li>
              <li>ISO 27001 and Cyber Essentials Plus certified.</li>
              <li>Offices in Jaipur and Boston.</li>
              <li>Rated 5.0 on Clutch.</li>
            </ul>
          </section>

          <section id="conclusion">
            <h2>
              Conclusion: Get Routing Right Before You Add More Features
            </h2>

            <p>
              Salesforce case management works best when the basics are set
              up with care: a short list of case fields, clear queues, one
              well-ordered assignment rule, escalation based on business
              hours, and a few reports managers trust. Start with your busiest
              channel, pilot with one team and adjust before rollout. Once the
              setup is live, ongoing{" "}
              <Link href="https://www.saasverse.in/salesforce-support-and-maintenance-services">
                Salesforce support and maintenance
              </Link>{" "}
              keeps rules and reports in line as your team changes. If you want
              help designing or fixing your case setup,{" "}
              <Link href="https://www.saasverse.in/contact-us">
                talk to Saasverse
              </Link>
              . We reply within 24 hours.
            </p>

            <div className="hsc-cta">
              <p>
                Need help setting up Salesforce Case Management? Our team can
                help you configure queues, assignment rules, escalation and
                Service Console workflows.
              </p>

              <Link
                href="https://www.saasverse.in/contact-us"
                className="hsc-button"
              >
                Book a Free Consultation
              </Link>
            </div>
          </section>

          <section id="faq">
            <h2>Frequently Asked Questions</h2>

            <div className="hsc-faq">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>
                    <h3>{q}</h3>
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-4">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                <div className="text-center md:text-left">
                  <span className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                    About the Author
                  </span>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-3">
                    Poorvi Tailang
                  </h2>

                  <p className="text-gray-600 text-base leading-7">
                    Poorvi is a Salesforce Developer who builds CRM solutions,
                    enterprise integrations and custom applications. She
                    works with newer Salesforce technology such as Agentforce
                    and Einstein AI, and writes about platform updates and
                    development best practices.
                  </p>

                  <p className="text-gray-600 text-sm mt-3">
                    Salesforce Developer, Saasverse
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>

      <BlogSlider />
      <CTASection />
    </div>
  );
}