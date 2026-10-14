
import Image from "next/image";
import type { ReactNode } from "react";

interface SolutionItem {
  title: string;
  description: ReactNode;
}

interface HealthSolutionProps {
  title: string;
  highlight: string;
  description: ReactNode;
  image: string;
  imageAlt?: string;
  solutions: SolutionItem[];
}

export default function HealthSolution({
  title,
  highlight,
  description,
  image,
  imageAlt,
  solutions,
}: HealthSolutionProps) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <Image
              src={image}
              alt={imageAlt || highlight}
              width={800}
              height={600}
              className="h-auto w-full rounded-[24px] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2>
              {title}
              <span className="block text-[#003e95]">
                {highlight}
              </span>
            </h2>

            <div className="mt-6 leading-relaxed text-slate-600">
              {description}
            </div>

            <div className="mt-1 space-y-1">
              {solutions.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-3 shadow-sm"
                >
                  <h3 className="mb-1 text-lg font-semibold text-[#003e95]">
                    {item.title}
                  </h3>

                  <div className="leading-relaxed text-slate-600">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

