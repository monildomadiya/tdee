import React, { Suspense } from 'react';
import { tdeeCalculatorUk as Component } from './ClientComponent';

export const metadata = {
  title: "TDEE Calculator UK – Stones, Pounds & Feet",
  description: "Calculate your TDEE using UK units. Free and accurate for users in the United Kingdom.",
  alternates: { canonical: "https://tdee.tech/tdee-calculator-uk" },
  openGraph: {
    title: "TDEE Calculator UK – Stones, Pounds & Feet",
    description: "Calculate your TDEE using UK units. Free and accurate for users in the United Kingdom.",
    url: "https://tdee.tech/tdee-calculator-uk",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
