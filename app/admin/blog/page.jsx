import { getBlogs } from '../../../src/actions/blogActions';
import AdminBlogClient from './AdminBlogClient';

export const metadata = {
  title: 'Blog Admin - TDEE.TECH',
  robots: { index: false, follow: false },
};

export default async function AdminBlogPage() {
  const blogs = await getBlogs();
  
  return (
    <div style={{ padding: 0, margin: 0, width: '100%', height: '100%' }}>
      <AdminBlogClient initialBlogs={blogs} />
    </div>
  );
}
