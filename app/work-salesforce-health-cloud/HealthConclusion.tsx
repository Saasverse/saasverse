import Link from "next/link";

interface HealthConclusionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function HealthConclusion({
  title,
  description,
  buttonText = "Book a Call",
  buttonLink = "/contact-us",
}: HealthConclusionProps) {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-8 md:p-12 lg:p-16 shadow-lg">
          
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />

          <div className="relative z-10">
            <h2 className="mb-8">
              {title}
            </h2>

            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-4xl">
                <p className="text-lg leading-relaxed text-slate-600">
                  {description}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href={buttonLink}
                  className="inline-flex items-center justify-center rounded-xl bg-[#003e95] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black"
                >
                  {buttonText}
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}