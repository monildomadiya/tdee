import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Target Heart Rate Calculator – Exercise Heart Rate Zones",
  description: "Calculate your target heart rate zones for fat burning, cardio, and peak performance.",
  alternates: { canonical: 'https://tdee.tech/target-heart-rate-calculator/' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Target Heart Rate Calculator – Exercise Heart Rate Zones",
    description: "Calculate your target heart rate zones for fat burning, cardio, and peak performance.",
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
