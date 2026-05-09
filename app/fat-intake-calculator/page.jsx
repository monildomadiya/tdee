import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Fat Intake Calculator – Daily Fat Intake",
  description: "Calculate your recommended daily fat intake based on your total calorie goal.",
  alternates: { canonical: "https://tdee.tech/fat-intake-calculator" },
  openGraph: {
    title: "Fat Intake Calculator – Daily Fat Intake",
    description: "Calculate your recommended daily fat intake based on your total calorie goal.",
    url: "https://tdee.tech/fat-intake-calculator",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
