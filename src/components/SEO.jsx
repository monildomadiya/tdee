import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogImage = '/og-image.png',
  faqData = [], 
  toolName,
  toolDescription,
  breadcrumbs = [],
}) => {
  const siteUrl = 'https://tdee.tech';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = `${siteUrl}${ogImage}`;

  // SoftwareApplication Schema
  const softwareSchema = toolName ? {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": toolName,
    "url": fullCanonical,
    "operatingSystem": "Any",
    "applicationCategory": "HealthApplication",
    "description": toolDescription || description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "TDEE.TECH",
      "url": siteUrl
    }
  } : null;

  // FAQ Schema
  const faqSchema = faqData.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  // BreadcrumbList Schema
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl + "/" },
      ...breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        "position": i + 2,
        "name": b.name,
        "item": siteUrl + b.path
      }))
    ]
  } : null;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="TDEE.TECH" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card — must use name, NOT property */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tdeetech" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* JSON-LD Schemas */}
      {softwareSchema && (
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
      )}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
