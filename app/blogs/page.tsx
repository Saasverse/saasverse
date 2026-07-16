import Link from 'next/link';

import PageBanner from '../components/PageBanner';
import CTASection from '../components/Home/CTASection';
import Image from 'next/image';
import BlogSlider from '../components/BlogSlider';
import { Metadata } from 'next';

const blogs = [
  {
    id: 1,
    slug: 'salesforce-implementation-blog',
    title:
      'Salesforce Implementation: Proven Strategies, Key Steps & Best Practices',
    excerpt:
      'Salesforce implementation is capable of leading to an average revenue growth of 37% and productivity gain of 44%.',
    image: '/images/blogs/4.jpg',
  },
  {
    id: 2,
    slug: 'salesforce-sales-cloud-blog',
    title: 'Explore Salesforce Sales Cloud: Features, Benefits & Use Cases',
    excerpt:
      'Salesforce Sales Cloud presents a set of tools specifically designed for sales teams to effectively manage leads, monitor customer interactions, and close sales more swiftly.',
    image: '/images/blogs/5.jpg',
  },
  {
    id: 3,
    slug: 'wordpress-blog',
    title: 'How to Build a Scalable WordPress Site for Your Business',
    excerpt:
      'Scalable Wordpress Site handles more visitors, can handle different types of content, and also new features and updates.',
    image: '/images/blogs/2.jpg',
  },
  {
    id: 4,
    slug: 'magento-blog',
    title: 'How Expert Magento Developers Can Transform Your Online Store ',
    excerpt:
      'Our Magento developers offer a wide range of customization options because Magento development stands out from other e-commerce platforms owing to its many customization options.',
    image: '/images/blogs/3.jpg',
  },
  {
    id: 5,
    slug: 'salesforce-crm-blog',
    title: 'Top Benefits of Using Salesforce CRM for Your Business',
    excerpt:
      'Let us discuss this subject and all the benefits of using Salesforce CRM for your business.',
    image: '/images/blogs/1.jpg',
  },
  
];


export const metadata: Metadata = {
  title: "Salesforce and Business Tech Blog | Saasverse",
  description:
    "Explore Saasverse's blog for Salesforce CRM, implementation tips and business tech insights. Read more.",
};
export default function BlogPage() {
  return (
    <div>
      <PageBanner
        image="/images/banner/blog-banner.jpg"
        title="Blogs"
        description="Explore expert insights, practical strategies, and actionable tips to drive business growth and innovation"
      />

      <div className="py-16">
        <h2 className="mb-10 text-center text-4xl font-bold">Latest Blogs</h2>

        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow"
            >
              <div className="relative h-60 w-full bg-gray-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-3 min-h-[64px] text-xl font-semibold">
                  {blog.title}
                </h3>

                <p className="flex-1 min-h-[120px] text-gray-600">
                  {blog.excerpt}
                </p>

                <Link
                  href={`/blogs/${blog.slug}`}
                  className="mt-4 block w-full rounded bg-[#003e95] px-4 py-3 text-center text-white transition hover:bg-black"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BlogSlider/>

      <CTASection />
    </div>
  );
}
