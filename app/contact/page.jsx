import React, { Suspense } from 'react';
import { contact as Component } from './ClientComponent';

export const metadata = {
  title: "Contact TDEE.TECH – Support & Feedback",
  description: "Get in touch with the TDEE.TECH team for support, feedback, or partnership inquiries.",
  alternates: { canonical: "https://tdee.tech/contact" },
  openGraph: {
    title: "Contact TDEE.TECH – Support & Feedback",
    description: "Get in touch with the TDEE.TECH team for support, feedback, or partnership inquiries.",
    url: "https://tdee.tech/contact",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
