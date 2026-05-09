import React from 'react';
import Link from 'next/link';
import { TOOL_CATEGORIES } from '../data/toolLinks';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo" style={{ marginBottom: '1.25rem' }}>
            <img src="/tdee-logo.svg" alt="TDEE.TECH" height="40" />
          </div>
          <p style={{ color:'var(--text-2)', fontSize:'.95rem', lineHeight:1.7, maxWidth: '320px' }}>
            The world's most accurate fitness and nutrition calculator platform. Science-backed tools for high-performance health.
          </p>
          <div style={{ display:'flex', gap:'12px', marginTop:'1.5rem' }}>
            {['US','UK','CA','AU','EU'].map(c => (
              <span key={c} style={{ fontSize:'.7rem', fontWeight:800, padding:'4px 8px', background:'var(--blue-light)', borderRadius:'4px', color:'var(--muted)' }}>{c} COMPLIANT</span>
            ))}
          </div>
        </div>

        <div>
          <h3>Fitness & Body</h3>
          <ul>
            {TOOL_CATEGORIES.fitness.tools.slice(0, 6).map(t => (
              <li key={t.path}><Link href={t.path}>{t.name}</Link></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3>Nutrition</h3>
          <ul>
            {TOOL_CATEGORIES.nutrition.tools.slice(0, 6).map(t => (
              <li key={t.path}><Link href={t.path}>{t.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Company & Resources</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/blog">Fitness Blog</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/disclaimer">Medical Disclaimer</Link></li>
            <li><Link href="/contact">Contact Support</Link></li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop:'1px solid var(--border)', paddingTop:'2rem', marginBottom:'2rem' }}>
        <p style={{ fontSize:'.85rem', color:'var(--muted)', lineHeight:1.8 }}>
          <strong style={{ color:'var(--text-2)' }}>Medical Disclaimer:</strong> The information provided on TDEE.TECH is for educational purposes only and should not be interpreted as medical advice. Formulas like Mifflin-St Jeor are estimates and may vary based on individual metabolic health, genetics, and medical conditions. Always consult with a physician or registered dietitian before beginning any new diet or exercise program.
        </p>
      </div>

      <div className="footer-bottom">
        <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
          <span style={{ width:'8px', height:'8px', background:'#22c55e', borderRadius:'50%' }}></span>
          <span style={{ fontWeight:600, color:'var(--text-2)' }}>Systems Operational</span>
        </div>
        <span style={{ color:'var(--muted)' }}>© {new Date().getFullYear()} TDEE.TECH — Professional Health Calculators</span>
      </div>
    </div>
  </footer>
);

export default Footer;
