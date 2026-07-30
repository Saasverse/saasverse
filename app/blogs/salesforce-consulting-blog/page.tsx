import Image from "next/image";
import Link from "next/link";
import { Newsreader, Inter, Space_Grotesk } from "next/font/google";
import CTASection from "@/app/components/Home/CTASection";
import PageBanner from "@/app/components/PageBanner";
import BlogSlider from "@/app/components/BlogSlider";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "What Is Salesforce Consulting? A Complete Guide (2026) | Saasverse",
  description:
    "Learn what Salesforce consulting is — what consultants do, service types, benefits, cost, and how to choose the right partner. Read more from Saasverse.",

    alternates: { canonical: 'https://www.saasverse.in/blogs/salesforce-consulting-blog' },
  };


const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-label",
  weight: ["500", "600"],
});

/* ---------- small building blocks ---------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-[var(--font-label)] text-[11px] font-medium uppercase tracking-[0.2em] text-[#003e95]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#003e95]" />
      {children}
    </span>
  );
}

function Stat({ value, label, tone = "light" }: { value: string; label: string; tone?: "light" | "dark" }) {
  return (
    <div
      className={`flex flex-col gap-1 rounded-2xl border px-6 py-7 ${
        tone === "dark" ? "border-white/10 bg-white/[0.03]" : "border-[#E7E2D6] bg-white"
      }`}
    >
      <span className="font-[var(--font-serif)] text-4xl italic text-[#003e95] sm:text-5xl">{value}</span>
      <span
        className={`font-[var(--font-label)] text-[13px] uppercase tracking-[0.08em] ${
          tone === "dark" ? "text-white/60" : "text-[#5B5F6B]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function CheckItem({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <li className="flex items-start gap-3">
      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-[#003e95]" viewBox="0 0 20 20" fill="none">
        <path
          d="M4 10.5L8 14.5L16 5.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={tone === "dark" ? "text-white/80" : "text-[#3A3D45]"}>{children}</span>
    </li>
  );
}

function FeatureCard({ index, title, body, tone = "light" }: { index: number; title: string; body: string; tone?: "light" | "dark" }) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        tone === "dark" ? "border-white/10 bg-white/[0.03]" : "border-[#E7E2D6] bg-white"
      }`}
    >
      <span className="font-[var(--font-label)] text-xs font-semibold uppercase tracking-[0.14em] text-[#003e95]">
        {String(index).padStart(2, "0")}
      </span>
      <h3
        className={`mt-3 font-[var(--font-serif)] text-xl ${tone === "dark" ? "text-white" : "text-[#171A24]"}`}
      >
        {title}
      </h3>
      <p className={`mt-2 text-[15px] leading-[1.75] ${tone === "dark" ? "text-white/70" : "text-[#3A3D45]"}`}>
        {body}
      </p>
    </div>
  );
}

/* ---------- data ---------- */

const tocLinks = [
  { id: "what-is-salesforce-consulting", label: "What is Salesforce consulting?" },
  { id: "what-does-a-consultant-do", label: "What does a Salesforce consultant actually do?" },
  { id: "types-of-services", label: "Types of Salesforce consulting services" },
  { id: "clouds-consultants-work-with", label: "Salesforce clouds consultants work with" },
  { id: "who-needs-consulting", label: "Who needs Salesforce consulting?" },
  { id: "consulting-vs-professional-services", label: "Consulting vs. professional services vs. in-house admin" },
  { id: "benefits", label: "Benefits of hiring a Salesforce consulting partner" },
  { id: "cost", label: "How much does Salesforce consulting cost?" },
  { id: "choosing-a-partner", label: "How to choose the right Salesforce consulting partner" },
  { id: "typical-engagement", label: "What a typical engagement looks like" },
  { id: "trends-2026", label: "Salesforce consulting trends to watch in 2026" },
  { id: "faqs", label: "FAQs" },
];

