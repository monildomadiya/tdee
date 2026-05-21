"use client";
import React, { useState, useRef } from 'react';
import Sidebar from '../../src/components/Sidebar';
import EmbedButton from '../../src/components/EmbedButton';

export default function ReverseDietingCalculator() {
  const resultsRef = useRef(null);
  
  const [currentCals, setCurrentCals] = useState('');
  const [goalCals, setGoalCals] = useState('');
  const [rate, setRate] = useState('100'); // 100 kcal per week
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculate = (e) => {
    e.preventDefault();
    setError('');
    
    const curr = parseInt(currentCals);
    const goal = parseInt(goalCals);
    const r = parseInt(rate);

    if (!curr || !goal || curr <= 0 || goal <= 0) {
      setError('Please enter valid current and goal calories.');
      return;
    }
    
    if (curr >= goal) {
      setError('Goal calories must be higher than current calories for reverse dieting.');
      return;
    }

    const weeks = [];
    let currentStep = curr;
    let weekNum = 1;

    while (currentStep < goal) {
      currentStep += r;
      if (currentStep > goal) currentStep = goal;
      
      weeks.push({
        week: weekNum,
        cals: currentStep
      });
      weekNum++;
      
      if (weekNum > 52) { // safety limit
        break; 
      }
    }

    setResult({
      start: curr,
      goal: goal,
      weeks: weeks
    });
  };

  const reset = () => {
    setCurrentCals('');
    setGoalCals('');
    setResult(null);
    setError('');
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Reverse Dieting Calculator</h1>
          <p>Safely rebuild your metabolism after a long diet by slowly increasing your calories back to maintenance.</p>
        </div>
      </div>

      <div className="container tool-layout-container" style={{ paddingTop:'2rem', paddingBottom:'4rem' }}>
        <div className="tool-main-content">

          {/* ── Calculator Card ── */}
          <div className="calculator-card">
            <div className="mac-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="mac-dots" style={{ display: 'none' }}></div>
                <div className="mac-title" style={{ marginLeft: '12px' }}>Reverse Dieting</div>
              </div>
              <EmbedButton slug="reverse-dieting-calculator" />
            </div>
            
            <div className="calculator-card-body">
              <div className="calculator-grid">
              
                {/* LEFT SIDE: FORM */}
                <div className="calc-form-container">
                  <div style={{ fontSize: '.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 700, marginBottom: '1.25rem' }}>Your Details</div>
                  
                  <form onSubmit={calculate} noValidate className="calc-form">
                    
                    <div className="input-group">
                      <label htmlFor="curr-cals">Current Daily Intake (kcal)</label>
                      <input id="curr-cals" type="number" min="500" max="5000" value={currentCals}
                        onChange={e=>setCurrentCals(e.target.value)} placeholder="e.g. 1400" />
                    </div>

                    <div className="input-group">
                      <label htmlFor="goal-cals">Target Maintenance (kcal)</label>
                      <input id="goal-cals" type="number" min="1000" max="6000" value={goalCals}
                        onChange={e=>setGoalCals(e.target.value)} placeholder="e.g. 2200" />
                      <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '4px' }}>Don't know? Use our <a href="/tdee-calculator" style={{ color: 'var(--green)' }}>TDEE Calculator</a> first.</div>
                    </div>

                    <div className="input-group">
                      <label>Pace of Increase</label>
                      <select value={rate} onChange={e=>setRate(e.target.value)} style={{ cursor: 'pointer' }}>
                        <option value="50">Conservative (+50 kcal / week)</option>
                        <option value="100">Moderate (+100 kcal / week)</option>
                        <option value="150">Aggressive (+150 kcal / week)</option>
                      </select>
                    </div>

                    {error && (
                      <p role="alert" style={{ color:'var(--red-text)', background:'var(--red-light)', padding:'10px 14px', borderRadius:'var(--r-sm)', fontSize:'.9rem', marginBottom:'1rem' }}>
                        {error}
                      </p>
                    )}

                    <button type="submit" className="btn-primary" aria-label="Calculate Schedule" style={{ marginTop: '.5rem' }}>
                      Calculate Schedule
                    </button>
                  </form>
                </div>

                {/* RIGHT SIDE: RESULTS */}
                <div ref={resultsRef} className="results-container" style={{ display:'flex', flexDirection:'column', height:'100%', minHeight:'400px' }}>
                  <div style={{ background:'var(--bg)', border:'1px solid var(--border)', borderBottom:'none', color:'var(--text)', padding:'1rem 1.5rem', fontWeight:600, fontSize:'.95rem', borderTopLeftRadius:'var(--r-lg)', borderTopRightRadius:'var(--r-lg)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    Your Schedule
                    {result && (
                      <button onClick={reset} style={{ background:'var(--card)', border:'1px solid var(--border)', color:'var(--text)', width:'32px', height:'32px', borderRadius:'0', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }} title="Reset">↺</button>
                    )}
                  </div>

                  <div style={{ background:'var(--card)', flex:1, padding:'1.75rem 1.5rem', borderBottomLeftRadius:'var(--r-lg)', borderBottomRightRadius:'var(--r-lg)', display:'flex', flexDirection:'column', justifyContent: result?'flex-start':'center', alignItems:'center', border:'1px solid var(--border)' }}>
                    {!result ? (
                      <div style={{ color:'var(--muted)', textAlign:'center' }}>Enter your details to generate a plan</div>
                    ) : (
                      <div style={{ width:'100%' }}>
                        <div style={{ textAlign:'center', marginBottom:'1.5rem', paddingBottom:'1.5rem', borderBottom:'1px solid var(--border)' }}>
                          <div style={{ fontSize:'.7rem', textTransform:'uppercase', letterSpacing:'.08em', color:'var(--muted)', fontWeight:700, marginBottom:'.35rem' }}>Total Duration</div>
                          <div style={{ fontSize:'3.75rem', fontWeight:900, lineHeight:1, color:'var(--green)', letterSpacing:'-.04em' }}>{result.weeks.length}</div>
                          <div style={{ fontSize:'.9rem', color:'var(--text-2)', marginTop:'4px' }}>
                            weeks to reach maintenance
                          </div>
                        </div>

                        <div style={{ fontSize:'.7rem', textTransform:'uppercase', letterSpacing:'.08em', color:'var(--muted)', fontWeight:700, marginBottom:'.6rem' }}>Week-by-Week Targets</div>
                        
                        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'.85rem' }}>
                          <thead>
                            <tr style={{ borderBottom:'2px solid var(--border)' }}>
                              <th style={{ textAlign:'left', padding:'8px', color:'var(--muted)', fontWeight:600, fontSize:'.7rem', textTransform:'uppercase' }}>Week</th>
                              <th style={{ textAlign:'right', padding:'8px', color:'var(--muted)', fontWeight:600, fontSize:'.7rem', textTransform:'uppercase' }}>Daily Target</th>
                            </tr>
                          </thead>
                          <tbody>
                            {result.weeks.map((w, idx) => (
                              <tr key={w.week} style={{ borderBottom:'1px solid var(--border)', background: idx % 2 === 0 ? 'transparent' : 'var(--bg)' }}>
                                <td style={{ padding:'10px 8px', fontWeight:700, color:'var(--text)' }}>Week {w.week}</td>
                                <td style={{ textAlign:'right', padding:'10px 8px', fontWeight:800, color:'var(--green)', fontSize:'1rem' }}>{w.cals.toLocaleString()} <span style={{ fontSize: '0.7rem', color: 'var(--muted)', fontWeight: 600 }}>kcal</span></td>
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
          
          {/* SEO Article */}
          <div className="article-section">
            <h2>What is Reverse Dieting?</h2>
            <p>Reverse dieting is the process of gradually increasing your calorie intake over a period of weeks or months after a sustained calorie deficit (diet). The goal is to raise your metabolism back to normal maintenance levels while minimizing fat gain.</p>
            
            <h2>Why is Reverse Dieting Important?</h2>
            <p>When you restrict calories for a long time, your body undergoes <strong>metabolic adaptation</strong>. Your metabolism slows down to conserve energy. If you suddenly start eating "normally" again immediately after a diet, your slowed metabolism will store those extra calories as fat rapidly.</p>
            <p>By slowly adding 50 to 100 calories per week, you allow your metabolism time to adapt and speed back up, safely returning you to maintenance calories.</p>
          </div>

        </div>
        <Sidebar />
      </div>
    </>
  );
}
