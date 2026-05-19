import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Macro Calculator – Free Macronutrient Calculator",
  description: "Calculate your daily protein, carbohydrate, and fat targets for your calorie goal. Supports balanced, high-protein, keto, and custom splits.",
  alternates: { canonical: 'https://tdee.tech/macro-calculator/' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Macro Calculator – Free Macronutrient Calculator",
    description: "Calculate your daily protein, carbohydrate, and fat targets for your calorie goal. Supports balanced, high-protein, keto, and custom splits.",
    url: 'https://tdee.tech/macro-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
