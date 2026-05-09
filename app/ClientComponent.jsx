"use client";
import React from 'react';
import Link from 'next/link';
import { TOOL_CATEGORIES } from '../src/data/toolLinks';

const Home = () => {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-text">
              <div className="usage-counter">15,234 calculations today</div>
              <h1>
                Free TDEE & Fitness<br />
                <span className="text-green">Calculators That Rank</span>
              </h1>
              <p>
                Calculate your TDEE, BMR, BMI, macros, and 30+ more health metrics instantly.
                Science-backed formulas trusted by fitness professionals worldwide.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '1.5rem 0' }}>
                {[
                  '30+ Science-Backed Fitness Calculators',
                  'Mifflin-St Jeor & Katch-McArdle Formulas',
                  '100% Free — No Signup, No Ads',
                ].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '.92rem', color: 'var(--text-2)', fontWeight: 500 }}>
                    <span style={{ color: 'var(--green)', fontWeight: 900, fontSize: '1rem' }}>✓</span> {t}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/tdee-calculator" className="btn" style={{ width: 'auto', padding: '15px 32px', fontSize: '1rem', borderRadius: '12px' }}>
                  Calculate My TDEE →
                </Link>
                <Link href="#tools-directory" className="btn outline" style={{ padding: '15px 28px', fontSize: '.95rem' }}>
                  Browse All Tools
                </Link>
              </div>

              <div className="hero-stats">
                {[
                  { val: '30+', lbl: 'Calculators' },
                  { val: '50+', lbl: 'Countries' },
                  { val: '10K+', lbl: 'Daily Users' },
                  { val: '100%', lbl: 'Free Forever' },
                ].map(({ val, lbl }) => (
                  <div key={lbl} className="hero-stat-item">
                    <div className="val">{val}</div>
                    <div className="lbl">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-calc">
              <div className="calculator-card" style={{ maxWidth: '420px', margin: '0 auto', boxShadow: 'var(--shadow-xl)' }}>
                <div className="mac-header">
                  <div className="mac-dots">
                    <span className="mac-dot red" /><span className="mac-dot yellow" /><span className="mac-dot green" />
                  </div>
                  <div className="mac-title">TDEE.TECH Dashboard</div>
                </div>
                <div className="calculator-card-body">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '1.25rem' }}>
                    {[
                      { label: 'TDEE', sub: 'Daily Burn', color: 'var(--green)', val: '2,347' },
                      { label: 'BMR', sub: 'At Rest', color: '#2563eb', val: '1,680' },
                      { label: 'BMI', sub: 'Weight Health', color: '#7c3aed', val: '22.4' },
                      { label: 'MACROS', sub: 'P / C / F', color: '#d97706', val: '—' },
                    ].map(({ label, sub, color, val }) => (
                      <div key={label} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', padding: '.9rem', textAlign: 'center' }}>
                        <div style={{ fontWeight: 900, fontSize: '1rem', color }}>{label}</div>
                        <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text)', marginTop: '2px' }}>{val}</div>
                        <div style={{ fontSize: '.68rem', color: 'var(--muted)', fontWeight: 600 }}>{sub}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: 'var(--green-light)', border: '1px solid #6ee7b7', borderRadius: '10px', padding: '1rem', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--green-dark)', marginBottom: '4px' }}>Goal Targets</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.88rem', fontWeight: 700, color: 'var(--text)' }}>
                      <span>Fat Loss: <span style={{ color: '#dc2626' }}>1,847 cal</span></span>
                      <span>Bulk: <span style={{ color: '#2563eb' }}>2,647 cal</span></span>
                    </div>
                  </div>
                  <Link href="/tdee-calculator" className="btn" style={{ fontSize: '.95rem', fontWeight: 800, borderRadius: '10px' }}>
                    Get My Free Report →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div style={{ borderBottom: '1px solid var(--border)', background: '#fff', padding: '1rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', fontSize: '.82rem', color: 'var(--muted)', fontWeight: 600 }}>
            <span style={{ color: 'var(--text-2)' }}>Formulas used by:</span>
            {['Mifflin-St Jeor', 'Harris-Benedict', 'Katch-McArdle', 'US Army AR 600-9', 'IOM Guidelines'].map(f => (
              <span key={f} style={{ padding: '4px 12px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '100px' }}>{f}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── TOOLS DIRECTORY ── */}
      <section id="tools-directory">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="badge badge-green" style={{ marginBottom: '.75rem' }}>Complete Calculator Suite</div>
            <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.25rem)', marginTop: '.5rem' }}>
              Every Fitness Calculator You Need
            </h2>
            <p style={{ maxWidth: '560px', margin: '0 auto', fontSize: '1.05rem' }}>
              From daily calorie tracking to military body fat standards — all calculators are free, instant, and built on peer-reviewed formulas.
            </p>
          </div>

          <div className="home-tool-sections">
            {Object.values(TOOL_CATEGORIES).map(category => (
              <div key={category.id} className="category-section" style={{ background: category.bg, border: `1px solid ${category.border}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', borderBottom: `2px solid ${category.border}`, paddingBottom: '1rem' }}>
                  <h2 style={{ margin: 0, color: category.color, fontSize: '1.6rem' }}>{category.label}</h2>
                  <span style={{ background: '#fff', color: category.color, padding: '3px 10px', borderRadius: '100px', fontSize: '.75rem', fontWeight: 800, border: `1px solid ${category.border}` }}>
                    {category.tools.length} Tools
                  </span>
                </div>
                <div className="tool-grid">
                  {category.tools.map(t => (
                    <div key={t.path} className="tool-card" style={{ background: '#fff', borderColor: category.border }}>
                      <h3 style={{ color: 'var(--text)', marginBottom: '.4rem', fontSize: '1rem' }}>{t.name}</h3>
                      <p style={{ fontSize: '.88rem', marginBottom: '1.25rem' }}>{t.desc}</p>
                      <Link href={t.path} className="btn outline" style={{ borderColor: category.color, color: category.color, marginTop: 'auto', padding: '9px 18px', fontSize: '.83rem' }}>
                        Open Tool →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO CONTENT ── */}
      <section style={{ background: 'var(--blue-light)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ marginTop: 0, fontSize: 'clamp(1.4rem,3vw,2rem)' }}>
                Why Our Fitness Calculators Are More Accurate
              </h2>
              <p>Most calorie calculators use outdated or simplified formulas. TDEE.TECH uses the <strong>Mifflin-St Jeor equation</strong> (the gold standard since 1990) with the option to switch to the more precise <strong>Katch-McArdle formula</strong> when body fat percentage is known.</p>
              <p>Our tools account for age, biological sex, height, weight, and activity level — giving you results accurate within 5% of laboratory-measured metabolic rates.</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Calculate TDEE for fat loss, maintenance, or muscle gain',
                  'Get precise macro splits (protein, carbs, fat)',
                  'Supports metric, imperial, and mixed unit systems',
                  'Country-specific calculations for US, UK, AU, CA, IN',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', gap: '10px', marginBottom: '.85rem', color: 'var(--text-2)', fontSize: '.95rem' }}>
                    <span style={{ color: 'var(--green)', fontWeight: 900, flexShrink: 0 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '⚡', title: 'Instant Results', desc: 'No loading, no waiting. Get your TDEE, BMR, BMI and macros the moment you click calculate.' },
                { icon: '🔬', title: 'Peer-Reviewed Formulas', desc: 'Every formula is sourced from published, peer-reviewed nutritional science research.' },
                { icon: '🌍', title: 'Global Unit Support', desc: 'Full support for metric (kg, cm) and imperial (lbs, ft) with automatic conversion.' },
                { icon: '🔒', title: 'Zero Data Collection', desc: 'Your health data never leaves your browser. We store nothing, track nothing.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text)', marginBottom: '4px', fontSize: '.97rem' }}>{title}</div>
                    <div style={{ color: 'var(--text-2)', fontSize: '.88rem', lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="promo-strip">
        <div className="container">
          <h2>Start Calculating Your Way to Better Health</h2>
          <p>Join 10,000+ daily users who trust TDEE.TECH for their fitness and nutrition data.</p>
          <Link href="/tdee-calculator" className="btn" style={{ background: 'var(--green)', width: 'auto', padding: '16px 40px', fontSize: '1.05rem', marginTop: '1.5rem', display: 'inline-flex', borderRadius: '12px' }}>
            Calculate My TDEE Free →
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
