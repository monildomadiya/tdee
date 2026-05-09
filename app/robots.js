/** @type {() => import('next').MetadataRoute.Robots} */
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/x-admin-settings'],
      },
    ],
    sitemap: 'https://tdee.tech/sitemap.xml',
    host: 'https://tdee.tech',
  };
}
