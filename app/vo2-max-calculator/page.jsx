import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: 'VO2 Max Calculator – Estimate Aerobic Fitness & Cardio Capacity',
  description: 'Estimate your VO2 Max (maximal oxygen uptake) using validated field tests. Understand your aerobic fitness level and cardiovascular health with this free VO2 Max calculator.',
  alternates: { canonical: 'https://tdee.tech/vo2-max-calculator/' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: 'VO2 Max Calculator – Estimate Aerobic Fitness & Cardio Capacity',
    description: 'Estimate your VO2 Max and understand your aerobic fitness level compared to age and gender norms.',
    url: 'https://tdee.tech/vo2-max-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
