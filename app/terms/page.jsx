import React, { Suspense } from 'react';
import { terms as Component } from './ClientComponent';

export const metadata = {
  title: "Terms of Service – TDEE.TECH",
  description: "Read the TDEE.TECH terms of service and usage conditions.",
  alternates: { canonical: "https://tdee.tech/terms" },
  openGraph: {
    title: "Terms of Service – TDEE.TECH",
    description: "Read the TDEE.TECH terms of service and usage conditions.",
    url: "https://tdee.tech/terms",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
