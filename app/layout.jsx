import './globals.css';
import Script from 'next/script';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import ScrollToTop from '../src/components/ScrollToTop';

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
  icons: {
    icon: [
      { url: '/icons/tdee-favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/tdee-favicon.png', type: 'image/png' },
    ],
    shortcut: '/icons/tdee-favicon.png',
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
        <link rel="icon" href="/icons/tdee-favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/icons/tdee-favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/tdee-favicon.png" />
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
      <body>
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
          <ScrollToTop />
          <Header />
          <main id="main-content" style={{ outline: 'none', flex: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
