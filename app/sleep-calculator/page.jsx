import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: 'Sleep Calculator – Best Sleep & Wake Times Based on Sleep Cycles (2026)',
  description: 'Calculate the best time to wake up or go to sleep based on 90-minute sleep cycles. Avoid waking mid-cycle and feel refreshed every morning. Updated for 2026. Free to use, no signup required.',
  alternates: { canonical: 'https://tdee.tech/sleep-calculator' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: 'Sleep Calculator – Best Sleep & Wake Times Based on Sleep Cycles (2026)',
    description: 'Calculate the best time to wake up or go to sleep based on 90-minute sleep cycles. Updated for 2026. Free to use, no signup required.',
    url: 'https://tdee.tech/sleep-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
