import Link from 'next/link';

import PageBanner from '../components/PageBanner';
import CTASection from '../components/Home/CTASection';
import Image from 'next/image';
import BlogSlider from '../components/BlogSlider';
import { Metadata } from 'next';

const blogs = [
    {
    id: 1,
    slug: 'salesforce-release-management',
    title: 'Salesforce Release Management: A Simple Process for Safe Deployments',
    excerpt:
      'Salesforce release management is the way you move changes from a sandbox to production in planned, tested batches instead of one edit at a time. ',
    image: '/images/blogs/salesforce-release-management-process.webp',
  },
    {
    id: 2,
    slug: 'salesforce-storage-limits',
    title: 'Salesforce Storage Limits: How Data and File Storage Work',
    excerpt:
      'Salesforce storage limits come in two parts. Data storage holds your records and starts at 10 GB per org in most paid editions, plus a per-user amount.',
    image: '/images/blogs/salesforce-storage-limits.webp',
  },
    {
    id: 3,
    slug: 'salesforce-sandbox',
    title: 'Salesforce Sandbox: Types, Limits and How to Use Them',
    excerpt:
      'What a Salesforce sandbox is, the 4 sandbox types and their limits, which editions include them, how refresh works and how to keep test data safe.',
    image: '/images/blogs/salesforce-sandbox-types-guide.webp',
  },
    {
    id: 4,
    slug: 'hubspot-vs-salesforce',
    title: 'HubSpot vs Salesforce : Which CRM Fits Your Business?',
    excerpt:
      'HubSpot suits teams that want one easy system for marketing and sales with little admin work.',
    image: '/images/blogs/hubspot-vs-salesforce-crm-comparison.jpg',
  },
    {
    id: 5,
    slug: 'salesforce-case-management-blog',
    title: 'Salesforce Case Management: How It Works and How to Set It Up',
    excerpt:
      'Salesforce case management is how Service Cloud records every customer question or problem as a case. ',
    image: '/images/blogs/salesforce-case-management-guide.jpg',
  },
    {
    id: 6,
    slug: 'salesforce-integration-blog',
    title: 'Salesforce Integration in 2026: Types, Tools, Patterns and Cost',
    excerpt:
      'Salesforce integration means connecting Salesforce to your other systems, such as your ERP, website, marketing tools or data warehouse, so data moves between them automatically. ',
    image: '/images/blogs/salesforce-integration-guide-2026.webp',
  },
  {
    id: 7,
    slug: 'hire-salesforce-consultant-blog',
    title: 'How to Hire a Salesforce Consultant in India: Cost, Models and What to Check',
    excerpt:
      'Hiring a Salesforce consultant in India usually costs far less than hiring in the US, but how much you save depends on how you hire.',
    image: '/images/blogs/how-to-hire-salesforce-consultant-india-cost.webp',
  },
 

    {
    id: 8,
    slug: 'salesforce-consulting-blog',
    title: 'What Is Salesforce Consulting? A Complete Guide (2026)',
    excerpt:'Salesforce consulting is the professional service of helping businesses plan, implement, customize, integrate, and optimize Salesforce so it actually solves their sales, service, and marketing problems.',
    image: '/images/blogs/Feature.png',
  },
  {
    id: 9,
    slug: 'salesforce-implementation-blog',
    title:
      'Salesforce Implementation: Proven Strategies, Key Steps & Best Practices',
    excerpt:
      'Salesforce implementation is capable of leading to an average revenue growth of 37% and productivity gain of 44%.',
    image: '/images/blogs/4.jpg',
  },
  {
    id: 10,
    slug: 'salesforce-sales-cloud-blog',
    title: 'Explore Salesforce Sales Cloud: Features, Benefits & Use Cases',
    excerpt:
      'Salesforce Sales Cloud presents a set of tools specifically designed for sales teams to effectively manage leads, monitor customer interactions, and close sales more swiftly.',
    image: '/images/blogs/5.jpg',
  },
  {
    id: 11,
    slug: 'wordpress-blog',
    title: 'How to Build a Scalable WordPress Site for Your Business',
    excerpt:
      'Scalable Wordpress Site handles more visitors, can handle different types of content, and also new features and updates.',
    image: '/images/blogs/2.jpg',
  },
  {
    id: 12,
    slug: 'magento-blog',
    title: 'How Expert Magento Developers Can Transform Your Online Store ',
    excerpt:
      'Our Magento developers offer a wide range of customization options because Magento development stands out from other e-commerce platforms owing to its many customization options.',
    image: '/images/blogs/3.jpg',
  },
  {
    id: 13,
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

    alternates: { canonical: 'https://www.saasverse.in/blogs' },
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
