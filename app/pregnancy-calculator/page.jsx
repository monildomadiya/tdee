import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Pregnancy Calculator – Due Date & Week Calculator",
  description: "Calculate your pregnancy due date, current week, and trimester based on your last menstrual period.",
  alternates: { canonical: 'https://tdee.tech/pregnancy-calculator/' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Pregnancy Calculator – Due Date & Week Calculator",
    description: "Calculate your pregnancy due date, current week, and trimester based on your last menstrual period.",
    url: 'https://tdee.tech/pregnancy-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
