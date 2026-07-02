'use client';

import {
  useEffect,
  useState,
} from 'react';

import Link from 'next/link';

export default function BlogSlider() {
  const [posts, setPosts] = useState<any[]>([]);
  const [visibleCards, setVisibleCards] =
    useState(3);

  const [index, setIndex] = useState(3);
  const [transition, setTransition] =
    useState(true);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth <= 768) {
        setVisibleCards(1);
      } else if (
        window.innerWidth <= 1024
      ) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateCards();

    window.addEventListener(
      'resize',
      updateCards
    );

    return () =>
      window.removeEventListener(
        'resize',
        updateCards
      );
  }, []);

  useEffect(() => {
    fetch(
      'http://localhost/saasverse-backend/wp-json/wp/v2/posts?_embed'
    )
      .then((res) => res.json())
      .then((data) =>
        setPosts(data)
      );
  }, []);

  const extendedPosts =
    posts.length > 0
      ? [
          ...posts.slice(-visibleCards),
          ...posts,
          ...posts.slice(
            0,
            visibleCards
          ),
        ]
      : [];

  const nextSlide = () =>
    setIndex((prev) => prev + 1);

  const prevSlide = () =>
    setIndex((prev) => prev - 1);

  useEffect(() => {
    const interval = setInterval(
      nextSlide,
      3000
    );

    return () =>
      clearInterval(interval);
  }, []);

  useEffect(() => {
    setIndex(visibleCards);
  }, [visibleCards]);

  useEffect(() => {
    if (!posts.length) return;

    if (
      index >=
      extendedPosts.length -
        visibleCards
    ) {
      setTimeout(() => {
        setTransition(false);
        setIndex(visibleCards);
      }, 400);
    }

    if (index <= 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(posts.length);
      }, 400);
    }
  }, [
    index,
    posts,
    visibleCards,
    extendedPosts.length,
  ]);

  if (!posts.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative py-16">
      <button
        className="absolute left-0 top-1/2 z-10 rounded bg-black px-4 py-2 text-white"
        onClick={prevSlide}
      >
        ‹
      </button>

      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${
              index *
              (100 / visibleCards)
            }%)`,
            transition: transition
              ? '0.4s ease'
              : 'none',
          }}
          onTransitionEnd={() =>
            setTransition(true)
          }
        >
          {extendedPosts.map(
            (post, i) => {
              const image =
                post._embedded?.[
                  'wp:featuredmedia'
                ]?.[0]?.source_url;

              return (
                <div
                  key={i}
                  className="w-full shrink-0 px-3 md:w-1/2 lg:w-1/3"
                >
                  <div className="rounded-lg border bg-white">
                    {image && (
                      <img
                        src={image}
                        alt="blog"
                        className="h-56 w-full object-cover"
                      />
                    )}

                    <div className="p-4">
                      <h3
                        dangerouslySetInnerHTML={{
                          __html:
                            post.title
                              .rendered,
                        }}
                      />

                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            post.excerpt
                              .rendered,
                        }}
                      />

                      <Link
                        href={`/blogs/${post.slug}`}
                        className="mt-4 inline-block rounded bg-black px-4 py-2 text-white"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>

      <button
        className="absolute right-0 top-1/2 z-10 rounded bg-black px-4 py-2 text-white"
        onClick={nextSlide}
      >
        ›
      </button>
    </div>
  );
}