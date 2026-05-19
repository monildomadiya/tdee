'use client';

import React, { useState } from 'react';
import { createBlog, updateBlog, deleteBlog } from '../../../src/actions/blogActions';

export default function AdminBlogClient({ initialBlogs }) {
  const [blogs, setBlogs] = useState(initialBlogs || []);
  const [view, setView] = useState('list'); // 'list', 'create', 'edit'
  const [currentBlog, setCurrentBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const formData = new FormData(e.target);
    const result = await createBlog(formData);
    
    if (result.success) {
      window.location.reload(); // Quick refresh to get new data
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
    if (confirm('Are you sure you want to delete this blog post?')) {
      const result = await deleteBlog(id);
      if (result.success) {
        setBlogs(blogs.filter(b => b.id !== id));
      } else {
        alert('Failed to delete: ' + result.error);
      }
    }
  };

  if (view === 'create' || view === 'edit') {
    return (
      <div className="admin-form-container" style={{ background: 'var(--card)', padding: '2rem', borderRadius: 'var(--r)', border: '1px solid var(--border)' }}>
        <h2>{view === 'create' ? 'Create New Blog Post' : 'Edit Blog Post'}</h2>
        
        {error && <div style={{ color: 'white', background: 'var(--red)', padding: '10px', marginBottom: '1rem' }}>{error}</div>}
        
        <form onSubmit={view === 'create' ? handleCreate : handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div className="input-group" style={{ marginBottom: 0 }}>
            <label>Title</label>
            <input type="text" name="title" defaultValue={currentBlog?.title || ''} required style={{ width: '100%' }} />
          </div>
          
          <div className="input-group" style={{ marginBottom: 0 }}>
            <label>Slug (optional, generated from title if empty)</label>
            <input type="text" name="slug" defaultValue={currentBlog?.slug || ''} style={{ width: '100%' }} />
          </div>
          
          <div className="input-group" style={{ marginBottom: 0 }}>
            <label>Excerpt (short summary)</label>
            <textarea name="excerpt" defaultValue={currentBlog?.excerpt || ''} rows="3" style={{ width: '100%' }} />
          </div>
          
          <div className="input-group" style={{ marginBottom: 0 }}>
            <label>Content (HTML supported)</label>
            <textarea name="content" defaultValue={currentBlog?.content || ''} rows="15" required style={{ width: '100%' }} />
          </div>
          
          <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
            <button type="submit" disabled={loading} className="btn-primary" style={{ padding: '10px 20px' }}>
              {loading ? 'Saving...' : 'Save Post'}
            </button>
            <button type="button" onClick={() => { setView('list'); setCurrentBlog(null); }} className="btn outline" style={{ padding: '10px 20px' }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <button 
        onClick={() => { setView('create'); setCurrentBlog(null); }} 
        className="btn-primary" 
        style={{ marginBottom: '2rem', padding: '10px 20px' }}
      >
        + Write New Post
      </button>

      {blogs.length === 0 ? (
        <p>No blog posts found.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {blogs.map(blog => (
            <div key={blog.id} style={{ background: 'var(--card)', padding: '1.5rem', borderRadius: 'var(--r)', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: '0 0 5px 0' }}>{blog.title}</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-2)' }}>/{blog.slug} • {new Date(blog.created_at).toLocaleDateString()}</p>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  onClick={() => { setCurrentBlog(blog); setView('edit'); }}
                  className="btn outline"
                  style={{ padding: '6px 12px', fontSize: '0.85rem' }}
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(blog.id)}
                  style={{ background: 'var(--red-light)', color: 'var(--red-text)', border: '1px solid var(--red-text)', padding: '6px 12px', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
