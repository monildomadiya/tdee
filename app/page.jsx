import React, { Suspense } from 'react';
import Component from './ClientComponent';
import RecentBlogs from '../src/components/RecentBlogs';
import JsonLd from '../src/components/JsonLd';

export const metadata = {
  title: 'Free Fitness & Calorie Calculators | TDEE.TECH',
  description: 'TDEE.TECH offers 38+ free science-backed fitness calculators. Calculate TDEE, BMR, BMI, macros, body fat, and more. No signup required.',
  alternates: { canonical: 'https://tdee.tech' },
  openGraph: {
    title: 'Free Fitness & Calorie Calculators | TDEE.TECH',
    description: 'TDEE.TECH offers 38+ free science-backed fitness calculators. Calculate TDEE, BMR, BMI, macros, body fat, and more. No signup required.',
    url: 'https://tdee.tech',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TDEE.TECH – Free Fitness Calculators' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Fitness & Calorie Calculators | TDEE.TECH',
    description: 'TDEE.TECH offers 38+ free science-backed fitness calculators. No signup required.',
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "TDEE.TECH",
  "url": "https://tdee.tech",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web",
  "description": "Free fitness and nutrition calculators including TDEE, BMR, BMI, and macros.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

export default function Page() {
  return (
    <section>
      <JsonLd schema={webAppSchema} />
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 my-8">Free TDEE & Fitness Calculator</h1>
      <Suspense fallback={null}>
        <Component />
      </Suspense>
      {/* Blog section rendered on server */}
      <Suspense fallback={null}>
        <RecentBlogs />
      </Suspense>
    </section>
  );
}