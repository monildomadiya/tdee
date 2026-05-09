import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Calories Burned Calculator – Exercise Calorie Burn",
  description: "Calculate how many calories you burn during exercise and daily activities.",
  alternates: { canonical: "https://tdee.tech/calories-burned-calculator" },
  openGraph: {
    title: "Calories Burned Calculator – Exercise Calorie Burn",
    description: "Calculate how many calories you burn during exercise and daily activities.",
    url: "https://tdee.tech/calories-burned-calculator",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
