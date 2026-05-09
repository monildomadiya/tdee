import React, { Suspense } from 'react';
import { privacy as Component } from './ClientComponent';

export const metadata = {
  title: "Privacy Policy – TDEE.TECH",
  description: "Read the TDEE.TECH privacy policy. We never collect or store your personal health data.",
  alternates: { canonical: "https://tdee.tech/privacy" },
  openGraph: {
    title: "Privacy Policy – TDEE.TECH",
    description: "Read the TDEE.TECH privacy policy. We never collect or store your personal health data.",
    url: "https://tdee.tech/privacy",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
