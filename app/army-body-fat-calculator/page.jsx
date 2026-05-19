import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Army Body Fat Calculator – US Military AR 600-9",
  description: "Calculate body fat using the official US Army circumference tape test method (AR 600-9). Free and accurate.",
  alternates: { canonical: 'https://tdee.tech/army-body-fat-calculator/' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Army Body Fat Calculator – US Military AR 600-9",
    description: "Calculate body fat using the official US Army circumference tape test method (AR 600-9). Free and accurate.",
    url: 'https://tdee.tech/army-body-fat-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
