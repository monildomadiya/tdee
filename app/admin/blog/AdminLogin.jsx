'use client';
import { useState } from 'react';
import { loginAdmin } from '../../../src/actions/authActions';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const result = await loginAdmin(password);
    if (result.success) {
      window.location.reload();
    } else {
      setError(result.error);
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#f8fafc', padding: '20px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px', border: '1px solid #e2e8f0' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
            <div style={{ width: '48px', height: '48px', background: '#0f172a', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 10px 0' }}>Admin Restricted</h1>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Please enter your password to access the dashboard.</p>
        </div>
        
        {error && <div style={{ background: '#fef2f2', color: '#b91c1c', padding: '12px', borderRadius: '6px', fontSize: '0.85rem', marginBottom: '20px', textAlign: 'center', border: '1px solid #fecaca', fontWeight: 600 }}>{error}</div>}
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              autoFocus
              placeholder="••••••••"
              style={{ padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '1rem', outline: 'none', transition: 'border 0.2s', color: '#0f172a' }} 
              onFocus={e => e.target.style.borderColor = '#0f172a'}
              onBlur={e => e.target.style.borderColor = '#cbd5e1'}
            />
          </div>
          <button type="submit" disabled={loading} style={{ background: '#0f172a', color: '#fff', padding: '14px', border: 'none', borderRadius: '6px', fontSize: '0.95rem', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.2s' }}>
            {loading ? 'Authenticating...' : 'Secure Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
