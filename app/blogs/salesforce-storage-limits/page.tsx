import type { Metadata } from "next";
import Link from "next/link";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import PageBanner from "@/app/components/PageBanner";
import CTASection from "@/app/components/Home/CTASection";
import BlogSlider from "@/app/components/BlogSlider";

const display = Bricolage_Grotesque({ variable: "--font-display", display: "swap", subsets: ["latin"] });
const text = Newsreader({ variable: "--font-text", display: "swap", subsets: ["latin"] });

const URL_PATH = "https://www.saasverse.in/blogs/salesforce-storage-limits";
const TITLE = "Salesforce Storage Limits: Data and File Storage Guide";
const DESCRIPTION = "Salesforce storage limits explained: data and file storage by edition, what counts against each, what happens when you run out, and how to free up space.";

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
  --measure: 42rem;

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
  max-width: 72rem;
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

.hsc-toc ol {
  margin: 0;
  padding-left: 1.2rem;
}

.hsc-toc li {
  margin: 0.4rem 0;
}

.hsc-toc a {
  color: var(--ink);
  text-decoration: none;
}

.hsc-toc a:hover {
  color: var(--brand);
  text-decoration: underline;
}

@media (min-width: 62rem) {
  .hsc-layout {
    display: grid;
    grid-template-columns: 16rem minmax(0, var(--measure));
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

.hsc-article section {
  scroll-margin-top: 1.5rem;
  margin-bottom: 3.25rem;
}

.hsc-article h2 {
  line-height: 1.2;
  letter-spacing: -0.015em;
  margin: 0 0 1rem;
  color: var(--brand-deep);
  text-wrap: balance;

  font-weight: 700;
}

.hsc-article h3 {
  line-height: 1.3;
  margin: 0 0 0.5rem;
  color: var(--brand-deep);
  
}

.hsc-article p {
  margin: 0 0 1.1rem;
}

.hsc-article a {
  color: var(--brand);
  text-underline-offset: 3px;
}

.hsc-article a:hover {
  color: var(--brand-deep);
}

.hsc-article :focus-visible,
.hsc-toc a:focus-visible,
.hsc-button:focus-visible,
.hsc-faq summary:focus-visible {
  outline: 3px solid var(--saffron);
  outline-offset: 3px;
}

/* Key takeaways */

.hsc-takeaways {
  background: #f5f7fc;
  border: 1px solid var(--line);
  border-left: 4px solid var(--brand);
  padding: 1.5rem;
  margin: 2rem 0 3rem;
}

.hsc-takeaways h2 {
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.hsc-takeaways ul {
  margin: 0;
  padding-left: 1.25rem;
}

.hsc-takeaways li {
  margin-bottom: 0.75rem;
}

/* Stats */

.hsc-stats {
  list-style: none;
  margin: 0 0 2rem;
  padding: 0;
  display: grid;
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
}

.hsc-stats li {
  background: var(--paper);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.hsc-stats strong {
  font-size: 1.8rem;
  line-height: 1.2;
  color: var(--brand);
  
}

.hsc-stats span {
  line-height: 1.4;
  color: var(--muted);
  font-size: 0.95rem;
}

@media (min-width: 40rem) {
  .hsc-stats {
    grid-template-columns: repeat(3, 1fr);
  }

  .hsc-stats li {
    padding: 1.25rem;
  }
}

/* Section labels */

.hsc-kicker {
  display: inline-block;
  color: var(--brand);
  background: #edf1fb;
  padding: 0.3rem 0.7rem;
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* Callout */

.hsc-callout {
  border-left: 4px solid var(--saffron);
  background: #fff8e6;
  padding: 1rem 1.25rem 0.1rem;
  margin: 1.75rem 0;
}

/* Lists */

.hsc-plainList {
  padding-left: 1.4rem;
  margin: 0 0 1.25rem;
}

.hsc-plainList li {
  margin-bottom: 0.7rem;
  padding-left: 0.2rem;
}

.hsc-plainList li::marker {
  color: var(--brand);
  font-weight: 700;
}

/* Numbered steps */

.hsc-steps {
  counter-reset: step;
  margin: 1.5rem 0;
}

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

.hsc-step ul {
  margin: 0 0 1rem;
  padding-left: 1.2rem;
}

.hsc-step li {
  margin-bottom: 0.4rem;
}

/* Tables */

.hsc-tableWrap {
  overflow-x: auto;
  margin: 1.5rem 0;
  border: 1px solid var(--line);
  border-radius: 0.5rem;
}

.hsc-tableWrap table {
  width: 100%;
  min-width: 36rem;
  border-collapse: collapse;
  line-height: 1.5;
  font-size: 0.95rem;
}

.hsc-tableWrap th,
.hsc-tableWrap td {
  text-align: left;
  vertical-align: top;
  padding: 0.85rem 0.9rem;
  border-bottom: 1px solid var(--line);
}

.hsc-tableWrap thead th {
  background: var(--brand-deep);
  color: #fff;
  font-weight: 600;
  border-bottom: 0;
}

.hsc-tableWrap tbody th {
  font-weight: 700;
  color: var(--brand-deep);
  background: var(--wash);
}

.hsc-tableWrap tbody tr:last-child > * {
  border-bottom: 0;
}

/* Checklist */

.hsc-checklist {
  counter-reset: checklist;
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.hsc-checklist li {
  counter-increment: checklist;
  position: relative;
  padding: 1rem 1rem 1rem 3.5rem;
  margin-bottom: 0.75rem;
  background: var(--wash);
  border: 1px solid var(--line);
  border-radius: 0.5rem;
}

.hsc-checklist li::before {
  content: counter(checklist);
  position: absolute;
  left: 1rem;
  top: 0.85rem;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background: var(--brand);
  color: #fff;
  font-weight: 700;
  display: grid;
  place-items: center;
}

/* Images */

.hsc-article img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 0.75rem;
  margin: 1.5rem 0;
}

/* CTA */

.hsc-cta {
  background: var(--brand-deep);
  color: #fff;
  padding: 1.75rem 1.5rem 1.5rem;
  margin-top: 2rem;
  border-radius: 0.75rem;
}

.hsc-cta h3 {
  color: #fff;
}

.hsc-button {
  display: inline-block;
  background: var(--saffron);
  color: var(--ink) !important;
  font-weight: 700;
  text-decoration: none !important;
  padding: 0.8rem 1.4rem;
  border-radius: 0.35rem;
  transition: background-color 0.15s ease;
}

.hsc-button:hover {
  background: #ffc03d;
}

/* FAQ */

.hsc-faq details {
  border-top: 1px solid var(--line);
}

.hsc-faq details:last-child {
  border-bottom: 1px solid var(--line);
}

.hsc-faq summary {
  cursor: pointer;
  list-style: none;
  padding: 1rem 2rem 1rem 0;
  font-weight: 600;
  line-height: 1.35;
  position: relative;
}

.hsc-faq summary::-webkit-details-marker {
  display: none;
}

.hsc-faq summary::after {
  content: "+";
  position: absolute;
  right: 0.25rem;
  top: 0.85rem;
  font-size: 1.4rem;
  line-height: 1;
  color: var(--brand);
}

.hsc-faq details[open] summary::after {
  content: "–";
}

.hsc-faq details p {
  margin: 0 0 1.1rem;
  color: var(--muted);
}

@media (prefers-reduced-motion: reduce) {
  .hsc-button {
    transition: none;
  }
}
`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL_PATH },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: URL_PATH, type: "article", siteName: "Saasverse",
    images: [{ url: "/images/blogs/salesforce-storage-limits.webp", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/images/blogs/salesforce-storage-limits.webp"] },
};

const toc = [
  { id: "storage-limits", label: "What are Salesforce storage limits?" },
  { id: "much-storage-edition", label: "How much storage does each edition get?" },
  { id: "data-storage-calculated", label: "How is data storage calculated?" },
  { id: "check-storage-usage", label: "How do you check storage usage?" },
  { id: "happens-when-exceed", label: "What happens when you exceed the limit?" },
  { id: "free-up-storage", label: "How do you free up Salesforce storage?" },
  { id: "why-saasverse", label: "Why Saasverse?" },
  { id: "conclusion", label: "Conclusion" },
  { id: "faq", label: "Frequently asked questions" },
];

const faqs = [
  ["What is the difference between data storage and file storage in Salesforce?", "Data storage holds records such as accounts, contacts, cases, tasks and custom object records, counted at a fixed size of about 2 KB each for most objects. File storage holds uploaded files, attachments, Chatter files and documents, counted at their actual size. Each has its own limit, and filling one does not use up the other."],
  ["How much data storage does Salesforce give per user?", "Enterprise and Professional editions add 20 MB of data storage per user license on top of a 10 GB base. Performance and Unlimited editions add 120 MB per user license, or 20 MB for Lightning Platform Starter licenses. Developer Edition orgs get a fixed 5 MB, and custom licenses vary."],
  ["How do I check storage usage in Salesforce?", "In Setup, enter Storage Usage in the Quick Find box and open the Storage Usage page. It shows data and file storage limits and use, storage by record type, top users and the largest files. You need the Manage Internal Users and Manage Users permissions, and the figures update asynchronously."],
  ["What happens if Salesforce data storage is full?", "Salesforce Help says a production org keeps running after it passes 100% of data storage, but performance will degrade at some point beyond that, which can't be predicted exactly. Full sandboxes enforce the limit strictly, so a sandbox copied from an overfull org may not let you create records."],
  ["How much storage does one Salesforce record use?", "Most Salesforce records use about 2 KB of data storage, whatever their field count. Person accounts and Knowledge articles use 4 KB, campaigns 8 KB and campaign members 1 KB. Email messages count at their real size, so a 100 KB HTML email uses 100 KB of data storage."],
  ["Do attachments count against data storage or file storage?", "Attachments count against file storage, along with Files home, Salesforce CRM Content, Chatter files, user photos and the Documents tab. Notes count against data storage. Images placed inside rich text fields on Knowledge articles are stored in file storage, not in the article's data storage."],
  ["How can I reduce Salesforce storage without losing data?", "Back up first, then delete records with no business value, merge duplicates and fix the automation that keeps creating extra records. For records you must keep, use an archive such as big objects, Salesforce Archive or a third-party archive tool, so the data stays available outside your normal storage limit."],
  ["Should we buy more Salesforce storage or clean up first?", "Clean up first in most cases. Buying storage without fixing the source of growth only delays the problem, and many orgs free a large share of space by removing old logs, automated tasks and duplicates. Buy extra storage when the remaining data is needed and archiving doesn't fit how your team works."],
];

function DataTable({ caption, head, rows }: { caption: string; head: string[]; rows: string[][] }) {
  return <div className="hsc-tableWrap" role="region" aria-label={caption} tabIndex={0}>
    <table><caption className="hsc-srOnly">{caption}</caption>
      <thead><tr>{head.map((item) => <th key={item} scope="col">{item}</th>)}</tr></thead>
      <tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => j === 0 ? <th key={j} scope="row">{cell}</th> : <td key={j}>{cell}</td>)}</tr>)}</tbody>
    </table>
  </div>;
}

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: "Salesforce Storage Limits: How Data and File Storage Work",
      description: DESCRIPTION, mainEntityOfPage: { "@type": "WebPage", "@id": URL_PATH },
      image: ["https://www.saasverse.in/images/blogs/salesforce-storage-limits.webp"],
      author: { "@type": "Person", name: "Poorvi Tailang", jobTitle: "Salesforce Developer", worksFor: { "@type": "Organization", name: "Saasverse", url: "https://www.saasverse.in" } },
      publisher: { "@type": "Organization", name: "Saasverse", url: "https://www.saasverse.in" },
      datePublished: "2026-11-27", dateModified: "2026-11-27", inLanguage: "en-US",
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.saasverse.in/" },
      { "@type": "ListItem", position: 2, name: "Blogs", item: "https://www.saasverse.in/blogs" },
      { "@type": "ListItem", position: 3, name: "Salesforce Storage Limits: How Data and File Storage Work", item: URL_PATH },
    ] },
  ];

  return <div className={`hsc-page ${display.variable} ${text.variable}`}>
    <style dangerouslySetInnerHTML={{ __html: CSS }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <PageBanner image="/images/banner/banner002.webp" title="Salesforce Storage Limits: Data and File Storage Guide" description="Understand Salesforce data and file storage limits, what counts against each, and how to free up space without losing important records." />
    <div className="hsc-layout">
      <aside className="hsc-toc" aria-label="In this guide"><p className="hsc-tocTitle">In this guide</p><ol>{toc.map(item => <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>)}</ol></aside>
      <article className="hsc-article">
        <p className="text-base leading-7 text-gray-600 mb-6">Salesforce storage limits come in two parts. Data storage holds your records and starts at 10 GB per org in most paid editions, plus a per-user amount. File storage holds attachments and uploaded files and starts at 10 GB per org. Most records use about 2 KB each, so storage fills up from volume, not size.</p>
        <p>Nobody plans for storage on day one. Then, two or three years in, someone opens Setup and sees the org at 96% of its data limit. Usually the cause is not your customers or deals. It is years of logged emails, automated tasks, duplicate leads and integration logs nobody looks at. This guide explains how Salesforce storage limits work, what fills them, what happens when you go over, and how to get space back without losing anything you need.</p>

        <div className="hsc-takeaways"><h2>Key Takeaways</h2><p className="text-sm text-gray-500">Checked 27 November 2026</p><ul>
          <li>Enterprise and Professional orgs get 10 GB of data storage plus 20 MB per user license; Performance and Unlimited get 10 GB plus 120 MB per user license.</li>
          <li>Most Salesforce records use about 2 KB of data storage. Person accounts and articles use 4 KB, campaigns 8 KB.</li>
          <li>A production org keeps running past 100% data storage, but performance can degrade at a point Salesforce says can't be predicted. Full sandboxes enforce the limit strictly.</li>
          <li>Setup has no standard history of storage usage, so you only see today's numbers unless you record them yourself.</li>
        </ul></div>
        <ul className="hsc-stats">
          <li><strong>10 GB</strong><span>base data storage per org in most paid editions</span></li>
          <li><strong>~2 KB</strong><span>storage used by most Salesforce records</span></li>
          <li><strong>1 million</strong><span>big object records allocated per org in most editions</span></li>
        </ul>

        <section id="storage-limits"><span className="hsc-kicker">The Basics</span><h2>What Are Salesforce Storage Limits?</h2>
          <p>Salesforce storage limits are the caps on how much record data and how many files your org can hold. They are set by your edition and the number and type of user licenses you buy, and they are measured separately.</p>
          <p><strong>Data storage</strong> is used by records: accounts, contacts, leads, opportunities, cases, tasks, events, notes, email messages and custom object records. <strong>File storage</strong> is used by anything uploaded: attachments, Files home, Salesforce CRM Content, Chatter files (including user photos), the Documents tab, File fields on Knowledge articles and Site.com assets.</p>
          <p>The two pools don't share space. You can be at 95% of data storage and 20% of file storage at the same time, and the fix for each is different.</p>
          <DataTable caption="Difference between Salesforce data storage and file storage" head={["","Data storage","File storage"]} rows={[
            ["What uses it","Records (standard and custom objects)","Uploaded files and attachments"],
            ["How it is counted","Fixed size per record, about 2 KB for most objects","Actual size of each file"],
            ["What usually fills it","Tasks, email messages, duplicates, integration and log records","Large PDFs, images, old attachments, Chatter uploads"],
            ["Typical fix","Delete, merge or archive records","Delete, compress or move files to other storage"],
          ]} />
        </section>

        <section id="much-storage-edition"><span className="hsc-kicker">Allocations</span><h2>How Much Storage Does Each Salesforce Edition Get?</h2>
          <p>Most paid editions start with 10 GB of data storage and 10 GB of file storage per org. Data storage then grows with each user license: 20 MB per user in Enterprise and Professional, and 120 MB per user in Performance and Unlimited.</p>
          <p>These figures come from Salesforce's <a href="https://help.salesforce.com/s/articleView?id=xcloud.overview_storage.htm&amp;language=en&amp;type=5" rel="nofollow noopener" target="_blank">Data and File Storage Allocations</a> page, checked on 27 November 2026:</p>
          <DataTable caption="Salesforce storage allocation by edition" head={["Edition","Data storage per org","Extra data storage per user license","File storage per org"]} rows={[
            ["Contact Manager, Group, Professional, Enterprise","10 GB","20 MB","10 GB"],
            ["Performance, Unlimited","10 GB","120 MB (20 MB for Lightning Platform Starter licenses)","10 GB"],
            ["Essentials, Starter","10 GB","See note below","1 GB"],
            ["Developer","5 MB","Not applicable","20 MB"],
          ]} />
          <p>A few things worth knowing:</p>
          <ul className="hsc-plainList">
            <li>Salesforce's own example: a Professional Edition org with 10 users gets 10 GB plus 200 MB, so 10.2 GB of data storage in total.</li>
            <li>The same page describes Essentials and Starter as getting 10 GB "plus incrementally added user storage" while its table shows no per-user figure. Check your own Storage Usage page for the real number.</li>
            <li>If your org uses custom user licenses, Salesforce says to contact them for your exact storage amount.</li>
            <li>Most editions also get storage for 1 million big object records per org, separate from normal data storage.</li>
          </ul>
        </section>

        <section id="data-storage-calculated"><span className="hsc-kicker">The Math</span><h2>How Is Salesforce Data Storage Calculated?</h2>
          <p>Salesforce counts most records as about 2 KB each, no matter how many fields you fill in. That works out to roughly 500,000 records per GB of data storage.</p>
          <p>Salesforce Help's <a href="https://help.salesforce.com/s/articleView?id=000383664&amp;language=en_US&amp;type=1" rel="nofollow noopener" target="_blank">estimated record size by object type</a> lists the exceptions:</p>
          <ul className="hsc-plainList">
            <li><strong>Person accounts:</strong> 4 KB, because each one is an account and a contact together</li>
            <li><strong>Knowledge articles:</strong> 4 KB (images inside rich text fields go to file storage)</li>
            <li><strong>Campaigns:</strong> 8 KB</li>
            <li><strong>Campaign members:</strong> 1 KB</li>
            <li><strong>Email messages:</strong> sized by content, so a 100 KB HTML email uses 100 KB of data storage</li>
          </ul>
          <p>This is why storage problems are usually about volume. One flow that creates a task for every inbound email, or an integration that writes a log record for every sync, can add hundreds of thousands of records a year. Email-to-Case is another common one, because HTML emails count at their real size.</p>
          <p>A few other rules from Salesforce Help: archived activities still count against storage, while products, price books, price book entries and assets don't count at all. Storage is calculated in binary values, where 1 MB equals 1,024 KB.</p>
          <aside className="hsc-callout"><p><strong>Running low and not sure what to delete?</strong> Our <Link href="/salesforce-support-and-maintenance-services">Salesforce support and maintenance services</Link> team reviews where your storage goes, agrees a clean-up plan with you, and backs up data before anything is removed. We sign an NDA before we look at your org.</p></aside>
        </section>

        <section id="check-storage-usage"><span className="hsc-kicker">Monitoring</span><h2>How Do You Check Your Salesforce Storage Usage?</h2>
          <p>Go to Setup, type "Storage Usage" in Quick Find and open the Storage Usage page. It shows your limit and current use for data and file storage, storage by record type, the top users by storage and the largest files.</p>
          <p>You need the "Manage Internal Users" and "Manage Users" permissions to see it. Two things catch people out:</p>
          <ul className="hsc-plainList">
            <li><strong>The numbers aren't live.</strong> Salesforce calculates storage asynchronously, so a big delete may take a while to show.</li>
            <li><strong>There's no history.</strong> Salesforce Help says there's no standard way to track historical storage usage. If you want to see a trend, note the data and file percentages on the first of each month in a simple sheet. After three months you'll know your growth rate and roughly when you'll hit 100%.</li>
          </ul>
          <p>When you look at the record type list, check these first:</p>
          <ol className="hsc-plainList">
            <li>Tasks and events, especially ones created by automation</li>
            <li>Email messages</li>
            <li>Custom objects with "log", "history" or "sync" in the name</li>
            <li>Leads and contacts (duplicates and old, never-contacted records)</li>
            <li>Cases closed more than a few years ago</li>
          </ol>
          <p>If a custom object you don't recognize is near the top, it is often left over from an old integration. Our guide to <Link href="/blogs/salesforce-integration-blog">Salesforce integration types and patterns</Link> covers how to design syncs that don't leave piles of records behind.</p>
        </section>

        <section id="happens-when-exceed"><span className="hsc-kicker">Over the Limit</span><h2>What Happens When You Exceed Your Salesforce Storage Limit?</h2>
          <p>In production, nothing stops on the day you pass 100%. Salesforce Help says the org will continue to run as expected, but at some point beyond 100% performance will be degraded, and that point can't be predicted exactly.</p>
          <p>The <a href="https://help.salesforce.com/s/articleView?id=000386657&amp;language=en_US&amp;type=1" rel="nofollow noopener" target="_blank">Salesforce Help article on exceeding data storage</a> also explains the sandbox side: storage limits are strictly enforced for Full sandboxes. If a new Full sandbox copies more data than it can hold, you won't be able to create records in it.</p>
          <p>So the real risks are:</p>
          <ul className="hsc-plainList">
            <li><strong>Slower performance</strong> in an org that is well over its limit</li>
            <li><strong>Blocked testing</strong>, because a Full sandbox copied from an overfull production org may not accept new records. Our guide to <Link href="/blogs/salesforce-sandbox">Salesforce sandbox types and limits</Link> explains how each sandbox type handles storage.</li>
            <li><strong>Unplanned spend</strong>, because buying extra storage under time pressure leaves little room to compare options</li>
          </ul>
          <p>Treat 80% as your warning line. It gives you time to clean up or plan an archive before anything slows down.</p>
        </section>

        <section id="free-up-storage"><span className="hsc-kicker">Clean-Up</span><h2>How Do You Free Up Salesforce Storage?</h2>
          <p>Start with records nobody needs, then archive what you must keep but rarely open, and only then buy more storage. Always export a backup before deleting anything.</p>
          <p>Work through it in this order:</p>
          <ol className="hsc-plainList">
            <li><strong>Back up first.</strong> Run a full data export or use your backup tool so anything deleted can be restored.</li>
            <li><strong>Find the top three objects</strong> on the Storage Usage page. In most orgs they account for most of the used space.</li>
            <li><strong>Stop the growth.</strong> Fix the flow, integration or email setting that keeps creating records before you delete old ones, or the space fills right back up.</li>
            <li><strong>Delete what has no value.</strong> Old automated tasks, test records, integration logs past their useful life and leads that were never contacted.</li>
            <li><strong>Merge duplicates.</strong> Duplicate rules and matching rules stop new ones; a clean-up pass handles the existing ones.</li>
            <li><strong>Archive what you must keep.</strong> Move old closed cases, emails or activities to big objects, Salesforce's paid Archive product or a third-party archive, so they stay searchable outside normal data storage.</li>
            <li><strong>Handle files separately.</strong> Find the largest files on the Storage Usage page, remove duplicates and old versions, and consider keeping large documents in an external document system linked from the record.</li>
            <li><strong>Set a retention rule.</strong> Agree with each team how long each type of record is kept, write it down and schedule a regular clean-up.</li>
          </ol>
          <p>A storage clean-up checklist you can copy:</p>
          <ol className="hsc-checklist">
            <li>Full backup taken and a test restore checked</li>
            <li>Data and file storage percentages recorded today</li>
            <li>Top 5 objects by storage listed with an owner for each</li>
            <li>Automation or integration creating excess records fixed</li>
            <li>Delete rules agreed in writing with each team</li>
            <li>Duplicates merged and duplicate rules switched on</li>
            <li>Archive option chosen for records that must be kept</li>
            <li>Largest 50 files reviewed</li>
            <li>Monthly storage check added to the admin calendar</li>
          </ol>
          <p>If nobody on your team has time to own this, you can <Link href="/hire-salesforce-admin">hire a Salesforce admin</Link> part time to run the clean-up and the monthly check.</p>
        </section>

        <section id="why-saasverse"><span className="hsc-kicker">Why Saasverse</span><h2>Why Saasverse for Salesforce Storage and Data Clean-Up?</h2>
          <ul className="hsc-plainList">
            <li>Salesforce Partner with Navigator Expert status</li>
            <li>50+ certified people across admin, developer, consultant and architect roles</li>
            <li>120+ projects for 41 clients in 19 countries</li>
            <li>ISO 27001 and Cyber Essentials Plus certified</li>
            <li>Offices in Jaipur and Boston</li>
            <li>Rated 5.0 on Clutch</li>
          </ul>
        </section>

        <section id="conclusion"><h2>Conclusion: Watch the Trend, Fix the Source</h2>
          <p>Salesforce storage limits are simple once you split them in two. Data storage counts records at about 2 KB each and starts at 10 GB plus a per-user amount. File storage counts the real size of uploads and starts at 10 GB per org in most paid editions. Check the Storage Usage page every month, treat 80% as your warning line, fix whatever keeps creating records, and archive before you buy.</p>
          <p>If your org is close to its limit and you want a clean-up plan you can trust, <Link href="/contact-us">talk to Saasverse</Link>. We reply within 24 hours.</p>
          <div className="hsc-cta"><h3 className="text-xl md:text-2xl font-bold mb-3">Need Help Managing Salesforce Storage?</h3><p className="text-gray-200">Talk to our Salesforce team about reviewing storage usage, cleaning up unnecessary records and planning an archive.</p><Link href="/contact-us" className="hsc-button">Book a Free Consultation</Link></div>
        </section>

        <section id="faq"><h2>Frequently Asked Questions</h2><div className="hsc-faq">{faqs.map(([question, answer]) => <details key={question}><summary><h3>{question}</h3></summary><p>{answer}</p></details>)}</div></section>

        <section className="py-12 md:py-16" id="author"><div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8"><div className="text-center md:text-left"><span className="text-sm font-semibold uppercase tracking-wider text-blue-700">About the Author</span><h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-3">Poorvi Tailang</h2><p className="text-gray-600 text-base leading-7">Poorvi is a Salesforce Developer who builds CRM solutions, enterprise integrations and custom applications. She works with newer Salesforce technology such as Agentforce and Einstein AI, and writes about platform updates and development practice.</p></div></div></section>
      </article>
    </div>
    <BlogSlider />
    <CTASection />
  </div>;
}
