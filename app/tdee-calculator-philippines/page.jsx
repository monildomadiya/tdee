import React, { Suspense } from 'react';
import { tdeeCalculatorPhilippines as Component } from './ClientComponent';

export const metadata = {
  title: "TDEE Calculator Philippines – Free Calorie Calculator",
  description: "Calculate your TDEE for users in the Philippines. Free and accurate.",
  alternates: { canonical: "https://tdee.tech/tdee-calculator-philippines" },
  openGraph: {
    title: "TDEE Calculator Philippines – Free Calorie Calculator",
    description: "Calculate your TDEE for users in the Philippines. Free and accurate.",
    url: "https://tdee.tech/tdee-calculator-philippines",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
