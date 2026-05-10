import React, { Suspense } from 'react';
import { TDEEAustralia as Component } from '../tdee-calculator-us/ClientComponent';

export const metadata = {
  title: "TDEE Calculator Australia – Daily Calories in kg | TDEE.TECH",
  description: "Free TDEE calculator for Australians. Calculate maintenance calories, BMR, BMI, and macros in metric units. Aligned with Australian Dietary Guidelines. No signup required.",
  keywords: ["TDEE calculator Australia", "calorie calculator Australia", "daily calories Australia", "BMR calculator Australia", "maintenance calories Australia", "macro calculator Australia", "weight loss calculator Australia", "how many calories per day Australia", "kJ calorie calculator Australia", "fitness calculator Sydney Melbourne"],
  alternates: { canonical: "https://tdee.tech/tdee-calculator-australia" },
  openGraph: {
    title: "TDEE Calculator Australia – Daily Calories in kg",
    description: "Free TDEE calculator for Australians. Get your maintenance calories, BMR, BMI, and macro split.",
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
