import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: 'TDEE Calculator – Free, Accurate & Instant | TDEE.TECH',
  description: 'Calculate your TDEE, BMR, BMI, and macros for free. Trusted by 10,000+ daily users. Science-backed Mifflin-St Jeor formula. No signup required.',
  alternates: { canonical: 'https://tdee.tech' },
  openGraph: {
    title: 'TDEE Calculator – Free & Accurate | TDEE.TECH',
    description: 'Calculate your TDEE, BMR, BMI and macros instantly. 30+ free science-backed fitness calculators.',
    url: 'https://tdee.tech',
    type: 'website',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}