"use client";
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';


import Sidebar from '../../src/components/Sidebar';
import EmbedButton from '../../src/components/EmbedButton';

/* ── FAQ data (Expert SEO Optimized) ── */
const faqs = [
  { question: 'What exactly does a TDEE calculator do?', answer: 'A TDEE calculator estimates the total amount of energy you spend in a day. It combines your resting metabolism with the energy used during physical activities. This provides you with a maintenance calorie figure, which is essential for planning how much you should eat to reach specific health and body weight targets.' },
  { question: 'Why is my TDEE result different from other calculators?', answer: 'Different formulas can result in slight variations. Most reliable TDEE calculator tools use the Mifflin-St Jeor or Harris-Benedict equations. Small differences also occur based on how a tool defines activity levels. However, our TDEE calculator uses the most updated scientific formulas to ensure your results are as accurate as possible for planning purposes.' },
  { question: 'How often should I recalculate my TDEE?', answer: 'You should use the TDEE calculator every time your weight changes significantly, usually every 5 to 10 kilograms. As you lose or gain weight, your body requires different amounts of energy to function. Additionally, if your daily activity levels change, such as starting a new sport, you should update your calculation to stay on track.' },
  { question: 'Can I trust a TDEE calculator for weight loss?', answer: 'Yes, a TDEE calculator is a highly effective tool for weight loss. By identifying your maintenance level, you can simply subtract 500 calories from that total to create a safe and sustainable calorie deficit. This scientific approach is much more reliable than guessing or following generic diet plans that do not account for your unique body.' },
  { question: 'What is the difference between BMR and TDEE?', answer: 'BMR is the energy your body burns just to keep your organs functioning while at rest. TDEE is your BMR plus all the energy you spend moving, walking, and exercising throughout the day. Essentially, TDEE is a more \'real world\' number that accounts for your actual lifestyle, whereas BMR is your absolute minimum energy floor.' },
  { question: 'Is TDEE the same for men and women?', answer: 'Generally, no. Men usually have more muscle mass and different hormonal profiles, which typically leads to a higher TDEE even at the same weight and height as a woman. Our TDEE calculator accounts for these biological differences to provide gender-specific accuracy for both men and women.' },
  { question: 'What is a common mistake when using a TDEE calculator?', answer: 'The most common mistake is overestimating your activity level. Many people select "Highly Active" when they actually have a sedentary desk job and only exercise for an hour. To get the best results from this TDEE calculator, be honest about your daily movement to avoid receiving a maintenance calorie number that is too high.' },
  { question: 'Does TDEE account for muscle mass?', answer: 'Standard equations use total body weight, which works well for most people. However, muscle is more metabolically active than fat. If you are an athlete with a very high muscle percentage, your actual TDEE might be slightly higher than the estimate. This TDEE calculator provides a very accurate baseline for 95% of the general population.' },
  { question: 'How do I adjust my TDEE for muscle gain?', answer: 'To build muscle, you need to eat in a calorie surplus. Once you find your maintenance calories using the TDEE calculator, add 200 to 500 calories to that number. This provides your body with the extra energy required to repair and grow new muscle tissue effectively without excessive fat gain.' },
  { question: 'Why is my TDEE lower than I expected?', answer: 'If you have been dieting for a long time or are very small in stature, your TDEE might be lower than the average. Factors like age also play a role, as metabolism naturally slows slightly over time. Using this TDEE calculator helps you face the reality of your body\'s needs so you can adjust your intake accordingly.' }
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button type="button" className={`faq-q${open?' open':''}`} onClick={() => setOpen(o=>!o)} aria-expanded={open}>
        {q}<span className="chevron" aria-hidden="true">▼</span>
      </button>
      <div className={`faq-a${open?' open':''}`} aria-hidden={!open}><p>{a}</p></div>
    </div>
  );
};

const getMacros = (cals) => {
  return {
    mod:  { p: Math.round(cals*.3/4), f: Math.round(cals*.35/9), c: Math.round(cals*.35/4) },
    low:  { p: Math.round(cals*.4/4), f: Math.round(cals*.4/9),  c: Math.round(cals*.2/4) },
    high: { p: Math.round(cals*.3/4), f: Math.round(cals*.2/9),  c: Math.round(cals*.5/4) }
  };
};

