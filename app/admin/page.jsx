import { getBlogs } from '../../src/actions/blogActions';
import AdminBlogClient from './AdminBlogClient';
import AdminLogin from './AdminLogin';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'Blog Admin - TDEE.TECH (2026)',
  robots: { index: false, follow: false },
};

export default async function AdminBlogPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');
  
  if (!session || session.value !== 'authenticated') {
    return <AdminLogin />;
  }

  let blogs = [];
  let dbError = null;
  
  try {
    blogs = await getBlogs();
  } catch (err) {
    dbError = 'Database connection failed. Check your DB credentials in .env file (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME).';
  }
  
  return (
    <div style={{ padding: 0, margin: 0, width: '100%', height: '100%' }}>
      {dbError && (
        <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '14px 20px', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          {dbError}
        </div>
      )}
      <AdminBlogClient initialBlogs={blogs} />
    </div>
  );
}

