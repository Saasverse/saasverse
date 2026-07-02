interface HighlightItem {
  no: string;
  title: string;
  desc: string;
}

interface HealthImplementationProps {
  badge: string;
  title: string;
  highlight: string;
  highlights: HighlightItem[];
}

export default function HealthImplementation({
  badge,
  title,
  highlight,
  highlights,
}: HealthImplementationProps) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            {badge}
          </span>

          <h2 className="mt-6">
            {title}{" "}
            <span className="text-[#003e95]">
              {highlight}
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.no}
              className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <span className="text-6xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-cyan-100">
                {item.no}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                {item.desc}
              </p>

              <div className="mt-8 h-1 w-12 rounded-full bg-[#003e95] transition-all duration-300 group-hover:w-24" />

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-3xl transition-all duration-300 group-hover:bg-cyan-500/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}