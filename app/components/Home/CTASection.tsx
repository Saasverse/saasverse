import StatsCounter from './StatsCounter';

export default function CTASection() {
  const stats = {
    delivered_projects: 120,
    no_of_certificate: 50,
    years_of_experience: 5,
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#0A0B10' }}
    >
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:py-20">
        <StatsCounter
          projects={stats.delivered_projects}
          experts={stats.no_of_certificate}
          years={stats.years_of_experience}
        />
      </div>
    </section>
  );
}