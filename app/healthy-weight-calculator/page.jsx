import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Healthy Weight Calculator – Healthy Weight Range (2026)",
  description: "Calculate your healthy weight range based on your height, age, and gender. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/healthy-weight-calculator' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Healthy Weight Calculator – Healthy Weight Range (2026)",
    description: "Calculate your healthy weight range based on your height, age, and gender. Updated for 2026. Free to use, no signup required.",
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
