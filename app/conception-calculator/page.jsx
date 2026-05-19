import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Conception Calculator – Estimated Conception Date",
  description: "Estimate your conception date based on your due date.",
  alternates: { canonical: 'https://tdee.tech/conception-calculator/' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Conception Calculator – Estimated Conception Date",
    description: "Estimate your conception date based on your due date.",
    url: 'https://tdee.tech/conception-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
