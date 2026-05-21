import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Period Calculator – Menstrual Cycle Calculator (2026)",
  description: "Calculate and predict your next period dates and menstrual cycle. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/period-calculator' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Period Calculator – Menstrual Cycle Calculator (2026)",
    description: "Calculate and predict your next period dates and menstrual cycle. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/period-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
