import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Body Type Calculator – Ectomorph, Mesomorph, Endomorph (2026)",
  description: "Discover your somatotype (body type) and get personalized nutrition and training advice. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/body-type-calculator' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Body Type Calculator – Ectomorph, Mesomorph, Endomorph (2026)",
    description: "Discover your somatotype (body type) and get personalized nutrition and training advice. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/body-type-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
