const reasons = [
  {
    title: "Innovation and Excellence",
    description:
      "Be a part of a team that consistently pushes the boundaries of technology to deliver cutting-edge solutions.",
  },
  {
    title: "Professional Development",
    description:
      "We invest in our employees' growth through continuous learning opportunities, training programs, and career advancement paths.",
  },
  {
    title: "Collaborative Culture",
    description:
      "Work alongside talented professionals in a supportive and collaborative environment that encourages creativity and innovation.",
  },
  {
    title: "Work-Life Balance",
    description:
      "We understand the importance of work-life balance and offer flexible working arrangements to help you maintain it.",
  },
];

export default function WhyWork() {
  return (
    <section id="servicess" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center">
          <h2 className="mb-4">
            Why Work With Us?
          </h2>

          <p className="mx-auto max-w-4xl text-gray-600">
            At Saasverse, we offer more than just a job—we offer a career filled
            with opportunities for growth, learning, and advancement. Here’s
            why you should consider joining our team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 h-1.5 w-14 rounded-full bg-[#006b95]" />

              <h3 className="mb-4">
                {reason.title}
              </h3>

              <p className="text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}