const MacroDonut = ({ p, c, f, label }) => {
  const total = p*4 + c*4 + f*9; 
  const pPct = ((p*4)/total) * 100;
  const cPct = ((c*4)/total) * 100;
  const fPct = ((f*9)/total) * 100;
  const r = 40;
  const circ = 2 * Math.PI * r;
  const pStroke = (pPct/100) * circ;
  const cStroke = (cPct/100) * circ;
  const fStroke = (fPct/100) * circ;
  const cOffset = -pStroke;
  const fOffset = cOffset - cStroke;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '16px 10px' }}>
      <div style={{ fontWeight: 800, fontSize: '0.85rem', marginBottom: '12px', color: 'var(--text)' }}>{label}</div>
      <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="50" cy="50" r={r} fill="transparent" stroke="#e2e8f0" strokeWidth="12" />
        <circle cx="50" cy="50" r={r} fill="transparent" stroke="var(--teal-text)" strokeWidth="12" strokeDasharray={`${pStroke} ${circ}`} />
        <circle cx="50" cy="50" r={r} fill="transparent" stroke="var(--yellow-text)" strokeWidth="12" strokeDasharray={`${cStroke} ${circ}`} strokeDashoffset={cOffset} />
        <circle cx="50" cy="50" r={r} fill="transparent" stroke="var(--purple-text)" strokeWidth="12" strokeDasharray={`${fStroke} ${circ}`} strokeDashoffset={fOffset} />
      </svg>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4px', width: '100%', marginTop: '16px', textAlign: 'center', fontSize: '0.75rem' }}>
        <div><div style={{ color: 'var(--teal-text)', fontWeight: 800 }}>{p}g</div><div style={{ color: 'var(--muted)', fontSize: '0.65rem', textTransform: 'uppercase' }}>Pro</div></div>
        <div><div style={{ color: 'var(--yellow-text)', fontWeight: 800 }}>{c}g</div><div style={{ color: 'var(--muted)', fontSize: '0.65rem', textTransform: 'uppercase' }}>Carb</div></div>
        <div><div style={{ color: 'var(--purple-text)', fontWeight: 800 }}>{f}g</div><div style={{ color: 'var(--muted)', fontSize: '0.65rem', textTransform: 'uppercase' }}>Fat</div></div>
      </div>
    </div>
  );
};

