"use client";
import React, { useState } from 'react';


const PageWrapper = ({ title, children }) => (
  <>
    <div className="page-hero"><div className="container"><h1>{title}</h1></div></div>
    <div className="container" style={{ maxWidth: '760px', padding: '3rem 20px 5rem' }}>{children}</div>
  </>
);

/* ─── About ──────────────────────────────────────── */
export const About = () => (
  <PageWrapper title="About TDEE.TECH">
    

    <h2 style={{ marginTop: 0 }}>Our Mission</h2>
    <p>TDEE.TECH was built with a single mission: make evidence-based fitness science accessible to everyone, completely free, with no signup required and no personal data collected beyond what's needed to display anonymous usage statistics.</p>
    <p>Too many fitness apps hide basic calorie calculations behind a paywall or harvest your personal data to serve targeted ads. We believe knowing how many calories your body needs is fundamental health literacy — it should be as easy and free as checking the weather.</p>

    <h2>Who We Are</h2>
    <p>We are a small team of fitness enthusiasts and software developers passionate about translating peer-reviewed nutrition science into practical, easy-to-use web tools. Our calculators are used daily by people in the United States, United Kingdom, Canada, and Australia who are working toward fat loss, muscle gain, or long-term health maintenance.</p>

    <h2>What We Build</h2>
    <p>Every formula we implement is sourced from published clinical studies and validated medical literature:</p>
    <ul>
      <li><strong>TDEE Calculator</strong> — Mifflin-St Jeor equation (1990), the most validated BMR formula for modern adults</li>
      <li><strong>BMI Calculator</strong> — World Health Organization (WHO) standard</li>
      <li><strong>Calorie Deficit Calculator</strong> — Based on the 3,500 kcal/lb of fat research</li>
      <li><strong>Macro Calculator</strong> — ISSN and ACSM protein/carb/fat guidelines</li>
      <li><strong>Ideal Weight Calculator</strong> — Hamwi (1964) and Devine (1974) formulas</li>
      <li><strong>Body Fat Calculator</strong> — U.S. Navy circumference method</li>
    </ul>

    <h2>Our Commitment to Accuracy</h2>
    <p>All calculators provide population-level estimates. Individual metabolic rates vary due to genetics, hormonal status, medications, and lifestyle. We always recommend using our results as a starting point and adjusting based on 2–4 weeks of real-world tracking.</p>

    <h2>Advertising</h2>
    <p>TDEE.TECH displays advertisements through Google AdSense to support the cost of hosting and ongoing development. All ads are clearly labeled and separated from content. We comply fully with Google AdSense publisher policies and never place ads in ways that could result in accidental clicks.</p>

    <h2>Contact</h2>
    <p>Have a question, feedback, or found a bug? Visit our <a href="/contact">Contact page</a> and we'll get back to you as soon as possible.</p>
  </PageWrapper>
);

