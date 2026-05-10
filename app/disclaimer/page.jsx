import React, { Suspense } from 'react';
import { Disclaimer as Component } from './ClientComponent';

export const metadata = {
  title: "Medical Disclaimer – TDEE.TECH",
  description: "Important medical disclaimer regarding the use of TDEE.TECH calculations. Always consult a professional.",
  alternates: { canonical: "https://tdee.tech/disclaimer" },
  openGraph: {
    title: "Medical Disclaimer – TDEE.TECH",
    description: "Important medical disclaimer regarding the use of TDEE.TECH calculations. Always consult a professional.",
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
