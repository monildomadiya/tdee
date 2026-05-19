import { getBlogBySlug, getBlogs } from '../../../src/actions/blogActions';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return { title: 'Post Not Found | TDEE.TECH' };
  }

  return {
    title: `${blog.title} | TDEE.TECH`,
    description: blog.excerpt || `Read ${blog.title} on TDEE.TECH`,
    alternates: { canonical: `https://tdee.tech/blog/${blog.slug}` },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      url: `https://tdee.tech/blog/${blog.slug}`,
      images: blog.thumbnail_url ? [{ url: blog.thumbnail_url, width: 1200, height: 630, alt: blog.title }] : undefined,
    }
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.excerpt,
    datePublished: new Date(blog.created_at).toISOString(),
    dateModified: new Date(blog.updated_at || blog.created_at).toISOString(),
    image: blog.thumbnail_url ? [blog.thumbnail_url] : [],
    author: {
      '@type': 'Person',
      name: blog.author || 'TDEE.TECH',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TDEE.TECH',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tdee.tech/favicon-192.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://tdee.tech/blog/${blog.slug}`
    }
  };

  return (
    <div className="container" style={{ padding: '40px 20px 80px', maxWidth: '850px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ marginBottom: '20px' }}>
        <Link href="/blog" style={{ color: 'var(--muted)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}>
          ← Back to Blog
        </Link>
      </div>
      
      <article style={{ background: 'var(--card)', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
        
        {blog.thumbnail_url && (
          <div style={{ width: '100%', aspectRatio: '1200/630', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
            <img src={blog.thumbnail_url} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        )}

        <div style={{ padding: '40px' }} className="blog-body-padding">
          <header style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid var(--border)' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', lineHeight: 1.2, color: 'var(--text)' }}>{blog.title}</h1>
            <div style={{ color: 'var(--muted)', fontSize: '0.95rem', fontWeight: 600 }}>
              Published on {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              {blog.author && ` • By ${blog.author}`}
            </div>
          </header>

          <div 
            className="blog-content" 
            dangerouslySetInnerHTML={{ __html: blog.content }} 
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.8,
              color: 'var(--text-2)'
            }}
          />
        </div>
      </article>

      <style dangerouslySetInnerHTML={{__html: `
        .blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4 { color: var(--text); margin-top: 2rem; margin-bottom: 1rem; line-height: 1.3; font-weight: 800; }
        .blog-content h1 { font-size: 2.2rem; }
        .blog-content h2 { font-size: 1.8rem; }
        .blog-content h3 { font-size: 1.4rem; }
        .blog-content p { margin-bottom: 1.5rem; }
        .blog-content ul, .blog-content ol { margin-bottom: 1.5rem; padding-left: 1.5rem; }
        .blog-content li { margin-bottom: 0.5rem; }
        .blog-content a { color: var(--green); text-decoration: underline; font-weight: 600; }
        .blog-content blockquote { border-left: 4px solid var(--green); padding-left: 1.5rem; font-style: italic; color: var(--text); margin: 2rem 0; background: var(--bg); padding: 1.5rem; border-radius: 0 8px 8px 0; }
        .blog-content img { max-width: 100%; height: auto; border-radius: 8px; margin: 2rem 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .blog-content pre { background: #0f172a; color: #f8fafc; padding: 1.5rem; border-radius: 8px; overflow-x: auto; margin: 1.5rem 0; }
        .blog-content code { font-family: monospace; font-size: 0.9em; background: var(--bg); padding: 0.2rem 0.4rem; border-radius: 4px; }
        .blog-content pre code { background: transparent; padding: 0; }
        @media (max-width: 768px) {
          .blog-body-padding { padding: 25px !important; }
          .blog-content h1 { font-size: 1.8rem; }
          .blog-content h2 { font-size: 1.5rem; }
        }
      `}} />
    </div>
  );
}
