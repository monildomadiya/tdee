'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../../src/components/Sidebar';

const CYCLE_MINUTES = 90;
const FALL_ASLEEP_MINUTES = 14;

function getWakeTimes(bedtime) {
  const [h, m] = bedtime.split(':').map(Number);
  const base = new Date();
  base.setHours(h, m + FALL_ASLEEP_MINUTES, 0, 0);
  return [3, 4, 5, 6].map(cycles => {
    const t = new Date(base.getTime() + cycles * CYCLE_MINUTES * 60000);
    const hours = t.getHours().toString().padStart(2, '0');
    const mins = t.getMinutes().toString().padStart(2, '0');
    const label = cycles <= 4 ? 'Not recommended' : cycles === 5 ? 'Minimum' : 'Optimal';
    return { time: `${hours}:${mins}`, cycles, label };
  });
}

function getBedtimes(wakeup) {
  const [h, m] = wakeup.split(':').map(Number);
  const base = new Date();
  base.setHours(h, m, 0, 0);
  return [6, 5, 4].map(cycles => {
    const t = new Date(base.getTime() - (cycles * CYCLE_MINUTES + FALL_ASLEEP_MINUTES) * 60000);
    const hours = t.getHours().toString().padStart(2, '0');
    const mins = t.getMinutes().toString().padStart(2, '0');
    const label = cycles === 6 ? 'Optimal (9 hrs)' : cycles === 5 ? 'Good (7.5 hrs)' : 'Minimum (6 hrs)';
    return { time: `${hours}:${mins}`, cycles, label };
  });
}

