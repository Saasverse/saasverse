import Image from "next/image";
import Link from "next/link";
import { Newsreader, Inter, Space_Grotesk } from "next/font/google";
import CTASection from "@/app/components/Home/CTASection";
import PageBanner from "@/app/components/PageBanner";
import BlogSlider from "@/app/components/BlogSlider";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "What Is Salesforce Sales Cloud? Guide | Saasverse",
  description:
    "Learn what Salesforce Sales Cloud is — features, benefits and use cases. Read more from Saasverse.",

    alternates: { canonical: 'https://www.saasverse.in/blogs/salesforce-sales-cloud-blog' },
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

const features = [
  {
    title: "Accounts Management",
    body: "Organizations you plan to do business with are considered accounts, created much like campaigns and leads. Opportunity management and account activities give you a 360-degree picture of your customers, so account managers can review their customer base and spot early warning signs of a potentially upset customer.",
  },
  {
    title: "Leads Management",
    body: "Anyone interested in your product or service, through a campaign or otherwise, is a lead. Sales Cloud helps you manage leads, their source, and their contact details, keeping your customer's journey intact from the very first stage.",
  },
  {
    title: "Campaign Management",
    body: "Campaign management helps predict a company's marketing campaigns to generate increased sales. Campaigns can be launched in a variety of ways, including telemarketing, email, seminars, events, and advertising.",
  },
  {
    title: "Opportunity Management",
    body: "Once a lead is closed and it's time to define what they'll receive, opportunity management takes over. Opportunities are pending deals — records that track which accounts they're for, who the players are, and the size of the potential sale — so you can follow progress at every stage.",
  },
  {
    title: "Contacts Management",
    body: "Contacts link to an existing account or to one you create for your company, giving you a real relationship-management system. Contact management keeps every connection involved in a business transaction in one place, along with past conversations, key numbers, and emails.",
  },
  {
    title: "Case Management",
    body: "When issues come up after you've closed a deal, case management steps in. Email-to-case features keep the process organized by letting customers submit issues by email, so an agent can work the case without toggling between inboxes — and every issue can be tracked and followed up on.",
  },
  {
    title: "Reports and Dashboards",
    body: "Reports and dashboards pull data out through filters for a clear visualization of what matters most, cutting through mountains of fields. Use them to dig deeper and see whether your campaigns are reliably acquiring leads and accounts.",
  },
];

const advantages = [
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
    body: "Integrates easily with other Salesforce products — Marketing Cloud, Service Cloud — and third-party tools, forming a comprehensive business ecosystem.",
  },
];

