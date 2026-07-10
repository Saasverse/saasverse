import Link from "next/link";
import { Newsreader, Inter, Space_Grotesk } from "next/font/google";
import CTASection from "@/app/components/Home/CTASection";
import PageBanner from "@/app/components/PageBanner";
import BlogSlider from "@/app/components/BlogSlider";

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

const services = [
  {
    title: "Extensive Customization Opportunities",
    body: "Magento development stands out for its range of customization options. As an open-source platform, developers get full control over the source code, which makes customization far more straightforward.",
  },
  {
    title: "Strong Security",
    body: "A safe, satisfying user experience depends on the e-commerce platform being secure. Magento development services are a strong choice when security is your top priority, backed by the platform's robust security features.",
  },
  {
    title: "Integrated Third-Party Software",
    body: "Magento's seamless integration is one of its most appealing features. With APIs suited to a wide range of functionality, Magento customization services let you integrate payment gateways, database apps, shipping software, CRM and ERP systems, Google tools, and payment methods like PayPal and Braintree.",
  },
  {
    title: "Configuring and Setting Up Magento",
    body: "Full setup and installation on a strong foundation, from configuring store settings to setting up multilingual and multi-currency options — so everything works properly from day one.",
  },
  {
    title: "Personalized Themes & Performance",
    body: "Unique Magento themes built around your brand, paired with a focus on site performance so customers get quick loading times and a seamless shopping experience.",
  },
  {
    title: "Payment Gateway Solutions & Integration",
    body: "Secure payment gateways like PayPal, SagePay, and Authorize.Net installed, tested, and configured — plus integration with other third-party apps, accounting software, and CRM systems for more efficient operations.",
  },
  {
    title: "Technical Improvements & SEO Audits",
    body: "Technical best practices keep your store competitive in search rankings, backed by comprehensive SEO audits that make sure your Magento store is both discoverable and operational.",
  },
];

/* ---------- main component ---------- */

export default function Page() {
  return (
    <div className={`${newsreader.variable} ${inter.variable} ${spaceGrotesk.variable} font-sans`}>
      <PageBanner
        image="/images/banner/banner002.webp"
        title="How Magento Development Can Transform Your Online Store"
        description="What Magento experts actually do, and how the right development partner turns Magento into your store's biggest advantage."
      />

      {/* Intro */}
      <section className="bg-[#F6F4EF] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Magento Development</Eyebrow>
          <h2 className="mt-5 font-[var(--font-serif)] text-4xl leading-[1.12] text-[#171A24] sm:text-5xl">
            The right platform is the first decision. The right developer is the one that matters.
          </h2>
          <div className="mt-8 space-y-6 text-[17px] leading-[1.85] text-[#3A3D45]">
            <p>
              Choosing and using the right platform is essential to running a
              successful e-commerce business. Magento, Shopify, BigCommerce,
              and WooCommerce can all meet different online store
              requirements — but Magento continuously distinguishes itself as
              a leading e-commerce platform. Before choosing, its worth
              knowing Magento benefits, whether you are starting your first
              online store or planning a future migration.
            </p>
            <p>
              This is driving up demand for Magento 2 development services,
              with popular brands like Samsung, Lenovo, Nestlé, JCB, Canon,
              Nike, and Jack Daniels among its users. So the real question
              is: how do business owners hire the right Magento experts, and
              what do those experts actually do to transform an online store?
              Here is what Saasverse Pvt. Ltd. has to say.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat value="2.43%" label="Global market share" />
            <Stat value="250K+" label="Active Magento sites" />
            <Stat value="11K" label="Running Magento 2" />
            <Stat value="12%" label="Of all e-commerce sites" />
          </div>
        </div>
      </section>

      {/* How Saasverse helps */}
      <section className="bg-[#0A0E1A] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>How We Help</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-[var(--font-serif)] text-3xl leading-tight text-white sm:text-4xl">
            How Saasverse Magento developers will help you out
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <FeatureCard key={s.title} index={i + 1} title={s.title} body={s.body} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* Highlight banner */}
      <section className="bg-[#F6F4EF] px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#E7E2D6] bg-white px-8 py-12 text-center shadow-[0_1px_0_0_#E7E2D6]">
          <h2 className="font-[var(--font-serif)] text-2xl italic text-[#171A24] sm:text-3xl">
            Making Magento work for you
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.85] text-[#3A3D45]">
            Magento is a powerhouse in the world of eCommerce — but its true
            value is unlocked only through expert implementation and
            customization. Whether you are launching a new online store or
            scaling an existing one, a strategic Magento setup can transform
            your customer experience, streamline operations, and boost
            conversions.
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-[#0A0E1A] px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[var(--font-serif)] text-3xl text-white">Conclusion</h2>
          <div className="mt-6 space-y-5 text-[16px] leading-[1.85] text-white/70">
            <p>
              When launching a business, choosing the right technology
              platform is essential to achieving your objectives. Choosing a
              flexible e-commerce platform is essential for any e-commerce
              endeavor, and Magento is a strong contender.
            </p>
            <p>
              The same is true of a Magento development service provider —
              you can expect a complete solution backed by a strong developer
              and support community. Selecting the best Magento provider also
              brings a host of advantages: transparent pricing,
              round-the-clock support, a cost-effective all-in-one solution,
              and the knowledge of hundreds of developers, among others.
            </p>
            <p>
              The benefits of Magento development above should be strong
              arguments for any new store owner looking to expand their
              online enterprise. If you need help, make an informed decision
              by choosing Saasverse Pvt. Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA banner */}
      <section className="bg-[#0A0E1A] px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent px-8 py-16 text-center">
          <h2 className="font-[var(--font-serif)] text-3xl leading-tight text-white sm:text-4xl">
            Elevate your eCommerce with Magento development solutions
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.7] text-white/70">
            Book a call and discuss details with our experts.
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