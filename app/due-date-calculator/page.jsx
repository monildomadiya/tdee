import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Due Date Calculator – Pregnancy Due Date",
  description: "Calculate your estimated pregnancy due date based on your last menstrual period or conception date.",
  alternates: { canonical: "https://tdee.tech/due-date-calculator" },
  openGraph: {
    title: "Due Date Calculator – Pregnancy Due Date",
    description: "Calculate your estimated pregnancy due date based on your last menstrual period or conception date.",
    url: "https://tdee.tech/due-date-calculator",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
