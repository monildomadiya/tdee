import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Keto Macro Calculator – Ketogenic Diet Macros (2026)",
  description: "Calculate your exact keto macros (fat, protein, net carbs) to stay in ketosis. Free ketogenic diet calculator. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/keto-macro-calculator' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Keto Macro Calculator – Ketogenic Diet Macros (2026)",
    description: "Calculate your exact keto macros (fat, protein, net carbs) to stay in ketosis. Free ketogenic diet calculator. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/keto-macro-calculator/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
