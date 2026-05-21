import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Calorie Calculator – Daily Calorie Needs (2026)",
  description: "Calculate exactly how many calories you need per day to lose weight, maintain, or gain muscle. Free and instant. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/calorie-calculator' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Calorie Calculator – Daily Calorie Needs (2026)",
    description: "Calculate exactly how many calories you need per day to lose weight, maintain, or gain muscle. Free and instant. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/calorie-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
