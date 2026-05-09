import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Period Calculator – Menstrual Cycle Calculator",
  description: "Calculate and predict your next period dates and menstrual cycle.",
  alternates: { canonical: "https://tdee.tech/period-calculator" },
  openGraph: {
    title: "Period Calculator – Menstrual Cycle Calculator",
    description: "Calculate and predict your next period dates and menstrual cycle.",
    url: "https://tdee.tech/period-calculator",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
