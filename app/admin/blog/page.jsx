import { getBlogs } from '../../../src/actions/blogActions';
import AdminBlogClient from './AdminBlogClient';

export const metadata = {
  title: 'Blog Admin - TDEE.TECH',
  robots: { index: false, follow: false },
};

export default async function AdminBlogPage() {
  const blogs = await getBlogs();
  
  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1>Blog Administration</h1>
      <p style={{ color: 'var(--text-2)', marginBottom: '2rem' }}>Manage your SEO blog posts here.</p>
      
      <AdminBlogClient initialBlogs={blogs} />
    </div>
  );
}
