import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "BMI Calculator – Free Body Mass Index Calculator (2026)",
  description: "Calculate your Body Mass Index (BMI) instantly. Find out if you are underweight, healthy, overweight, or obese based on your height and weight. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/bmi-calculator' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "BMI Calculator – Free Body Mass Index Calculator (2026)",
    description: "Calculate your Body Mass Index (BMI) instantly. Find out if you are underweight, healthy, overweight, or obese based on your height and weight. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/bmi-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
