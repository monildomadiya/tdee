import React, { Suspense } from 'react';
import { TDEERussia as Component } from './ClientComponent';

export const metadata = {
  title: 'Калькулятор TDEE — Расчёт Суточных Калорий | TDEE.TECH',
  description:
    'Бесплатный калькулятор TDEE для России. Рассчитайте суточную норму калорий (ккал), BMR, ИМТ и макронутриенты по формуле Миффлина–Сан Жеора. Без регистрации.',
  alternates: {
    canonical: 'https://tdee.tech/tdee-calculator-russia/',
    languages: { 'ru-RU': 'https://tdee.tech/tdee-calculator-russia' },
  },
  openGraph: {
    title: 'Калькулятор TDEE — Расчёт Суточных Калорий',
    description:
      'Бесплатный калькулятор TDEE для России. Рассчитайте суточную норму калорий, BMR, ИМТ и макронутриенты.',
    url: 'https://tdee.tech/tdee-calculator-russia/',
    type: 'website',
    images: [{ url: 'https://tdee.tech/og-image.png/', width: 1200, height: 630, alt: 'TDEE Calculator Russia – TDEE.TECH' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Калькулятор TDEE — Расчёт Суточных Калорий | TDEE.TECH',
    description: 'Бесплатный калькулятор TDEE для России. Метрическая система. Без регистрации.',
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
