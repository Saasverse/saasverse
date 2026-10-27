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

const URL_PATH = "https://www.saasverse.in/blogs/wordpress-blog";
const TITLE = "Build a Scalable WordPress Site | Saasverse";
const DESCRIPTION =
  "Learn how to build a secure, scalable WordPress site that grows with your business. Read more from Saasverse.";

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
  { id: "scalability", label: "Understanding scalability in WordPress" },
  { id: "why-scalability", label: "Why does your business need scalability?" },
  { id: "cms-features", label: "Most important features of a scalable WordPress CMS" },
  { id: "hosting", label: "Selecting the proper scalable WordPress hosting" },
  { id: "making-it-work", label: "Making WordPress work for you" },
  { id: "plugins", label: "Must-have plugins for a scalable site" },
  { id: "conclusion", label: "Conclusion" },
];

const supports = [
  "Higher traffic volumes without downtime",
  "Faster loading speeds across all devices",
  "Future content and feature expansion",
  "Consistent performance under pressure",
];

const cmsFeatures: Item[] = [
  {
    title: "Scalable Hosting",
    body: "A reputable hosting service that scales resources with traffic keeps your site available and fast during peak times. Cloud hosting plans dynamically allocate extra resources as needed, forming a stable, adaptable foundation.",
  },
  {
    title: "Database Management",
    body: "As content grows, the database expands and gets harder to query quickly. Periodic maintenance (clearing old content, adding indexes, optimising queries) keeps an organised database performing well as it scales.",
  },
  {
    title: "Smart Caching",
    body: "Caching stores copies of your pages so visitors get them instantly without the server rebuilding each time. Server-side and user-side caching together keep load times fast even with many simultaneous visitors.",
  },
];

const hostingTypes: Item[] = [
  {
    title: "Shared Hosting",
    body: "Cheap and simple, but it doesn’t give a growing business the room or resources it needs long-term.",
  },
  {
    title: "Cloud Hosting",
    body: "Leverages multiple servers at once, so it naturally accommodates extra visitors and scales up or down as needed. Ideal for growth.",
  },
  {
    title: "VPS Hosting",
    body: "Creates a virtual environment with dedicated resources: more control and better performance than shared hosting, and scalable as you grow.",
  },
  {
    title: "Dedicated Hosting",
    body: "Gives your website its own physical server, with full control over resources and configuration, scalable as your company expands.",
  },
];

