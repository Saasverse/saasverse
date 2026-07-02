export default function WhyChooseUs() {
  const items = [
    {
      title: "Why Choose Saasverse?",
      description:
        "At Saasverse, we are not just service providers; we are your partners in growth. Our commitment to excellence is reflected in every project we undertake. We stay abreast of the latest trends and best practices to ensure that our solutions are both innovative and effective. Our design philosophy emphasizes user experience and brand consistency, creating interfaces that are visually appealing, intuitive, and adaptable across platforms.",
    },
    {
      title: "Ongoing Support and Training",
      description:
        "We understand that the journey doesn’t end with implementation. Our team provides continuous support and training to ensure that you maximize the value of your Salesforce investment. We are here to help you navigate challenges and keep your systems running smoothly.",
    },
    {
      title: "Let's Thrive Together",
      description:
        "At Saasverse, your success is our success. We are dedicated to helping your business thrive in the dynamic Salesforce ecosystem. Contact us today to discover how our solutions can propel your business to new heights.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 h-1.5 w-14 rounded-full bg-[#006b95]" />

              <h2 className="mb-4">
                {index === 0 ? (
                  <>
                    Why Choose{" "}
                    <span className="text-[#006b95]">Saasverse?</span>
                  </>
                ) : (
                  item.title
                )}
              </h2>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}