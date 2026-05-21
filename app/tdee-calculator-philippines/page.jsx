import React, { Suspense } from 'react';
import { TDEEPhilippines as Component } from './ClientComponent';

export const metadata = {
  title: 'TDEE Calculator Philippines — Free Calorie Tool for Filipinos | TDEE.TECH (2026)',
  description:
    'Free TDEE calculator for the Philippines. Calculate your daily calorie needs in metric units (kg, cm). Perfect for Filipino diet and fitness planning. No registration required. Updated for 2026. Free to use, no signup required.',
  alternates: {
    canonical: 'https://tdee.tech/tdee-calculator-philippines',
    languages: { 'en-PH': 'https://tdee.tech/tdee-calculator-philippines' },
  },
  openGraph: {
    title: 'TDEE Calculator Philippines — Free Calorie Tool for Filipinos (2026)',
    description:
      'Free TDEE calculator for the Philippines. Calculate your daily calorie needs in metric units. Perfect for Filipino diet and fitness planning. Updated for 2026. Free to use, no signup required.',
    url: 'https://tdee.tech/tdee-calculator-philippines/',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png/', width: 1200, height: 630, alt: 'TDEE Calculator Philippines – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Calculator Philippines — Free Calorie Tool for Filipinos (2026)',
    description: 'Free TDEE calculator for the Philippines. Metric units. No signup required. Updated for 2026. Free to use, no signup required.',
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