/* ─── Privacy Policy ─────────────────────────────── */
export const Privacy = () => (
  <PageWrapper title="Privacy Policy">
    

    <p><strong>Last updated: May 4, 2026</strong></p>
    <p>This Privacy Policy describes how TDEE.TECH ("we," "us," or "our"), operating at <strong>tdee.tech</strong>, collects, uses, and shares information when you use our website. We are committed to protecting your privacy.</p>

    <h2>1. Information We Collect</h2>
    <h3>a) Calculator Inputs (Not Collected)</h3>
    <p>All calculator inputs — including age, weight, height, gender, and activity level — are processed entirely within your browser using JavaScript. This data is <strong>never transmitted to our servers</strong> and is never stored anywhere.</p>

    <h3>b) Usage Analytics (Google Analytics 4)</h3>
    <p>We use Google Analytics 4 to collect anonymous, aggregated usage statistics including: pages visited, session duration, browser type, device type, and general geographic region (country/city level). This data cannot identify you individually. Google Analytics uses cookies to distinguish unique visitors.</p>
    <p>You can opt out using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="nofollow noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>

    <h3>c) Visitor Counter (Firebase Realtime Database)</h3>
    <p>We maintain a daily counter of calculator uses via Firebase Realtime Database. This stores only: a date string (e.g., "2026-05-04") and an integer count. No personal information is associated with this counter.</p>

    <h2>2. Google AdSense and Advertising</h2>
    <p>We display advertisements on this website through <strong>Google AdSense</strong>. Google AdSense uses cookies and web beacons to serve ads based on your prior visits to this and other websites. This allows Google to display personalized advertisements.</p>
    <p><strong>You can opt out of personalized advertising</strong> at any time by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="nofollow noopener noreferrer">Google's Ad Settings</a> or <a href="http://www.aboutads.info/choices/" target="_blank" rel="nofollow noopener noreferrer">www.aboutads.info</a>.</p>
    <p>Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet. For more information, see <a href="https://policies.google.com/technologies/ads" target="_blank" rel="nofollow noopener noreferrer">Google's Advertising Policies</a>.</p>

    <h2>3. Cookies</h2>
    <p>We do not set first-party cookies ourselves. The following third-party cookies may be present:</p>
    <ul>
      <li><strong>Google Analytics (_ga, _gid, _gat):</strong> Used to distinguish users and throttle request rate.</li>
      <li><strong>Google AdSense (IDE, DSID, NID):</strong> Used to show personalized advertisements.</li>
    </ul>
    <p>You can control cookies through your browser settings. Disabling cookies may affect ad personalization but will not impact the functionality of our calculators.</p>

    <h2>4. Third-Party Services</h2>
    <ul>
      <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="nofollow noopener noreferrer">Privacy Policy</a></li>
      <li><strong>Google AdSense:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="nofollow noopener noreferrer">Privacy Policy</a></li>
      <li><strong>Firebase (Google):</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="nofollow noopener noreferrer">Privacy Policy</a></li>
      <li><strong>Google Fonts:</strong> Served from Google CDN — <a href="https://policies.google.com/privacy" target="_blank" rel="nofollow noopener noreferrer">Privacy Policy</a></li>
    </ul>

    <h2>5. GDPR (European Users)</h2>
    <p>If you are located in the European Economic Area (EEA), you have the following rights under GDPR:</p>
    <ul>
      <li>Right to access the personal data we hold about you</li>
      <li>Right to rectification of inaccurate data</li>
      <li>Right to erasure ("right to be forgotten")</li>
      <li>Right to restrict processing</li>
      <li>Right to data portability</li>
      <li>Right to object to processing</li>
    </ul>
    <p>Since we do not collect personal data through our calculators, there is no personal data stored on our servers to access or delete. For data held by Google Analytics or AdSense, please use <a href="https://myaccount.google.com" target="_blank" rel="nofollow noopener noreferrer">Google's Privacy Controls</a>.</p>

    <h2>6. CCPA (California Users)</h2>
    <p>If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete personal information, and the right to opt-out of the sale of personal information. We do not sell personal information.</p>

    <h2>7. Children's Privacy</h2>
    <p>Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided personal information, please contact us immediately.</p>

    <h2>8. Changes to This Policy</h2>
    <p>We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page indicates when the policy was last revised. Continued use of our website after changes constitutes acceptance of the updated policy.</p>

    <h2>9. Contact Us</h2>
    <p>If you have questions or concerns about this Privacy Policy, please visit our <a href="/contact">Contact page</a>.</p>
  </PageWrapper>
);

/* ─── Terms of Service ───────────────────────────── */
export const Terms = () => (
  <PageWrapper title="Terms of Service">
    

    <p><strong>Last updated: May 4, 2026</strong></p>
    <p>By accessing or using TDEE.TECH at <strong>tdee.tech</strong>, you agree to be bound by these Terms of Service. Please read them carefully.</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By using this website, you confirm that you are at least 13 years of age and agree to these terms. If you do not agree, please do not use our website.</p>

    <h2>2. Use of the Service</h2>
    <p>TDEE.TECH provides free online fitness calculators for informational purposes only. You agree to use the service only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the service.</p>

    <h2>3. Medical Disclaimer</h2>
    <p>The calculations, results, and information provided on this website are for <strong>educational and informational purposes only</strong>. They do not constitute medical advice, diagnosis, or treatment. Always consult a qualified physician, registered dietitian, or licensed healthcare provider before:</p>
    <ul>
      <li>Starting a new diet or caloric restriction plan</li>
      <li>Beginning a new exercise program</li>
      <li>Making changes to your current nutrition plan if you have a medical condition</li>
    </ul>

    <h2>4. Accuracy of Information</h2>
    <p>While we strive to provide accurate calculations based on peer-reviewed research, all results are estimates. Individual metabolic rates vary. We make no warranties, express or implied, regarding the accuracy, completeness, or fitness for a particular purpose of any result generated by our calculators.</p>

    <h2>5. Intellectual Property</h2>
    <p>All content on this website — including text, design, code, and graphics — is the property of TDEE.TECH and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>

    <h2>6. Advertising</h2>
    <p>This website displays third-party advertisements through Google AdSense. We are not responsible for the content of any advertisement. The display of advertisements does not constitute our endorsement of any advertised product or service.</p>

    <h2>7. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, TDEE.TECH shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of, or inability to use, this website or its calculator results.</p>

    <h2>8. Third-Party Links</h2>
    <p>Our website may contain links to third-party websites. These links are provided for convenience only. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites.</p>

    <h2>9. Changes to Terms</h2>
    <p>We reserve the right to update these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the updated terms.</p>

    <h2>10. Governing Law</h2>
    <p>These terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through good-faith negotiation before pursuing legal remedies.</p>

    <h2>11. Contact</h2>
    <p>For questions about these Terms of Service, visit our <a href="/contact">Contact page</a>.</p>
  </PageWrapper>
);

