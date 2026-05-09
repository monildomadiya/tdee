"use client";
import React from 'react';

import Link from 'next/link';
import Sidebar from '../../src/components/Sidebar';

/* ── Shared country page template ── */
const CountryPage = ({ country, flag, lang, canonical, title, description, localUnit, localNote, children }) => (
  <>
    
    <div className="page-hero">
      <div className="container">
        <div style={{ fontSize:'2.5rem', marginBottom:'.5rem' }}>{flag}</div>
        <h1>TDEE Calculator — {country}</h1>
        <p>{description}</p>
        {localNote && <p style={{ marginTop:'.5rem', fontSize:'.9rem', opacity:.8 }}>{localNote}</p>}
      </div>
    </div>
    <main className="container tool-layout-container" style={{ paddingTop:'2rem', paddingBottom:'4rem' }}>
      <div className="tool-main-content">
      <div style={{ textAlign:'center', marginBottom:'2rem' }}>
        <Link href="/tdee-calculator" className="btn-primary" style={{ display:'inline-flex', width:'auto', padding:'14px 36px', fontSize:'1.05rem' }}>
          Open TDEE Calculator →
        </Link>
      </div>
      <article>
        {children}
        <div style={{ background:'var(--bg)', border:'1px solid var(--border)', borderRadius:'var(--r-lg)', padding:'1.25rem', marginTop:'2rem' }}>
          <h3 style={{ marginTop:0 }}>🔗 More Free Calculators</h3>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
            {[
              ['/bmi-calculator','BMI Calculator'],
              ['/protein-calculator','Protein Calculator'],
              ['/calorie-deficit','Calorie Deficit'],
              ['/weight-loss-timeline','Weight Loss Timeline'],
              ['/water-intake-calculator','Water Intake'],
            ].map(([to,l]) => (
              <Link key={to} href={to} className="btn outline" style={{ width:'auto', padding:'7px 14px', fontSize:'.85rem' }}>{l}</Link>
            ))}
          </div>
        </div>
      </article>
      </div>
      <Sidebar />
    </main>
  </>
);

/* ── INDIA ── */
export const TDEEIndia = () => (
  <CountryPage
    country="India" flag="🇮🇳" lang="en-IN"
    canonical="https://tdee.tech/tdee-calculator-india"
    title="TDEE Calculator India — Free Daily Calorie Calculator | tdee.tech"
    description="Free TDEE calculator for India. Calculate your daily calorie needs in kcal using metric units (kg, cm). Perfect for Indian diet planning."
    localNote="Supports metric units (kg, cm) — the standard used across India."
  >
    <h2>TDEE Calculator for India</h2>
    <p>Whether you follow a vegetarian, vegan, or omnivorous Indian diet, knowing your <strong>Total Daily Energy Expenditure (TDEE)</strong> is the most important step in managing your nutrition. Our free TDEE calculator works in metric units (kg and cm) — the standard measurement system used across India.</p>
    <h2>Indian Diet & TDEE — What to Know</h2>
    <p>Traditional Indian diets are often carbohydrate-heavy (rice, roti, dal) with moderate protein intake. If you're aiming to improve body composition, use your TDEE to understand your maintenance calories, then use our <Link href="/protein-calculator">Protein Calculator</Link> to identify if you need to increase your protein from sources like paneer, dal, eggs, or chicken.</p>
    <h2>Popular Fitness Goals in India</h2>
    <ul>
      <li><strong>Weight loss:</strong> Eat 300–500 kcal below your TDEE. Focus on high-fibre, high-protein Indian foods.</li>
      <li><strong>Muscle gain:</strong> Eat 200–300 kcal above TDEE. Increase protein to 1.6–2g per kg of body weight.</li>
      <li><strong>Maintenance:</strong> Eat exactly your TDEE to maintain your current weight and composition.</li>
    </ul>
    <p>Calculate your TDEE now and take the first step towards a healthier lifestyle — no signup, no cost, instant results.</p>
  </CountryPage>
);

/* ── GERMANY ── */
export const TDEEGermany = () => (
  <CountryPage
    country="Germany" flag="🇩🇪" lang="en-DE"
    canonical="https://tdee.tech/tdee-calculator-germany"
    title="TDEE Rechner — Tageskalorienbedarf berechnen | tdee.tech"
    description="Free TDEE calculator for Germany. Calculate your daily calorie needs using the Mifflin-St Jeor formula. Supports metric units (kg, cm)."
    localNote="Metric units (kg, cm) — standard in Germany, Austria & Switzerland."
  >
    <h2>TDEE Calculator for Germany (Deutschland)</h2>
    <p>Our free <strong>TDEE calculator</strong> (Tageskalorienbedarf-Rechner) helps people in Germany calculate their exact daily calorie needs using the scientifically validated Mifflin-St Jeor formula. Enter your weight (kg) and height (cm) for an instant personalised result.</p>
    <h2>Nutrition & Fitness in Germany</h2>
    <p>Germany has a strong fitness culture, with gym membership rates among the highest in Europe. Whether your goal is <em>Abnehmen</em> (weight loss), <em>Muskelaufbau</em> (muscle building), or simply staying healthy, your TDEE is the foundation of every effective nutrition plan.</p>
    <h2>How to Use Your TDEE</h2>
    <ul>
      <li><strong>Maintain weight:</strong> Eat exactly your TDEE</li>
      <li><strong>Lose weight (Abnehmen):</strong> Eat TDEE minus 400–500 kcal per day</li>
      <li><strong>Build muscle (Muskelaufbau):</strong> Eat TDEE plus 200–300 kcal per day</li>
    </ul>
    <p>Combine with our <Link href="/protein-calculator">Protein Calculator</Link> and <Link href="/macro-calculator">Macro Calculator</Link> for a complete nutrition plan.</p>
  </CountryPage>
);

