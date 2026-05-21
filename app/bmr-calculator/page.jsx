import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "BMR Calculator – Basal Metabolic Rate Calculator (2026)",
  description: "Calculate your Basal Metabolic Rate (BMR) — the calories your body burns at complete rest. Uses Mifflin-St Jeor formula. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/bmr-calculator' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "BMR Calculator – Basal Metabolic Rate Calculator (2026)",
    description: "Calculate your Basal Metabolic Rate (BMR) — the calories your body burns at complete rest. Uses Mifflin-St Jeor formula. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/bmr-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
