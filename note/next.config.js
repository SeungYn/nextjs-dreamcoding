/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/deleted_forever', // 사용자가 이 페이지로 올시
        destination: '/products', // 이 페이지로 이동시킴
        permanent: true, // 영원히
      },
    ];
  },
};

module.exports = nextConfig;
