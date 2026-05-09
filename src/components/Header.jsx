"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TOOL_CATEGORIES } from '../data/toolLinks';

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close mobile nav on route change
  useEffect(() => { setOpen(false); setDropdownOpen(false); }, [pathname]);

  // Sticky header shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard: close dropdown on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') { setDropdownOpen(false); setOpen(false); }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isActive = (to) => to === '/' ? pathname === '/' : pathname.startsWith(to);

  // Select top 3 categories for the dropdown to fit nicely
  const navCategories = [TOOL_CATEGORIES.fitness, TOOL_CATEGORIES.nutrition, TOOL_CATEGORIES.weight];

  return (
    <header
      role="banner"
      className={scrolled ? 'scrolled' : ''}
      style={{
        position: 'sticky', top: 0, zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.95)' : '#fff',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Skip to main content — accessibility */}
      <a
        href="#main-content"
        style={{
          position: 'absolute', top: '-100%', left: '16px',
          background: 'var(--green)', color: '#fff', padding: '8px 16px',
          borderRadius: '0 0 8px 8px', fontWeight: 700, zIndex: 9999,
          transition: 'top .2s',
        }}
        onFocus={e => { e.currentTarget.style.top = '0'; }}
        onBlur={e => { e.currentTarget.style.top = '-100%'; }}
      >
        Skip to main content
      </a>

      <div
        className="container nav-container"
        style={{ paddingTop: scrolled ? '0.75rem' : '1.25rem', paddingBottom: scrolled ? '0.75rem' : '1.25rem', transition: 'all 0.3s ease' }}
      >
        <Link href="/" className="logo" aria-label="TDEE.TECH home">
          <img
            src="/tdee-logo.svg"
            alt="TDEE.TECH"
            height={scrolled ? '36' : '42'}
            style={{ transition: 'all 0.3s ease' }}
          />
        </Link>

        <nav aria-label="Main navigation">
          <ul className="nav-links">
            <li><Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>

            {/* Accessible dropdown */}
            <li className="dropdown" ref={dropdownRef}>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen(o => !o)}
                style={{
                  cursor: 'pointer', fontWeight: 600, color: 'var(--text-2)',
                  fontSize: '.95rem', display: 'flex', alignItems: 'center',
                  gap: '4px', background: 'none', border: 'none',
                  fontFamily: 'inherit', padding: 0,
                }}
              >
                Tools <span style={{ fontSize: '.6rem', transition: 'transform .2s', display: 'inline-block', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
              </button>
              {dropdownOpen && (
                <div
                  role="menu"
                  className="dropdown-content"
                  style={{
                    borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-xl)',
                    overflow: 'hidden', padding: '1.5rem', minWidth: '700px',
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                    {navCategories.map(cat => (
                      <div key={cat.label}>
                        <div style={{
                          fontSize: '.7rem', fontWeight: 800, textTransform: 'uppercase',
                          color: 'var(--muted)', marginBottom: '.75rem', letterSpacing: '.05em',
                        }}>
                          {cat.label}
                        </div>
                        {cat.tools.slice(0, 8).map(l => (
                          <Link
                            key={l.path}
                            href={l.path}
                            role="menuitem"
                            className="dropdown-item"
                            style={{ fontSize: '.88rem', padding: '.4rem 0', display: 'block' }}
                          >
                            {l.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
                    <Link href="/#tools-directory" style={{ color: 'var(--green)', fontWeight: 600, fontSize: '.9rem' }} onClick={() => setDropdownOpen(false)}>
                      View All 30+ Health Calculators →
                    </Link>
                  </div>
                </div>
              )}
            </li>

            <li><Link href="/blog" className={isActive('/blog') ? 'active' : ''}>Blog</Link></li>
            <li>
              <Link
                href="/tdee-calculator"
                className="btn"
                style={{ width: 'auto', padding: '8px 20px', fontSize: '.85rem' }}
              >
                Calculate Now
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          style={{ border: 'none', background: 'var(--bg)', borderRadius: '8px' }}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={`mobile-nav ${open ? 'open' : ''}`}
        style={{ background: '#fff', borderTop: '1px solid var(--border)' }}
      >
        <Link href="/" className={isActive('/') ? 'active' : ''} onClick={() => setOpen(false)}>Home</Link>
        <div style={{ padding: '1rem 1.5rem', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
          <strong style={{ fontSize: '.8rem', textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '.05em' }}>Popular Tools</strong>
        </div>
        <Link href="/tdee-calculator" className={isActive('/tdee-calculator') ? 'active' : ''} onClick={() => setOpen(false)}>TDEE Calculator</Link>
        <Link href="/macro-calculator" className={isActive('/macro-calculator') ? 'active' : ''} onClick={() => setOpen(false)}>Macro Calculator</Link>
        <Link href="/calorie-deficit" className={isActive('/calorie-deficit') ? 'active' : ''} onClick={() => setOpen(false)}>Calorie Deficit</Link>
        <Link href="/bmi-calculator" className={isActive('/bmi-calculator') ? 'active' : ''} onClick={() => setOpen(false)}>BMI Calculator</Link>
        <Link href="/protein-calculator" className={isActive('/protein-calculator') ? 'active' : ''} onClick={() => setOpen(false)}>Protein Calculator</Link>
        <div style={{ padding: '1rem 1.5rem', background: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <strong style={{ fontSize: '.8rem', textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '.05em' }}>Resources</strong>
        </div>
        <Link href="/blog" className={isActive('/blog') ? 'active' : ''} onClick={() => setOpen(false)}>Fitness Blog</Link>
      </nav>
    </header>
  );
};

export default Header;
