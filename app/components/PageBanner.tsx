
import Image from "next/image";

interface PageBannerProps {
  image: string;
  title: string;
  description: string;
}

export default function PageBanner({
  image,
  title,
  description,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[500px] md:h-[650px]">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-4xl px-6 text-center text-white">
            <h1>{title}</h1>

            <p className="mt-6 text-lg text-white/90 md:text-xl">
              {description}
            </p>

            {/* Trust Line */}
            <p className="mt-6 text-sm font-bold leading-7 tracking-wide text-white md:text-base">
              Salesforce Partner
              <span className="mx-2 text-white/70">|</span>
              Navigator Expert
              <span className="mx-2 text-white/70">|</span>
              ISO 27001 Certified
              <span className="mx-2 text-white/70">|</span>
              Rated 5.0 on Clutch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

