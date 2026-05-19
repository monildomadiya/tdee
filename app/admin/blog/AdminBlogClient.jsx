'use client';

import React, { useState } from 'react';
import { createBlog, updateBlog, deleteBlog } from '../../../src/actions/blogActions';
import Link from 'next/link';

export default function AdminBlogClient({ initialBlogs }) {
  const [blogs, setBlogs] = useState(initialBlogs || []);
  const [view, setView] = useState('list'); // 'list', 'create', 'edit'
  const [currentBlog, setCurrentBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const formData = new FormData(e.target);
    const result = await createBlog(formData);
    
    if (result.success) {
      window.location.reload(); 
    } else {
      setError(result.error);
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!currentBlog) return;
    
    setLoading(true);
    setError('');
    
    const formData = new FormData(e.target);
    const result = await updateBlog(currentBlog.id, formData);
    
    if (result.success) {
      window.location.reload();
    } else {
      setError(result.error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this blog post? This action cannot be undone.')) {
      const result = await deleteBlog(id);
      if (result.success) {
        setBlogs(blogs.filter(b => b.id !== id));
      } else {
        alert('Failed to delete: ' + result.error);
      }
    }
  };

  const Sidebar = () => (
    <aside style={{
      width: isSidebarOpen ? '250px' : '0px',
      background: '#0f172a',
      color: '#fff',
      transition: 'width 0.3s',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0
    }}>
      <div style={{ padding: '20px', borderBottom: '1px solid #1e293b', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 800, letterSpacing: '1px', whiteSpace: 'nowrap' }}>TDEE ADMIN</h2>
      </div>
      <nav style={{ padding: '20px 0', flex: 1 }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li>
            <button 
              onClick={() => { setView('list'); setCurrentBlog(null); }}
              style={{
                width: '100%', textAlign: 'left', padding: '12px 20px', 
                background: view === 'list' ? '#1e293b' : 'transparent',
                border: 'none', color: '#cbd5e1', fontSize: '0.95rem', fontWeight: 600,
                cursor: 'pointer', transition: 'background 0.2s',
                display: 'flex', alignItems: 'center', gap: '10px'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              Manage Posts
            </button>
          </li>
          <li>
            <button 
              onClick={() => { setView('create'); setCurrentBlog(null); }}
              style={{
                width: '100%', textAlign: 'left', padding: '12px 20px', 
                background: view === 'create' ? '#1e293b' : 'transparent',
                border: 'none', color: '#cbd5e1', fontSize: '0.95rem', fontWeight: 600,
                cursor: 'pointer', transition: 'background 0.2s',
                display: 'flex', alignItems: 'center', gap: '10px'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Write New Post
            </button>
          </li>
        </ul>
      </nav>
      <div style={{ padding: '20px', borderTop: '1px solid #1e293b' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          Back to Live Site
        </Link>
      </div>
    </aside>
  );

  const Topbar = () => (
    <header style={{ 
      background: '#fff', 
      padding: '0 20px', 
      height: '60px', 
      borderBottom: '1px solid #e2e8f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button 
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', display: 'flex' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <h1 style={{ fontSize: '1.1rem', margin: 0, fontWeight: 700, color: '#0f172a' }}>
          {view === 'list' && 'All Blog Posts'}
          {view === 'create' && 'Write a New Article'}
          {view === 'edit' && 'Edit Article'}
        </h1>
      </div>
      <div>
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b', background: '#f1f5f9', padding: '5px 10px', borderRadius: '4px' }}>Admin User</span>
      </div>
    </header>
  );

  const RenderForm = () => (
    <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', maxWidth: '1000px', margin: '0 auto' }}>
      
      {error && <div style={{ color: '#b91c1c', background: '#fef2f2', border: '1px solid #fecaca', padding: '12px 16px', borderRadius: '6px', marginBottom: '20px', fontSize: '0.9rem', fontWeight: 500 }}>{error}</div>}
      
      <form onSubmit={view === 'create' ? handleCreate : handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', textTransform: 'uppercase' }}>Article Title</label>
            <input type="text" name="title" defaultValue={currentBlog?.title || ''} required placeholder="Enter an engaging title..." style={{ padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '1rem', color: '#0f172a', outline: 'none', transition: 'border 0.2s' }} />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', textTransform: 'uppercase' }}>URL Slug</label>
            <input type="text" name="slug" defaultValue={currentBlog?.slug || ''} placeholder="auto-generated-if-empty" style={{ padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.95rem', color: '#0f172a', outline: 'none' }} />
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
            <span>Thumbnail URL (1200x630)</span>
            <span style={{ color: '#94a3b8', textTransform: 'none', fontWeight: 500 }}>Optional absolute or relative path</span>
          </label>
          <input type="text" name="thumbnail_url" defaultValue={currentBlog?.thumbnail_url || ''} placeholder="https://example.com/image.jpg" style={{ padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.95rem', color: '#0f172a', outline: 'none' }} />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', textTransform: 'uppercase' }}>Short Excerpt (SEO Meta Description)</label>
          <textarea name="excerpt" defaultValue={currentBlog?.excerpt || ''} rows="2" placeholder="A brief summary for SEO and the blog index page..." style={{ padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.95rem', color: '#0f172a', outline: 'none', resize: 'vertical' }} />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>
            <span>Full Content (HTML)</span>
            <span style={{ color: '#94a3b8', textTransform: 'none', fontWeight: 500 }}>Supports &lt;h2&gt;, &lt;p&gt;, &lt;strong&gt;, etc.</span>
          </label>
          <textarea name="content" defaultValue={currentBlog?.content || ''} rows="15" required placeholder="<h2>Start writing your professional article...</h2>" style={{ padding: '16px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.95rem', color: '#0f172a', outline: 'none', resize: 'vertical', fontFamily: 'monospace', lineHeight: 1.6 }} />
        </div>
        
        <div style={{ display: 'flex', gap: '15px', marginTop: '10px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
          <button type="submit" disabled={loading} style={{ background: '#16a34a', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '6px', fontSize: '0.95rem', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.2s', display: 'flex', alignItems: 'center', gap: '8px' }}>
            {loading ? 'Saving...' : 'Publish Article'}
            {!loading && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>}
          </button>
          <button type="button" onClick={() => { setView('list'); setCurrentBlog(null); }} style={{ background: '#fff', color: '#64748b', border: '1px solid #cbd5e1', padding: '12px 24px', borderRadius: '6px', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s' }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100%', background: '#f8fafc', fontFamily: "'Inter', sans-serif" }}>
      <Sidebar />
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Topbar />
        
        <main style={{ padding: '30px', flex: 1, overflowY: 'auto' }}>
          
          {(view === 'create' || view === 'edit') && <RenderForm />}

          {view === 'list' && (
            <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              
              <div style={{ padding: '20px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc' }}>
                <h2 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 700, color: '#334155' }}>Published Articles ({blogs.length})</h2>
                <button 
                  onClick={() => { setView('create'); setCurrentBlog(null); }} 
                  style={{ background: '#0f172a', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  New Post
                </button>
              </div>

              {blogs.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1" style={{ marginBottom: '10px' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>No blog posts found. Write your first article!</p>
                </div>
              ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#fff' }}>
                      <th style={{ padding: '15px 20px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Article Details</th>
                      <th style={{ padding: '15px 20px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', width: '150px' }}>Date</th>
                      <th style={{ padding: '15px 20px', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', width: '150px', textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map(blog => (
                      <tr key={blog.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background 0.1s' }} onMouseOver={e => e.currentTarget.style.background = '#f8fafc'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                        <td style={{ padding: '15px 20px' }}>
                          <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.95rem', marginBottom: '4px' }}>{blog.title}</div>
                          <div style={{ fontSize: '0.8rem', color: '#64748b' }}>/{blog.slug}</div>
                        </td>
                        <td style={{ padding: '15px 20px', fontSize: '0.85rem', color: '#475569', fontWeight: 500 }}>
                          {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </td>
                        <td style={{ padding: '15px 20px', textAlign: 'right' }}>
                          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                            <button 
                              onClick={() => { setCurrentBlog(blog); setView('edit'); }}
                              style={{ background: '#fff', border: '1px solid #cbd5e1', padding: '6px 12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600, color: '#334155', cursor: 'pointer' }}
                            >
                              Edit
                            </button>
                            <button 
                              onClick={() => handleDelete(blog.id)}
                              style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '6px 12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600, color: '#dc2626', cursor: 'pointer' }}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
          
        </main>
      </div>
    </div>
  );
}
