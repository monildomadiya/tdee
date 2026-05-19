import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Water Intake Calculator – Daily Hydration Calculator",
  description: "Find your daily water intake target based on your weight, activity level, and climate. Stay optimally hydrated.",
  alternates: { canonical: 'https://tdee.tech/water-intake-calculator/' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Water Intake Calculator – Daily Hydration Calculator",
    description: "Find your daily water intake target based on your weight, activity level, and climate. Stay optimally hydrated.",
    url: 'https://tdee.tech/water-intake-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
