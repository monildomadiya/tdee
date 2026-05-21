"use client";
import React, { useState } from 'react';

import Sidebar from '../../src/components/Sidebar';
import Link from 'next/link';
import EmbedButton from '../../src/components/EmbedButton';

const OneRepMax = () => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [unit, setUnit] = useState('kg');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const r = parseInt(reps);
    // Brzycki formula
    const orm = w / (1.0278 - 0.0278 * r);
    const percentages = [100, 95, 90, 85, 80, 75, 70, 65, 60];
    const targets = percentages.map(pct => ({
      pct,
      weight: Math.round(orm * pct / 100 * 10) / 10,
      reps: pct === 100 ? 1 : pct >= 95 ? 2 : pct >= 90 ? 4 : pct >= 85 ? 6 : pct >= 80 ? 8 : pct >= 75 ? 10 : pct >= 70 ? 12 : pct >= 65 ? 15 : 20,
    }));
    setResult({ orm: Math.round(orm * 10) / 10, targets });
  };

  return (
    <>
      

      <div className="page-hero">
        <div className="container">
          <h1>One Rep Max Calculator (1RM)</h1>
          <p>Calculate your maximum strength for any lift and get a full percentage-based training table.</p>
        </div>
      </div>

      <main className="container tool-layout-container" style={{ paddingTop:'2rem', paddingBottom:'4rem' }}>
        <div className="tool-main-content">
        <div className="main-content">
          <div className="calculator-card">
            <div className="mac-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="mac-dots" style={{ display: 'none' }}></div>
              <div className="mac-title" style={{ marginLeft: '12px' }}>1RM STRENGTH CALCULATOR</div>
            </div>
            <EmbedButton slug="one-rep-max-calculator" />
          </div>
            <div className="calculator-card-body">
              <div className="calculator-grid">
                <div className="calc-form-container">
                  <div style={{ fontSize:'.75rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.06em', fontWeight:700, marginBottom:'1.25rem' }}>Your Lift</div>
                  <form onSubmit={calculate}>
                    <div className="input-group">
                      <label>Unit</label>
                      <div className="toggle-group" role="group">
                        <button type="button" className={`toggle-btn${unit==='kg'?' active':''}`} onClick={()=>setUnit('kg')}>kg</button>
                        <button type="button" className={`toggle-btn${unit==='lbs'?' active':''}`} onClick={()=>setUnit('lbs')}>lbs</button>
                      </div>
                    </div>
                    <div className="input-group">
                      <label>Weight Lifted ({unit})</label>
                      <input type="number" value={weight} onChange={e=>setWeight(e.target.value)} placeholder={unit==='kg'?'e.g. 100':'e.g. 225'} required />
                    </div>
                    <div className="input-group">
                      <label>Reps Completed</label>
                      <input type="number" value={reps} onChange={e=>setReps(e.target.value)} min="1" max="20" placeholder="e.g. 5" required />
                      <small style={{ marginTop:'6px', display:'block', color:'var(--muted)', fontSize:'.78rem' }}>Use a weight you could lift 1–10 times for best accuracy</small>
                    </div>
                    <button type="submit" className="btn-primary" style={{ marginTop:'1rem' }}>Calculate 1RM</button>
                  </form>
                </div>

                <div className="results-container" style={{ display:'flex', flexDirection:'column', minHeight:'300px' }}>
                  <div style={{ background:'var(--bg)', border:'1px solid var(--border)', borderBottom:'none', color:'var(--text)', padding:'1rem 1.5rem', fontWeight:600, fontSize:'.95rem', borderTopLeftRadius:'var(--r-lg)', borderTopRightRadius:'var(--r-lg)' }}>Output Container</div>
                  <div style={{ background:'#fff', flex:1, padding:'1.5rem', borderBottomLeftRadius:'var(--r-lg)', borderBottomRightRadius:'var(--r-lg)', display:'flex', flexDirection:'column', justifyContent:result?'flex-start':'center', alignItems:'center', border:'1px solid var(--border)', overflowY:'auto' }}>
                    {!result ? (
                      <div style={{ color:'var(--muted)', textAlign:'center' }}>Enter your lift details to calculate 1RM</div>
                    ) : (
                      <div style={{ width:'100%', animation:'popIn .4s ease both' }}>
                        <div style={{ textAlign:'center', marginBottom:'1.25rem', paddingBottom:'1.25rem', borderBottom:'1px solid var(--border)' }}>
                          <div style={{ fontSize:'.8rem', textTransform:'uppercase', letterSpacing:'.05em', color:'var(--text-2)', fontWeight:600, marginBottom:'.4rem' }}>Estimated 1 Rep Max</div>
                          <div style={{ fontSize:'3.5rem', fontWeight:900, color:'var(--green)', lineHeight:1 }}>{result.orm}<span style={{ fontSize:'1.3rem' }}>{unit}</span></div>
                        </div>
                        <div style={{ fontSize:'.7rem', textTransform:'uppercase', letterSpacing:'.08em', color:'var(--muted)', fontWeight:700, marginBottom:'.6rem' }}>Training Percentage Table</div>
                        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'.85rem' }}>
                          <thead>
                            <tr style={{ borderBottom:'2px solid var(--border)' }}>
                              <th style={{ textAlign:'left', padding:'5px 6px', color:'var(--muted)', fontWeight:600, fontSize:'.7rem' }}>%</th>
                              <th style={{ textAlign:'center', padding:'5px 6px', color:'var(--green)', fontWeight:700 }}>Weight ({unit})</th>
                              <th style={{ textAlign:'center', padding:'5px 6px', color:'var(--muted)', fontWeight:600, fontSize:'.7rem' }}>Target Reps</th>
                            </tr>
                          </thead>
                          <tbody>
                            {result.targets.map(t => (
                              <tr key={t.pct} style={{ borderBottom:'1px solid var(--border)', background: t.pct===100?'var(--green-light)':'transparent' }}>
                                <td style={{ padding:'6px', fontWeight: t.pct===100?800:600, color: t.pct===100?'var(--green)':'var(--text-2)', fontSize:'.82rem' }}>{t.pct}%</td>
                                <td style={{ textAlign:'center', padding:'6px', fontWeight:700 }}>{t.weight}</td>
                                <td style={{ textAlign:'center', padding:'6px', color:'var(--muted)', fontSize:'.82rem' }}>{t.reps} {t.reps===1?'rep':'reps'}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
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
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text)', marginBottom: '1rem' }}>The Ultimate Guide to Your One Rep Max</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
              The One Rep Max calculator is a specialized fitness and health tool designed to provide highly accurate metrics to optimize your daily routine, nutrition, and training program. Discover how to leverage this metric to accelerate your health, fitness, and nutritional goals using verified scientific data.
            </p>
          </header>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '1.5rem', justifyContent: 'center' }}>
            {["one rep max calculator","calculate one rep max","free one rep max tool","accurate one rep max","health and fitness metrics"].map((kw, i) => (
              <span key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '6px 14px', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 600 }}>#{kw}</span>
            ))}
          </div>

          <div className="seo-content-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Comprehensive Guide to the One Rep Max</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Understanding your One Rep Max is critical for optimizing your physical health and reaching your specific fitness goals. Whether your objective is to build lean muscle mass, maximize fat loss, improve athletic endurance, or simply maintain a healthy lifestyle, accurate data is your most powerful asset. Our professional-grade One Rep Max calculator utilizes peer-reviewed scientific formulas to deliver precise, actionable insights tailored specifically to your unique physiological profile.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Why Accuracy Matters in Health Metrics</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Generic health advice often fails because it applies a "one-size-fits-all" approach to fundamentally unique individuals. By calculating your exact One Rep Max, you eliminate the guesswork from your nutrition and training. This targeted approach prevents common pitfalls such as under-eating, over-training, or setting unrealistic timelines. We strongly encourage users to cross-reference their results with our broader suite of tools, such as the TDEE Calculator and Macro Calculator, to build a holistic, data-driven action plan.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>How to Implement Your Results</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Once you have calculated your One Rep Max, the next step is implementation. We recommend tracking your progress consistently over a 2 to 4-week period to establish a reliable baseline. Because the human metabolism is highly adaptive, your requirements will change as your body composition evolves. Re-calculate your metrics regularly, adjust your dietary intake accordingly, and maintain consistency in your training protocol to guarantee long-term success and continuous progression.</p>
            </section>
            

            <section style={{ background: 'var(--blue-light)', padding: '2rem', borderRadius: 'var(--r-lg)', marginTop: '2rem' }}>
              <h3 style={{ marginTop: 0, color: 'var(--text)' }}>Maximize Your Results with Internal Tools</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
                Your One Rep Max is just one piece of the puzzle. To build a comprehensive, bulletproof fitness and nutrition strategy, integrate this data with our other professional-grade calculators. We recommend establishing your baseline with our <Link href="/tdee-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>TDEE Calculator</Link> to understand your total daily energy expenditure, and then using the <Link href="/macro-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>Macro Calculator</Link> to find your optimal split of proteins, carbohydrates, and fats.
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
export default OneRepMax;
