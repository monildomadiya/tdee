import { client } from '../../../sanity/lib/client';
import { urlForImage } from '../../../sanity/lib/image';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import '../blog.css';

export const revalidate = 60;

// Portable Text components for custom rendering
const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full h-[400px] my-8">
          <Image
            src={urlForImage(value).url()}
            alt={value.alt || 'Blog Image'}
            fill
            className="object-contain"
          />
        </div>
      );
    },
  },
};

export async function generateStaticParams() {
  const query = `*[_type == "post"] { slug }`;
  const posts = await client.fetch(query);
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const query = `*[_type == "post" && slug.current == $slug][0] {
    metaTitle,
    title,
    metaDescription,
    shortDescription,
    featuredImage
  }`;
  const post = await client.fetch(query, { slug });

  if (!post) {
    return { title: 'Post Not Found | TDEE.TECH' };
  }

  const ogImage = post.featuredImage ? urlForImage(post.featuredImage).url() : '/og-image.png';

  return {
    title: post.metaTitle || `${post.title} | TDEE.TECH Blog`,
    description: post.metaDescription || post.shortDescription,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.shortDescription,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.shortDescription,
      images: [ogImage],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    publishedAt,
    shortDescription,
    "authorName": author->name,
    "authorImage": author->image,
    "categoryName": category->title,
    featuredImage,
    content
  }`;
  
  const post = await client.fetch(query, { slug });

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.shortDescription,
    image: post.featuredImage ? [urlForImage(post.featuredImage).url()] : [],
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.authorName || 'TDEE.TECH Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TDEE.TECH',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tdee.tech/favicon-192.png'
      }
    }
  };

  return (
    <div className="bg-[#f4f5f7] min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Article Header */}
      <div className="bg-white border-b border-[#cccccc] pt-12 pb-16 mb-8">
        <div className="max-w-[800px] mx-auto px-[20px]">
          <Link href="/blog" className="text-[#16a34a] text-sm font-bold uppercase tracking-wider mb-6 inline-block hover:underline">
            ← Back to Blog
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            {post.categoryName && (
              <span className="text-[0.75rem] uppercase tracking-wider font-bold text-[#15803d] bg-[#f0fdf4] border border-[#16a34a] px-2 py-1">
                {post.categoryName}
              </span>
            )}
            <span className="text-sm text-[#888888] font-semibold">
              {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-[#333333] mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3">
            {post.authorImage && (
              <Image 
                src={urlForImage(post.authorImage).width(100).height(100).url()} 
                alt={post.authorName || 'Author'} 
                width={40} 
                height={40} 
                className="rounded-full bg-gray-200"
              />
            )}
            <span className="font-bold text-[#555555]">
              By {post.authorName || 'TDEE.TECH Team'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[800px] mx-auto px-[20px]">
        <article className="bg-white border border-[#cccccc] p-6 md:p-12">
          {post.featuredImage && (
            <div className="relative w-full h-[300px] md:h-[450px] mb-10 overflow-hidden">
              <Image
                src={urlForImage(post.featuredImage).url()}
                alt={post.featuredImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="blog-prose">
            <PortableText value={post.content} components={ptComponents} />
          </div>
        </article>
      </div>
    </div>
  );
}
