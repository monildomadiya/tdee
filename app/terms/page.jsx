import React, { Suspense } from 'react';
import { Terms as Component } from './ClientComponent';

export const metadata = {
  title: "Terms of Service – TDEE.TECH",
  description: "Our terms of service outline the rules, regulations, and medical disclaimers for using TDEE.TECH tools.",
  alternates: { canonical: "https://tdee.tech/terms" },
  openGraph: {
    title: "Terms of Service – TDEE.TECH",
    description: "Our terms of service outline the rules, regulations, and medical disclaimers for using TDEE.TECH tools.",
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