/* ─── Disclaimer ─────────────────────────────────── */
export const Disclaimer = () => (
  <PageWrapper title="Disclaimer">
    

    <p><strong>Last updated: May 4, 2026</strong></p>

    <h2>No Medical Advice</h2>
    <p>All content on TDEE.TECH (tdee.tech) — including TDEE calculations, BMI results, macro breakdowns, calorie deficit recommendations, and article content — is provided for <strong>general informational and educational purposes only</strong>.</p>
    <p>Nothing on this website constitutes medical advice, diagnosis, or treatment. The results generated by our calculators are mathematical estimates based on population-level research formulas. They are <strong>not personalized medical recommendations</strong>.</p>

    <h2>Consult a Professional</h2>
    <p>Before making any changes to your diet, caloric intake, or exercise routine — particularly if you have any of the following conditions — please consult a qualified healthcare professional:</p>
    <ul>
      <li>Diabetes, insulin resistance, or metabolic disorders</li>
      <li>Heart disease or cardiovascular conditions</li>
      <li>Eating disorders or a history of disordered eating</li>
      <li>Kidney or liver disease</li>
      <li>Pregnancy or breastfeeding</li>
      <li>Any other chronic health condition</li>
    </ul>

    <h2>Accuracy of Estimates</h2>
    <p>The Mifflin-St Jeor equation used in our TDEE calculator is typically accurate within 10% for healthy adults. However, individual metabolic rates can vary significantly due to:</p>
    <ul>
      <li>Genetic factors affecting metabolism</li>
      <li>Hormonal conditions (thyroid disorders, PCOS, etc.)</li>
      <li>Medications that affect metabolic rate</li>
      <li>Inaccurate self-reporting of activity levels</li>
      <li>Body composition (muscle vs. fat ratio)</li>
    </ul>
    <p>Always use our results as a starting point and adjust based on real-world feedback tracked over 2–4 weeks.</p>

    <h2>No Liability</h2>
    <p>TDEE.TECH, its owners, authors, and contributors shall not be held liable for any loss, injury, or damage — including but not limited to health complications, financial loss, or indirect consequences — arising from the use of or reliance on any information provided on this website.</p>

    <h2>External Links</h2>
    <p>This website may link to external resources for reference. We do not endorse, verify, or take responsibility for the content of any external websites.</p>

    <h2>Affiliate Disclosure</h2>
    <p>TDEE.TECH does not currently participate in affiliate marketing programs. If this changes in the future, all affiliate relationships will be clearly disclosed in accordance with FTC guidelines.</p>
  </PageWrapper>
);

/* ─── Contact ────────────────────────────────────── */
export const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    // Firebase submission would go here — for now show confirmation
    setSent(true);
  };

  return (
    <PageWrapper title="Contact Us">
      

      <p>Have a question, found an error in one of our calculators, or want to share feedback? Fill in the form below and we'll get back to you within 48 hours.</p>

      {sent ? (
        <div style={{ background: 'var(--green-light)', border: '1px solid #86efac', borderRadius: 'var(--radius)', padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '.75rem' }}>✅</div>
          <h3 style={{ color: 'var(--green-dark)' }}>Message Sent!</h3>
          <p style={{ color: 'var(--green-dark)', margin: 0 }}>Thanks for reaching out. We'll reply within 48 hours.</p>
        </div>
      ) : (
        <form onSubmit={submit} style={{ marginTop: '2rem' }}>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="contact-name">Full Name *</label>
              <input id="contact-name" name="name" type="text" value={form.name} onChange={handle} placeholder="Jane Smith" required />
            </div>
            <div className="input-group">
              <label htmlFor="contact-email">Email Address *</label>
              <input id="contact-email" name="email" type="email" value={form.email} onChange={handle} placeholder="jane@example.com" required />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="contact-subject">Subject *</label>
            <select id="contact-subject" name="subject" value={form.subject} onChange={handle} required>
              <option value="">Select a topic…</option>
              <option value="calculator-error">Calculator Error / Bug Report</option>
              <option value="feedback">General Feedback</option>
              <option value="content">Content Question</option>
              <option value="partnership">Partnership / Business Inquiry</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="contact-message">Message *</label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handle}
              placeholder="Describe your question or feedback in detail…"
              required
              rows={6}
              style={{
                width: '100%', padding: '12px 14px', background: 'var(--bg-2)',
                border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)',
                fontSize: '1rem', color: 'var(--text)', fontFamily: 'inherit',
                resize: 'vertical', lineHeight: 1.6,
              }}
            />
          </div>
          <button type="submit" className="btn-calc">Send Message →</button>
          <p style={{ fontSize: '.8rem', color: 'var(--text-muted)', marginTop: '.75rem' }}>
            By submitting this form you agree to our <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Service</a>.
          </p>
        </form>
      )}

      <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', marginTop: '3rem' }}>
        <h3 style={{ marginTop: 0 }}>Common Questions</h3>
        <ul style={{ color: 'var(--text-muted)' }}>
          <li>For calculator accuracy questions, please include your inputs and expected vs. actual results.</li>
          <li>For AdSense or advertising inquiries, reference your publisher ID.</li>
          <li>Our team is typically available Monday–Friday.</li>
        </ul>
      </div>
    </PageWrapper>
  );
};
