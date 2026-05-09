import './globals.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

export const metadata = {
  metadataBase: new URL('https://tdee.tech'),
  title: {
    default: 'TDEE Calculator – Free & Accurate | TDEE.TECH',
    template: '%s | TDEE.TECH',
  },
  description: 'Calculate your TDEE, BMR, BMI, and macros instantly with the most accurate free fitness calculators online. Science-backed formulas, no signup required.',
  keywords: ['TDEE calculator', 'BMR calculator', 'macro calculator', 'BMI calculator', 'calorie calculator', 'fitness calculator', 'weight loss calculator'],
  authors: [{ name: 'TDEE.TECH' }],
  creator: 'TDEE.TECH',
  publisher: 'TDEE.TECH',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tdee.tech',
    siteName: 'TDEE.TECH',
    title: 'TDEE Calculator – Free & Accurate | TDEE.TECH',
    description: 'Calculate your TDEE, BMR, BMI, and macros instantly. Science-backed, 100% free, no signup.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TDEE.TECH – Professional Fitness Calculators',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TDEE Calculator – Free & Accurate | TDEE.TECH',
    description: 'Calculate your TDEE, BMR, BMI & macros instantly. Science-backed tools, 100% free.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://tdee.tech',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://tdee.tech/#website',
      url: 'https://tdee.tech',
      name: 'TDEE.TECH',
      description: 'Professional fitness and nutrition calculators',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: 'https://tdee.tech/tdee-calculator?q={search_term_string}' },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://tdee.tech/#organization',
      name: 'TDEE.TECH',
      url: 'https://tdee.tech',
      logo: { '@type': 'ImageObject', url: 'https://tdee.tech/tdee-logo.svg' },
      sameAs: [],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main id="main-content" tabIndex={-1} style={{ outline: 'none', flex: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
