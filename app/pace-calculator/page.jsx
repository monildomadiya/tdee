import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Pace Calculator – Running Pace & Speed Calculator (2026)",
  description: "Calculate your running pace, speed, and finish time for any distance. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/pace-calculator' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Pace Calculator – Running Pace & Speed Calculator (2026)",
    description: "Calculate your running pace, speed, and finish time for any distance. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/pace-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
