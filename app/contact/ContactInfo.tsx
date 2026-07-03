import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaGlobe,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

interface ContactDetails {
  company_name: string;
  company_address: string;
  contact_number: string;
  email_address: string;
}

interface SocialLink {
  url: string;
  title?: string;
  target?: string;
}

interface SocialLinks {
  [key: string]: SocialLink;
}

export default function ContactInfo() {
  const contact: ContactDetails = {
    company_name: "Saasverse Pvt Ltd",
    company_address:
      "Office 301 and FC-1, Anchor Mall, Ajmer Rd, Madrampur, Ganpati Nagar, Jaipur, Rajasthan - 302006",
    contact_number: "+91 9001622264",
    email_address: "contact@saasverse.in",
  };

  const socialLinks: SocialLinks = {
    linkedin: {
      url: "https://www.linkedin.com/company/saasverse",
    },
    facebook: {
      url: "https://www.facebook.com/",
    },
    instagram: {
      url: "https://www.instagram.com/",
    },
    "x-twitter": {
      url: "https://x.com/",
    },
  };

  const socialIcons: Record<string, React.ReactNode> = {
    linkedin: <FaLinkedin />,
    facebook: <FaFacebook />,
    instagram: <FaInstagram />,
    "x-twitter": <FaXTwitter />,
  };

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#003e95]">
            Contact Us
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
            Lets Build
            <span className="block bg-gradient-to-r from-[#003e95] to-blue-600 bg-clip-text text-transparent">
              Your Next Big Idea
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Have a project in mind? Connect with our experts and discover how
            SaaSverse can help accelerate your digital transformation journey.
          </p>
        </div>

        {/* Main Card */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
            
            {/* Address */}
            <div className="border-b border-slate-100 p-8 md:p-10">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-[#003e95]">
                  <FaLocationDot size={22} />
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Office Address
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {contact.company_name}
                  </h3>

                  <p className="mt-3 text-slate-600">
                    {contact.company_address}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="grid gap-5 p-8 md:grid-cols-2 md:p-10">
              
              {/* Phone */}
              <div className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:border-[#003e95] hover:bg-white hover:shadow-lg">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#003e95] shadow-sm">
                  <FaPhone />
                </div>

                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Call Us
                </p>

                <a
                  href={`tel:${contact.contact_number}`}
                  className="text-xl font-bold text-slate-900 hover:text-[#003e95]"
                >
                  {contact.contact_number}
                </a>
              </div>

              {/* Email */}
              <div className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:border-[#003e95] hover:bg-white hover:shadow-lg">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#003e95] shadow-sm">
                  <FaEnvelope />
                </div>

                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Email Us
                </p>

                <a
                  href={`mailto:${contact.email_address}`}
                  className="text-xl font-bold text-slate-900 hover:text-[#003e95]"
                >
                  {contact.email_address}
                </a>
              </div>

              {/* Business Hours */}
              <div className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 md:col-span-2 transition-all hover:-translate-y-1 hover:border-[#003e95] hover:bg-white hover:shadow-lg">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  Business Hours
                </p>

                <p className="font-semibold text-slate-900">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>

                <p className="mt-2 text-slate-600">
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="border-t border-slate-100 bg-slate-50 p-8 md:p-10">
              <div className="mb-8 text-center">
                <h4 className="text-2xl font-bold text-slate-900">
                  Connect With Us
                </h4>
                <p className="mt-2 text-slate-600">
                  Follow us for updates, insights and opportunities.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {Object.entries(socialLinks).map(([key, value]) => (
                  <a
                    key={key}
                    href={value.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:-translate-y-1 hover:border-[#003e95] hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-xl text-slate-700 group-hover:bg-[#003e95] group-hover:text-white">
                      {socialIcons[key] || <FaGlobe />}
                    </div>

                    <div>
                      <p className="font-semibold capitalize text-slate-900">
                        {key.replace("-", " ")}
                      </p>
                      <p className="text-sm text-slate-500">Follow Us</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}