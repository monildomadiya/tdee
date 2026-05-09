import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "BAC Calculator – Blood Alcohol Content Calculator",
  description: "Estimate your Blood Alcohol Content (BAC) based on drinks consumed, body weight, and time.",
  alternates: { canonical: "https://tdee.tech/bac-calculator" },
  openGraph: {
    title: "BAC Calculator – Blood Alcohol Content Calculator",
    description: "Estimate your Blood Alcohol Content (BAC) based on drinks consumed, body weight, and time.",
    url: "https://tdee.tech/bac-calculator",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
