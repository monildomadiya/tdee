import React, { Suspense } from 'react';
import { TDEECanada as Component } from '../tdee-calculator-us/ClientComponent';

export const metadata = {
  title: 'TDEE Calculator Canada — Daily Calories in kg or lbs | TDEE.TECH (2026)',
  description:
    'Free TDEE calculator for Canadians. Calculate maintenance calories in metric or imperial. Get BMR, BMI, and macros aligned with Health Canada guidelines. No signup required. Updated for 2026. Free to use, no signup required.',
  alternates: {
    canonical: 'https://tdee.tech/tdee-calculator-canada',
    languages: { 'en-CA': 'https://tdee.tech/tdee-calculator-canada' },
  },
  openGraph: {
    title: 'TDEE Calculator Canada — Daily Calories in kg or lbs (2026)',
    description:
      'Free TDEE calculator for Canadians. Calculate maintenance calories, BMR, BMI, and macros in metric or imperial. Updated for 2026. Free to use, no signup required.',
    url: 'https://tdee.tech/tdee-calculator-canada/',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png/', width: 1200, height: 630, alt: 'TDEE Calculator Canada – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Calculator Canada — Daily Calories in kg or lbs (2026)',
    description: 'Free TDEE calculator for Canada. Health Canada-aligned recommendations. No signup required. Updated for 2026. Free to use, no signup required.',
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
