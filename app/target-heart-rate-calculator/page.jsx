import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Target Heart Rate Calculator – Exercise Heart Rate Zones (2026)",
  description: "Calculate your target heart rate zones for fat burning, cardio, and peak performance. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/target-heart-rate-calculator' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Target Heart Rate Calculator – Exercise Heart Rate Zones (2026)",
    description: "Calculate your target heart rate zones for fat burning, cardio, and peak performance. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/target-heart-rate-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
