import Image from "next/image";

export default function TrainingService() {
  return (
    <section id="training-service" className="py-16">
      <div className="cnt">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="relative inline-block text-3xl font-bold md:text-4xl">
            Salesforce Training Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* End User Training */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-6 flex flex-col items-center text-center">
              <Image
                src="/images/training/trainingicon2.png"
                alt="End User Training"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-lg font-medium text-gray-600">
                Salesforce
              </h3>
              <h2 className="mt-1 text-2xl font-bold">
                End User Training
              </h2>
            </div>

            <p className="leading-7 text-gray-600">
              In our experience, investing in effective end user training is one
              of the most important factors for any successful Salesforce
              implementation and a major step toward achieving high adoption
              rates.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              We tailor Salesforce training to your business requirements,
              system configuration, and the specific needs of your sales,
              marketing, and customer service teams.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              We identify your objectives and desired outcomes, then create a
              customized training plan to ensure your team gains maximum value
              from Salesforce.
            </p>
          </div>

          {/* Corporate Training */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-6 flex flex-col items-center text-center">
              <Image
                src="/images/training/trainingicon.png"
                alt="Corporate Training"
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-lg font-medium text-gray-600">
                Salesforce
              </h3>
              <h2 className="mt-1 text-2xl font-bold">
                Corporate Training
              </h2>
            </div>

            <p className="leading-7 text-gray-600">
              A committed management team is key to the successful
              implementation of any CRM system. This training helps managers
              understand Salesforce and its implementation process.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              We provide best-practice guidance and training on Salesforce
              tools, workflows, and KPIs that help managers become more
              effective in their roles.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Advanced reporting and dashboard training enables leaders to gain
              deeper business insights, manage teams efficiently, improve
              performance, and drive better results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}