const plugins: Item[] = [
  {
    title: "Cache Managers",
    body: "Tools like W3 Total Cache or WP Super Cache store static versions of your pages, cutting server load and speeding up page load times.",
  },
  {
    title: "Security Plugins",
    body: "Wordfence or Sucuri monitor for threats and help close security gaps, which gets more important as your site’s visibility (and appeal to attackers) grows.",
  },
  {
    title: "SEO Tools",
    body: "All in One SEO or Yoast SEO help generate XML sitemaps, manage meta tags, and optimise content, making your growing site easier to find.",
  },
];

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
    headline: "How to Build a Scalable WordPress Site for Your Business",
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
        title="How to Build a Scalable WordPress Site for Your Business"
        description="A scalable WordPress site handles more visitors, more content and new features without slowing down."
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
              <h2>Build a website that grows the way your business does.</h2>
              <p>
                In the current era, offline and online presence are both essential in the market. An online presence built on a strong WordPress platform is no longer optional, it is mandatory. Imagine a site that can expand as your business does: a scalable WordPress site handles more visitors, more types of content, and new features and updates without missing a beat. WordPress can turn your idea into reality, as this powerful CMS lets you build a website that is easy for users to navigate and meets your expectations.
              </p>
              <p>
                Future-proofing your online presence requires the right infrastructure and best practices, whether you are building from scratch or redesigning an existing site. This article walks through the architecture, tools, and development techniques behind a scalable, high performance WordPress website.
              </p>
            </section>

            <section id="scalability">
              <h2>Understanding Scalability in WordPress</h2>
              <p>
                Scalability is crucial for companies that want to grow online. For a WordPress site, it means your site can handle more visitors and more content without slowing down. As your company grows, more visitors will come to your website, and a scalable site makes it simple to introduce new features along the way, so visitors have a good experience regardless of how many users or how much data your site handles.
              </p>
              <p>
                Planning around the right technologies and concepts is what lets a WordPress site scale. Every choice from the hosting provider you pick to how you optimise performance affects its ability to expand. Plan well, and your site can handle heavy traffic and unexpected demand spikes without drama.
              </p>
              <div className="hsc-figure">
                <Image
                  src="/images/blogs/mag.jpg"
                  alt="Scalable WordPress infrastructure"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(min-width: 62rem) 40rem, 100vw"
                />
              </div>
            </section>

            <section id="why-scalability">
              <h2>Why Does Your Business Need Scalability?</h2>
              <p>
                Your website shows how well you can meet customer expectations as your company grows. If it is slow to load, keeps freezing, or lags, it may not be able to cope with increased traffic, and people may simply choose not to buy from you. To keep visitors engaged and turn them into loyal customers, your site needs to stay fast, stable, and user-friendly at all times.
              </p>
              <p>
                A growth-friendly website saves you time and money down the line. It avoids the need for constant patches to fix performance issues or expensive redesigns just to add a feature, letting your business evolve alongside user needs and market demand without major headaches.
              </p>
              <p>
                Scalability also matters for SEO. Search engines reward sites that are reliable and load quickly with better rankings, so a site built to scale becomes more visible and drives more organic traffic, which is key to staying competitive online.
              </p>
              <aside className="hsc-callout">
                <p><strong>A scalable WordPress CMS supports:</strong></p>
                <ul className="hsc-plainList">
                  {supports.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </aside>
            </section>

            <section id="cms-features">
              <h2>Most Important Features of a Scalable WordPress CMS</h2>
              <p>
                A scalable WordPress website needs a handful of key characteristics to manage growth effectively.
              </p>
              <Items items={cmsFeatures} />
            </section>

            <section id="hosting">
              <h2>Selecting the Proper Scalable WordPress Hosting</h2>
              <p>
                Choosing the right hosting company is what lets you build a WordPress site that scales as needed. Each option has its own trade-offs.
              </p>
              <Items items={hostingTypes} />
              <div className="hsc-figure">
                <Image
                  src="/images/blogs/st.webp"
                  alt="Scalable hosting options for WordPress"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(min-width: 62rem) 40rem, 100vw"
                />
              </div>
            </section>

            <section id="making-it-work">
              <h2>Making WordPress Work for You</h2>
              <p>
                WordPress is more than just a website builder. It is a powerful, flexible platform capable of driving real business results. But unlocking its full potential takes more than a basic setup. With expert development, customised themes, plugin integration, and strategic optimisation, your website becomes a high-performing digital asset, whether it is for content, commerce, or community.
              </p>
            </section>

            <section id="plugins">
              <h2>Must-Have Plugins for a Scalable WordPress Site</h2>
              <p>
                The right plugins do a lot of the heavy lifting when it comes to performance, security, and search visibility as your site grows.
              </p>
              <Items items={plugins} />
            </section>

            <section id="conclusion">
              <h2>Conclusion</h2>
              <p>
                A scalable WordPress site is not just about managing traffic spikes, it is about preparing your digital infrastructure for consistent growth, better performance, and long-term sustainability. By combining a scalable WordPress CMS, expert custom development, and continuous performance optimisation, your business can stay agile, competitive, and future-ready.
              </p>
              <p>
                Take the time to invest in scalable architecture now, and you’ll save time, money, and frustration down the road.
              </p>
              <div className="hsc-cta">
                <p>
                  <strong>Ready to build a WordPress site that scales?</strong> Collaborate with a team that builds WordPress sites for long term growth, not just a launch date.
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