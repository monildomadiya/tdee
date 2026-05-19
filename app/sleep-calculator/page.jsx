import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: 'Sleep Calculator – Best Sleep & Wake Times Based on Sleep Cycles',
  description: 'Calculate the best time to wake up or go to sleep based on 90-minute sleep cycles. Avoid waking mid-cycle and feel refreshed every morning.',
  alternates: { canonical: 'https://tdee.tech/sleep-calculator' },
  openGraph: {
    title: 'Sleep Calculator – Best Sleep & Wake Times Based on Sleep Cycles',
    description: 'Calculate the best time to wake up or go to sleep based on 90-minute sleep cycles.',
    url: 'https://tdee.tech/sleep-calculator',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
