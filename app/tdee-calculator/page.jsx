import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: 'Free TDEE Calculator – Accurate & Instant | TDEE.TECH',
  description:
    'Calculate your Total Daily Energy Expenditure (TDEE) instantly. Uses the Mifflin-St Jeor equation. Get your BMR, BMI, maintenance calories, and macro targets. 100% free.',
  alternates: { canonical: 'https://tdee.tech/tdee-calculator/' },
  openGraph: {
    title: 'Free TDEE Calculator – Accurate & Instant | TDEE.TECH',
    description:
      'Calculate your Total Daily Energy Expenditure (TDEE) instantly. Uses the Mifflin-St Jeor equation. Get your BMR, BMI, maintenance calories, and macro targets. 100% free.',
    url: 'https://tdee.tech/tdee-calculator/',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png/', width: 1200, height: 630, alt: 'TDEE Calculator – Free & Accurate | TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Calculator — Free & Accurate Total Daily Energy Expenditure',
    description: 'Calculate your TDEE instantly with the Mifflin-St Jeor equation. Get BMR, BMI, and macro targets. 100% free.',
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
  },
};

/* ── JSON-LD: FAQPage ── */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is TDEE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TDEE (Total Daily Energy Expenditure) is the total number of calories your body burns in a day, including exercise and daily activity. It is calculated by multiplying your BMR by an activity factor.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate is this TDEE calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This calculator uses the Mifflin-St Jeor equation, widely considered the gold standard for estimating metabolic rate since 1990. Results are estimates — individual variation applies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between TDEE and BMR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BMR (Basal Metabolic Rate) is calories burned at complete rest. TDEE includes BMR plus calories burned through daily activity and exercise.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I use my TDEE to lose weight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To lose weight, eat 300–500 calories below your TDEE per day. This creates a sustainable calorie deficit for roughly 0.5–1 lb of fat loss per week.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I eat my TDEE to maintain weight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Eating calories equal to your TDEE will maintain your current weight. Eat above it to gain, below it to lose.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I recalculate my TDEE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recalculate every 4–6 weeks or whenever your weight changes by more than 5 lbs, your activity level changes, or you plateau in your goals.',
      },
    },
  ],
};

/* ── JSON-LD: HowTo ── */
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Calculate Your TDEE',
  description: 'A step-by-step guide to using the TDEE.TECH calculator to find your Total Daily Energy Expenditure.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Enter your basic stats',
      text: 'Enter your biological sex, age, height, and current weight.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Select your activity level',
      text: 'Select your activity level from sedentary to very active.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Enter body fat percentage (optional)',
      text: 'Optionally enter your body fat percentage to use the more precise Katch-McArdle formula.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Click Calculate',
      text: 'Click Calculate to see your TDEE, BMR, BMI, and macro targets instantly.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Use your result',
      text: 'Use your TDEE result to set your daily calorie goal based on your fitness objective (fat loss, maintenance, or muscle gain).',
    },
  ],
};

/* ── JSON-LD: SoftwareApplication ── */
const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'TDEE Calculator',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  url: 'https://tdee.tech/tdee-calculator/',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <Suspense fallback={null}>
        <Component />
      </Suspense>
    </>
  );
}