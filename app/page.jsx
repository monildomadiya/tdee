import React, { Suspense } from 'react';
import Component from './ClientComponent';
import RecentBlogs from '../src/components/RecentBlogs';

export const metadata = {
  title: 'Free Fitness & Calorie Calculators | TDEE.TECH',
  description: 'TDEE.TECH offers 38+ free science-backed fitness calculators. Calculate TDEE, BMR, BMI, macros, body fat, and more. No signup required.',
  alternates: { canonical: 'https://tdee.tech' },
  openGraph: {
    title: 'Free Fitness & Calorie Calculators | TDEE.TECH',
    description: 'TDEE.TECH offers 38+ free science-backed fitness calculators. Calculate TDEE, BMR, BMI, macros, body fat, and more. No signup required.',
    url: 'https://tdee.tech',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TDEE.TECH – Free Fitness Calculators' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Fitness & Calorie Calculators | TDEE.TECH',
    description: 'TDEE.TECH offers 38+ free science-backed fitness calculators. No signup required.',
    images: ['/og-image.png'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a TDEE Calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A TDEE (Total Daily Energy Expenditure) Calculator is a tool that estimates the total number of calories you burn in a day, taking into account your basal metabolic rate (BMR) and your activity level. It tells you your maintenance calories.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you calculate Total Daily Energy Expenditure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TDEE is calculated by first determining your Basal Metabolic Rate (BMR) using equations like the Mifflin-St Jeor formula, and then multiplying that number by an activity multiplier (ranging from 1.2 for sedentary to 1.9 for highly active).'
      }
    },
    {
      '@type': 'Question',
      name: 'Is the TDEE Calculator accurate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our TDEE Calculator uses the clinical Mifflin-St Jeor equation, which is considered the gold standard and the most accurate formula by the Academy of Nutrition and Dietetics.'
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Suspense fallback={null}>
        <Component />
      </Suspense>
      {/* Blog section rendered on server */}
      <Suspense fallback={null}>
        <RecentBlogs />
      </Suspense>
    </>
  );
}