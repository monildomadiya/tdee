import React, { Suspense } from 'react';
import { TDEEMexico as Component } from '../tdee-calculator-us/ClientComponent';

export const metadata = {
  title: "TDEE Calculator México – Calculadora Calorías Diarias | TDEE.TECH",
  description: "Calculadora TDEE gratis para México. Calcula tus calorías de mantenimiento, BMR, IMC y macros en sistema métrico. Perfecta para pérdida de peso y masa muscular en México.",
  keywords: ["TDEE calculator Mexico", "calculadora calorias Mexico", "calcular calorias diarias Mexico", "BMR calculadora Mexico", "macros dieta Mexico", "bajar de peso Mexico", "calculadora metabolismo Mexico"],
  alternates: { canonical: "https://tdee.tech/tdee-calculator-mexico" },
  openGraph: {
    title: "TDEE Calculator México – Calculadora Calorías Diarias",
    description: "Calculadora TDEE gratis para México. Calcula tus calorías de mantenimiento, BMR, IMC y macros.",
    url: "https://tdee.tech/tdee-calculator-mexico",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
