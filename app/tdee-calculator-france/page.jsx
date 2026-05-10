import React, { Suspense } from 'react';
import { TDEEFrance as Component } from '../tdee-calculator-us/ClientComponent';

export const metadata = {
  title: "TDEE Calculator France – Calculateur Calories Journalières | TDEE.TECH",
  description: "Calculateur TDEE gratuit pour la France. Calculez vos calories de maintenance, BMR, IMC et macros en unités métriques. Formule Mifflin-St Jeor validée scientifiquement.",
  keywords: ["TDEE calculator France", "calculateur calories France", "calcul calories journalières France", "BMR calculator France", "macro calculator France", "perte de poids France", "calories maintenance France"],
  alternates: { canonical: "https://tdee.tech/tdee-calculator-france" },
  openGraph: {
    title: "TDEE Calculator France – Calculateur Calories Journalières",
    description: "Calculateur TDEE gratuit pour la France. Calculez vos besoins caloriques journaliers, BMR, IMC et macros.",
    url: "https://tdee.tech/tdee-calculator-france",
  },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