const responsibilities = [
  {
    title: "Discovery and Assessment",
    body: "Running stakeholder workshops to map the current sales, service, or marketing process, auditing the existing Salesforce org (if one exists) for technical debt, and identifying the gap between how the business works today and how Salesforce should be configured.",
  },
  {
    title: "Architecture and Solution Design",
    body: "Designing the data model, object relationships, automation (Flow, Apex where needed), security model, and integration points before anyone touches configuration — the step most failed Salesforce projects skip.",
  },
  {
    title: "Configuration and Implementation",
    body: "Building out objects, page layouts, validation rules, automation, reports and dashboards, and — where standard configuration can't meet a requirement — custom development on the Salesforce platform.",
  },
  {
    title: "Integration and Data Migration",
    body: "Connecting Salesforce to the rest of the business's tech stack (ERP, marketing automation, finance systems, support tools) and migrating legacy data in cleanly, without duplicating or corrupting records.",
  },
  {
    title: "Enablement, Training, and Managed Services",
    body: "Training the internal team to actually use what was built, documenting the org, and — for many clients — staying in a managed services capacity to handle enhancements, seasonal changes, and new Salesforce releases three times a year.",
  },
];

const serviceTypes = [
  {
    title: "Strategy & Roadmap Consulting",
    body: "CRM strategy, cloud selection, licensing advice, and a multi-year roadmap. Best for companies before they've bought or configured anything.",
  },
  {
    title: "Implementation Services",
    body: "First-time setup of Sales, Service, or Marketing Cloud. Best for first-time Salesforce adopters.",
  },
  {
    title: "Customization & AppExchange Development",
    body: "Custom objects, Apex, Lightning components, and managed packages. Best for businesses with requirements standard config can't meet.",
  },
  {
    title: "Integration Services",
    body: "Connecting Salesforce to ERPs, marketing tools, support desks, and finance systems. Best for businesses running Salesforce alongside other core systems.",
  },
  {
    title: "Data Migration & Management",
    body: "Cleansing and migrating legacy CRM or spreadsheet data. Best for companies switching from another CRM or consolidating orgs.",
  },
  {
    title: "Managed Services",
    body: "Ongoing admin support, release management, and enhancements. Best for post-launch orgs without a full-time internal admin team.",
  },
];

const clouds = [
  { title: "Sales Cloud", body: "Pipeline, forecasting, and sales process automation." },
  { title: "Service Cloud", body: "Case management, omni-channel support, and self-service." },
  { title: "Marketing Cloud", body: "Multi-channel campaigns, journeys, and personalization." },
  { title: "Experience Cloud", body: "Branded portals for customers and partners." },
  { title: "Health Cloud, Financial Services Cloud, Nonprofit Cloud", body: "Industry-specific data models and workflows." },
  { title: "CPQ", body: "Configure-price-quote for complex product and pricing setups." },
  { title: "Data Cloud and Agentforce", body: "Salesforce's unified data layer and AI agent tooling, increasingly part of modern engagements." },
];

const whoNeedsIt = [
  {
    title: "First-Time Salesforce Buyers",
    body: "Need the platform designed around their process from day one, instead of a generic default setup.",
  },
  {
    title: "Businesses That Have Outgrown Their Setup",
    body: "An org built by whoever was available two years ago, now full of workarounds, duplicate fields, and manual reporting.",
  },
  {
    title: "Companies Migrating Off Another CRM",
    body: "Or off spreadsheets, and needing a clean, validated data migration.",
  },
  {
    title: "Teams With Low Salesforce Adoption",
    body: "The tool is live, but reps and agents avoid it because it doesn't match how they actually work.",
  },
  {
    title: "Organizations Integrating Salesforce",
    body: "With an ERP, marketing platform, or support desk, where a misconfigured integration risks bad data everywhere.",
  },
  {
    title: "Leadership Teams That Need Real Visibility",
    body: "Accurate pipeline, service, and marketing reporting that the current setup can't produce.",
  },
];

