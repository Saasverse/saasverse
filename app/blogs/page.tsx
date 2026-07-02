'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import PageBanner from '../components/PageBanner';
import CTASection from '../components/Home/CTASection';

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [allPosts, setAllPosts] = useState<any[]>([]);

  const visibleCards = 3;
  const [index, setIndex] = useState(visibleCards);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    fetch(
      'http://localhost/saasverse-backend/wp-json/wp/v2/posts?_embed&per_page=20'
    )
      .then((res) => res.json())
      .then((data) => {
        setAllPosts(data);
        setPosts(data.slice(0, 6));
      });
  }, []);

  const extendedPosts = [
    ...allPosts.slice(-visibleCards),
    ...allPosts,
    ...allPosts.slice(0, visibleCards),
  ];

  useEffect(() => {
    if (!allPosts.length) return;

    if (index === extendedPosts.length - visibleCards) {
      setTimeout(() => {
        setTransition(false);
        setIndex(visibleCards);
      }, 400);
    }

    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(allPosts.length);
      }, 400);
    }
  }, [index, allPosts.length, extendedPosts.length]);

  const nextSlide = () => setIndex((prev) => prev + 1);

  const prevSlide = () => setIndex((prev) => prev - 1);

  return (
    <div>
      <PageBanner
        image="/images/banner/blog-banner.jpg"
        title="Blogs"
        description="Explore expert insights, practical strategies, and actionable tips to drive business growth and innovation"
      />

      {/* Latest Blogs */}
      <div className="py-16">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Latest Blogs
        </h2>

        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const image =
              post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

            return (
              <div
                key={post.id}
                className="flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow"
              >
                {image && (
                  <img
                    src={image}
                    alt={post.title.rendered}
                    className="h-60 w-full object-cover"
                  />
                )}

                <div className="flex flex-1 flex-col p-5">
                  <h3
                    className="mb-3 min-h-[64px] text-xl font-semibold"
                    dangerouslySetInnerHTML={{
                      __html: post.title.rendered,
                    }}
                  />

                  <div
                    className="flex-1 min-h-[120px]"
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered,
                    }}
                  />

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="mt-4 block w-full rounded bg-[#003e95] px-4 py-3 text-center text-white transition hover:bg-gray-800"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Related Posts */}
      <div className="py-16">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Related Posts
        </h2>

        <div className="relative mx-auto max-w-7xl">
          <button
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded bg-[#003e95] px-4 py-2 text-white"
            onClick={prevSlide}
          >
            ‹
          </button>

          <div className="overflow-hidden">
            <div
              className="flex items-stretch"
              style={{
                transform: `translateX(-${
                  index * (100 / visibleCards)
                }%)`,
                transition: transition ? '0.4s ease' : 'none',
              }}
              onTransitionEnd={() => setTransition(true)}
            >
              {extendedPosts.map((post, i) => {
                const image =
                  post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

                return (
                  <div
                    key={i}
                    className="flex w-1/3 shrink-0 px-3"
                  >
                    <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border bg-white shadow">
                      {image && (
                        <img
                          src={image}
                          alt={post.title.rendered}
                          className="h-56 w-full object-cover"
                        />
                      )}

                      <div className="flex flex-1 flex-col p-4">
                        <h3
                          className="mb-3 min-h-[64px] text-xl font-semibold"
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        />

                        <div
                          className="flex-1 min-h-[120px]"
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                          }}
                        />

                        <Link
                          href={`/blogs/${post.slug}`}
                          className="mt-4 block w-full rounded bg-[#003e95] px-4 py-3 text-center text-white transition hover:bg-gray-800"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded bg-[#003e95] px-4 py-2 text-white"
            onClick={nextSlide}
          >
            ›
          </button>
        </div>
      </div>

      <CTASection/>
    </div>
  );
}