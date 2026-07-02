import Image from "next/image";

interface LogoGridProps {
  title: string;
  subtitle?: string;
  logos: string[];
  className?: string;
}

const LogoGrid = ({
  title,
  subtitle,
  logos,
  className = "",
}: LogoGridProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="cnt">
        {subtitle && (
          <p className="mb-3 text-center text-sm font-medium text-gray-500">
            {subtitle}
          </p>
        )}

        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          {title}
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex h-28 items-center justify-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <Image
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                width={180}
                height={80}
                className="h-auto max-h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;