export default function SleepCalculator() {
  const [mode, setMode] = useState('bedtime');
  const [bedtime, setBedtime] = useState('23:00');
  const [wakeup, setWakeup] = useState('07:00');
  const [results, setResults] = useState(null);

  const calculate = () => {
    if (mode === 'bedtime') setResults(getWakeTimes(bedtime));
    else setResults(getBedtimes(wakeup));
  };

  const faqs = [
    { q: 'What is a sleep cycle?', a: 'A sleep cycle lasts approximately 90 minutes and includes stages of light sleep, deep sleep, and REM sleep. Adults typically complete 4–6 cycles per night. Waking up at the end of a cycle instead of mid-cycle helps you feel alert and refreshed.' },
    { q: 'How many hours of sleep do I need?', a: 'Most adults need 7–9 hours of sleep per night. This corresponds to 5–6 complete 90-minute sleep cycles. Teenagers need 8–10 hours, and children need more. Consistently sleeping fewer than 6 hours per night is linked to weight gain, impaired cognition, and increased disease risk.' },
    { q: 'Why do I still feel tired after 8 hours of sleep?', a: 'Waking up mid-cycle — even after 8 hours — causes sleep inertia. This calculator helps you time your wake-up to coincide with the natural end of a cycle, so you feel immediately alert rather than groggy.' },
    { q: 'Does sleep affect weight loss and TDEE?', a: 'Yes, significantly. Poor sleep elevates cortisol and ghrelin (hunger hormone), leading to overeating and reduced fat burning. Research shows that sleep-deprived dieters lose up to 70% less fat compared to well-rested individuals, even on the same calorie deficit.' },
  ];

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Sleep Calculator</h1>
          <p>Find the best time to wake up or go to bed based on 90-minute sleep cycles. Wake up refreshed, not groggy.</p>
        </div>
      </div>

      <div className="container tool-layout-container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="tool-main-content">
          <div className="calculator-card">
            <div className="mac-header">
              <div className="mac-dots"><span className="mac-dot red"></span><span className="mac-dot yellow"></span><span className="mac-dot green"></span></div>
              <div className="mac-title">Sleep Cycle Calculator</div>
            </div>
            <div className="calculator-card-body" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '1.5rem' }}>
                <button type="button" onClick={() => { setMode('bedtime'); setResults(null); }} style={{ flex: 1, padding: '12px', fontWeight: 700, fontSize: '0.95rem', background: mode === 'bedtime' ? 'var(--text)' : 'var(--card)', color: mode === 'bedtime' ? 'var(--bg)' : 'var(--text)', border: '1px solid var(--border)', cursor: 'pointer' }}>I know my bedtime</button>
                <button type="button" onClick={() => { setMode('wakeup'); setResults(null); }} style={{ flex: 1, padding: '12px', fontWeight: 700, fontSize: '0.95rem', background: mode === 'wakeup' ? 'var(--text)' : 'var(--card)', color: mode === 'wakeup' ? 'var(--bg)' : 'var(--text)', border: '1px solid var(--border)', cursor: 'pointer' }}>I know my wake-up time</button>
              </div>

              <div className="input-group" style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  {mode === 'bedtime' ? 'What time do you plan to go to bed?' : 'What time do you need to wake up?'}
                </label>
                <input type="time" value={mode === 'bedtime' ? bedtime : wakeup} onChange={e => mode === 'bedtime' ? setBedtime(e.target.value) : setWakeup(e.target.value)} style={{ padding: '12px', fontSize: '1.1rem', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', width: '100%' }} />
              </div>
              <button onClick={calculate} className="btn-primary">Calculate Best Sleep Times</button>

              {results && (
                <div style={{ marginTop: '2rem' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'var(--muted)', marginBottom: '1rem' }}>
                    {mode === 'bedtime' ? 'Best times to wake up' : 'Best times to go to sleep'} (accounting for ~14 min to fall asleep)
                  </div>
                  <div style={{ display: 'grid', gap: '10px' }}>
                    {results.map((r, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', background: r.cycles >= 5 ? 'var(--green-light)' : 'var(--card)', border: `1px solid ${r.cycles >= 5 ? 'var(--green)' : 'var(--border)'}` }}>
                        <div>
                          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: r.cycles >= 5 ? 'var(--green)' : 'var(--text)' }}>{r.time}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 600 }}>{r.cycles} sleep cycles · {r.cycles * 1.5} hours</div>
                        </div>
                        <span style={{ fontSize: '0.78rem', fontWeight: 700, padding: '4px 10px', background: r.cycles >= 6 ? 'var(--green)' : r.cycles === 5 ? '#0d9488' : 'var(--muted)', color: '#fff' }}>{r.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="article-section">
            <h2>Why Sleep Cycles Matter for Health and Fitness</h2>
            <p>Every night, your brain moves through a repeating pattern of <strong>non-REM and REM sleep</strong>. Each complete cycle takes about 90 minutes. The key insight: your brain naturally "surfaces" to light sleep at the end of each cycle. If your alarm fires then, you wake feeling alert. If it fires mid-cycle (during deep sleep), you experience <strong>sleep inertia</strong> — that groggy, heavy feeling that can last for hours.</p>
            <p>This calculator uses the 90-minute cycle model and adds the average time it takes to fall asleep (approximately 14 minutes for most adults) to give you scientifically-timed wake-up suggestions.</p>

            <h2>Sleep and Your TDEE: A Critical Connection</h2>
            <p>Sleep is a hidden lever on your metabolism. Poor or insufficient sleep causes measurable changes in hormones that directly affect your calorie balance:</p>
            <ul>
              <li><strong>Ghrelin increases</strong> — the hunger hormone drives you to eat more, often 300–500 extra calories per day.</li>
              <li><strong>Leptin decreases</strong> — the satiety hormone fails to signal fullness, making overeating easy.</li>
              <li><strong>Cortisol rises</strong> — the stress hormone promotes fat storage, especially around the abdomen.</li>
              <li><strong>Insulin sensitivity drops</strong> — making carbohydrates more likely to be stored as fat.</li>
            </ul>
            <p>For anyone using a <Link href="/tdee-calculator">TDEE calculator</Link> or following a <Link href="/calorie-deficit">calorie deficit</Link> plan, optimising sleep is as important as tracking calories. A well-rested body burns fat more efficiently.</p>

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
                {[['/tdee-calculator','TDEE Calculator'],['/bmr-calculator','BMR Calculator'],['/calorie-deficit','Calorie Deficit'],['/target-heart-rate-calculator','Heart Rate Zones'],['/intermittent-fasting-calculator','Intermittent Fasting']].map(([to, l]) => (
                  <Link key={to} href={to} className="btn outline" style={{ width: 'auto', padding: '8px 16px', fontSize: '0.85rem' }}>{l}</Link>
                ))}
              </div>
            </div>

            <div className="disclaimer-box">
              <p><strong>Important Disclaimer:</strong> This sleep calculator is for educational purposes only. If you experience chronic sleep disorders, excessive daytime sleepiness, or sleep apnea symptoms, please consult a qualified healthcare professional or sleep specialist.</p>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
}
