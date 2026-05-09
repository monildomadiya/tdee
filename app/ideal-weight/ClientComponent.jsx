"use client";
import React, { useState } from 'react';

import Link from 'next/link';
import AdSlot from '../../src/components/AdSlot';
import Sidebar from '../../src/components/Sidebar';

const IdealWeight = () => {
  const [unit, setUnit] = useState('metric');
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    let totalInches;
    if (unit === 'imperial') {
      totalInches = parseFloat(heightFt || 0) * 12 + parseFloat(heightIn || 0);
    } else {
      totalInches = parseFloat(height) / 2.54;
    }
    const inchesOver5ft = totalInches - 60;
    let ibwKg = gender === 'male'
      ? 48 + 2.7 * inchesOver5ft
      : 45.5 + 2.2 * inchesOver5ft;
    ibwKg = Math.max(ibwKg, 40);
    
    const mult = unit === 'metric' ? 1 : 2.20462;
    const ibw = ibwKg * mult;
    
    setResult({ 
      ideal: ibw.toFixed(1), 
      low: (ibw * 0.9).toFixed(1), 
      high: (ibw * 1.1).toFixed(1),
      unitStr: unit === 'metric' ? 'kg' : 'lbs'
    });
  };

  return (
    <>
      

      <div className="page-hero">
        <div className="container">
          <h1>Ideal Weight Calculator</h1>
          <p>Estimate your ideal body weight using the Hamwi formula.</p>
        </div>
      </div>

      <main className="container tool-layout-container" style={{ paddingTop:'2rem', paddingBottom:'4rem' }}>
        <div className="tool-main-content">
        <div className="main-content">
          <AdSlot label="Above Calculator" slotId="1111111111" />

        <div className="calculator-card">
          <div className="mac-header">
            <div className="mac-dots">
              <span className="mac-dot red"></span>
              <span className="mac-dot yellow"></span>
              <span className="mac-dot green"></span>
            </div>
            <div className="mac-title">Hamwi Formula • Ideal Weight</div>
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
                <div className="input-group">
                  <label>Gender</label>
                  <div className="toggle-group">
                    <button type="button" className={`toggle-btn${gender==='male'?' active':''}`} onClick={()=>setGender('male')}>Male</button>
                    <button type="button" className={`toggle-btn${gender==='female'?' active':''}`} onClick={()=>setGender('female')}>Female</button>
                  </div>
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
                <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>Find Ideal Weight</button>
              </form>
            </div>

            <div className="results-container" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '300px' }}>
              <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderBottom: 'none', color: 'var(--text)', padding: '1rem 1.5rem', fontWeight: 600, fontSize: '.95rem', borderTopLeftRadius: 'var(--r-lg)', borderTopRightRadius: 'var(--r-lg)' }}>
                Output Container
              </div>
              <div style={{ background: '#fff', flex: 1, padding: '2rem 1.5rem', borderBottomLeftRadius: 'var(--r-lg)', borderBottomRightRadius: 'var(--r-lg)', display: 'flex', flexDirection: 'column', justifyContent: result ? 'flex-start' : 'center', alignItems: 'center', border: '1px solid var(--border)' }}>
                {!result ? (
                  <div style={{ color: 'var(--muted)', textAlign: 'center' }}>
                    Enter your details to see your ideal weight
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', animation: 'popIn .4s ease both', width: '100%' }}>
                    <div style={{ fontSize: '.85rem', textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--text-2)', fontWeight: 600, marginBottom: '.5rem' }}>Your Ideal Body Weight</div>
                    <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--green)', lineHeight: 1 }}>{result.ideal} <span style={{ fontSize: '1.5rem' }}>{result.unitStr}</span></div>
                    <div style={{ fontSize: '1rem', color: 'var(--text-2)', marginTop: '1rem' }}>Healthy Range: <strong>{result.low} – {result.high} {result.unitStr}</strong></div>
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
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text)', marginBottom: '1rem' }}>The Ultimate Guide to Your Ideal Weight</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
              The Ideal Weight calculator is a specialized fitness and health tool designed to provide highly accurate metrics to optimize your daily routine, nutrition, and training program. Discover how to leverage this metric to accelerate your health, fitness, and nutritional goals using verified scientific data.
            </p>
          </header>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '3rem', justifyContent: 'center' }}>
            {["ideal weight calculator","calculate ideal weight","free ideal weight tool","accurate ideal weight","health and fitness metrics"].map((kw, i) => (
              <span key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '6px 14px', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 600 }}>#{kw}</span>
            ))}
          </div>

          <div className="seo-content-grid" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Comprehensive Guide to the Ideal Weight</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8 }}>Understanding your Ideal Weight is critical for optimizing your physical health and reaching your specific fitness goals. Whether your objective is to build lean muscle mass, maximize fat loss, improve athletic endurance, or simply maintain a healthy lifestyle, accurate data is your most powerful asset. Our professional-grade Ideal Weight calculator utilizes peer-reviewed scientific formulas to deliver precise, actionable insights tailored specifically to your unique physiological profile.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Why Accuracy Matters in Health Metrics</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8 }}>Generic health advice often fails because it applies a "one-size-fits-all" approach to fundamentally unique individuals. By calculating your exact Ideal Weight, you eliminate the guesswork from your nutrition and training. This targeted approach prevents common pitfalls such as under-eating, over-training, or setting unrealistic timelines. We strongly encourage users to cross-reference their results with our broader suite of tools, such as the TDEE Calculator and Macro Calculator, to build a holistic, data-driven action plan.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>How to Implement Your Results</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8 }}>Once you have calculated your Ideal Weight, the next step is implementation. We recommend tracking your progress consistently over a 2 to 4-week period to establish a reliable baseline. Because the human metabolism is highly adaptive, your requirements will change as your body composition evolves. Re-calculate your metrics regularly, adjust your dietary intake accordingly, and maintain consistency in your training protocol to guarantee long-term success and continuous progression.</p>
            </section>
            

            <section style={{ background: 'var(--blue-light)', padding: '2rem', borderRadius: 'var(--r-lg)', marginTop: '2rem' }}>
              <h3 style={{ marginTop: 0, color: 'var(--text)' }}>Maximize Your Results with Internal Tools</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
                Your Ideal Weight is just one piece of the puzzle. To build a comprehensive, bulletproof fitness and nutrition strategy, integrate this data with our other professional-grade calculators. We recommend establishing your baseline with our <Link href="/tdee-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>TDEE Calculator</Link> to understand your total daily energy expenditure, and then using the <Link href="/macro-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>Macro Calculator</Link> to find your optimal split of proteins, carbohydrates, and fats.
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

export default IdealWeight;
