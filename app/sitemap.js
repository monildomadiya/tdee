
export default async function sitemap() {
  const baseUrl = 'https://tdee.tech';
  // Pin a specific last-modified date for stable URLs; update this when content changes
  const now = new Date().toISOString();

  const staticRoutes = [
    { url: '/', priority: 1.0, changeFrequency: 'daily', lastModified: now },
    { url: '/tdee-calculator', priority: 1.0, changeFrequency: 'weekly', lastModified: now },
    { url: '/intermittent-fasting-calculator', priority: 0.9, changeFrequency: 'weekly', lastModified: now },
    { url: '/guess-calories-game', priority: 0.8, changeFrequency: 'weekly', lastModified: now },
    { url: '/bmi-calculator', priority: 0.9, changeFrequency: 'weekly', lastModified: now },
    { url: '/macro-calculator', priority: 0.9, changeFrequency: 'weekly', lastModified: now },
    { url: '/bmr-calculator', priority: 0.9, changeFrequency: 'weekly', lastModified: now },
    { url: '/calorie-deficit', priority: 0.9, changeFrequency: 'weekly', lastModified: now },
    { url: '/calorie-calculator', priority: 0.9, changeFrequency: 'weekly', lastModified: now },
    { url: '/body-fat-calculator', priority: 0.8, changeFrequency: 'weekly', lastModified: now },
    { url: '/ideal-weight', priority: 0.8, changeFrequency: 'weekly', lastModified: now },
    { url: '/protein-calculator', priority: 0.8, changeFrequency: 'weekly', lastModified: now },
    { url: '/water-intake-calculator', priority: 0.8, changeFrequency: 'weekly', lastModified: now },
    { url: '/lean-body-mass-calculator', priority: 0.8, changeFrequency: 'weekly', lastModified: now },
    { url: '/army-body-fat-calculator', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/keto-macro-calculator', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/one-rep-max-calculator', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/calories-burned-calculator', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/weight-loss-timeline', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/healthy-weight-calculator', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/target-heart-rate-calculator', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/body-type-calculator', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/body-surface-area-calculator', priority: 0.6, changeFrequency: 'weekly', lastModified: now },
    { url: '/bac-calculator', priority: 0.6, changeFrequency: 'weekly', lastModified: now },
    { url: '/carbohydrate-calculator', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/fat-intake-calculator', priority: 0.6, changeFrequency: 'weekly', lastModified: now },
    { url: '/gfr-calculator', priority: 0.6, changeFrequency: 'weekly', lastModified: now },
    { url: '/pace-calculator', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/pregnancy-calculator', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/pregnancy-weight-gain-calculator', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/pregnancy-conception-calculator', priority: 0.6, changeFrequency: 'weekly', lastModified: now },
    { url: '/due-date-calculator', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/ovulation-calculator', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/conception-calculator', priority: 0.6, changeFrequency: 'weekly', lastModified: now },
    { url: '/period-calculator', priority: 0.7, changeFrequency: 'weekly', lastModified: now },

    // New low-competition tools
    { url: '/sleep-calculator', priority: 0.8, changeFrequency: 'weekly', lastModified: now },
    { url: '/waist-to-hip-ratio-calculator', priority: 0.8, changeFrequency: 'weekly', lastModified: now },
    { url: '/creatine-calculator', priority: 0.8, changeFrequency: 'weekly', lastModified: now },
    { url: '/vo2-max-calculator', priority: 0.8, changeFrequency: 'weekly', lastModified: now },

    // Top-tier country-specific routing for high SEO rank
    { url: '/tdee-calculator-us', priority: 0.9, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-uk', priority: 0.9, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-canada', priority: 0.9, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-australia', priority: 0.9, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-new-zealand', priority: 0.8, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-germany', priority: 0.8, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-france', priority: 0.8, changeFrequency: 'weekly', lastModified: now },

    // Other regions
    { url: '/tdee-calculator-india', priority: 0.8, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-uae', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-nigeria', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-philippines', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-russia', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-mexico', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-brazil', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-south-africa', priority: 0.7, changeFrequency: 'weekly', lastModified: now },

    { url: '/about', priority: 0.5, changeFrequency: 'monthly', lastModified: now },
    { url: '/privacy', priority: 0.4, changeFrequency: 'monthly', lastModified: now },
    { url: '/terms', priority: 0.4, changeFrequency: 'monthly', lastModified: now },
    { url: '/disclaimer', priority: 0.4, changeFrequency: 'monthly', lastModified: now },
    { url: '/contact', priority: 0.5, changeFrequency: 'monthly', lastModified: now },
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
