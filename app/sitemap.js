import { ALL_TOOLS } from '../src/data/toolLinks';

export default async function sitemap() {
  const baseUrl = 'https://tdee.tech';
  // Pin a specific last-modified date for stable URLs; update this when content changes
  const now = new Date().toISOString();

  // Create sitemap entries for all tools
  const toolRoutes = ALL_TOOLS.map(tool => {
    // Default priority based on path
    let priority = 0.8;
    if (tool.path === '/tdee-calculator') priority = 1.0;
    else if (tool.path.includes('bmi') || tool.path.includes('bmr') || tool.path.includes('macro')) priority = 0.9;
    else if (tool.path.includes('-calculator-')) priority = 0.7; // Country specific are usually high volume but lower than root

    return {
      url: `${baseUrl}${tool.path}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: priority,
    };
  });

  const staticRoutes = [
    { url: '/', priority: 1.0, changeFrequency: 'daily', lastModified: now },
    { url: '/about', priority: 0.5, changeFrequency: 'monthly', lastModified: now },
    { url: '/privacy', priority: 0.4, changeFrequency: 'monthly', lastModified: now },
    { url: '/terms', priority: 0.4, changeFrequency: 'monthly', lastModified: now },
    { url: '/disclaimer', priority: 0.4, changeFrequency: 'monthly', lastModified: now },
    { url: '/contact', priority: 0.5, changeFrequency: 'monthly', lastModified: now },
    // Top-tier country-specific routing for high SEO rank (not in ALL_TOOLS)
    { url: '/tdee-calculator-us', priority: 0.9, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-uk', priority: 0.9, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-canada', priority: 0.9, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-australia', priority: 0.9, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-new-zealand', priority: 0.8, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-germany', priority: 0.8, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-france', priority: 0.8, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-india', priority: 0.8, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-uae', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-nigeria', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-philippines', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-russia', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-mexico', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-brazil', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
    { url: '/tdee-calculator-south-africa', priority: 0.7, changeFrequency: 'weekly', lastModified: now },
  ];

  const allRoutes = [...toolRoutes, ...staticRoutes.map(route => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))];

  return allRoutes;
}
