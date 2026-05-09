import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Protein Calculator – Daily Protein Intake Calculator",
  description: "Calculate how much protein you need daily based on your weight, activity level, and fitness goals.",
  alternates: { canonical: "https://tdee.tech/protein-calculator" },
  openGraph: {
    title: "Protein Calculator – Daily Protein Intake Calculator",
    description: "Calculate how much protein you need daily based on your weight, activity level, and fitness goals.",
    url: "https://tdee.tech/protein-calculator",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
