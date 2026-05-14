import { client } from '../../sanity/lib/client';
import { urlForImage } from '../../sanity/lib/image';
import Link from 'next/link';
import Image from 'next/image';
import './blog.css';

export const metadata = {
  title: 'Blog | TDEE.TECH',
  description: 'Evidence-based articles on fitness, nutrition, TDEE, and healthy living.',
};

export const revalidate = 60;

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    shortDescription,
    publishedAt,
    "categoryName": category->title,
    featuredImage
  }`;
  return client.fetch(query);
}

export default async function BlogListing() {
  const posts = await getPosts();

  return (
    <div className="bg-[#f4f5f7] min-h-screen pb-20">
      <div className="bg-white border-b border-[#cccccc] py-12 mb-8">
        <div className="max-w-[1140px] mx-auto px-[20px]">
          <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mb-2">Fitness & Nutrition Blog</h1>
          <p className="text-[#555555] text-lg">Science-backed guides to help you reach your goals.</p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-[20px]">
        {posts?.length === 0 ? (
          <p className="text-center text-[#555] py-10">No posts available yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug.current} className="bg-white border border-[#cccccc] flex flex-col hover:border-[#16a34a] transition-colors duration-200">
                {post.featuredImage && (
                  <Link href={`/blog/${post.slug.current}`} className="block relative w-full h-[200px] bg-gray-100 overflow-hidden">
                    <Image
                      src={urlForImage(post.featuredImage).url()}
                      alt={post.featuredImage.alt || post.title}
                      fill
                      className="object-cover"
                    />
                  </Link>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {post.categoryName && (
                      <span className="text-[0.7rem] uppercase tracking-wider font-bold text-[#15803d] bg-[#f0fdf4] border border-[#16a34a] px-2 py-1">
                        {post.categoryName}
                      </span>
                    )}
                    <span className="text-sm text-[#888888] font-semibold">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug.current}`}>
                    <h2 className="text-xl font-bold text-[#333333] mb-3 hover:text-[#16a34a] transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-[#555555] text-sm mb-5 flex-1 line-clamp-3">
                    {post.shortDescription}
                  </p>
                  <Link 
                    href={`/blog/${post.slug.current}`} 
                    className="inline-flex items-center justify-center border border-[#0f172a] text-[#0f172a] font-bold text-sm uppercase tracking-wide py-2 px-4 hover:bg-[#0f172a] hover:text-white transition-colors mt-auto self-start"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
