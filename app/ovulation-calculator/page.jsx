import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Ovulation Calculator – Fertile Window Calculator",
  description: "Calculate your ovulation date and fertile window to maximize chances of conception.",
  alternates: { canonical: "https://tdee.tech/ovulation-calculator" },
  openGraph: {
    title: "Ovulation Calculator – Fertile Window Calculator",
    description: "Calculate your ovulation date and fertile window to maximize chances of conception.",
    url: "https://tdee.tech/ovulation-calculator",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
