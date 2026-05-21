import React, { Suspense } from 'react';
import { TDEEIndia as Component } from './ClientComponent';

export const metadata = {
  title: 'TDEE Calculator for India — Free Daily Calorie Tool | TDEE.TECH (2026)',
  description:
    'Free TDEE calculator for India. Calculate your daily calorie needs in metric units (kg, cm) — perfect for Indian diet planning. Based on the Mifflin-St Jeor equation. No signup. Updated for 2026. Free to use, no signup required.',
  alternates: {
    canonical: 'https://tdee.tech/tdee-calculator-india',
    languages: { 'en-IN': 'https://tdee.tech/tdee-calculator-india' },
  },
  openGraph: {
    title: 'TDEE Calculator for India — Free Daily Calorie Tool (2026)',
    description:
      'Free TDEE calculator for India. Calculate your daily calorie needs in metric units (kg, cm) — perfect for Indian diet planning. Updated for 2026. Free to use, no signup required.',
    url: 'https://tdee.tech/tdee-calculator-india/',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png/', width: 1200, height: 630, alt: 'TDEE Calculator for India – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Calculator for India — Free Daily Calorie Tool (2026)',
    description: 'Free TDEE calculator for India. Metric units (kg, cm). Mifflin-St Jeor formula. No signup required. Updated for 2026. Free to use, no signup required.',
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
