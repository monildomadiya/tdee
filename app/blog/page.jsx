import { getBlogs } from '../../src/actions/blogActions';
import Link from 'next/link';

export const metadata = {
  title: 'Fitness & Health Blog - TDEE.TECH',
  description: 'Read the latest articles on fitness, health, nutrition, and weight management from the experts at TDEE.TECH.',
};

export default async function BlogListPage() {
  const blogs = await getBlogs();

  return (
    <div className="container" style={{ padding: '40px 20px 80px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0 0 10px 0' }}>Fitness & Health Blog</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', maxWidth: '700px', margin: '0 auto' }}>
          Science-backed articles and guides to help you reach your goals.
        </p>
      </div>

      {blogs.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p>No articles found yet. Check back soon!</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {blogs.map(blog => (
            <Link 
              key={blog.id} 
              href={`/blog/${blog.slug}`}
              style={{
                display: 'block',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                padding: '24px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'border-color 0.2s'
              }}
              className="blog-card-link"
            >
              <style>{`.blog-card-link:hover { border-color: var(--green) !important; }`}</style>
              <h2 style={{ fontSize: '1.25rem', marginTop: 0, marginBottom: '10px' }}>{blog.title}</h2>
              {blog.thumbnail_url && (
                <div style={{ width: '100%', aspectRatio: '1200/630', marginBottom: '15px', overflow: 'hidden', borderRadius: '4px', background: 'var(--bg)' }}>
                  <img src={blog.thumbnail_url} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '15px', fontWeight: 600 }}>
                {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', margin: 0, lineHeight: 1.6 }}>
                {blog.excerpt || 'Read this article to learn more...'}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
