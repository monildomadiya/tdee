import React, { Suspense } from 'react';
import { TDEEMexico as Component } from '../tdee-calculator-us/ClientComponent';

export const metadata = {
  title: 'Calculadora TDEE México — Calorías Diarias Gratis | TDEE.TECH',
  description:
    'Calculadora TDEE gratuita para México. Calcula tus calorías de mantenimiento, BMR, IMC y macros en sistema métrico. Ideal para perder peso o ganar músculo. Sin registro.',
  alternates: {
    canonical: 'https://tdee.tech/tdee-calculator-mexico',
    languages: { 'es-MX': 'https://tdee.tech/tdee-calculator-mexico' },
  },
  openGraph: {
    title: 'Calculadora TDEE México — Calorías Diarias Gratis',
    description:
      'Calculadora TDEE gratuita para México. Calcula tus calorías de mantenimiento, BMR, IMC y macros.',
    url: 'https://tdee.tech/tdee-calculator-mexico',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630, alt: 'TDEE Calculator México – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora TDEE México — Calorías Diarias Gratis',
    description: 'Calculadora TDEE gratuita para México. Mifflin-St Jeor. Sin registro.',
    images: ['https://tdee.tech/og-image.png'],
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
