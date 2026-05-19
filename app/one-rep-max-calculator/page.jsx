import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "One Rep Max Calculator – 1RM Strength Calculator",
  description: "Calculate your one-rep maximum (1RM) for bench press, squat, deadlift, and more.",
  alternates: { canonical: 'https://tdee.tech/one-rep-max-calculator/' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "One Rep Max Calculator – 1RM Strength Calculator",
    description: "Calculate your one-rep maximum (1RM) for bench press, squat, deadlift, and more.",
    url: 'https://tdee.tech/one-rep-max-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
