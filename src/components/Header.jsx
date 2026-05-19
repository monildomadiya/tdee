"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TOOL_CATEGORIES } from '../data/toolLinks';

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dropdownRef = useRef(null);
  const desktopSearchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
    setIsSearchOpen(false);
    setSearchQuery('');
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
      
      const inDesktop = desktopSearchRef.current && desktopSearchRef.current.contains(e.target);
      const inMobile = mobileSearchRef.current && mobileSearchRef.current.contains(e.target);
      
      if (!inDesktop && !inMobile) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categories = Object.values(TOOL_CATEGORIES);
  const allTools = categories.flatMap(c => c.tools);
  const searchResults = searchQuery.trim() === ''
    ? []
    : allTools.filter(t =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .header-desktop-nav { display: flex; }
        .header-right-desktop { display: flex; }
        .header-mobile-btn { display: none; }
        @media (max-width: 768px) {
          .header-desktop-nav { display: none !important; }
          .header-right-desktop { display: none !important; }
          .header-mobile-btn { display: flex !important; }
          .mobile-search-bar { display: flex; }
        }
        @media (min-width: 769px) {
          .mobile-search-bar { display: none !important; }
        }
        .mobile-nav-panel {
          display: none;
          flex-direction: column;
          position: fixed;
          top: 60px;
          left: 0;
          right: 0;
          bottom: 0;
          background: #fff;
          z-index: 999;
          overflow-y: auto;
          border-top: 2px solid #0f172a;
        }
        .mobile-nav-panel.open { display: flex; }
        html.dark .mobile-nav-panel { background: #0f172a; border-top-color: #334155; }
        .mobile-cat-header {
          padding: 12px 20px;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #64748b;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }
        html.dark .mobile-cat-header { background: #1e293b; color: #94a3b8; border-bottom-color: #334155; }
        .mobile-tool-link {
          display: flex;
          align-items: center;
          padding: 13px 20px 13px 32px;
          color: #334155;
          font-size: 0.95rem;
          font-weight: 500;
          border-bottom: 1px solid #f1f5f9;
          text-decoration: none;
          transition: background 0.1s;
        }
        .mobile-tool-link:hover, .mobile-tool-link.active { background: #f0fdf4; color: #16a34a; text-decoration: none; }
        html.dark .mobile-tool-link { color: #cbd5e1; border-bottom-color: #1e293b; }
        html.dark .mobile-tool-link:hover, html.dark .mobile-tool-link.active { background: #064e3b; color: #4ade80; }
        .mobile-home-link {
          display: flex;
          align-items: center;
          padding: 14px 20px;
          color: #0f172a;
          font-size: 1rem;
          font-weight: 700;
          border-bottom: 2px solid #e2e8f0;
          text-decoration: none;
          gap: 8px;
        }
        html.dark .mobile-home-link { color: #f1f5f9; border-bottom-color: #334155; }
        .mobile-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-top: 1px solid #e2e8f0;
          background: #f8fafc;
          margin-top: auto;
          position: sticky;
          bottom: 0;
        }
        html.dark .mobile-bottom-bar { background: #1e293b; border-top-color: #334155; }
      `}} />

      <header role="banner" style={{ background: isDark ? '#1e293b' : '#fff', borderBottom: '1px solid #e2e8f0', position: 'relative', zIndex: 1000, height: '60px' }}>
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '70px'
          }}
        >
          {/* LEFT: Logo */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <Link href="/" className="logo" aria-label="TDEE.TECH home" onClick={() => { setOpen(false); setIsSearchOpen(false); setOpenDropdown(null); }} style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/tdee-logo.svg" alt="TDEE.TECH" style={{ height: '32px', width: 'auto' }} />
            </Link>
          </div>

          {/* CENTER: Desktop Nav */}
          <nav className="header-desktop-nav nav-links" ref={dropdownRef} style={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
              <div
                className="dropdown"
                onMouseEnter={() => setOpenDropdown('mega')}
                onMouseLeave={() => setOpenDropdown(null)}
                style={{ position: 'relative' }}
              >
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === 'mega' ? null : 'mega')}
                  style={{
                    cursor: 'pointer', fontWeight: 700, color: openDropdown === 'mega' ? '#0f172a' : '#1e293b',
                    fontSize: '15px', display: 'flex', alignItems: 'center',
                    gap: '6px', background: 'none', border: 'none',
                    fontFamily: 'inherit', padding: '10px 0',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Our Calculators
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transform: openDropdown === 'mega' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {openDropdown === 'mega' && (
                  <div
                    role="menu"
                    className="dropdown-content"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '24px',
                      position: 'absolute',
                      top: '100%',
                      left: '-300px', // Shift left to center the mega menu relative to the button
                      width: '800px',
                      background: isDark ? '#1e293b' : '#fff',
                      border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                      borderRadius: '8px',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                      padding: '24px',
                      zIndex: 1000
                    }}
                  >
                    {categories.map((cat) => (
                      <div key={cat.id}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', paddingBottom: '8px', borderBottom: `1px solid ${isDark ? '#334155' : '#f1f5f9'}` }}>
                          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: cat.color }} />
                          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: isDark ? '#f1f5f9' : '#0f172a', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                            {cat.label}
                          </h4>
                        </div>
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          {cat.tools.map((tool) => (
                            <li key={tool.path}>
                              <Link
                                href={tool.path}
                                onClick={() => setOpenDropdown(null)}
                                style={{
                                  display: 'block',
                                  padding: '6px 8px',
                                  fontSize: '13.5px',
                                  color: isDark ? '#cbd5e1' : '#475569',
                                  textDecoration: 'none',
                                  borderRadius: '4px',
                                  transition: 'all 0.1s'
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = isDark ? '#334155' : '#f8fafc'; e.currentTarget.style.color = cat.color; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = isDark ? '#cbd5e1' : '#475569'; }}
                              >
                                {tool.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div style={{ width: '1px', height: '16px', background: isDark ? '#334155' : '#e2e8f0', margin: '0 4px' }} />
              <Link
                href="/tdee-calculator"
                style={{
                  cursor: 'pointer', fontWeight: 600, color: isDark ? '#cbd5e1' : '#475569',
                  fontSize: '14.5px', padding: '8px 14px', textDecoration: 'none',
                  borderRadius: '20px', transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = isDark ? '#fff' : '#0f172a'; e.currentTarget.style.background = isDark ? '#334155' : '#f1f5f9'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = isDark ? '#cbd5e1' : '#475569'; e.currentTarget.style.background = 'transparent'; }}
              >
                TDEE
              </Link>
              <Link
                href="/calorie-calculator"
                style={{
                  cursor: 'pointer', fontWeight: 600, color: isDark ? '#cbd5e1' : '#475569',
                  fontSize: '14.5px', padding: '8px 14px', textDecoration: 'none',
                  borderRadius: '20px', transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = isDark ? '#fff' : '#0f172a'; e.currentTarget.style.background = isDark ? '#334155' : '#f1f5f9'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = isDark ? '#cbd5e1' : '#475569'; e.currentTarget.style.background = 'transparent'; }}
              >
                Calories
              </Link>
              <Link
                href="/bmi-calculator"
                style={{
                  cursor: 'pointer', fontWeight: 600, color: isDark ? '#cbd5e1' : '#475569',
                  fontSize: '14.5px', padding: '8px 14px', textDecoration: 'none',
                  borderRadius: '20px', transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = isDark ? '#fff' : '#0f172a'; e.currentTarget.style.background = isDark ? '#334155' : '#f1f5f9'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = isDark ? '#cbd5e1' : '#475569'; e.currentTarget.style.background = 'transparent'; }}
              >
                BMI
              </Link>
              <Link
                href="/guess-calories-game"
                style={{
                  cursor: 'pointer', fontWeight: 600, color: isDark ? '#cbd5e1' : '#475569',
                  fontSize: '14.5px', padding: '8px 14px', textDecoration: 'none',
                  borderRadius: '20px', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '6px'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = isDark ? '#fff' : '#0f172a'; e.currentTarget.style.background = isDark ? '#334155' : '#f1f5f9'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = isDark ? '#cbd5e1' : '#475569'; e.currentTarget.style.background = 'transparent'; }}
              >
                Game
                <span style={{ fontSize: '10px', background: '#10b981', color: '#fff', padding: '2px 6px', borderRadius: '10px', fontWeight: 'bold' }}>NEW</span>
              </Link>
            </nav>

          {/* RIGHT: Desktop utilities */}
          <div className="header-right-desktop" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '12px', flexShrink: 0 }}>

            {/* Dark Mode Toggle */}
            <div
              onClick={() => setIsDark(!isDark)}
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'background 0.2s',
                background: isDark ? '#1e293b' : 'transparent',
                border: isDark ? '1px solid #334155' : 'none'
              }}
              onMouseEnter={(e) => { if(!isDark) e.currentTarget.style.background = '#f1f5f9'; }}
              onMouseLeave={(e) => { if(!isDark) e.currentTarget.style.background = 'transparent'; }}
            >
              {isDark ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1f5f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </div>

            <div style={{ width: '1px', height: '24px', background: '#e2e8f0' }} />

            {/* Search */}
            <div ref={desktopSearchRef} style={{ position: 'relative' }}>
              <div
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                style={{
                  height: '40px', borderRadius: '20px', padding: '0 12px 0 16px',
                  background: isSearchOpen ? (isDark ? '#334155' : '#e2e8f0') : (isDark ? '#0f172a' : '#f8fafc'),
                  border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  cursor: 'pointer', transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => { if(!isSearchOpen) e.currentTarget.style.border = `1px solid ${isDark ? '#475569' : '#cbd5e1'}`; }}
                onMouseLeave={(e) => { if(!isSearchOpen) e.currentTarget.style.border = `1px solid ${isDark ? '#334155' : '#e2e8f0'}`; }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={isDark ? '#94a3b8' : '#64748b'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span style={{ fontSize: '13.5px', fontWeight: 500, color: isDark ? '#94a3b8' : '#64748b' }}>Search...</span>
                <div style={{ marginLeft: '4px', padding: '2px 6px', borderRadius: '4px', background: isDark ? '#1e293b' : '#e2e8f0', fontSize: '11px', color: isDark ? '#cbd5e1' : '#64748b', fontWeight: 600 }}>Ctrl K</div>
              </div>

              {isSearchOpen && (
                <div
                  className="dropdown-content"
                  style={{
                    display: 'block', position: 'absolute', top: '100%', right: 0, left: 'auto',
                    background: isDark ? '#1e293b' : '#fff',
                    border: `1px solid ${isDark ? '#334155' : '#0f172a'}`,
                    padding: '15px',
                    width: '300px', zIndex: 1001, borderRadius: '0',
                    boxShadow: 'none', marginTop: '4px'
                  }}
                >
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search 30+ calculators..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: '100%', padding: '10px', fontSize: '14px',
                      border: `1px solid ${isDark ? '#334155' : '#cbd5e1'}`,
                      background: isDark ? '#0f172a' : '#fff',
                      color: isDark ? '#f1f5f9' : '#0f172a',
                      marginBottom: '10px'
                    }}
                  />
                  {searchQuery.trim() !== '' && (
                    <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                      {searchResults.length > 0 ? (
                        searchResults.map(tool => (
                          <Link
                            key={tool.path}
                            href={tool.path}
                            onClick={() => setIsSearchOpen(false)}
                            style={{ display: 'block', padding: '10px', borderBottom: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`, textDecoration: 'none', background: 'transparent' }}
                          >
                            <div style={{ color: isDark ? '#f1f5f9' : '#0f172a', fontWeight: 700, fontSize: '14px', marginBottom: '2px' }}>
                              {tool.name}
                              {tool.isNew && <span style={{ fontSize: '0.6rem', background: 'var(--red)', color: '#fff', padding: '2px 5px', borderRadius: '3px', marginLeft: '6px', fontWeight: 800 }}>NEW!</span>}
                            </div>
                            <div style={{ color: isDark ? '#94a3b8' : '#64748b', fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tool.desc}</div>
                          </Link>
                        ))
                      ) : (
                        <div style={{ padding: '10px', color: isDark ? '#94a3b8' : '#64748b', fontSize: '13px', textAlign: 'center' }}>No calculators found.</div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* MOBILE RIGHT: Search + Hamburger */}
          <div className="header-mobile-btn" style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', gap: '10px' }}>
            {/* Mobile Search Icon */}
            <div
              onClick={() => { setIsSearchOpen(!isSearchOpen); setOpen(false); }}
              style={{
                width: '38px', height: '38px',
                background: isSearchOpen ? '#0f172a' : '#eef2f6',
                border: '1px solid #cbd5e1',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={isSearchOpen ? '#fff' : '#0f172a'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => { setOpen(o => !o); setIsSearchOpen(false); }}
              aria-label={open ? 'Close menu' : 'Open menu'}
              style={{
                width: '38px', height: '38px', background: open ? '#0f172a' : '#fff',
                border: '1px solid #cbd5e1', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: open ? '#fff' : '#0f172a', fontSize: '1.2rem', fontWeight: 700
              }}
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar — full-width below header */}
        {isSearchOpen && (
          <div className="mobile-search-bar" ref={mobileSearchRef} style={{ padding: '12px 16px', background: '#fff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', position: 'absolute', width: '100%', zIndex: 998, top: '60px', left: 0 }}>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                autoFocus
                type="text"
                placeholder="Search 30+ calculators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%', padding: '10px 14px', fontSize: '15px',
                  border: '1px solid #0f172a', background: '#fff', color: '#0f172a'
                }}
              />
              {searchQuery.trim() !== '' && searchResults.length > 0 && (
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderTop: 'none', maxHeight: '280px', overflowY: 'auto' }}>
                  {searchResults.map(tool => (
                    <Link
                      key={tool.path}
                      href={tool.path}
                      onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                      style={{ display: 'block', padding: '12px 14px', borderBottom: '1px solid #f1f5f9', textDecoration: 'none' }}
                    >
                      <div style={{ color: '#0f172a', fontWeight: 700, fontSize: '14px' }}>{tool.name}</div>
                      <div style={{ color: '#64748b', fontSize: '12px' }}>{tool.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Navigation Panel */}
      <nav className={`mobile-nav-panel ${open ? 'open' : ''}`} aria-label="Mobile navigation">
        <Link href="/" className="mobile-home-link" onClick={() => setOpen(false)}>
          Home
        </Link>


        {categories.map(cat => (
          <React.Fragment key={cat.id}>
            <div className="mobile-cat-header">{cat.label}</div>
            {cat.tools.map(tool => (
              <Link
                key={tool.path}
                href={tool.path}
                className={`mobile-tool-link${pathname === tool.path ? ' active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {tool.name}
              </Link>
            ))}
          </React.Fragment>
        ))}


        {/* Bottom bar with dark mode toggle */}
        <div className="mobile-bottom-bar">
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: isDark ? '#cbd5e1' : '#475569' }}>
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </span>
          <div
            onClick={() => setIsDark(!isDark)}
            style={{ width: '48px', height: '26px', border: '1px solid #cbd5e1', background: isDark ? '#0f172a' : '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '3px', transition: 'background 0.2s' }}
          >
            <div style={{ width: '18px', height: '18px', background: isDark ? '#fff' : '#0f172a', transform: isDark ? 'translateX(22px)' : 'translateX(0)', transition: 'transform 0.2s' }}></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
