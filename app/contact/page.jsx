import React, { Suspense } from 'react';
import { Contact as Component } from './ClientComponent';

export const metadata = {
  title: "Contact TDEE.TECH – Support & Feedback (2026)",
  description: "Get in touch with TDEE.TECH. We value your feedback, bug reports, and general inquiries. Updated for 2026. Free to use, no signup required.",
  alternates: { canonical: 'https://tdee.tech/contact' },
  openGraph: {
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
    title: "Contact TDEE.TECH – Support & Feedback (2026)",
    description: "Get in touch with TDEE.TECH. We value your feedback, bug reports, and general inquiries. Updated for 2026. Free to use, no signup required.",
    url: 'https://tdee.tech/contact/',
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
