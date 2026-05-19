import React, { Suspense } from 'react';
import ClientComponent from './ClientComponent';
import Sidebar from '../../src/components/Sidebar';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: "Intermittent Fasting Calculator – 16:8, 18:6 & OMAD Tracker",
  description: "Calculate your intermittent fasting windows, track your fasting and eating times, and follow protocols like 16:8, 18:6, and OMAD. Free fasting tracker.",
  
  alternates: { canonical: 'https://tdee.tech/intermittent-fasting-calculator/' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Intermittent Fasting Calculator – 16:8, 18:6 & OMAD Tracker",
    description: "Calculate your intermittent fasting windows, track your fasting and eating times, and follow protocols like 16:8, 18:6, and OMAD. Free fasting tracker.",
    url: 'https://tdee.tech/intermittent-fasting-calculator/',
    type: "website",
  },
};

const calcSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Intermittent Fasting Calculator",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "description": "Calculate exact fasting and eating windows for protocols like 16:8, 18:6, 20:4, and OMAD. Features a live countdown timer to track fasts.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the 16:8 intermittent fasting schedule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 16:8 schedule involves fasting for 16 hours and eating all your meals within an 8-hour window. For example, eating between 12:00 PM and 8:00 PM."
      }
    },
    {
      "@type": "Question",
      "name": "Can I drink water while fasting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, water, black coffee, and plain, unsweetened tea contain zero calories and will not break your fast."
      }
    },
    {
      "@type": "Question",
      "name": "Does intermittent fasting help you lose weight?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, by restricting your eating window, you naturally consume fewer calories. However, you still need to maintain an overall calorie deficit to lose weight."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script id="calc-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calcSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="page-hero">
        <div className="container">
          <h1>Intermittent Fasting Calculator</h1>
          <p>Choose your protocol and last meal time to calculate your fasting and eating windows.</p>
        </div>
      </div>

      <main className="container tool-layout-container" style={{ paddingTop:'2rem', paddingBottom:'4rem' }}>
        <div className="tool-main-content">
          <div className="main-content">
            
            {/* CALCULATOR CONTAINER */}
            <div className="calculator-card">
              <div className="mac-header">
                <div className="mac-dots">
                  <span className="mac-dot red"></span>
                  <span className="mac-dot yellow"></span>
                  <span className="mac-dot green"></span>
                </div>
                <div className="mac-title">FASTING TRACKER</div>
              </div>
              <div className="calculator-card-body" style={{ padding: '0', background: 'var(--bg)' }}>
                <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Loading calculator...</div>}>
                  <ClientComponent />
                </Suspense>
              </div>
            </div>

            {/* AUTOMATED SEO CONTENT BLOCK */}
            <article className="seo-article-content" style={{ marginTop: '4rem', padding: '2rem', background: 'var(--card)', borderRadius: 'var(--r)', border: '1px solid var(--border)' }}>
              <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.2rem', color: 'var(--text)', marginBottom: '1rem' }}>Mastering Intermittent Fasting</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
                  Our free Intermittent Fasting Calculator removes the guesswork from your fasting routine. Whether you are following the popular 16:8 method, advancing to 18:6, or attempting OMAD, tracking your precise eating and fasting windows is the key to consistency.
                </p>
              </header>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '1.5rem', justifyContent: 'center' }}>
                {["16:8 fast","fasting calculator","intermittent fasting schedule","fasting timer","OMAD diet"].map((kw, i) => (
                  <span key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '6px 14px', borderRadius: '0', fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 600 }}>#{kw}</span>
                ))}
              </div>

              <div className="seo-content-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                <section>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--blue)', marginBottom: '1rem', borderBottom: '2px solid var(--green)', paddingBottom: '0.5rem', display: 'inline-block' }}>How Intermittent Fasting Works</h3>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Intermittent fasting (IF) is an eating pattern that cycles between periods of fasting and eating. It doesn’t specify which foods you should eat but rather <em>when</em> you should eat them. During the fasting state, your body exhausts its sugar stores and begins burning fat for energy. This metabolic switch not only aids in weight loss but can also improve insulin sensitivity and cellular repair processes.</p>
                </section>
                
                <section>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--blue)', marginBottom: '1rem', borderBottom: '2px solid var(--green)', paddingBottom: '0.5rem', display: 'inline-block' }}>Choosing the Right Protocol</h3>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>The <strong>16:8 protocol</strong> is highly recommended for beginners because a significant portion of the fast occurs while sleeping. As your body adapts, you can extend the fasting window to <strong>18:6</strong> or even <strong>20:4</strong>. The <strong>OMAD</strong> (One Meal A Day) protocol is the most extreme form of intermittent fasting and should be approached with caution to ensure you meet your daily nutritional requirements.</p>
                </section>
                
                <section>
                  <h2 style={{ fontSize: '1.8rem', color: 'var(--text)', margin: '1.5rem 0 1rem' }}>Frequently Asked Questions</h2>
                  
                  <div className="faq-item" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', marginBottom: '10px', padding: '1rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.5rem', marginTop: 0 }}>What is the 16:8 intermittent fasting schedule?</h3>
                    <p style={{ color: 'var(--text-2)', fontSize: '0.95rem', margin: 0 }}>The 16:8 schedule involves fasting for 16 hours and eating all your meals within an 8-hour window. For example, eating between 12:00 PM and 8:00 PM.</p>
                  </div>
                  
                  <div className="faq-item" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', marginBottom: '10px', padding: '1rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.5rem', marginTop: 0 }}>Can I drink water while fasting?</h3>
                    <p style={{ color: 'var(--text-2)', fontSize: '0.95rem', margin: 0 }}>Yes, water, black coffee, and plain, unsweetened tea contain zero calories and will not break your fast. Staying hydrated is essential.</p>
                  </div>

                  <div className="faq-item" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', marginBottom: '10px', padding: '1rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.5rem', marginTop: 0 }}>Does intermittent fasting help you lose weight?</h3>
                    <p style={{ color: 'var(--text-2)', fontSize: '0.95rem', margin: 0 }}>Yes, by restricting your eating window, you naturally consume fewer calories. However, you still need to maintain an overall calorie deficit to lose weight.</p>
                  </div>
                </section>
                
                <div style={{ background: 'var(--blue-light)', padding: '2rem', borderRadius: 'var(--r)', marginTop: '2rem', border: '1px solid var(--border)' }}>
                  <h3 style={{ marginTop: 0, color: 'var(--text)' }}>Optimize Your Diet</h3>
                  <p style={{ marginBottom: '1.5rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
                    Fasting is only half the battle. What you eat during your eating window is just as important. Use our professional calculators to ensure you hit your targets.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '15px' }}>
                    <Link href="/tdee-calculator" className="btn outline" style={{ textAlign: 'center', padding: '12px 10px', fontSize: '0.9rem' }}>TDEE Calculator</Link>
                    <Link href="/calorie-calculator" className="btn outline" style={{ textAlign: 'center', padding: '12px 10px', fontSize: '0.9rem' }}>Calorie Needs</Link>
                    <Link href="/macro-calculator" className="btn outline" style={{ textAlign: 'center', padding: '12px 10px', fontSize: '0.9rem' }}>Macro Split</Link>
                    <Link href="/protein-calculator" className="btn outline" style={{ textAlign: 'center', padding: '12px 10px', fontSize: '0.9rem' }}>Protein Target</Link>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
        <Sidebar />
      </main>
    </>
  );
}