const TDEE = () => {

  const resultsRef = useRef(null);
  const searchParams = useSearchParams();
  
  const [gender,   setGender]   = useState('male');
  const [age,      setAge]      = useState('');
  const [unit,     setUnit]     = useState('metric');
  const [weightKg, setWeightKg] = useState('');
  const [weightLb, setWeightLb] = useState('');
  const [heightCm, setHeightCm] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [activity, setActivity] = useState('1.55');
  const [bodyFat,  setBodyFat]  = useState('');
  
  useEffect(() => {
    // Populate form from URL params after mount (prevents infinite Suspense loop)
    const g   = searchParams.get('g');   if (g)   setGender(g);
    const a   = searchParams.get('a');   if (a)   setAge(a);
    const u   = searchParams.get('u');   if (u)   setUnit(u);
    const wk  = searchParams.get('wk'); if (wk)  setWeightKg(wk);
    const wl  = searchParams.get('wl'); if (wl)  setWeightLb(wl);
    const hc  = searchParams.get('hc'); if (hc)  setHeightCm(hc);
    const hf  = searchParams.get('hf'); if (hf)  setHeightFt(hf);
    const hi  = searchParams.get('hi'); if (hi)  setHeightIn(hi);
    const act = searchParams.get('act');if (act) setActivity(act);
    const bf  = searchParams.get('bf'); if (bf)  setBodyFat(bf);

    // Auto-calculate if all required params are present
    const ageParam = searchParams.get('a');
    const unitParam = searchParams.get('u') || 'metric';
    const wkParam = searchParams.get('wk');
    const hcParam = searchParams.get('hc');
    const wlParam = searchParams.get('wl');
    const hfParam = searchParams.get('hf');
    const hiParam = searchParams.get('hi');
    const actParam = searchParams.get('act') || '1.55';
    const bfParam = searchParams.get('bf');
    const gParam = searchParams.get('g') || 'male';

    const hasMetric = ageParam && wkParam && hcParam;
    const hasImperial = ageParam && wlParam && hfParam;
    if (hasMetric || hasImperial) {
      setTimeout(() => {
        let wKg = unitParam === 'metric' ? parseFloat(wkParam) : parseFloat(wlParam) * 0.453592;
        let hCm = unitParam === 'imperial'
          ? parseFloat(hfParam || 0) * 30.48 + parseFloat(hiParam || 0) * 2.54
          : parseFloat(hcParam);
        const a2 = parseFloat(ageParam);
        const act2 = parseFloat(actParam);
        const bf2 = parseFloat(bfParam);
        if (!wKg || !hCm || !a2 || wKg <= 0 || hCm <= 0 || a2 <= 0) return;
        let bmr = 0, formula = '';
        if (bf2 > 0 && bf2 < 80) {
          bmr = 370 + (21.6 * wKg * (1 - bf2 / 100));
          formula = 'Katch-McArdle';
        } else {
          bmr = gParam === 'male' ? (10 * wKg) + (6.25 * hCm) - (5 * a2) + 5 : (10 * wKg) + (6.25 * hCm) - (5 * a2) - 161;
          formula = 'Mifflin-St Jeor';
        }
        const tdee = Math.round(bmr * act2);
        const bmi = +(wKg / ((hCm / 100) ** 2)).toFixed(1);
        const bmiCat = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Healthy' : bmi < 30 ? 'Overweight' : 'Obese';
        const inchesOver5ft = Math.max(0, (hCm / 2.54) - 60);
        const ibwKg = gParam === 'male' ? 48 + 2.7 * inchesOver5ft : 45.5 + 2.2 * inchesOver5ft;
        const maxMuscleKg = gParam === 'male' ? hCm - 100 : hCm - 105;
        const maintenanceMacros = getMacros(tdee);
        setResult({
          bmr: Math.round(bmr), tdee, bmi, bmiCat, formula,
          ibw: Math.round(ibwKg), maxMuscle: Math.round(maxMuscleKg),
          wKg, unit: unitParam,
          maintenance: { cals: tdee, macros: maintenanceMacros },
          cutting: { cals: tdee - 500, macros: getMacros(tdee - 500) },
          bulking: { cals: tdee + 500, macros: getMacros(tdee + 500) },
        });
      }, 150);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  const [result,   setResult]   = useState(null);
  const [copied,   setCopied]   = useState(false);
  const [error,    setError]    = useState('');
  const [embedModalOpen, setEmbedModalOpen] = useState(false);
  const embedCode = `<iframe src="https://tdee.tech/embed/tdee" width="100%" height="650" style="border:none;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.1);"></iframe>`;


  const activities = [
    { v:'1.2',   l:'Sedentary',   s:'Little/no exercise' },
    { v:'1.375', l:'Light',       s:'1–3 days/week' },
    { v:'1.55',  l:'Moderate',    s:'3–5 days/week' },
    { v:'1.725', l:'Active',      s:'6–7 days/week' },
    { v:'1.9',   l:'Very Active', s:'Physical job or 2× training' },
  ];

  const calculate = (e) => {
    e.preventDefault();
    setError('');
    let wKg;
    if (unit === 'metric') {
      wKg = parseFloat(weightKg);
    } else {
      // Both 'imperial' (lbs/ft) and 'mixed' (lbs/cm) use lbs for weight
      wKg = parseFloat(weightLb) * 0.453592;
    }
    let hCm = (unit === 'imperial') ? parseFloat(heightFt||0)*30.48 + parseFloat(heightIn||0)*2.54 : parseFloat(heightCm);
    const a  = parseFloat(age);
    const act = parseFloat(activity);
    const bf = parseFloat(bodyFat);
    if (!wKg || !hCm || !a || wKg<=0 || hCm<=0 || a<=0) {
      setError('Please fill in all required fields (Age, Weight, Height).');
      return;
    }
    let bmr = 0;
    let formula = '';
    if (bf > 0 && bf < 80) {
      const leanMass = wKg * (1 - (bf / 100));
      bmr = 370 + (21.6 * leanMass);
      formula = 'Katch-McArdle';
    } else {
      bmr = gender === 'male' ? (10 * wKg) + (6.25 * hCm) - (5 * a) + 5 : (10 * wKg) + (6.25 * hCm) - (5 * a) - 161;
      formula = 'Mifflin-St Jeor';
    }
    const tdee = Math.round(bmr * act);
    const bmi  = +(wKg / ((hCm/100)**2)).toFixed(1);
    let bmiCat = bmi<18.5?'Underweight':bmi<25?'Healthy':bmi<30?'Overweight':'Obese';
    const inchesOver5ft = Math.max(0, (hCm / 2.54) - 60);
    const ibwKg = gender === 'male' ? 48 + 2.7 * inchesOver5ft : 45.5 + 2.2 * inchesOver5ft;
    const maxMuscleKg = gender === 'male' ? hCm - 100 : hCm - 105;
    const maintenanceMacros = getMacros(tdee);
    setResult({
      bmr: Math.round(bmr), tdee, bmi, bmiCat, formula,
      ibw: Math.round(ibwKg), maxMuscle: Math.round(maxMuscleKg),
      wKg, unit,
      maintenance: { cals: tdee, macros: maintenanceMacros },
      cutting: { cals: tdee - 500, macros: getMacros(tdee - 500) },
      bulking: { cals: tdee + 500, macros: getMacros(tdee + 500) }
    });
  };

  const copyResult = () => {
    if (!result) return;
    const t = `My TDEE Results from tdee.tech\n\nMaintenance: ${result.tdee.toLocaleString()} kcal/day\nBMR: ${result.bmr.toLocaleString()} kcal\nBMI: ${result.bmi} (${result.bmiCat})\n\nGoal Targets:\n  Fat Loss (-500): ${(result.tdee-500).toLocaleString()} kcal\n  Lean Bulk (+300): ${(result.tdee+300).toLocaleString()} kcal\n\nMacros (Balanced):\n  Protein: ${result.maintenance.macros.mod.p}g\n  Carbs: ${result.maintenance.macros.mod.c}g\n  Fat: ${result.maintenance.macros.mod.f}g\n\nFormula: ${result.formula} | tdee.tech`;
    navigator.clipboard.writeText(t).then(()=>{ setCopied(true); setTimeout(()=>setCopied(false),2500); });
  };

  const shareResult = async () => {
    const params = new URLSearchParams();
    params.set('g', gender); params.set('a', age); params.set('u', unit); params.set('act', activity);
    if (bodyFat) params.set('bf', bodyFat);
    if (unit === 'metric') { params.set('wk', weightKg); params.set('hc', heightCm); }
    else { params.set('wl', weightLb); params.set('hf', heightFt); if (heightIn) params.set('hi', heightIn); }
    const shareUrl = `${window.location.origin}/tdee-calculator?${params.toString()}`;
    const text = `My TDEE is ${result.tdee.toLocaleString()} calories/day! Fat loss target: ${(result.tdee-500).toLocaleString()} cal. See my full calculation here:`;
    if (navigator.share) { try { await navigator.share({ title:'My TDEE Result', text, url: shareUrl }); } catch(e) {} }
    else { navigator.clipboard.writeText(`${text} ${shareUrl}`); setCopied(true); setTimeout(()=>setCopied(false),2500); }
  };



  const reset = () => { setAge(''); setWeightKg(''); setWeightLb(''); setHeightCm(''); setHeightFt(''); setHeightIn(''); setBodyFat(''); setResult(null); setError(''); };

  return (
    <>
      

      <div className="page-hero">
        <div className="container">
          <h1>TDEE Calculator</h1>
          <p>Calculate your Total Daily Energy Expenditure, BMR, BMI, and optimal macros — free, instant, no signup.</p>
        </div>
      </div>

      <div className="container tool-layout-container" style={{ paddingTop:'2rem', paddingBottom:'4rem' }}>
        <div className="tool-main-content">

        {/* ── Calculator Card ── */}
        <div className="calculator-card">
          <div className="mac-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="mac-dots" style={{ display: 'none' }}></div>
              <div className="mac-title" style={{ marginLeft: '12px' }}>TDEE & Macros</div>
            </div>
            <EmbedButton slug="tdee-calculator" />
          </div>
          <div className="calculator-card-body">
            <div className="calculator-grid">
            
            {/* LEFT SIDE: FORM */}
            <div className="calc-form-container">
              <div style={{ fontSize: '.75rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 700, marginBottom: '1.25rem' }}>Your Details</div>
              
              <form onSubmit={calculate} noValidate className="calc-form">
                
                <div className="input-group">
                  <div className="toggle-group" role="group" aria-label="Unit system" style={{ background: 'var(--bg)' }}>
                    <button type="button" className={`toggle-btn${unit==='metric'?' active':''}`} onClick={()=>setUnit('metric')}><span>Metric</span><span className="sub-text">(kg, cm)</span></button>
                    <button type="button" className={`toggle-btn${unit==='mixed'?' active':''}`} onClick={()=>setUnit('mixed')}><span>UK/Mixed</span><span className="sub-text">(lbs, cm)</span></button>
                    <button type="button" className={`toggle-btn${unit==='imperial'?' active':''}`} onClick={()=>setUnit('imperial')}><span>US</span><span className="sub-text">(lbs, ft)</span></button>
                  </div>
                </div>

                <div className="input-row">
                  <div className="input-group">
                    <label htmlFor="tdee-age">Age</label>
                    <input id="tdee-age" type="number" min="10" max="100" value={age}
                      onChange={e=>setAge(e.target.value)} aria-required="true" />
                  </div>
                  <div className="input-group">
                    <label>Gender</label>
                    <select value={gender} onChange={e=>setGender(e.target.value)} style={{ cursor: 'pointer' }}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="input-row">
                  <div className="input-group">
                    <label>Weight ({unit === 'metric' ? 'kg' : 'lbs'})</label>
                    {unit === 'metric' 
                      ? <input type="number" step=".1" min="20" max="300" value={weightKg} onChange={e=>setWeightKg(e.target.value)} />
                      : <input type="number" step=".1" min="44" max="660" value={weightLb} onChange={e=>setWeightLb(e.target.value)} />
                    }
                  </div>
                  <div className="input-group">
                    <label>Height ({unit === 'imperial' ? 'ft/in' : 'cm'})</label>
                    {unit === 'imperial'
                      ? <div style={{ display:'flex', gap:'8px' }}>
                          <input type="number" min="1" max="9" value={heightFt} onChange={e=>setHeightFt(e.target.value)} placeholder="ft" style={{ flex:1 }} />
                          <input type="number" min="0" max="11" value={heightIn} onChange={e=>setHeightIn(e.target.value)} placeholder="in" style={{ flex:1 }} />
                        </div>
                      : <input type="number" step=".1" min="50" max="280" value={heightCm} onChange={e=>setHeightCm(e.target.value)} />
                    }
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="tdee-activity">Activity Level</label>
                  <select id="tdee-activity" value={activity} onChange={e=>setActivity(e.target.value)} aria-required="true" style={{ cursor: 'pointer' }}>
                    {activities.map(a=>(
                      <option key={a.v} value={a.v}>{a.l} (exercise {a.s})</option>
                    ))}
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="tdee-bf">Body fat % (optional)</label>
                  <input id="tdee-bf" type="number" min="1" max="80" value={bodyFat}
                    onChange={e=>setBodyFat(e.target.value)} />
                </div>

                {error && (
                  <p role="alert" style={{ color:'var(--red-text)', background:'var(--red-light)', padding:'10px 14px', borderRadius:'var(--r-sm)', fontSize:'.9rem', marginBottom:'1rem' }}>
                    {error}
                  </p>
                )}

                <button type="submit" className="btn-primary" aria-label="Calculate TDEE" style={{ marginTop: '.5rem' }}>
                  Calculate TDEE
                </button>
              </form>
            </div>

            {/* RIGHT SIDE: RESULTS */}
            <div ref={resultsRef} className="results-container" style={{ display:'flex', flexDirection:'column', height:'100%', minHeight:'400px' }}>
              <div style={{ background:'var(--bg)', border:'1px solid var(--border)', borderBottom:'none', color:'var(--text)', padding:'1rem 1.5rem', fontWeight:600, fontSize:'.95rem', borderTopLeftRadius:'var(--r-lg)', borderTopRightRadius:'var(--r-lg)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                Your Results
                {result && (
                  <div style={{ display:'flex', gap:'6px' }}>
                    <button onClick={copyResult} style={{ background: copied?'var(--green)':'var(--card)', border:'1px solid var(--border)', color: copied?'#fff':'var(--text)', padding:'6px 12px', borderRadius:'0', cursor:'pointer', fontSize:'.8rem', fontWeight:600, transition:'all .2s' }}>{copied?'✓ Copied':'📋 Copy'}</button>
                    <button onClick={shareResult} style={{ background:'var(--card)', border:'1px solid var(--border)', color:'var(--text)', padding:'6px 12px', borderRadius:'0', cursor:'pointer', fontSize:'.8rem', fontWeight:600 }}>🔗 Share</button>
                    <button onClick={reset} style={{ background:'var(--card)', border:'1px solid var(--border)', color:'var(--text)', width:'32px', height:'32px', borderRadius:'0', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }} title="Reset">↺</button>
                  </div>
                )}
              </div>

              <div style={{ background:'var(--card)', flex:1, padding:'1.75rem 1.5rem', borderBottomLeftRadius:'var(--r-lg)', borderBottomRightRadius:'var(--r-lg)', display:'flex', flexDirection:'column', justifyContent: result?'flex-start':'center', alignItems:'center', border:'1px solid var(--border)' }}>
                {!result ? (
                  <div style={{ color:'var(--muted)', textAlign:'center' }}>Enter your details and hit Calculate</div>
                ) : (
                  <div style={{ width:'100%' }}>

                    {/* Hero Number */}
                    <div style={{ textAlign:'center', marginBottom:'1.5rem', paddingBottom:'1.5rem', borderBottom:'1px solid var(--border)' }}>
                      <div style={{ fontSize:'.7rem', textTransform:'uppercase', letterSpacing:'.08em', color:'var(--muted)', fontWeight:700, marginBottom:'.35rem' }}>Your TDEE · Maintenance Calories</div>
                      <div style={{ fontSize:'3.75rem', fontWeight:900, lineHeight:1, color:'var(--green)', letterSpacing:'-.04em' }}>{result.tdee.toLocaleString()}</div>
                      <div style={{ fontSize:'.9rem', color:'var(--text-2)', marginTop:'4px' }}>
                        calories per day ·{' '}
                        <a href={result.formula === 'Mifflin-St Jeor' ? 'https://pubmed.ncbi.nlm.nih.gov/2305711/' : 'https://pubmed.ncbi.nlm.nih.gov/3812338/'} target="_blank" rel="nofollow noopener noreferrer" style={{ color:'var(--green)', fontWeight:700, textDecoration:'none' }}>{result.formula}</a>
                        <span style={{ fontSize:'.7rem', color:'var(--muted)', marginLeft:'4px' }}>[PubMed ↗]</span>
                      </div>
                      <div style={{ display:'flex', gap:'8px', justifyContent:'center', marginTop:'.75rem', flexWrap:'wrap' }}>
                        <span style={{ background:'var(--green-light)', color:'var(--green-dark)', padding:'3px 10px', fontSize:'.75rem', fontWeight:700 }}>BMR {result.bmr.toLocaleString()} kcal</span>
                        <span style={{ background:'var(--blue-light-alt)', color:'var(--blue-text)', padding:'3px 10px', fontSize:'.75rem', fontWeight:700 }}>BMI {result.bmi} · {result.bmiCat}</span>
                      </div>
                    </div>

                    {/* Advanced Body Metrics */}
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                      <div style={{ flex: '1 1 200px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '8px' }}>Ideal Body Weight</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text)' }}>{result.ibw} <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>kg</span></div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-2)', marginTop: '4px' }}>G.J. Hamwi Formula</div>
                      </div>
                      <div style={{ flex: '1 1 200px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '8px' }}>Max Muscular Potential</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text)' }}>{result.maxMuscle} <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>kg</span></div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-2)', marginTop: '4px' }}>Martin Berkhan Model</div>
                      </div>
                    </div>

                    {/* 5-Row Goal Calorie Table */}
                    <div style={{ marginBottom:'1.25rem' }}>
                      <div style={{ fontSize:'.7rem', textTransform:'uppercase', letterSpacing:'.08em', color:'var(--muted)', fontWeight:700, marginBottom:'.6rem' }}>Goal Calorie Targets</div>
                      <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'.82rem' }}>
                        <thead>
                          <tr style={{ borderBottom:'2px solid var(--border)' }}>
                            <th style={{ textAlign:'left', padding:'5px 8px', color:'var(--muted)', fontWeight:600, fontSize:'.65rem', textTransform:'uppercase' }}>Goal</th>
                            <th style={{ textAlign:'center', padding:'5px 6px', color:'var(--muted)', fontWeight:600, fontSize:'.65rem', textTransform:'uppercase' }}>Daily kcal</th>
                            <th style={{ textAlign:'center', padding:'5px 6px', color:'var(--muted)', fontWeight:600, fontSize:'.65rem', textTransform:'uppercase' }}>Weekly kcal</th>
                            <th style={{ textAlign:'center', padding:'5px 6px', color:'var(--muted)', fontWeight:600, fontSize:'.65rem', textTransform:'uppercase' }}>vs TDEE</th>
                            <th style={{ textAlign:'center', padding:'5px 6px', color:'var(--muted)', fontWeight:600, fontSize:'.65rem', textTransform:'uppercase' }}>Rate</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { label:'Aggressive Cut',  delta:-1000, color:'#dc2626', bg:'#fef2f2',  rate:'~1 kg/wk loss' },
                            { label:'Mild Cut',         delta:-500,  color:'#ea580c', bg:'#fff7ed',  rate:'~0.5 kg/wk loss' },
                            { label:'Maintenance',      delta:0,     color:'#0d9488', bg:'var(--green-light)', rate:'Stable weight' },
                            { label:'Mild Bulk',        delta:300,   color:'#1d4ed8', bg:'#eff6ff',  rate:'~0.3 kg/wk gain' },
                            { label:'Aggressive Bulk',  delta:500,   color:'#7c3aed', bg:'#faf5ff',  rate:'~0.5 kg/wk gain' },
                          ].map(({ label, delta, color, bg, rate }) => (
                            <tr key={label} style={{ borderBottom:'1px solid var(--border)', background: delta===0 ? bg : 'transparent' }}>
                              <td style={{ padding:'7px 8px', fontWeight:700, color, fontSize:'.79rem' }}>{label}</td>
                              <td style={{ textAlign:'center', padding:'7px 6px', fontWeight:800, color:'var(--text)', fontSize:'.95rem' }}>{(result.tdee + delta).toLocaleString()}</td>
                              <td style={{ textAlign:'center', padding:'7px 6px', fontWeight:700, color:'var(--text-2)', fontSize:'.85rem' }}>{((result.tdee + delta) * 7).toLocaleString()}</td>
                              <td style={{ textAlign:'center', padding:'7px 6px', fontWeight:600, color, fontSize:'.79rem' }}>{delta === 0 ? '—' : (delta > 0 ? '+' : '') + delta}</td>
                              <td style={{ textAlign:'center', padding:'7px 6px', color:'var(--muted)', fontSize:'.7rem' }}>{rate}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Macro Donut Charts */}
                    <div style={{ marginBottom:'1.5rem' }}>
                      <div style={{ fontSize:'.7rem', textTransform:'uppercase', letterSpacing:'.08em', color:'var(--muted)', fontWeight:700, marginBottom:'.8rem' }}>Maintenance Macronutrients</div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
                        <MacroDonut p={result.maintenance.macros.mod.p} c={result.maintenance.macros.mod.c} f={result.maintenance.macros.mod.f} label="Moderate Carb" />
                        <MacroDonut p={result.maintenance.macros.low.p} c={result.maintenance.macros.low.c} f={result.maintenance.macros.low.f} label="Lower Carb" />
                        <MacroDonut p={result.maintenance.macros.high.p} c={result.maintenance.macros.high.c} f={result.maintenance.macros.high.f} label="Higher Carb" />
                      </div>
                    </div>

                    {/* Activity Level Comparison */}
                    <div>
                      <div style={{ fontSize:'.7rem', textTransform:'uppercase', letterSpacing:'.08em', color:'var(--muted)', fontWeight:700, marginBottom:'.6rem' }}>TDEE at All Activity Levels</div>
                      {[
                        { label:'Sedentary',   mult:1.2,   desc:'Desk job, no exercise' },
                        { label:'Light',       mult:1.375, desc:'1–3 days/week' },
                        { label:'Moderate',    mult:1.55,  desc:'3–5 days/week' },
                        { label:'Active',      mult:1.725, desc:'6–7 days/week' },
                        { label:'Very Active', mult:1.9,   desc:'Physical job / 2× training' },
                      ].map(({ label, mult, desc }) => {
                        const cal = Math.round(result.bmr * mult);
                        const isSelected = parseFloat(activity) === mult;
                        const pct = ((mult - 1.2) / (1.9 - 1.2)) * 100;
                        return (
                          <div key={label} style={{ marginBottom:'6px', padding:'8px 10px', background: isSelected ? 'var(--green-light)' : 'var(--bg)', border: isSelected ? '1px solid var(--green)' : '1px solid var(--border)' }}>
                            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'5px' }}>
                              <div>
                                <span style={{ fontWeight:700, fontSize:'.82rem', color: isSelected ? 'var(--green-dark)' : 'var(--text)' }}>{label}</span>
                                {isSelected && <span style={{ marginLeft:'6px', fontSize:'.63rem', fontWeight:700, background:'var(--green)', color:'#fff', padding:'1px 5px' }}>YOUR LEVEL</span>}
                                <span style={{ display:'block', fontSize:'.7rem', color:'var(--muted)' }}>{desc}</span>
                              </div>
                              <span style={{ fontWeight:800, fontSize:'1rem', color: isSelected ? 'var(--green)' : 'var(--text)' }}>{cal.toLocaleString()}</span>
                            </div>
                            <div style={{ height:'4px', background:'var(--border)' }}>
                              <div style={{ height:'100%', width:`${pct}%`, background: isSelected ? 'var(--green)' : '#94a3b8' }} />
                            </div>
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

        {/* ── SEO Article ── */}
        <div className="article-section">

          {/* ── 1. WHAT IS TDEE ── */}
          <h2>What Is TDEE?</h2>
          <p>Your <strong>Total Daily Energy Expenditure (TDEE)</strong> is the total number of calories your body burns in a single day. It is not just the calories you burn during a workout — it encompasses every single process your body performs from the moment you wake up to the moment you fall asleep, and even while you sleep.</p>
          <p>TDEE is made up of four distinct components:</p>
          <ul>
            <li><strong>BMR (Basal Metabolic Rate) — ~60–70%:</strong> The calories your body burns just to stay alive at complete rest. This includes breathing, heartbeat, cell repair, temperature regulation, and organ function.</li>
            <li><strong>TEF (Thermic Effect of Food) — ~10%:</strong> The energy your body uses to digest, absorb, and process the food you eat. Protein has the highest TEF (~20–30%), which is one reason high-protein diets support fat loss.</li>
            <li><strong>NEAT (Non-Exercise Activity Thermogenesis) — ~15–30%:</strong> All the calories you burn through non-workout movement — walking to the kitchen, fidgeting, doing housework, typing. This component varies enormously between individuals.</li>
            <li><strong>EAT (Exercise Activity Thermogenesis) — ~5–15%:</strong> Calories burned during planned exercise like gym sessions, runs, or sports.</li>
          </ul>
          <p>Knowing your TDEE is the foundation of any serious nutrition plan. It tells you the exact calorie intake you need to maintain your current weight. Every goal — fat loss, muscle gain, or body recomposition — is defined as eating relative to your TDEE number.</p>

          {/* ── 2. TDEE VS BMR ── */}
          <h2>TDEE vs BMR — What's the Difference?</h2>
          <p><strong>BMR</strong> is the number of calories your body needs to survive in a state of complete rest — if you stayed perfectly still in bed all day. <strong>TDEE</strong> is your BMR multiplied by an activity factor to account for everything you actually do during the day.</p>
          <p>This distinction matters enormously. A common mistake people make when starting a diet is eating at their BMR. For a 30-year-old moderately active woman, that could mean eating 1,400 calories when her actual TDEE is 2,100. A 700-calorie-per-day deficit that large is aggressive, unsustainable, and risks muscle loss. <strong>Always base your diet on your TDEE, not your BMR.</strong></p>

          {/* ── 3. THE FORMULA ── */}
          <h2>The Mifflin-St Jeor Formula (Displayed)</h2>
          <p>Our calculator uses the <strong>Mifflin-St Jeor equation (1990)</strong>, the most validated BMR formula for the modern general population. Here is exactly how it works:</p>
          <div style={{ background:'var(--bg)', border:'1px solid var(--border)', borderRadius:'var(--r-lg)', padding:'1.5rem 2rem', margin:'1.5rem 0', fontFamily:'monospace', fontSize:'1rem', lineHeight: 2 }}>
            <div><strong>Male BMR</strong> = (10 × weight in kg) + (6.25 × height in cm) − (5 × age) + 5</div>
            <div><strong>Female BMR</strong> = (10 × weight in kg) + (6.25 × height in cm) − (5 × age) − 161</div>
            <div style={{ marginTop: '1rem' }}><strong>TDEE</strong> = BMR × Activity Factor</div>
          </div>
          <p>If you enter your Body Fat %, the calculator automatically switches to the more precise <strong>Katch-McArdle formula</strong>: BMR = 370 + (21.6 × Lean Body Mass in kg). This is the gold standard for athletes and bodybuilders where standard formulas tend to overestimate caloric needs.</p>

          {/* ── 4. ACTIVITY TABLE ── */}
          <h2>Activity Level Guide — Which One Are You?</h2>
          <p>Choosing the wrong activity multiplier is the most common TDEE calculation mistake. Most people overestimate by one category. When in doubt, go one level lower and adjust after 2–3 weeks of tracking.</p>
          <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
            <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'.95rem' }}>
              <thead>
                <tr style={{ background:'var(--green)', color:'#fff', textAlign:'left' }}>
                  <th style={{ padding:'12px 16px' }}>Level</th>
                  <th style={{ padding:'12px 16px' }}>Multiplier</th>
                  <th style={{ padding:'12px 16px' }}>Who This Is</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Sedentary',    '× 1.2',  'Desk job, little or no intentional exercise. You drive to work, sit all day, watch TV in the evening. Classic 9-to-5 office workers with no gym routine.'],
                  ['Lightly Active','× 1.375','Light exercise or sport 1–3 days/week. You go for a walk daily or hit the gym once or twice a week. Most casual exercisers fall here.'],
                  ['Moderately Active','× 1.55','Moderate exercise 3–5 days/week. You exercise regularly, pushing through real training sessions most days of the week. This is the most common level for dedicated gym-goers.'],
                  ['Active',      '× 1.725','Hard exercise 6–7 days/week, or a physically demanding job (e.g., construction, landscaping). Training is a daily, serious commitment.'],
                  ['Very Active', '× 1.9',  'Twice-a-day training, elite athletic preparation, or an extremely labour-intensive job. Very few people genuinely belong in this category.'],
                ].map(([level, mult, desc], i) => (
                  <tr key={i} className="stripe-row" style={{ borderBottom:'1px solid var(--border)' }}>
                    <td style={{ padding:'12px 16px', fontWeight:700 }}>{level}</td>
                    <td style={{ padding:'12px 16px', color:'var(--green)', fontWeight:700, whiteSpace:'nowrap' }}>{mult}</td>
                    <td style={{ padding:'12px 16px', color:'var(--text-2)' }}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── 5. HOW TO USE YOUR TDEE ── */}
          <h2>How to Use Your TDEE — A Practical Action Plan</h2>
          <p>Once you know your TDEE, the next step is choosing a goal. Here is exactly what to eat based on each objective:</p>
          <div style={{ display:'grid', gap:'1rem', margin:'1.5rem 0' }}>
            {[
              { goal:'Maintain Weight',  target:'Eat = TDEE',       detail:'Consume exactly your TDEE in calories each day. Your weight will remain stable over time. Ideal during a body recomposition phase.', color:'var(--teal-text)' },
              { goal:'Lose Fat',          target:'Eat TDEE − 300 to 500 cal', detail:'A 500 cal/day deficit = ~0.45 kg (1 lb) fat loss per week. A 300 cal deficit is gentler but more sustainable long-term. Never go below your BMR.', color:'var(--red-text)' },
              { goal:'Lean Bulk',         target:'Eat TDEE + 200 to 300 cal', detail:'A small surplus ("lean bulk") of 200–300 cal/day maximises muscle gain while minimising fat accumulation. Patience is required — muscle grows slowly.', color:'var(--blue-text)' },
              { goal:'Aggressive Bulk',   target:'Eat TDEE + 500 cal', detail:'A 500 cal surplus accelerates muscle gain but will also add some body fat. Best for beginners or those returning to training after a long break.', color:'var(--purple-text)' },
            ].map(({ goal, target, detail, color }, i) => (
              <div key={i} style={{ background:'var(--card)', border:`1px solid var(--border)`, borderLeft:`4px solid ${color}`, borderRadius:'0', padding:'1.25rem 1.5rem' }}>
                <div style={{ fontWeight:700, fontSize:'1.05rem', marginBottom:'.25rem' }}>{goal}</div>
                <div style={{ color, fontWeight:700, fontSize:'.95rem', marginBottom:'.5rem' }}>{target}</div>
                <div style={{ color:'var(--text-2)', fontSize:'.9rem', lineHeight:1.6 }}>{detail}</div>
              </div>
            ))}
          </div>
          <p><strong>Pro tip:</strong> Rather than cutting calories dramatically, many nutrition coaches recommend starting by eating at maintenance for 2 weeks to establish a baseline, then reducing by 300–500 calories. This makes the deficit more sustainable and preserves muscle mass.</p>

          {/* ── 6. MACROS ── */}
          <h2>How Your Macros Are Split</h2>
          <p>Once you know your calorie target, macronutrients (protein, carbs, fat) determine your body composition outcome. The three main fuel sources are <strong>Protein</strong> (4 cal/g), <strong>Carbohydrates</strong> (4 cal/g), and <strong>Fat</strong> (9 cal/g). Our calculator provides three ratio presets:</p>
          <ul>
            <li><strong>Balanced (40% Carb / 30% Protein / 30% Fat):</strong> A versatile, sustainable split for most people.</li>
            <li><strong>High Protein (30/40/30):</strong> Ideal during a fat-loss phase to protect muscle mass. Higher protein also has the highest thermic effect, burning more calories during digestion.</li>
            <li><strong>High Carb (50/25/25):</strong> Best for endurance athletes or those who train intensively and need more glycogen for performance.</li>
            <li><strong>Keto (10/20/70):</strong> Minimal carbs, very high fat. Puts your body into ketosis. Not suitable for everyone — consult a dietitian before starting.</li>
          </ul>
          <p>Use our dedicated <Link href="/macro-calculator">Macro Calculator</Link> to get exact gram targets for any calorie goal. Pair it with our <Link href="/calorie-deficit">Calorie Deficit Calculator</Link> to plan your weight loss targets precisely.</p>

          {/* ── 7. FAQ ── */}
          <h2>TDEE Calculator — Frequently Asked Questions</h2>
          {faqs.map((f,i) => <FAQItem key={i} q={f.question} a={f.answer} />)}


          {/* Disclaimer */}
          <div className="disclaimer-box">
            <p>
              <strong>Important Medical Disclaimer:</strong> The results from this TDEE calculator are estimates intended for educational and informational purposes only. They are not a substitute for professional medical or nutritional advice, diagnosis, or treatment. Individual calorie needs vary based on medical history, medications, and other factors not captured by any formula. Always consult a qualified healthcare provider or registered dietitian before making significant changes to your diet or exercise routine.
            </p>
          </div>
        </div>
      </div>
      <Sidebar />
      </div>
      
    </>
  );
};

export default TDEE;
