"use client";
import React from 'react';
import Link from 'next/link';
import { TOOL_CATEGORIES } from '../data/toolLinks';

const FooterLink = ({ href, children }) => (
  <li style={{ marginBottom: '10px' }}>
    <Link
      href={href}
      style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.15s' }}
      onMouseOver={e => e.currentTarget.style.color = '#0f172a'}
      onMouseOut={e => e.currentTarget.style.color = '#64748b'}
    >
      {children}
    </Link>
  </li>
);

const FooterSection = ({ title, children }) => (
  <div>
    <h3 style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', marginTop: 0, borderBottom: '2px solid #e2e8f0', paddingBottom: '8px' }}>
      {title}
    </h3>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {children}
    </ul>
  </div>
);

const Footer = () => (
  <footer style={{ background: '#f8fafc', borderTop: '2px solid #e2e8f0', marginTop: '3rem' }}>

    {/* TOP BRAND STRIP */}
    <div style={{ background: '#0f172a', padding: '40px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{ maxWidth: '500px' }}>
            <img src="/tdee-logo.svg" alt="TDEE Calculator" height="32" style={{ marginBottom: '16px', filter: 'brightness(0) invert(1)' }} />
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 20px 0' }}>
              TDEE.TECH provides science-backed fitness and nutrition calculators completely free. Science-backed formulas (Mifflin-St Jeor, Katch-McArdle) with no registration required.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['US', 'UK', 'CA', 'AU', 'DE', 'IN'].map(c => (
                <span key={c} style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', border: '1px solid #334155', color: '#94a3b8', background: 'transparent' }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/tdee-calculator" style={{ background: '#16a34a', color: '#fff', padding: '12px 24px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', display: 'inline-block' }}>
              TDEE Calculator
            </Link>
            <Link href="/bmi-calculator" style={{ background: 'transparent', color: '#94a3b8', padding: '12px 24px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', display: 'inline-block', border: '1px solid #334155' }}>
              BMI Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* MAIN LINKS GRID */}
    <div style={{ padding: '50px 0 40px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '36px 40px', marginBottom: '50px' }}>

          {/* Fitness & Body */}
          <FooterSection title="Fitness & Body">
            <FooterLink href="/tdee-calculator">TDEE Calculator</FooterLink>
            <FooterLink href="/bmr-calculator">BMR Calculator</FooterLink>
            <FooterLink href="/bmi-calculator">BMI Calculator</FooterLink>
            <FooterLink href="/body-fat-calculator">Body Fat Calculator</FooterLink>
            <FooterLink href="/lean-body-mass-calculator">Lean Body Mass</FooterLink>
            <FooterLink href="/ideal-weight">Ideal Weight Calculator</FooterLink>
            <FooterLink href="/healthy-weight-calculator">Healthy Weight</FooterLink>
            <FooterLink href="/army-body-fat-calculator">Army Body Fat</FooterLink>
            <FooterLink href="/body-type-calculator">Body Type Calculator</FooterLink>
            <FooterLink href="/body-surface-area-calculator">Body Surface Area</FooterLink>
          </FooterSection>

          {/* Nutrition & Calories */}
          <FooterSection title="Nutrition & Calories">
            <FooterLink href="/calorie-calculator">Calorie Calculator</FooterLink>
            <FooterLink href="/calorie-deficit">Calorie Deficit</FooterLink>
            <FooterLink href="/macro-calculator">Macro Calculator</FooterLink>
            <FooterLink href="/protein-calculator">Protein Calculator</FooterLink>
            <FooterLink href="/carbohydrate-calculator">Carbohydrate Calculator</FooterLink>
            <FooterLink href="/fat-intake-calculator">Fat Intake Calculator</FooterLink>
            <FooterLink href="/keto-macro-calculator">Keto Macro Calculator</FooterLink>
            <FooterLink href="/water-intake-calculator">Water Intake Calculator</FooterLink>
            <FooterLink href="/guess-calories-game">Guess the Calories Game <span style={{ color: 'var(--red)', fontSize: '0.65rem', fontWeight: 800, marginLeft: '4px' }}>NEW!</span></FooterLink>
          </FooterSection>

          <FooterSection title="Weight &amp; Fitness">
            <FooterLink href="/weight-loss-timeline">Weight Loss Timeline</FooterLink>
            <FooterLink href="/calories-burned-calculator">Calories Burned</FooterLink>
            <FooterLink href="/pace-calculator">Pace Calculator</FooterLink>
            <FooterLink href="/one-rep-max-calculator">One Rep Max (1RM)</FooterLink>
            <FooterLink href="/target-heart-rate-calculator">Target Heart Rate</FooterLink>
            <FooterLink href="/intermittent-fasting-calculator">Intermittent Fasting <span style={{ color: 'var(--red)', fontSize: '0.65rem', fontWeight: 800, marginLeft: '4px' }}>NEW!</span></FooterLink>
          </FooterSection>

          {/* General Health */}
          <FooterSection title="General Health">
            <FooterLink href="/gfr-calculator">GFR Calculator</FooterLink>
            <FooterLink href="/bac-calculator">BAC Calculator</FooterLink>
            <FooterLink href="/sleep-calculator">Sleep Calculator <span style={{ color: 'var(--red)', fontSize: '0.65rem', fontWeight: 800, marginLeft: '4px' }}>NEW!</span></FooterLink>
            <FooterLink href="/vo2-max-calculator">VO2 Max Calculator <span style={{ color: 'var(--red)', fontSize: '0.65rem', fontWeight: 800, marginLeft: '4px' }}>NEW!</span></FooterLink>
          </FooterSection>

          {/* Women's Health */}
          <FooterSection title="Women's Health">
            <FooterLink href="/pregnancy-calculator">Pregnancy Calculator</FooterLink>
            <FooterLink href="/due-date-calculator">Due Date Calculator</FooterLink>
            <FooterLink href="/ovulation-calculator">Ovulation Calculator</FooterLink>
            <FooterLink href="/conception-calculator">Conception Calculator</FooterLink>
            <FooterLink href="/period-calculator">Period Calculator</FooterLink>
            <FooterLink href="/pregnancy-weight-gain-calculator">Pregnancy Weight Gain</FooterLink>
            <FooterLink href="/pregnancy-conception-calculator">Pregnancy Conception</FooterLink>
          </FooterSection>

          {/* Country Calculators */}
          <FooterSection title="By Country">
            <FooterLink href="/tdee-calculator-us">TDEE Calculator USA</FooterLink>
            <FooterLink href="/tdee-calculator-uk">TDEE Calculator UK</FooterLink>
            <FooterLink href="/tdee-calculator-canada">TDEE Calculator Canada</FooterLink>
            <FooterLink href="/tdee-calculator-australia">TDEE Calculator Australia</FooterLink>
            <FooterLink href="/tdee-calculator-india">TDEE Calculator India</FooterLink>
            <FooterLink href="/tdee-calculator-germany">TDEE Calculator Germany</FooterLink>
            <FooterLink href="/tdee-calculator-uae">TDEE Calculator UAE</FooterLink>
            <FooterLink href="/tdee-calculator-france">TDEE Calculator France</FooterLink>
            <FooterLink href="/tdee-calculator-brazil">TDEE Calculator Brazil</FooterLink>
            <FooterLink href="/tdee-calculator-mexico">TDEE Calculator Mexico</FooterLink>
            <FooterLink href="/tdee-calculator-south-africa">TDEE Calculator South Africa</FooterLink>
            <FooterLink href="/tdee-calculator-new-zealand">TDEE Calculator NZ</FooterLink>
          </FooterSection>

          {/* Legal & Company */}
          <FooterSection title="Legal & Company">
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/contact">Contact Support</FooterLink>
            <FooterLink href="/blog">Blog / Articles</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/disclaimer">Medical Disclaimer</FooterLink>
          </FooterSection>

          {/* Partner Tools */}
          <FooterSection title="Partner Tools">
            <li style={{ marginBottom: '10px' }}>
              <a 
                href="https://bruttonettocalculator.com/" 
                target="_blank" 
                rel="noopener"
                style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.15s' }}
                onMouseOver={e => e.currentTarget.style.color = '#0f172a'}
                onMouseOut={e => e.currentTarget.style.color = '#64748b'}
              >
                Brutto Netto Calculator
              </a>
            </li>
          </FooterSection>

        </div>

        {/* MEDICAL DISCLAIMER */}
        <div style={{ background: '#fff3cd', border: '1px solid #fde68a', padding: '16px 20px', marginBottom: '30px' }}>
          <p style={{ fontSize: '0.82rem', color: '#92400e', lineHeight: 1.7, margin: 0 }}>
            <strong>Important Medical Disclaimer:</strong> All tools on TDEE.TECH are for <strong>educational and informational purposes only</strong> and are not a substitute for professional medical advice, diagnosis, or treatment. Results are estimates based on validated formulas (Mifflin-St Jeor, Katch-McArdle). Always consult a qualified healthcare provider before making significant changes to your diet, exercise, or nutrition plan.
          </p>
        </div>

        {/* BOTTOM ROW */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', borderTop: '1px solid #e2e8f0', paddingTop: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '10px', height: '10px', background: '#16a34a', display: 'inline-block' }}></span>
            <span style={{ fontWeight: 700, color: '#475569', fontSize: '0.85rem' }}>All Systems Operational</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
            <Link href="/privacy" style={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none' }}>Privacy</Link>
            <Link href="/terms" style={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none' }}>Terms</Link>
            <Link href="/disclaimer" style={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none' }}>Disclaimer</Link>
            <Link href="/sitemap.xml" style={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none' }}>Sitemap</Link>
          </div>
          <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>© {new Date().getFullYear()} TDEE.TECH — Free Fitness Calculator Platform</span>
        </div>

      </div>
    </div>
  </footer>
);

export default Footer;
