import React, { Suspense } from 'react';
import { TDEESouthAfrica as Component } from '../tdee-calculator-us/ClientComponent';

export const metadata = {
  title: "TDEE Calculator South Africa – Daily Calories & Macros | TDEE.TECH",
  description: "Free TDEE calculator for South Africa. Calculate your maintenance calories, BMR, BMI and macros in metric units. Trusted by South African fitness enthusiasts in Joburg, Cape Town and beyond.",
  keywords: ["TDEE calculator South Africa", "calorie calculator South Africa", "BMR calculator South Africa", "daily calories South Africa", "weight loss calculator South Africa", "macro calculator South Africa", "fitness calculator South Africa"],
  alternates: { canonical: "https://tdee.tech/tdee-calculator-south-africa" },
  openGraph: {
    title: "TDEE Calculator South Africa – Daily Calories & Macros",
    description: "Free TDEE calculator for South Africa. Calculate your daily calories, BMR, BMI and macro split.",
    url: "https://tdee.tech/tdee-calculator-south-africa",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
