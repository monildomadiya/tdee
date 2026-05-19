import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Healthy Weight Calculator – Healthy Weight Range",
  description: "Calculate your healthy weight range based on your height, age, and gender.",
  alternates: { canonical: 'https://tdee.tech/healthy-weight-calculator/' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Healthy Weight Calculator – Healthy Weight Range",
    description: "Calculate your healthy weight range based on your height, age, and gender.",
    url: 'https://tdee.tech/healthy-weight-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
