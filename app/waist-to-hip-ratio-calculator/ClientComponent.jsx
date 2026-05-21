'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../../src/components/Sidebar';
import EmbedButton from '../../src/components/EmbedButton';

const WHR_RISK = {
  male:   [{ max: 0.90, risk: 'Low',       color: '#16a34a', bg: '#f0fdf4' }, { max: 0.95, risk: 'Moderate', color: '#d97706', bg: '#fffbeb' }, { max: 999, risk: 'High',       color: '#dc2626', bg: '#fef2f2' }],
  female: [{ max: 0.80, risk: 'Low',       color: '#16a34a', bg: '#f0fdf4' }, { max: 0.85, risk: 'Moderate', color: '#d97706', bg: '#fffbeb' }, { max: 999, risk: 'High',       color: '#dc2626', bg: '#fef2f2' }],
};

export default function WHRCalculator() {
  const [gender, setGender] = useState('male');
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [unit, setUnit] = useState('cm');
  const [result, setResult] = useState(null);

  const calculate = () => {
    let w = parseFloat(waist), h = parseFloat(hip);
    if (!w || !h || w <= 0 || h <= 0) return;
    if (unit === 'in') { w *= 2.54; h *= 2.54; }
    const whr = +(w / h).toFixed(2);
    const risk = WHR_RISK[gender].find(r => whr <= r.max);
    setResult({ whr, risk: risk.risk, color: risk.color, bg: risk.bg });
  };

  const faqs = [
    { q: 'What is Waist-to-Hip Ratio?', a: 'Waist-to-Hip Ratio (WHR) is your waist circumference divided by your hip circumference. It is a measure of fat distribution used by the World Health Organization (WHO) to assess risk of cardiovascular disease, type 2 diabetes, and metabolic syndrome.' },
    { q: 'Is WHR better than BMI?', a: 'WHR is considered a better predictor of cardiovascular disease than BMI alone, because it specifically measures abdominal (visceral) fat rather than total body weight. Visceral fat, the fat stored around organs, is metabolically more dangerous than subcutaneous fat stored under the skin.' },
    { q: 'How do I measure my waist correctly?', a: 'Measure at the narrowest point of your torso, usually around 1 inch above your belly button. Breathe out naturally before measuring and keep the tape horizontal. Do not suck in your stomach.' },
    { q: 'How do I measure my hips correctly?', a: 'Measure around the widest part of your buttocks. Stand with your feet together and keep the tape parallel to the floor. Hip measurement should include the fullest point of your glutes.' },
  ];

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Waist-to-Hip Ratio Calculator</h1>
          <p>Assess your cardiovascular and metabolic health risk using the WHO Waist-to-Hip Ratio (WHR) method. More accurate than BMI for predicting disease risk.</p>
        </div>
      </div>

      <div className="container tool-layout-container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="tool-main-content">
          <div className="calculator-card">
            <div className="mac-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="mac-dots" style={{ display: 'none' }}></div>
              <div className="mac-title" style={{ marginLeft: '12px' }}>WHR Calculator</div>
            </div>
            <EmbedButton slug="waist-to-hip-ratio-calculator" />
          </div>
            <div className="calculator-card-body" style={{ padding: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '1.5rem' }}>
                <div className="input-group">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--muted)' }}>Gender</label>
                  <select value={gender} onChange={e => { setGender(e.target.value); setResult(null); }} style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', cursor: 'pointer' }}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="input-group">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--muted)' }}>Unit</label>
                  <select value={unit} onChange={e => { setUnit(e.target.value); setResult(null); }} style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', cursor: 'pointer' }}>
                    <option value="cm">Centimetres (cm)</option>
                    <option value="in">Inches (in)</option>
                  </select>
                </div>
                <div className="input-group">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--muted)' }}>Waist ({unit})</label>
                  <input type="number" value={waist} onChange={e => setWaist(e.target.value)} placeholder={unit === 'cm' ? 'e.g. 80' : 'e.g. 31'} style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)' }} />
                </div>
                <div className="input-group">
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--muted)' }}>Hip ({unit})</label>
                  <input type="number" value={hip} onChange={e => setHip(e.target.value)} placeholder={unit === 'cm' ? 'e.g. 95' : 'e.g. 37'} style={{ width: '100%', padding: '12px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)' }} />
                </div>
              </div>
              <button onClick={calculate} className="btn-primary">Calculate WHR</button>

              {result && (
                <div style={{ marginTop: '2rem', padding: '1.5rem', background: result.bg, border: `2px solid ${result.color}` }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: result.color, marginBottom: '0.5rem' }}>Your WHR Result</div>
                  <div style={{ fontSize: '3.5rem', fontWeight: 900, color: result.color, lineHeight: 1 }}>{result.whr}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: result.color, marginTop: '0.5rem' }}>{result.risk} Health Risk</div>
                  <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                    {WHR_RISK[gender].map((r, i) => (
                      <div key={i} style={{ padding: '10px', background: '#fff', border: `1px solid ${r.color}`, textAlign: 'center' }}>
                        <div style={{ fontSize: '0.65rem', fontWeight: 800, color: r.color, textTransform: 'uppercase' }}>{r.risk}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-2)', marginTop: '2px' }}>{i === 0 ? `< ${WHR_RISK[gender][0].max}` : i === 1 ? `${WHR_RISK[gender][0].max}–${WHR_RISK[gender][1].max}` : `> ${WHR_RISK[gender][1].max}`}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="article-section">
            <h2>What Is Waist-to-Hip Ratio and Why Does It Matter?</h2>
            <p>Your <strong>Waist-to-Hip Ratio (WHR)</strong> is calculated by dividing your waist circumference by your hip circumference. It is one of the most clinically validated measures of <strong>central adiposity</strong> — the accumulation of fat around the abdomen and organs.</p>
            <p>Unlike BMI, which only measures total weight relative to height, WHR specifically identifies where fat is distributed in your body. Research consistently shows that abdominal fat is significantly more dangerous than fat stored in the hips, thighs, or buttocks.</p>

            <h2>WHO Classification Standards</h2>
            <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                <thead>
                  <tr style={{ background: 'var(--green)', color: '#fff' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Gender</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Low Risk</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>Moderate Risk</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left' }}>High Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {[['Male', '< 0.90', '0.90 – 0.95', '> 0.95'], ['Female', '< 0.80', '0.80 – 0.85', '> 0.85']].map(([g, l, m, h]) => (
                    <tr key={g} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '12px 16px', fontWeight: 700 }}>{g}</td>
                      <td style={{ padding: '12px 16px', color: '#16a34a', fontWeight: 700 }}>{l}</td>
                      <td style={{ padding: '12px 16px', color: '#d97706', fontWeight: 700 }}>{m}</td>
                      <td style={{ padding: '12px 16px', color: '#dc2626', fontWeight: 700 }}>{h}</td>
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
                {[['/bmi-calculator','BMI Calculator'],['/body-fat-calculator','Body Fat %'],['/tdee-calculator','TDEE Calculator'],['/ideal-weight','Ideal Weight'],['/calorie-deficit','Calorie Deficit']].map(([to, l]) => (
                  <Link key={to} href={to} className="btn outline" style={{ width: 'auto', padding: '8px 16px', fontSize: '0.85rem' }}>{l}</Link>
                ))}
              </div>
            </div>
            <div className="disclaimer-box">
              <p><strong>Important Medical Disclaimer:</strong> This tool is for informational purposes only. WHR is a screening tool, not a diagnostic instrument. Consult a qualified healthcare provider for a complete health assessment.</p>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
}
