interface ResultItem {
  number: string;
  title: string;
  description: string;
}

interface HealthResultProps {
  title: string;
  subtitle?: string;
  results: ResultItem[];
}

export default function HealthResult({
  title,
  subtitle,
  results,
}: HealthResultProps) {
  return (
    <section className="py-5">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2>{title}</h2>

          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              {subtitle}
            </p>
          )}
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {results.map((item) => (
            <div
              key={item.number}
              className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Number */}
              <div className="text-6xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-emerald-100">
                {item.number}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-[#003e95]">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                {item.description}
              </p>

              {/* Accent */}
              <div className="mt-8 h-1 w-12 rounded-full bg-[#003e95] transition-all duration-300 group-hover:w-24" />

              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/5 blur-3xl transition-all duration-300 group-hover:bg-emerald-500/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}