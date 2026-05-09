import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Carbohydrate Calculator – Daily Carb Intake Calculator",
  description: "Calculate your ideal daily carbohydrate intake based on your calorie goals and diet style.",
  alternates: { canonical: "https://tdee.tech/carbohydrate-calculator" },
  openGraph: {
    title: "Carbohydrate Calculator – Daily Carb Intake Calculator",
    description: "Calculate your ideal daily carbohydrate intake based on your calorie goals and diet style.",
    url: "https://tdee.tech/carbohydrate-calculator",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
