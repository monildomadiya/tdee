import React, { Suspense } from 'react';
import { TDEEUs as Component } from './ClientComponent';

export const metadata = {
  title: 'TDEE Calculator USA — Daily Calories in Pounds & Inches | TDEE.TECH (2026)',
  description:
    'Free TDEE calculator for US users. Calculate maintenance calories, BMR, BMI, and macros in pounds and inches. Science-backed Mifflin-St Jeor formula. No signup required. Updated for 2026. Free to use, no signup required.',
  alternates: {
    canonical: 'https://tdee.tech/tdee-calculator-us',
    languages: { 'en-US': 'https://tdee.tech/tdee-calculator-us' },
  },
  openGraph: {
    title: 'TDEE Calculator USA — Daily Calories in Pounds & Inches (2026)',
    description:
      'Free TDEE calculator for US users. Calculate your maintenance calories, BMR, BMI, and macros in lbs/inches. Updated for 2026. Free to use, no signup required.',
    url: 'https://tdee.tech/tdee-calculator-us/',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png/', width: 1200, height: 630, alt: 'TDEE Calculator USA – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Calculator USA — Daily Calories in Pounds & Inches (2026)',
    description: 'Free TDEE calculator for the United States. Pounds, inches, Mifflin-St Jeor. No signup required. Updated for 2026. Free to use, no signup required.',
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
