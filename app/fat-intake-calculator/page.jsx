import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Fat Intake Calculator – Daily Fat Intake",
  description: "Calculate your recommended daily fat intake based on your total calorie goal.",
  alternates: { canonical: 'https://tdee.tech/fat-intake-calculator/' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Fat Intake Calculator – Daily Fat Intake",
    description: "Calculate your recommended daily fat intake based on your total calorie goal.",
    url: 'https://tdee.tech/fat-intake-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
