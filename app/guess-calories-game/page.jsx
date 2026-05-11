import React, { Suspense } from 'react';
import ClientGame from './ClientGame';
import Sidebar from '../../src/components/Sidebar';
import Link from 'next/link';

import Script from 'next/script';

export const metadata = {
  title: "Guess the Calories Game & Quiz – Test Your Nutrition Knowledge",
  description: "Play the ultimate Guess the Calories Game! Test your food calorie knowledge, learn about nutrition, and improve your diet with this interactive food calorie quiz.",
  keywords: "guess the calories game, food calorie quiz, calorie guessing game, nutrition trivia, guess food calories, diet game, US food calories, UK food calories",
  alternates: { canonical: "https://tdee.tech/guess-calories-game" },
  openGraph: {
    title: "Guess the Calories Game & Quiz – Test Your Nutrition Knowledge",
    description: "Play the ultimate Guess the Calories Game! Test your food calorie knowledge and improve your diet with this interactive food calorie quiz.",
    url: "https://tdee.tech/guess-calories-game",
    type: "website",
  },
};

const gameSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Guess the Calories Game",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Any",
  "description": "An interactive educational game and quiz designed to test and improve users' knowledge of food calories, energy density, and nutrition.",
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
      "name": "What is the Guess the Calories Game?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Guess the Calories Game is an interactive quiz where players estimate the calorie content of popular foods. It helps build nutritional awareness and better portion control."
      }
    },
    {
      "@type": "Question",
      "name": "Why is estimating calories important for weight loss?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Estimating calories accurately is crucial because underestimating portion sizes and hidden calories is the number one reason people fail to lose weight even when they think they are in a calorie deficit."
      }
    },
    {
      "@type": "Question",
      "name": "How can I get better at guessing food calories?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Practice with games like our calorie quiz, read nutritional labels consistently, and use a food scale for a few weeks to calibrate your visual estimation of portion sizes."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script id="game-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="page-hero">
        <div className="container">
          <h1>Guess the Calories Game</h1>
          <p>Challenge yourself and test your nutrition knowledge in this interactive calorie guessing game.</p>
        </div>
      </div>

      <main className="container tool-layout-container" style={{ paddingTop:'2rem', paddingBottom:'4rem' }}>
        <div className="tool-main-content">
          <div className="main-content">
            
            {/* GAME CONTAINER */}
            <div className="calculator-card">
              <div className="mac-header">
                <div className="mac-title">GUESS THE CALORIES</div>
              </div>
              <div className="calculator-card-body" style={{ padding: 0 }}>
                <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Loading game...</div>}>
                  <ClientGame />
                </Suspense>
              </div>
            </div>

            {/* AUTOMATED SEO CONTENT BLOCK */}
            <article className="seo-article-content" style={{ marginTop: '4rem', padding: '2rem', background: 'var(--card)', borderRadius: 'var(--r)', border: '1px solid var(--border)' }}>
              <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.2rem', color: 'var(--text)', marginBottom: '1rem' }}>Mastering Calorie Estimation</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
                  The "Guess the Calories" game is more than just a fun interactive challenge; it's a powerful educational tool designed to sharpen your nutritional awareness. By practicing calorie estimation, you develop a stronger intuitive understanding of portion sizes, energy density, and dietary balance.
                </p>
              </header>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '1.5rem', justifyContent: 'center' }}>
                {["guess calories game","calorie estimation","nutrition quiz","calorie awareness","healthy eating habits"].map((kw, i) => (
                  <span key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '6px 14px', borderRadius: '0', fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 600 }}>#{kw}</span>
                ))}
              </div>

              <div className="seo-content-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                <section>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--blue)', marginBottom: '1rem', borderBottom: '2px solid var(--green)', paddingBottom: '0.5rem', display: 'inline-block' }}>Why Calorie Awareness Matters</h3>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>One of the biggest hurdles to weight loss or muscle gain is underestimating liquid calories, hidden fats, and portion sizes. While tracking macros meticulously is effective, building an intuitive understanding of the energy density of different foods allows you to make smarter choices when dining out or eating on the go. This game trains your brain to recognize high-calorie vs. low-calorie options visually.</p>
                </section>
                
                <section>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--blue)', marginBottom: '1rem', borderBottom: '2px solid var(--green)', paddingBottom: '0.5rem', display: 'inline-block' }}>The Science of Energy Density</h3>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.6 }}>Not all foods of the same physical size contain the same amount of calories. Foods high in water and fiber (like vegetables and fruits) are low in energy density, meaning you can eat a large volume for few calories. Conversely, foods high in dietary fat or refined sugars (like nuts, oils, or pastries) are high in energy density. Recognizing these differences is key to long-term dietary success.</p>
                </section>
                
                <section>
                  <h2 style={{ fontSize: '1.8rem', color: 'var(--text)', margin: '1.5rem 0 1rem' }}>Frequently Asked Questions</h2>
                  
                  <div className="faq-item" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', marginBottom: '10px', padding: '1rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.5rem', marginTop: 0 }}>What is the Guess the Calories Game?</h3>
                    <p style={{ color: 'var(--text-2)', fontSize: '0.95rem', margin: 0 }}>The Guess the Calories Game is an interactive quiz where players estimate the calorie content of popular foods. It helps build nutritional awareness and better portion control.</p>
                  </div>
                  
                  <div className="faq-item" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', marginBottom: '10px', padding: '1rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.5rem', marginTop: 0 }}>Why is estimating calories important for weight loss?</h3>
                    <p style={{ color: 'var(--text-2)', fontSize: '0.95rem', margin: 0 }}>Estimating calories accurately is crucial because underestimating portion sizes and hidden calories is the number one reason people fail to lose weight even when they think they are in a calorie deficit.</p>
                  </div>

                  <div className="faq-item" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r)', marginBottom: '10px', padding: '1rem' }}>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.5rem', marginTop: 0 }}>How can I get better at guessing food calories?</h3>
                    <p style={{ color: 'var(--text-2)', fontSize: '0.95rem', margin: 0 }}>Practice with games like our calorie quiz, read nutritional labels consistently, and use a food scale for a few weeks to calibrate your visual estimation of portion sizes.</p>
                  </div>
                </section>
                
                <div style={{ background: 'var(--blue-light)', padding: '2rem', borderRadius: 'var(--r)', marginTop: '2rem', border: '1px solid var(--border)' }}>
                  <h3 style={{ marginTop: 0, color: 'var(--text)' }}>Take Your Nutrition Further</h3>
                  <p style={{ marginBottom: '1.5rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
                    Now that you've tested your intuition, it's time to apply real data to your body. Calculate exactly how many calories you need to maintain, lose, or gain weight using our professional tools.
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
