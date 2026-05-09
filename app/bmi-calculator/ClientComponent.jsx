"use client";
import React, { useState } from 'react';

import Link from 'next/link';
import AdSlot from '../../src/components/AdSlot';
import Sidebar from '../../src/components/Sidebar';

const BMICalculator = () => {
  const [unit, setUnit] = useState('metric');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    let h, w;
    if (unit === 'imperial') {
      h = (parseFloat(heightFt || 0) * 12 + parseFloat(heightIn || 0)) * 0.0254;
    } else {
      h = parseFloat(height) / 100;
    }
    
    if (unit === 'metric') {
      w = parseFloat(weight);
    } else {
      w = parseFloat(weight) * 0.453592;
    }
    const bmi = w / (h * h);
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Healthy Weight';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';
    setResult({ bmi: bmi.toFixed(1), category });
  };

  return (
    <>
      

      <div className="page-hero">
        <div className="container">
          <h1>BMI Calculator</h1>
          <p>Calculate your Body Mass Index to determine if you are at a healthy weight for your height.</p>
        </div>
      </div>

      <main className="container tool-layout-container" style={{ paddingTop:'2rem', paddingBottom:'4rem' }}>
        <div className="tool-main-content">
        <div className="main-content">
          <AdSlot label="Above Calculator" slotId="1111111111" />

          <section className="how-it-works">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>How it Works</h2>
          <ol style={{ marginLeft: '1.5rem', color: '#4b5563' }}>
            <li><strong>Select Unit:</strong> Choose Metric, US, or UK/Mixed (lbs/cm).</li>
            <li><strong>Enter Height:</strong> Provide your total height.</li>
            <li><strong>Enter Weight:</strong> Provide your current weight.</li>
            <li><strong>See Results:</strong> Instantly compare to WHO health categories.</li>
          </ol>
        </section>

        <div className="calculator-card">
          <div className="mac-header">
            <div className="mac-dots">
              <span className="mac-dot red"></span>
              <span className="mac-dot yellow"></span>
              <span className="mac-dot green"></span>
            </div>
            <div className="mac-title">BMI CALCULATOR</div>
          </div>
          <div className="calculator-card-body">
            <div className="calculator-grid">
              <div className="calc-form-container">
              <div style={{ fontSize: '.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 700, marginBottom: '1.25rem' }}>Your Details</div>
              <form onSubmit={calculate}>
                <div className="input-group">
                  <label>Unit System</label>
                  <div className="toggle-group">
                    <button type="button" className={`toggle-btn${unit==='metric'?' active':''}`} onClick={()=>{setUnit('metric');setResult(null);}}><span>Metric</span><span className="sub-text">(kg, cm)</span></button>
                    <button type="button" className={`toggle-btn${unit==='mixed'?' active':''}`} onClick={()=>{setUnit('mixed');setResult(null);}}><span>UK/Mixed</span><span className="sub-text">(lbs, cm)</span></button>
                    <button type="button" className={`toggle-btn${unit==='imperial'?' active':''}`} onClick={()=>{setUnit('imperial');setResult(null);}}><span>US</span><span className="sub-text">(lbs, ft)</span></button>
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <label>Weight ({unit === 'metric' ? 'kg' : 'lbs'})</label>
                    <input type="number" step="0.1" value={weight} onChange={e => setWeight(e.target.value)} placeholder={unit === 'metric' ? "e.g. 70" : "e.g. 154"} required />
                  </div>
                  <div className="input-group">
                    <label>Height ({unit === 'imperial' ? 'ft/in' : 'cm'})</label>
                    {unit === 'imperial' ? (
                      <div style={{ display:'flex', gap:'8px' }}>
                        <input type="number" value={heightFt} onChange={e=>setHeightFt(e.target.value)} placeholder="ft" required style={{ flex:1 }} />
                        <input type="number" value={heightIn} onChange={e=>setHeightIn(e.target.value)} placeholder="in" style={{ flex:1 }} />
                      </div>
                    ) : (
                      <input type="number" step="0.1" value={height} onChange={e => setHeight(e.target.value)} placeholder="e.g. 175" required />
                    )}
                  </div>
                </div>
                <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>Calculate BMI</button>
              </form>
            </div>

            <div className="results-container" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '300px' }}>
              <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderBottom: 'none', color: 'var(--text)', padding: '1rem 1.5rem', fontWeight: 600, fontSize: '.95rem', borderTopLeftRadius: 'var(--r-lg)', borderTopRightRadius: 'var(--r-lg)' }}>
                Output Container
              </div>
              <div style={{ background: '#fff', flex: 1, padding: '2rem 1.5rem', borderBottomLeftRadius: 'var(--r-lg)', borderBottomRightRadius: 'var(--r-lg)', display: 'flex', flexDirection: 'column', justifyContent: result ? 'flex-start' : 'center', alignItems: 'center', border: '1px solid var(--border)' }}>
                {!result ? (
                  <div style={{ color: 'var(--muted)', textAlign: 'center' }}>
                    Enter your details to see your BMI
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', animation: 'popIn .4s ease both', width: '100%' }}>
                    <div style={{ fontSize: '.85rem', textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--text-2)', fontWeight: 600, marginBottom: '.5rem' }}>Your Body Mass Index</div>
                    <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--green)', lineHeight: 1 }}>{result.bmi}</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', marginTop: '1rem', padding: '0.5rem 1rem', background: 'var(--green-light)', borderRadius: '100px', display: 'inline-block' }}>{result.category}</div>
                  </div>
                )}
              </div>
            </div>
            </div>
          </div>
        </div>

        <AdSlot label="Below Results" slotId="2222222222" />

        
        {/* === AUTOMATED SEO CONTENT BLOCK === */}
        <article className="seo-article-content" style={{ marginTop: '4rem', padding: '2rem', background: '#fff', borderRadius: 'var(--r-xl)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
          <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text)', marginBottom: '1rem' }}>The Ultimate Guide to Your Body Mass Index (BMI)</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
              Body Mass Index (BMI) is a medical screening tool used globally to categorize weight status and assess potential health risks associated with being underweight, overweight, or obese. Discover how to leverage this metric to accelerate your health, fitness, and nutritional goals using verified scientific data.
            </p>
          </header>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '3rem', justifyContent: 'center' }}>
            {["BMI calculator","healthy weight range","body mass index formula","obesity screening","weight health status"].map((kw, i) => (
              <span key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '6px 14px', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 600 }}>#{kw}</span>
            ))}
          </div>

          <div className="seo-content-grid" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>What is BMI and Why Does it Matter?</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8 }}>The Body Mass Index (BMI) is a mathematical formula that scales your weight against your height. While it does not directly measure body fat, it correlates strongly with more direct measures of body fat, such as dual-energy x-ray absorptiometry (DXA) and underwater weighing. Medical professionals use BMI to screen for weight categories that may lead to health problems, including type 2 diabetes, heart disease, and hypertension.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>How to Calculate Your Body Mass Index</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8 }}>The traditional BMI formula is your weight in kilograms divided by your height in meters squared (kg/m²). For imperial units, the formula is your weight in pounds divided by your height in inches squared, multiplied by a conversion factor of 703. Our advanced BMI calculator handles these conversions automatically, allowing you to use metric, imperial, or mixed measurement systems to find your precise health category instantly.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Limitations of the BMI Formula</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8 }}>While BMI is an excellent baseline metric for population health, it has limitations at the individual level. BMI cannot distinguish between fat mass and muscle mass. Therefore, highly muscular individuals, such as athletes and bodybuilders, may classify as "overweight" or "obese" despite having very low body fat percentages. For a more comprehensive understanding of your body composition, we recommend using this tool in conjunction with our Body Fat Calculator and Lean Body Mass Calculator.</p>
            </section>
            

            <section style={{ background: 'var(--blue-light)', padding: '2rem', borderRadius: 'var(--r-lg)', marginTop: '2rem' }}>
              <h3 style={{ marginTop: 0, color: 'var(--text)' }}>Maximize Your Results with Internal Tools</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
                Your Body Mass Index (BMI) is just one piece of the puzzle. To build a comprehensive, bulletproof fitness and nutrition strategy, integrate this data with our other professional-grade calculators. We recommend establishing your baseline with our <Link href="/tdee-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>TDEE Calculator</Link> to understand your total daily energy expenditure, and then using the <Link href="/macro-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>Macro Calculator</Link> to find your optimal split of proteins, carbohydrates, and fats.
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

export default BMICalculator;
