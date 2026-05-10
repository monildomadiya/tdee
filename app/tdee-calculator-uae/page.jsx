import React, { Suspense } from 'react';
import { TDEEUA as Component } from './ClientComponent';

export const metadata = {
  title: "TDEE Calculator UAE – Free Calorie Calculator",
  description: "Calculate your TDEE for users in the United Arab Emirates. Free and accurate.",
  alternates: { canonical: "https://tdee.tech/tdee-calculator-uae" },
  openGraph: {
    title: "TDEE Calculator UAE – Free Calorie Calculator",
    description: "Calculate your TDEE for users in the United Arab Emirates. Free and accurate.",
    url: "https://tdee.tech/tdee-calculator-uae",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
