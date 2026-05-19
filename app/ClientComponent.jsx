"use client";
import React from 'react';
import Link from 'next/link';
import { TOOL_CATEGORIES } from '../src/data/toolLinks';

const Home = () => {
  return (
    <>
      <div className="container" style={{ padding: '30px 20px 60px' }}>
        
        {/* UTILITY HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text)', margin: '0 0 12px 0', letterSpacing: '-0.02em' }}>
            Free TDEE Calculator &amp; Fitness Tools
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', margin: '0 auto', maxWidth: '700px', lineHeight: 1.6 }}>
            Accurate, instantaneous, and completely free health tools. Calculate your Total Daily Energy Expenditure (TDEE), BMI, BMR, and optimal macronutrients without registration.
          </p>
          
          <div style={{ marginTop: '20px' }}>
            <Link href="/tdee-calculator" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--text)', color: 'var(--bg)', padding: '12px 24px', fontSize: '1rem', fontWeight: 700, textDecoration: 'none', border: '1px solid var(--text)' }}>
              Launch TDEE Calculator
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
        </div>

        {/* DENSE UTILITY DIRECTORY */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {Object.values(TOOL_CATEGORIES).map(category => (
            <div key={category.id}>
              <div style={{ borderBottom: '2px solid var(--text)', paddingBottom: '8px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {category.label}
                </h2>
                <span style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 700 }}>
                  {category.tools.length} TOOLS
                </span>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
                {category.tools.map(t => (
                  <Link 
                    key={t.path} 
                    href={t.path} 
                    className="tool-directory-card"
                    style={{ 
                      display: 'block', 
                      padding: '16px', 
                      background: 'var(--card)',
                      border: '1px solid var(--border)', 
                      textDecoration: 'none',
                    }}
                  >
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', margin: '0 0 6px 0', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                      {t.name}
                      {t.isNew && <span style={{ fontSize: '0.65rem', background: 'var(--red)', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontWeight: 800 }}>NEW!</span>}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', margin: 0, lineHeight: 1.5 }}>
                      {t.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SEO TEXT BLOCK AT BOTTOM (ConvertCase style) */}
        <div style={{ marginTop: '60px', padding: '30px', background: 'var(--card)', border: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: '1.2rem', color: 'var(--text)', marginTop: 0, marginBottom: '12px' }}>Why use our Science-Backed Fitness Tools?</h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '16px' }}>
            Most online calorie calculators use outdated or over-simplified formulas. TDEE.TECH implements the industry-standard <strong>Mifflin-St Jeor equation</strong> (widely considered the most accurate metabolic rate formula since 1990) alongside the <strong>Katch-McArdle formula</strong> for users who know their body fat percentage. 
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.7, margin: 0 }}>
            Every tool is designed to be completely free, lightweight, and incredibly fast. Your inputs are never saved or tracked, ensuring complete privacy. Our tools provide precise macronutrient splits (protein, carbohydrates, and fats) tailored to your specific weight loss, maintenance, or muscle gain targets.
          </p>
        </div>

      </div>
    </>
  );
};

export default Home;
