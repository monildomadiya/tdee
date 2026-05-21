import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Calories Burned Calculator – Exercise Calorie Burn (2026)",
  description: "Calculate how many calories you burn during exercise and daily activities. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/calories-burned-calculator' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Calories Burned Calculator – Exercise Calorie Burn (2026)",
    description: "Calculate how many calories you burn during exercise and daily activities. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/calories-burned-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
