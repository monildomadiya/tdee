import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Due Date Calculator – Pregnancy Due Date (2026)",
  description: "Calculate your estimated pregnancy due date based on your last menstrual period or conception date. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/due-date-calculator' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Due Date Calculator – Pregnancy Due Date (2026)",
    description: "Calculate your estimated pregnancy due date based on your last menstrual period or conception date. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/due-date-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
