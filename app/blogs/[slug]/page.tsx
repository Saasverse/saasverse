import BlogSlider from "@/app/components/BlogSlider";



async function getPost(slug: string) {
  const res = await fetch(
    `http://localhost/saasverse-backend/wp-json/wp/v2/posts?slug=${slug}`,
    {
      cache: 'no-store',
    }
  );

  const data = await res.json();
  return data[0];
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="py-20 text-center">
        Post not found
      </div>
    );
  }

  return (
    <>
      <div className="single-content">
        <div
          dangerouslySetInnerHTML={{
            __html: post.content.rendered,
          }}
        />
      </div>

      
      <BlogSlider />
    </>
  );
}