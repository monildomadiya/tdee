import React, { Suspense } from 'react';
import Component from './ClientComponent';
import RecentBlogs from '../src/components/RecentBlogs';

export const metadata = {
  title: 'TDEE Calculator: Total Daily Energy Expenditure (Free & Accurate)',
  description: 'Use our free TDEE Calculator to find your Total Daily Energy Expenditure, maintenance calories, BMR, and macro split. Based on the accurate Mifflin-St Jeor equation.',
  keywords: ['TDEE calculator', 'Total Daily Energy Expenditure', 'maintenance calories calculator', 'how many calories do I burn', 'BMR calculator', 'daily calorie burn calculator'],
  alternates: { canonical: 'https://tdee.tech' },
  openGraph: {
    title: 'TDEE Calculator: Total Daily Energy Expenditure',
    description: 'Calculate your exact maintenance calories, BMR, and macro targets instantly. 100% free with no signup.',
    url: 'https://tdee.tech',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TDEE Calculator' }],
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