const useCases = [
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

const pricingTiers = [
  { name: "Essentials", price: "$25", note: "Suitable for small businesses. Covers essential CRM capabilities." },
  { name: "Professional", price: "$75", note: "Aimed at growing teams, with deeper sales tools." },
  { name: "Enterprise", price: "$150", note: "The most sought-after plan — full CRM capabilities and customisation features.", featured: true },
  { name: "Unlimited", price: "$300", note: "Unlimited CRM power, 24/7 support, and advanced features." },
];

/* ---------- main component ---------- */

export default function Page() {
  return (
    <div className={`${newsreader.variable} ${inter.variable} ${spaceGrotesk.variable} font-sans`}>
      <PageBanner
        image="/images/banner/banner002.webp"
        title="Explore Salesforce Sales Cloud: Features, Benefits & Use Cases"
        description="Salesforce Sales Cloud presents a set of tools specifically designed for sales teams to effectively manage leads, monitor customer interactions, and close sales more swiftly."
      />

      {/* Intro */}
      <section className="bg-[#F6F4EF] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Salesforce Sales Cloud</Eyebrow>
          <h2 className="mt-5 font-[var(--font-serif)] text-4xl leading-[1.12] text-[#171A24] sm:text-5xl">
            Manage leads, track customers, and close deals faster.
          </h2>
          <div className="mt-8 space-y-6 text-[17px] leading-[1.85] text-[#3A3D45]">
            <p>
              In order to operate the sales department of any organization,
              Salesforce offers Sales Cloud. It simplifies the handling of
              sales operations by keeping customer interactions organized and
              on record, and gives teams room for better collaboration and
              automation. You can monitor your contacts, leads, products,
              quotes, and campaigns, and keep your whole sales process under
              control.
            </p>
            <p>
              Salesforce Sales Cloud is a robust solution built to boost
              sales productivity and business growth. Part of the larger
              Salesforce ecosystem, it gives sales teams a set of tools to
              effectively manage leads, monitor customer interactions, and
              close sales more swiftly. Below, we walk through what Sales
              Cloud is, its fundamental features, its advantages, real-world
              use cases, and a summary of its pricing.
            </p>
          </div>
        </div>
      </section>

      {/* What is Sales Cloud */}
      <section className="bg-[#0A0E1A] px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>The Basics</Eyebrow>
            <h2 className="mt-5 font-[var(--font-serif)] text-3xl leading-tight text-white sm:text-4xl">
              What is Salesforce Sales Cloud?
            </h2>
            <div className="mt-6 space-y-5 text-[16px] leading-[1.85] text-white/70">
              <p>
                Sales Cloud is a fully customizable, cloud-based sales
                solution and CRM built by Salesforce that hosts all of your
                customer data in a single location.
              </p>
              <p>
                All your sales automation lives in one place with{" "}
                <Link href="/salesforce-sales-cloud/" className="font-semibold text-white underline decoration-[#003e95] decoration-2 underline-offset-4">
                  Sales Cloud
                </Link>
                . It helps companies manage leads easily, monitor progress,
                and automate the sales process — enabling sales teams to
                engage prospects and customers across multiple channels,
                access real-time information, and work more collaboratively.
                Whether you are an enterprise or a small business, Sales Cloud
                offers the scalability and flexibility needed to simplify
                your sales processes.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-sm">
              <Stat value="7" label="Core Features" tone="dark" />
              <Stat value="8" label="Business Advantages" tone="dark" />
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/blogs/blogimp.webp"
              alt="Salesforce Sales Cloud dashboard"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#F6F4EF] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Features</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[var(--font-serif)] text-3xl leading-tight text-[#171A24] sm:text-4xl">
            Salesforce Sales Cloud features that drive success
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-[#3A3D45]">
            Sales representatives and organizations looking for account
            management and customer success solutions will find real
            advantages in these Sales Cloud features.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard key={f.title} index={i + 1} title={f.title} body={f.body} />
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-[#0A0E1A] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <Eyebrow>Advantages</Eyebrow>
            <h2 className="mt-5 font-[var(--font-serif)] text-3xl leading-tight text-white sm:text-4xl">
              Advantages of Salesforce Sales Cloud
            </h2>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {advantages.map((a) => (
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
            Supercharge your sales with Salesforce Sales Cloud
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.85] text-[#3A3D45]">
            Sales Cloud is more than a CRM — it is your intelligent sales
            partner. From lead generation to closing the deal, empower your
            teams with advanced automation, real-time data, customizable
            dashboards, and AI-powered insights that drive smarter decisions.
            Whether you are a growing business or an established enterprise,
            Sales Cloud adapts to your process and scales with your success.
          </p>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-[#0A0E1A] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Use Cases</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[var(--font-serif)] text-3xl leading-tight text-white sm:text-4xl">
            Real-world use cases for Sales Cloud
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-white/70">
            Sales Cloud is used across industries and business models. Here
            are some of its most notable applications.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u, i) => (
              <FeatureCard key={u.title} index={i + 1} title={u.title} body={u.body} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#F6F4EF] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[var(--font-serif)] text-3xl leading-tight text-[#171A24] sm:text-4xl">
            Understanding Sales Cloud pricing
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-[#3A3D45]">
            Sales Cloud pricing supports businesses of different sizes and
            requirements, across four editions.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  tier.featured ? "border-[#003e95] bg-white shadow-lg" : "border-[#E7E2D6] bg-white"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-[#003e95] px-3 py-1 font-[var(--font-label)] text-[10px] font-semibold uppercase tracking-wide text-white">
                    Most popular
                  </span>
                )}
                <span className="font-[var(--font-label)] text-sm font-semibold uppercase tracking-wide text-[#171A24]">
                  {tier.name}
                </span>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-[var(--font-serif)] text-4xl italic text-[#003e95]">{tier.price}</span>
                  <span className="text-sm text-[#5B5F6B]">/user/mo</span>
                </div>
                <p className="mt-4 text-[14px] leading-[1.7] text-[#3A3D45]">{tier.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-[#0A0E1A] px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[var(--font-serif)] text-3xl text-white">Conclusion</h2>
          <div className="mt-6 space-y-5 text-[16px] leading-[1.85] text-white/70">
            <p>
              Salesforce Sales Cloud is a powerful CRM solution that helps
              sales teams become more productive, data-driven, and
              customer-centric. With its extensive features, concrete
              benefits, flexible pricing, and real-world applications, Sales
              Cloud has become a go-to solution for organizations looking to
              scale their sales operations.
            </p>
            <p>
              Whether you are new to CRM or upgrading your current system,
              Sales Cloud offers the tools and insights you need to drive
              sales excellence. Join the future of selling with Salesforce
              Sales Cloud and unlock the full potential of your business.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA banner */}
      <section className="bg-[#0A0E1A] px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent px-8 py-16 text-center">
          <h2 className="font-[var(--font-serif)] text-3xl leading-tight text-white sm:text-4xl">
            Ready to unlock Sales Cloud for your team?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.7] text-white/70">
            Collaborate with a leading Salesforce implementation company to
            make that first step.
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