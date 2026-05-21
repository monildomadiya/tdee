import React, { Suspense } from 'react';
import Component from './ClientComponent';
import RecentBlogs from '../src/components/RecentBlogs';
import JsonLd from '../src/components/JsonLd';

export const metadata = {
  title: 'TDEE Calculator – Find Your Total Daily Energy Expenditure (2026)',
  description: 'Use our free TDEE Calculator to find your Total Daily Energy Expenditure. Get accurate calories for weight loss or muscle gain, plus 38+ fitness calculators. Updated for 2026. Free to use, no signup required.',
  alternates: { canonical: 'https://tdee.tech' },
  openGraph: {
    title: 'TDEE Calculator – Find Your Total Daily Energy Expenditure (2026)',
    description: 'Use our free TDEE Calculator to find your Total Daily Energy Expenditure. Get accurate calories for weight loss or muscle gain, plus 38+ fitness calculators. Updated for 2026. Free to use, no signup required.',
    url: 'https://tdee.tech',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TDEE Calculator – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Calculator – Find Your Total Daily Energy Expenditure (2026)',
    description: 'Use our free TDEE Calculator to find your Total Daily Energy Expenditure. Get accurate calories for weight loss or muscle gain, plus 38+ fitness calculators. Updated for 2026. Free to use, no signup required.',
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "TDEE Calculator by TDEE.TECH",
  "url": "https://tdee.tech",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web",
  "description": "Free TDEE Calculator to determine your Total Daily Energy Expenditure, BMR, BMI, and macros for weight loss, maintenance, or bulking.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is TDEE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TDEE stands for Total Daily Energy Expenditure. It is the total number of calories your body burns per day, including your Basal Metabolic Rate (BMR), physical activity, and the thermic effect of food."
      }
    },
    {
      "@type": "Question",
      "name": "How is TDEE calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TDEE is calculated by first determining your Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation, then multiplying it by an activity factor ranging from 1.2 (sedentary) to 1.9 (athlete)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Mifflin-St Jeor equation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Mifflin-St Jeor equation calculates BMR as: (10 × weight in kg) + (6.25 × height in cm) − (5 × age) + 5 for males, or − 161 for females. It is considered the most accurate predictive equation for estimating BMR."
      }
    },
    {
      "@type": "Question",
      "name": "How many calories should I eat to lose weight?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To lose approximately 0.5 kg (1 lb) per week, eat about 500 calories below your TDEE. For a milder deficit of 0.25 kg (0.5 lb) per week, reduce by 250 calories. Never go below 1,200 calories per day without medical supervision."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is a TDEE calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TDEE calculators provide estimates typically within 10% of actual expenditure. Accuracy depends on honest assessment of activity level. For best results, use the calculated TDEE as a starting point and adjust based on real-world results over 2-4 weeks."
      }
    }
  ]
};

export default function Page() {
  return (
    <section>
      <JsonLd schema={webAppSchema} />
      <JsonLd schema={faqSchema} />
      <Suspense fallback={null}>
        <Component />
      </Suspense>
      {/* Blog section rendered on server */}
      <Suspense fallback={null}>
        <RecentBlogs />
      </Suspense>
    </section>
  );
}