import React, { Suspense } from 'react';
import { TDEENigeria as Component } from './ClientComponent';

export const metadata = {
  title: 'TDEE Calculator Nigeria — Free Daily Calorie Tool | TDEE.TECH',
  description:
    'Free TDEE calculator for Nigeria. Calculate your daily calorie needs for weight loss, muscle gain, or maintenance. Instant results, no signup. Works on any smartphone.',
  alternates: {
    canonical: 'https://tdee.tech/tdee-calculator-nigeria',
    languages: { 'en-NG': 'https://tdee.tech/tdee-calculator-nigeria' },
  },
  openGraph: {
    title: 'TDEE Calculator Nigeria — Free Daily Calorie Tool',
    description:
      'Free TDEE calculator for Nigeria. Calculate your daily calorie needs for weight loss, muscle gain, or maintenance.',
    url: 'https://tdee.tech/tdee-calculator-nigeria',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630, alt: 'TDEE Calculator Nigeria – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Calculator Nigeria — Free Daily Calorie Tool',
    description: 'Free TDEE calculator for Nigeria. Weight loss, muscle gain, maintenance. No signup.',
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
