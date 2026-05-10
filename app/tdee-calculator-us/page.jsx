import React, { Suspense } from 'react';
import { TDEEUs as Component } from './ClientComponent';

export const metadata = {
  title: "TDEE Calculator USA – Calories in Pounds & Inches | TDEE.TECH",
  description: "Free TDEE calculator for US users. Calculate maintenance calories, BMR, BMI, and macros in pounds and inches. Science-backed Mifflin-St Jeor formula. No signup required.",
  keywords: ["TDEE calculator USA", "TDEE calculator United States", "calorie calculator pounds inches", "daily calorie calculator America", "BMR calculator US", "maintenance calories USA", "macro calculator United States", "weight loss calculator America", "how many calories should I eat per day US"],
  alternates: { canonical: "https://tdee.tech/tdee-calculator-us" },
  openGraph: {
    title: "TDEE Calculator USA – Calories in Pounds & Inches",
    description: "Free TDEE calculator for US users. Calculate your maintenance calories, BMR, BMI and macros in lbs/inches.",
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
