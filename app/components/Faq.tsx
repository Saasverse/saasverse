export default function Faq() {
  const faqs = [
    {
      question: 'What Salesforce services does Saasverse provide?',
      answer:
        'We offer Salesforce consulting, implementation, customization, integration, migration, support, and managed services tailored to your business requirements.',
    },
    {
      question: 'Do you provide Salesforce support after deployment?',
      answer:
        'Yes. We provide ongoing support, maintenance, optimization, and enhancement services to ensure your Salesforce ecosystem continues to deliver maximum value.',
    },
    {
      question: 'Can Saasverse help with Salesforce data migration?',
      answer:
        'Absolutely. Our team specializes in secure and seamless migration from legacy systems, spreadsheets, and third-party CRMs into Salesforce.',
    },
    {
      question: 'Do you offer cloud and digital transformation services?',
      answer:
        'Yes. We help businesses modernize operations through cloud adoption, workflow automation, integration solutions, and digital transformation strategies.',
    },
    {
      question: 'How can I get started with Saasverse?',
      answer:
        "Simply contact our team through the website. We'll schedule a consultation to understand your requirements and recommend the best solution.",
    },
    {
      question: 'Which industries do you work with?',
      answer:
        'We work with organizations across healthcare, finance, retail, manufacturing, technology, education, and many other industries.',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            FAQ
          </span>

          <h3 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Frequently Asked Questions
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Everything you need to know about our Salesforce, Cloud and Digital
            Transformation services.
          </p>
        </div>

        {/* FAQ */}
        <div
          className="space-y-4"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
              itemProp="mainEntity"
              itemScope
              itemType="https://schema.org/Question"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-6">
                <span
                  itemProp="name"
                  className="pr-8 text-lg font-semibold text-slate-900"
                >
                  {faq.question}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-open:bg-blue-50">
                  <svg
                    className="h-5 w-5 text-blue-600 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </summary>

              <div
                itemProp="acceptedAnswer"
                itemScope
                itemType="https://schema.org/Answer"
                className="border-t border-slate-100 px-6 py-6"
              >
                <p itemProp="text" className="leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
