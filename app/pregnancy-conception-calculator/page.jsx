import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Pregnancy Conception Calculator – Conception Date",
  description: "Calculate your estimated conception date based on your due date or last menstrual period.",
  alternates: { canonical: 'https://tdee.tech/pregnancy-conception-calculator/' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Pregnancy Conception Calculator – Conception Date",
    description: "Calculate your estimated conception date based on your due date or last menstrual period.",
    url: 'https://tdee.tech/pregnancy-conception-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
