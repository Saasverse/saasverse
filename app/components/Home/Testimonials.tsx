const testimonials = [
  {
    name: 'Michael Anderson',
    role: 'VP Technology',
    company: 'Enterprise Solutions',
    initials: 'MA',
    review:
      'Saasverse transformed our Salesforce ecosystem with exceptional expertise. Their team delivered scalable solutions that significantly improved operational efficiency.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Digital Transformation Lead',
    company: 'Global Retail Group',
    initials: 'SJ',
    review:
      'The professionalism and technical excellence demonstrated by Saasverse exceeded our expectations. Their consultants became a true extension of our internal team.',
  },
  {
    name: 'David Miller',
    role: 'Head of IT',
    company: 'Fintech Innovations',
    initials: 'DM',
    review:
      'From planning to deployment, the entire engagement was seamless. Their cloud and Salesforce expertise helped us accelerate growth while reducing costs.',
  },
];
 
export default function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
 
        {/* Header */}
        <div className="mb-14 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#003E95]">
              Client Stories
            </p>
            <h2 className="text-slate-900">What Our Clients Say</h2>
          </div>
          <a
            href="https://clutch.co/profile/saasverse"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-semibold text-slate-400 underline-offset-2 hover:text-[#003E95] hover:underline"
          >
            View all on Clutch →
          </a>
        </div>
 
        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50 p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="mb-5 flex gap-0.5 text-amber-400">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
 
              {/* Review */}
              <p className="flex-1  leading-7 text-slate-600">{item.review}</p>
 
              {/* Reviewer */}
              <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                  style={{ background: '#003E95' }}
                >
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role} · {item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}