const comparisonRows = [
  {
    label: "Who delivers it",
    partner: "Independent certified partner / SI",
    professional: "Salesforce's internal implementation team",
    admin: "Full-time employee",
  },
  {
    label: "Typical cost",
    partner: "Typically more cost-effective than Salesforce's own services",
    professional: "Premium pricing, bundled with licensing deals",
    admin: "Fixed salary",
  },
  {
    label: "Best for",
    partner: "Full implementations, multi-cloud projects, ongoing optimization",
    professional: "Enterprise deals where Salesforce co-sells services alongside licenses",
    admin: "Day-to-day admin, user support, small config changes",
  },
  {
    label: "Continuity after launch",
    partner: "Can stay on as a managed services partner",
    professional: "Typically project-based, then hands off",
    admin: "Always on-site",
  },
  {
    label: "Breadth of expertise",
    partner: "Cross-client pattern recognition across industries",
    professional: "Deep Salesforce product knowledge",
    admin: "Limited to one org's history",
  },
];

const benefits = [
  {
    title: "Faster Time-to-Value",
    body: "A structured methodology avoids the trial-and-error of a first-time, unguided implementation.",
  },
  {
    title: "Lower Risk",
    body: "Certified consultants have seen the same data-migration and adoption failure modes before and design around them.",
  },
  {
    title: "Cost Efficiency",
    body: "Independent partners typically cost less than Salesforce's own professional services for equivalent implementation work.",
  },
  {
    title: "Cross-Industry Best Practice",
    body: "A partner working across dozens of orgs brings patterns a single in-house admin won't have encountered yet.",
  },
  {
    title: "AI and Data Cloud Readiness",
    body: "Current-generation partners help clients adopt Agentforce and Data Cloud correctly instead of bolting AI onto a messy org.",
  },
  {
    title: "Ongoing Optimization",
    body: "Three Salesforce releases a year means an org that isn't actively maintained slowly drifts out of date.",
  },
];

const pricingTiers = [
  { name: "Small Config", price: "$5K–25K", note: "Small configuration project / single-cloud quick start." },
  { name: "Single-Cloud Build", price: "$25K–100K", note: "Full single-cloud implementation (Sales or Service Cloud)." },
  { name: "Multi-Cloud Rollout", price: "$100K–300K+", note: "Multi-cloud implementation with integrations.", featured: true },
  { name: "Managed Services", price: "$2K–10K+ / mo", note: "Ongoing managed services / admin support." },
];

const chooserChecklist = [
  "Verify certifications — look for Certified Administrators, Consultants, and Application/System Architects relevant to your cloud(s), not just \"Salesforce Partner\" branding.",
  "Check industry-specific experience — a partner who has implemented Health Cloud for a hospital network understands constraints a generalist won't.",
  "Confirm they lead with discovery, not templates — a partner who wants to run requirements workshops before quoting a fixed build is more likely to build something you'll actually use.",
  "Ask about AI and Data Cloud capability — Agentforce and Data Cloud are now core to modern Salesforce projects; make sure the partner has delivered this, not just talked about it.",
  "Get clarity on post-launch support — implementation without a managed services option leaves you unsupported the moment something breaks.",
  "Ask for references and case studies — with measurable outcomes (adoption rate, time saved, pipeline visibility), not just logos.",
];

const engagementSteps = [
  {
    title: "Discovery",
    body: "Stakeholder interviews, current-state process mapping, and existing org audit.",
  },
  {
    title: "Solution Design",
    body: "Data model, automation, security, and integration architecture, documented and signed off before build starts.",
  },
  {
    title: "Build",
    body: "Configuration and any custom development, in iterative sprints with regular client review.",
  },
  {
    title: "Testing and Deployment",
    body: "UAT with real users, then a phased or full production rollout.",
  },
  {
    title: "Training and Handoff",
    body: "Role-based training, documentation, and either internal admin handoff or a managed services agreement.",
  },
  {
    title: "Ongoing Optimization",
    body: "Release management, usage monitoring, and iterative improvements as the business changes.",
  },
];

