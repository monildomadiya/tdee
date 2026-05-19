'use server';

import { cookies } from 'next/headers';

export async function loginAdmin(password) {
  // Uses the ADMIN_PASSWORD environment variable, or 'admin123' as a fallback if not set.
  const correctPassword = process.env.ADMIN_PASSWORD || 'admin123';
  
  if (password === correctPassword) {
    const cookieStore = await cookies();
    cookieStore.set('admin_session', 'authenticated', { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/'
    });
    return { success: true };
  }
  
  return { success: false, error: 'Invalid password. Access denied.' };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_session');
  return { success: true };
}
