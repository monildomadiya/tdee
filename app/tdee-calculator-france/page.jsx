import React, { Suspense } from 'react';
import { TDEEFrance as Component } from '../tdee-calculator-us/ClientComponent';

export const metadata = {
  title: 'Calculateur TDEE France — Calories Journalières Gratuites | TDEE.TECH (2026)',
  description:
    'Calculateur TDEE gratuit pour la France. Calculez vos calories de maintenance, BMR, IMC et macros en unités métriques. Formule Mifflin-St Jeor validée scientifiquement. Sans inscription. Updated for 2026. Free to use, no signup required.',
  alternates: {
    canonical: 'https://tdee.tech/tdee-calculator-france',
    languages: { 'fr-FR': 'https://tdee.tech/tdee-calculator-france' },
  },
  openGraph: {
    title: 'Calculateur TDEE France — Calories Journalières Gratuites (2026)',
    description:
      'Calculateur TDEE gratuit pour la France. Calculez vos besoins caloriques journaliers, BMR, IMC et macros. Updated for 2026. Free to use, no signup required.',
    url: 'https://tdee.tech/tdee-calculator-france/',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png/', width: 1200, height: 630, alt: 'TDEE Calculator France – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculateur TDEE France — Calories Journalières Gratuites (2026)',
    description: 'Calculateur TDEE gratuit pour la France. Mifflin-St Jeor. Sans inscription. Updated for 2026. Free to use, no signup required.',
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
