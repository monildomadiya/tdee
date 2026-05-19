import { getBlogs } from '../../../src/actions/blogActions';
import AdminBlogClient from './AdminBlogClient';
import AdminLogin from './AdminLogin';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'Blog Admin - TDEE.TECH',
  robots: { index: false, follow: false },
};

export default async function AdminBlogPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');
  
  if (!session || session.value !== 'authenticated') {
    return <AdminLogin />;
  }

  const blogs = await getBlogs();
  
  return (
    <div style={{ padding: 0, margin: 0, width: '100%', height: '100%' }}>
      <AdminBlogClient initialBlogs={blogs} />
    </div>
  );
}
