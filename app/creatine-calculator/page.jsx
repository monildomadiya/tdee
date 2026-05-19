import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: 'Creatine Calculator – Loading & Maintenance Dose for Your Body Weight',
  description: 'Calculate your optimal creatine monohydrate dose for the loading phase and maintenance phase based on your body weight. Science-backed dosing formula.',
  alternates: { canonical: 'https://tdee.tech/creatine-calculator' },
  openGraph: {
    title: 'Creatine Calculator – Loading & Maintenance Dose for Your Body Weight',
    description: 'Calculate your optimal creatine monohydrate dose based on your body weight.',
    url: 'https://tdee.tech/creatine-calculator',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
