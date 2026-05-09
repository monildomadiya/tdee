import React, { Suspense } from 'react';
import { about as Component } from './ClientComponent';

export const metadata = {
  title: "About TDEE.TECH – Our Mission & Formulas",
  description: "Learn about TDEE.TECH, our commitment to science-backed fitness tools, and the formulas powering our calculators.",
  alternates: { canonical: "https://tdee.tech/about" },
  openGraph: {
    title: "About TDEE.TECH – Our Mission & Formulas",
    description: "Learn about TDEE.TECH, our commitment to science-backed fitness tools, and the formulas powering our calculators.",
    url: "https://tdee.tech/about",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
