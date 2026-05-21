'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getRelatedTools, ALL_TOOLS } from '../data/toolLinks';

export default function RelatedCalculatorsFooter() {
  const pathname = usePathname();
  
  // Only show on tool pages
  const normalizedPath = pathname?.replace(/\/$/, '') || '';
  const isToolPage = ALL_TOOLS.some(t => t.path === normalizedPath || t.path === pathname);
  if (!isToolPage) return null;

  const related = getRelatedTools(pathname, 8); // Get up to 8 related tools
  if (!related || related.length === 0) return null;

  return (
    <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '3rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text)', marginBottom: '1.5rem', textAlign: 'center' }}>
          🔗 Explore Related Calculators
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
          {related.map(tool => (
            <Link 
              key={tool.path} 
              href={tool.path}
              style={{
                display: 'block', padding: '1rem', background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: '8px', textDecoration: 'none', transition: 'all 0.2s',
                color: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--green)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>
                {tool.name}
                {tool.isNew && <span style={{ fontSize: '0.6rem', background: 'var(--red)', color: '#fff', padding: '2px 5px', borderRadius: '3px', marginLeft: '6px', fontWeight: 800 }}>NEW!</span>}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-2)' }}>
                {tool.desc}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
