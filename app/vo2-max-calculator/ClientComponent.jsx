'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../../src/components/Sidebar';
import EmbedButton from '../../src/components/EmbedButton';

// VO2 Max norms by age/gender (ml/kg/min)
const VO2_NORMS = {
  male: [
    { age: '20-29', veryPoor: 37, poor: 41, fair: 46, good: 52, excellent: 56, superior: 999 },
    { age: '30-39', veryPoor: 35, poor: 39, fair: 43, good: 49, excellent: 52, superior: 999 },
    { age: '40-49', veryPoor: 33, poor: 36, fair: 40, good: 45, excellent: 49, superior: 999 },
    { age: '50-59', veryPoor: 30, poor: 33, fair: 37, good: 41, excellent: 45, superior: 999 },
    { age: '60+',   veryPoor: 26, poor: 30, fair: 33, good: 37, excellent: 40, superior: 999 },
  ],
  female: [
    { age: '20-29', veryPoor: 28, poor: 31, fair: 35, good: 40, excellent: 44, superior: 999 },
    { age: '30-39', veryPoor: 26, poor: 29, fair: 33, good: 37, excellent: 41, superior: 999 },
    { age: '40-49', veryPoor: 24, poor: 27, fair: 30, good: 34, excellent: 38, superior: 999 },
    { age: '50-59', veryPoor: 21, poor: 24, fair: 27, good: 31, excellent: 35, superior: 999 },
    { age: '60+',   veryPoor: 18, poor: 21, fair: 24, good: 28, excellent: 31, superior: 999 },
  ],
};

function getRating(vo2, gender, age) {
  const ageGroup = age < 30 ? 0 : age < 40 ? 1 : age < 50 ? 2 : age < 60 ? 3 : 4;
  const norm = VO2_NORMS[gender][ageGroup];
  if (vo2 < norm.veryPoor) return { label: 'Very Poor', color: '#dc2626', percentile: '<20th' };
  if (vo2 < norm.poor)     return { label: 'Poor',      color: '#ea580c', percentile: '20-39th' };
  if (vo2 < norm.fair)     return { label: 'Fair',      color: '#d97706', percentile: '40-59th' };
  if (vo2 < norm.good)     return { label: 'Good',      color: '#16a34a', percentile: '60-79th' };
  if (vo2 < norm.excellent)return { label: 'Excellent', color: '#0d9488', percentile: '80-94th' };
  return                          { label: 'Superior',  color: '#7c3aed', percentile: '95th+' };
}

