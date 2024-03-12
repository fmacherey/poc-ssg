/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/lexikon/:character([a-z]{1,1})',
        destination: '/dict/:character',
      },
    ];
  }
};

export default nextConfig;