const trends2026 = [
  {
    title: "Agentforce and Agentic AI",
    body: "Consultants are increasingly scoped to design and govern AI agents inside Salesforce, not just traditional automation.",
  },
  {
    title: "Data Cloud Adoption",
    body: "Unifying customer data across clouds and external systems is now a standard part of mid-market and enterprise engagements.",
  },
  {
    title: "Industry Clouds Going Mainstream",
    body: "Health Cloud, Financial Services Cloud, and Nonprofit Cloud consulting demand is growing as verticalized Salesforce products mature.",
  },
  {
    title: "Optimization Over Greenfield",
    body: "A growing share of engagements are \"fix and modernize an existing org\" rather than first-time implementations, as the Salesforce installed base ages.",
  },
];

const faqs = [
  {
    q: "What is Salesforce consulting?",
    a: "Salesforce consulting is the professional service of planning, implementing, customizing, integrating, and optimizing Salesforce for a specific business, delivered by certified partners or independent consultants rather than Salesforce itself.",
  },
  {
    q: "What does a Salesforce consultant do?",
    a: "A Salesforce consultant runs discovery workshops, designs the technical solution, configures (or oversees development of) the platform, migrates data, integrates other systems, trains users, and often provides ongoing support after launch.",
  },
  {
    q: "What are Salesforce consulting services?",
    a: "They include strategy and roadmap consulting, implementation, customization and AppExchange development, integrations, data migration, and managed services — the full lifecycle from planning through ongoing optimization.",
  },
  {
    q: "Is Salesforce consulting worth it?",
    a: "For most businesses beyond a very simple single-user setup, yes — a consultant reduces implementation risk, speeds up time-to-value, and brings cross-client best practices an in-house team building its first org won't have.",
  },
  {
    q: "What's the difference between a Salesforce consultant and a Salesforce admin?",
    a: "A consultant is typically brought in for implementation, complex projects, and specialized expertise (often from an external partner); an admin is usually a full-time in-house employee handling day-to-day configuration, user support, and small changes. Many organizations use both.",
  },
  {
    q: "How long does a Salesforce consulting engagement take?",
    a: "A single-cloud quick start can take a few weeks; a multi-cloud enterprise implementation with integrations typically takes months or more.",
  },
];

/* ---------- main component ---------- */

