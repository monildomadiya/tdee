import React, { Suspense } from 'react';
import { TDEENigeria as Component } from './ClientComponent';

export const metadata = {
  title: 'TDEE Calculator Nigeria — Free Daily Calorie Tool | TDEE.TECH (2026)',
  description:
    'Free TDEE calculator for Nigeria. Calculate your daily calorie needs for weight loss, muscle gain, or maintenance. Instant results, no signup. Works on any smartphone. Updated for 2026. Free to use, no signup required.',
  alternates: {
    canonical: 'https://tdee.tech/tdee-calculator-nigeria',
    languages: { 'en-NG': 'https://tdee.tech/tdee-calculator-nigeria' },
  },
  openGraph: {
    title: 'TDEE Calculator Nigeria — Free Daily Calorie Tool (2026)',
    description:
      'Free TDEE calculator for Nigeria. Calculate your daily calorie needs for weight loss, muscle gain, or maintenance. Updated for 2026. Free to use, no signup required.',
    url: 'https://tdee.tech/tdee-calculator-nigeria/',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png/', width: 1200, height: 630, alt: 'TDEE Calculator Nigeria – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Calculator Nigeria — Free Daily Calorie Tool (2026)',
    description: 'Free TDEE calculator for Nigeria. Weight loss, muscle gain, maintenance. No signup. Updated for 2026. Free to use, no signup required.',
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
