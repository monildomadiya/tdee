import React, { Suspense } from 'react';
import { TDEEBrazil as Component } from '../tdee-calculator-us/ClientComponent';

export const metadata = {
  title: "TDEE Calculator Brasil – Calculadora Calorias Diárias | TDEE.TECH",
  description: "Calculadora TDEE gratuita para o Brasil. Calcule suas calorias de manutenção, TMB, IMC e macros em unidades métricas. Ideal para perda de peso e ganho de massa muscular no Brasil.",
  keywords: ["TDEE calculator Brasil", "calculadora calorias Brasil", "calcular calorias diarias Brasil", "TMB calculadora Brasil", "macros dieta Brasil", "emagrecer Brasil", "calculadora metabolismo basal"],
  alternates: { canonical: "https://tdee.tech/tdee-calculator-brazil" },
  openGraph: {
    title: "TDEE Calculator Brasil – Calculadora Calorias Diárias",
    description: "Calculadora TDEE gratuita para o Brasil. Calcule suas calorias de manutenção, TMB, IMC e macros.",
    url: "https://tdee.tech/tdee-calculator-brazil",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
