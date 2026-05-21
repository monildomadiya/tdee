import React, { Suspense } from 'react';
import { TDEEBrazil as Component } from '../tdee-calculator-us/ClientComponent';

export const metadata = {
  title: 'Calculadora TDEE Brasil — Calorias Diárias Grátis | TDEE.TECH (2026)',
  description:
    'Calculadora TDEE gratuita para o Brasil. Calcule suas calorias de manutenção, TMB, IMC e macros em unidades métricas. Ideal para perda de peso e ganho de massa muscular. Sem cadastro. Updated for 2026. Free to use, no signup required.',
  alternates: {
    canonical: 'https://tdee.tech/tdee-calculator-brazil',
    languages: { 'pt-BR': 'https://tdee.tech/tdee-calculator-brazil' },
  },
  openGraph: {
    title: 'Calculadora TDEE Brasil — Calorias Diárias Grátis (2026)',
    description:
      'Calculadora TDEE gratuita para o Brasil. Calcule suas calorias de manutenção, TMB, IMC e macros. Updated for 2026. Free to use, no signup required.',
    url: 'https://tdee.tech/tdee-calculator-brazil/',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png/', width: 1200, height: 630, alt: 'TDEE Calculator Brasil – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora TDEE Brasil — Calorias Diárias Grátis (2026)',
    description: 'Calculadora TDEE gratuita para o Brasil. Mifflin-St Jeor. Sem cadastro. Updated for 2026. Free to use, no signup required.',
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
