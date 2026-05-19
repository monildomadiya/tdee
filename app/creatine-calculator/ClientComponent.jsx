'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../../src/components/Sidebar';

export default function CreatineCalculator() {
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('kg');
  const [result, setResult] = useState(null);

  const calculate = () => {
    let wKg = parseFloat(weight);
    if (!wKg || wKg <= 0) return;
    if (unit === 'lbs') wKg = wKg * 0.453592;

    // Research-based: 0.3g/kg/day loading, 0.03-0.05g/kg/day maintenance
    const loadingDose = +(wKg * 0.3).toFixed(1);
    const maintenanceLow = +(wKg * 0.03).toFixed(1);
    const maintenanceHigh = +(wKg * 0.05).toFixed(1);
    const maintenanceStd = 5; // Standard flat dose per ISSN

    setResult({ loadingDose, maintenanceLow, maintenanceHigh, maintenanceStd, wKg: +wKg.toFixed(1) });
  };

  const faqs = [
    { q: 'What is creatine and how does it work?', a: 'Creatine is a naturally occurring compound stored primarily in muscle tissue. It acts as a rapid energy reserve for high-intensity exercise by regenerating ATP (adenosine triphosphate) during explosive movements like sprinting or heavy lifting. Supplementing with creatine monohydrate increases your muscle phosphocreatine stores, delaying fatigue and improving power output.' },
    { q: 'Is a loading phase necessary?', a: 'No. The loading phase (20g/day for 5-7 days) saturates muscles faster but is not required. You can achieve the same level of saturation by taking 3-5g daily for 3-4 weeks. The loading phase simply speeds up the process. Many people skip loading to avoid any initial water retention or gastrointestinal discomfort.' },
    { q: 'Does creatine cause water retention?', a: 'Yes, creatine draws water into muscle cells (intracellular water retention), which contributes to muscle fullness and can cause a temporary increase on the scale of 1–2 kg. This is not fat gain. This water is stored inside muscles, not under the skin, and actually improves muscle performance and appearance.' },
    { q: 'When should I take creatine?', a: 'Research suggests that taking creatine post-workout with a carbohydrate and protein source may be slightly superior for muscle uptake. However, timing matters far less than consistency. Taking creatine every day at any time will yield the same long-term results.' },
    { q: 'Is creatine safe for long-term use?', a: 'Yes. Creatine monohydrate is one of the most extensively studied sports supplements with an exceptional safety profile. Long-term studies lasting up to 5 years show no adverse health effects in healthy individuals. Individuals with pre-existing kidney conditions should consult a physician before supplementing.' },
  ];

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Creatine Calculator</h1>
          <p>Calculate your personalised creatine loading and maintenance dose based on your body weight. Based on International Society of Sports Nutrition (ISSN) guidelines.</p>
        </div>
      </div>

      <div className="container tool-layout-container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="tool-main-content">
          <div className="calculator-card">
            <div className="mac-header">
              <div className="mac-dots"><span className="mac-dot red"></span><span className="mac-dot yellow"></span><span className="mac-dot green"></span></div>
              <div className="mac-title">Creatine Dosage Calculator</div>
            </div>
            <div className="calculator-card-body" style={{ padding: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', marginBottom: '1.5rem' }}>
                <div className="input-group">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--muted)' }}>Body Weight</label>
                  <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder={unit === 'kg' ? 'e.g. 75' : 'e.g. 165'} style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)' }} />
                </div>
                <div className="input-group">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--muted)' }}>Unit</label>
                  <select value={unit} onChange={e => { setUnit(e.target.value); setResult(null); }} style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', cursor: 'pointer' }}>
                    <option value="kg">kg</option>
                    <option value="lbs">lbs</option>
                  </select>
                </div>
              </div>
              <button onClick={calculate} className="btn-primary">Calculate Creatine Dose</button>

              {result && (
                <div style={{ marginTop: '2rem', display: 'grid', gap: '16px' }}>
                  <div style={{ padding: '1.5rem', background: '#faf5ff', border: '2px solid #7c3aed' }}>
                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: '#7c3aed', marginBottom: '0.5rem' }}>Loading Phase (Days 1–7, Optional)</div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#7c3aed', lineHeight: 1 }}>{result.loadingDose}g / day</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-2)', marginTop: '0.5rem' }}>Split into 4 doses of {+(result.loadingDose / 4).toFixed(1)}g throughout the day with meals. Take for 5–7 days.</div>
                  </div>
                  <div style={{ padding: '1.5rem', background: 'var(--green-light)', border: '2px solid var(--green)' }}>
                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'var(--green)', marginBottom: '0.5rem' }}>Maintenance Phase (Ongoing — Recommended)</div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--green)', lineHeight: 1 }}>3–5g / day</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-2)', marginTop: '0.5rem' }}>Standard ISSN recommendation: 3–5g daily regardless of body weight. Your weight-based estimate: {result.maintenanceLow}–{result.maintenanceHigh}g/day.</div>
                  </div>
                  <div style={{ padding: '1rem 1.5rem', background: 'var(--card)', border: '1px solid var(--border)', fontSize: '0.85rem', color: 'var(--text-2)' }}>
                    Calculated for {result.wKg}kg body weight. Creatine monohydrate is the recommended form (not ethyl ester or buffered creatine).
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="article-section">
            <h2>Creatine: The Most Evidence-Based Supplement in Sports Nutrition</h2>
            <p><strong>Creatine monohydrate</strong> is one of the most researched compounds in sports nutrition, with over 500 peer-reviewed studies confirming its safety and efficacy. It is naturally produced in the liver and kidneys from the amino acids arginine, glycine, and methionine, and is found in small amounts in red meat and fish.</p>
            <p>Supplementing with creatine increases your total muscle creatine stores by approximately 20–40%, directly enhancing performance in high-intensity, short-duration activities like weightlifting, sprinting, and interval training.</p>

            <h2>Proven Benefits Backed by Research</h2>
            <ul>
              <li><strong>Strength and power output:</strong> Studies show an average 8–14% increase in 1 rep max strength and 14–26% increase in power output during high-intensity exercise.</li>
              <li><strong>Lean muscle gain:</strong> Creatine allows greater training volume, leading to greater muscle protein synthesis over time. Combined with a <Link href="/protein-calculator">sufficient protein intake</Link>, results are significantly amplified.</li>
              <li><strong>Faster recovery:</strong> Creatine reduces muscle cell damage and inflammation following intense exercise, allowing more frequent training sessions.</li>
              <li><strong>Cognitive function:</strong> Emerging research (2023) suggests creatine supplementation may improve working memory, mental fatigue resistance, and cognitive processing speed, particularly under sleep deprivation.</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            {faqs.map((f, i) => (
              <div key={i} style={{ marginBottom: '1.5rem', padding: '1.25rem 1.5rem', background: 'var(--card)', border: '1px solid var(--border)' }}>
                <h3 style={{ marginTop: 0, marginBottom: '0.5rem', fontSize: '1rem' }}>{f.q}</h3>
                <p style={{ margin: 0, color: 'var(--text-2)', lineHeight: 1.7 }}>{f.a}</p>
              </div>
            ))}

            <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '1.5rem', marginTop: '2rem' }}>
              <h3 style={{ marginTop: 0 }}>Related Calculators</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {[['/protein-calculator','Protein Calculator'],['/macro-calculator','Macro Calculator'],['/one-rep-max-calculator','1 Rep Max'],['/tdee-calculator','TDEE Calculator'],['/calorie-deficit','Calorie Deficit']].map(([to, l]) => (
                  <Link key={to} href={to} className="btn outline" style={{ width: 'auto', padding: '8px 16px', fontSize: '0.85rem' }}>{l}</Link>
                ))}
              </div>
            </div>
            <div className="disclaimer-box">
              <p><strong>Important Medical Disclaimer:</strong> This calculator is for informational purposes only. Consult a healthcare provider before starting any supplement protocol, especially if you have pre-existing kidney or liver conditions.</p>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
}
