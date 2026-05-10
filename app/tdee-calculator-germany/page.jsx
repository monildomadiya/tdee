import React, { Suspense } from 'react';
import { TDEEGermany as Component } from './ClientComponent';

export const metadata = {
  title: "TDEE Rechner – TDEE Calculator Germany",
  description: "Berechne deinen TDEE kostenlos. Free TDEE calculator for users in Germany.",
  alternates: { canonical: "https://tdee.tech/tdee-calculator-germany" },
  openGraph: {
    title: "TDEE Rechner – TDEE Calculator Germany",
    description: "Berechne deinen TDEE kostenlos. Free TDEE calculator for users in Germany.",
    url: "https://tdee.tech/tdee-calculator-germany",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
