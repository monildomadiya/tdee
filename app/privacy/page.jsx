import React, { Suspense } from 'react';
import { Privacy as Component } from './ClientComponent';

export const metadata = {
  title: "Privacy Policy – TDEE.TECH",
  description: "Read our privacy policy to understand how TDEE.TECH handles data. We prioritize your anonymity and data security.",
  alternates: { canonical: 'https://tdee.tech/privacy/' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Privacy Policy – TDEE.TECH",
    description: "Read our privacy policy to understand how TDEE.TECH handles data. We prioritize your anonymity and data security.",
    url: 'https://tdee.tech/privacy/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
