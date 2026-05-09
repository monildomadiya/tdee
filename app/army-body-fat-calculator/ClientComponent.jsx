"use client";
import React, { useState } from 'react';

import Sidebar from '../../src/components/Sidebar';
import Link from 'next/link';

const ArmyBodyFat = () => {
  const [unit, setUnit] = useState('cm');
  const [gender, setGender] = useState('male');
  const [height, setHeight]   = useState('');
  const [neck, setNeck]       = useState('');
  const [waist, setWaist]     = useState('');
  const [hip, setHip]         = useState('');
  const [result, setResult]   = useState(null);

  const toIn = v => parseFloat(v) / 2.54;

  const calculate = (e) => {
    e.preventDefault();
    const hIn = unit === 'cm' ? toIn(height) : parseFloat(height);
    const nIn = unit === 'cm' ? toIn(neck)   : parseFloat(neck);
    const wIn = unit === 'cm' ? toIn(waist)  : parseFloat(waist);
    const hpIn= unit === 'cm' ? toIn(hip)    : parseFloat(hip);

    let bf;
    if (gender === 'male') {
      bf = 86.010 * Math.log10(wIn - nIn) - 70.041 * Math.log10(hIn) + 36.76;
    } else {
      bf = 163.205 * Math.log10(wIn + hpIn - nIn) - 97.684 * Math.log10(hIn) - 78.387;
    }
    bf = Math.max(0, Math.min(bf, 70));

    // US Army standards (as of AR 600-9)
    const standards = {
      male:   [{ age:'17-20',max:20},{ age:'21-27',max:22},{ age:'28-39',max:24},{ age:'40+',max:26}],
      female: [{ age:'17-20',max:30},{ age:'21-27',max:32},{ age:'28-39',max:34},{ age:'40+',max:36}],
    };

    setResult({ bf: bf.toFixed(1), standards: standards[gender] });
  };

  return (
    <>
      

      <div className="page-hero">
        <div className="container">
          <h1>Army / Military Body Fat Calculator</h1>
          <p>Official US Army circumference method (AR 600-9) — no calipers needed.</p>
        </div>
      </div>

      <main className="container tool-layout-container" style={{ paddingTop:'2rem', paddingBottom:'4rem' }}>
        <div className="tool-main-content">
        <div className="main-content">
          <div className="calculator-card">
            <div className="mac-header">
              <div className="mac-dots"><span className="mac-dot red"/><span className="mac-dot yellow"/><span className="mac-dot green"/></div>
              <div className="mac-title">ARMY BODY FAT</div>
            </div>
            <div className="calculator-card-body">
              <div className="calculator-grid">
                <div className="calc-form-container">
                  <div style={{ fontSize:'.75rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.06em', fontWeight:700, marginBottom:'1.25rem' }}>Your Measurements</div>
                  <form onSubmit={calculate}>
                    <div className="input-group">
                      <label>Biological Sex</label>
                      <div className="toggle-group">
                        <button type="button" className={`toggle-btn${gender==='male'?' active':''}`} onClick={()=>{setGender('male');setHip('');}}>Male</button>
                        <button type="button" className={`toggle-btn${gender==='female'?' active':''}`} onClick={()=>setGender('female')}>Female</button>
                      </div>
                    </div>
                    <div className="input-group">
                      <label>Measurement Unit</label>
                      <div className="toggle-group">
                        <button type="button" className={`toggle-btn${unit==='cm'?' active':''}`} onClick={()=>setUnit('cm')}>cm</button>
                        <button type="button" className={`toggle-btn${unit==='in'?' active':''}`} onClick={()=>setUnit('in')}>inches</button>
                      </div>
                    </div>
                    <div className="input-row">
                      <div className="input-group">
                        <label>Height ({unit})</label>
                        <input type="number" step="0.1" value={height} onChange={e=>setHeight(e.target.value)} placeholder={unit==='cm'?'e.g. 178':'e.g. 70'} required/>
                      </div>
                      <div className="input-group">
                        <label>Neck ({unit})</label>
                        <input type="number" step="0.1" value={neck} onChange={e=>setNeck(e.target.value)} placeholder={unit==='cm'?'e.g. 38':'e.g. 15'} required/>
                      </div>
                    </div>
                    <div className="input-group">
                      <label>Waist ({unit}) — at navel</label>
                      <input type="number" step="0.1" value={waist} onChange={e=>setWaist(e.target.value)} placeholder={unit==='cm'?'e.g. 85':'e.g. 33'} required/>
                    </div>
                    {gender === 'female' && (
                      <div className="input-group">
                        <label>Hip ({unit}) — widest point</label>
                        <input type="number" step="0.1" value={hip} onChange={e=>setHip(e.target.value)} placeholder={unit==='cm'?'e.g. 97':'e.g. 38'} required/>
                      </div>
                    )}
                    <button type="submit" className="btn-primary" style={{ marginTop:'1rem' }}>Calculate Body Fat</button>
                  </form>
                </div>

                <div style={{ display:'flex', flexDirection:'column', minHeight:'300px' }}>
                  <div style={{ background:'var(--bg)', border:'1px solid var(--border)', borderBottom:'none', padding:'1rem 1.5rem', fontWeight:600, fontSize:'.95rem', borderTopLeftRadius:'var(--r-lg)', borderTopRightRadius:'var(--r-lg)' }}>Output Container</div>
                  <div style={{ background:'#fff', flex:1, padding:'2rem 1.5rem', borderBottomLeftRadius:'var(--r-lg)', borderBottomRightRadius:'var(--r-lg)', border:'1px solid var(--border)', display:'flex', flexDirection:'column', justifyContent:result?'flex-start':'center', alignItems:'center' }}>
                    {!result ? (
                      <div style={{ color:'var(--muted)', textAlign:'center' }}>Enter your measurements to calculate military body fat</div>
                    ) : (
                      <div style={{ width:'100%', animation:'popIn .4s ease both' }}>
                        <div style={{ textAlign:'center', marginBottom:'1.5rem' }}>
                          <div style={{ fontSize:'.8rem', textTransform:'uppercase', letterSpacing:'.05em', color:'var(--text-2)', fontWeight:600, marginBottom:'.4rem' }}>Body Fat %</div>
                          <div style={{ fontSize:'4rem', fontWeight:900, color:'var(--green)', lineHeight:1 }}>{result.bf}<span style={{ fontSize:'1.5rem' }}>%</span></div>
                        </div>
                        <div style={{ border:'1px solid var(--border)', borderRadius:'var(--r)', overflow:'hidden' }}>
                          <div style={{ background:'var(--bg)', padding:'.6rem 1rem', fontSize:'.75rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'.05em', color:'var(--muted)' }}>US Army Max BF% by Age (AR 600-9)</div>
                          {result.standards.map(({age,max},i,arr)=>{
                            const passes = parseFloat(result.bf) <= max;
                            return (
                              <div key={age} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'.75rem 1rem', borderBottom:i<arr.length-1?'1px solid var(--border)':'none' }}>
                                <span style={{ fontSize:'.9rem', color:'var(--text-2)' }}>Age {age}</span>
                                <span style={{ display:'flex', alignItems:'center', gap:'.5rem' }}>
                                  <span style={{ fontWeight:700 }}>Max {max}%</span>
                                  <span style={{ fontSize:'.75rem', fontWeight:700, color: passes?'var(--green)':'#ef4444', background: passes?'var(--green-light)':'#fef2f2', padding:'2px 8px', borderRadius:'100px' }}>{passes?'PASS':'FAIL'}</span>
                                </span>
                              </div>
                            );
                          })}
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
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text)', marginBottom: '1rem' }}>The Ultimate Guide to Your Army Body Fat</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
              The Army Body Fat calculator is a specialized fitness and health tool designed to provide highly accurate metrics to optimize your daily routine, nutrition, and training program. Discover how to leverage this metric to accelerate your health, fitness, and nutritional goals using verified scientific data.
            </p>
          </header>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '3rem', justifyContent: 'center' }}>
            {["army body fat calculator","calculate army body fat","free army body fat tool","accurate army body fat","health and fitness metrics"].map((kw, i) => (
              <span key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '6px 14px', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 600 }}>#{kw}</span>
            ))}
          </div>

          <div className="seo-content-grid" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Comprehensive Guide to the Army Body Fat</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8 }}>Understanding your Army Body Fat is critical for optimizing your physical health and reaching your specific fitness goals. Whether your objective is to build lean muscle mass, maximize fat loss, improve athletic endurance, or simply maintain a healthy lifestyle, accurate data is your most powerful asset. Our professional-grade Army Body Fat calculator utilizes peer-reviewed scientific formulas to deliver precise, actionable insights tailored specifically to your unique physiological profile.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Why Accuracy Matters in Health Metrics</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8 }}>Generic health advice often fails because it applies a "one-size-fits-all" approach to fundamentally unique individuals. By calculating your exact Army Body Fat, you eliminate the guesswork from your nutrition and training. This targeted approach prevents common pitfalls such as under-eating, over-training, or setting unrealistic timelines. We strongly encourage users to cross-reference their results with our broader suite of tools, such as the TDEE Calculator and Macro Calculator, to build a holistic, data-driven action plan.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>How to Implement Your Results</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8 }}>Once you have calculated your Army Body Fat, the next step is implementation. We recommend tracking your progress consistently over a 2 to 4-week period to establish a reliable baseline. Because the human metabolism is highly adaptive, your requirements will change as your body composition evolves. Re-calculate your metrics regularly, adjust your dietary intake accordingly, and maintain consistency in your training protocol to guarantee long-term success and continuous progression.</p>
            </section>
            

            <section style={{ background: 'var(--blue-light)', padding: '2rem', borderRadius: 'var(--r-lg)', marginTop: '2rem' }}>
              <h3 style={{ marginTop: 0, color: 'var(--text)' }}>Maximize Your Results with Internal Tools</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
                Your Army Body Fat is just one piece of the puzzle. To build a comprehensive, bulletproof fitness and nutrition strategy, integrate this data with our other professional-grade calculators. We recommend establishing your baseline with our <Link href="/tdee-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>TDEE Calculator</Link> to understand your total daily energy expenditure, and then using the <Link href="/macro-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>Macro Calculator</Link> to find your optimal split of proteins, carbohydrates, and fats.
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
export default ArmyBodyFat;
