import React, { Suspense } from 'react';
import { tdeeCalculatorUs as Component } from './ClientComponent';

export const metadata = {
  title: "TDEE Calculator USA – US Customary Units (lbs, ft)",
  description: "Calculate your TDEE in imperial units (pounds and feet) for users in the United States.",
  alternates: { canonical: "https://tdee.tech/tdee-calculator-us" },
  openGraph: {
    title: "TDEE Calculator USA – US Customary Units (lbs, ft)",
    description: "Calculate your TDEE in imperial units (pounds and feet) for users in the United States.",
    url: "https://tdee.tech/tdee-calculator-us",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
