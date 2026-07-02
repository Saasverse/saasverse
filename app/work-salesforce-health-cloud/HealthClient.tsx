interface ChallengeSectionProps {
  badge?: string;
  title: string;
  highlight: string;
  paragraphs: string[];
}

export default function HealthClient({
  badge = "Case Study",
  title,
  highlight,
  paragraphs,
}: ChallengeSectionProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-12">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              {badge}
            </span>

            <h2 className="mt-6 tracking-tight">
              {title}{" "}
              <span className="text-[#003e95]">{highlight}</span>
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}