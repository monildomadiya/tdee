import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Carbohydrate Calculator – Daily Carb Intake Calculator (2026)",
  description: "Calculate your ideal daily carbohydrate intake based on your calorie goals and diet style. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/carbohydrate-calculator' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Carbohydrate Calculator – Daily Carb Intake Calculator (2026)",
    description: "Calculate your ideal daily carbohydrate intake based on your calorie goals and diet style. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/carbohydrate-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
