import './globals.css';
import Script from 'next/script';
import ClientWrapper from '../src/components/ClientWrapper';

export const metadata = {
  metadataBase: new URL('https://tdee.tech'),
  title: {
    default: 'Free Fitness & Calorie Calculators | TDEE.TECH',
    template: '%s | TDEE.TECH',
  },
  description: 'TDEE.TECH offers 38+ free science-backed fitness calculators. Calculate TDEE, BMR, BMI, macros, body fat, and more. No signup required.',
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
    url: 'https://tdee.tech/',
    siteName: 'TDEE.TECH',
    title: 'Free Fitness & Calorie Calculators | TDEE.TECH',
    description: 'TDEE.TECH offers 38+ free science-backed fitness calculators. Calculate TDEE, BMR, BMI, macros, body fat, and more. No signup required.',
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
    site: '@tdeetech',
    creator: '@tdeetech',
    title: 'Free Fitness & Calorie Calculators | TDEE.TECH',
    description: 'TDEE.TECH offers 38+ free science-backed fitness calculators. Calculate TDEE, BMR, BMI, macros, body fat, and more.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    other: [
      { rel: 'mask-icon', url: '/tdee-logo.svg', color: '#16a34a' },
    ],
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
      logo: {
        '@type': 'ImageObject',
        url: 'https://tdee.tech/favicon-192.png',
        width: 192,
        height: 192,
      },
      sameAs: [],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Explicit favicon links — required for Google Search favicon indexing */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/favicon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body data-gramm="false" data-grammarly-skip="true">
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6B9VVJPKVF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6B9VVJPKVF');
          `}
        </Script>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </div>
      </body>
    </html>
  );
}
