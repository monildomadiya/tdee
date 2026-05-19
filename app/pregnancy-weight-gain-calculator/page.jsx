import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Pregnancy Weight Gain Calculator – IOM Guidelines",
  description: "Track your pregnancy weight gain against IOM guidelines based on your pre-pregnancy BMI.",
  alternates: { canonical: 'https://tdee.tech/pregnancy-weight-gain-calculator/' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Pregnancy Weight Gain Calculator – IOM Guidelines",
    description: "Track your pregnancy weight gain against IOM guidelines based on your pre-pregnancy BMI.",
    url: 'https://tdee.tech/pregnancy-weight-gain-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
