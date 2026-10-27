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

/* Steps: a real sequence, so numbered */
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
  "https://www.saasverse.in/blogs/how-to-hire-salesforce-consultant-blog";
const TITLE =
  "How to Hire a Salesforce Consultant in India: Cost, Models and What to Check";
const DESCRIPTION =
  "What it costs to hire a Salesforce consultant in India, which hiring model gives the best value, and a 5-step checklist to hire the right person the first time.";

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

const toc = [
  { id: "cost", label: "How much does it cost to hire a Salesforce consultant in India?" },
  { id: "drivers", label: "What affects the cost?" },
  { id: "models", label: "Which hiring model gives you the best value?" },
  { id: "compare", label: "Full-time hire, freelancer or partner: which costs less?" },
  { id: "steps", label: "How to hire a Salesforce consultant in 5 steps" },
  { id: "example", label: "What a well-run Salesforce engagement looks like" },
  { id: "why", label: "Why companies hire from Saasverse" },
  { id: "conclusion", label: "Conclusion and FAQs" },
];

const stats = [
  { value: "₹11 lakh a year", label: "Average Salesforce consultant salary in India (Glassdoor)" },
  { value: "$119,372 a year", label: "Average Salesforce consultant salary in the US (Glassdoor)" },
  { value: "50+ certified people", label: "Salesforce team at Saasverse, Jaipur and Boston" },
];

const drivers = [
  ["The role.", "Admins usually cost less than developers. Architects cost the most."],
  ["Certifications and experience.", "A consultant with several years in your cloud costs more per hour, but usually needs fewer hours."],
  ["The cloud.", "Sales Cloud and Service Cloud skills are easier to find. CPQ, Marketing Cloud, Data Cloud and Agentforce work needs specialists."],
  ["The hiring model.", "Dedicated models usually cost less per hour than ad-hoc hourly work."],
  ["Overlap hours.", "If you need the consultant online during US or UK hours every day, agree that up front. It affects who can take the role."],
];

const models = {
  head: ["Model", "How you pay", "Best for", "Watch out for"],
  rows: [
    ["Hourly", "Hours used", "Health checks, fixes, one-off advice", "Costs add up if requests never stop"],
    ["Dedicated part-time", "Fixed hours each week", "A steady flow of admin or build requests", "Unused hours if the backlog dries up"],
    ["Dedicated full-time", "Monthly, one person or a team", "Rollouts, big clean-ups, long backlogs", "Needs clear priorities from your side"],
    ["Fixed-scope project", "Agreed price for agreed scope", "A new cloud or a full rollout", "Scope changes need a change request"],
    ["Monthly support plan", "Monthly fee", "Keeping a live org healthy", "Check what’s included and response times"],
  ],
};

const compare = {
  head: ["", "Full-time employee", "Freelancer", "Salesforce partner"],
  rows: [
    ["Time to start", "Weeks to months", "Days", "Days"],
    ["Cost in quiet months", "Full salary", "Low", "Flexible"],
    ["Backup if someone leaves", "None", "None", "Yes"],
    ["Range of skills", "One person", "One person", "Admin, developer, architect on call"],
    ["Contract and NDA", "Employment contract", "Varies", "Business contract and NDA"],
  ],
};

