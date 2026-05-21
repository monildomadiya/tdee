import React, { Suspense } from 'react';
import Component from '../../due-date-calculator/ClientComponent';

export const metadata = {
  robots: { index: false, follow: true }
};

export default function EmbedPage() {
  return <Suspense fallback={null}><Component /></Suspense>;
}
