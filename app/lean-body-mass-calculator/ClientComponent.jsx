"use client";
import React, { useState } from 'react';

import Sidebar from '../../src/components/Sidebar';
import Link from 'next/link';

const LeanBodyMass = () => {
  const [unit, setUnit] = useState('kg');
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const wKg = unit === 'kg' ? parseFloat(weight) : parseFloat(weight) * 0.453592;
    const hCm = unit === 'kg' ? parseFloat(height) : parseFloat(height) * 2.54;
    const boer  = gender === 'male' ? 0.407*wKg + 0.267*hCm - 19.2  : 0.252*wKg + 0.473*hCm - 48.3;
    const james = gender === 'male' ? 1.1*wKg - 128*Math.pow(wKg/hCm,2) : 1.07*wKg - 148*Math.pow(wKg/hCm,2);
    const hume  = gender === 'male' ? 0.3281*wKg + 0.33929*hCm - 29.5336 : 0.29569*wKg + 0.41813*hCm - 43.2933;
    const avg = (boer + james + hume) / 3;
    const fatMass = wKg - avg;
    const conv = unit === 'lbs' ? 2.205 : 1;
    setResult({
      boer: (boer*conv).toFixed(1), james: (james*conv).toFixed(1), hume: (hume*conv).toFixed(1),
      avg: (avg*conv).toFixed(1), fatMass: (fatMass*conv).toFixed(1),
      bodyFatPct: ((fatMass/wKg)*100).toFixed(1), unit: unit === 'kg' ? 'kg' : 'lbs',
    });
  };

  return (
    <>
      

      <div className="page-hero">
        <div className="container">
          <h1>Lean Body Mass Calculator</h1>
          <p>Calculate your fat-free mass using three validated clinical formulas with a side-by-side comparison.</p>
        </div>
      </div>

      <main className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="main-content">
          <div className="calculator-card">
            <div className="mac-header">
              <div className="mac-dots"><span className="mac-dot red"/><span className="mac-dot yellow"/><span className="mac-dot green"/></div>
              <div className="mac-title">LEAN BODY MASS</div>
            </div>
            <div className="calculator-card-body">
              <div className="calculator-grid">
                <div className="calc-form-container">
                  <div style={{ fontSize:'.75rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.06em', fontWeight:700, marginBottom:'1.25rem' }}>Your Details</div>
                  <form onSubmit={calculate}>
                    <div className="input-group">
                      <label>Biological Sex</label>
                      <div className="toggle-group">
                        <button type="button" className={`toggle-btn${gender==='male'?' active':''}`} onClick={()=>setGender('male')}>Male</button>
                        <button type="button" className={`toggle-btn${gender==='female'?' active':''}`} onClick={()=>setGender('female')}>Female</button>
                      </div>
                    </div>
                    <div className="input-group">
                      <label>Unit System</label>
                      <div className="toggle-group">
                        <button type="button" className={`toggle-btn${unit==='kg'?' active':''}`} onClick={()=>setUnit('kg')}>kg / cm</button>
                        <button type="button" className={`toggle-btn${unit==='lbs'?' active':''}`} onClick={()=>setUnit('lbs')}>lbs / in</button>
                      </div>
                    </div>
                    <div className="input-row">
                      <div className="input-group">
                        <label>Weight ({unit})</label>
                        <input type="number" value={weight} onChange={e=>setWeight(e.target.value)} placeholder={unit==='kg'?'e.g. 80':'e.g. 176'} required/>
                      </div>
                      <div className="input-group">
                        <label>Height ({unit==='kg'?'cm':'in'})</label>
                        <input type="number" value={height} onChange={e=>setHeight(e.target.value)} placeholder={unit==='kg'?'e.g. 175':'e.g. 69'} required/>
                      </div>
                    </div>
                    <button type="submit" className="btn-primary" style={{ marginTop:'1rem' }}>Calculate LBM</button>
                  </form>
                </div>

                <div style={{ display:'flex', flexDirection:'column', minHeight:'300px' }}>
                  <div style={{ background:'var(--bg)', border:'1px solid var(--border)', borderBottom:'none', padding:'1rem 1.5rem', fontWeight:600, fontSize:'.95rem', borderTopLeftRadius:'var(--r-lg)', borderTopRightRadius:'var(--r-lg)' }}>Output Container</div>
                  <div style={{ background:'#fff', flex:1, padding:'2rem 1.5rem', borderBottomLeftRadius:'var(--r-lg)', borderBottomRightRadius:'var(--r-lg)', border:'1px solid var(--border)', display:'flex', flexDirection:'column', justifyContent:result?'flex-start':'center', alignItems:'center' }}>
                    {!result ? (
                      <div style={{ color:'var(--muted)', textAlign:'center' }}>Enter your details to calculate lean body mass</div>
                    ) : (
                      <div style={{ width:'100%', animation:'popIn .4s ease both' }}>
                        <div style={{ textAlign:'center', marginBottom:'1.5rem' }}>
                          <div style={{ fontSize:'.8rem', textTransform:'uppercase', letterSpacing:'.05em', color:'var(--text-2)', fontWeight:600, marginBottom:'.4rem' }}>Average LBM (3 formulas)</div>
                          <div style={{ fontSize:'3.5rem', fontWeight:900, color:'var(--green)', lineHeight:1 }}>{result.avg}<span style={{ fontSize:'1.4rem' }}> {result.unit}</span></div>
                          <div style={{ fontSize:'.9rem', color:'var(--muted)', marginTop:'4px' }}>Fat Mass: {result.fatMass} {result.unit} ({result.bodyFatPct}%)</div>
                        </div>
                        <div style={{ border:'1px solid var(--border)', borderRadius:'var(--r)', overflow:'hidden', marginBottom:'1rem' }}>
                          <div style={{ background:'var(--bg)', padding:'.6rem 1rem', fontSize:'.75rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'.05em', color:'var(--muted)' }}>Formula Comparison</div>
                          {[['Boer (recommended)',result.boer],['James',result.james],['Hume',result.hume]].map(([name,val],i,arr)=>(
                            <div key={name} style={{ display:'flex', justifyContent:'space-between', padding:'.75rem 1rem', borderBottom:i<arr.length-1?'1px solid var(--border)':'none' }}>
                              <span style={{ fontSize:'.9rem', color:'var(--text-2)' }}>{name}</span>
                              <span style={{ fontWeight:700 }}>{val} {result.unit}</span>
                            </div>
                          ))}
                        </div>
                        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px' }}>
                          <div style={{ background:'var(--green-light)', border:'1px solid var(--border)', borderRadius:'var(--r-sm)', padding:'.75rem', textAlign:'center' }}>
                            <div style={{ fontSize:'.7rem', color:'var(--muted)', textTransform:'uppercase', fontWeight:600 }}>Lean Mass</div>
                            <div style={{ fontSize:'1.1rem', fontWeight:800, color:'var(--green)' }}>{result.avg} {result.unit}</div>
                          </div>
                          <div style={{ background:'var(--bg)', border:'1px solid var(--border)', borderRadius:'var(--r-sm)', padding:'.75rem', textAlign:'center' }}>
                            <div style={{ fontSize:'.7rem', color:'var(--muted)', textTransform:'uppercase', fontWeight:600 }}>Fat Mass</div>
                            <div style={{ fontSize:'1.1rem', fontWeight:800 }}>{result.fatMass} {result.unit}</div>
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
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text)', marginBottom: '1rem' }}>The Ultimate Guide to Your Lean Body Mass</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
              The Lean Body Mass calculator is a specialized fitness and health tool designed to provide highly accurate metrics to optimize your daily routine, nutrition, and training program. Discover how to leverage this metric to accelerate your health, fitness, and nutritional goals using verified scientific data.
            </p>
          </header>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '3rem', justifyContent: 'center' }}>
            {["lean body mass calculator","calculate lean body mass","free lean body mass tool","accurate lean body mass","health and fitness metrics"].map((kw, i) => (
              <span key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '6px 14px', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 600 }}>#{kw}</span>
            ))}
          </div>

          <div className="seo-content-grid" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Comprehensive Guide to the Lean Body Mass</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8 }}>Understanding your Lean Body Mass is critical for optimizing your physical health and reaching your specific fitness goals. Whether your objective is to build lean muscle mass, maximize fat loss, improve athletic endurance, or simply maintain a healthy lifestyle, accurate data is your most powerful asset. Our professional-grade Lean Body Mass calculator utilizes peer-reviewed scientific formulas to deliver precise, actionable insights tailored specifically to your unique physiological profile.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Why Accuracy Matters in Health Metrics</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8 }}>Generic health advice often fails because it applies a "one-size-fits-all" approach to fundamentally unique individuals. By calculating your exact Lean Body Mass, you eliminate the guesswork from your nutrition and training. This targeted approach prevents common pitfalls such as under-eating, over-training, or setting unrealistic timelines. We strongly encourage users to cross-reference their results with our broader suite of tools, such as the TDEE Calculator and Macro Calculator, to build a holistic, data-driven action plan.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>How to Implement Your Results</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8 }}>Once you have calculated your Lean Body Mass, the next step is implementation. We recommend tracking your progress consistently over a 2 to 4-week period to establish a reliable baseline. Because the human metabolism is highly adaptive, your requirements will change as your body composition evolves. Re-calculate your metrics regularly, adjust your dietary intake accordingly, and maintain consistency in your training protocol to guarantee long-term success and continuous progression.</p>
            </section>
            

            <section style={{ background: 'var(--blue-light)', padding: '2rem', borderRadius: 'var(--r-lg)', marginTop: '2rem' }}>
              <h3 style={{ marginTop: 0, color: 'var(--text)' }}>Maximize Your Results with Internal Tools</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
                Your Lean Body Mass is just one piece of the puzzle. To build a comprehensive, bulletproof fitness and nutrition strategy, integrate this data with our other professional-grade calculators. We recommend establishing your baseline with our <Link href="/tdee-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>TDEE Calculator</Link> to understand your total daily energy expenditure, and then using the <Link href="/macro-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>Macro Calculator</Link> to find your optimal split of proteins, carbohydrates, and fats.
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
      </main>
    </>
  );
};
export default LeanBodyMass;
