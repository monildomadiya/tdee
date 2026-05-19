import React, { Suspense } from 'react';
import { TDEECanada as Component } from '../tdee-calculator-us/ClientComponent';

export const metadata = {
  title: 'TDEE Calculator Canada — Daily Calories in kg or lbs | TDEE.TECH',
  description:
    'Free TDEE calculator for Canadians. Calculate maintenance calories in metric or imperial. Get BMR, BMI, and macros aligned with Health Canada guidelines. No signup required.',
  alternates: { canonical: 'https://tdee.tech/tdee-calculator-canada' },
  openGraph: {
    title: 'TDEE Calculator Canada — Daily Calories in kg or lbs',
    description:
      'Free TDEE calculator for Canadians. Calculate maintenance calories, BMR, BMI, and macros in metric or imperial.',
    url: 'https://tdee.tech/tdee-calculator-canada',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630, alt: 'TDEE Calculator Canada – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Calculator Canada — Daily Calories in kg or lbs',
    description: 'Free TDEE calculator for Canada. Health Canada-aligned recommendations. No signup required.',
    images: ['https://tdee.tech/og-image.png'],
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
