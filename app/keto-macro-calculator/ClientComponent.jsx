"use client";
import React, { useState } from 'react';

import Sidebar from '../../src/components/Sidebar';
import Link from 'next/link';

const KetoMacro = () => {
  const [unit, setUnit]       = useState('kg');
  const [gender, setGender]   = useState('male');
  const [age, setAge]         = useState('');
  const [weight, setWeight]   = useState('');
  const [height, setHeight]   = useState('');
  const [activity, setActivity] = useState('moderate');
  const [goal, setGoal]       = useState('loss');
  const [result, setResult]   = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const wKg = unit === 'kg' ? parseFloat(weight) : parseFloat(weight) * 0.453592;
    const hCm = unit === 'kg' ? parseFloat(height) : parseFloat(height) * 2.54;
    const a   = parseInt(age);

    // Mifflin-St Jeor BMR
    const bmr = gender === 'male'
      ? 10*wKg + 6.25*hCm - 5*a + 5
      : 10*wKg + 6.25*hCm - 5*a - 161;

    const actMult = { sedentary:1.2, light:1.375, moderate:1.55, active:1.725, athlete:1.9 };
    const tdee = bmr * actMult[activity];

    const goalAdj = { loss: -500, mild_loss: -250, maintain: 0, gain: 250 };
    const calories = Math.round(tdee + goalAdj[goal]);

    // Standard keto macro split: 5% carbs, 25% protein, 70% fat
    const carbsCal  = Math.round(calories * 0.05);
    const proteinCal= Math.round(calories * 0.25);
    const fatCal    = Math.round(calories * 0.70);

    const carbsG   = Math.round(carbsCal / 4);
    const proteinG = Math.round(proteinCal / 4);
    const fatG     = Math.round(fatCal / 9);

    // Net carb limit for ketosis
    const netCarbs = Math.min(carbsG, 20); // standard keto ≤ 20g net carbs

    setResult({ calories, carbsG, proteinG, fatG, netCarbs, bmr: Math.round(bmr), tdee: Math.round(tdee) });
  };

  const goalLabels = { loss:'Weight Loss (−500 kcal)', mild_loss:'Mild Loss (−250 kcal)', maintain:'Maintain', gain:'Lean Gain (+250 kcal)' };

  return (
    <>
      

      <div className="page-hero">
        <div className="container">
          <h1>Keto Macro Calculator</h1>
          <p>Get your personalised ketogenic macros — fat, protein, and net carbs — to stay in ketosis.</p>
        </div>
      </div>

      <main className="container tool-layout-container" style={{ paddingTop:'2rem', paddingBottom:'4rem' }}>
        <div className="tool-main-content">
        <div className="main-content">
          <div className="calculator-card">
            <div className="mac-header">
              <div className="mac-dots"><span className="mac-dot red"/><span className="mac-dot yellow"/><span className="mac-dot green"/></div>
              <div className="mac-title">KETO MACRO CALCULATOR</div>
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
                        <label>Age</label>
                        <input type="number" value={age} onChange={e=>setAge(e.target.value)} placeholder="e.g. 30" required/>
                      </div>
                      <div className="input-group">
                        <label>Weight ({unit})</label>
                        <input type="number" value={weight} onChange={e=>setWeight(e.target.value)} placeholder={unit==='kg'?'e.g. 80':'e.g. 176'} required/>
                      </div>
                    </div>
                    <div className="input-group">
                      <label>Height ({unit==='kg'?'cm':'in'})</label>
                      <input type="number" value={height} onChange={e=>setHeight(e.target.value)} placeholder={unit==='kg'?'e.g. 175':'e.g. 69'} required/>
                    </div>
                    <div className="input-group">
                      <label>Activity Level</label>
                      <select value={activity} onChange={e=>setActivity(e.target.value)}>
                        <option value="sedentary">Sedentary (desk job, no exercise)</option>
                        <option value="light">Light (1–3 days/week)</option>
                        <option value="moderate">Moderate (3–5 days/week)</option>
                        <option value="active">Active (6–7 days/week)</option>
                        <option value="athlete">Athlete (2× day training)</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <label>Goal</label>
                      <select value={goal} onChange={e=>setGoal(e.target.value)}>
                        <option value="loss">Weight Loss (−500 kcal/day)</option>
                        <option value="mild_loss">Mild Weight Loss (−250 kcal/day)</option>
                        <option value="maintain">Maintenance</option>
                        <option value="gain">Lean Muscle Gain (+250 kcal/day)</option>
                      </select>
                    </div>
                    <button type="submit" className="btn-primary" style={{ marginTop:'1rem' }}>Calculate Keto Macros</button>
                  </form>
                </div>

                <div style={{ display:'flex', flexDirection:'column', minHeight:'300px' }}>
                  <div style={{ background:'var(--bg)', border:'1px solid var(--border)', borderBottom:'none', padding:'1rem 1.5rem', fontWeight:600, fontSize:'.95rem', borderTopLeftRadius:'var(--r-lg)', borderTopRightRadius:'var(--r-lg)' }}>Output Container</div>
                  <div style={{ background:'#fff', flex:1, padding:'2rem 1.5rem', borderBottomLeftRadius:'var(--r-lg)', borderBottomRightRadius:'var(--r-lg)', border:'1px solid var(--border)', display:'flex', flexDirection:'column', justifyContent:result?'flex-start':'center', alignItems:'center' }}>
                    {!result ? (
                      <div style={{ color:'var(--muted)', textAlign:'center' }}>Enter your details to calculate your keto macros</div>
                    ) : (
                      <div style={{ width:'100%', animation:'popIn .4s ease both' }}>
                        <div style={{ textAlign:'center', marginBottom:'1.5rem' }}>
                          <div style={{ fontSize:'.8rem', textTransform:'uppercase', letterSpacing:'.05em', color:'var(--text-2)', fontWeight:600, marginBottom:'.4rem' }}>Daily Calories</div>
                          <div style={{ fontSize:'3.5rem', fontWeight:900, color:'var(--green)', lineHeight:1 }}>{result.calories.toLocaleString()}<span style={{ fontSize:'1.2rem' }}> kcal</span></div>
                          <div style={{ fontSize:'.85rem', color:'var(--muted)', marginTop:'4px' }}>BMR {result.bmr} · TDEE {result.tdee}</div>
                        </div>

                        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px', marginBottom:'1rem' }}>
                          {[
                            { label:'🥑 Fat', val:`${result.fatG}g`, sub:'70%', color:'var(--green)' },
                            { label:'🥩 Protein', val:`${result.proteinG}g`, sub:'25%', color:'var(--text)' },
                            { label:'🌾 Carbs', val:`${result.carbsG}g`, sub:'5%', color:'#f59e0b' },
                          ].map(({ label, val, sub, color }) => (
                            <div key={label} style={{ background:'var(--bg)', border:'1px solid var(--border)', borderRadius:'var(--r-sm)', padding:'.75rem .5rem', textAlign:'center' }}>
                              <div style={{ fontSize:'.75rem', color:'var(--muted)', fontWeight:600, marginBottom:'4px' }}>{label}</div>
                              <div style={{ fontSize:'1.3rem', fontWeight:900, color }}>{val}</div>
                              <div style={{ fontSize:'.7rem', color:'var(--muted)' }}>{sub} of cals</div>
                            </div>
                          ))}
                        </div>

                        <div style={{ background:'#fef9c3', border:'1px solid #fde68a', borderRadius:'var(--r)', padding:'1rem', textAlign:'center' }}>
                          <div style={{ fontSize:'.75rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'.05em', color:'#92400e', marginBottom:'4px' }}>⚡ Net Carb Limit for Ketosis</div>
                          <div style={{ fontSize:'2rem', fontWeight:900, color:'#92400e' }}>{result.netCarbs}g<span style={{ fontSize:'1rem' }}> net carbs / day</span></div>
                          <div style={{ fontSize:'.8rem', color:'#92400e', marginTop:'4px' }}>Standard ketogenic threshold — keeps most people in ketosis</div>
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
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text)', marginBottom: '1rem' }}>The Ultimate Guide to Your Keto Macro</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
              The Keto Macro calculator is a specialized fitness and health tool designed to provide highly accurate metrics to optimize your daily routine, nutrition, and training program. Discover how to leverage this metric to accelerate your health, fitness, and nutritional goals using verified scientific data.
            </p>
          </header>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '1.5rem', justifyContent: 'center' }}>
            {["keto macro calculator","calculate keto macro","free keto macro tool","accurate keto macro","health and fitness metrics"].map((kw, i) => (
              <span key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '6px 14px', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 600 }}>#{kw}</span>
            ))}
          </div>

          <div className="seo-content-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Comprehensive Guide to the Keto Macro</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Understanding your Keto Macro is critical for optimizing your physical health and reaching your specific fitness goals. Whether your objective is to build lean muscle mass, maximize fat loss, improve athletic endurance, or simply maintain a healthy lifestyle, accurate data is your most powerful asset. Our professional-grade Keto Macro calculator utilizes peer-reviewed scientific formulas to deliver precise, actionable insights tailored specifically to your unique physiological profile.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Why Accuracy Matters in Health Metrics</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Generic health advice often fails because it applies a "one-size-fits-all" approach to fundamentally unique individuals. By calculating your exact Keto Macro, you eliminate the guesswork from your nutrition and training. This targeted approach prevents common pitfalls such as under-eating, over-training, or setting unrealistic timelines. We strongly encourage users to cross-reference their results with our broader suite of tools, such as the TDEE Calculator and Macro Calculator, to build a holistic, data-driven action plan.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>How to Implement Your Results</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Once you have calculated your Keto Macro, the next step is implementation. We recommend tracking your progress consistently over a 2 to 4-week period to establish a reliable baseline. Because the human metabolism is highly adaptive, your requirements will change as your body composition evolves. Re-calculate your metrics regularly, adjust your dietary intake accordingly, and maintain consistency in your training protocol to guarantee long-term success and continuous progression.</p>
            </section>
            

            <section style={{ background: 'var(--blue-light)', padding: '2rem', borderRadius: 'var(--r-lg)', marginTop: '2rem' }}>
              <h3 style={{ marginTop: 0, color: 'var(--text)' }}>Maximize Your Results with Internal Tools</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
                Your Keto Macro is just one piece of the puzzle. To build a comprehensive, bulletproof fitness and nutrition strategy, integrate this data with our other professional-grade calculators. We recommend establishing your baseline with our <Link href="/tdee-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>TDEE Calculator</Link> to understand your total daily energy expenditure, and then using the <Link href="/macro-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>Macro Calculator</Link> to find your optimal split of proteins, carbohydrates, and fats.
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
export default KetoMacro;
