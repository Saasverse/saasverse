type Job = {
  id: number;
  title: string;
  description: string;
  experience: string;
  location: string;
};

async function getJobs(): Promise<Job[]> {
  try {
    const res = await fetch(
      "https://saasverse.in/saasadmin/wp-json/wp/v2/job_openings",
      {
        next: {
          revalidate: 300, // 5 min cache
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch jobs");
    }

    const posts = await res.json();

    return posts.map((post: any) => {
      const job = post.acf?.job_opening;

      return {
        id: post.id,
        title: job?.job_title || "",
        description: job?.job_description || "",
        experience: `${job?.years_of_experience || 0}+ years`,
        location: job?.location || "",
      };
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function JobOpenings() {
  const jobs = await getJobs();

  if (!jobs.length) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <h2 className="mb-4">Current Job Openings</h2>
          <p>No job openings at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center">
          <h2 className="mb-4">Current Job Openings</h2>
          <p className="text-gray-600">
            Explore opportunities and become part of our growing team.
          </p>
        </div>

        <div className="grid gap-6">
          {jobs.map((job) => (
           <div
  key={job.id}
  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
>
  <h3 className="mb-4">{job.title}</h3>

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
    className="inline-flex rounded-lg bg-[#006b95] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
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