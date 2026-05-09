import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "One Rep Max Calculator – 1RM Strength Calculator",
  description: "Calculate your one-rep maximum (1RM) for bench press, squat, deadlift, and more.",
  alternates: { canonical: "https://tdee.tech/one-rep-max-calculator" },
  openGraph: {
    title: "One Rep Max Calculator – 1RM Strength Calculator",
    description: "Calculate your one-rep maximum (1RM) for bench press, squat, deadlift, and more.",
    url: "https://tdee.tech/one-rep-max-calculator",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
