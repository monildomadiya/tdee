/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable strict mode in dev to prevent double-effect invocation
  reactStrictMode: false,

  // Compress responses
  compress: true,

  // Remove X-Powered-By header
  poweredByHeader: false,

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
