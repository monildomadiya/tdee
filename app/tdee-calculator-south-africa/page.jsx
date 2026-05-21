import React, { Suspense } from 'react';
import { TDEESouthAfrica as Component } from '../tdee-calculator-us/ClientComponent';

export const metadata = {
  title: 'TDEE Calculator South Africa — Free Daily Calories & Macros | TDEE.TECH (2026)',
  description:
    'Free TDEE calculator for South Africa. Calculate your maintenance calories, BMR, BMI, and macros in metric units. Trusted by South African fitness enthusiasts in Johannesburg, Cape Town, and Durban. No signup. Updated for 2026. Free to use, no signup required.',
  alternates: {
    canonical: 'https://tdee.tech/tdee-calculator-south-africa',
    languages: { 'en-ZA': 'https://tdee.tech/tdee-calculator-south-africa' },
  },
  openGraph: {
    title: 'TDEE Calculator South Africa — Free Daily Calories & Macros (2026)',
    description:
      'Free TDEE calculator for South Africa. Calculate your daily calories, BMR, BMI, and macro split in metric units. Updated for 2026. Free to use, no signup required.',
    url: 'https://tdee.tech/tdee-calculator-south-africa/',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png/', width: 1200, height: 630, alt: 'TDEE Calculator South Africa – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Calculator South Africa — Free Daily Calories & Macros (2026)',
    description: 'Free TDEE calculator for South Africa. Metric units. No signup required. Updated for 2026. Free to use, no signup required.',
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
