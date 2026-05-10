import React, { Suspense } from 'react';
import { TDEECanada as Component } from '../tdee-calculator-us/ClientComponent';

export const metadata = {
  title: "TDEE Calculator Canada – Daily Calories in kg or lbs | TDEE.TECH",
  description: "Free TDEE calculator for Canadians. Calculate maintenance calories in metric or imperial. Get BMR, BMI, and macros aligned with Health Canada guidelines. No signup required.",
  keywords: ["TDEE calculator Canada", "calorie calculator Canada", "daily calories Canada", "BMR calculator Canada", "maintenance calories Canada", "macro calculator Canada", "weight loss calculator Canada", "how many calories per day Canada", "calories in kg Canada", "Health Canada calorie guidelines"],
  alternates: { canonical: "https://tdee.tech/tdee-calculator-canada" },
  openGraph: {
    title: "TDEE Calculator Canada – Daily Calories in kg or lbs",
    description: "Free TDEE calculator for Canadians. Calculate maintenance calories, BMR, BMI, and macros.",
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
