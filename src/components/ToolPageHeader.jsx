'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ALL_TOOLS, getToolCategory } from '../data/toolLinks';

export default function ToolPageHeader() {
  const pathname = usePathname();

  // Find the current tool based on pathname
  // Handle potential trailing slashes
  const normalizedPath = pathname?.replace(/\/$/, '') || '';
  const currentTool = ALL_TOOLS.find(t => t.path === normalizedPath || t.path === pathname);
  const category = currentTool ? getToolCategory(currentTool.path) : null;

  if (!currentTool || !category) return null;

  const toolName = currentTool.name;
  const url = `https://tdee.tech${currentTool.path}/`;

  // --- JSON-LD SCHEMAS ---

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tdee.tech/' },
      { '@type': 'ListItem', position: 2, name: category.label, item: 'https://tdee.tech/' },
      { '@type': 'ListItem', position: 3, name: toolName, item: url }
    ]
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: toolName,
    description: currentTool.desc || `Free online ${toolName}.`,
    url: url,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is the ${toolName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The ${toolName} is a fast, accurate, and free online tool provided by TDEE.TECH designed to calculate your results based on validated scientific formulas.`
        }
      },
      {
        '@type': 'Question',
        name: `How do I use the ${toolName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Simply enter your personal metrics into the ${toolName} and click calculate. The tool will instantly process your inputs without requiring any registration or personal data collection.`
        }
      },
      {
        '@type': 'Question',
        name: `Is the ${toolName} free and accurate?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, the ${toolName} is 100% free to use. We pride ourselves on offering science-backed formulas to ensure the highest possible accuracy for your fitness and health goals.`
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '12px 0' }}>
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#64748b' }}>
              <li>
                <Link href="/" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
              </li>
              <li>
                <span style={{ color: '#94a3b8' }}>›</span>
              </li>
              <li>
                <span style={{ color: '#475569', fontWeight: 500 }}>{category.label}</span>
              </li>
              <li>
                <span style={{ color: '#94a3b8' }}>›</span>
              </li>
              <li>
                <span style={{ color: '#64748b' }} aria-current="page">{toolName}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
}
