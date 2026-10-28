
import type { ReactNode } from "react";

interface Benefit {
  title: string;
  description: ReactNode;
}

interface BenefitsSectionProps {
  heading: string;
  subheading?: string;
  benefits: Benefit[];
}

const SalesforceServiceReuseable = ({
  heading,
  subheading,
  benefits,
}: BenefitsSectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center">
          {heading}
        </h2>

        {subheading && (
          <p className="mx-auto mb-10 max-w-3xl text-center leading-7 text-gray-600">
            {subheading}
          </p>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 p-6 shadow-sm"
            >
              <h3 className="mb-3 text-[#006b95]">
                {item.title}
              </h3>

              <div className="text-gray-600 leading-7">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesforceServiceReuseable;

