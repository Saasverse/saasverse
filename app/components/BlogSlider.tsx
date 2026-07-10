"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const blogs = [
  {
    id: 1,
    slug: "salesforce-implementation-blog",
    category: "Salesforce",
    title: "Salesforce Implementation: Proven Strategies, Key Steps & Best Practices",
    excerpt:
      "Salesforce implementation is capable of leading to an average revenue growth of 37% and productivity gain of 44%.",
    image: "/images/blogs/4.jpg",
  },
  {
    id: 2,
    slug: "salesforce-sales-cloud-blog",
    category: "Salesforce",
    title: "Explore Salesforce Sales Cloud: Features, Benefits & Use Cases",
    excerpt:
      "Salesforce Sales Cloud helps sales teams manage leads, customer interactions, and close deals faster.",
    image: "/images/blogs/5.jpg",
  },
  {
    id: 3,
    slug: "wordpress-blog",
    category: "WordPress",
    title: "How to Build a Scalable WordPress Site for Your Business",
    excerpt:
      "Learn how to build a scalable WordPress website that grows with your business.",
    image: "/images/blogs/2.jpg",
  },
  {
    id: 4,
    slug: "magento-blog",
    category: "Magento",
    title: "How Expert Magento Developers Can Transform Your Online Store",
    excerpt:
      "Magento offers unmatched flexibility and customization for eCommerce businesses.",
    image: "/images/blogs/3.jpg",
  },
];

export default function BlogSlider() {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f3] py-14">
      {/* faint corner glow for depth, not decoration for its own sake */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#003e95]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#003e95]">
            <span className="h-px w-8 bg-[#003e95]" />
            Insights
            <span className="h-px w-8 bg-[#003e95]" />
          </span>
          <h2 className="tracking-tight md:text-5xl">
            Related Blogs
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-500">
            Perspectives and playbooks from our team, on the platforms that
            power modern commerce.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation={{
            prevEl: ".blog-prev",
            nextEl: ".blog-next",
          }}
          pagination={{
            el: ".blog-pagination",
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={28}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-4"
        >
      {blogs.map((blog) => (
  <SwiperSlide key={blog.id} className="h-auto">
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-[#003e95]/40 hover:shadow-[0_24px_48px_-16px_rgba(10,31,68,0.25)]">
      <div className="relative h-56 shrink-0 overflow-hidden bg-slate-100">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/70 via-[#0a1f44]/0 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#003e95] shadow-sm backdrop-blur-sm">
          {blog.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="mb-3 h-[56px]  text-lg font-semibold leading-snug text-[#0a1f44] line-clamp-2">
          {blog.title}
        </h3>

        <p className="mb-6 h-[72px] text-sm leading-relaxed text-slate-500 line-clamp-3">
          {blog.excerpt}
        </p>

        <div className="mt-auto">
          <Link
            href={`/blogs/${blog.slug}`}
            className="group/link inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#0a1f44] transition-colors duration-300 hover:text-[#003e95]"
          >
            Read More
            <span className="relative flex h-4 w-5 items-center overflow-hidden">
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/link:translate-x-1">
                <path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
          <span className="mt-1 block h-px w-0 bg-[#003e95] transition-all duration-300 group-hover:w-10" />
        </div>
      </div>
    </article>
  </SwiperSlide>
))}
        </Swiper>

        {/* custom controls */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            aria-label="Previous slide"
            className="blog-prev flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-[#0a1f44] transition-all duration-300 hover:border-[#003e95] hover:bg-[#0a1f44] hover:text-[#003e95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003e95]"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path
                d="M12.5 15 7 10l5.5-5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="blog-pagination flex items-center gap-2 [&_.swiper-pagination-bullet]:h-[7px] [&_.swiper-pagination-bullet]:w-[7px] [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-slate-300 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet-active]:w-6 [&_.swiper-pagination-bullet-active]:rounded-full [&_.swiper-pagination-bullet-active]:bg-[#003e95]" />

          <button
            aria-label="Next slide"
            className="blog-next flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-[#0a1f44] transition-all duration-300 hover:border-[#003e95] hover:bg-[#0a1f44] hover:text-[#003e95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003e95]"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path
                d="M7.5 15 13 10 7.5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}