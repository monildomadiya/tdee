import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Ideal Weight Calculator – Find Your Target Body Weight",
  description: "Calculate your ideal body weight based on your height and gender using medically validated formulas.",
  alternates: { canonical: "https://tdee.tech/ideal-weight" },
  openGraph: {
    title: "Ideal Weight Calculator – Find Your Target Body Weight",
    description: "Calculate your ideal body weight based on your height and gender using medically validated formulas.",
    url: "https://tdee.tech/ideal-weight",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
