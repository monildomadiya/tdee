"use client";
import React, { useState } from 'react';

export default function EmbedButton({ slug }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const embedCode = `<iframe src="https://tdee.tech/embed/${slug}" width="100%" height="800" frameborder="0" style="border:1px solid #ccc; border-radius:8px;"></iframe><div style="text-align:center; font-family:sans-serif; font-size:12px; margin-top:8px;"><a href="https://tdee.tech/${slug}" target="_blank" style="color:#16a34a; text-decoration:none;">Powered by TDEE.tech</a></div>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-2)',
          fontSize: '0.85rem',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}
        aria-label="Embed this calculator"
      >
        <span style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>&lt;/&gt;</span> Embed
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            background: 'var(--card)',
            padding: '2rem',
            borderRadius: 'var(--r)',
            width: '100%',
            maxWidth: '500px',
            position: 'relative',
            border: '1px solid var(--border)'
          }}>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute', top: '15px', right: '15px',
                background: 'none', border: 'none',
                fontSize: '1.5rem', cursor: 'pointer',
                color: 'var(--muted)',
                lineHeight: 1
              }}
            >&times;</button>
            <h3 style={{ marginTop: 0, marginBottom: '1rem', color: 'var(--text)' }}>Embed this Calculator</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', marginBottom: '1rem' }}>
              Copy and paste this code into your website or blog to let your visitors use this tool.
            </p>
            <textarea 
              readOnly 
              value={embedCode}
              style={{
                width: '100%',
                height: '100px',
                padding: '10px',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                border: '1px solid var(--border)',
                background: 'var(--bg)',
                color: 'var(--text)',
                borderRadius: 'var(--r)',
                marginBottom: '1rem',
                resize: 'none'
              }}
            />
            <button 
              onClick={copyToClipboard}
              className="btn-primary"
              style={{ width: '100%', padding: '12px' }}
            >
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
