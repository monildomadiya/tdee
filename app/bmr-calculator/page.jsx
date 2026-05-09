import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "BMR Calculator – Basal Metabolic Rate Calculator",
  description: "Calculate your Basal Metabolic Rate (BMR) — the calories your body burns at complete rest. Uses Mifflin-St Jeor formula.",
  alternates: { canonical: "https://tdee.tech/bmr-calculator" },
  openGraph: {
    title: "BMR Calculator – Basal Metabolic Rate Calculator",
    description: "Calculate your Basal Metabolic Rate (BMR) — the calories your body burns at complete rest. Uses Mifflin-St Jeor formula.",
    url: "https://tdee.tech/bmr-calculator",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
