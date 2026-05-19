import React, { Suspense } from 'react';
import { TDEENewZealand as Component } from '../tdee-calculator-us/ClientComponent';

export const metadata = {
  title: 'TDEE Calculator New Zealand — Free Daily Calorie Tool for Kiwis | TDEE.TECH',
  description:
    'Free TDEE calculator for New Zealand. Calculate your maintenance calories, BMR, BMI, and macros in metric units. Trusted by Kiwis across Auckland, Wellington, and Christchurch. No signup.',
  alternates: { canonical: 'https://tdee.tech/tdee-calculator-new-zealand' },
  openGraph: {
    title: 'TDEE Calculator New Zealand — Free Daily Calorie Tool for Kiwis',
    description:
      'Free TDEE calculator for New Zealand. Calculate daily calories, BMR, BMI, and macros for Kiwis in metric units.',
    url: 'https://tdee.tech/tdee-calculator-new-zealand',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630, alt: 'TDEE Calculator New Zealand – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Calculator New Zealand — Free Calorie Tool for Kiwis',
    description: 'Free TDEE calculator for New Zealand. Metric units. No signup required.',
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
