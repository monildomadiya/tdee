import React, { Suspense } from 'react';
import { TDEENigeria as Component } from './ClientComponent';

export const metadata = {
  title: "TDEE Calculator Nigeria – Free Calorie Calculator",
  description: "Calculate your TDEE for users in Nigeria. Free and accurate fitness calculator.",
  alternates: { canonical: "https://tdee.tech/tdee-calculator-nigeria" },
  openGraph: {
    title: "TDEE Calculator Nigeria – Free Calorie Calculator",
    description: "Calculate your TDEE for users in Nigeria. Free and accurate fitness calculator.",
    url: "https://tdee.tech/tdee-calculator-nigeria",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
