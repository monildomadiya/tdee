import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Body Surface Area Calculator – BSA Calculation",
  description: "Calculate your Body Surface Area (BSA) using the DuBois, Mosteller, and Haycock formulas.",
  alternates: { canonical: "https://tdee.tech/body-surface-area-calculator" },
  openGraph: {
    title: "Body Surface Area Calculator – BSA Calculation",
    description: "Calculate your Body Surface Area (BSA) using the DuBois, Mosteller, and Haycock formulas.",
    url: "https://tdee.tech/body-surface-area-calculator",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
