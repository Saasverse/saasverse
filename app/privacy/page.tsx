import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Saasverse Pvt. Ltd.",
  description:
    "Review Saasverse Pvt Ltd's Privacy Policy to understand how we collect, use, and protect your personal information when you visit our website.",
  alternates: {
    canonical: "https://www.saasverse.in/privacy",
  },
};

const sections = [
  {
    number: "01",
    icon: "📄",
    title: "Log Files",
    body: "Saasverse Pvt. Ltd. follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any personally identifiable information. The purpose is for analyzing trends, administering the site, tracking users' movement, and gathering demographic information.",
  },
  {
    number: "02",
    icon: "🌐",
    title: "Cookies & Web Beacons",
    body: "Like any other website, Saasverse Pvt. Ltd. uses cookies. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.",
  },
  {
    number: "03",
    icon: "🔒",
    title: "Privacy Policies",
    body: "Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons in their respective advertisements and links that appear on Saasverse Pvt. Ltd., which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies measure the effectiveness of advertising campaigns and/or personalize advertising content. Note that Saasverse Pvt. Ltd. has no access to or control over these cookies used by third-party advertisers.",
  },
  {
    number: "04",
    icon: "⚠️",
    title: "Third Party Privacy Policies",
    body: "Saasverse Pvt. Ltd.'s Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information, including their practices and instructions about how to opt-out of certain options. You can choose to disable cookies through your individual browser options. To know more about cookie management with specific web browsers, visit the browsers' respective websites.",
  },
  {
    number: "05",
    icon: "👥",
    title: "Children's Information",
    body: "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Saasverse Pvt. Ltd. does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, please contact us immediately and we will do our best to promptly remove such information from our records.",
  },
  {
    number: "06",
    icon: "🌍",
    title: "Online Privacy Policy Only",
    body: "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Saasverse Pvt. Ltd. This policy is not applicable to any information collected offline or via channels other than this website.",
  },
  {
    number: "07",
    icon: "✓",
    title: "Consent",
    body: "By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.",
  },
];

export default function Privacy() {
  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{ background: "#06091A" }}
    >
      {/* Grid background */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top radial glow */}
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[420px] z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pb-24">

        {/* Hero */}
        <section className="pt-20 pb-10 sm:pt-28 sm:pb-14 text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-1.5 mb-8">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-violet-400"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>

            <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
              Privacy &amp; Data
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black tracking-tighter leading-[1.04] mb-6"
            style={{
              background:
                "linear-gradient(155deg, #FFFFFF 25%, rgba(148,163,184,0.65) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Privacy Policy
          </h1>

          <p className="text-sm font-mono tracking-widest text-slate-500 uppercase mb-3">
            Saasverse Pvt. Ltd. · www.saasverse.in
          </p>

          <div className="mt-10 flex items-center gap-3 justify-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/[0.08] max-w-[140px]" />
            <div className="h-1.5 w-1.5 rounded-full bg-violet-500/60" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/[0.08] max-w-[140px]" />
          </div>
        </section>

        {/* Intro */}
        <section className="mb-6">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-7 py-7 sm:px-9 sm:py-8">
            <p className="text-[0.9375rem] leading-relaxed text-slate-400">
              At{" "}
              <span className="text-white/80 font-medium">
                Saasverse Pvt. Ltd.
              </span>
              , one of our main priorities is the privacy of our visitors. This
              Privacy Policy document contains types of information that is
              collected and recorded by Saasverse Pvt. Ltd. and how we use it.
              If you have additional questions or require more information,{" "}
              <a
                href="mailto:info@saasverse.in"
                className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2"
              >
                do not hesitate to contact us
              </a>
              .
            </p>
          </div>
        </section>

        {/* Section Cards */}
        <section className="flex flex-col gap-3.5">
          {sections.map((section, index) => (
            <div
              key={section.number}
              className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-sm hover:border-violet-500/30 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
            >
              {/* Left glow */}
              <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-violet-500/0 via-violet-500/80 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner glow */}
              <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-violet-600/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative px-7 py-7 sm:px-9 sm:py-8">
                <div className="flex items-start gap-5">

                  <div className="shrink-0 flex flex-col items-center gap-2 pt-0.5">
                    <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                      <span>{section.icon}</span>
                    </div>

                    <span
                      className="font-mono text-xs font-bold tracking-widest select-none"
                      style={{ color: "rgba(139,92,246,0.5)" }}
                    >
                      {section.number}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[1.05rem] font-semibold text-white/90 mb-3 tracking-tight leading-snug">
                      {section.title}
                    </h3>

                    <p className="text-[0.9rem] leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {section.body}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Contact CTA */}
        <section className="mt-6">
          <div className="relative rounded-2xl overflow-hidden border border-violet-500/20">

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139,92,246,0.13) 0%, rgba(109,40,217,0.06) 100%)",
              }}
            />

            <div
              className="absolute -top-12 right-8 w-48 h-48 rounded-full blur-3xl"
              style={{ background: "rgba(139,92,246,0.15)" }}
            />

            <div className="relative px-7 py-8 sm:px-10 sm:py-9">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">

                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-2">
                    Get in Touch
                  </p>

                  <h3 className="text-xl font-bold text-white/90 mb-2 tracking-tight">
                    Questions about your privacy?
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    Reach out and we will address any concerns about how we
                    handle your data promptly and transparently.
                  </p>
                </div>

                <a
                  href="mailto:info@saasverse.in"
                  className="shrink-0 inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 active:scale-[0.97]"
                  style={{
                    background:
                      "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>

                  info@saasverse.in
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* Footer note */}
        <p className="mt-10 text-center text-xs text-slate-600 leading-relaxed max-w-2xl mx-auto">
          By using our website, you hereby consent to our Privacy Policy and
          agree to its Terms and Conditions. This policy is valid for all
          visitors to{" "}
          <span className="text-slate-500">www.saasverse.in</span>.
        </p>

      </div>
    </main>
  );
}