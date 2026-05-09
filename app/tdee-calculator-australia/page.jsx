import React, { Suspense } from 'react';
import { tdeeCalculatorAustralia as Component } from './ClientComponent';

export const metadata = {
  title: "TDEE Calculator Australia – Metric Units",
  description: "Calculate your TDEE in metric units for users in Australia.",
  alternates: { canonical: "https://tdee.tech/tdee-calculator-australia" },
  openGraph: {
    title: "TDEE Calculator Australia – Metric Units",
    description: "Calculate your TDEE in metric units for users in Australia.",
    url: "https://tdee.tech/tdee-calculator-australia",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
