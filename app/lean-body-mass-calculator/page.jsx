import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Lean Body Mass Calculator – Calculate Your LBM (2026)",
  description: "Calculate your Lean Body Mass (LBM) — the weight of everything in your body except fat. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/lean-body-mass-calculator' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Lean Body Mass Calculator – Calculate Your LBM (2026)",
    description: "Calculate your Lean Body Mass (LBM) — the weight of everything in your body except fat. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/lean-body-mass-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
