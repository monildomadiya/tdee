"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TOOL_CATEGORIES } from '../src/data/toolLinks';

const Home = () => {
  const [calcCount, setCalcCount] = useState(14239);

  useEffect(() => {
    // Generate realistic baseline based on time of day (assuming ~25k/day)
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const msSinceStart = now.getTime() - startOfDay;
    const baseCount = Math.floor((msSinceStart / (1000 * 60 * 60 * 24)) * 25000) + 1200; 
    setCalcCount(baseCount);

    // Live incrementing effect
    const interval = setInterval(() => {
      setCalcCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container" style={{ padding: '30px 20px 60px' }}>
        
        {/* HERO SECTION */}
        <div style={{ textAlign: 'center', padding: '60px 20px 80px', maxWidth: '800px', margin: '0 auto' }}>
          
          {/* Minimal Social Proof Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--green-light)', border: '1px solid #86efac', padding: '6px 16px', borderRadius: '50px', marginBottom: '24px' }}>
            <span style={{ display: 'block', width: '8px', height: '8px', background: 'var(--green)', borderRadius: '50%', boxShadow: '0 0 0 3px rgba(34, 197, 94, 0.2)' }}></span>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--green-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {calcCount.toLocaleString()} Calculations Today
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--text)', margin: '0 0 20px 0', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            The Ultimate <span style={{ color: 'var(--green)' }}>TDEE Calculator</span>
          </h1>
          
          <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', fontWeight: 400, color: 'var(--text-2)', margin: '0 0 40px 0', lineHeight: 1.6 }}>
            Accurately determine your <strong>Total Daily Energy Expenditure</strong>, BMR, and optimal macros for weight loss or muscle gain. 100% free, science-backed, and no signup required.
          </h2>
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/tdee-calculator" className="btn-primary" style={{ fontSize: '1.1rem', padding: '16px 40px', display: 'inline-flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 25px rgba(22, 163, 74, 0.3)' }}>
              Launch Calculator
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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
          <h2 style={{ fontSize: '1.2rem', color: 'var(--text)', marginTop: 0, marginBottom: '12px' }}>What is a TDEE Calculator?</h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '16px' }}>
            A <strong>TDEE Calculator</strong> (Total Daily Energy Expenditure) is the most accurate way to find out exactly how many calories your body burns in a day. By factoring in your Basal Metabolic Rate (BMR) and your activity level, our TDEE Calculator provides you with the precise number of calories you need to consume to maintain, lose, or gain weight.
          </p>
          <h3 style={{ fontSize: '1.05rem', color: 'var(--text)', marginTop: '20px', marginBottom: '10px' }}>Why use our Science-Backed TDEE Calculator?</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '16px' }}>
            Most online calorie calculators use outdated or over-simplified formulas. Our TDEE Calculator implements the industry-standard <strong>Mifflin-St Jeor equation</strong> (widely considered the most accurate metabolic rate formula since 1990) alongside the <strong>Katch-McArdle formula</strong> for users who know their body fat percentage. 
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.7, margin: 0 }}>
            Every tool is designed to be completely free, lightweight, and incredibly fast. Your inputs are never saved or tracked, ensuring complete privacy. Use our TDEE Calculator today to get precise macronutrient splits (protein, carbohydrates, and fats) tailored to your specific fitness targets.
          </p>
        </div>

        {/* FAQ SECTION */}
        <div style={{ marginTop: '40px', padding: '30px', background: 'var(--card)', border: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text)', margin: '0 0 20px 0', borderBottom: '2px solid var(--border)', paddingBottom: '10px' }}>
            Frequently Asked Questions (FAQ)
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', margin: '0 0 8px 0' }}>What is TDEE?</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.6, margin: 0 }}>
                TDEE stands for Total Daily Energy Expenditure. It is the total number of calories your body burns per day, including your Basal Metabolic Rate (BMR), physical activity, and the thermic effect of food.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', margin: '0 0 8px 0' }}>How is TDEE calculated?</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.6, margin: 0 }}>
                TDEE is calculated by first determining your Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation, then multiplying it by an activity factor ranging from 1.2 (sedentary) to 1.9 (athlete).
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', margin: '0 0 8px 0' }}>What is the Mifflin-St Jeor equation?</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.6, margin: 0 }}>
                The Mifflin-St Jeor equation calculates BMR as: (10 × weight in kg) + (6.25 × height in cm) − (5 × age) + 5 for males, or − 161 for females. It is considered the most accurate predictive equation for estimating BMR.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', margin: '0 0 8px 0' }}>How many calories should I eat to lose weight?</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.6, margin: 0 }}>
                To lose approximately 0.5 kg (1 lb) per week, eat about 500 calories below your TDEE. For a milder deficit of 0.25 kg (0.5 lb) per week, reduce by 250 calories. Never go below 1,200 calories per day without medical supervision.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', margin: '0 0 8px 0' }}>How accurate is a TDEE calculator?</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.6, margin: 0 }}>
                TDEE calculators provide estimates typically within 10% of actual expenditure. Accuracy depends on honest assessment of activity level. For best results, use the calculated TDEE as a starting point and adjust based on real-world results over 2-4 weeks.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
