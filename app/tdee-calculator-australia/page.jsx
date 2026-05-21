import React, { Suspense } from 'react';
import { TDEEAustralia as Component } from '../tdee-calculator-us/ClientComponent';

export const metadata = {
  title: 'TDEE Calculator Australia — Daily Calories in kg | TDEE.TECH (2026)',
  description:
    'Free TDEE calculator for Australians. Calculate maintenance calories, BMR, BMI, and macros in metric units. Aligned with Australian Dietary Guidelines. No signup required. Updated for 2026. Free to use, no signup required.',
  alternates: {
    canonical: 'https://tdee.tech/tdee-calculator-australia',
    languages: { 'en-AU': 'https://tdee.tech/tdee-calculator-australia' },
  },
  openGraph: {
    title: 'TDEE Calculator Australia — Daily Calories in kg (2026)',
    description:
      'Free TDEE calculator for Australians. Get your maintenance calories, BMR, BMI, and macro split in metric units. Updated for 2026. Free to use, no signup required.',
    url: 'https://tdee.tech/tdee-calculator-australia/',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png/', width: 1200, height: 630, alt: 'TDEE Calculator Australia – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Calculator Australia — Daily Calories in kg (2026)',
    description: 'Free TDEE calculator for Australia. Metric units. Australian Dietary Guidelines. No signup. Updated for 2026. Free to use, no signup required.',
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
