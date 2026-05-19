"use client";
import React from 'react';

import Link from 'next/link';
import Sidebar from '../../src/components/Sidebar';

/* Reusable country page template */
const CountryPage = ({ country, code, unit, titleFocus, desc, intro, tips, slug, cities, faqs }) => {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `TDEE Calculator ${country}`,
    "operatingSystem": "Web",
    "applicationCategory": "HealthAndFitnessApplication",
    "description": desc,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs ? faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    })) : []
  };

  return (
    <>
      
      <div className="page-hero">
        <div className="container">
          <div className="badge badge-blue" style={{ marginBottom:'.75rem' }}>🌍 {country}</div>
          <h1>TDEE Calculator {country}</h1>
          <p>{desc}</p>
          {intro && <p style={{ marginTop: '1.5rem', fontSize: '1.05rem', lineHeight: '1.7', textAlign: 'left', background: 'var(--card)', border: '1px solid var(--border)', padding: '1.5rem', borderRadius: 'var(--r-lg)' }}>{intro}</p>}
        </div>
      </div>
      <main className="container tool-layout-container" style={{ paddingTop:'2rem', paddingBottom:'4rem' }}>
        <div className="tool-main-content">
          <div style={{ background:'var(--card)', border:'1px solid var(--border)', borderRadius:'var(--r-lg)', padding:'3rem 2rem', marginBottom:'3rem', textAlign:'center', boxShadow:'var(--shadow-sm)' }}>
          <p style={{ marginBottom:'1.5rem', fontSize:'1.2rem', fontWeight:500, color:'var(--text)' }}>Use our full, premium calculator — seamlessly supports {unit}.</p>
          <Link href="/tdee-calculator" className="btn" style={{ width:'auto', padding:'16px 40px', display:'inline-flex', fontSize:'1.15rem' }}>
            🔥 Open TDEE Calculator
          </Link>
        </div>

        <article className="article-section">
          <h2>TDEE Calculator for {country} Users</h2>
          <p>Our TDEE (Total Daily Energy Expenditure) calculator is fully optimized for people residing in {country}. It natively supports {unit} and uses the medically validated <strong>Mifflin-St Jeor formula</strong> to provide an extremely accurate estimation of your daily caloric needs for weight loss, maintenance, or muscle gain.</p>
          
          {cities && (
            <p>Whether you are training in <strong>{cities.join(', ')}</strong> or anywhere else in {country}, understanding your specific metabolic rate is the most critical step in achieving your fitness goals.</p>
          )}

          <h2>{country}-Specific Fitness & Nutrition Tips</h2>
          <ul style={{ marginBottom: '2rem' }}>
            {tips.map((t,i) => <li key={i} style={{ marginBottom: '.5rem' }}>{t}</li>)}
          </ul>

          <h2>How to Use This Tool</h2>
          <ol style={{ marginBottom: '2rem' }}>
            <li>Click the button above to launch the full calculator interface.</li>
            <li>Select your preferred unit system (<strong>{unit.includes('lb') ? 'Imperial' : 'Metric'}</strong>).</li>
            <li>Enter your age, biological gender, exact height, current weight, and weekly activity level.</li>
            <li>Instantly receive your precise TDEE, BMR, BMI, and a scientifically balanced macronutrient split.</li>
          </ol>

          {faqs && faqs.length > 0 && (
            <>
              <h2>Frequently Asked Questions ({country})</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {faqs.map((faq, i) => (
                  <div key={i} style={{ background: 'var(--bg)', padding: '1.25rem', borderRadius: 'var(--r-sm)', border: '1px solid var(--border)' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '.5rem', color: 'var(--blue)' }}>{faq.q}</h3>
                    <p style={{ margin: 0, fontSize: '.95rem' }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          <h2>Explore Related Health Tools</h2>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'10px', marginTop:'1rem' }}>
            {[['/bmi-calculator','BMI Calculator'],['/macro-calculator','Macro Calculator'],['/calorie-deficit','Calorie Deficit'],['/ideal-weight','Ideal Weight']].map(([to,l])=>(
              <Link key={to} href={to} className="btn outline" style={{ width:'auto', padding:'9px 18px', fontSize:'.88rem' }}>{l}</Link>
            ))}
          </div>
        </article>
        </div>
        <Sidebar />
      </main>
    </>
  );
};

/* ── Country Pages ── */
export const TDEEUs = () => <CountryPage
  country="US" code="us" unit="lbs and inches"
  titleFocus="Calculate Maintenance Calories in Pounds & Inches"
  desc="Free TDEE calculator for US users. Calculate your maintenance calories, BMR, and macros using pounds and inches. Powered by the Mifflin-St Jeor formula."
  cities={['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami']}
  faqs={[
    { q: "Does this calculator use American units?", a: "Yes, our tool natively supports pounds (lbs) and feet/inches (ft/in), which is the standard across the United States." },
    { q: "Is the Mifflin-St Jeor formula accurate for Americans?", a: "Absolutely. The Mifflin-St Jeor equation is recommended by the American Dietetic Association as the most reliable formula for estimating resting metabolic rate in adults." }
  ]}
  tips={[
    'US dietary guidelines recommend 1,600–2,400 cal/day for women and 2,000–3,000 for men, but these are broad averages — your TDEE is specific to you.',
    'The average American consumes ~3,600 calories/day, well above most TDEEs. Knowing your number prevents unintentional overeating.',
    'Popular US diets (keto, intermittent fasting) still work within your TDEE — they just shift how you reach your calorie target.',
    'Use lbs for weight and ft/in for height — our calculator supports Imperial units natively.',
  ]}
/>;

export const TDEEUk = () => <CountryPage
  country="UK" code="uk" unit="metric and imperial (kg, stone, lbs)"
  titleFocus="Calculate Daily Calories, BMR & Macros"
  desc="Free TDEE calculator for UK users. Works in metric and imperial units including stone. Get your maintenance calories, weight loss target, and macro split."
  cities={['London', 'Manchester', 'Birmingham', 'Glasgow', 'Edinburgh']}
  faqs={[
    { q: "Can I enter my weight in stones?", a: "While the primary interface defaults to kg or lbs, you can easily convert stones to pounds (1 stone = 14 lbs) to use the imperial setting." },
    { q: "Does the NHS recommend tracking TDEE?", a: "The NHS generally recommends eating a balanced diet and understanding your caloric baseline. Knowing your TDEE helps you achieve the safe 500-600 calorie deficit they recommend for weight loss." }
  ]}
  tips={[
    'UK adults consume an average of 2,000–2,500 kcal/day. Your personal TDEE may be significantly different based on activity.',
    'NHS guidelines recommend a 500–600 cal/day deficit for weight loss — which aligns with our "Weight Loss" result.',
    'Our calculator supports kg/cm for metric UK users and lbs for those who prefer imperial.',
    'UK gym culture is growing rapidly — use the "Active" or "Very Active" setting if you train 4+ days a week.',
  ]}
/>;

export const TDEECanada = () => <CountryPage
  country="Canada" code="canada" unit="metric (kg/cm) and imperial (lbs/ft)"
  titleFocus="Daily Calorie & Macro Calculator"
  desc="Free TDEE calculator for Canadians. Calculate your daily calories in kg or lbs. Get BMR, BMI, maintenance calories, and macros for your fitness goal."
  cities={['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa']}
  faqs={[
    { q: "Should I use Metric or Imperial?", a: "Canada is officially metric, so nutrition labels use grams and milliliters. However, many Canadians still weigh themselves in pounds. Our tool supports both seamlessly." },
    { q: "How do winter activities affect my TDEE?", a: "Cold-weather sports like hockey, snowboarding, and skiing burn significant calories. If you are active during Canadian winters, ensure you select an 'Active' multiplier." }
  ]}
  tips={[
    'Canada officially uses the metric system — select kg/cm for consistent results aligned with Canadian nutrition labels.',
    'Health Canada recommends active Canadians aim for 150+ minutes of moderate activity weekly — factor this into your activity level.',
    'Canadian nutrition labels show calories per 100g; knowing your TDEE helps you understand these in context.',
    'Popular Canadian winter activities (hockey, skiing) are high-energy — choose "Active" or "Very Active" if you participate regularly.',
  ]}

  intro="Navigating nutritional goals in Canada is vastly simplified when you understand your Total Daily Energy Expenditure (TDEE). Health Canada provides excellent generalized dietary guidelines, emphasizing whole foods and active living, but individual caloric needs vary drastically based on your unique body metrics and activity level. Our Canada-optimized TDEE calculator is designed to seamlessly support both the official metric system (kilograms and centimeters) used on Canadian nutrition labels, as well as the imperial system (pounds) commonly used for personal body weight. Whether you are extremely active during the winter months participating in hockey and skiing, or maintaining a moderate exercise routine, this tool uses the clinical-grade Mifflin-St Jeor equation to pinpoint your exact caloric baseline. This level of precision is fundamental for structuring a safe, effective calorie deficit for fat loss or a surplus for muscle gain." />;

export const TDEEAustralia = () => <CountryPage
  country="Australia" code="australia" unit="metric (kg/cm)"
  titleFocus="Maintenance Calories & Macros"
  desc="Free TDEE calculator for Australians. Get your maintenance calories, BMR, BMI, and macro split in metric units. Perfect for Australians tracking fitness goals."
  cities={['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide']}
  faqs={[
    { q: "Is the tool optimized for Australian dietary standards?", a: "Yes. By utilizing your TDEE in metric measurements (kg/cm), it flawlessly aligns with the Australian Dietary Guidelines and local nutritional labels." },
    { q: "How does heat impact my daily calories?", a: "While training in hot Australian climates increases heart rate and sweat loss, it only slightly elevates caloric burn. Still, stay highly hydrated and track your macros consistently." }
  ]}
  tips={[
    'Australia uses the metric system — use kg and cm for the most accurate results with Australian nutrition labels.',
    'The Australian Dietary Guidelines recommend 2,080 kcal/day for women and 2,750 for men on average — your personal TDEE may differ.',
    'Australians have high outdoor activity rates. If you surf, hike, or play sport regularly, choose "Active" or above.',
    'Heat affects energy expenditure — Australians in hot climates may need to hydrate more carefully when tracking calories.',
  ]}

  intro="In Australia, a nation characterized by an incredibly active, outdoor-centric lifestyle, accurately calculating your Total Daily Energy Expenditure (TDEE) is crucial for optimal health and athletic performance. The Australian Dietary Guidelines suggest average daily intakes, but the significant variations in daily activity—from regular surfing and hiking to intense gym sessions—demand a personalized approach to nutrition. Our Australia-specific TDEE calculator uses the globally validated Mifflin-St Jeor formula and natively supports the metric system (kilograms and centimeters), ensuring perfect alignment with local food packaging and nutritional labels. By determining your precise maintenance calories, you can confidently navigate Australia's robust food culture while making informed decisions about portion sizes and macronutrient distribution. This targeted approach is the cornerstone of sustainable weight loss, muscle development, and long-term metabolic health." />;

export const TDEEUA = () => <CountryPage
  country="UAE" code="uae" unit="metric (kg/cm)"
  titleFocus="Daily Calories, BMR & Macro Calculator"
  desc="Free TDEE calculator for UAE users and expats. Calculate daily calories, BMR, and macros in metric units. Ideal for fitness goals in the UAE."
  tips={[
    'The UAE has a high expat population — our calculator works for all ethnicities and body types using globally validated formulas.',
    'Hot UAE summers reduce outdoor activity — choose your activity level based on actual movement, not just gym sessions.',
    'Ramadan affects eating patterns significantly. During Ramadan, use your TDEE as a total daily calorie target and distribute meals to suhoor and iftar.',
    'UAE gyms and fitness culture are thriving. If you train 4–5 days/week, use the "Active" activity level.',
  ]}

  intro="In the United Arab Emirates, where extreme summer temperatures often shift physical activity indoors and cultural practices like Ramadan significantly alter eating patterns, understanding your Total Daily Energy Expenditure (TDEE) is vital. The UAE boasts a incredibly diverse expat population and a thriving fitness culture, meaning generalized dietary advice often falls short of individual needs. Our UAE-focused TDEE calculator uses the globally validated Mifflin-St Jeor equation and operates seamlessly in metric units (kilograms and centimeters). By identifying your precise maintenance calories, you can accurately plan your meals—whether you are structuring suhoor and iftar during fasting months, or balancing the rich, calorie-dense foods common in Middle Eastern and international cuisines. This scientific approach ensures your nutrition aligns perfectly with your specific lifestyle, body composition, and long-term health objectives." />;
