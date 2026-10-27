import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/app/components/Home/CTASection";
import PageBanner from "@/app/components/PageBanner";
import BlogSlider from "@/app/components/BlogSlider";

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
  }
}

/* Article */
.hsc-article section { scroll-margin-top: 1.5rem; margin-bottom: 3.25rem; }
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
  margin: 0 0 3.25rem;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  margin: 0;
}
.hsc-stats strong {
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--brand);
}
.hsc-stats span {
  font-size: 0.95rem;
  line-height: 1.4;
  color: var(--muted);
}
@media (min-width: 40rem) {
  .hsc-stats { grid-template-columns: repeat(4, 1fr); }
  .hsc-stats li { padding: 1.25rem; }
}

/* Callout */
.hsc-callout {
  border-left: 4px solid var(--saffron);
  background: #fff8e6;
  padding: 1rem 1.25rem 0.1rem;
  margin: 1.75rem 0 0;
}

/* Steps: numbered sequence */
.hsc-article section#services { counter-reset: step; }
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
  .hsc-button { transition: none; }
}
`;

const URL_PATH = "https://www.saasverse.in/blogs/magento-blog";
const TITLE = "Hire Expert Magento Developers | Saasverse";
const DESCRIPTION =
  "Work with experienced Magento developers for scalable eCommerce builds and Salesforce integration. Read more.";

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
  { id: "overview", label: "Why Magento, and why the right developer" },
  { id: "services", label: "How Saasverse Magento developers will help you" },
  { id: "value", label: "Making Magento work for you" },
  { id: "conclusion", label: "Conclusion" },
];

const stats = [
  { value: "2.43%", label: "Global market share" },
  { value: "250K+", label: "Active Magento sites" },
  { value: "11K", label: "Running Magento 2" },
  { value: "12%", label: "Of all e-commerce sites" },
];

const services = [
  {
    title: "Extensive Customization Opportunities",
    body: "Magento development stands out for its range of customization options. As an open-source platform, developers get full control over the source code, which makes customization far more straightforward.",
  },
  {
    title: "Strong Security",
    body: "A safe, satisfying user experience depends on the e-commerce platform being secure. Magento development services are a strong choice when security is your top priority, backed by the platform’s robust security features.",
  },
  {
    title: "Integrated Third-Party Software",
    body: "Magento’s seamless integration is one of its most appealing features. With APIs suited to a wide range of functionality, Magento customization services let you integrate payment gateways, database apps, shipping software, CRM and ERP systems, Google tools, and payment methods like PayPal and Braintree.",
  },
  {
    title: "Configuring and Setting Up Magento",
    body: "Full setup and installation on a strong foundation, from configuring store settings to setting up multilingual and multi-currency options, so everything works properly from day one.",
  },
  {
    title: "Personalized Themes & Performance",
    body: "Unique Magento themes built around your brand, paired with a focus on site performance so customers get quick loading times and a seamless shopping experience.",
  },
  {
    title: "Payment Gateway Solutions & Integration",
    body: "Secure payment gateways like PayPal, SagePay, and Authorize.Net installed, tested, and configured, plus integration with other third-party apps, accounting software, and CRM systems for more efficient operations.",
  },
  {
    title: "Technical Improvements & SEO Audits",
    body: "Technical best practices keep your store competitive in search rankings, backed by comprehensive SEO audits that make sure your Magento store is both discoverable and operational.",
  },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Magento Development Can Transform Your Online Store",
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
        title="How Magento Development Can Transform Your Online Store"
        description="What Magento experts actually do, and how the right development partner turns Magento into your store’s biggest advantage."
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
            <section id="overview">
              <h2>The right platform is the first decision. The right developer is the one that matters.</h2>
              <p>
                Choosing and using the right platform is essential to running a successful e-commerce business. Magento, Shopify, BigCommerce, and WooCommerce can all meet different online store requirements, but Magento continuously distinguishes itself as a leading e-commerce platform. Before choosing, it’s worth knowing Magento’s benefits, whether you are starting your first online store or planning a future migration.
              </p>
              <p>
                This is driving up demand for Magento 2 development services, with popular brands like Samsung, Lenovo, Nestlé, JCB, Canon, Nike, and Jack Daniels among its users. So the real question is: how do business owners hire the right Magento experts, and what do those experts actually do to transform an online store? Here is what Saasverse Pvt. Ltd. has to say.
              </p>

              <ul className="hsc-stats">
                {stats.map((s) => (
                  <li key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="services">
              <h2>How Saasverse Magento Developers Will Help You Out</h2>
              {services.map((s) => (
                <div className="hsc-step" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </section>

            <section id="value">
              <h2>Making Magento Work for You</h2>
              <p>
                Magento is a powerhouse in the world of eCommerce, but its true value is unlocked only through expert implementation and customization. Whether you are launching a new online store or scaling an existing one, a strategic Magento setup can transform your customer experience, streamline operations, and boost conversions.
              </p>
              <aside className="hsc-callout">
                <p>
                  <strong>Planning a Magento store?</strong> Tell us what you’re building and we’ll suggest the right setup, theme and integrations.
                </p>
              </aside>
            </section>

            <section id="conclusion">
              <h2>Conclusion</h2>
              <p>
                When launching a business, choosing the right technology platform is essential to achieving your objectives. Choosing a flexible e-commerce platform is essential for any e-commerce endeavor, and Magento is a strong contender.
              </p>
              <p>
                The same is true of a Magento development service provider: you can expect a complete solution backed by a strong developer and support community. Selecting the best Magento provider also brings a host of advantages: transparent pricing, round-the-clock support, a cost-effective all-in-one solution, and the knowledge of hundreds of developers, among others.
              </p>
              <p>
                The benefits of Magento development above should be strong arguments for any new store owner looking to expand their online enterprise. If you need help, make an informed decision by choosing Saasverse Pvt. Ltd.
              </p>
              <div className="hsc-cta">
                <p>
                  Elevate your eCommerce with Magento development solutions. Book a call and discuss details with our experts.
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