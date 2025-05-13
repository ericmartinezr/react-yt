import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/subscription',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
