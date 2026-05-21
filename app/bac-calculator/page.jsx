import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "BAC Calculator – Blood Alcohol Content Calculator (2026)",
  description: "Estimate your Blood Alcohol Content (BAC) based on drinks consumed, body weight, and time. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/bac-calculator' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "BAC Calculator – Blood Alcohol Content Calculator (2026)",
    description: "Estimate your Blood Alcohol Content (BAC) based on drinks consumed, body weight, and time. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/bac-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
