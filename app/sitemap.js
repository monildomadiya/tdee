

export default async function sitemap() {
  const baseUrl = 'https://tdee.tech';
  const now = new Date().toISOString();

  const staticRoutes = [
    { url: '/', priority: 1.0, changeFrequency: 'daily' },
    { url: '/tdee-calculator', priority: 1.0, changeFrequency: 'weekly' },
    { url: '/intermittent-fasting-calculator', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/guess-calories-game', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/bmi-calculator', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/macro-calculator', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/bmr-calculator', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/calorie-deficit', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/calorie-calculator', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/body-fat-calculator', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/ideal-weight', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/protein-calculator', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/water-intake-calculator', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/lean-body-mass-calculator', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/army-body-fat-calculator', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/keto-macro-calculator', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/one-rep-max-calculator', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/calories-burned-calculator', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/weight-loss-timeline', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/healthy-weight-calculator', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/target-heart-rate-calculator', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/body-type-calculator', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/body-surface-area-calculator', priority: 0.6, changeFrequency: 'weekly' },
    { url: '/bac-calculator', priority: 0.6, changeFrequency: 'weekly' },
    { url: '/carbohydrate-calculator', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/fat-intake-calculator', priority: 0.6, changeFrequency: 'weekly' },
    { url: '/gfr-calculator', priority: 0.6, changeFrequency: 'weekly' },
    { url: '/pace-calculator', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/pregnancy-calculator', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/pregnancy-weight-gain-calculator', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/pregnancy-conception-calculator', priority: 0.6, changeFrequency: 'weekly' },
    { url: '/due-date-calculator', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/ovulation-calculator', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/conception-calculator', priority: 0.6, changeFrequency: 'weekly' },
    { url: '/period-calculator', priority: 0.7, changeFrequency: 'weekly' },

    // New low-competition tools
    { url: '/sleep-calculator', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/waist-to-hip-ratio-calculator', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/creatine-calculator', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/vo2-max-calculator', priority: 0.8, changeFrequency: 'weekly' },
    
    // Top-tier countries specific routing for high SEO rank
    { url: '/tdee-calculator-us', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/tdee-calculator-uk', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/tdee-calculator-canada', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/tdee-calculator-australia', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/tdee-calculator-new-zealand', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/tdee-calculator-germany', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/tdee-calculator-france', priority: 0.8, changeFrequency: 'weekly' },
    
    // Other regions
    { url: '/tdee-calculator-india', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/tdee-calculator-uae', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/tdee-calculator-nigeria', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/tdee-calculator-philippines', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/tdee-calculator-russia', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/tdee-calculator-mexico', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/tdee-calculator-brazil', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/tdee-calculator-south-africa', priority: 0.7, changeFrequency: 'weekly' },

    { url: '/about', priority: 0.5, changeFrequency: 'monthly' },
    { url: '/privacy', priority: 0.4, changeFrequency: 'monthly' },
    { url: '/terms', priority: 0.4, changeFrequency: 'monthly' },
    { url: '/disclaimer', priority: 0.4, changeFrequency: 'monthly' },
    { url: '/contact', priority: 0.5, changeFrequency: 'monthly' },
  ];

  const allRoutes = [...staticRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified || now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