const faqs = [
  ["What does a Salesforce consultant do?", "A Salesforce consultant works out how Salesforce should support your business and sets it up. That includes gathering requirements, designing processes, configuring Salesforce and guiding your team. Developers and architects handle code and complex designs."],
  ["How much does a Salesforce consultant cost per hour in India?", "It depends on the role, experience and hiring model. Admins usually cost less than developers or architects, and dedicated models cost less per hour than ad-hoc work. Ask for a written quote based on a clear scope so you can compare vendors fairly."],
  ["Is it cheaper to hire a Salesforce consultant in India than in the US?", "Usually, yes. Glassdoor lists the average Salesforce consultant salary at about ₹11 lakh a year in India and $119,372 a year in the US. The saving is real, but only if the consultant is properly certified and the work is scoped clearly."],
  ["What hidden costs should I plan for?", "Plan for onboarding time, sandbox and tool licences, scope changes, and time from your own team for requirements and testing. With a full-time hire, add recruitment, benefits and notice periods. Ask any vendor to list what’s included and what’s billed separately."],
  ["Should I choose hourly or fixed-price?", "Choose hourly or dedicated hours when the work is ongoing or hard to define. Choose a fixed price when the scope is clear, such as a new cloud rollout. A fixed price gives cost certainty, but changes to the scope will need a change request."],
  ["How quickly can a Salesforce consultant start?", "Through a Salesforce partner, many engagements start within a few days of the contract and NDA being signed. A specialist profile can take longer. A full-time employee usually takes weeks to months because of hiring and notice periods."],
  ["Is a cheaper Salesforce consultant a risk?", "It can be. A very low rate can mean less experience, no backup and more rework. Check the person’s certifications, ask for examples in your cloud, and start with a small paid task before committing to more hours."],
];

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

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: TITLE,
      description: DESCRIPTION,
      mainEntityOfPage: URL_PATH,
      publisher: { "@type": "Organization", name: "Saasverse", url: "https://www.saasverse.in" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
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
            title="How to Hire a Salesforce Consultant in India: Cost, Models and What to Check"
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
  Hiring a Salesforce consultant in India usually costs far less than hiring in the US, but the real saving depends on how you hire. Pick the role that matches the work. Choose a model that fits your workload: hourly, dedicated or a fixed-scope project. Then verify certifications and interview the person who will actually do the work. Get that right and you pay for results, not rework.
</p>
          <ul className="hsc-stats">
            {stats.map((s) => (
              <li key={s.value}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>

          <section id="cost">
            <h2>How Much Does It Cost to Hire a Salesforce Consultant in India?</h2>
            <p>
              A full-time Salesforce consultant in India earns about ₹11 lakh a year on average, compared with about $119,372 a year in the US, according to Glassdoor. Through a partner, you pay only for the hours or scope you need, so the total is often lower than a full-time salary.
            </p>
            <p>
              <strong>Hiring full-time.</strong> Salary data shows the gap clearly.{" "}
              <a
                href="https://www.glassdoor.co.in/Salaries/salesforce-consultant-salary-SRCH_KO0,21.htm"
                rel="nofollow noopener"
                target="_blank"
              >
                Glassdoor lists the average Salesforce consultant salary in India
              </a>{" "}
              at about ₹11,00,000 a year. For the same role in the US, Glassdoor’s average is $119,372 a year.
            </p>
            <p>
              But salary is only part of the bill. A full-time hire also means recruiting time, notice periods, benefits, equipment and paying the same salary in quiet months.
            </p>
            <p>
              <strong>Hiring through a partner.</strong> You pay for the hours or the scope you need, and the partner handles recruitment, backup and replacements. You’re not paying a full salary in quiet months, and you can scale hours up or down as the work changes.
            </p>
            <p>
              At Saasverse, the rate depends on the role, the cloud and the hiring model, so we confirm it after a first call. You get the rate and terms in writing before anyone starts.
            </p>
            <aside className="hsc-callout">
              <p>
                <strong>Want a quote for your org?</strong> Tell us what you need and we’ll suggest the right role and model. You can{" "}
                <Link href="https://www.saasverse.in/hire-salesforce-consultants">
                  hire Salesforce consultants in India
                </Link>{" "}
                on hourly, part-time or full-time terms.
              </p>
            </aside>
          </section>

        <section id="drivers">
  <h2>What Affects the Cost of a Salesforce Consultant?</h2>

  <p>
    Five factors decide most of the cost: the role, the consultant’s
    certifications and experience, the Salesforce cloud involved, the
    hiring model and the overlap hours you need.
  </p>

  {/* Image */}
  <div className="my-6">
    <img
      src="/images/blogs/salesforce-consultant-cost-factors.webp"
      alt="Factors affecting Salesforce consultant costs"
      className="h-auto w-full rounded-xl object-cover"
      loading="lazy"
      width="1200"
      height="600"
    />
  </div>

  <ol className="hsc-plainList">
    {drivers.map(([k, v]) => (
      <li key={k}>
        <strong>{k}</strong> {v}
      </li>
    ))}
  </ol>

  <p>
    The lowest rate isn’t always the lowest cost. A cheap hourly rate that
    leads to rework costs more than a fair rate for work done right the first
    time.
  </p>
</section>

         <section id="models">
  <h2>Which Hiring Model Gives You the Best Value?</h2>

  <p>
    Dedicated hours give the best value for ongoing work. A fixed-scope project
    gives the best value for a defined rollout. Hourly work suits one-off fixes
    and advice. When you look for a Salesforce consultant for hire, these are
    the usual options:
  </p>

  <DataTable caption="Salesforce hiring models compared" data={models} />

  {/* Image after the table */}
  <div className="my-6">
    <img
      src="/images/blogs/salesforce-hiring-model-flowchart.webp"
      alt="Comparison of Salesforce consultant hiring models"
      className="h-auto w-full rounded-xl object-cover"
      loading="lazy"
      width="1200"
      height="600"
    />
  </div>

  <p>
    For a full rollout, fixed-scope{" "}
    <Link href="https://www.saasverse.in/salesforce-implementation-services">
      Salesforce implementation services
    </Link>{" "}
    usually give you more cost certainty than hourly work. Our guide to{" "}
    <Link href="https://www.saasverse.in/blogs/salesforce-implementation-blog">
      Salesforce implementation steps
    </Link>{" "}
    explains the phases. If your org is already live, a monthly support plan is
    often the cheaper route.
  </p>
</section>

          <section id="compare">
            <h2>Full-Time Hire, Freelancer or Partner: Which Costs Less?</h2>
            <p>
              For most business-critical work, a Salesforce partner gives you the best value, because you pay for the hours or scope you need and still get backup and a wider range of skills.
            </p>
            <DataTable caption="Full-time employee, freelancer and Salesforce partner compared" data={compare} />
            <p>
              A freelancer can work for a small, well-defined job. A full-time hire makes sense once you’re sure the workload is steady and long-term.
            </p>
            <p>
              Not sure whether you need advice or hands-on help? Read our guide to{" "}
              <Link href="https://www.saasverse.in/blogs/salesforce-consulting-blog">
                Salesforce consulting
              </Link>{" "}
              first.
            </p>
          </section>

          <section id="steps">
            <h2>How Do You Hire a Salesforce Consultant? 5 Steps</h2>
            <p>
              To hire a Salesforce consultant, write down the work, choose the right role, verify the person’s certifications, interview the actual consultant and start with a small task under an NDA.
            </p>

            <div className="hsc-step">
              <h3>Write down the work</h3>
              <p>
                List your clouds, the work (rollout, clean-up, automation, integration), rough weekly hours and the overlap hours you need. It takes 20 minutes and lets you compare quotes fairly.
              </p>
            </div>
            <div className="hsc-step">
              <h3>Hire the right role</h3>
              <p>
                Admins handle everyday configuration. Functional consultants design processes. Developers write code and build integrations. Architects design large, complex orgs. Most growing companies start with a consultant or an admin.
              </p>
            </div>
            <div className="hsc-step">
              <h3>Verify certifications yourself</h3>
              <p>
                Ask which certifications the <em>person</em> holds, not the company, and check them by name on Salesforce’s Trailhead credential verification page. Note that the Sales Cloud and Service Cloud Consultant exams are now called Agentforce Sales Consultant and Agentforce Service Consultant.
              </p>
            </div>
            <div className="hsc-step">
              <h3>Interview the actual consultant</h3>
              <p>Not just the salesperson. Ask three things:</p>
              <ul>
                <li>“Tell me about an org you cleaned up. What did you fix first?”</li>
                <li>“Would you build this with Flow or code? Why?”</li>
                <li>“How do you test changes before they reach production?”</li>
              </ul>
              <p>
                Walk away if they agree to everything, push custom code straight away, or won’t let you meet the person doing the work.
              </p>
            </div>
            <div className="hsc-step">
              <h3>Start small, under an NDA</h3>
              <p>
                Sign the contract and NDA first. Give sandbox access before production. Start with one small, real task, then review after two or three weeks.
              </p>
            </div>
          </section>

          <section id="example">
            <h2>What Does a Well-Run Salesforce Engagement Look Like?</h2>
            <p>
              Indian insurer IndiaFirst Life worked with two Salesforce implementation partners, Orbit Innovations and PwC, each owning different parts of the work. According to the{" "}
              <a
                href="https://www.salesforce.com/in/customer-stories/ifl/"
                rel="nofollow noopener"
                target="_blank"
              >
                IndiaFirst Life customer story published by Salesforce
              </a>
              , the service module went live in about three months, and the company reports a 40% reduction in turnaround time for product rollouts.
            </p>
            <p>
              The lesson for hiring teams: split the work by strength, hire for the specific cloud or process, and agree who owns what from day one.
            </p>
          </section>

          <section id="why">
            <h2>Why Hire a Salesforce Consultant From Saasverse?</h2>
            <p>
              Saasverse is a Salesforce Partner with Navigator Expert status and a 50+ person certified team in Jaipur and Boston.
            </p>
            <ul className="hsc-plainList">
              <li><strong>One certified team</strong>, so your consultant can pull in a developer or architect when needed.</li>
              <li><strong>120+ projects for 40+ clients in 19+ countries.</strong></li>
              <li><strong>Offices in Jaipur and Boston</strong>, with overlap hours agreed before work starts.</li>
              <li><strong>ISO 27001 and Cyber Essentials Plus certified.</strong> We sign an NDA before we see your org.</li>
              <li><strong>Rated 5.0 on Clutch.</strong></li>
              <li><strong>You interview your consultant first</strong>, and you get the rate and terms in writing.</li>
            </ul>
          </section>

          <section id="conclusion">
            <h2>Conclusion: Pay for the Right Fit, Not Just a Low Rate</h2>
            <p>
              If you want to know how to hire a Salesforce consultant without overspending, start with the work, not the rate. Pick the right role, choose a model that matches your workload, verify certifications yourself and start with a small task. India gives you access to certified talent at a fraction of US salary levels, but the real saving comes from hiring the right person the first time.
            </p>
            <div className="hsc-cta">
              <p>
                Ready to hire a Salesforce consultant in India? Tell us what you need and we’ll reply within 24 hours with the right role, model and a written quote.
              </p>
              <Link href="https://www.saasverse.in/contact" className="hsc-button">
                Book a free Salesforce consultation
              </Link>
            </div>
          </section>

          <section id="faq">
            <h2>Frequently Asked Questions</h2>
            <div className="hsc-faq">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary><h3>{q}</h3></summary>
                  <p>{a}</p>
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