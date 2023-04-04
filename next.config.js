/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:productId-:productBrand',
        destination: '/:productId/:productBrand',
      },
    ];
  }
}

module.exports = nextConfig
