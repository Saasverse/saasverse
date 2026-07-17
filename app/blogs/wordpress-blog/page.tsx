import Image from "next/image";
import Link from "next/link";
import { Newsreader, Inter, Space_Grotesk } from "next/font/google";
import CTASection from "@/app/components/Home/CTASection";
import PageBanner from "@/app/components/PageBanner";
import BlogSlider from "@/app/components/BlogSlider";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Build a Scalable WordPress Site | Saasverse",
  description:
    "Learn how to build a secure, scalable WordPress site that grows with your business. Read more from Saasverse.",

   alternates: { canonical: 'https://www.saasverse.in/blogs/wordpress-blog' },
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

function FeatureCard({
  index,
  title,
  body,
  tone = "light",
}: {
  index: number;
  title: string;
  body: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        tone === "dark" ? "border-white/10 bg-white/[0.03]" : "border-[#E7E2D6] bg-white"
      }`}
    >
      <span className="font-[var(--font-label)] text-xs font-semibold uppercase tracking-[0.14em] text-[#003e95]">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className={`mt-3 font-[var(--font-serif)] text-xl ${tone === "dark" ? "text-white" : "text-[#171A24]"}`}>
        {title}
      </h3>
      <p className={`mt-2 text-[15px] leading-[1.75] ${tone === "dark" ? "text-white/70" : "text-[#3A3D45]"}`}>
        {body}
      </p>
    </div>
  );
}

/* ---------- data ---------- */

const supports = [
  "Higher traffic volumes without downtime",
  "Faster loading speeds across all devices",
  "Future content and feature expansion",
  "Consistent performance under pressure",
];

const cmsFeatures = [
  {
    title: "Scalable Hosting",
    body: "A reputable hosting service that scales resources with traffic keeps your site available and fast during peak times. Cloud hosting plans dynamically allocate extra resources as needed, forming a stable, adaptable foundation.",
  },
  {
    title: "Database Management",
    body: "As content grows, the database expands and gets harder to query quickly. Periodic maintenance — clearing old content, adding indexes, optimising queries , keeps an organised database performing well as it scales.",
  },
  {
    title: "Smart Caching",
    body: "Caching stores copies of your pages so visitors get them instantly without the server rebuilding each time. Server-side and user-side caching together keep load times fast even with many simultaneous visitors.",
  },
];

const hostingTypes = [
  {
    title: "Shared Hosting",
    body: "Cheap and simple, but it doesn't give a growing business the room or resources it needs long-term.",
  },
  {
    title: "Cloud Hosting",
    body: "Leverages multiple servers at once, so it naturally accommodates extra visitors and scales up or down as needed — ideal for growth.",
  },
  {
    title: "VPS Hosting",
    body: "Creates a virtual environment with dedicated resources , more control and better performance than shared hosting, and scalable as you grow.",
  },
  {
    title: "Dedicated Hosting",
    body: "Gives your website its own physical server, with full control over resources and configuration , scalable as your company expands.",
  },
];

const plugins = [
  {
    title: "Cache Managers",
    body: "Tools like W3 Total Cache or WP Super Cache store static versions of your pages, cutting server load and speeding up page load times.",
  },
  {
    title: "Security Plugins",
    body: "Wordfence or Sucuri monitor for threats and help close security gaps ,increasingly important as your site's visibility (and appeal to attackers) grows.",
  },
  {
    title: "SEO Tools",
    body: "All in One SEO or Yoast SEO help generate XML sitemaps, manage meta tags, and optimise content — making your growing site easier to find.",
  },
];

/* ---------- main component ---------- */

export default function Page() {
  return (
    <div className={`${newsreader.variable} ${inter.variable} ${spaceGrotesk.variable} font-sans`}>
      <PageBanner
        image="/images/banner/banner002.webp"
        title="How to Build a Scalable WordPress Site for Your Business"
        description="A scalable WordPress site handles more visitors, more content and new features without slowing down."
      />

      {/* Intro */}
      <section className="bg-[#F6F4EF] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>WordPress Development</Eyebrow>
          <h2 className="mt-5 font-[var(--font-serif)] text-4xl leading-[1.12] text-[#171A24] sm:text-5xl">
            Build a website that grows the way your business does.
          </h2>
          <div className="mt-8 space-y-6 text-[17px] leading-[1.85] text-[#3A3D45]">
            <p>
              In the current era, offline and online presence are both
              essential in the market. An online presence built on a strong
              WordPress platform is no longer optional ,it is mandatory.
              Imagine a site that can expand as your business does: a
              scalable WordPress site handles more visitors, more types of
              content, and new features and updates without missing a beat.
              WordPress can turn your idea into reality, as this powerful CMS
              lets you build a website that is easy for users to navigate and
              meets your expectations.
            </p>
            <p>
              Future-proofing your online presence requires the right
              infrastructure and best practices, whether you are building from
              scratch or redesigning an existing site. This article walks
              through the architecture, tools, and development techniques
              behind a scalable, high performance WordPress website.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding scalability */}
      <section className="bg-[#0A0E1A] px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>The Basics</Eyebrow>
            <h2 className="mt-5 font-[var(--font-serif)] text-3xl leading-tight text-white sm:text-4xl">
              Understanding scalability in WordPress
            </h2>
            <div className="mt-6 space-y-5 text-[16px] leading-[1.85] text-white/70">
              <p>
                Scalability is crucial for companies that want to grow
                online. For a WordPress site, it means your site can handle
                more visitors and more content without slowing down. As your
                company grows, more visitors will come to your website ,a
                scalable site makes it simple to introduce new features
                along the way, so visitors have a good experience regardless
                of how many users or how much data your site handles.
              </p>
              <p>
                Planning around the right technologies and concepts is what
                lets a WordPress site scale. Every choice from the hosting
                provider you pick to how you optimise performance affects
                its ability to expand. Plan well, and your site can handle
                heavy traffic and unexpected demand spikes without drama.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/blogs/mag.jpg"
              alt="Scalable WordPress infrastructure"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Why scalability matters */}
      <section className="bg-[#F6F4EF] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Why It Matters</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[var(--font-serif)] text-3xl leading-tight text-[#171A24] sm:text-4xl">
            Why does your business need scalability?
          </h2>

          <div className="mt-8 max-w-3xl space-y-5 text-[16px] leading-[1.85] text-[#3A3D45]">
            <p>
              Your website shows how well you can meet customer expectations
              as your company grows. If it is slow to load, keeps freezing, or
              lags, it may not be able to cope with increased traffic — and
              people may simply choose not to buy from you. To keep visitors
              engaged and turn them into loyal customers, your site needs to
              stay fast, stable, and user-friendly at all times.
            </p>
            <p>
              A growth-friendly website saves you time and money down the
              line. It avoids the need for constant patches to fix
              performance issues or expensive redesigns just to add a
              feature, letting your business evolve alongside user needs and
              market demand without major headaches.
            </p>
            <p>
              Scalability also matters for SEO. Search engines reward sites
              that are reliable and load quickly with better rankings, so a
              site built to scale becomes more visible and drives more
              organic traffic key to staying competitive online.
            </p>
          </div>

          <div className="mt-10 max-w-lg rounded-2xl border border-[#E7E2D6] bg-white p-8">
            <h3 className="font-[var(--font-label)] text-sm font-semibold uppercase tracking-wide text-[#171A24]">
              A scalable WordPress CMS supports:
            </h3>
            <ul className="mt-4 space-y-3">
              {supports.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CMS features */}
      <section className="bg-[#0A0E1A] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Core Requirements</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[var(--font-serif)] text-3xl leading-tight text-white sm:text-4xl">
            Most important features of a scalable WordPress CMS
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-white/70">
            A scalable WordPress website needs a handful of key
            characteristics to manage growth effectively.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cmsFeatures.map((f, i) => (
              <FeatureCard key={f.title} index={i + 1} title={f.title} body={f.body} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* Hosting */}
      <section className="bg-[#F6F4EF] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Hosting</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[var(--font-serif)] text-3xl leading-tight text-[#171A24] sm:text-4xl">
            Selecting the proper scalable WordPress hosting
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-[#3A3D45]">
            Choosing the right hosting company is what lets you build a
            WordPress site that scales as needed. Each option has its own
            trade-offs.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hostingTypes.map((h, i) => (
              <FeatureCard key={h.title} index={i + 1} title={h.title} body={h.body} />
            ))}
          </div>

          <div className="relative mt-14 aspect-[21/9] w-full overflow-hidden rounded-3xl border border-[#E7E2D6]">
            <Image
              src="/images/blogs/st.webp"
              alt="Scalable hosting options for WordPress"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Highlight banner */}
      <section className="bg-[#0A0E1A] px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-12 text-center">
          <h2 className="font-[var(--font-serif)] text-2xl italic text-white sm:text-3xl">
            Making WordPress work for you
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.85] text-white/70">
            WordPress is more than just a website builder it is a powerful,
            flexible platform capable of driving real business results. But
            unlocking its full potential takes more than a basic setup. With
            expert development, customised themes, plugin integration, and
            strategic optimisation, your website becomes a high-performing
            digital asset  whether it is for content, commerce, or community.
          </p>
        </div>
      </section>

      {/* Plugins */}
      <section className="bg-[#F6F4EF] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Plugins</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[var(--font-serif)] text-3xl leading-tight text-[#171A24] sm:text-4xl">
            Must have plugins for a scalable WordPress site
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.85] text-[#3A3D45]">
            The right plugins do a lot of the heavy lifting when it comes to
            performance, security, and search visibility as your site grows.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {plugins.map((p, i) => (
              <FeatureCard key={p.title} index={i + 1} title={p.title} body={p.body} />
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
              A scalable WordPress site is not just about managing traffic
              spikes ,it is about preparing your digital infrastructure for
              consistent growth, better performance, and long-term
              sustainability. By combining a scalable WordPress CMS, expert
              custom development, and continuous performance optimisation,
              your business can stay agile, competitive, and future-ready.
            </p>
            <p>
              Take the time to invest in scalable architecture now, and
              you wll save time, money, and frustration down the road.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA banner */}
      <section className="bg-[#0A0E1A] px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent px-8 py-16 text-center">
          <h2 className="font-[var(--font-serif)] text-3xl leading-tight text-white sm:text-4xl">
            Ready to build a WordPress site that scales?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.7] text-white/70">
            Collaborate with a team that builds WordPress sites for long term
            growth, not just a launch date.
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