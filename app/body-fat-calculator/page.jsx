import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Body Fat Calculator – Estimate Your Body Fat Percentage",
  description: "Estimate your body fat percentage using the US Navy circumference method. Accurate, free, and instant.",
  alternates: { canonical: 'https://tdee.tech/body-fat-calculator/' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Body Fat Calculator – Estimate Your Body Fat Percentage",
    description: "Estimate your body fat percentage using the US Navy circumference method. Accurate, free, and instant.",
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
