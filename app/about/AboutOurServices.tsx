const services = [
  {
    title: "Salesforce Implementation and Customization",
    description:
      "We design and deploy Salesforce solutions that align with your business processes, ensuring seamless integration that enhances efficiency and effectiveness.",
  },
  {
    title: "App Development",
    description:
      "Our development team creates robust, scalable, and user-friendly applications tailored to your business requirements.",
  },
  {
    title: "Data Integration",
    description:
      "We facilitate smooth and secure data integration, ensuring your systems communicate effectively and provide accurate, real-time information.",
  },
  {
    title: "Automation",
    description:
      "By automating repetitive tasks, we help you save time and reduce errors, allowing your team to focus on strategic activities.",
  },
];

export default function AboutOurServices() {
  return (
    <section id="servicess" className="py-16 lg:py-10">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="mb-12 text-center">
          Our Services
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 h-3 w-16 rounded-full bg-[#006b95]" />

              <h3 className="mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}