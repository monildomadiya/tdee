import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Keto Macro Calculator – Ketogenic Diet Macros",
  description: "Calculate your exact keto macros (fat, protein, net carbs) to stay in ketosis. Free ketogenic diet calculator.",
  alternates: { canonical: "https://tdee.tech/keto-macro-calculator" },
  openGraph: {
    title: "Keto Macro Calculator – Ketogenic Diet Macros",
    description: "Calculate your exact keto macros (fat, protein, net carbs) to stay in ketosis. Free ketogenic diet calculator.",
    url: "https://tdee.tech/keto-macro-calculator",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
