import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: 'Creatine Calculator – Loading & Maintenance Dose for Your Body Weight (2026)',
  description: 'Calculate your optimal creatine monohydrate dose for the loading phase and maintenance phase based on your body weight. Science-backed dosing formula. Updated for 2026. Free to use, no signup required.',
  alternates: { canonical: 'https://tdee.tech/creatine-calculator' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: 'Creatine Calculator – Loading & Maintenance Dose for Your Body Weight (2026)',
    description: 'Calculate your optimal creatine monohydrate dose based on your body weight. Updated for 2026. Free to use, no signup required.',
    url: 'https://tdee.tech/creatine-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
