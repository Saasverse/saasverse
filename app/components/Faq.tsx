export default function Faq() {
  const faqs = [
    {
      question: 'What Salesforce services does Saasverse offer?',
      answer:
        'Consulting, implementation, integration, custom development, AppExchange app development, data migration and managed services, across Sales, Service, Marketing, Health and Financial Services Cloud.',
    },
    {
      question: 'Do you support Salesforce after go-live?',
      answer:
        ' Yes. Our team handles admin requests, fixes, Salesforce release updates and new features, so your org keeps improving instead of slowly breaking.',
    },
    {
      question: 'Can you move our data into Salesforce?',
      answer:
        ' Yes. We move data from old CRMs, spreadsheets and ERPs into Salesforce, with field mapping, duplicate checks and validation before go-live.',
    },
    {
      question: 'Is Saasverse a certified Salesforce partner?',
      answer:
        'Yes. Saasverse is a Salesforce Partner with Navigator Expert status, and our 50+ certified experts work across Sales, Service, Marketing and Health Cloud.',
    },
    {
      question: ' How do we get started?',
      answer:
        "Book a free consultation using the form below. We sign an NDA if you need one, look at your goals and current setup, and reply within 24 hours with next steps.",
    },
    {
      question: 'Which industries do you work with?',
      answer:
        'Healthcare, financial services, banking, retail, manufacturing, technology and education. We also implement industry clouds such as Health Cloud, Financial Services Cloud and Nonprofit Cloud.',
    },
    {
      question: 'How much does a Salesforce project cost?',
      answer:
        'The cost depends on your requirements, integrations and timeline. After a free consultation we send a written proposal with scope, timeline and cost, so you know the price before work starts.',
    },
    {
      question: 'Do you work with companies in the US and UAE?',
      answer:
        'Yes. We have offices in Boston and Jaipur and have worked with 40+ clients in 19 countries, including the US and the UAE. An NDA is in place from day one.',
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

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
           Salesforce Consulting FAQs
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
         Answers to the questions we get asked most.
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
                <h3
                  itemProp="name"
                  className="pr-8 text-lg font-semibold text-slate-900"
                >
                  {faq.question}
                </h3>

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
