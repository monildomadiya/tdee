import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "GFR Calculator – Glomerular Filtration Rate",
  description: "Estimate your Glomerular Filtration Rate (GFR) to assess kidney function.",
  alternates: { canonical: "https://tdee.tech/gfr-calculator" },
  openGraph: {
    title: "GFR Calculator – Glomerular Filtration Rate",
    description: "Estimate your Glomerular Filtration Rate (GFR) to assess kidney function.",
    url: "https://tdee.tech/gfr-calculator",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