/* ── PHILIPPINES ── */
export const TDEEPhilippines = () => (
  <CountryPage
    country="Philippines" flag="🇵🇭" lang="en-PH"
    canonical="https://tdee.tech/tdee-calculator-philippines"
    title="TDEE Calculator Philippines — Free Calorie Calculator | tdee.tech"
    description="Free TDEE calculator for the Philippines. Calculate your daily calorie needs instantly. Supports metric units. Perfect for Filipino diet and fitness planning."
    localNote="Fully free — no signup, no app required. Works on any mobile browser."
  >
    <h2>TDEE Calculator for the Philippines</h2>
    <p>Calculate your <strong>Total Daily Energy Expenditure (TDEE)</strong> for free — trusted by fitness enthusiasts across the Philippines. Our calculator uses the globally validated Mifflin-St Jeor formula and supports metric units (kg, cm) used throughout Southeast Asia.</p>
    <h2>Filipino Diet & Calorie Planning</h2>
    <p>Filipino diets often include rice-based meals, which are high in carbohydrates. Understanding your TDEE helps you balance enjoyment of traditional Filipino food with your fitness goals. Whether you eat adobo, sinigang, or pinakbet — your calorie target remains the same.</p>
    <h2>Fitness Goals</h2>
    <ul>
      <li><strong>Pumayat (lose weight):</strong> Eat 300–500 kcal below your TDEE daily</li>
      <li><strong>Mag-muscle (build muscle):</strong> Eat 200–300 kcal above TDEE + increase protein</li>
      <li><strong>Manatili (maintain):</strong> Eat exactly your TDEE</li>
    </ul>
    <p>No registration required. Calculate your TDEE now using our free calculator above, and share your result with friends using the built-in share button.</p>
  </CountryPage>
);

/* ── NIGERIA ── */
export const TDEENigeria = () => (
  <CountryPage
    country="Nigeria" flag="🇳🇬" lang="en-NG"
    canonical="https://tdee.tech/tdee-calculator-nigeria"
    title="TDEE Calculator Nigeria — Free Daily Calorie Calculator | tdee.tech"
    description="Free TDEE calculator for Nigeria. Calculate your daily calorie needs for weight loss, muscle gain or maintenance. Instant results, no signup."
    localNote="Completely free. Works on any smartphone — no download or registration needed."
  >
    <h2>TDEE Calculator for Nigeria</h2>
    <p>Our <strong>free TDEE calculator</strong> is trusted by fitness enthusiasts across Nigeria. Whether you're in Lagos, Abuja, or Port Harcourt, knowing your Total Daily Energy Expenditure is the foundation of any successful diet — for weight loss, muscle building, or general health.</p>
    <h2>Nigerian Diet & Nutrition Awareness</h2>
    <p>Traditional Nigerian foods like jollof rice, egusi soup, fufu, and suya are delicious but calorie-dense. By knowing your TDEE, you can enjoy these foods while staying within your daily calorie target and making steady progress toward your goals.</p>
    <h2>How to Reach Your Goal</h2>
    <ul>
      <li><strong>Weight loss:</strong> Calculate your TDEE, then eat 400–500 kcal less per day</li>
      <li><strong>Muscle gain:</strong> Eat 200–300 kcal above your TDEE and hit your protein target</li>
      <li><strong>General wellness:</strong> Match your calorie intake to your TDEE</li>
    </ul>
    <p>Use the free calculator above, then check our <Link href="/weight-loss-timeline">Weight Loss Timeline</Link> to see exactly when you'll reach your goal weight.</p>
  </CountryPage>
);

/* ── RUSSIA ── */
export const TDEERussia = () => (
  <CountryPage
    country="Russia" flag="🇷🇺" lang="ru-RU"
    canonical="https://tdee.tech/tdee-calculator-russia"
    title="Калькулятор TDEE — Расчет нормы калорий | tdee.tech"
    description="Бесплатный калькулятор TDEE для России. Рассчитайте свою суточную норму калорий (BMR) для похудения или набора массы."
    localNote="Поддерживает метрическую систему (кг, см), используемую в России."
  >
    <h2>TDEE Calculator for Russia (Россия)</h2>
    <p>Our free <strong>TDEE calculator</strong> (Калькулятор калорий) helps people in Russia calculate their exact daily calorie needs using the scientifically validated Mifflin-St Jeor formula. Understand your <em>суточная норма калорий</em> for any fitness goal.</p>
    <h2>Fitness & Nutrition in Russia</h2>
    <p>Whether your goal is <em>похудение</em> (weight loss) or <em>набор мышечной массы</em> (muscle gain), calculating your TDEE is the crucial first step. We support standard metric units (kg and cm) natively.</p>
    <h2>How to Reach Your Goal</h2>
    <ul>
      <li><strong>Weight loss (Похудение):</strong> Eat 400–500 kcal below your TDEE daily.</li>
      <li><strong>Muscle gain (Набор массы):</strong> Eat 200–300 kcal above TDEE and hit your protein target.</li>
      <li><strong>Maintain (Поддержание):</strong> Eat exactly your TDEE.</li>
    </ul>
    <p>Calculate your daily energy expenditure instantly — no registration required.</p>
  </CountryPage>
);
