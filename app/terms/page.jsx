import React, { Suspense } from 'react';
import { Terms as Component } from './ClientComponent';

export const metadata = {
  title: "Terms of Service – TDEE.TECH (2026)",
  description: "Our terms of service outline the rules, regulations, and medical disclaimers for using TDEE.TECH tools. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/terms' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Terms of Service – TDEE.TECH (2026)",
    description: "Our terms of service outline the rules, regulations, and medical disclaimers for using TDEE.TECH tools. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/terms/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