export default function Page() {
  return (
    <div className={`${newsreader.variable} ${inter.variable} ${spaceGrotesk.variable} font-sans`}>
      {/* smooth-scroll so TOC links glide to their section instead of jumping */}
      <style>{`html { scroll-behavior: smooth; } [id] { scroll-margin-top: 96px; }`}</style>

      <PageBanner
        image="/images/banner/banner002.webp"
        title="What Is Salesforce Consulting? A Complete Guide (2026)"
        description="Salesforce consulting is the professional service of helping businesses plan, implement, customize, integrate, and optimize Salesforce so it actually solves their sales, service, and marketing problems."
      />

      {/* Intro / quick answer */}
      <section className="bg-[#F6F4EF] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Salesforce Consulting</Eyebrow>
          <h2 className="mt-5 font-[var(--font-serif)] text-4xl leading-[1.12] text-[#171A24] sm:text-5xl">
            Strategy, implementation, and optimization — not just software installation.
          </h2>
          <div className="mt-8 space-y-6 text-[17px] leading-[1.85] text-[#3A3D45]">
            <p>
              <span className="font-semibold text-[#171A24]">Quick answer:</span>{" "}
              Salesforce consulting is the professional service of helping
              businesses plan, implement, customize, integrate, and optimize
              Salesforce so it actually solves their sales, service, and
              marketing problems — not just software installation, but the
              strategy, configuration, and change management that makes the
              platform work for a specific business. Companies hire a
              Salesforce consulting partner instead of (or alongside) an
              in-house admin when they need certified expertise, a
              structured implementation methodology, or specialized
              knowledge of a Salesforce cloud they haven't used before.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mt-12 rounded-2xl border border-[#E7E2D6] bg-white p-8">
            <Eyebrow>Table of Contents</Eyebrow>
            <ol className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {tocLinks.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-start gap-3 text-[15px] leading-[1.6] text-[#3A3D45] transition-colors hover:text-[#003e95]"
                  >
                    <span className="font-[var(--font-label)] text-xs font-semibold text-[#003e95]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="underline decoration-[#E7E2D6] decoration-1 underline-offset-4 group-hover:decoration-[#003e95]">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* What is Salesforce Consulting */}
      <section id="what-is-salesforce-consulting" className="bg-[#0A0E1A] px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>The Basics</Eyebrow>
            <h2 className="mt-5 font-[var(--font-serif)] text-3xl leading-tight text-white sm:text-4xl">
              What is Salesforce consulting?
            </h2>
            <div className="mt-6 space-y-5 text-[16px] leading-[1.85] text-white/70">
              <p>
                Salesforce consulting is the practice of advising,
                designing, building, and supporting Salesforce
                implementations on behalf of a business. A{" "}
                <Link href="/salesforce-consulting-company" className="font-semibold text-white underline decoration-[#003e95] decoration-2 underline-offset-4">
                  Salesforce consulting partner
                </Link>{" "}
                — typically a certified Salesforce Consulting Partner or
                independent System Integrator (SI) — translates business
                requirements (how a sales team sells, how a support team
                resolves cases, how a marketing team runs campaigns) into a
                working Salesforce configuration, and then keeps that
                configuration aligned with the business as it grows.
              </p>
              <p>
                It's a different job from simply "using Salesforce."
                Salesforce out of the box is a flexible, largely
                unconfigured CRM platform. Salesforce consulting is what
                turns that platform into a system that mirrors an
                organization's actual sales process, supports workflows,
                and reporting needs — without requiring every business to
                reinvent Salesforce architecture from scratch.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="font-[var(--font-label)] text-xs font-semibold uppercase tracking-[0.14em] text-[#003e95]">
                Key Takeaways
              </span>
              <ul className="mt-4 space-y-3 text-[15px] leading-[1.7]">
                <CheckItem tone="dark">Salesforce consulting spans strategy, implementation, customization, integration, data migration, and ongoing optimization — not just setup.</CheckItem>
                <CheckItem tone="dark">It's delivered by certified Salesforce Consulting Partners (agencies/SIs) or independent consultants, distinct from Salesforce's own in-house professional services team.</CheckItem>
                <CheckItem tone="dark">Most engagements follow five phases: discovery, design, build, test/deploy, and train/handoff.</CheckItem>
                <CheckItem tone="dark">Typical cost ranges from a few thousand dollars for a small configuration project to six figures for a multi-cloud enterprise rollout.</CheckItem>
                <CheckItem tone="dark">The right partner is chosen on certifications, industry experience, a discovery-led (not template-led) approach, and post-launch support — not just day rate.</CheckItem>
              </ul>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/blogs/blogimp.webp"
              alt="Salesforce consulting engagement"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* What does a consultant do */}
      <section id="what-does-a-consultant-do" className="bg-[#F6F4EF] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>The Role</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[var(--font-serif)] text-3xl leading-tight text-[#171A24] sm:text-4xl">
            What does a Salesforce consultant actually do?
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-[#3A3D45]">
            Day to day, a Salesforce consultant works across five recurring
            activities.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {responsibilities.map((f, i) => (
              <FeatureCard key={f.title} index={i + 1} title={f.title} body={f.body} />
            ))}
          </div>
        </div>
      </section>

      {/* Types of services */}
      <section id="types-of-services" className="bg-[#0A0E1A] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Service Types</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[var(--font-serif)] text-3xl leading-tight text-white sm:text-4xl">
            Types of Salesforce consulting services
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-white/70">
            Salesforce consulting spans the full lifecycle, from strategy
            through ongoing optimization.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceTypes.map((s, i) => (
              <FeatureCard key={s.title} index={i + 1} title={s.title} body={s.body} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* Clouds consultants work with */}
      <section id="clouds-consultants-work-with" className="bg-[#F6F4EF] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Ecosystem</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[var(--font-serif)] text-3xl leading-tight text-[#171A24] sm:text-4xl">
            Salesforce clouds consultants work with
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-[#3A3D45]">
            Salesforce consulting isn't one product — it spans the full
            Salesforce ecosystem.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clouds.map((c, i) => (
              <FeatureCard key={c.title} index={i + 1} title={c.title} body={c.body} />
            ))}
          </div>
        </div>
      </section>

      {/* Who needs it */}
      <section id="who-needs-consulting" className="bg-[#0A0E1A] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Who Needs This</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[var(--font-serif)] text-3xl leading-tight text-white sm:text-4xl">
            Who needs Salesforce consulting?
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-white/70">
            Salesforce consulting fits a range of situations, from a first
            implementation to fixing years of accumulated technical debt.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whoNeedsIt.map((u, i) => (
              <FeatureCard key={u.title} index={i + 1} title={u.title} body={u.body} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* Consulting vs professional services vs admin */}
      <section id="consulting-vs-professional-services" className="bg-[#F6F4EF] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Comparison</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[var(--font-serif)] text-3xl leading-tight text-[#171A24] sm:text-4xl">
            Salesforce consulting vs. professional services vs. in-house admin
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-[#3A3D45]">
            A common point of confusion: Salesforce itself sells
            "professional services," independent partners sell "consulting
            services," and many companies also have (or plan to hire) an
            in-house admin. They're not interchangeable.
          </p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-[#E7E2D6] bg-white">
            <table className="w-full min-w-[720px] border-collapse text-left text-[14px]">
              <thead>
                <tr className="border-b border-[#E7E2D6]">
                  <th className="p-5 font-[var(--font-label)] text-xs font-semibold uppercase tracking-wide text-[#5B5F6B]"> </th>
                  <th className="p-5 font-[var(--font-label)] text-xs font-semibold uppercase tracking-wide text-[#003e95]">Consulting Partner</th>
                  <th className="p-5 font-[var(--font-label)] text-xs font-semibold uppercase tracking-wide text-[#5B5F6B]">Professional Services</th>
                  <th className="p-5 font-[var(--font-label)] text-xs font-semibold uppercase tracking-wide text-[#5B5F6B]">In-House Admin</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} className={i !== comparisonRows.length - 1 ? "border-b border-[#E7E2D6]" : ""}>
                    <td className="p-5 font-[var(--font-serif)] text-[15px] text-[#171A24]">{row.label}</td>
                    <td className="p-5 leading-[1.6] text-[#3A3D45]">{row.partner}</td>
                    <td className="p-5 leading-[1.6] text-[#3A3D45]">{row.professional}</td>
                    <td className="p-5 leading-[1.6] text-[#3A3D45]">{row.admin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 max-w-3xl text-[16px] leading-[1.85] text-[#3A3D45]">
            In practice, most mid-market and enterprise companies use a
            consulting partner for implementation and complex projects, and
            either train an in-house admin or retain the partner for
            managed services afterward — the two aren't mutually exclusive.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="bg-[#0A0E1A] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <Eyebrow>Benefits</Eyebrow>
            <h2 className="mt-5 font-[var(--font-serif)] text-3xl leading-tight text-white sm:text-4xl">
              Benefits of hiring a Salesforce consulting partner
            </h2>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {benefits.map((a) => (
              <div key={a.title}>
                <h3 className="font-[var(--font-serif)] text-lg text-white">{a.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.75] text-white/70">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight banner */}
      <section className="bg-[#F6F4EF] px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#E7E2D6] bg-white px-8 py-12 text-center shadow-[0_1px_0_0_#E7E2D6]">
          <h2 className="font-[var(--font-serif)] text-2xl italic text-[#171A24] sm:text-3xl">
            Why work with a partner like Saasverse
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.85] text-[#3A3D45]">
            Saasverse is a certified Salesforce consulting partner delivering
            strategy, implementation, integration, and managed services
            across Sales, Service, Marketing, and Health Cloud for clients
            across 15+ countries — built around the same discovery-first,
            no-templates approach outlined above. If you're evaluating
            whether to bring in a consulting partner,{" "}
            <Link href="/contact" className="font-semibold text-[#003e95] underline decoration-2 underline-offset-4">
              talk to our team
            </Link>{" "}
            or see our full{" "}
            <Link href="/salesforce-consulting-company" className="font-semibold text-[#003e95] underline decoration-2 underline-offset-4">
              Salesforce consulting services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Cost */}
      <section id="cost" className="bg-[#0A0E1A] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Cost</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[var(--font-serif)] text-3xl leading-tight text-white sm:text-4xl">
            How much does Salesforce consulting cost?
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-white/70">
            Cost depends on scope, org complexity, and region, but as a
            rough planning guide (industry estimates, not Saasverse
            quotes), here's how the four common engagement types compare.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  tier.featured ? "border-[#003e95] bg-white/[0.05] shadow-lg" : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-[#003e95] px-3 py-1 font-[var(--font-label)] text-[10px] font-semibold uppercase tracking-wide text-white">
                    Most common
                  </span>
                )}
                <span className="font-[var(--font-label)] text-sm font-semibold uppercase tracking-wide text-white">
                  {tier.name}
                </span>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-[var(--font-serif)] text-4xl italic text-[#003e95]">{tier.price}</span>
                </div>
                <p className="mt-4 text-[14px] leading-[1.7] text-white/70">{tier.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-[15px] leading-[1.8] text-white/60">
            Independent consulting partners are typically more
            cost-effective than engaging Salesforce's own professional
            services team for comparable implementation work, largely
            because Salesforce's internal team prices services as part of
            larger enterprise licensing deals. Actual quotes vary by
            consultant seniority, region, integration complexity, and
            whether custom development (versus standard configuration) is
            required — always ask for a scoped estimate based on a
            discovery call, not a rate card.
          </p>
        </div>
      </section>

      {/* How to choose a partner */}
      <section id="choosing-a-partner" className="bg-[#F6F4EF] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Choosing a Partner</Eyebrow>
          <h2 className="mt-5 font-[var(--font-serif)] text-3xl leading-tight text-[#171A24] sm:text-4xl">
            How to choose the right Salesforce consulting partner
          </h2>
          <ul className="mt-8 space-y-4 text-[16px] leading-[1.7]">
            {chooserChecklist.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>
        </div>
      </section>

      {/* Typical engagement */}
      <section id="typical-engagement" className="bg-[#0A0E1A] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>The Process</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[var(--font-serif)] text-3xl leading-tight text-white sm:text-4xl">
            What a typical Salesforce consulting engagement looks like
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-white/70">
            Depending on scope, this runs anywhere from a few weeks
            (single-cloud quick start) to several months (multi-cloud
            enterprise rollout).
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {engagementSteps.map((s, i) => (
              <FeatureCard key={s.title} index={i + 1} title={s.title} body={s.body} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* Trends 2026 */}
      <section id="trends-2026" className="bg-[#F6F4EF] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Looking Ahead</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[var(--font-serif)] text-3xl leading-tight text-[#171A24] sm:text-4xl">
            Salesforce consulting trends to watch in 2026
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {trends2026.map((t, i) => (
              <FeatureCard key={t.title} index={i + 1} title={t.title} body={t.body} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="bg-[#0A0E1A] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="mt-5 font-[var(--font-serif)] text-3xl leading-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-[var(--font-serif)] text-lg text-white">{f.q}</h3>
                <p className="mt-2 text-[15px] leading-[1.75] text-white/70">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Bottom CTA banner */}
      <section className="bg-[#0A0E1A] px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent px-8 py-16 text-center">
          <h2 className="font-[var(--font-serif)] text-3xl leading-tight text-white sm:text-4xl">
            Ready to bring in a Salesforce consulting partner?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.7] text-white/70">
            Talk to a discovery-first Salesforce consulting team to make
            that first step.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#003e95] px-8 py-3 font-[var(--font-label)] text-sm font-semibold uppercase tracking-wide text-[#003e95] transition-colors hover:bg-[#003e95] hover:text-white"
          >
            Get a quote
          </Link>
        </div>
      </section>
        <BlogSlider/>
      <CTASection />
    </div>
  );
}