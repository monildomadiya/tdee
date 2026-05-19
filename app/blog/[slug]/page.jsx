import { getBlogBySlug, getBlogs } from '../../../src/actions/blogActions';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: 'Not Found' };
  
  return {
    title: `${blog.title} - TDEE.TECH`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="container" style={{ padding: '40px 20px 80px', maxWidth: '800px' }}>
      <div style={{ marginBottom: '20px' }}>
        <Link href="/blog" style={{ color: 'var(--muted)', fontSize: '0.9rem', fontWeight: 600 }}>
          ← Back to Blog
        </Link>
      </div>
      
      <article className="article-section" style={{ padding: '0', border: 'none', background: 'transparent' }}>
        <header style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid var(--border)' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', lineHeight: 1.2 }}>{blog.title}</h1>
          <div style={{ color: 'var(--muted)', fontSize: '0.9rem', fontWeight: 600 }}>
            Published on {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </header>

        <div 
          className="blog-content" 
          dangerouslySetInnerHTML={{ __html: blog.content }} 
          style={{ 
            fontSize: '1.05rem', 
            lineHeight: 1.8,
            color: 'var(--text)'
          }}
        />
      </article>

      {/* Basic inline styles for blog content elements */}
      <style dangerouslySetInnerHTML={{__html: `
        .blog-content h2 { margin-top: 2rem; margin-bottom: 1rem; font-size: 1.75rem; }
        .blog-content h3 { margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.25rem; }
        .blog-content p { margin-bottom: 1.25rem; }
        .blog-content ul, .blog-content ol { margin-bottom: 1.25rem; padding-left: 20px; }
        .blog-content li { margin-bottom: 0.5rem; }
        .blog-content a { color: var(--green); text-decoration: underline; }
        .blog-content blockquote { border-left: 4px solid var(--border); padding-left: 15px; font-style: italic; color: var(--text-2); margin-left: 0; }
      `}} />
    </div>
  );
}
