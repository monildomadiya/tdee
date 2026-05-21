"use client";
import React, { useState } from 'react';

import Sidebar from '../../src/components/Sidebar';
import Link from 'next/link';
import EmbedButton from '../../src/components/EmbedButton';

const WeightLossTimeline = () => {
  const [current, setCurrent] = useState('');
  const [target, setTarget] = useState('');
  const [unit, setUnit] = useState('kg');
  const [deficit, setDeficit] = useState('500');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    let diffKg = parseFloat(current) - parseFloat(target);
    if (unit === 'lbs') diffKg = diffKg * 0.453592;
    if (diffKg <= 0) return;
    const deficitCal = parseInt(deficit);
    const calPerKg = 7700;
    const daysNeeded = Math.round((diffKg * calPerKg) / deficitCal);
    const weeksNeeded = Math.round(daysNeeded / 7);
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysNeeded);
    const lossPerWeek = unit === 'kg'
      ? ((deficitCal * 7) / calPerKg).toFixed(2)
      : (((deficitCal * 7) / calPerKg) * 2.205).toFixed(2);
    setResult({ daysNeeded, weeksNeeded, targetDate: targetDate.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'}), lossPerWeek, diffKg: diffKg.toFixed(1) });
  };

  return (
    <>
      

      <div className="page-hero">
        <div className="container">
          <h1>Weight Loss Timeline Calculator</h1>
          <p>Find out exactly how long it will take to reach your goal weight based on your chosen calorie deficit.</p>
        </div>
      </div>

      <main className="container tool-layout-container" style={{ paddingTop:'2rem', paddingBottom:'4rem' }}>
        <div className="tool-main-content">
        <div className="main-content">
          <div className="calculator-card">
            <div className="mac-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="mac-dots" style={{ display: 'none' }}></div>
              <div className="mac-title" style={{ marginLeft: '12px' }}>WEIGHT LOSS TIMELINE</div>
            </div>
            <EmbedButton slug="weight-loss-timeline" />
          </div>
            <div className="calculator-card-body">
              <div className="calculator-grid">
                <div className="calc-form-container">
                  <div style={{ fontSize:'.75rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.06em', fontWeight:700, marginBottom:'1.25rem' }}>Your Details</div>
                  <form onSubmit={calculate}>
                    <div className="input-group">
                      <label>Unit</label>
                      <div className="toggle-group" role="group">
                        <button type="button" className={`toggle-btn${unit==='kg'?' active':''}`} onClick={()=>setUnit('kg')}>kg</button>
                        <button type="button" className={`toggle-btn${unit==='lbs'?' active':''}`} onClick={()=>setUnit('lbs')}>lbs</button>
                      </div>
                    </div>
                    <div className="input-row">
                      <div className="input-group">
                        <label>Current Weight ({unit})</label>
                        <input type="number" value={current} onChange={e=>setCurrent(e.target.value)} placeholder={unit==='kg'?'e.g. 90':'e.g. 200'} required />
                      </div>
                      <div className="input-group">
                        <label>Goal Weight ({unit})</label>
                        <input type="number" value={target} onChange={e=>setTarget(e.target.value)} placeholder={unit==='kg'?'e.g. 75':'e.g. 165'} required />
                      </div>
                    </div>
                    <div className="input-group">
                      <label>Daily Calorie Deficit</label>
                      <select value={deficit} onChange={e=>setDeficit(e.target.value)}>
                        <option value="250">Mild — 250 cal/day (~0.25kg/week)</option>
                        <option value="500">Moderate — 500 cal/day (~0.5kg/week)</option>
                        <option value="750">Aggressive — 750 cal/day (~0.75kg/week)</option>
                        <option value="1000">Maximum — 1000 cal/day (~1kg/week)</option>
                      </select>
                    </div>
                    <button type="submit" className="btn-primary" style={{ marginTop:'1rem' }}>Calculate Timeline</button>
                  </form>
                </div>

                <div className="results-container" style={{ display:'flex', flexDirection:'column', minHeight:'300px' }}>
                  <div style={{ background:'var(--bg)', border:'1px solid var(--border)', borderBottom:'none', color:'var(--text)', padding:'1rem 1.5rem', fontWeight:600, fontSize:'.95rem', borderTopLeftRadius:'var(--r-lg)', borderTopRightRadius:'var(--r-lg)' }}>Output Container</div>
                  <div style={{ background:'#fff', flex:1, padding:'2rem 1.5rem', borderBottomLeftRadius:'var(--r-lg)', borderBottomRightRadius:'var(--r-lg)', display:'flex', flexDirection:'column', justifyContent:result?'flex-start':'center', alignItems:'center', border:'1px solid var(--border)' }}>
                    {!result ? (
                      <div style={{ color:'var(--muted)', textAlign:'center' }}>Enter your weights to see your timeline</div>
                    ) : (
                      <div style={{ textAlign:'center', animation:'popIn .4s ease both', width:'100%' }}>
                        <div style={{ fontSize:'.8rem', textTransform:'uppercase', letterSpacing:'.05em', color:'var(--text-2)', fontWeight:600, marginBottom:'.4rem' }}>Time to Goal</div>
                        <div style={{ fontSize:'3.5rem', fontWeight:900, color:'var(--green)', lineHeight:1 }}>{result.weeksNeeded}</div>
                        <div style={{ fontSize:'1.1rem', color:'var(--text-2)', marginTop:'4px' }}>weeks · {result.daysNeeded} days</div>
                        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginTop:'1.5rem' }}>
                          <div style={{ background:'var(--green-light)', border:'1px solid var(--border)', padding:'1rem', borderRadius:'var(--r-md)' }}>
                            <div style={{ fontSize:'.7rem', textTransform:'uppercase', fontWeight:700, color:'var(--muted)' }}>Goal Date</div>
                            <div style={{ fontWeight:800, color:'var(--green)', fontSize:'.9rem', marginTop:'4px' }}>{result.targetDate}</div>
                          </div>
                          <div style={{ background:'var(--blue-light-alt)', border:'1px solid #bfdbfe', padding:'1rem', borderRadius:'var(--r-md)' }}>
                            <div style={{ fontSize:'.7rem', textTransform:'uppercase', fontWeight:700, color:'var(--muted)' }}>Loss/Week</div>
                            <div style={{ fontWeight:800, color:'#2563eb', fontSize:'.9rem', marginTop:'4px' }}>{result.lossPerWeek} {unit}</div>
                          </div>
                        </div>
                        <div style={{ marginTop:'1rem', fontSize:'.8rem', color:'var(--muted)', background:'#fffbeb', padding:'.75rem', borderRadius:'var(--r-sm)', border:'1px solid #fde68a' }}>
                          ⚠ Timeline assumes consistent deficit. Recalculate every 4–6 weeks as your TDEE decreases with weight loss.
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
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text)', marginBottom: '1rem' }}>The Ultimate Guide to Your Weight Loss Timeline</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
              The Weight Loss Timeline calculator is a specialized fitness and health tool designed to provide highly accurate metrics to optimize your daily routine, nutrition, and training program. Discover how to leverage this metric to accelerate your health, fitness, and nutritional goals using verified scientific data.
            </p>
          </header>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '1.5rem', justifyContent: 'center' }}>
            {["weight loss timeline calculator","calculate weight loss timeline","free weight loss timeline tool","accurate weight loss timeline","health and fitness metrics"].map((kw, i) => (
              <span key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '6px 14px', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 600 }}>#{kw}</span>
            ))}
          </div>

          <div className="seo-content-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Comprehensive Guide to the Weight Loss Timeline</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Understanding your Weight Loss Timeline is critical for optimizing your physical health and reaching your specific fitness goals. Whether your objective is to build lean muscle mass, maximize fat loss, improve athletic endurance, or simply maintain a healthy lifestyle, accurate data is your most powerful asset. Our professional-grade Weight Loss Timeline calculator utilizes peer-reviewed scientific formulas to deliver precise, actionable insights tailored specifically to your unique physiological profile.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Why Accuracy Matters in Health Metrics</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Generic health advice often fails because it applies a "one-size-fits-all" approach to fundamentally unique individuals. By calculating your exact Weight Loss Timeline, you eliminate the guesswork from your nutrition and training. This targeted approach prevents common pitfalls such as under-eating, over-training, or setting unrealistic timelines. We strongly encourage users to cross-reference their results with our broader suite of tools, such as the TDEE Calculator and Macro Calculator, to build a holistic, data-driven action plan.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>How to Implement Your Results</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Once you have calculated your Weight Loss Timeline, the next step is implementation. We recommend tracking your progress consistently over a 2 to 4-week period to establish a reliable baseline. Because the human metabolism is highly adaptive, your requirements will change as your body composition evolves. Re-calculate your metrics regularly, adjust your dietary intake accordingly, and maintain consistency in your training protocol to guarantee long-term success and continuous progression.</p>
            </section>
            

            <section style={{ background: 'var(--blue-light)', padding: '2rem', borderRadius: 'var(--r-lg)', marginTop: '2rem' }}>
              <h3 style={{ marginTop: 0, color: 'var(--text)' }}>Maximize Your Results with Internal Tools</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
                Your Weight Loss Timeline is just one piece of the puzzle. To build a comprehensive, bulletproof fitness and nutrition strategy, integrate this data with our other professional-grade calculators. We recommend establishing your baseline with our <Link href="/tdee-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>TDEE Calculator</Link> to understand your total daily energy expenditure, and then using the <Link href="/macro-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>Macro Calculator</Link> to find your optimal split of proteins, carbohydrates, and fats.
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
export default WeightLossTimeline;
