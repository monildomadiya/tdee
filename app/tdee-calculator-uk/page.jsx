import React, { Suspense } from 'react';
import { TDEEUk as Component } from '../tdee-calculator-us/ClientComponent';

export const metadata = {
  title: "TDEE Calculator UK – Daily Calories in Stone, kg or lbs | TDEE.TECH",
  description: "Free TDEE calculator for UK users. Calculate your maintenance calories in stone, kg, or lbs. Get BMR, BMI, and macros. NHS-aligned deficit recommendations. No signup required.",
  keywords: ["TDEE calculator UK", "TDEE calculator United Kingdom", "calorie calculator UK", "daily calorie calculator England", "BMR calculator UK", "maintenance calories UK", "weight loss calculator UK", "how many calories per day UK", "calories in stone pounds", "macro calculator Britain"],
  alternates: { canonical: "https://tdee.tech/tdee-calculator-uk" },
  openGraph: {
    title: "TDEE Calculator UK – Daily Calories in Stone, kg or lbs",
    description: "Free TDEE calculator for UK users. Calculate maintenance calories in stone, kg, or lbs with BMR and macros.",
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
