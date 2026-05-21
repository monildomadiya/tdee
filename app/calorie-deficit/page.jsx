import React, { Suspense } from 'react';
import Component from './ClientComponent';

export const metadata = {
  title: "Calorie Deficit Calculator – How Many Calories to Lose Weight (2026)",
  description: "Find your ideal calorie deficit for safe, sustainable fat loss. Get a personalized calorie target to lose 0.5–1 lb per week. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/calorie-deficit' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Calorie Deficit Calculator – How Many Calories to Lose Weight (2026)",
    description: "Find your ideal calorie deficit for safe, sustainable fat loss. Get a personalized calorie target to lose 0.5–1 lb per week. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/calorie-deficit/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
