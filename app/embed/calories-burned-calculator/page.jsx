import React from 'react';
import Component from '../../calories-burned-calculator/ClientComponent';

export const metadata = {
  robots: { index: false, follow: true }
};

export default function EmbedPage() {
  return <Component />;
}
