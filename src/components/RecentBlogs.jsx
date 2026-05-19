import { getRecentBlogs } from '../actions/blogActions';
import Link from 'next/link';

export default async function RecentBlogs() {
  const blogs = await getRecentBlogs(3);

  if (!blogs || blogs.length === 0) return null;

  return (
    <div className="container" style={{ padding: '40px 20px', borderTop: '1px solid var(--border)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0 }}>Latest Articles</h2>
        <Link href="/blog" style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--green)' }}>
          View All →
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {blogs.map(blog => (
          <Link 
            key={blog.id} 
            href={`/blog/${blog.slug}`}
            style={{
              display: 'block',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              padding: '20px',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'border-color 0.2s'
            }}
            className="recent-blog-card"
          >
            <style>{`.recent-blog-card:hover { border-color: var(--green) !important; }`}</style>
            {blog.thumbnail_url && (
              <div style={{ width: '100%', aspectRatio: '1200/630', marginBottom: '15px', overflow: 'hidden', borderRadius: '4px', background: 'var(--bg)' }}>
                <img src={blog.thumbnail_url} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
            <h3 style={{ fontSize: '1.1rem', margin: '0 0 8px 0' }}>{blog.title}</h3>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '10px', fontWeight: 600 }}>
              {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', margin: 0, lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {blog.excerpt || 'Read more...'}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
