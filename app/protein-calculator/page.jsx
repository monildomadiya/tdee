import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Protein Calculator – Daily Protein Intake Calculator (2026)",
  description: "Calculate how much protein you need daily based on your weight, activity level, and fitness goals. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/protein-calculator' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Protein Calculator – Daily Protein Intake Calculator (2026)",
    description: "Calculate how much protein you need daily based on your weight, activity level, and fitness goals. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/protein-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
