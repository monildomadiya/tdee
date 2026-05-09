import React, { Suspense } from 'react';
import { blog as Component } from './ClientComponent';

export const metadata = {
  title: "Fitness Blog – Science-Backed Nutrition & Health Articles",
  description: "Read expert articles on TDEE, macros, fat loss, muscle gain, and evidence-based nutrition. Updated regularly.",
  alternates: { canonical: "https://tdee.tech/blog" },
  openGraph: {
    title: "Fitness Blog – Science-Backed Nutrition & Health Articles",
    description: "Read expert articles on TDEE, macros, fat loss, muscle gain, and evidence-based nutrition. Updated regularly.",
    url: "https://tdee.tech/blog",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
