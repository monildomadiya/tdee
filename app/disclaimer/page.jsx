import React, { Suspense } from 'react';
import { Disclaimer as Component } from './ClientComponent';

export const metadata = {
  title: "Medical Disclaimer – TDEE.TECH (2026)",
  description: "Important medical disclaimer regarding the use of TDEE.TECH calculations. Always consult a professional. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/disclaimer' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Medical Disclaimer – TDEE.TECH (2026)",
    description: "Important medical disclaimer regarding the use of TDEE.TECH calculations. Always consult a professional. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/disclaimer/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
