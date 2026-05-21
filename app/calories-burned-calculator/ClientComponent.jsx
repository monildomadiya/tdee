"use client";
import Link from 'next/link';
import React, { useState } from 'react';

import Sidebar from '../../src/components/Sidebar';
import EmbedButton from '../../src/components/EmbedButton';

const CaloriesBurnedCalculator = () => {
  const [weight, setWeight] = useState('');
  const [duration, setDuration] = useState('');
  const [met, setMet] = useState('8');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    let w = parseFloat(weight);
    let d = parseFloat(duration);
    let m = parseFloat(met);
    if (!w || !d || !m) return;
    let calories = (m * 3.5 * w / 200) * d;
    setResult({ calories: Math.round(calories) });
  };

  return (
    <>
      

      <div className="page-hero">
        <div className="container">
          <h1>Calories Burned Calculator</h1>
          <p>Calculate the calories burned during different activities.</p>
        </div>
      </div>

      <main className="container tool-layout-container" style={{ paddingTop:'2rem', paddingBottom:'4rem' }}>
        <div className="tool-main-content">
        <div className="main-content">

          <div className="calculator-card">
            <div className="mac-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="mac-dots" style={{ display: 'none' }}></div>
              <div className="mac-title" style={{ marginLeft: '12px' }}>CALORIES BURNED CALCULATOR</div>
            </div>
            <EmbedButton slug="calories-burned-calculator" />
          </div>
            <div className="calculator-card-body">
              <div className="calculator-grid">
                <div className="calc-form-container">
                  <div style={{ fontSize: '.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 700, marginBottom: '1.25rem' }}>Your Details</div>
                  <form onSubmit={calculate}>
                    
                <div className="input-row">
                  <div className="input-group">
                    <label>Weight (kg)</label>
                    <input type="number" value={weight} onChange={e=>setWeight(e.target.value)} required />
                  </div>
                  <div className="input-group">
                    <label>Duration (minutes)</label>
                    <input type="number" value={duration} onChange={e=>setDuration(e.target.value)} required />
                  </div>
                </div>
                <div className="input-group">
                  <label>Activity</label>
                  <select value={met} onChange={e=>setMet(e.target.value)} required style={{width:'100%', padding:'12px', borderRadius:'8px', border:'1px solid var(--border)'}}>
                    <option value="2.3">Walking (slow)</option>
                    <option value="3.5">Walking (brisk)</option>
                    <option value="8">Running (general)</option>
                    <option value="11.5">Running (fast)</option>
                    <option value="7">Cycling (general)</option>
                    <option value="10">Swimming (vigorous)</option>
                    <option value="6">Weight lifting (vigorous)</option>
                    <option value="3">Yoga</option>
                  </select>
                </div>
                    <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>Calculate</button>
                  </form>
                </div>

                <div className="results-container" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '300px' }}>
                  <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderBottom: 'none', color: 'var(--text)', padding: '1rem 1.5rem', fontWeight: 600, fontSize: '.95rem', borderTopLeftRadius: 'var(--r-lg)', borderTopRightRadius: 'var(--r-lg)' }}>
                    Output Container
                  </div>
                  <div style={{ background: '#fff', flex: 1, padding: '2rem 1.5rem', borderBottomLeftRadius: 'var(--r-lg)', borderBottomRightRadius: 'var(--r-lg)', display: 'flex', flexDirection: 'column', justifyContent: result ? 'flex-start' : 'center', alignItems: 'center', border: '1px solid var(--border)' }}>
                    {!result ? (
                      <div style={{ color: 'var(--muted)', textAlign: 'center' }}>
                        Enter your details to see your results
                      </div>
                    ) : (
                      <div style={{ textAlign: 'center', animation: 'popIn .4s ease both', width: '100%' }}>
                        
                    <div style={{ fontSize: '.85rem', textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--text-2)', fontWeight: 600, marginBottom: '.5rem' }}>Calories Burned</div>
                    <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--green)', lineHeight: 1 }}>{result.calories}</div>
                    <div style={{ fontSize: '1rem', color: 'var(--muted)', marginTop: '.5rem' }}>kcal</div>
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
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text)', marginBottom: '1rem' }}>The Ultimate Guide to Your Calories Burned Calculator</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
              The Calories Burned Calculator calculator is a specialized fitness and health tool designed to provide highly accurate metrics to optimize your daily routine, nutrition, and training program. Discover how to leverage this metric to accelerate your health, fitness, and nutritional goals using verified scientific data.
            </p>
          </header>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '1.5rem', justifyContent: 'center' }}>
            {["calories burned calculator calculator","calculate calories burned calculator","free calories burned calculator tool","accurate calories burned calculator","health and fitness metrics"].map((kw, i) => (
              <span key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '6px 14px', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 600 }}>#{kw}</span>
            ))}
          </div>

          <div className="seo-content-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Comprehensive Guide to the Calories Burned Calculator</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Understanding your Calories Burned Calculator is critical for optimizing your physical health and reaching your specific fitness goals. Whether your objective is to build lean muscle mass, maximize fat loss, improve athletic endurance, or simply maintain a healthy lifestyle, accurate data is your most powerful asset. Our professional-grade Calories Burned Calculator calculator utilizes peer-reviewed scientific formulas to deliver precise, actionable insights tailored specifically to your unique physiological profile.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Why Accuracy Matters in Health Metrics</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Generic health advice often fails because it applies a "one-size-fits-all" approach to fundamentally unique individuals. By calculating your exact Calories Burned Calculator, you eliminate the guesswork from your nutrition and training. This targeted approach prevents common pitfalls such as under-eating, over-training, or setting unrealistic timelines. We strongly encourage users to cross-reference their results with our broader suite of tools, such as the TDEE Calculator and Macro Calculator, to build a holistic, data-driven action plan.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>How to Implement Your Results</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Once you have calculated your Calories Burned Calculator, the next step is implementation. We recommend tracking your progress consistently over a 2 to 4-week period to establish a reliable baseline. Because the human metabolism is highly adaptive, your requirements will change as your body composition evolves. Re-calculate your metrics regularly, adjust your dietary intake accordingly, and maintain consistency in your training protocol to guarantee long-term success and continuous progression.</p>
            </section>
            

            <section style={{ background: 'var(--blue-light)', padding: '2rem', borderRadius: 'var(--r-lg)', marginTop: '2rem' }}>
              <h3 style={{ marginTop: 0, color: 'var(--text)' }}>Maximize Your Results with Internal Tools</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
                Your Calories Burned Calculator is just one piece of the puzzle. To build a comprehensive, bulletproof fitness and nutrition strategy, integrate this data with our other professional-grade calculators. We recommend establishing your baseline with our <Link href="/tdee-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>TDEE Calculator</Link> to understand your total daily energy expenditure, and then using the <Link href="/macro-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>Macro Calculator</Link> to find your optimal split of proteins, carbohydrates, and fats.
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

export default CaloriesBurnedCalculator;
