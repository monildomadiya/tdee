import React from 'react';
import Component from './ClientComponent';
import JsonLd from '../../src/components/JsonLd';

export const metadata = {
  title: 'Reverse Dieting Calculator – Rebuild Your Metabolism',
  description: 'Free Reverse Dieting Calculator. Plan your week-by-week calorie increases to safely restore your metabolism and maintenance calories without gaining fat.',
  alternates: { canonical: 'https://tdee.tech/reverse-dieting-calculator' },
  openGraph: {
    title: 'Reverse Dieting Calculator – Rebuild Your Metabolism',
    description: 'Free Reverse Dieting Calculator. Plan your week-by-week calorie increases to safely restore your metabolism and maintenance calories without gaining fat.',
    url: 'https://tdee.tech/reverse-dieting-calculator',
    type: 'website',
  }
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Reverse Dieting Calculator",
  "url": "https://tdee.tech/reverse-dieting-calculator",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web",
  "description": "Calculate how many calories to add each week to reverse diet back to maintenance safely.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

export default function Page() {
  return (
    <section>
      <JsonLd schema={webAppSchema} />
      <Component />
    </section>
  );
}
