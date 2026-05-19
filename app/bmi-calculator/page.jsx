import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "BMI Calculator – Free Body Mass Index Calculator",
  description: "Calculate your Body Mass Index (BMI) instantly. Find out if you are underweight, healthy, overweight, or obese based on your height and weight.",
  alternates: { canonical: 'https://tdee.tech/bmi-calculator/' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "BMI Calculator – Free Body Mass Index Calculator",
    description: "Calculate your Body Mass Index (BMI) instantly. Find out if you are underweight, healthy, overweight, or obese based on your height and weight.",
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
