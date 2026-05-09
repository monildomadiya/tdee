import React, { Suspense } from 'react';
import { disclaimer as Component } from './ClientComponent';

export const metadata = {
  title: "Medical Disclaimer – TDEE.TECH",
  description: "Read the TDEE.TECH medical disclaimer. Our calculators are for informational purposes only.",
  alternates: { canonical: "https://tdee.tech/disclaimer" },
  openGraph: {
    title: "Medical Disclaimer – TDEE.TECH",
    description: "Read the TDEE.TECH medical disclaimer. Our calculators are for informational purposes only.",
    url: "https://tdee.tech/disclaimer",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
