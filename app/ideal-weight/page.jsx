import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Ideal Weight Calculator – Find Your Target Body Weight",
  description: "Calculate your ideal body weight based on your height and gender using medically validated formulas.",
  alternates: { canonical: 'https://tdee.tech/ideal-weight/' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Ideal Weight Calculator – Find Your Target Body Weight",
    description: "Calculate your ideal body weight based on your height and gender using medically validated formulas.",
    url: 'https://tdee.tech/ideal-weight/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
