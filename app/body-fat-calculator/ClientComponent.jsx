"use client";
import React, { useState } from 'react';

import Link from 'next/link';
import Sidebar from '../../src/components/Sidebar';

const BodyFat = () => {
  const [unit, setUnit] = useState('metric');
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [neck, setNeck] = useState('');
  const [waist, setWaist] = useState('');
  const [hips, setHips] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    let n = parseFloat(neck);
    let w = parseFloat(waist);
    let wt = parseFloat(weight);
    let hp = hips ? parseFloat(hips) : 0;
    
    let bf;
    if (unit === 'metric') {
      let h = parseFloat(height);
      if (gender === 'male') {
        bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
      } else {
        bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.22100 * Math.log10(h)) - 450;
      }
    } else {
      let h = parseFloat(height) * 12 + parseFloat(heightInches || 0);
      if (gender === 'male') {
        bf = 86.010 * Math.log10(w - n) - 70.041 * Math.log10(h) + 36.76;
      } else {
        bf = 163.205 * Math.log10(w + hp - n) - 97.684 * Math.log10(h) - 78.387;
      }
    }

    bf = Math.max(0, bf);
    const weightKg = unit === 'metric' ? wt : wt * 0.453592;
    const fatMassKg = (weightKg * bf / 100);
    const leanMassKg = (weightKg - fatMassKg);
    const fatMass = unit === 'metric' ? fatMassKg.toFixed(1) : (fatMassKg * 2.20462).toFixed(1);
    const leanMass = unit === 'metric' ? leanMassKg.toFixed(1) : (leanMassKg * 2.20462).toFixed(1);
    const weightUnit = unit === 'metric' ? 'kg' : 'lbs';
    setResult({ bf: bf.toFixed(1), fatMass, leanMass, weightUnit });
  };

  return (
    <>
      

      <div className="page-hero">
        <div className="container">
          <h1>Body Fat Percentage Calculator</h1>
          <p>Estimate your body fat using the scientifically validated U.S. Navy Method.</p>
        </div>
      </div>

      <main className="container tool-layout-container" style={{ paddingTop:'2rem', paddingBottom:'4rem' }}>
        <div className="tool-main-content">
        <div className="main-content">

        <div className="calculator-card">
          <div className="mac-header">
            <div className="mac-dots">
              <span className="mac-dot red"></span>
              <span className="mac-dot yellow"></span>
              <span className="mac-dot green"></span>
            </div>
            <div className="mac-title">BODY FAT %</div>
          </div>
          <div className="calculator-card-body">
            <div className="calculator-grid">
              <div className="calc-form-container">
              <div style={{ fontSize: '.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 700, marginBottom: '1.25rem' }}>Your Measurements</div>
              <form onSubmit={calculate}>
                <div className="input-group">
                  <label>Unit</label>
                  <div className="toggle-group" role="group">
                    <button type="button" className={`toggle-btn${unit==='metric'?' active':''}`} onClick={()=>setUnit('metric')}><span>Metric</span><span className="sub-text">(cm, kg)</span></button>
                    <button type="button" className={`toggle-btn${unit==='imperial'?' active':''}`} onClick={()=>setUnit('imperial')}><span>Imperial</span><span className="sub-text">(in, lbs)</span></button>
                  </div>
                </div>
                <div className="input-group">
                  <label>Gender</label>
                  <select value={gender} onChange={e => setGender(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <label>Height ({unit==='metric'?'cm':'in'})</label>
                    <input type="number" step="0.1" value={height} onChange={e => setHeight(e.target.value)} placeholder={unit==='metric'?"175":"69"} required />
                  </div>
                  <div className="input-group">
                    <label>Weight ({unit==='metric'?'kg':'lbs'})</label>
                    <input type="number" step="0.1" value={weight} onChange={e => setWeight(e.target.value)} placeholder={unit==='metric'?"75":"165"} required />
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <label>Neck ({unit==='metric'?'cm':'in'})</label>
                    <input type="number" step="0.1" value={neck} onChange={e => setNeck(e.target.value)} placeholder={unit==='metric'?"38":"15"} required />
                  </div>
                  <div className="input-group">
                    <label>Waist ({unit==='metric'?'cm':'in'})</label>
                    <input type="number" step="0.1" value={waist} onChange={e => setWaist(e.target.value)} placeholder={unit==='metric'?"85":"34"} required />
                  </div>
                </div>
                {gender === 'female' && (
                  <div className="input-group">
                    <label>Hips ({unit==='metric'?'cm':'in'})</label>
                    <input type="number" step="0.1" value={hips} onChange={e => setHips(e.target.value)} placeholder={unit==='metric'?"95":"38"} required />
                  </div>
                )}
                <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>Calculate Body Fat</button>
              </form>
            </div>

            <div className="results-container" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '350px' }}>
              <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderBottom: 'none', color: 'var(--text)', padding: '1rem 1.5rem', fontWeight: 600, fontSize: '.95rem', borderTopLeftRadius: 'var(--r-lg)', borderTopRightRadius: 'var(--r-lg)' }}>
                Output Container
              </div>
              <div style={{ background: '#fff', flex: 1, padding: '2rem 1.5rem', borderBottomLeftRadius: 'var(--r-lg)', borderBottomRightRadius: 'var(--r-lg)', display: 'flex', flexDirection: 'column', justifyContent: result ? 'flex-start' : 'center', alignItems: 'center', border: '1px solid var(--border)' }}>
                {!result ? (
                  <div style={{ color: 'var(--muted)', textAlign: 'center' }}>
                    Enter your measurements to see your body fat %
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', animation: 'popIn .4s ease both', width: '100%' }}>
                    <div style={{ fontSize: '.85rem', textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--text-2)', fontWeight: 600, marginBottom: '.5rem' }}>Body Fat Percentage</div>
                    <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--green)', lineHeight: 1 }}>{result.bf}%</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '2rem' }}>
                      <div style={{ background: '#fff', border: '1px solid var(--border)', padding: '.75rem', borderRadius: 'var(--r-sm)', boxShadow: 'var(--shadow-sm)' }}>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)' }}>{result.fatMass}{result.weightUnit}</div>
                        <div style={{ fontSize: '.7rem', textTransform: 'uppercase', color: 'var(--muted)' }}>Fat Mass</div>
                      </div>
                      <div style={{ background: '#fff', border: '1px solid var(--border)', padding: '.75rem', borderRadius: 'var(--r-sm)', boxShadow: 'var(--shadow-sm)' }}>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)' }}>{result.leanMass}{result.weightUnit}</div>
                        <div style={{ fontSize: '.7rem', textTransform: 'uppercase', color: 'var(--muted)' }}>Lean Mass</div>
                      </div>
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
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text)', marginBottom: '1rem' }}>The Ultimate Guide to Your Body Fat</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
              The Body Fat calculator is a specialized fitness and health tool designed to provide highly accurate metrics to optimize your daily routine, nutrition, and training program. Discover how to leverage this metric to accelerate your health, fitness, and nutritional goals using verified scientific data.
            </p>
          </header>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '1.5rem', justifyContent: 'center' }}>
            {["body fat calculator","calculate body fat","free body fat tool","accurate body fat","health and fitness metrics"].map((kw, i) => (
              <span key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '6px 14px', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 600 }}>#{kw}</span>
            ))}
          </div>

          <div className="seo-content-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Comprehensive Guide to the Body Fat</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Understanding your Body Fat is critical for optimizing your physical health and reaching your specific fitness goals. Whether your objective is to build lean muscle mass, maximize fat loss, improve athletic endurance, or simply maintain a healthy lifestyle, accurate data is your most powerful asset. Our professional-grade Body Fat calculator utilizes peer-reviewed scientific formulas to deliver precise, actionable insights tailored specifically to your unique physiological profile.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Why Accuracy Matters in Health Metrics</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Generic health advice often fails because it applies a "one-size-fits-all" approach to fundamentally unique individuals. By calculating your exact Body Fat, you eliminate the guesswork from your nutrition and training. This targeted approach prevents common pitfalls such as under-eating, over-training, or setting unrealistic timelines. We strongly encourage users to cross-reference their results with our broader suite of tools, such as the TDEE Calculator and Macro Calculator, to build a holistic, data-driven action plan.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>How to Implement Your Results</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Once you have calculated your Body Fat, the next step is implementation. We recommend tracking your progress consistently over a 2 to 4-week period to establish a reliable baseline. Because the human metabolism is highly adaptive, your requirements will change as your body composition evolves. Re-calculate your metrics regularly, adjust your dietary intake accordingly, and maintain consistency in your training protocol to guarantee long-term success and continuous progression.</p>
            </section>
            

            <section style={{ background: 'var(--blue-light)', padding: '2rem', borderRadius: 'var(--r-lg)', marginTop: '2rem' }}>
              <h3 style={{ marginTop: 0, color: 'var(--text)' }}>Maximize Your Results with Internal Tools</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
                Your Body Fat is just one piece of the puzzle. To build a comprehensive, bulletproof fitness and nutrition strategy, integrate this data with our other professional-grade calculators. We recommend establishing your baseline with our <Link href="/tdee-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>TDEE Calculator</Link> to understand your total daily energy expenditure, and then using the <Link href="/macro-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>Macro Calculator</Link> to find your optimal split of proteins, carbohydrates, and fats.
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

export default BodyFat;
