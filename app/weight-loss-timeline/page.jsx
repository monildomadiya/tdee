import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Weight Loss Timeline Calculator – How Long to Reach Goal Weight",
  description: "Calculate how long it will take to reach your goal weight based on your calorie deficit.",
  alternates: { canonical: 'https://tdee.tech/weight-loss-timeline/' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Weight Loss Timeline Calculator – How Long to Reach Goal Weight",
    description: "Calculate how long it will take to reach your goal weight based on your calorie deficit.",
    url: 'https://tdee.tech/weight-loss-timeline/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
