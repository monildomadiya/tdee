import React, { Suspense } from 'react';
import { TDEEUA as Component } from './ClientComponent';

export const metadata = {
  title: 'TDEE Calculator UAE — Free Daily Calorie Tool for the Emirates | TDEE.TECH (2026)',
  description:
    'Free TDEE calculator for the United Arab Emirates. Calculate your daily maintenance calories, BMR, BMI, and macros in metric units (kg, cm). Science-backed. No signup required. Updated for 2026. Free to use, no signup required.',
  alternates: {
    canonical: 'https://tdee.tech/tdee-calculator-uae',
    languages: { 'ar-AE': 'https://tdee.tech/tdee-calculator-uae' },
  },
  openGraph: {
    title: 'TDEE Calculator UAE — Free Daily Calorie Tool for the Emirates (2026)',
    description:
      'Free TDEE calculator for the UAE. Calculate your daily maintenance calories, BMR, BMI, and macros in metric units. Updated for 2026. Free to use, no signup required.',
    url: 'https://tdee.tech/tdee-calculator-uae/',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png/', width: 1200, height: 630, alt: 'TDEE Calculator UAE – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Calculator UAE — Free Daily Calorie Tool (2026)',
    description: 'Free TDEE calculator for the UAE. Metric units. No signup required. Updated for 2026. Free to use, no signup required.',
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
