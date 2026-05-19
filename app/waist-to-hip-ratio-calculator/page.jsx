import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: 'Waist-to-Hip Ratio Calculator – WHR Health Risk Assessment',
  description: 'Calculate your Waist-to-Hip Ratio (WHR) to assess cardiovascular and metabolic health risk. Used by WHO and medical professionals worldwide.',
  alternates: { canonical: 'https://tdee.tech/waist-to-hip-ratio-calculator' },
  openGraph: {
    title: 'Waist-to-Hip Ratio Calculator – WHR Health Risk Assessment',
    description: 'Calculate your Waist-to-Hip Ratio (WHR) to assess cardiovascular and metabolic health risk.',
    url: 'https://tdee.tech/waist-to-hip-ratio-calculator',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
