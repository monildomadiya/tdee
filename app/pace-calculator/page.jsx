import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Pace Calculator – Running Pace & Speed Calculator",
  description: "Calculate your running pace, speed, and finish time for any distance.",
  alternates: { canonical: "https://tdee.tech/pace-calculator" },
  openGraph: {
    title: "Pace Calculator – Running Pace & Speed Calculator",
    description: "Calculate your running pace, speed, and finish time for any distance.",
    url: "https://tdee.tech/pace-calculator",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
