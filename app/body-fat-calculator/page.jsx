import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Body Fat Calculator – Estimate Your Body Fat Percentage (2026)",
  description: "Estimate your body fat percentage using the US Navy circumference method. Accurate, free, and instant. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/body-fat-calculator' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Body Fat Calculator – Estimate Your Body Fat Percentage (2026)",
    description: "Estimate your body fat percentage using the US Navy circumference method. Accurate, free, and instant. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/body-fat-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