export default function VO2MaxCalculator() {
  const [method, setMethod] = useState('pace');
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [hr, setHr] = useState('');         // resting heart rate
  const [maxHr, setMaxHr] = useState('');   // max heart rate
  const [pace, setPace] = useState('');     // 1-mile run time in minutes
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(age);
    if (!a || a <= 0) return;
    let vo2 = null;

    if (method === 'pace') {
      // Cooper 1-mile run test: VO2max = 483/time(min) + 3.5
      const t = parseFloat(pace);
      if (!t || t <= 0) return;
      vo2 = +(483 / t + 3.5).toFixed(1);
    } else if (method === 'hr') {
      // Uth-Sorensen: VO2max = 15 * (maxHR / restingHR)
      const rhr = parseFloat(hr), mhr = parseFloat(maxHr);
      if (!rhr || !mhr || rhr <= 0 || mhr <= 0) return;
      vo2 = +(15 * (mhr / rhr)).toFixed(1);
    }

    if (!vo2 || vo2 <= 0) return;
    const rating = getRating(vo2, gender, a);
    setResult({ vo2, rating });
  };

  const faqs = [
    { q: 'What is VO2 Max?', a: 'VO2 Max (maximal oxygen uptake) is the maximum rate at which your body can consume oxygen during intense exercise. It is expressed in millilitres of oxygen per kilogram of body weight per minute (mL/kg/min) and is widely considered the gold standard measure of cardiovascular fitness and aerobic endurance.' },
    { q: 'How does VO2 Max relate to calorie burning?', a: 'VO2 Max directly correlates with how many calories you burn during aerobic exercise. A higher VO2 Max means you can sustain a higher intensity of exercise, burning more calories per session. It also influences your overall TDEE, as fitter individuals tend to be more active overall.' },
    { q: 'Can I improve my VO2 Max?', a: 'Yes. VO2 Max is highly trainable through consistent aerobic exercise. High-intensity interval training (HIIT) is the most time-efficient method for improving VO2 Max, with studies showing improvements of 15–20% in 8–12 weeks. Consistent zone 2 cardio (60–70% max heart rate) also builds a solid aerobic base.' },
    { q: 'What is a good VO2 Max for my age?', a: 'This varies significantly by age and gender. Elite endurance athletes often have VO2 Max values above 70 mL/kg/min. For average healthy adults, a "Good" rating typically falls in the 40–55 range. Use the rating in this calculator to see how you compare to population norms.' },
  ];

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>VO2 Max Calculator</h1>
          <p>Estimate your maximal aerobic capacity using validated field tests. Understand your cardiovascular fitness level compared to age and gender norms.</p>
        </div>
      </div>

      <div className="container tool-layout-container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="tool-main-content">
          <div className="calculator-card">
            <div className="mac-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="mac-dots" style={{ display: 'none' }}></div>
              <div className="mac-title" style={{ marginLeft: '12px' }}>VO2 Max Estimator</div>
            </div>
            <EmbedButton slug="vo2-max-calculator" />
          </div>
            <div className="calculator-card-body" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '1.5rem' }}>
                <button type="button" onClick={() => { setMethod('pace'); setResult(null); }} style={{ flex: 1, padding: '10px', fontWeight: 700, fontSize: '0.9rem', background: method === 'pace' ? 'var(--text)' : 'var(--card)', color: method === 'pace' ? 'var(--bg)' : 'var(--text)', border: '1px solid var(--border)', cursor: 'pointer' }}>1-Mile Run Test</button>
                <button type="button" onClick={() => { setMethod('hr'); setResult(null); }} style={{ flex: 1, padding: '10px', fontWeight: 700, fontSize: '0.9rem', background: method === 'hr' ? 'var(--text)' : 'var(--card)', color: method === 'hr' ? 'var(--bg)' : 'var(--text)', border: '1px solid var(--border)', cursor: 'pointer' }}>Heart Rate Method</button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '1.5rem' }}>
                <div className="input-group">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--muted)' }}>Age</label>
                  <input type="number" min="15" max="90" value={age} onChange={e => setAge(e.target.value)} placeholder="e.g. 30" style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)' }} />
                </div>
                <div className="input-group">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--muted)' }}>Gender</label>
                  <select value={gender} onChange={e => setGender(e.target.value)} style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', cursor: 'pointer' }}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                {method === 'pace' ? (
                  <div className="input-group" style={{ gridColumn: '1/-1' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--muted)' }}>1-Mile Run Time (minutes)</label>
                    <input type="number" step="0.1" value={pace} onChange={e => setPace(e.target.value)} placeholder="e.g. 9.5 for 9 min 30 sec" style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)' }} />
                  </div>
                ) : (
                  <>
                    <div className="input-group">
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--muted)' }}>Resting Heart Rate (bpm)</label>
                      <input type="number" value={hr} onChange={e => setHr(e.target.value)} placeholder="e.g. 60" style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)' }} />
                    </div>
                    <div className="input-group">
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--muted)' }}>Max Heart Rate (bpm)</label>
                      <input type="number" value={maxHr} onChange={e => setMaxHr(e.target.value)} placeholder="e.g. 185" style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)' }} />
                    </div>
                  </>
                )}
              </div>
              <button onClick={calculate} className="btn-primary">Estimate VO2 Max</button>

              {result && (
                <div style={{ marginTop: '2rem', padding: '2rem', background: 'var(--card)', border: `2px solid ${result.rating.color}` }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'var(--muted)', marginBottom: '0.5rem' }}>Estimated VO2 Max</div>
                    <div style={{ fontSize: '4rem', fontWeight: 900, color: result.rating.color, lineHeight: 1 }}>{result.vo2}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: '0.25rem 0 1rem' }}>mL/kg/min</div>
                    <div style={{ display: 'inline-block', padding: '8px 20px', background: result.rating.color, color: '#fff', fontWeight: 800, fontSize: '1.1rem' }}>{result.rating.label}</div>
                    <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--text-2)' }}>Approximately {result.rating.percentile} percentile for your age and gender</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="article-section">
            <h2>What Is VO2 Max and Why Should You Measure It?</h2>
            <p><strong>VO2 Max</strong> (maximal oxygen uptake) is the maximum amount of oxygen your body can extract from the air and deliver to working muscles during sustained intense exercise. It is expressed in millilitres of oxygen per kilogram of body weight per minute (mL/kg/min) and is the single best objective measure of <strong>cardiovascular fitness</strong>.</p>
            <p>Studies from the Norwegian University of Science and Technology found that VO2 Max is one of the strongest predictors of longevity and all-cause mortality — even more predictive than smoking, hypertension, or obesity. Every 3.5 mL/kg/min increase in VO2 Max corresponds to approximately a 13% reduction in mortality risk.</p>

            <h2>VO2 Max Reference Ranges by Age</h2>
            <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ background: 'var(--green)', color: '#fff', textAlign: 'left' }}>
                    <th style={{ padding: '10px 14px' }}>Age Group</th>
                    <th style={{ padding: '10px 14px' }}>Very Poor</th>
                    <th style={{ padding: '10px 14px' }}>Fair</th>
                    <th style={{ padding: '10px 14px' }}>Good</th>
                    <th style={{ padding: '10px 14px' }}>Excellent</th>
                  </tr>
                </thead>
                <tbody>
                  {[['20–29 (M)', '<38', '42–46', '52–56', '>57'], ['20–29 (F)', '<29', '32–35', '41–44', '>45'], ['40–49 (M)', '<34', '38–40', '46–49', '>50'], ['40–49 (F)', '<25', '28–30', '35–38', '>39']].map(([age, vp, f, g, e]) => (
                    <tr key={age} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 700 }}>{age}</td>
                      <td style={{ padding: '10px 14px', color: '#dc2626' }}>{vp}</td>
                      <td style={{ padding: '10px 14px', color: '#d97706' }}>{f}</td>
                      <td style={{ padding: '10px 14px', color: '#16a34a' }}>{g}</td>
                      <td style={{ padding: '10px 14px', color: '#7c3aed' }}>{e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

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
                {[['/target-heart-rate-calculator','Target Heart Rate'],['/calories-burned-calculator','Calories Burned'],['/pace-calculator','Pace Calculator'],['/tdee-calculator','TDEE Calculator'],['/bmi-calculator','BMI Calculator']].map(([to, l]) => (
                  <Link key={to} href={to} className="btn outline" style={{ width: 'auto', padding: '8px 16px', fontSize: '0.85rem' }}>{l}</Link>
                ))}
              </div>
            </div>
            <div className="disclaimer-box">
              <p><strong>Important Disclaimer:</strong> VO2 Max estimations from field tests have a margin of error of ±10–15% compared to lab testing. Results are for fitness tracking purposes only and should not be used as a medical diagnostic tool.</p>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
}
