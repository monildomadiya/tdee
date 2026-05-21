"use client";
import React, { useState } from 'react';

import Sidebar from '../../src/components/Sidebar';
import Link from 'next/link';
import EmbedButton from '../../src/components/EmbedButton';

const ProteinCalculator = () => {
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('kg');
  const [goal, setGoal] = useState('muscle');
  const [activity, setActivity] = useState('moderate');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const wKg = unit === 'kg' ? parseFloat(weight) : parseFloat(weight) * 0.453592;
    const multipliers = {
      muscle:    { sedentary:1.6, moderate:1.8, active:2.0, athlete:2.2 },
      fat_loss:  { sedentary:1.8, moderate:2.0, active:2.2, athlete:2.4 },
      maintain:  { sedentary:1.2, moderate:1.4, active:1.6, athlete:1.8 },
    };
    const mult = multipliers[goal][activity];
    const grams = Math.round(wKg * mult);
    const cals = grams * 4;
    setResult({ grams, cals, wKg: wKg.toFixed(1), mult });
  };

  return (
    <>
      

      <div className="page-hero">
        <div className="container">
          <h1>Protein Calculator</h1>
          <p>Find your exact daily protein target based on your weight, goal, and activity level.</p>
        </div>
      </div>

      <main className="container tool-layout-container" style={{ paddingTop:'2rem', paddingBottom:'4rem' }}>
        <div className="tool-main-content">
        <div className="main-content">
          <div className="calculator-card">
            <div className="mac-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="mac-dots" style={{ display: 'none' }}></div>
              <div className="mac-title" style={{ marginLeft: '12px' }}>PROTEIN CALCULATOR</div>
            </div>
            <EmbedButton slug="protein-calculator" />
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
                    <div className="input-group">
                      <label>Body Weight ({unit})</label>
                      <input type="number" value={weight} onChange={e=>setWeight(e.target.value)} placeholder={unit==='kg'?'e.g. 75':'e.g. 165'} required />
                    </div>
                    <div className="input-group">
                      <label>Primary Goal</label>
                      <select value={goal} onChange={e=>setGoal(e.target.value)}>
                        <option value="muscle">Build Muscle</option>
                        <option value="fat_loss">Lose Fat (preserve muscle)</option>
                        <option value="maintain">Maintain / General Health</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <label>Activity Level</label>
                      <select value={activity} onChange={e=>setActivity(e.target.value)}>
                        <option value="sedentary">Sedentary (desk job, no gym)</option>
                        <option value="moderate">Moderate (3–5 days/week)</option>
                        <option value="active">Active (6–7 days/week)</option>
                        <option value="athlete">Athlete (2× day training)</option>
                      </select>
                    </div>
                    <button type="submit" className="btn-primary" style={{ marginTop:'1rem' }}>Calculate Protein</button>
                  </form>
                </div>

                <div className="results-container" style={{ display:'flex', flexDirection:'column', minHeight:'300px' }}>
                  <div style={{ background:'var(--bg)', border:'1px solid var(--border)', borderBottom:'none', color:'var(--text)', padding:'1rem 1.5rem', fontWeight:600, fontSize:'.95rem', borderTopLeftRadius:'var(--r-lg)', borderTopRightRadius:'var(--r-lg)' }}>Output Container</div>
                  <div style={{ background:'#fff', flex:1, padding:'2rem 1.5rem', borderBottomLeftRadius:'var(--r-lg)', borderBottomRightRadius:'var(--r-lg)', display:'flex', flexDirection:'column', justifyContent: result?'flex-start':'center', alignItems:'center', border:'1px solid var(--border)' }}>
                    {!result ? (
                      <div style={{ color:'var(--muted)', textAlign:'center' }}>Enter your details to see your protein target</div>
                    ) : (
                      <div style={{ textAlign:'center', animation:'popIn .4s ease both', width:'100%' }}>
                        <div style={{ fontSize:'.8rem', textTransform:'uppercase', letterSpacing:'.05em', color:'var(--text-2)', fontWeight:600, marginBottom:'.4rem' }}>Daily Protein Target</div>
                        <div style={{ fontSize:'3.75rem', fontWeight:900, color:'var(--green)', lineHeight:1 }}>{result.grams}<span style={{ fontSize:'1.5rem' }}>g</span></div>
                        <div style={{ fontSize:'.95rem', color:'var(--text-2)', marginTop:'4px' }}>per day · {result.cals} kcal from protein</div>
                        <div style={{ marginTop:'1.5rem', background:'var(--green-light)', borderRadius:'var(--r-md)', padding:'1rem', textAlign:'left' }}>
                          <div style={{ fontWeight:700, marginBottom:'.5rem', fontSize:'.9rem' }}>Per Meal (3× a day)</div>
                          <div style={{ fontSize:'1.1rem', fontWeight:800, color:'var(--green)' }}>{Math.round(result.grams/3)}g protein per meal</div>
                        </div>
                        <div style={{ marginTop:'1rem', fontSize:'.8rem', color:'var(--muted)' }}>Based on {result.mult}g per kg of body weight</div>
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
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text)', marginBottom: '1rem' }}>The Ultimate Guide to Your Protein Calculator</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
              The Protein Calculator calculator is a specialized fitness and health tool designed to provide highly accurate metrics to optimize your daily routine, nutrition, and training program. Discover how to leverage this metric to accelerate your health, fitness, and nutritional goals using verified scientific data.
            </p>
          </header>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '1.5rem', justifyContent: 'center' }}>
            {["protein calculator calculator","calculate protein calculator","free protein calculator tool","accurate protein calculator","health and fitness metrics"].map((kw, i) => (
              <span key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '6px 14px', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 600 }}>#{kw}</span>
            ))}
          </div>

          <div className="seo-content-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Comprehensive Guide to the Protein Calculator</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Understanding your Protein Calculator is critical for optimizing your physical health and reaching your specific fitness goals. Whether your objective is to build lean muscle mass, maximize fat loss, improve athletic endurance, or simply maintain a healthy lifestyle, accurate data is your most powerful asset. Our professional-grade Protein Calculator calculator utilizes peer-reviewed scientific formulas to deliver precise, actionable insights tailored specifically to your unique physiological profile.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Why Accuracy Matters in Health Metrics</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Generic health advice often fails because it applies a "one-size-fits-all" approach to fundamentally unique individuals. By calculating your exact Protein Calculator, you eliminate the guesswork from your nutrition and training. This targeted approach prevents common pitfalls such as under-eating, over-training, or setting unrealistic timelines. We strongly encourage users to cross-reference their results with our broader suite of tools, such as the TDEE Calculator and Macro Calculator, to build a holistic, data-driven action plan.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>How to Implement Your Results</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Once you have calculated your Protein Calculator, the next step is implementation. We recommend tracking your progress consistently over a 2 to 4-week period to establish a reliable baseline. Because the human metabolism is highly adaptive, your requirements will change as your body composition evolves. Re-calculate your metrics regularly, adjust your dietary intake accordingly, and maintain consistency in your training protocol to guarantee long-term success and continuous progression.</p>
            </section>
            

            <section style={{ background: 'var(--blue-light)', padding: '2rem', borderRadius: 'var(--r-lg)', marginTop: '2rem' }}>
              <h3 style={{ marginTop: 0, color: 'var(--text)' }}>Maximize Your Results with Internal Tools</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
                Your Protein Calculator is just one piece of the puzzle. To build a comprehensive, bulletproof fitness and nutrition strategy, integrate this data with our other professional-grade calculators. We recommend establishing your baseline with our <Link href="/tdee-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>TDEE Calculator</Link> to understand your total daily energy expenditure, and then using the <Link href="/macro-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>Macro Calculator</Link> to find your optimal split of proteins, carbohydrates, and fats.
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
export default ProteinCalculator;
