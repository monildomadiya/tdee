import React, { Suspense } from 'react';
import { TDEEUk as Component } from '../tdee-calculator-us/ClientComponent';

export const metadata = {
  title: 'TDEE Calculator UK — Daily Calories in Stone, kg or lbs | TDEE.TECH',
  description:
    'Free TDEE calculator for UK users. Calculate your maintenance calories in stone, kg, or lbs. Get BMR, BMI, and macros aligned with NHS-informed deficit recommendations. No signup required.',
  alternates: { canonical: 'https://tdee.tech/tdee-calculator-uk' },
  openGraph: {
    title: 'TDEE Calculator UK — Daily Calories in Stone, kg or lbs',
    description:
      'Free TDEE calculator for UK users. Calculate maintenance calories in stone, kg, or lbs with BMR and macros.',
    url: 'https://tdee.tech/tdee-calculator-uk',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630, alt: 'TDEE Calculator UK – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Calculator UK — Daily Calories in Stone, kg or lbs',
    description: 'Free TDEE calculator for UK users. Stone, kg, or lbs. NHS-informed recommendations. No signup.',
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
