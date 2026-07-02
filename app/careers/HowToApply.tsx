export default function HowToApply() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
          <h2 className="mb-6 text-center">
            How to Apply
          </h2>

          <p className="text-center text-gray-600 leading-8">
            If you are passionate about technology and eager to make a
            difference, we would love to hear from you. To apply for any of the
            positions listed above, please send your resume and a cover letter
            to{" "}
            <a
              href="mailto:hr@saasverse.in"
              className="font-medium text-[#006b95] hover:underline"
            >
              hr@saasverse.in
            </a>
            . In your cover letter, please specify the position you are
            applying for and explain why you would be a great fit for our team.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="mailto:hr@saasverse.in"
              className="inline-flex rounded-xl bg-[#006b95] px-5 py-3 text-white transition hover:opacity-90"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}