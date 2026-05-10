import React, { Suspense } from 'react';
import { TDEEIndia as Component } from './ClientComponent';

export const metadata = {
  title: "TDEE Calculator India – Free Calorie Calculator",
  description: "Calculate your TDEE in metric units for users in India. Free and accurate.",
  alternates: { canonical: "https://tdee.tech/tdee-calculator-india" },
  openGraph: {
    title: "TDEE Calculator India – Free Calorie Calculator",
    description: "Calculate your TDEE in metric units for users in India. Free and accurate.",
    url: "https://tdee.tech/tdee-calculator-india",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
