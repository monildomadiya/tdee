"use client";
import React, { useState } from 'react';

import Link from 'next/link';
import Sidebar from '../../src/components/Sidebar';

const CalorieDeficit = () => {
  const [tdee, setTdee] = useState('');
  const [rate, setRate] = useState('500');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const target = parseFloat(tdee) - parseFloat(rate);
    const lbsPerWeek = (parseFloat(rate) * 7 / 3500).toFixed(1);
    setResult({ target: Math.round(target), lbsPerWeek });
  };

  return (
    <>
      
      
      <div className="page-hero">
        <div className="container">
          <h1>Calorie Deficit Calculator</h1>
          <p>Find the exact daily calorie target to reach your weight loss goals safely and sustainably.</p>
        </div>
      </div>

      <main className="container tool-layout-container" style={{ paddingTop:'2rem', paddingBottom:'4rem' }}>
        <div className="tool-main-content">
        <div className="main-content">

          <section className="how-it-works">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>How it Works</h2>
          <ol style={{ marginLeft: '1.5rem', color: '#4b5563' }}>
            <li><strong>Input TDEE:</strong> Use our <Link href="/tdee-calculator">TDEE Calculator</Link> first.</li>
            <li><strong>Choose Rate:</strong> Select your target weekly weight loss.</li>
            <li><strong>Get Target:</strong> See your daily calorie limit.</li>
          </ol>
        </section>

        <div className="calculator-card">
          <div className="mac-header">
            <div className="mac-dots">
              <span className="mac-dot red"></span>
              <span className="mac-dot yellow"></span>
              <span className="mac-dot green"></span>
            </div>
            <div className="mac-title">CALORIE DEFICIT PLANNER</div>
          </div>
          <div className="calculator-card-body">
            <div className="calculator-grid">
              <div className="calc-form-container">
              <div style={{ fontSize: '.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 700, marginBottom: '1.25rem' }}>Your Target</div>
              <form onSubmit={calculate}>
                <div className="input-group">
                  <label>Maintenance Calories (TDEE)</label>
                  <input type="number" value={tdee} onChange={e => setTdee(e.target.value)} placeholder="e.g. 2500" required />
                  <small style={{ marginTop: '8px', display: 'block' }}>Need this? <Link href="/tdee-calculator">Calculate TDEE first</Link></small>
                </div>
                <div className="input-group">
                  <label>Desired Goal Rate</label>
                  <select value={rate} onChange={e => setRate(e.target.value)}>
                    <option value="250">Mild (0.5 lb/week)</option>
                    <option value="500">Moderate (1 lb/week)</option>
                    <option value="750">Aggressive (1.5 lb/week)</option>
                    <option value="1000">Maximum (2 lb/week)</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>Calculate Target</button>
              </form>
            </div>

            <div className="results-container" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '300px' }}>
              <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderBottom: 'none', color: 'var(--text)', padding: '1rem 1.5rem', fontWeight: 600, fontSize: '.95rem', borderTopLeftRadius: 'var(--r-lg)', borderTopRightRadius: 'var(--r-lg)' }}>
                Output Container
              </div>
              <div style={{ background: '#fff', flex: 1, padding: '2rem 1.5rem', borderBottomLeftRadius: 'var(--r-lg)', borderBottomRightRadius: 'var(--r-lg)', display: 'flex', flexDirection: 'column', justifyContent: result ? 'flex-start' : 'center', alignItems: 'center', border: '1px solid var(--border)' }}>
                {!result ? (
                  <div style={{ color: 'var(--muted)', textAlign: 'center' }}>
                    Enter your TDEE to see your weight loss target
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', animation: 'popIn .4s ease both', width: '100%' }}>
                    <div style={{ fontSize: '.85rem', textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--text-2)', fontWeight: 600, marginBottom: '.5rem' }}>Your Weight Loss Target</div>
                    <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--green)', lineHeight: 1 }}>{result.target} <span style={{ fontSize: '1.2rem' }}>kcal/day</span></div>
                    <div style={{ fontSize: '1rem', color: 'var(--text-2)', marginTop: '1.25rem', padding: '0.75rem 1rem', background: 'var(--green-light)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                      Expected loss: <strong>{result.lbsPerWeek} lbs</strong> per week
                    </div>
                  </div>
                )}
              </div>
            </div>
            </div>
          </div>
        </div>
        
        {/* === AUTOMATED SEO CONTENT BLOCK === */}
        <article className="seo-article-content" style={{ marginTop: '4rem', padding: '2rem', background: '#fff', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text)', marginBottom: '1rem' }}>The Ultimate Guide to Your Calorie Deficit</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
              A calorie deficit occurs when you consume fewer calories than your body expends. It is the fundamental biological requirement for all weight loss and fat burning. Discover how to leverage this metric to accelerate your health, fitness, and nutritional goals using verified scientific data.
            </p>
          </header>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '1.5rem', justifyContent: 'center' }}>
            {["calorie deficit calculator","weight loss calories","fat loss macros","safe weight loss rate","TDEE minus calories"].map((kw, i) => (
              <span key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '6px 14px', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 600 }}>#{kw}</span>
            ))}
          </div>

          <div className="seo-content-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Understanding the Science of a Calorie Deficit</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>The First Law of Thermodynamics dictates that energy cannot be created or destroyed. When your body requires more energy than you consume through food, it must tap into stored energy reserves—primarily body fat—to make up the difference. This state of negative energy balance is known as a calorie deficit. Creating and sustaining a calorie deficit is the only scientifically proven method for losing weight.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>How Large Should Your Calorie Deficit Be?</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>A standard, safe calorie deficit is typically 500 calories below your Total Daily Energy Expenditure (TDEE). Because one pound of body fat contains approximately 3,500 calories, a consistent 500-calorie daily deficit results in about one pound of fat loss per week. Aggressive deficits (750-1000 calories) may yield faster initial results but often lead to muscle loss, metabolic adaptation, and severe fatigue. Our calorie deficit calculator helps you find the "sweet spot" for sustainable fat loss without sacrificing energy or muscle mass.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Combining a Deficit with Macronutrient Optimization</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>While a calorie deficit dictates weight loss, your macronutrient split dictates *what kind* of weight you lose. To ensure you lose body fat rather than lean muscle tissue, it is crucial to consume adequate dietary protein. We recommend using our Macro Calculator alongside your deficit targets to establish an optimal protein, carbohydrate, and fat ratio that supports your training and preserves your metabolism during your diet phase.</p>
            </section>
            

            <section style={{ background: 'var(--blue-light)', padding: '2rem', borderRadius: 'var(--r-lg)', marginTop: '2rem' }}>
              <h3 style={{ marginTop: 0, color: 'var(--text)' }}>Maximize Your Results with Internal Tools</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
                Your Calorie Deficit is just one piece of the puzzle. To build a comprehensive, bulletproof fitness and nutrition strategy, integrate this data with our other professional-grade calculators. We recommend establishing your baseline with our <Link href="/tdee-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>TDEE Calculator</Link> to understand your total daily energy expenditure, and then using the <Link href="/macro-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>Macro Calculator</Link> to find your optimal split of proteins, carbohydrates, and fats.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <Link href="/bmi-calculator" className="btn outline" style={{ textAlign: 'center' }}>Check Your BMI</Link>
                <Link href="/calorie-deficit" className="btn outline" style={{ textAlign: 'center' }}>Plan a Deficit</Link>
                <Link href="/body-fat-calculator" className="btn outline" style={{ textAlign: 'center' }}>Measure Body Fat</Link>
                <Link href="/protein-calculator" className="btn outline" style={{ textAlign: 'center' }}>Protein Needs</Link>
              </div>
            </section>
          </div>
        </article>
        {/* === END SEO CONTENT BLOCK === */}
  
      </div>
      </div>
        <Sidebar />
      </main>
    </>
  );
};

export default CalorieDeficit;
