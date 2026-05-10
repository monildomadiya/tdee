import React, { Suspense } from 'react';
import { TDEENewZealand as Component } from '../tdee-calculator-us/ClientComponent';

export const metadata = {
  title: "TDEE Calculator New Zealand – Daily Calories for Kiwis | TDEE.TECH",
  description: "Free TDEE calculator for New Zealand. Calculate your maintenance calories, BMR, BMI, and macros in metric. Perfect for Kiwis in Auckland, Wellington, Christchurch and beyond.",
  keywords: ["TDEE calculator New Zealand", "calorie calculator NZ", "BMR calculator New Zealand", "daily calories New Zealand", "weight loss calculator NZ", "macro calculator New Zealand", "kiwi fitness calculator"],
  alternates: { canonical: "https://tdee.tech/tdee-calculator-new-zealand" },
  openGraph: {
    title: "TDEE Calculator New Zealand – Daily Calories for Kiwis",
    description: "Free TDEE calculator for New Zealand. Calculate daily calories, BMR, BMI and macros for Kiwis.",
    url: "https://tdee.tech/tdee-calculator-new-zealand",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
