'use server';

import pool from '../lib/db';
import { revalidatePath } from 'next/cache';

export async function getBlogs() {
  try {
    const [rows] = await pool.query('SELECT * FROM blogs ORDER BY created_at DESC');
    return rows;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function getRecentBlogs(limit = 3) {
  try {
    const [rows] = await pool.query('SELECT * FROM blogs ORDER BY created_at DESC LIMIT ?', [limit]);
    return rows;
  } catch (error) {
    console.error('Error fetching recent blogs:', error);
    return [];
  }
}

export async function getBlogBySlug(slug) {
  try {
    const [rows] = await pool.query('SELECT * FROM blogs WHERE slug = ? LIMIT 1', [slug]);
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export async function createBlog(formData) {
  try {
    const title = formData.get('title');
    const content = formData.get('content');
    const excerpt = formData.get('excerpt');
    const thumbnail_url = formData.get('thumbnail_url');
    let slug = formData.get('slug');

    if (!slug) {
      slug = generateSlug(title);
    }

    await pool.query(
      'INSERT INTO blogs (title, slug, excerpt, thumbnail_url, content) VALUES (?, ?, ?, ?, ?)',
      [title, slug, excerpt, thumbnail_url, content]
    );

    revalidatePath('/blog');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error creating blog:', error);
    return { success: false, error: error.message };
  }
}

export async function updateBlog(id, formData) {
  try {
    const title = formData.get('title');
    const content = formData.get('content');
    const excerpt = formData.get('excerpt');
    const thumbnail_url = formData.get('thumbnail_url');
    const slug = formData.get('slug');

    await pool.query(
      'UPDATE blogs SET title = ?, slug = ?, excerpt = ?, thumbnail_url = ?, content = ? WHERE id = ?',
      [title, slug, excerpt, thumbnail_url, content, id]
    );

    revalidatePath('/blog');
    revalidatePath(`/blog/${slug}`);
    revalidatePath('/admin/blog');
    return { success: true };
  } catch (error) {
    console.error('Error updating blog:', error);
    return { success: false, error: error.message };
  }
}

export async function deleteBlog(id) {
  try {
    await pool.query('DELETE FROM blogs WHERE id = ?', [id]);
    revalidatePath('/blog');
    revalidatePath('/admin/blog');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error deleting blog:', error);
    return { success: false, error: error.message };
  }
}
