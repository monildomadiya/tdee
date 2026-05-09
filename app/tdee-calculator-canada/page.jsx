import React, { Suspense } from 'react';
import { tdeeCalculatorCanada as Component } from './ClientComponent';

export const metadata = {
  title: "TDEE Calculator Canada – Free Calorie Calculator",
  description: "Calculate your TDEE for Canada. Supports metric and imperial units.",
  alternates: { canonical: "https://tdee.tech/tdee-calculator-canada" },
  openGraph: {
    title: "TDEE Calculator Canada – Free Calorie Calculator",
    description: "Calculate your TDEE for Canada. Supports metric and imperial units.",
    url: "https://tdee.tech/tdee-calculator-canada",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
