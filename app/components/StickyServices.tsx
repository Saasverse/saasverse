interface ServiceItem {
  title: string;
  description: string;
}

interface StickyServicesProps {
  heading: string;
  paragraphs: string[];
  services: ServiceItem[];
}

export default function StickyServices({
  heading,
  paragraphs,
  services,
}: StickyServicesProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[420px_1fr]">
          
          {/* Left Content */}
          <div className="lg:sticky lg:top-24 h-fit">
            <h2 className="mb-6 text-4xl font-bold text-slate-900">
              {heading}
            </h2>

            <div className="space-y-5 text-slate-600 leading-8">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Services */}
          <div className="grid gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}