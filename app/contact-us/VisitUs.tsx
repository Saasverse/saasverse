export default function VisitUs() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-16">
          
          {/* Glow */}
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#003e95]">
              Visit Us
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Meet Our Team In Person
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
              We welcome you to visit our office and explore how
              <span className="font-semibold text-slate-900">
                {" "}SAASVERSE
              </span>{" "}
              can help your business grow through innovative technology
              solutions. Please schedule an appointment in advance through any
              of the contact methods above.
            </p>

            <div className="mt-8 flex justify-center">
              <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#003e95] to-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}