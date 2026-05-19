import React, { Suspense } from 'react';
import { TDEEBrazil as Component } from '../tdee-calculator-us/ClientComponent';

export const metadata = {
  title: 'Calculadora TDEE Brasil — Calorias Diárias Grátis | TDEE.TECH',
  description:
    'Calculadora TDEE gratuita para o Brasil. Calcule suas calorias de manutenção, TMB, IMC e macros em unidades métricas. Ideal para perda de peso e ganho de massa muscular. Sem cadastro.',
  alternates: { canonical: 'https://tdee.tech/tdee-calculator-brazil' },
  openGraph: {
    title: 'Calculadora TDEE Brasil — Calorias Diárias Grátis',
    description:
      'Calculadora TDEE gratuita para o Brasil. Calcule suas calorias de manutenção, TMB, IMC e macros.',
    url: 'https://tdee.tech/tdee-calculator-brazil',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png', width: 1200, height: 630, alt: 'TDEE Calculator Brasil – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora TDEE Brasil — Calorias Diárias Grátis',
    description: 'Calculadora TDEE gratuita para o Brasil. Mifflin-St Jeor. Sem cadastro.',
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
