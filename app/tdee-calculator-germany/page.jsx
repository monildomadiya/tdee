import React, { Suspense } from 'react';
import { TDEEGermany as Component } from './ClientComponent';

export const metadata = {
  title: 'TDEE Rechner — Tageskalorienbedarf berechnen kostenlos | TDEE.TECH',
  description:
    'Kostenloser TDEE Rechner für Deutschland. Berechne deinen Tageskalorienbedarf, BMR, BMI und Makros in metrischen Einheiten (kg, cm). Wissenschaftlich basiert auf der Mifflin-St Jeor Formel.',
  alternates: { canonical: 'https://tdee.tech/tdee-calculator-germany' },
  openGraph: {
    title: 'TDEE Rechner — Tageskalorienbedarf berechnen kostenlos',
    description:
      'Kostenloser TDEE Rechner für Deutschland. Berechne deinen Tageskalorienbedarf, BMR, BMI und Makros.',
    url: 'https://tdee.tech/tdee-calculator-germany',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630, alt: 'TDEE Calculator Germany – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Rechner — Tageskalorienbedarf berechnen | TDEE.TECH',
    description: 'Kostenloser TDEE Rechner für Deutschland. Metric Einheiten. Mifflin-St Jeor Formel.',
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
