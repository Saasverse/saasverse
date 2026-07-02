import Image from "next/image";

export default function Our() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* Who We Are - Image Top */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative h-72 w-full">
              <Image
                src="/images/websiteimages/6.webp"
                alt="Who We Are"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="p-8">
            <h2 className="mb-5 text-gray">
                Who We Are
              </h2>

              <p className="leading-8 text-gray-600">
                Saasverse is a team of passionate and highly skilled
                professionals committed to transforming businesses through
                cutting-edge technology. We specialize in Salesforce
                implementation and customization, app development, data
                integration, and automation. Our deep industry knowledge and
                technical expertise enable us to craft tailored solutions that
                meet the unique needs of each client.
              </p>
            </div>
          </div>

          {/* Our Approach - Image Bottom */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex h-full flex-col">
              <div className="p-8">
               <h2 className="mb-5 text-gray-900">
                  Our Approach
                </h2>

                <p className="leading-8 text-gray-600">
                  We believe in a personalized approach to business solutions.
                  Understanding that every business has its own set of
                  challenges and goals, we take the time to thoroughly
                  understand your specific needs. This allows us to deliver
                  bespoke solutions that not only address your current pain
                  points but also position your business for future success.
                </p>
              </div>

              <div className="relative mt-auto h-72 w-full">
                <Image
                  src="/images/websiteimages/4.webp"
                  alt="Our Approach"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}