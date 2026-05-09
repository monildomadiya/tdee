import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: 'TDEE Calculator – Free & Accurate Total Daily Energy Expenditure',
  description: 'Calculate your Total Daily Energy Expenditure (TDEE) instantly. Uses Mifflin-St Jeor & Katch-McArdle formulas. Get your BMR, BMI, and macro targets too. 100% free.',
  keywords: ['TDEE calculator', 'total daily energy expenditure', 'maintenance calories', 'calorie calculator free', 'BMR calculator'],
  alternates: { canonical: 'https://tdee.tech/tdee-calculator' },
  openGraph: {
    title: 'TDEE Calculator – Free & Accurate | TDEE.TECH',
    description: 'Find your exact maintenance calories, BMR, BMI, and macro targets. The most accurate free TDEE calculator online.',
    url: 'https://tdee.tech/tdee-calculator',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}