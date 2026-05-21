"use client";
import React, { useState } from 'react';

import Sidebar from '../../src/components/Sidebar';
import Link from 'next/link';
import EmbedButton from '../../src/components/EmbedButton';

const PregnancyWeightGain = () => {
  const [unit, setUnit] = useState('kg');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [week, setWeek] = useState('');
  const [twins, setTwins] = useState('single');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const wKg = unit === 'kg' ? parseFloat(weight) : parseFloat(weight) * 0.453592;
    const hM  = unit === 'kg' ? parseFloat(height) / 100 : parseFloat(height) * 0.0254;
    const bmi = wKg / (hM * hM);
    const wk  = parseInt(week);

    // IOM 2009 guidelines
    let category, totalMin, totalMax, rate1st, rate2nd3rd;
    if (twins === 'twins') {
      if (bmi < 18.5)       { category = 'Underweight (twins)'; totalMin = 22.7; totalMax = 28.1; }
      else if (bmi < 25)    { category = 'Normal weight (twins)'; totalMin = 16.8; totalMax = 24.5; }
      else if (bmi < 30)    { category = 'Overweight (twins)'; totalMin = 14.1; totalMax = 22.7; }
      else                  { category = 'Obese (twins)'; totalMin = 11.3; totalMax = 19.1; }
      rate1st = 0; rate2nd3rd = 0.57;
    } else {
      if (bmi < 18.5)       { category = 'Underweight'; totalMin = 12.5; totalMax = 18; rate1st = 0.5; rate2nd3rd = 0.51; }
      else if (bmi < 25)    { category = 'Normal weight'; totalMin = 11.5; totalMax = 16; rate1st = 0.5; rate2nd3rd = 0.42; }
      else if (bmi < 30)    { category = 'Overweight'; totalMin = 7; totalMax = 11.5; rate1st = 0.3; rate2nd3rd = 0.28; }
      else                  { category = 'Obese'; totalMin = 5; totalMax = 9; rate1st = 0.2; rate2nd3rd = 0.22; }
    }

    // Estimate gained so far
    let gained;
    if (wk <= 13) gained = rate1st * wk;
    else gained = rate1st * 13 + rate2nd3rd * (wk - 13);

    const expectedMin = Math.max(0, totalMin * (wk / 40));
    const expectedMax = Math.max(0, totalMax * (wk / 40));
    const status = gained < expectedMin ? 'Below target' : gained > expectedMax ? 'Above target' : 'On track ✓';
    const remaining = Math.max(0, (totalMin + totalMax) / 2 - gained).toFixed(1);

    if (unit === 'lbs') {
      setResult({
        bmi: bmi.toFixed(1), category, week: wk,
        totalMin: (totalMin * 2.205).toFixed(1), totalMax: (totalMax * 2.205).toFixed(1),
        gained: (gained * 2.205).toFixed(1),
        expectedMin: (expectedMin * 2.205).toFixed(1), expectedMax: (expectedMax * 2.205).toFixed(1),
        status, remaining: (remaining * 2.205).toFixed(1), unit: 'lbs',
      });
    } else {
      setResult({ bmi: bmi.toFixed(1), category, week: wk, totalMin, totalMax, gained: gained.toFixed(1), expectedMin: expectedMin.toFixed(1), expectedMax: expectedMax.toFixed(1), status, remaining, unit: 'kg' });
    }
  };

  const statusColor = result?.status?.includes('track') ? 'var(--green)' : result?.status?.includes('Below') ? '#f59e0b' : '#ef4444';

  return (
    <>
      

      <div className="page-hero">
        <div className="container">
          <h1>Pregnancy Weight Gain Calculator</h1>
          <p>Evidence-based weight gain targets by trimester using IOM 2009 guidelines.</p>
        </div>
      </div>

      <main className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="main-content">
          <div className="calculator-card">
            <div className="mac-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="mac-dots" style={{ display: 'none' }}></div>
              <div className="mac-title" style={{ marginLeft: '12px' }}>PREGNANCY WEIGHT GAIN</div>
            </div>
            <EmbedButton slug="pregnancy-weight-gain-calculator" />
          </div>
            <div className="calculator-card-body">
              <div className="calculator-grid">
                {/* Form */}
                <div className="calc-form-container">
                  <div style={{ fontSize: '.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 700, marginBottom: '1.25rem' }}>Your Details</div>
                  <form onSubmit={calculate}>
                    <div className="input-group">
                      <label>Unit System</label>
                      <div className="toggle-group" role="group">
                        <button type="button" className={`toggle-btn${unit === 'kg' ? ' active' : ''}`} onClick={() => setUnit('kg')}><span>Metric</span><span className="sub-text">(kg/cm)</span></button>
                        <button type="button" className={`toggle-btn${unit === 'lbs' ? ' active' : ''}`} onClick={() => setUnit('lbs')}><span>Imperial</span><span className="sub-text">(lbs/in)</span></button>
                      </div>
                    </div>
                    <div className="input-row">
                      <div className="input-group">
                        <label>Pre-pregnancy Weight ({unit})</label>
                        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder={unit === 'kg' ? 'e.g. 65' : 'e.g. 143'} required />
                      </div>
                      <div className="input-group">
                        <label>Height ({unit === 'kg' ? 'cm' : 'in'})</label>
                        <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder={unit === 'kg' ? 'e.g. 165' : 'e.g. 65'} required />
                      </div>
                    </div>
                    <div className="input-group">
                      <label>Current Gestational Week (1–40)</label>
                      <input type="number" min="1" max="40" value={week} onChange={e => setWeek(e.target.value)} placeholder="e.g. 20" required />
                    </div>
                    <div className="input-group">
                      <label>Pregnancy Type</label>
                      <div className="toggle-group" role="group">
                        <button type="button" className={`toggle-btn${twins === 'single' ? ' active' : ''}`} onClick={() => setTwins('single')}>Single</button>
                        <button type="button" className={`toggle-btn${twins === 'twins' ? ' active' : ''}`} onClick={() => setTwins('twins')}>Twins</button>
                      </div>
                    </div>
                    <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>Calculate Weight Gain</button>
                  </form>
                </div>

                {/* Results */}
                <div className="results-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '300px' }}>
                  <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderBottom: 'none', color: 'var(--text)', padding: '1rem 1.5rem', fontWeight: 600, fontSize: '.95rem', borderTopLeftRadius: 'var(--r-lg)', borderTopRightRadius: 'var(--r-lg)' }}>Output Container</div>
                  <div style={{ background: '#fff', flex: 1, padding: '2rem 1.5rem', borderBottomLeftRadius: 'var(--r-lg)', borderBottomRightRadius: 'var(--r-lg)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: result ? 'flex-start' : 'center', alignItems: 'center' }}>
                    {!result ? (
                      <div style={{ color: 'var(--muted)', textAlign: 'center' }}>Enter your details to see your weight gain targets</div>
                    ) : (
                      <div style={{ width: '100%', animation: 'popIn .4s ease both' }}>
                        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                          <div style={{ fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--text-2)', fontWeight: 600, marginBottom: '.4rem' }}>Status at Week {result.week}</div>
                          <div style={{ fontSize: '1.8rem', fontWeight: 900, color: statusColor }}>{result.status}</div>
                          <div style={{ fontSize: '.9rem', color: 'var(--muted)', marginTop: '.25rem' }}>Pre-preg BMI: {result.bmi} — {result.category}</div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '1rem' }}>
                          {[
                            { label: 'Gained So Far', val: `~${result.gained} ${result.unit}` },
                            { label: 'Remaining (est.)', val: `~${result.remaining} ${result.unit}` },
                            { label: 'Target Range (Total)', val: `${result.totalMin}–${result.totalMax} ${result.unit}` },
                            { label: 'Expected This Week', val: `${result.expectedMin}–${result.expectedMax} ${result.unit}` },
                          ].map(({ label, val }) => (
                            <div key={label} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--r-sm)', padding: '.75rem', textAlign: 'center' }}>
                              <div style={{ fontSize: '.7rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.04em', fontWeight: 600 }}>{label}</div>
                              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text)', marginTop: '4px' }}>{val}</div>
                            </div>
                          ))}
                        </div>
                        <div style={{ background: 'var(--green-light)', borderRadius: 'var(--r)', padding: '1rem', fontSize: '.85rem', color: 'var(--text-2)' }}>
                          ⚕️ Always consult your OB-GYN or midwife for personalised guidance. These are estimates based on IOM 2009.
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
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text)', marginBottom: '1rem' }}>The Ultimate Guide to Your Pregnancy Weight Gain</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
              The Pregnancy Weight Gain calculator is a specialized fitness and health tool designed to provide highly accurate metrics to optimize your daily routine, nutrition, and training program. Discover how to leverage this metric to accelerate your health, fitness, and nutritional goals using verified scientific data.
            </p>
          </header>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '1.5rem', justifyContent: 'center' }}>
            {["pregnancy weight gain calculator","calculate pregnancy weight gain","free pregnancy weight gain tool","accurate pregnancy weight gain","health and fitness metrics"].map((kw, i) => (
              <span key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '6px 14px', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 600 }}>#{kw}</span>
            ))}
          </div>

          <div className="seo-content-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Comprehensive Guide to the Pregnancy Weight Gain</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Understanding your Pregnancy Weight Gain is critical for optimizing your physical health and reaching your specific fitness goals. Whether your objective is to build lean muscle mass, maximize fat loss, improve athletic endurance, or simply maintain a healthy lifestyle, accurate data is your most powerful asset. Our professional-grade Pregnancy Weight Gain calculator utilizes peer-reviewed scientific formulas to deliver precise, actionable insights tailored specifically to your unique physiological profile.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>Why Accuracy Matters in Health Metrics</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Generic health advice often fails because it applies a "one-size-fits-all" approach to fundamentally unique individuals. By calculating your exact Pregnancy Weight Gain, you eliminate the guesswork from your nutrition and training. This targeted approach prevents common pitfalls such as under-eating, over-training, or setting unrealistic timelines. We strongly encourage users to cross-reference their results with our broader suite of tools, such as the TDEE Calculator and Macro Calculator, to build a holistic, data-driven action plan.</p>
            </section>
            
            <section>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--blue-dark)', marginBottom: '1rem', borderBottom: '2px solid var(--green-light)', paddingBottom: '0.5rem', display: 'inline-block' }}>How to Implement Your Results</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Once you have calculated your Pregnancy Weight Gain, the next step is implementation. We recommend tracking your progress consistently over a 2 to 4-week period to establish a reliable baseline. Because the human metabolism is highly adaptive, your requirements will change as your body composition evolves. Re-calculate your metrics regularly, adjust your dietary intake accordingly, and maintain consistency in your training protocol to guarantee long-term success and continuous progression.</p>
            </section>
            

            <section style={{ background: 'var(--blue-light)', padding: '2rem', borderRadius: 'var(--r-lg)', marginTop: '2rem' }}>
              <h3 style={{ marginTop: 0, color: 'var(--text)' }}>Maximize Your Results with Internal Tools</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
                Your Pregnancy Weight Gain is just one piece of the puzzle. To build a comprehensive, bulletproof fitness and nutrition strategy, integrate this data with our other professional-grade calculators. We recommend establishing your baseline with our <Link href="/tdee-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>TDEE Calculator</Link> to understand your total daily energy expenditure, and then using the <Link href="/macro-calculator" style={{ color: 'var(--green)', fontWeight: 600 }}>Macro Calculator</Link> to find your optimal split of proteins, carbohydrates, and fats.
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
export default PregnancyWeightGain;
