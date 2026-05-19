/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable strict mode in dev to prevent double-effect invocation
  reactStrictMode: false,

  // Compress responses
  compress: true,

  // Remove X-Powered-By header
  poweredByHeader: false,

  // 301 redirects for consistent URL slugs (FIX 4)
  async redirects() {
    return [
      {
        source: '/calorie-deficit-calculator',
        destination: '/calorie-deficit',
        permanent: true,
      },
      {
        source: '/ideal-weight-calculator',
        destination: '/ideal-weight',
        permanent: true,
      },
    ];
  },

  // Security + SEO headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
  },
};

module.exports = nextConfig;
