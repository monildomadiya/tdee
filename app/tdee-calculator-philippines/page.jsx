import React, { Suspense } from 'react';
import { TDEEPhilippines as Component } from './ClientComponent';

export const metadata = {
  title: 'TDEE Calculator Philippines — Free Calorie Tool for Filipinos | TDEE.TECH',
  description:
    'Free TDEE calculator for the Philippines. Calculate your daily calorie needs in metric units (kg, cm). Perfect for Filipino diet and fitness planning. No registration required.',
  alternates: {
    canonical: 'https://tdee.tech/tdee-calculator-philippines',
    languages: { 'en-PH': 'https://tdee.tech/tdee-calculator-philippines' },
  },
  openGraph: {
    title: 'TDEE Calculator Philippines — Free Calorie Tool for Filipinos',
    description:
      'Free TDEE calculator for the Philippines. Calculate your daily calorie needs in metric units. Perfect for Filipino diet and fitness planning.',
    url: 'https://tdee.tech/tdee-calculator-philippines',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630, alt: 'TDEE Calculator Philippines – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Calculator Philippines — Free Calorie Tool for Filipinos',
    description: 'Free TDEE calculator for the Philippines. Metric units. No signup required.',
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
