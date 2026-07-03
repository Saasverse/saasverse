type Job = {
  id: number;
  title: string;
  description: string;
  experience: string;
  location: string;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Salesforce Service Cloud Consultant",
    description:
      "We are looking for an experienced Salesforce Service Cloud Consultant to design, implement, and optimize Service Cloud solutions. The ideal candidate should have strong knowledge of case management, Omni-Channel, Knowledge Base, Flows, and Service Console.",
    experience: "3+ years",
    location: "Jaipur / Remote",
  },
  {
    id: 2,
    title: "Salesforce Sales Cloud Consultant",
    description:
      "Join our team as a Salesforce Sales Cloud Consultant to deliver scalable CRM solutions. You will work on lead management, opportunity management, automation, reports, dashboards, and Sales Cloud customization.",
    experience: "3+ years",
    location: "Jaipur / Remote",
  },
];

export default function JobOpenings() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Current Job Openings
          </h2>

          <p className="text-gray-600">
            Explore exciting career opportunities and become part of the
            SaaSverse team.
          </p>
        </div>

        <div className="grid gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                {job.title}
              </h3>

              <div className="mb-5 flex flex-wrap gap-3">
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
                  Experience: {job.experience}
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
                  Location: {job.location}
                </span>
              </div>

              <p className="mb-6 text-gray-600">
                {job.description}
              </p>

              <a
                href={`mailto:hr@saasverse.in?subject=Application for ${encodeURIComponent(
                  job.title
                )}`}
                className="inline-flex rounded-lg bg-[#006b95] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}