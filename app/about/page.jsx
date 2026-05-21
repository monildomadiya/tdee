import React, { Suspense } from 'react';
import { About as Component } from './ClientComponent';

export const metadata = {
  title: "About TDEE.TECH – Our Mission & Formulas (2026)",
  description: "Learn about TDEE.TECH, our commitment to science-backed fitness tools, and the formulas powering our calculators. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/about' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "About TDEE.TECH – Our Mission & Formulas (2026)",
    description: "Learn about TDEE.TECH, our commitment to science-backed fitness tools, and the formulas powering our calculators. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/about/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
