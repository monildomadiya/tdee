import React, { Suspense } from 'react';
import { TDEEIndia as Component } from './ClientComponent';

export const metadata = {
  title: 'TDEE Calculator for India — Free Daily Calorie Tool | TDEE.TECH',
  description:
    'Free TDEE calculator for India. Calculate your daily calorie needs in metric units (kg, cm) — perfect for Indian diet planning. Based on the Mifflin-St Jeor equation. No signup.',
  alternates: { canonical: 'https://tdee.tech/tdee-calculator-india' },
  openGraph: {
    title: 'TDEE Calculator for India — Free Daily Calorie Tool',
    description:
      'Free TDEE calculator for India. Calculate your daily calorie needs in metric units (kg, cm) — perfect for Indian diet planning.',
    url: 'https://tdee.tech/tdee-calculator-india',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630, alt: 'TDEE Calculator for India – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Calculator for India — Free Daily Calorie Tool',
    description: 'Free TDEE calculator for India. Metric units (kg, cm). Mifflin-St Jeor formula. No signup required.',
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
