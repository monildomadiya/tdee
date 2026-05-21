'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user already consented
    const consented = localStorage.getItem('cookieConsent');
    if (!consented) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#0f172a',
      color: '#f8fafc',
      padding: '16px 20px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      borderTop: '4px solid #16a34a',
      boxShadow: '0 -4px 12px rgba(0,0,0,0.15)'
    }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', margin: '0 auto', maxWidth: '1140px', width: '100%' }}>
        <div style={{ flex: '1 1 600px' }}>
          <h4 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>We Value Your Privacy</h4>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5 }}>
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our <Link href="/privacy" style={{ color: '#4ade80', textDecoration: 'underline' }}>Privacy Policy</Link> for more information.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
          <Link href="/privacy" style={{
            background: 'transparent',
            border: '1px solid #475569',
            color: '#f1f5f9',
            padding: '10px 16px',
            fontSize: '0.9rem',
            fontWeight: 700,
            cursor: 'pointer',
            borderRadius: '4px',
            textDecoration: 'none'
          }}>
            Learn More
          </Link>
          <button onClick={acceptCookies} style={{
            background: '#16a34a',
            border: 'none',
            color: '#fff',
            padding: '10px 24px',
            fontSize: '0.9rem',
            fontWeight: 800,
            cursor: 'pointer',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
