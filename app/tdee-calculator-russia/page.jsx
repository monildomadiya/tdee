import React, { Suspense } from 'react';
import { tdeeCalculatorRussia as Component } from './ClientComponent';

export const metadata = {
  title: "Калькулятор TDEE – TDEE Calculator Russia",
  description: "Бесплатный онлайн калькулятор TDEE. Free TDEE calculator for users in Russia.",
  alternates: { canonical: "https://tdee.tech/tdee-calculator-russia" },
  openGraph: {
    title: "Калькулятор TDEE – TDEE Calculator Russia",
    description: "Бесплатный онлайн калькулятор TDEE. Free TDEE calculator for users in Russia.",
    url: "https://tdee.tech/tdee-calculator-russia",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
