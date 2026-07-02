import Image from "next/image";

interface HealthFutureProps {
  badge: string;
  title: string;
  subtitle: string;
  points: string[];
  image: string;
  imageAlt?: string;
}

export default function HealthFuture({
  badge,
  title,
  subtitle,
  points,
  image,
  imageAlt,
}: HealthFutureProps) {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#003e95] mb-4">
              {badge}
            </span>

            <h2 className="mb-6">
              {title}
            </h2>

            <p className="mb-6 text-lg font-medium leading-relaxed text-[#003e95]">
              {subtitle}
            </p>

            <div className="space-y-5">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#003e95]" />
                  <p className="leading-relaxed text-gray-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden">
              <Image
                src={image}
                alt={imageAlt || title}
                width={700}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}