
import React from "react";

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  heading: string;
  benefits: Benefit[];
}

const SalesforceServiceReuseable = ({
  heading,
  benefits,
}: BenefitsSectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center ">
          {heading}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 p-6 shadow-sm"
            >
              <h3 className="mb-3 text-[#006b95]">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesforceServiceReuseable;